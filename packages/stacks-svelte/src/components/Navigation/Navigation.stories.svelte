<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Navigation from "./Navigation.svelte";
    import NavigationItem from "./NavigationItem.svelte";
    import NavigationTitle from "./NavigationTitle.svelte";
    import {
        IconQandA,
        IconQandAFill,
        IconTagStack,
        IconTagStackFill,
        IconUserStack,
        IconUserStackFill,
        IconSettings,
        IconSettingsFill,
    } from "@stackoverflow/stacks-icons/icons";
    const { Story } = defineMeta({
        title: "Components/Navigation",
        component: Navigation,
        // @ts-expect-error: subcomponents is not typed correctly - see related issue https://github.com/storybookjs/storybook/issues/23170
        subcomponents: { NavigationItem, NavigationTitle },
    });
    let selected = $state("Content");
</script>

<Story name="Base">
    {#snippet template()}
        <Navigation label="Global">
            <NavigationItem text="Label 1" selected />
            <NavigationItem text="Label 2" />
            <NavigationItem text="Label 3" />
        </Navigation>
    {/snippet}
</Story>

<Story name="Horizontal" asChild>
    <Navigation label="Global" orientation="horizontal">
        <NavigationItem
            icon={IconQandA}
            iconSelected={IconQandAFill}
            text="Content"
            selected={selected === "Content"}
            onclick={() => (selected = "Content")}
        />
        <NavigationItem
            icon={IconTagStack}
            iconSelected={IconTagStackFill}
            text="Topics"
            selected={selected === "Topics"}
            onclick={() => (selected = "Topics")}
        />
        <NavigationItem
            icon={IconUserStack}
            iconSelected={IconUserStackFill}
            text="People"
            selected={selected === "People"}
            onclick={() => (selected = "People")}
        />
        <NavigationItem
            icon={IconSettings}
            iconSelected={IconSettingsFill}
            text="Settings"
            dropdown
            selected={selected === "Settings"}
            onclick={() => (selected = "Settings")}
        />
    </Navigation>
</Story>

<Story name="Vertical" asChild>TODO</Story>

<Story name="Small" asChild>TODO</Story>

<Story name="Icons" asChild>TODO</Story>

<Story name="Scroll" asChild>TODO</Story>

<Story name="Dropdown" asChild>TODO</Story>

<Story name="Trailing" asChild>TODO</Story>
