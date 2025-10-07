<script module lang="ts">
    export type State = "" | "danger" | "celebration";
</script>

<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { IconClear } from "@stackoverflow/stacks-icons/icons";

    import { Button, Icon } from "../../components";
    import { clickOutside, focusTrap } from "../../actions";

    /**
     * The html id attribute for the modal (required)
     * @type {string}
     */
    export let id: string;

    /**
     * Boolean controlling the visibility of the modal
     */
    export let visible = false;

    /**
     * The state of the modal
     * @type {"" | "danger" | "celebration"}
     */
    export let state: State = "";

    /**
     * Additional CSS classes added to the element
     */
    let className = "";
    export { className as class };

    /**
     * Localized translation for the close button aria label
     */
    export let i18nCloseButtonLabel = "Close";

    /**
     * Boolean controlling whether or not the modal should close when the user clicks outside.
     * This is an escape hatch, please consider whether use of this prop is absolutely necessary!
     */
    export let preventCloseOnClickOutside = false;

    /**
     * Boolean controlling display of the modal close button.
     * This is an escape hatch, please consider whether use of this prop is absolutely necessary!
     */
    export let hideCloseButton = false;

    $: modalClasses = getClasses(className);

    const getClasses = (className: string) => {
        let classes = "s-modal--dialog";

        if (className) {
            classes += " " + className;
        }

        return classes;
    };

    const dispatch = createEventDispatcher<{ close: void }>();

    const close = () => {
        if (visible) {
            visible = false;
            dispatch("close");
        }
    };

    const keyPress = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            close();
        }
    };
</script>

<svelte:window on:keydown={keyPress} />

<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
<aside
    class="s-modal"
    class:s-modal__danger={state === "danger"}
    class:s-modal__celebration={state === "celebration"}
    role="dialog"
    aria-hidden={!visible}
    aria-labelledby={`${id}-title`}
    aria-describedby={`${id}-description`}
>
    <div
        class={modalClasses}
        role="document"
        use:clickOutside
        use:focusTrap={{ active: visible }}
        onoutclick={() => !preventCloseOnClickOutside && close()}
    >
        <h1 id={`${id}-title`} class="s-modal--header">
            <!-- Content slotted in the Modal header section -->
            <slot name="header" />
        </h1>
        <div id={`${id}-description`} class="s-modal--body">
            <!-- Content slotted in the Modal body section -->
            <slot name="body" />
        </div>
        {#if $$slots.footer}
            <div class="d-flex g8 s-modal--footer">
                <!-- Content slotted in the Modal footer section -->
                <slot name="footer" />
            </div>
        {/if}
        {#if !hideCloseButton}
            <Button
                variant="muted"
                icon
                aria-label={i18nCloseButtonLabel}
                class="s-modal--close"
                onclick={close}
            >
                <Icon src={IconClear} class="modal-close" />
            </Button>
        {/if}
    </div>
</aside>
