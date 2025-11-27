import { addons, useEffect } from "storybook/preview-api";

function getInitialMode() {
    // If in an iframe, check parent URL first
    if (window.parent !== window) {
        return getModeFromURL(window.parent.location.href);
    }
    return getModeFromURL(window.location.href);
}

function getModeFromURL(url: string) {
    const urlObj = new URL(url);
    const globalsParam = urlObj.searchParams.get("globals");
    if (globalsParam) {
        const globals = globalsParam.split(";").reduce(
            (acc, pair) => {
                const [key, value] = pair.split(":");
                if (key && value) {
                    acc[key] = value;
                }
                return acc;
            },
            {} as Record<string, string>
        );
        return globals.mode || "light";
    }
    return "light";
}

function applyMode(mode: string) {
    document.body.classList.remove("theme-dark", "theme-highcontrast");

    if (mode === "dark") {
        document.body.classList.add("theme-dark");
    } else if (mode === "highcontrast") {
        document.body.classList.add("theme-highcontrast");
    } else if (mode === "highcontrast-dark") {
        document.body.classList.add("theme-dark", "theme-highcontrast");
    }
}

const WithMode = (Story) => {
    const onGlobalsUpdated = (globals: { mode: string }) => {
        applyMode(globals.mode);
    };

    useEffect(() => {
        // handle initial load
        const mode = getInitialMode();
        applyMode(mode);

        // handle updates
        const channel = addons.getChannel();
        channel.on("globalsUpdated", onGlobalsUpdated);
        return () => {
            channel.off("globalsUpdated", onGlobalsUpdated);
        };
    }, []);

    return Story();
};

export default WithMode;
