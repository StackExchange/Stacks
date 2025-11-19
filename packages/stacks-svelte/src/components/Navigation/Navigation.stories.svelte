<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { slide } from "svelte/transition";
    import Navigation from "./Navigation.svelte";
    import NavigationItem from "./NavigationItem.svelte";
    import NavigationTitle from "./NavigationTitle.svelte";
    import Icon from "../Icon/Icon.svelte";
    import Button from "../Button/Button.svelte";
    import ActivityIndicator from "../ActivityIndicator/ActivityIndicator.svelte";
    import Badge from "../Badge/Badge.svelte";
    import Popover from "../Popover/Popover.svelte";
    import PopoverReference from "../Popover/PopoverReference.svelte";
    import PopoverContent from "../Popover/PopoverContent.svelte";
    import {
        IconQandA,
        IconQandAFill,
        IconTagStack,
        IconTagStackFill,
        IconUserStack,
        IconUserStackFill,
        IconSettings,
        IconSettingsFill,
        IconHome,
        IconHomeFill,
        IconJobs,
        IconJobsFill,
        IconChevron16Up,
        IconChevron16Down,
        IconQuestion,
        IconQuestionFill,
        IconChallenge,
        IconChallengeFill,
        IconTag,
        IconTagFill,
        IconChat,
        IconChatFill,
        IconCompany,
        IconCompanyFill,
        IconMeta,
        IconMetaFill,
        IconHelp,
        IconHelpFill,
        IconStar,
        IconStarFill,
    } from "@stackoverflow/stacks-icons/icons";
    const { Story } = defineMeta({
        title: "Components/Navigation",
        component: Navigation,
        // @ts-expect-error: subcomponents is not typed correctly - see related issue https://github.com/storybookjs/storybook/issues/23170
        subcomponents: { NavigationItem, NavigationTitle },
    });

    const horizontalItems = [
        {
            text: "Content",
            icon: IconQandA,
            iconSelected: IconQandAFill,
        },
        {
            text: "Topics",
            icon: IconTagStack,
            iconSelected: IconTagStackFill,
        },
        {
            text: "People",
            icon: IconUserStack,
            iconSelected: IconUserStackFill,
        },
        {
            text: "Settings",
            icon: IconSettings,
            iconSelected: IconSettingsFill,
            dropdown: true,
        },
    ];

    const verticalItems = [
        {
            text: "Home",
            icon: IconHome,
            iconSelected: IconHomeFill,
        },
        {
            text: "Jobs",
            icon: IconJobs,
            iconSelected: IconJobsFill,
        },
        {
            text: "Saves",
            icon: IconTagStack,
            iconSelected: IconTagStackFill,
        },
        {
            text: "Users",
            icon: IconUserStack,
            iconSelected: IconUserStackFill,
        },
    ];

    const trailingItems = [
        {
            text: "Questions",
            icon: IconQuestion,
            iconSelected: IconQuestionFill,
            group: "Content",
        },
        {
            text: "Tags",
            icon: IconTag,
            iconSelected: IconTagFill,
            group: "Content",
        },
        {
            text: "Challenges",
            icon: IconChallenge,
            iconSelected: IconChallengeFill,
            activity: { content: "3", label: "new challenges" },
            group: "Content",
        },
        {
            text: "Chat",
            icon: IconChat,
            iconSelected: IconChatFill,
            group: "Content",
        },
        {
            text: "Companies",
            icon: IconCompany,
            iconSelected: IconCompanyFill,
            group: "Content",
        },
        {
            text: "Jobs",
            icon: IconJobs,
            iconSelected: IconJobsFill,
            group: "Resources",
        },
        {
            text: "Saves",
            icon: IconTagStack,
            iconSelected: IconTagStackFill,
            group: "Resources",
        },
        {
            text: "Users",
            icon: IconUserStack,
            iconSelected: IconUserStackFill,
            group: "Resources",
        },
        {
            text: "Meta",
            icon: IconMeta,
            iconSelected: IconMetaFill,
            group: "Resources",
        },
        {
            text: "Help",
            icon: IconHelp,
            iconSelected: IconHelpFill,
            group: "Resources",
        },
    ];

    const groups = ["Content", "Resources"] as const;

    let base = $state("Label 1");
    let horizontal = $state("Content");
    let vertical = $state("Home");

    let tSelected = $state("Home");
    let tCollapsed = $state({
        Content: false,
        Resources: false,
    });
</script>

