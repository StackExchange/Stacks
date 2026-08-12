import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import {
    mkdtempSync,
    mkdirSync,
    readFileSync,
    rmSync,
    writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import { env, execPath } from "node:process";
import { fileURLToPath } from "node:url";

const packageDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const repositoryRoot = resolve(packageDirectory, "../..");
const temporaryDirectory = mkdtempSync(resolve(tmpdir(), "stacks-utils-"));
const consumerDirectory = resolve(temporaryDirectory, "consumer");

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

    for (const expectedFile of [
        "dist/index.js",
        "dist/index.d.ts",
        "dist/DateTimeFormatter.js",
        "dist/NumberFormatter.js",
        "package.json",
        "README.md",
    ]) {
        assert.ok(
            packagedFiles.has(expectedFile),
            `Missing ${expectedFile} from package`
        );
    }

    assert.ok(
        [...packagedFiles].every((path) => !path.endsWith(".test.js")),
        "Package contains compiled test files"
    );

    mkdirSync(consumerDirectory);
    writeFileSync(
        resolve(consumerDirectory, "package.json"),
        JSON.stringify({
            name: "stacks-utils-consumer",
            private: true,
            type: "module",
        })
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

    writeFileSync(
        resolve(consumerDirectory, "consumer.mjs"),
        `import assert from "node:assert/strict";
import {
    DateTimeFormatter,
    NumberFormatter,
    formatCount,
    formatTime,
} from "@stackoverflow/stacks-utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";

assert.equal(formatCount(12_345), "12.3k");
assert.equal(NumberFormatter.formatCount(-1_234), "-1,234");
assert.match(formatTime("2020-06-15T12:00:00Z"), /2020/);
assert.equal(typeof DateTimeFormatter.formatTime, "function");
dayjs.extend(relativeTime);
assert.equal(dayjs().subtract(1, "hour").fromNow(), "an hour ago");
`
    );
    run("node", ["consumer.mjs"], { cwd: consumerDirectory });

    writeFileSync(
        resolve(consumerDirectory, "consumer.ts"),
        `import {
    DateTimeFormatter,
    NumberFormatter,
    formatCount,
    formatTime,
} from "@stackoverflow/stacks-utils";

const count: string = formatCount(12_345);
const classCount: string = NumberFormatter.formatCount(12_345);
const time: string = formatTime("2020-06-15T12:00:00Z");
const classTime: string = DateTimeFormatter.formatTime("2020-06-15T12:00:00Z");

void [count, classCount, time, classTime];
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
    assert.ok(readFileSync(typescriptBin), "TypeScript is not installed");
    run(execPath, [typescriptBin, "--project", "tsconfig.json"], {
        cwd: consumerDirectory,
    });
} finally {
    rmSync(temporaryDirectory, { recursive: true, force: true });
}
