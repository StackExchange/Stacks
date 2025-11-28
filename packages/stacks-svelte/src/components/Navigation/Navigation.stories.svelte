<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
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
        IconChevronUp,
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
        IconCompose,
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
    <Navigation class="hs1" label="Dropdown">
        {#each ["Label 1", "Label 2", "Label 3"] as label (label)}
            <NavigationItem
                id={`dropdown-reference-${label}`}
                text={label}
                selected={base === label}
                onclick={() => (base = label)}
            >
                {#snippet dropdown()}
                    <Popover id={`dropdown-${label}`} placement="bottom-start">
                        <PopoverReference
                            elementId={`dropdown-reference-${label}`}
                        />
                        <PopoverContent>
                            <p>Content here</p>
                        </PopoverContent>
                    </Popover>
                {/snippet}
            </NavigationItem>
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

<Story name="Avatar" asChild>
    <Navigation class="ws2" label="Avatar" orientation="vertical">
        <NavigationItem
            text="Label 1"
            avatar="https://picsum.photos/32"
            selected={base === "Label 1"}
            onclick={() => (base = "Label 1")}
        />
        <NavigationItem
            text="Label 2"
            avatar="https://picsum.photos/32"
            selected={base === "Label 2"}
            onclick={() => (base = "Label 2")}
        />
    </Navigation>
</Story>

<Story name="Trailing" asChild>
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
                <Badge variant="new" size="sm">New</Badge>
            {/snippet}
        </NavigationItem>
        {#each groups as group (group)}
            {@const groupItems = trailingItems.filter(
                (item) => item.group === group
            )}
            {@const isCollapsed = tCollapsed[group]}
            {@const selectedItem = groupItems.find(
                (item) => tSelected === item.text
            )}
            <NavigationTitle
                title={group}
                class={`bc-black-200 bt ps-relative ${isCollapsed && !selectedItem ? "mbn24" : ""}`}
            >
                {#snippet trailing()}
                    <div class="ps-absolute r0 as-center d-flex ai-center">
                        {#if !isCollapsed && group === "Resources"}
                            <Button
                                class="p6"
                                weight="clear"
                                aria-label="Edit Section"
                            >
                                <Icon src={IconCompose} class="fc-black-400" />
                            </Button>
                        {/if}
                        {#if isCollapsed && groupItems.some((i) => i.activity)}
                            <ActivityIndicator
                                label="There is one or more activity in this section"
                            />
                        {/if}
                        <Button
                            class="p6"
                            weight="clear"
                            onclick={() =>
                                (tCollapsed[group] = !tCollapsed[group])}
                            aria-label={`${isCollapsed ? "Expand" : "Collapse"} ${group} Section`}
                        >
                            <span
                                style:display="inline-block"
                                style:transform="rotate({isCollapsed
                                    ? 180
                                    : 0}deg)"
                                style:transition="transform 0.2s ease"
                            >
                                <Icon
                                    src={IconChevronUp}
                                    class="fc-black-400"
                                />
                            </span>
                        </Button>
                    </div>
                {/snippet}
            </NavigationTitle>

            {@const selectedIndex = groupItems.findIndex(
                (item) => tSelected === item.text
            )}
            {@const itemsBefore =
                selectedIndex >= 0
                    ? groupItems.slice(0, selectedIndex)
                    : groupItems}
            {@const itemsAfter =
                selectedIndex >= 0 ? groupItems.slice(selectedIndex + 1) : []}

            {#each itemsBefore as item (item.text)}
                {#if !isCollapsed}
                    <NavigationItem
                        icon={item.icon}
                        iconSelected={item.iconSelected}
                        text={item.text}
                        onclick={() => (tSelected = item.text)}
                        animate
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
                {/if}
            {/each}
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
            {#each itemsAfter as item (item.text)}
                {#if !isCollapsed}
                    <NavigationItem
                        icon={item.icon}
                        iconSelected={item.iconSelected}
                        text={item.text}
                        onclick={() => (tSelected = item.text)}
                        animate
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
                {/if}
            {/each}
        {/each}
    </Navigation>
</Story>
