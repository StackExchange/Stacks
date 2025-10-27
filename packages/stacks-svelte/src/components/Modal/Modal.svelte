<script module lang="ts">
    export type State = "" | "danger" | "celebration";
</script>

<script lang="ts">
    import type { Snippet } from "svelte";
    import { IconClear } from "@stackoverflow/stacks-icons-legacy/icons";

    import { Button, Icon } from "../../components";
    import { clickOutside, focusTrap } from "../../actions";

    interface Props {
        /**
         * The html id attribute for the modal (required)
         */
        id: string;
        /**
         * Boolean controlling the visibility of the modal
         */
        visible?: boolean;
        /**
         * The state of the modal
         */
        state?: State;
        /**
         * Additional CSS classes added to the element
         */
        class?: string;
        /**
         * Localized translation for the close button aria label
         */
        i18nCloseButtonLabel?: string;
        /**
         * Boolean controlling whether or not the modal should close when the user clicks outside.
         * This is an escape hatch, please consider whether use of this prop is absolutely necessary!
         */
        preventCloseOnClickOutside?: boolean;
        /**
         * Boolean controlling display of the modal close button.
         * This is an escape hatch, please consider whether use of this prop is absolutely necessary!
         */
        hideCloseButton?: boolean;
        /**
         * Callback fired when the modal is closed
         */
        onclose?: () => void;
        /**
         * Content rendered in the modal header section
         */
        header?: Snippet;
        /**
         * Content rendered in the modal body section
         */
        body?: Snippet;
        /**
         * Content rendered in the modal footer section
         */
        footer?: Snippet;
    }

    let {
        id,
        visible = false,
        state = "",
        class: className = "",
        i18nCloseButtonLabel = "Close",
        preventCloseOnClickOutside = false,
        hideCloseButton = false,
        onclose,
        header,
        body,
        footer,
    }: Props = $props();

    const getClasses = (className: string) => {
        let classes = "s-modal--dialog";

        if (className) {
            classes += " " + className;
        }

        return classes;
    };
    const modalClasses = $derived(getClasses(className));

    const close = () => {
        if (visible) {
            visible = false;
            onclose?.();
        }
    };

    const keyPress = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            close();
        }
    };
</script>

<svelte:window onkeydown={keyPress} />

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
            {@render header?.()}
        </h1>
        <div id={`${id}-description`} class="s-modal--body">
            {@render body?.()}
        </div>
        {#if footer}
            <div class="d-flex g8 s-modal--footer">
                {@render footer?.()}
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
