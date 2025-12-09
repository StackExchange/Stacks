// There is not easy way yet in Svelte to test directives (such as use: for actions)
// See this issue for more details: https://github.com/sveltejs/svelte/issues/14791#issuecomment-2764559383

// What follows is a suprisingly simple workaround heavily inspired by https://github.com/DockYard/svelte-inline-component
// (library that is no longer working and no longer maintained).

// We create a createRawComponent function that in combination with the svelte-inline-component plugin
// defined directly in our vite.config.ts file, allows us to create a Svelte component from a plain string
// import { createRawComponent } from "./test-utils";
// createRawComponent(`
//     <script>
//         import { clickOutside } from "$root/actions/click-outside/click-outside";
//         const { onoutclick } = $props();
//     </script>
//     <button use:clickOutside onoutclick={onoutclick}>Button</button>
// `);

import {
    createRawSnippet,
    mount,
    unmount,
    type Component,
    type ComponentProps,
    type SvelteComponent,
} from "svelte";

// we cannot use Buffer because this part runs on a browser environment
function encodeBase64(str: string): string {
    const bytes = new TextEncoder().encode(str);
    let binary = "";
    for (const b of bytes) binary += String.fromCharCode(b);
    return btoa(binary);
}

const createRawComponent = async (
    code: string
): Promise<typeof SvelteComponent> => {
    const id = `virtual:inline-svelte:${encodeBase64(code)}.svelte`;
    return import(/* @vite-ignore */ `/@id/${id}`);
};

interface ComponentMeta<T extends Component> {
    component: T;
    props: ComponentProps<T>;
}

const createSvelteComponentsSnippet = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    components: ComponentMeta<any>[]
) =>
    createRawSnippet(() => ({
        render: () => "<span></span>",
        setup: (target) => {
            const instances = components.map(({ component, props }) => {
                return mount(component, {
                    target,
                    props,
                });
            });
            return () => {
                instances.forEach((instance) => unmount(instance));
            };
        },
    }));

export {
    createRawComponent,
    createSvelteComponentsSnippet,
    type ComponentMeta,
};
