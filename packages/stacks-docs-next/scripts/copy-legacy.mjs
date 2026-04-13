// Handles legacy Eleventy site content

import fs from "fs";
import path from "path";

const site = "../stacks-docs/_site";

if (!fs.existsSync(site)) {
    console.warn("stacks-docs/_site not found, skipping legacy copy");
    process.exit(0);
}

fs.mkdirSync("static/legacy", { recursive: true });

// Copy compiled assets
fs.cpSync(`${site}/assets`, "static/legacy/assets", { recursive: true });

// Copy fragment HTML files only, preserving directory structure
fs.cpSync(site, "static/legacy/fragments", {
    recursive: true,
    filter: (src) => {
        const stat = fs.statSync(src);
        if (stat.isDirectory()) return true;
        return path.basename(src) === "fragment.html";
    },
});

// Copy legacy JS bundle
const docsJs = "../stacks-docs/assets/dist/docs.js";
if (fs.existsSync(docsJs)) {
    fs.copyFileSync(docsJs, "static/legacy/docs.js");
}

// Copy legacy llms.txt
const llms = "../stacks-docs/_site/llms.txt";
if (fs.existsSync(llms)) {
    fs.copyFileSync(llms, "static/legacy/llms.txt");
}

console.log("Legacy assets copied successfully");
