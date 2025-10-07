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
    let visible = false;
    let state: State = "";
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
            on:close={() => (visible = false)}
            preventCloseOnClickOutside={args.preventCloseOnClickOutside}
            hideCloseButton={args.hideCloseButton}
        >
            <svelte:fragment slot="header">Modal Header</svelte:fragment>
            <p slot="body">
                Nullam ornare lectus vitae lacus sagittis, at sodales leo
                viverra. Suspendisse nec dignissim elit varius tempus. Cras
                viverra neque at imperdiet vehicula. Curabitur condimentum id
                dolor vitae ultrices. Pellentesque scelerisque nunc sit amet leo
                fringilla. Etiam feugiat imperdiet mi, eu blandit arcu cursus a.
            </p>
            <svelte:fragment slot="footer">
                <Button
                    variant={args.state === "danger" ? "danger" : ""}
                    weight="filled"
                >
                    Save changes
                </Button>
                <Button
                    variant={args.state === "danger" ? "muted" : ""}
                    onclick={() => (visible = false)}
                >
                    Cancel
                </Button>
            </svelte:fragment>
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
                    state = "";
                }}
            >
                Default
            </Button>
            <Button
                variant="danger"
                weight="filled"
                onclick={() => {
                    visible = true;
                    state = "danger";
                }}
            >
                Danger
            </Button>
            <Button
                weight="outlined"
                onclick={() => {
                    visible = true;
                    state = "celebration";
                }}
            >
                Celebration
            </Button>
        </div>
    </div>

    <Modal id="states" {visible} {state} on:close={() => (visible = false)}>
        <svelte:fragment slot="header">Modal Header</svelte:fragment>
        <p slot="body">
            Nullam ornare lectus vitae lacus sagittis, at sodales leo viverra.
            Suspendisse nec dignissim elit varius tempus. Cras viverra neque at
            imperdiet vehicula. Curabitur condimentum id dolor vitae ultrices.
            Pellentesque scelerisque nunc sit amet leo fringilla. Etiam feugiat
            imperdiet mi, eu blandit arcu cursus a.
        </p>
        <svelte:fragment slot="footer">
            <Button
                variant={state === "danger" ? "danger" : ""}
                weight="filled"
            >
                Save changes
            </Button>
            <Button
                variant={state === "danger" ? "muted" : ""}
                onclick={() => (visible = false)}
            >
                Cancel
            </Button>
        </svelte:fragment>
    </Modal>
</Story>
