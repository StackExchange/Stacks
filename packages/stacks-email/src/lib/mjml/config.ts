import { mjmlJsonToString } from "./json";
import { tokens } from "../tokens";
import type { MjmlNode } from "../types";

const { color, layout, border } = tokens;

const font = {
    family: "Arial, Helvetica, sans-serif",
    weightNormal: "400",
    weightSemibold: "600",
    weightBold: "700",
} as const;

const attributesChildren: MjmlNode[] = [
    {
        tagName: "mj-all",
        attributes: {
            "font-family": font.family,
            "color": color.text,
            "font-size": "16px",
            "line-height": "120%",
        },
    },
    {
        tagName: "mj-body",
        attributes: {
            "width": layout.maxWidth,
            "background-color": color.background,
        },
    },
    {
        tagName: "mj-text",
        attributes: {
            padding: "0px",
        },
    },
    {
        tagName: "mj-image",
        attributes: {
            padding: "0px",
        },
    },
    {
        tagName: "mj-button",
        attributes: {
            padding: "0px",
        },
    },
    {
        tagName: "mj-table",
        attributes: {
            padding: "0px",
        },
    },
    {
        tagName: "mj-column",
        attributes: {
            padding: "0px",
        },
    },
    {
        tagName: "mj-section",
        attributes: {
            padding: "0px",
        },
    },
    {
        tagName: "mj-wrapper",
        attributes: {
            padding: "0px",
        },
    },

    // Utility classes generated from design-token arrays.
    ...color.backgroundClasses.map(({ name, value }) => ({
        tagName: "mj-class",
        attributes: {
            "name": `bg-${name}`,
            "background-color": value,
        },
    })),
    ...color.fontClasses.map(({ name, value }) => ({
        tagName: "mj-class",
        attributes: {
            name: `fc-${name}`,
            color: value,
        },
    })),

    {
        tagName: "mj-class",
        attributes: {
            "name": "s-email-text-title",
            "color": color.text,
            "font-family": "Stack Sans Notch, Arial, Helvetica, sans-serif",
            "font-size": "24px",
            "font-weight": font.weightNormal,
            "line-height": "100%",
            "padding": "0",
        },
    },
    {
        tagName: "mj-class",
        attributes: {
            "name": "s-email-text-headline",
            "color": color.text,
            "font-family": "Stack Sans Notch, Arial, Helvetica, sans-serif",
            "font-size": "36px",
            "font-weight": font.weightNormal,
            "line-height": "100%",
            "padding": "0",
        },
    },

    {
        tagName: "mj-class",
        attributes: {
            "name": "s-email-text-subtitle",
            "color": color.text,
            "font-size": "14px",
            "font-weight": font.weightBold,
            "line-height": "120%",
            "padding": "0",
        },
    },
    {
        tagName: "mj-class",
        attributes: {
            "name": "s-email-text-secondary-information",
            "color": color.textMuted,
            "font-size": "12px",
            "font-weight": font.weightNormal,
            "line-height": "120%",
            "padding": "0",
        },
    },
    {
        tagName: "mj-class",
        attributes: {
            "name": "s-email-text-body",
            "color": color.text,
            "font-size": "16px",
            "font-weight": font.weightNormal,
            "line-height": "120%",
        },
    },
    {
        tagName: "mj-class",
        attributes: {
            "name": "s-email-text-caption",
            "color": color.textMuted,
            "font-size": "14px",
            "font-weight": font.weightNormal,
            "line-height": "120%",
        },
    },
    {
        tagName: "mj-class",
        attributes: {
            "name": "s-email-text-alert",
            "color": color.text,
            "font-size": "16px",
            "font-weight": font.weightSemibold,
            "line-height": "120%",
            "padding": "0",
        },
    },

    {
        tagName: "mj-class",
        attributes: {
            "name": "button",
            "background-color": color.brandDark,
            "color": "#ffffff",
            "border-radius": border.radius,
            "font-size": "14px",
            "font-weight": font.weightBold,
            "line-height": "120%",
            "inner-padding": `12px 18px`,
        },
    },
    {
        tagName: "mj-class",
        attributes: {
            "name": "button__tonal",
            "background-color": color.brandOffWhite,
            "color": color.text,
        },
    },
    {
        tagName: "mj-class",
        attributes: {
            "name": "button__inverted",
            "background-color": color.background,
            "color": color.text,
        },
    },
];

const linkStyles = `
a.link {
    color: ${color.link};
    text-decoration: underline;
    font-size: 16px;
    line-height: normal;
    font-weight: ${font.weightNormal};
}
a.footer-link {
    color: ${color.textFooter};
    text-decoration: underline;
    font-size: 14px;
    line-height: 120%;
    margin-right: 10px;
}
`.trim();

// Head-only Progressive enhancement: hover states only apply in clients that support head CSS and :hover.
const hoverStyles = `
a.link:hover {
    color: ${color.linkHover} !important;
}
a.footer-link:hover,
a.footer-link-light:hover,
a.footer-link:hover {
    opacity: 0.85 !important;
}
.button-hover a:hover {
    background-color: #47484d !important;
    color: #fff !important;
}
.button-hover-inverted a:hover {
    background-color: ${color.brandOffWhite} !important;
}
`.trim();

export const mjmlConfigNodes: MjmlNode[] = [
    {
        tagName: "mj-font",
        attributes: {
            name: "Stack Sans Headline",
            href: "https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@400;600&display=swap",
        },
    },
    {
        tagName: "mj-font",
        attributes: {
            name: "Stack Sans Notch",
            href: "https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@400&display=swap",
        },
    },
    {
        tagName: "mj-attributes",
        children: attributesChildren,
    },
    {
        tagName: "mj-style",
        attributes: {
            inline: "inline",
        },
        content: linkStyles,
    },
    {
        tagName: "mj-style",
        content: hoverStyles,
    },
];

export const mjmlConfig = mjmlJsonToString(mjmlConfigNodes);
