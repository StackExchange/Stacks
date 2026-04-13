<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import type { Placement, Strategy } from "@floating-ui/core";
    import Popover from "./Popover.svelte";
    import PopoverCloseButton from "./PopoverCloseButton.svelte";
    import PopoverReference from "./PopoverReference.svelte";
    import PopoverContent from "./PopoverContent.svelte";
    import Button from "../Button/Button.svelte";
    import TextInput from "../TextInput/TextInput.svelte";
    import Icon from "../Icon/Icon.svelte";
    import { IconAccessibility } from "@stackoverflow/stacks-icons-legacy/icons";

    const PopoverPlacements: Placement[] = [
        "top",
        "top-start",
        "top-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
    ];

    const PopoverStrategies: Strategy[] = ["absolute", "fixed"];

    const { Story } = defineMeta({
        title: "Components/Popover",
        component: Popover,
        // @ts-expect-error: subcomponents is not typed correctly - see related issue https://github.com/storybookjs/storybook/issues/23170
        subcomponents: { PopoverReference, PopoverContent, PopoverCloseButton },
        argTypes: {
            placement: {
                control: "select",
                options: PopoverPlacements,
            },
            strategy: {
                control: "select",
                options: PopoverStrategies,
            },
        },
    });
</script>

<script lang="ts">
    let visible = $state(false);
    let lastEvent = $state("");

    const onToggle = (e: Event) => {
        const target = e.target as HTMLInputElement;
        visible = target.checked;
    };
</script>

