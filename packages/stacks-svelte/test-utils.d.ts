import { type Component, type ComponentProps, type SvelteComponent } from "svelte";
declare const createRawComponent: (code: string) => Promise<typeof SvelteComponent>;
interface ComponentMeta<T extends Component> {
    component: T;
    props: ComponentProps<T>;
}
declare const createSvelteComponentsSnippet: (components: ComponentMeta<any>[]) => import("svelte").Snippet<[]>;
export { createRawComponent, createSvelteComponentsSnippet, type ComponentMeta, };
