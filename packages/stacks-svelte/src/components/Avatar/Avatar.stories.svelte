<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Avatar, { type Size } from "./Avatar.svelte";
    const AvatarSizes: Size[] = [16, 24, 32, 48, 64, 96, 128];

    const { Story } = defineMeta({
        title: "Components/Avatar",
        component: Avatar,
        argTypes: {
            role: {
                control: "select",
                options: ["", "link"],
            },
            size: {
                control: "select",
                options: AvatarSizes,
            },
        },
    });
</script>

<Story
    name="Base"
    args={{ name: "example", src: "https://picsum.photos/128" }}
/>

<Story name="Sizes" asChild>
    <div class="d-flex fd-column g64">
        <table class="s-table s-table__bx-simple wmx7">
            <thead>
                <tr>
                    <th scope="col">Sizes</th>
                    <th scope="col" class="s-table--cell8">Example</th>
                </tr>
            </thead>

            <tbody>
                {#each AvatarSizes as size (size)}
                    <tr>
                        <th scope="row" class="va-middle">
                            {size || "default"}
                        </th>
                        <td class="va-middle px4">
                            <Avatar
                                name="{size} example"
                                src="https://picsum.photos/{size}"
                                {size}
                            />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Story>

<Story
    name="href"
    args={{
        name: "href example",
        href: "#",
        src: "https://picsum.photos/64",
        size: 64,
    }}
/>

<Story
    name="Letter"
    args={{
        name: "letter example",
        class: "bg-theme-primary-400",
        letter: "S",
        size: 64,
    }}
/>

<Story
    name="badge"
    args={{
        name: "badge example",
        badge: true,
        src: "https://picsum.photos/64",
        size: 64,
    }}
/>