<Story name="Base" args={{ id: "popover-base" }}>
    {#snippet template(args)}
        <div class="hmn3 d-flex flex__center">
            <Popover {...args}>
                <PopoverReference>
                    <Button>Trigger</Button>
                </PopoverReference>
                <PopoverContent>Here I am</PopoverContent>
            </Popover>
        </div>
    {/snippet}
</Story>

<Story name="Tooltip" asChild>
    <div class="d-grid grid__2 w100 ji-center py128">
        <Popover id="tooltip" tooltip>
            <PopoverReference>
                <Button>Tooltip</Button>
            </PopoverReference>
            <PopoverContent>Here I am</PopoverContent>
        </Popover>

        <Popover id="tooltip-interactive" tooltip>
            <PopoverReference>
                <Button>Tooltip Interactive</Button>
            </PopoverReference>
            <PopoverContent>
                <p>This tooltip contains a focusable element.</p>
                <Button>Some action</Button>
            </PopoverContent>
        </Popover>
    </div>
</Story>

<Story name="Autoshow" asChild>
    <div class="hmn3 d-flex flex__center">
        <Popover id="autoshow" placement="right" autoshow>
            <PopoverReference>
                <Button>Trigger</Button>
            </PopoverReference>
            <PopoverContent>Here I am</PopoverContent>
        </Popover>
    </div>
</Story>

<Story name="Placements" asChild>
    <div class="d-grid grid__2 w100 ji-center py128">
        {#each PopoverPlacements as placement (placement)}
            <div class="grid-item hmn1">
                <Popover id={placement} {placement}>
                    <PopoverReference>
                        <Button class="w128">
                            {placement}
                        </Button>
                    </PopoverReference>

                    <PopoverContent class="ws2">
                        <span class="d-flex jc-center ai-center h64">
                            {placement}
                        </span>
                    </PopoverContent>
                </Popover>
            </div>
        {/each}
    </div>
</Story>

<Story name="Strategies" asChild>
    <div class="d-grid grid__2 w100 ji-center py128">
        {#each PopoverStrategies as strategy (strategy)}
            <div>
                <h3>Strategy: {strategy}</h3>
                <div class="ws2 hs1 ba p8 overflow-scroll ps-relative">
                    <Popover id={`${strategy}-strategy`} {strategy}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod <PopoverReference>
                                <span role="button" class="s-link">
                                    {strategy} strategy
                                </span>
                            </PopoverReference> tempor incididunt ut labore et dolore
                            magna aliqua. In tellus integer feugiat scelerisque varius
                            morbi. Nisl purus in mollis nunc sed id. In metus vulputate
                            eu scelerisque felis.
                        </p>
                        <PopoverContent>Here I am</PopoverContent>
                    </Popover>
                </div>
            </div>
        {/each}
    </div>
</Story>

<Story name="Inline Reference" asChild>
    <div class="hmn3 d-flex flex__center">
        <Popover id="inline" placement="top">
            <p class="ws3">
                This is is a paragraph <PopoverReference>
                    <span role="button" class="s-link"
                        >containing a button styled as a link that wraps across
                        two lines</span
                    >
                </PopoverReference>. It shows the benefit of using floating ui
                inline middleware.
            </p>
            <PopoverContent>Here I am</PopoverContent>
        </Popover>
    </div>
</Story>

<Story name="Not Dismissible" asChild>
    <div class="hmn3 d-flex flex__center">
        <Popover id="not-dismissable" placement="right" dismissible={false}>
            <PopoverReference>
                <Button>Trigger</Button>
            </PopoverReference>
            <PopoverContent>
                Here I am<PopoverCloseButton />
            </PopoverContent>
        </Popover>
    </div>
</Story>

<Story name="Focus Trap" asChild>
    <div class="hmn3 d-flex flex__center">
        <Popover
            id="focus-trap"
            placement="right"
            dismissible={false}
            trapFocus={true}
        >
            {#snippet children({ close })}
                <PopoverReference>
                    <Button>Trigger</Button>
                </PopoverReference>
                <PopoverContent>
                    <p class="d-flex fd-column g16">
                        The focus is now trapped in the popover.
                        <TextInput size="sm" id="name" label="Name"></TextInput>
                        <TextInput size="sm" id="surname" label="Surname"
                        ></TextInput>
                        <Button type="submit" onclick={() => close()}>
                            Submit
                        </Button>
                        <PopoverCloseButton />
                    </p>
                </PopoverContent>
            {/snippet}
        </Popover>
    </div>
</Story>

<Story name="Controlled" asChild>
    <div class="hmn3 d-flex fd-column flex__center">
        <Popover id="controlled" placement="top" {visible}>
            <PopoverReference>
                <Icon src={IconAccessibility} title="Accessibility" />
            </PopoverReference>
            <PopoverContent>Controlled by external state</PopoverContent>
        </Popover>
        <div class="d-flex ai-center g8 mt24">
            <label class="s-label" for="popover-visibility-control">
                Visibility
            </label>
            <input
                class="s-toggle-switch"
                id="popover-visibility-control"
                type="checkbox"
                checked={visible}
                onclick={onToggle}
            />
        </div>
    </div>
</Story>

<Story name="External Reference" asChild>
    <div class="hmn3 d-flex flex__center fd-column">
        <p class="wmx3 pb12 ta-center">
            This API is particularly useful when the reference element is
            outside the svelte codebase<br /> (e.g. in a Razor view)
        </p>
        <button class="s-btn" id="external-reference-element">
            External Reference
        </button>
        <Popover id="external-reference" placement="bottom">
            <PopoverReference elementId="external-reference-element" />
            <PopoverContent>
                Here I am<PopoverCloseButton />
            </PopoverContent>
        </Popover>
    </div>
</Story>

<Story name="Events" asChild>
    <div class="hmn3 d-flex fd-column flex__center">
        <Popover
            id="events"
            placement="right"
            onopen={() => (lastEvent = "opened")}
            onclose={() => (lastEvent = "closed")}
        >
            {#snippet children({ visible })}
                <PopoverReference>
                    <Button>Trigger</Button>
                </PopoverReference>
                <PopoverContent>Here I am</PopoverContent>
                <p class="mt12">Visible: {visible}</p>
            {/snippet}
        </Popover>
        <p>Last Event: {lastEvent}</p>
    </div>
</Story>

<Story name="Custom Classes" asChild>
    <div class="hmn3 d-flex fd-column flex__center">
        <Popover id="custom-classes">
            <PopoverReference>
                <Button>Custom Classes</Button>
            </PopoverReference>
            <PopoverContent
                class="w-auto wmn0"
                contentClass="p0 mn0 ta-center fw-bold"
            >
                No padding<br />
                No margin
            </PopoverContent>
        </Popover>
    </div>
</Story>
