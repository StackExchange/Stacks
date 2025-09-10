import beautify from "cssbeautify";
import * as less from "less";
import * as path from "path";
import * as fs from "fs";

// cssbeautify is an old package that doesn't support ES modules
const cssbeautify = beautify as (css: string) => string;

const getSubdirectories = (dirPath: string): string[] => {
    const subdirs = fs
        .readdirSync(dirPath)
        .map((file) => path.join(dirPath, file))
        .filter((path) => fs.statSync(path).isDirectory());
    return subdirs.reduce(
        (acc, subdir) => [...acc, subdir, ...getSubdirectories(subdir)],
        subdirs
    );
};

const renderLess = async (lessCode: string) => {
    const { css } = await less.render(lessCode, {
        paths: getSubdirectories(path.join(__dirname, "../")),
    });

    return cssbeautify(css);
};

export { renderLess };
