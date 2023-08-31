// import { html } from "@open-wc/testing";
// import { defaultOptions, runComponentTests } from "../../test/test-utils";
// import "../../index";

// const btns = [
//     { name: "Newest", isSelected: true },
//     { name: "Frequent" },
//     { name: "Active" },
//     { name: "Bountied" },
//     { name: "Unanswered" },
// ];

// const form = (children: number[]) => `
//     <form class="mb0 p0">
//         ${children.map((child) => getBtn(btns[child])).join("")}
//     </form>
// `;

// const getBtn = ({
//     name = "",
//     isRadio,
//     isSelected,
// }: {
//     name: string;
//     isRadio?: boolean;
//     isSelected?: boolean;
// }): string => {
//     const baseClasses = "s-btn s-btn__muted s-btn__outlined";

//     return isRadio
//         ? `<input
//             class="s-btn--radio"
//             type="radio"
//             name="test-btn-radio-group"
//             id="btn-${name}"
//             ${isSelected ? "checked" : ""}/>
//             <label class="${baseClasses}" for="btn-${name}">
//                 ${name}
//             </label>`
//         : `<button
//             class="${baseClasses}${isSelected ? " is-selected" : ""}"
//             ${isSelected ? `aria-current="true"` : ""}
//             role="button">
//                 ${name}
//             </button>`;
// };

// const getBtns = (ids: number[]): string => {
//     return ids.map((id) => getBtn(btns[id])).join("");
// };

// const groups: { id: string; children: string }[] = [
//     {
//         id: "1",
//         children: getBtns([0]),
//     },
//     {
//         id: "1-form",
//         children: `${form([0])}`,
//     },
//     {
//         id: "2",
//         children: getBtns([0, 1]),
//     },
//     {
//         id: "2-form-first",
//         children: `${form([0])}${getBtns([1])}`,
//     },
//     {
//         id: "3",
//         children: getBtns([0, 1, 2]),
//     },
//     {
//         id: "3-form-first",
//         children: `${form([0])}${getBtns([1, 2])}`,
//     },
//     {
//         id: "3-form-middle",
//         children: `${getBtns([0])}${form([1])}${getBtns([2])}`,
//     },
//     {
//         id: "3-form-last",
//         children: `${getBtns([0, 1])}${form([2])}`,
//     },
//     {
//         id: "4-form-first-multi",
//         children: `${form([0, 1, 2])}${getBtns([3])}`,
//     },
//     {
//         id: "4-form-last-multi",
//         children: `${getBtns([0])}${form([1, 2, 3])}`,
//     },
// ];

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const btnGroupTemplate = ({ component, testid }: any) =>
//     html`<div
//         class="d-inline-flex ai-center jc-center p8"
//         data-testid="${testid}"
//     >
//         ${component}
//     </div>`;

// describe("button group", () => {
//     groups.forEach((group) => {
//         runComponentTests({
//             type: "visual",
//             baseClass: "s-btn-group",
//             modifiers: {
//                 global: [`btn-group-${group.id}`],
//             },
//             children: {
//                 default: group.children,
//             },
//             template: btnGroupTemplate,
//             options: {
//                 ...defaultOptions,
//                 includeNullModifier: false,
//             },
//         });
//     });

//     // s-btn-group--radio
//     runComponentTests({
//         type: "visual",
//         baseClass: "s-btn-group",
//         modifiers: {
//             primary: ["radio"],
//         },
//         children: {
//             default: btns
//                 .map((btn) => getBtn({ ...btn, isRadio: true }))
//                 .join(""),
//         },
//         template: btnGroupTemplate,
//         options: {
//             ...defaultOptions,
//             includeNullModifier: false,
//         },
//     });
// });
