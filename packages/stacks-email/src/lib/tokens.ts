/**
 * Color tokens used for all email component palettes, state surfaces, and links.
 */
const color = {
    bodyBackground: "#f9f8f8",
    background: "#fff",
    blockBackground: "#fff",
    accent: "#ffcc01",
    border: "#d6d9dc",
    brand: "#FF5E00",
    brandDark: "#201C1D",
    brandOffWhite: "#eeeeee",
    brandYellow: "#ffcc01",
    text: "#211d1e",
    textMuted: "#636261",
    textInvert: "#ffffff",
    textFooter: "#cdc8c2",
    link: "#2445b4",
    linkHover: "#5074ef",
    lightBlue: "#d8e1ed",
    surface: "#eee",
    invertSurface: "#4a4a4a",
} as const;

/**
 * Utility-class background color tokens (bg-[color]).
 */
const backgroundClasses = [
    { name: "brand", value: color.brand },
    { name: "invert", value: color.brandDark },
    { name: "accent", value: color.accent },
    { name: "block", value: color.blockBackground },
    { name: "page", value: color.bodyBackground },
    { name: "card", value: color.surface },
    { name: "light-blue", value: color.lightBlue },
] as const;

/**
 * Utility-class font color tokens (fc-[color]).
 */
const fontClasses = [
    { name: "text", value: color.text },
    { name: "text-muted", value: color.textMuted },
    { name: "text-invert", value: color.textInvert },
    { name: "text-footer", value: color.textFooter },
] as const;

/**
 * Shared typography tokens used by the MJML config and generated classes.
 */
const font = {
    family: "Arial, Helvetica, sans-serif",
    weightNormal: "400",
    weightSemibold: "600",
    weightBold: "700",
    eyebrowSize: "14px",
} as const;

/**
 * Body content rhythm tokens for generated HTML copy.
 */
const body = {
    paragraphMargin: "0 0 16px",
    listMargin: "0 0 16px 24px",
    listPadding: "0",
    listItemMargin: "0 0 8px",
} as const;

/**
 * Spacing tokens for layout rhythm, padding, and separation.
 */
const spacing = {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "40px",
    xxl: "56px",
} as const;

/**
 * Layout tokens for widths and global content padding.
 */
const layout = {
    maxWidth: "600px",
    containerXPadding: "24px",
    containerYPadding: "20px",
    logoWidth: "120px",
    heroImageWidth: "552px",
    socialIconSize: "20px",
    cardImageWidth: "252px",
    illustrationWidth: "552px",
} as const;

/**
 * Border tokens for shared radius and divider styles.
 */
const border = {
    radius: "1000px",
    radiusLg: "8px",
    style: `1px solid ${color.border}`,
    sectionDivider: `1px solid ${color.border}`,
} as const;

/**
 * Canonical Stack Overflow destinations used by shared email components.
 */
const links = {
    emailSettings: "https://stackoverflow.com/users/email/settings/current",
    contact: "https://stackoverflow.com/company/contact",
    privacy: "https://stackoverflow.com/legal/privacy-policy",
    social: {
        linkedin: "https://linkedin.com/company/stack-overflow/",
        x: "https://x.com/stackoverflow/",
        threads: "https://www.threads.net/@thestackoverflow",
        instagram: "https://www.instagram.com/thestackoverflow/",
        youtube: "https://www.youtube.com/c/StackOverflowOfficial",
    },
} as const;

export const tokens = {
    color: {
        ...color,
        backgroundClasses,
        fontClasses,
    },
    font,
    body,
    spacing,
    layout,
    border,
    links,
} as const;

export type Tokens = typeof tokens;

/**
 * Compile targets and token substitutions for each downstream renderer.
 */
export const targets = {
    preview: {
        tokens: {
            FIRST_NAME: "Jane",
            BUTTON_LABEL: "Learn more",
            BUTTON_URL: "https://example.com",
            LINK_URL: "https://example.com/read-more",
            PREVIEW_TEXT: "You have a new update from Stack Overflow.",
            CARD_ONE_URL: "https://example.com/story-one",
            CARD_TWO_URL: "https://example.com/story-two",
            CARD_URL: "https://example.com/card",
            FOOTER_REASON: "you subscribed to Stack Overflow updates.",
            UNSUBSCRIBE_URL: "https://example.com/unsubscribe",
            COMPANY_NAME: "Acme Corp",
        },
    },
    dotnet: {
        tokens: {
            FIRST_NAME: "@Model.FirstName",
            BUTTON_LABEL: "@Model.ButtonLabel",
            BUTTON_URL: "@Model.ButtonText",
            LINK_URL: "@Model.LinkUrl",
            PREVIEW_TEXT: "@Model.PreviewText",
            CARD_ONE_URL: "@Model.CardOneUrl",
            CARD_TWO_URL: "@Model.CardTwoUrl",
            CARD_URL: "@Model.CardUrl",
            FOOTER_REASON: "@Model.FooterReason",
            UNSUBSCRIBE_URL: "@Model.UnsubscribeUrl",
            COMPANY_NAME: "@Model.CompanyName",
        },
    },
    braze: {
        tokens: {
            FIRST_NAME: "{{${first_name}}}",
            BUTTON_LABEL: "{{custom_attribute.${cta_label}}}",
            BUTTON_URL: "{{custom_attribute.${cta_url}}}",
            LINK_URL: "{{custom_attribute.${link_url}}}",
            PREVIEW_TEXT: "{{custom_attribute.${preview_text}}}",
            CARD_ONE_URL: "{{custom_attribute.${card_one_url}}}",
            CARD_TWO_URL: "{{custom_attribute.${card_two_url}}}",
            CARD_URL: "{{custom_attribute.${card_url}}}",
            FOOTER_REASON: "{{custom_attribute.${footer_reason}}}",
            UNSUBSCRIBE_URL: "{{${unsubscribe_url}}}",
            COMPANY_NAME: "{{custom_attribute.${company_name}}}",
        },
    },
} as const;

export type CompileTarget = keyof typeof targets;

export const targetNames = Object.keys(targets) as CompileTarget[];

export const isCompileTarget = (value: string): value is CompileTarget =>
    targetNames.includes(value as CompileTarget);
