import {
    sessionFailed,
    getConfig,
} from "@web/test-runner-core/browser/session.js";

(async () => {
    const { testFile } = await getConfig();

    try {
        await import(new URL(testFile, document.baseURI).href);
    } catch (error) {
        console.error(error);
        sessionFailed(error);
    }
})();
