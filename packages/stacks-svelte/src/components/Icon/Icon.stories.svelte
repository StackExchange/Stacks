<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { parseClassValue } from "../../storybook-utils";
    import * as Icons from "@stackoverflow/stacks-icons/icons";
    import * as Spots from "@stackoverflow/stacks-icons/spots";
    import Icon from "./Icon.svelte";

    const IconsNames = Object.keys(Icons) as Array<keyof typeof Icons>;
    const SpotsNames = Object.keys(Spots) as Array<keyof typeof Spots>;

    const { Story } = defineMeta({
        title: "Components/Icon",
        component: Icon,
        argTypes: {
            src: {
                control: "select",
                options: [...IconsNames, ...SpotsNames],
                mapping: { ...Icons, ...Spots },
            },
            class: {
                control: "text",
            },
        },
        args: {
            src: Icons.IconServiceCCPA,
        },
    });
</script>

<Story name="Base">
    {#snippet template({ class: classArg, ...args })}
        <Icon
            {...args}
            class={parseClassValue(typeof classArg === "string" ? classArg : undefined)}
        />
    {/snippet}
</Story>
<Story name="Title" args={{ src: Icons.IconServiceCCPA, title: "CCPA" }} />
<Story name="Native" args={{ src: Icons.IconServiceCCPA, native: true }} />
<Story
    name="Styles"
    args={{ src: Icons.IconServiceCCPA, class: "fc-theme-secondary-400" }}
/>

<Story name="Showcase" asChild>
    <h2 class="fs-title ff-mono ta-center mb32">
        @stackoverflow/stacks-icons/icons
    </h2>
    <div class="d-flex fw-wrap sm:fd-column g16 flex__allitems4 mb128">
        {#each IconsNames as icon (icon)}
            <div class="d-flex fd-column ai-center">
                <Icon src={Icons[icon]} native />
                <p>{icon}</p>
            </div>
        {/each}
    </div>
    <h2 class="fs-title ff-mono ta-center mb32">
        @stackoverflow/stacks-icons/spots
    </h2>
    <div class="d-flex fw-wrap sm:fd-column g16 flex__allitems4 mb128">
        {#each SpotsNames as icon (icon)}
            <div class="d-flex fd-column ai-center">
                <Icon src={Spots[icon]} native></Icon>
                <p>{icon}</p>
            </div>
        {/each}
    </div>
</Story>
