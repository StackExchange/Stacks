<script lang="ts" module>
    import { IconWave } from "@stackoverflow/stacks-icons-legacy/icons";
    import Toaster, { showToast, hideToast } from "./Toast.svelte";
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Button from "../Button/Button.svelte";
    import NoticeAction from "../Notice/NoticeAction.svelte";
    import Icon from "../Icon/Icon.svelte";

    const { Story } = defineMeta({
        title: "Components/Toast",
        tags: [],
    });

    let toastId: string | number = $state("");
</script>

<header class="s-topbar">
    <a href="#content" class="s-topbar--skip-link">Skip to main content</a>
    <div class="s-topbar--container">
        <Icon src={IconWave} class="mr12" /> Sample Topbar
    </div>
</header>

<Toaster />

<Story name="Base">
    {#snippet template()}
        <div class="hmn3 d-flex flex__center">
            <Button onclick={() => showToast("I am a default toast component")}
                >Show Toast</Button
            >
        </div>
    {/snippet}
</Story>

{#snippet message()}
    <span
        >I am a <strong>toast</strong> component with an <em>HTML</em> message</span
    >
{/snippet}
<Story name="With HTML Message" asChild>
    <div class="hmn3 d-flex flex__center">
        <Button onclick={() => showToast(message)}
            >Show Toast with HTML message</Button
        >
    </div>
</Story>

<Story name="Variants" asChild>
    <div class="hmn3 d-flex flex__center">
        <Button
            onclick={() =>
                showToast("I am a toast component with the danger variant", {
                    variant: "danger",
                })}>Danger Toast</Button
        >
        <Button
            onclick={() =>
                showToast("I am a toast component with the warning variant", {
                    variant: "warning",
                })}>Warning Toast</Button
        >
        <Button
            onclick={() =>
                showToast("I am a toast component with the info variant", {
                    variant: "info",
                })}>Info Toast</Button
        >
        <Button
            onclick={() =>
                showToast("I am a toast component with the success variant", {
                    variant: "success",
                })}>Success Toast</Button
        >
    </div>
</Story>

<Story name="Not dismissible" asChild>
    <div class="hmn3 d-flex flex__center">
        <Button
            onclick={() =>
                showToast("I am a not dismissible toast", {
                    transient: false,
                    dismissible: false,
                })}>Not dismissible toast</Button
        >
    </div>
</Story>

<Story name="Persistency and Duration" asChild>
    <div class="hmn3 d-flex flex__center">
        <Button
            onclick={() =>
                showToast(
                    "I am a transient toast with a duration of 1 second",
                    {
                        duration: 1000,
                    }
                )}>1 Second Toast</Button
        >
        <Button
            onclick={() =>
                showToast(
                    "I am a transient toast with a duration of 10 seconds",
                    {
                        duration: 10000,
                    }
                )}>10 Seconds Toast</Button
        >
        <Button
            onclick={() =>
                showToast("I am a persistent toast", {
                    transient: false,
                })}>Persistent Toast</Button
        >
    </div>
</Story>

{#snippet actions()}
    <NoticeAction onclick={() => alert("You clicked yes")}>Yes</NoticeAction>
    <NoticeAction onclick={() => alert("You clicked no")}>No</NoticeAction>
{/snippet}
<Story name="With Actions" asChild>
    <div class="hmn3 d-flex flex__center">
        <Button
            onclick={() =>
                showToast(
                    "This is an example of how to add actions to a toast",
                    {
                        actions: actions,
                    }
                )}>With Actions</Button
        >
    </div>
</Story>

<Story name="On Close Callbacks" asChild>
    <div class="hmn3 d-flex flex__center">
        <Button
            onclick={() =>
                showToast("Testing onClose callback", {
                    onClose: () =>
                        alert(
                            "I was closed either by the user or automatically"
                        ),
                })}>onClose</Button
        >
        <Button
            onclick={() =>
                showToast("Testing onAutoClose callback", {
                    duration: 3000,
                    onAutoClose: () => alert("I was closed automatically"),
                })}>onAutoClose</Button
        >
        <Button
            onclick={() =>
                showToast("Testing onUserClose callback", {
                    transient: false,
                    onUserClose: () => alert("I was closed by the user"),
                })}>onUserClose</Button
        >
    </div>
</Story>

<Story name="Closed Externally" asChild>
    <div class="hmn3 d-flex flex__center">
        <Button
            onclick={() => {
                toastId = showToast(
                    "I can be closed only with the hideToast function",
                    {
                        transient: false,
                        dismissible: false,
                    }
                );
            }}>Open Toast</Button
        >
        <Button
            onclick={() => {
                hideToast(toastId);
            }}>Close Toast</Button
        >
    </div>
</Story>
