<script lang="ts">
    import { Icon } from "@stackoverflow/stacks-svelte";
    import { SpotPuzzle } from "@stackoverflow/stacks-icons";

    import TemplateSidebar from "../components/TemplateSidebar.svelte";

    let { data }: { data: import("./$types").PageData } = $props();
</script>

<main class="d-flex sm:fd-column h-screen">
    <TemplateSidebar templates={data.templates} />

    <section class="fl-grow1 hmn-screen p32 d-flex">
        <div class="wmx8 mx-auto d-flex m-auto fd-column g12">
            <div class="s-empty-state wmx4 p48">
                <Icon src={SpotPuzzle} class="native" />
                <h1 class="s-empty-state--title">Email template gallery</h1>
                <p>Choose a template from the sidebar to open preview, MJML, and compiled HTML output.</p>
            </div>
        </div>
    </section>
</main>
