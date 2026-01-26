// import { runVisualTests } from "../../test/visual-test-utils";
// import { html, unsafeStatic } from "@open-wc/testing";
// import {
//     IconHelp,
//     IconInfo,
//     IconCheck,
//     IconAlert,
//     IconStar,
//     IconAlertFill,
//     IconNotification,
// } from "@stackoverflow/stacks-icons/icons";
// import "../../index";

// const variantIconMap: Record<string, string> = {
//     info: IconInfo,
//     success: IconCheck,
//     warning: IconAlert,
//     danger: IconAlertFill,
//     activity: IconNotification,
//     featured: IconStar
// };

// describe("notice", () => {
//     runVisualTests({
//         baseClass: "s-notice",
//         variants: ["info", "success", "warning", "danger", "activity", "featured"],
//         modifiers: {
//             primary: ["important"],
//         },
//         attributes: {
//             role: "presentation",
//         },
//         children: {
//             default: `<span class="s-notice--icon">ICON_PLACEHOLDER</span><span>Test notice message with <code>some code</code> and <a href="#">Link</a></span>`,
//             default_longtext: `<span class="s-notice--icon">ICON_PLACEHOLDER</span><span>Test notice message with <code>some code</code> and <a href="#">Link</a> which is also really long and will surely spill over into the next line thus allowing us to test the component when it contains long text.</span>`,
//         },
//         tag: "div",
//         template: ({ component, testid }) => {
//             // Extract variant from testid
//             const variant = ["info", "success", "warning", "danger", "activity", "featured"]
//                 .find((v) => testid.includes(`-${v}-`) || testid.endsWith(`-${v}`));
//             const icon = variant ? variantIconMap[variant] : IconHelp;

//             // Get the component HTML string and replace placeholder with actual icon
//             const componentElement = component as ReturnType<typeof html>;
//             const values = (componentElement as any).values || [];
//             const strings = (componentElement as any).strings || [];

//             // Reconstruct the HTML string from the template literal
//             let htmlString = "";
//             for (let i = 0; i < strings.length; i++) {
//                 htmlString += strings[i];
//                 if (i < values.length) {
//                     htmlString += values[i];
//                 }
//             }

//             // Replace placeholder with actual icon
//             const updatedHtml = htmlString.replace(/ICON_PLACEHOLDER/g, icon);

//             // Return as unsafe HTML using unsafeStatic
//             return html`${unsafeStatic(updatedHtml)}`;
//         },
//     });
// });