<Story name="Base" args={{ label: "Base" }}>
    <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
    {#snippet template({ children, ...args })}
        <Navigation {...args}>
            {#each ["Label 1", "Label 2", "Label 3"] as label (label)}
                <NavigationItem
                    text={label}
                    selected={base === label}
                    onclick={() => (base = label)}
                />
            {/each}
        </Navigation>
    {/snippet}
</Story>

<Story name="Horizontal" asChild>
    <Navigation label="Horizontal" orientation="horizontal">
        {#each horizontalItems as item (item.text)}
            <NavigationItem
                icon={item.icon}
                iconSelected={item.iconSelected}
                text={item.text}
                dropdown={item.dropdown}
                selected={horizontal === item.text}
                onclick={() => (horizontal = item.text)}
            />
        {/each}
    </Navigation>
</Story>

<Story name="Vertical" asChild>
    <Navigation class="ws2" label="Vertical" orientation="vertical">
        {#each verticalItems as item (item.text)}
            <NavigationItem
                icon={item.icon}
                iconSelected={item.iconSelected}
                text={item.text}
                selected={vertical === item.text}
                onclick={() => (vertical = item.text)}
            />
        {/each}
    </Navigation>
</Story>

<Story name="Small" asChild>
    <h3 class="fs-body1">Horizontal Small</h3>
    <Navigation class="mb32" label="Horizontal Small" size="sm">
        {#each ["Label 1", "Label 2", "Label 3"] as label (label)}
            <NavigationItem
                text={label}
                selected={base === label}
                onclick={() => (base = label)}
            />
        {/each}
    </Navigation>

    <h3 class="fs-body1">Vertical Small</h3>
    <Navigation
        class="ws2"
        label="Vertical Small"
        size="sm"
        orientation="vertical"
    >
        {#each ["Label 1", "Label 2", "Label 3"] as label (label)}
            <NavigationItem
                text={label}
                selected={base === label}
                onclick={() => (base = label)}
            />
        {/each}
    </Navigation>
</Story>

<Story name="Scroll" asChild>
    <Navigation class="ws2" label="Scroll" overflow="scroll">
        {#each ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"] as label (label)}
            <NavigationItem
                text={label}
                selected={base === label}
                onclick={() => (base = label)}
            />
        {/each}
    </Navigation>
</Story>

<Story name="Dropdown" asChild>
    <Navigation class="hs3" label="Dropdown">
        {#each ["Label 1", "Label 2", "Label 3"] as label (label)}
            <Popover id={`dropdown-${label}`} placement="bottom-start">
                <PopoverReference>
                    <NavigationItem
                        text={label}
                        selected={base === label}
                        onclick={() => (base = label)}
                        dropdown
                    />
                </PopoverReference>
                <PopoverContent>
                    <p>Content here</p>
                </PopoverContent>
            </Popover>
        {/each}
    </Navigation>
</Story>

<Story name="Titles" asChild>
    <Navigation class="ws2" label="Titles" orientation="vertical">
        <NavigationTitle title="Group 1" />
        {#each ["Label 1", "Label 2", "Label 3"] as label (label)}
            <NavigationItem
                text={label}
                selected={base === label}
                onclick={() => (base = label)}
            />
        {/each}
        <NavigationTitle title="Group 2" />
        {#each ["Label 4", "Label 5", "Label 6"] as label (label)}
            <NavigationItem
                text={label}
                selected={base === label}
                onclick={() => (base = label)}
            />
        {/each}
    </Navigation>
</Story>

<Story name="Trailing">
    <Navigation class="ws2 hs6" label="Trailing" orientation="vertical">
        <NavigationItem
            text="Home"
            icon={IconHome}
            iconSelected={IconHomeFill}
            selected={tSelected === "Home"}
            onclick={() => (tSelected = "Home")}
        />
        <NavigationItem
            text="AI Assist"
            icon={IconStar}
            iconSelected={IconStarFill}
            selected={tSelected === "AI Assist"}
            onclick={() => (tSelected = "AI Assist")}
        >
            {#snippet trailing()}
                <Badge variant="new" size="xs">New</Badge>
            {/snippet}
        </NavigationItem>
        {#each groups as group (group)}
            {@const groupItems = trailingItems.filter(
                (item) => item.group === group
            )}
            {@const isCollapsed = tCollapsed[group]}
            <NavigationTitle title={group}>
                {#snippet trailing()}
                    <Button
                        icon
                        link
                        onclick={() => (tCollapsed[group] = !tCollapsed[group])}
                    >
                        <Icon
                            src={isCollapsed
                                ? IconChevron16Down
                                : IconChevron16Up}
                            title={`${isCollapsed ? "Expand" : "Collapse"} ${group} Section`}
                        />
                    </Button>
                {/snippet}
            </NavigationTitle>

            {@const selectedItem = groupItems.find(
                (item) => tSelected === item.text
            )}
            {@const selectedIndex = groupItems.findIndex(
                (item) => tSelected === item.text
            )}
            {@const itemsBefore =
                selectedIndex >= 0
                    ? groupItems.slice(0, selectedIndex)
                    : groupItems}
            {@const itemsAfter =
                selectedIndex >= 0 ? groupItems.slice(selectedIndex + 1) : []}

            {#if !isCollapsed}
                <div transition:slide>
                    {#each itemsBefore as item (item.text)}
                        <NavigationItem
                            icon={item.icon}
                            iconSelected={item.iconSelected}
                            text={item.text}
                            onclick={() => (tSelected = item.text)}
                        >
                            {#snippet trailing()}
                                {#if item.activity}
                                    <ActivityIndicator
                                        content={item.activity.content}
                                        label={item.activity.label}
                                    />
                                {/if}
                            {/snippet}
                        </NavigationItem>
                    {/each}
                </div>
            {/if}
            {#if selectedItem}
                <NavigationItem
                    icon={selectedItem.icon}
                    iconSelected={selectedItem.iconSelected}
                    text={selectedItem.text}
                    selected
                    onclick={() => (tSelected = selectedItem.text)}
                >
                    {#snippet trailing()}
                        {#if selectedItem.activity}
                            <ActivityIndicator
                                content={selectedItem.activity.content}
                                label={selectedItem.activity.label}
                            />
                        {/if}
                    {/snippet}
                </NavigationItem>
            {/if}
            {#if !isCollapsed}
                <div transition:slide>
                    {#each itemsAfter as item (item.text)}
                        <NavigationItem
                            icon={item.icon}
                            iconSelected={item.iconSelected}
                            text={item.text}
                            onclick={() => (tSelected = item.text)}
                        >
                            {#snippet trailing()}
                                {#if item.activity}
                                    <ActivityIndicator
                                        content={item.activity.content}
                                        label={item.activity.label}
                                    />
                                {/if}
                            {/snippet}
                        </NavigationItem>
                    {/each}
                </div>
            {/if}
        {/each}
    </Navigation>
</Story>
