<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Menu from "./Menu.svelte";
    import MenuItem from "./MenuItem.svelte";
    import MenuTitle from "./MenuTitle.svelte";
    import MenuDivider from "./MenuDivider.svelte";
    import {
        IconHome,
        IconInbox,
        IconSettings,
    } from "@stackoverflow/stacks-icons/icons";
    import Popover from "../Popover/Popover.svelte";
    import PopoverReference from "../Popover/PopoverReference.svelte";
    import PopoverContent from "../Popover/PopoverContent.svelte";
    import Button from "../Button/Button.svelte";

    const { Story } = defineMeta({
        title: "Components/Menu",
        component: Menu,
        subcomponents: {
            MenuItem,
            MenuTitle,
            MenuDivider,
        },
    });
</script>

{#snippet basicChildren()}
    <MenuItem href="#">Share</MenuItem>
    <MenuItem href="#">Edit</MenuItem>
    <MenuItem>Follow</MenuItem>
{/snippet}

<Story name="Base">
    {#snippet template()}
        <div class="s-card p8 ws2">
            <Menu>
                {@render basicChildren()}
            </Menu>
        </div>
    {/snippet}
</Story>

<Story name="Basic Examples" asChild>
    <div class="d-flex g32 fw-wrap hmn2">
        <div>
            <div class="ff-mono mb16">Within a popover</div>
            <Popover id="basic-example-popover" visible>
                <PopoverContent class="ps-relative is-visible p8 ws2">
                    <Menu>
                        {@render basicChildren()}
                    </Menu>
                </PopoverContent>
            </Popover>
        </div>
        <div>
            <div class="ff-mono mb16">Within a card</div>
            <div class="s-card p8">
                <Menu>
                    {@render basicChildren()}
                </Menu>
            </div>
        </div>
        <div>
            <div class="ff-mono mb16">No container</div>
            <Menu>
                {@render basicChildren()}
            </Menu>
        </div>
    </div>
</Story>

<Story name="Titles and Dividers" asChild>
    <div class="hmn3">
        <Popover id="title-and-divider-popover" visible>
            <PopoverContent class="ps-relative is-visible p8 ws2">
                <Menu>
                    <MenuTitle>Layout</MenuTitle>
                    {@render basicChildren()}
                    <MenuDivider class="mxn8" />
                    <MenuItem href="#" danger>Deactivate</MenuItem>
                    <MenuItem href="#" danger>Delete</MenuItem>
                </Menu>
            </PopoverContent>
        </Popover>
    </div>
</Story>

<Story name="Menu Items with Icons" asChild>
    <div class="hmn2">
        <Popover id="menu-items-with-icons-popover" visible>
            <PopoverContent class="ps-relative is-visible p8 ws1">
                <Menu>
                    <MenuItem href="#" icon={IconHome}>Home</MenuItem>
                    <MenuItem href="#" icon={IconInbox}>Inbox</MenuItem>
                    <MenuItem href="#" icon={IconSettings}>Settings</MenuItem>
                </Menu>
            </PopoverContent>
        </Popover>
    </div>
</Story>

<Story name="Selected States" asChild>
    <div class="hmn3">
        <Popover id="selected-states-popover" visible>
            <PopoverContent class="ps-relative is-visible p8 ws2">
                <Menu>
                    <MenuItem href="#">Frequent</MenuItem>
                    <MenuItem href="#">Votes</MenuItem>
                    <MenuItem href="#" selected>Unanswered</MenuItem>
                    <MenuTitle>Custom filters</MenuTitle>
                    <MenuItem href="#">Frontend questions</MenuItem>
                    <MenuItem href="#">Design systems</MenuItem>
                </Menu>
            </PopoverContent>
        </Popover>
    </div>
</Story>

<Story name="In Popover" asChild>
    <div class="hmn3 d-flex flex__center">
        <Popover id="menu-popover" placement="bottom">
            <PopoverReference>
                <Button>Open Menu</Button>
            </PopoverReference>
            <PopoverContent class="p8 ws2">
                <Menu>
                    {@render basicChildren()}
                </Menu>
            </PopoverContent>
        </Popover>
    </div>
</Story>
