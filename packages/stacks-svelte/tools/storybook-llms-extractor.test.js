import { describe, test } from "node:test";
import assert from "node:assert";
import {
    cleanJSDoc,
    cleanType,
    groupStoriesByComponent,
    extractPropsFromInterface,
    extractPropsFromExports,
    extractStoryExamples,
    parseArgsTable,
} from "./storybook-llms-extractor.js";

describe("Storybook LLM Extractor", () => {
    describe("cleanJSDoc", () => {
        test("should remove JSDoc asterisks and trim whitespace", () => {
            const input = `
 * This is a description
 * with multiple lines
 * @param something
 * and more text`;

            const result = cleanJSDoc(input);
            assert.strictEqual(
                result,
                "This is a description with multiple lines and more text"
            );
        });

        test("should filter out @tags", () => {
            const input = `
 * Component description
 * @param name - The name
 * @returns void`;

            const result = cleanJSDoc(input);
            assert.strictEqual(result, "Component description");
        });
    });

    describe("cleanType", () => {
        test("should normalize whitespace in types", () => {
            assert.strictEqual(
                cleanType("string  |  number"),
                "string | number"
            );
            assert.strictEqual(cleanType("  boolean  "), "boolean");
        });

        test('should remove "| undefined" suffix', () => {
            assert.strictEqual(cleanType("string | undefined"), "string");
            assert.strictEqual(
                cleanType("number | boolean | undefined"),
                "number | boolean"
            );
        });
    });

    describe("groupStoriesByComponent", () => {
        test("should group stories by title", () => {
            const entries = {
                "comp-button--docs": {
                    title: "Components/Button",
                    type: "docs",
                    id: "components-button--docs",
                    importPath: "./Button.stories.svelte",
                },
                "comp-button--base": {
                    title: "Components/Button",
                    type: "story",
                    id: "components-button--base",
                    name: "Base",
                    importPath: "./Button.stories.svelte",
                },
                "comp-button--variants": {
                    title: "Components/Button",
                    type: "story",
                    id: "components-button--variants",
                    name: "Variants",
                    importPath: "./Button.stories.svelte",
                },
            };

            const result = groupStoriesByComponent(entries);

            assert.strictEqual(result.length, 1);
            assert.strictEqual(result[0].title, "Components/Button");
            assert.strictEqual(result[0].docs.id, "components-button--docs");
            assert.strictEqual(result[0].stories.length, 2);
            assert.strictEqual(result[0].stories[0].name, "Base");
            assert.strictEqual(result[0].stories[1].name, "Variants");
        });

        test("should handle multiple components", () => {
            const entries = {
                "comp-button--docs": {
                    title: "Components/Button",
                    type: "docs",
                    id: "components-button--docs",
                },
                "comp-avatar--docs": {
                    title: "Components/Avatar",
                    type: "docs",
                    id: "components-avatar--docs",
                },
                "comp-button--base": {
                    title: "Components/Button",
                    type: "story",
                    id: "components-button--base",
                    name: "Base",
                },
            };

            const result = groupStoriesByComponent(entries);

            assert.strictEqual(result.length, 2);
            assert.strictEqual(result[0].title, "Components/Button");
            assert.strictEqual(result[1].title, "Components/Avatar");
        });
    });

    describe("extractPropsFromInterface", () => {
        test("should extract props from interface", () => {
            const content = `
interface Props {
    /**
     * The button label
     */
    label: string;
    /** Size of button */
    size?: 'sm' | 'md' | 'lg';
    onClick: () => void;
}`;

            const result = extractPropsFromInterface(content);

            assert.strictEqual(result.length, 3);
            assert.strictEqual(result[0].name, "label");
            assert.strictEqual(result[0].type, "string");
            assert.strictEqual(result[0].description, "The button label");

            assert.strictEqual(result[1].name, "size");
            assert.strictEqual(result[1].type, "'sm' | 'md' | 'lg'");
            assert.strictEqual(result[1].description, "Size of button");

            assert.strictEqual(result[2].name, "onClick");
            assert.strictEqual(result[2].type, "() => void");
        });

        test("should handle export interface", () => {
            const content = `export interface Props { name: string; }`;
            const result = extractPropsFromInterface(content);

            assert.strictEqual(result.length, 1);
            assert.strictEqual(result[0].name, "name");
            assert.strictEqual(result[0].type, "string");
        });

        test("should return empty array when no interface found", () => {
            const content = `const something = 'value';`;
            const result = extractPropsFromInterface(content);

            assert.strictEqual(result.length, 0);
        });
    });

    describe("extractPropsFromExports", () => {
        test("should extract export let props", () => {
            const content = `
/**
 * The label text
 */
export let label: string;

/** Button size */
export let size: 'sm' | 'md' = 'md';

export let disabled: boolean;
`;

            const result = extractPropsFromExports(content);

            assert.strictEqual(result.length, 3);
            assert.strictEqual(result[0].name, "label");
            assert.strictEqual(result[0].type, "string");
            assert.strictEqual(result[0].description, "The label text");

            assert.strictEqual(result[1].name, "size");
            assert.strictEqual(result[1].description, "Button size");

            assert.strictEqual(result[2].name, "disabled");
            assert.strictEqual(result[2].type, "boolean");
        });

        test("should handle export as pattern", () => {
            const content = `
/**
 * CSS classes
 */
let className = "";
export { className as class };
`;

            const result = extractPropsFromExports(content);

            assert.strictEqual(result.length, 1);
            assert.strictEqual(result[0].name, "class");
            assert.strictEqual(result[0].type, "string");
            assert.strictEqual(result[0].description, "CSS classes");
        });

        test("should handle props without types", () => {
            const content = `export let value;`;
            const result = extractPropsFromExports(content);

            assert.strictEqual(result.length, 1);
            assert.strictEqual(result[0].name, "value");
            assert.strictEqual(result[0].type, "any");
        });
    });

    describe("extractStoryExamples", () => {
        test("should extract story with snippet", () => {
            const content = `
<Story name="Base">
    {#snippet template({ children, ...args })}
        <Button {...args}>{children ?? "Click me"}</Button>
    {/snippet}
</Story>
`;

            const result = extractStoryExamples(content);

            assert.strictEqual(result.length, 1);
            assert.strictEqual(result[0].name, "Base");
            assert.strictEqual(result[0].code, "<Button >Click me</Button>");
        });

        test("should extract story without snippet", () => {
            const content = `
<Story name="Simple">
    <Button variant="primary">Click here</Button>
</Story>
`;

            const result = extractStoryExamples(content);

            assert.strictEqual(result.length, 1);
            assert.strictEqual(result[0].name, "Simple");
            assert.strictEqual(
                result[0].code,
                '<Button variant="primary">Click here</Button>'
            );
        });

        test("should skip stories with tables", () => {
            const content = `
<Story name="Table">
    <table>
        <tr><td>Data</td></tr>
    </table>
</Story>
<Story name="Loop">
    {#each items as item}
        <div>{item}</div>
    {/each}
</Story>
`;

            const result = extractStoryExamples(content);

            assert.strictEqual(result.length, 0);
        });

        test("should extract all valid examples", () => {
            const content = `
<Story name="One"><Button variant="primary">Click me button one</Button></Story>
<Story name="Two"><Button variant="secondary">Click me button two</Button></Story>
<Story name="Three"><Button variant="tertiary">Click me button three</Button></Story>
`;

            const result = extractStoryExamples(content);

            assert.strictEqual(result.length, 3);
            assert.strictEqual(result[0].name, "One");
            assert.strictEqual(result[1].name, "Two");
            assert.strictEqual(result[2].name, "Three");
        });

        test("should skip examples that are too short", () => {
            const content = `
<Story name="TooShort"><div>x</div></Story>
<Story name="Valid"><Button>Long enough content here</Button></Story>
`;

            const result = extractStoryExamples(content);

            assert.strictEqual(result.length, 1);
            assert.strictEqual(result[0].name, "Valid");
        });

        test("should extract examples from self-closing Story with args", () => {
            const content = `
import { defineMeta } from "@storybook/addon-svelte-csf";
import Avatar from "./Avatar.svelte";

const { Story } = defineMeta({
    title: "Components/Avatar",
    component: Avatar,
});

<Story
    name="Base"
    args={{ name: "example", src: "https://picsum.photos/128" }}
/>
`;

            const result = extractStoryExamples(content);

            assert.strictEqual(result.length, 1);
            assert.strictEqual(result[0].name, "Base");
            assert.strictEqual(
                result[0].code,
                '<Avatar name="example" src="https://picsum.photos/128" />'
            );
        });

        test("should handle numeric and boolean args", () => {
            const content = `
import { defineMeta } from "@storybook/addon-svelte-csf";
import Button from "./Button.svelte";

const { Story } = defineMeta({
    component: Button,
});

<Story
    name="Example"
    args={{ label: "Click me", size: 64, disabled: true, hidden: false }}
/>
`;

            const result = extractStoryExamples(content);

            assert.strictEqual(result.length, 1);
            assert.strictEqual(
                result[0].code,
                '<Button label="Click me" size={64} disabled />'
            );
        });

        test("should extract both args-based and content-based stories", () => {
            const content = `
import { defineMeta } from "@storybook/addon-svelte-csf";
import Avatar from "./Avatar.svelte";

const { Story } = defineMeta({
    component: Avatar,
});

<Story name="Base" args={{ name: "example", src: "test.jpg" }} />

<Story name="Custom">
    <Avatar name="custom" src="custom.jpg" class="custom-class" />
</Story>
`;

            const result = extractStoryExamples(content);

            assert.strictEqual(result.length, 2);
            assert.strictEqual(result[0].name, "Base");
            assert.strictEqual(
                result[0].code,
                '<Avatar name="example" src="test.jpg" />'
            );
            assert.strictEqual(result[1].name, "Custom");
            assert(result[1].code.includes("custom-class"));
        });

        test("should skip self-closing Story without component name", () => {
            const content = `
<Story name="Test" args={{ name: "example" }} />
`;

            const result = extractStoryExamples(content);

            assert.strictEqual(result.length, 0);
        });
    });

    describe("parseArgsTable", () => {
        test("should parse MDX args table", () => {
            const argsContent = `
                placement: { name: 'placement', type: { name: 'string' }, description: 'Position of popover' },
                show: { name: 'show', type: { name: 'boolean' }, defaultValue: { summary: 'false' } }
            `;

            const result = parseArgsTable(argsContent);

            assert.strictEqual(result.length, 2);
            assert.strictEqual(result[0].name, "placement");
            assert.strictEqual(result[0].type, "string");
            assert.strictEqual(result[0].description, "Position of popover");

            assert.strictEqual(result[1].name, "show");
            assert.strictEqual(result[1].type, "boolean");
            assert.strictEqual(result[1].description, "Default: false");
        });

        test("should handle enum values", () => {
            const argsContent = `
                size: {
                    name: 'size',
                    type: { name: 'enum', value: ['sm', 'md', 'lg'] },
                    description: 'Size variant'
                }
            `;

            const result = parseArgsTable(argsContent);

            assert.strictEqual(result.length, 1);
            assert.strictEqual(result[0].name, "size");
            assert.strictEqual(result[0].type, "sm \\| md \\| lg");
            assert.strictEqual(result[0].description, "Size variant");
        });

        test("should mark required props", () => {
            const argsContent = `
                name: { name: 'name', type: { name: 'string' }, required: true }
            `;

            const result = parseArgsTable(argsContent);

            assert.strictEqual(result.length, 1);
            assert.strictEqual(result[0].name, "name");
            assert.strictEqual(result[0].type, "string (required)");
        });

        test("should combine description and default value", () => {
            const argsContent = `
                size: {
                    name: 'size',
                    type: { name: 'string' },
                    description: 'Button size',
                    defaultValue: { summary: 'md' }
                }
            `;

            const result = parseArgsTable(argsContent);

            assert.strictEqual(result.length, 1);
            assert.strictEqual(
                result[0].description,
                "Button size (default: md)"
            );
        });

        test("should handle nested braces in values", () => {
            const argsContent = `
                prop1: { name: 'prop1', type: { name: 'object', value: { nested: 'value' } } },
                prop2: { name: 'prop2', type: { name: 'string' } }
            `;

            const result = parseArgsTable(argsContent);

            assert.strictEqual(result.length, 2);
            assert.strictEqual(result[0].name, "prop1");
            assert.strictEqual(result[1].name, "prop2");
        });
    });
});
