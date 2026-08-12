import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import {
    existsSync,
    mkdtempSync,
    mkdirSync,
    readFileSync,
    realpathSync,
    rmSync,
    writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import { env, execPath } from "node:process";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const packageDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const repositoryRoot = resolve(packageDirectory, "../..");
const temporaryDirectory = mkdtempSync(resolve(tmpdir(), "stacks-classic-"));
const consumerDirectory = resolve(temporaryDirectory, "consumer");
let browser;

function run(command, args, options = {}) {
    return execFileSync(command, args, {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "inherit"],
        ...options,
    });
}

function runNpm(args, options = {}) {
    assert.ok(env.npm_execpath, "Run this test through npm run test:package");
    return run(execPath, [env.npm_execpath, ...args], options);
}

try {
    const packResult = JSON.parse(
        runNpm(["pack", "--json", "--pack-destination", temporaryDirectory], {
            cwd: packageDirectory,
        })
    )[0];
    const packagedFiles = new Set(packResult.files.map(({ path }) => path));
    const expectedFiles = [
        "dist/css/stacks.css",
        "dist/css/stacks.min.css",
        "dist/js/stacks.js",
        "dist/js/stacks.min.js",
        "dist/index.d.ts",
        "lib/stacks.less",
        "package.json",
        "README.md",
    ];

    for (const expectedFile of expectedFiles) {
        assert.ok(
            packagedFiles.has(expectedFile),
            `Missing ${expectedFile} from package`
        );
    }

    assert.ok(
        [...packagedFiles].every((path) => !path.includes(".test.")),
        "Package contains test files"
    );

    mkdirSync(consumerDirectory);
    writeFileSync(
        resolve(consumerDirectory, "package.json"),
        JSON.stringify({ name: "stacks-classic-consumer", private: true })
    );

    const tarballPath = resolve(temporaryDirectory, packResult.filename);
    runNpm(
        [
            "install",
            "--ignore-scripts",
            "--no-audit",
            "--no-fund",
            "--no-package-lock",
            tarballPath,
        ],
        { cwd: consumerDirectory }
    );

    const installedPackageDirectory = resolve(
        consumerDirectory,
        "node_modules/@stackoverflow/stacks"
    );
    const manifest = JSON.parse(
        readFileSync(resolve(installedPackageDirectory, "package.json"), "utf8")
    );
    const publicEntries = {
        main: "./dist/js/stacks.js",
        types: "./dist/index.d.ts",
        style: "./dist/css/stacks.css",
        less: "./lib/stacks.less",
        unpkg: "dist/css/stacks.min.css",
    };

    for (const [field, expectedPath] of Object.entries(publicEntries)) {
        assert.equal(
            manifest[field],
            expectedPath,
            `Unexpected ${field} entry`
        );
        assert.ok(
            existsSync(resolve(installedPackageDirectory, expectedPath)),
            `${field} entry does not resolve to a packaged file`
        );
    }

    const require = createRequire(resolve(consumerDirectory, "package.json"));
    assert.equal(
        realpathSync(require.resolve("@stackoverflow/stacks")),
        realpathSync(resolve(installedPackageDirectory, "dist/js/stacks.js"))
    );

    for (const assetPath of [
        "dist/css/stacks.css",
        "dist/css/stacks.min.css",
        "dist/js/stacks.js",
        "dist/js/stacks.min.js",
    ]) {
        assert.ok(
            readFileSync(resolve(installedPackageDirectory, assetPath)).length >
                1000,
            `${assetPath} is unexpectedly empty`
        );
    }

    browser = await chromium.launch({ headless: true });
    for (const bundlePath of ["dist/js/stacks.js", "dist/js/stacks.min.js"]) {
        const page = await browser.newPage();
        let pageError;
        page.on("pageerror", (error) => {
            pageError = error;
        });
        await page.setContent("<!doctype html><html><body></body></html>");
        await page.addScriptTag({
            path: resolve(installedPackageDirectory, bundlePath),
        });

        assert.ifError(pageError);
        const exports = await page.evaluate(() =>
            Object.keys(window.Stacks ?? {})
        );
        assert.ok(
            exports.includes("application"),
            `${bundlePath} did not initialize`
        );
        assert.ok(
            exports.includes("showModal"),
            `${bundlePath} is missing helpers`
        );
        await page.close();
    }

    writeFileSync(
        resolve(consumerDirectory, "consumer.ts"),
        `import type {
    ControllerDefinition,
    StacksController,
} from "@stackoverflow/stacks";

declare const controller: ControllerDefinition;
declare const controllerInstance: StacksController;
void [controller, controllerInstance];
`
    );
    writeFileSync(
        resolve(consumerDirectory, "tsconfig.json"),
        JSON.stringify({
            compilerOptions: {
                module: "NodeNext",
                moduleResolution: "NodeNext",
                noEmit: true,
                strict: true,
                target: "ES2022",
            },
            include: ["consumer.ts"],
        })
    );

    const typescriptBin = resolve(
        repositoryRoot,
        "node_modules/typescript/bin/tsc"
    );
    assert.ok(existsSync(typescriptBin), "TypeScript is not installed");
    run(execPath, [typescriptBin, "--project", "tsconfig.json"], {
        cwd: consumerDirectory,
    });

    const lessInput = resolve(consumerDirectory, "consumer.less");
    const lessOutput = resolve(consumerDirectory, "consumer.css");
    writeFileSync(
        lessInput,
        '@import "node_modules/@stackoverflow/stacks/lib/stacks.less";\n'
    );

    const lessBin = resolve(repositoryRoot, "node_modules/less/bin/lessc");
    assert.ok(existsSync(lessBin), "Less is not installed");
    run(execPath, [lessBin, lessInput, lessOutput], { cwd: consumerDirectory });
    assert.match(readFileSync(lessOutput, "utf8"), /\.s-btn/);
} finally {
    await browser?.close();
    rmSync(temporaryDirectory, { recursive: true, force: true });
}
