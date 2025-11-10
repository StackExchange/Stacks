<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Modal, { type State } from "./Modal.svelte";
    import { Button } from "../../components";

    const ModalState: State[] = ["", "danger", "celebration"];

    const { Story } = defineMeta({
        title: "Components/Modal",
        component: Modal,
        argTypes: {
            state: {
                control: "select",
                options: ModalState,
            },
        },
    });
</script>

<script lang="ts">
    let mstate = $state<State>("");
    let visible = $state(false);
</script>

<Story name="Base" args={{ id: "base-modal" }}>
    {#snippet template(args)}
        <div class="hmn4">
            <Button
                variant={args.state === "danger" ? "danger" : ""}
                weight="filled"
                onclick={() => (visible = true)}
            >
                Show Modal
            </Button>
        </div>
        <Modal
            id={args.id}
            visible={visible || args.visible}
            state={args.state}
            class={args.class}
            onclose={() => (visible = false)}
            preventCloseOnClickOutside={args.preventCloseOnClickOutside}
            hideCloseButton={args.hideCloseButton}
        >
            {#snippet header()}
                Modal Header
            {/snippet}
            {#snippet body()}
                <p>
                    Nullam ornare lectus vitae lacus sagittis, at sodales leo
                    viverra. Suspendisse nec dignissim elit varius tempus. Cras
                    viverra neque at imperdiet vehicula. Curabitur condimentum
                    id dolor vitae ultrices. Pellentesque scelerisque nunc sit
                    amet leo fringilla. Etiam feugiat imperdiet mi, eu blandit
                    arcu cursus a.
                </p>
            {/snippet}
            {#snippet footer()}
                <Button
                    variant={args.state === "danger" ? "danger" : ""}
                    weight="filled"
                >
                    Save changes
                </Button>
                <Button
                    variant={args.state === "danger" ? "tonal" : ""}
                    onclick={() => (visible = false)}
                >
                    Cancel
                </Button>
            {/snippet}
        </Modal>
    {/snippet}
</Story>

<Story name="States" asChild>
    <div class="hmn4">
        <div class="d-flex g8">
            <Button
                weight="filled"
                onclick={() => {
                    visible = true;
                    mstate = "";
                }}
            >
                Default
            </Button>
            <Button
                variant="danger"
                weight="filled"
                onclick={() => {
                    visible = true;
                    mstate = "danger";
                }}
            >
                Danger
            </Button>
            <Button
                weight="filled"
                onclick={() => {
                    visible = true;
                    mstate = "celebration";
                }}
            >
                Celebration
            </Button>
        </div>
    </div>

    <Modal
        id="states"
        {visible}
        state={mstate}
        onclose={() => (visible = false)}
    >
        {#snippet header()}
            Modal Header
        {/snippet}
        {#snippet body()}
            <p>
                Nullam ornare lectus vitae lacus sagittis, at sodales leo
                viverra. Suspendisse nec dignissim elit varius tempus. Cras
                viverra neque at imperdiet vehicula. Curabitur condimentum id
                dolor vitae ultrices. Pellentesque scelerisque nunc sit amet leo
                fringilla. Etiam feugiat imperdiet mi, eu blandit arcu cursus a.
            </p>
        {/snippet}
        {#snippet footer()}
            <Button
                variant={mstate === "danger" ? "danger" : ""}
                weight="filled"
            >
                Save changes
            </Button>
            <Button
                variant={mstate === "danger" ? "tonal" : ""}
                onclick={() => (visible = false)}
            >
                Cancel
            </Button>
        {/snippet}
    </Modal>
</Story>
