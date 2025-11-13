<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Menu, { type Tag } from "./Menu.svelte";
    import MenuItemLink from "./MenuItemLink.svelte";
    import MenuItemControl from "./MenuItemControl.svelte";
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

    const MenuTags: Tag[] = ["ul", "div"];

    const { Story } = defineMeta({
        title: "Components/Menu",
        component: Menu,
        subcomponents: {
            // @ts-expect-error: MenuItemLink extends HTMLAnchorAttributes & HTMLButtonAttributes which includes index signatures that conflict with Storybook's subcomponents typing
            MenuItemLink,
            // @ts-expect-error: MenuItemControl has required 'type', 'id', 'name', and 'label' props which conflicts with Storybook's subcomponents typing
            MenuItemControl,
            MenuTitle,
            MenuDivider,
        },
        argTypes: {
            tag: {
                control: "select",
                options: MenuTags,
            },
        },
    });
</script>

{#snippet basicChildren()}
    <MenuItemLink href="#">Share</MenuItemLink>
    <MenuItemLink href="#">Edit</MenuItemLink>
    <MenuItemLink>Follow</MenuItemLink>
{/snippet}

<Story name="Base">
    {#snippet template(args)}
        <Popover id="base-popover" visible>
            <PopoverContent class="ps-relative is-visible p8 ws2">
                <Menu tag={args.tag}>
                    {@render basicChildren()}
                </Menu>
            </PopoverContent>
        </Popover>
    {/snippet}
</Story>

<Story name="Basic Examples" asChild>
    <div class="d-flex g32 fw-wrap">
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
    <Popover id="title-and-divider-popover" visible>
        <PopoverContent class="ps-relative is-visible p8 ws2">
            <Menu>
                <MenuTitle>Layout</MenuTitle>
                {@render basicChildren()}
                <MenuDivider class="mxn8" />
                <MenuItemLink href="#" danger>Deactivate</MenuItemLink>
                <MenuItemLink href="#" danger>Delete</MenuItemLink>
            </Menu>
        </PopoverContent>
    </Popover>
</Story>

<Story name="Menu Items with Icons" asChild>
    <Popover id="menu-items-with-icons-popover" visible>
        <PopoverContent class="ps-relative is-visible p8 ws1">
            <Menu>
                <MenuItemLink href="#" icon={IconHome} iconTitle="Home">
                    Home
                </MenuItemLink>
                <MenuItemLink href="#" icon={IconInbox} iconTitle="Inbox">
                    Inbox
                </MenuItemLink>
                <MenuItemLink href="#" icon={IconSettings} iconTitle="Settings">
                    Settings
                </MenuItemLink>
            </Menu>
        </PopoverContent>
    </Popover>
</Story>

<Story name="Selected States" asChild>
    <Popover id="selected-states-popover" visible>
        <PopoverContent class="ps-relative is-visible p8 ws2">
            <Menu>
                <MenuItemLink href="#">Frequent</MenuItemLink>
                <MenuItemLink href="#">Votes</MenuItemLink>
                <MenuItemLink href="#" selected>Unanswered</MenuItemLink>
                <MenuTitle>Custom filters</MenuTitle>
                <MenuItemLink href="#">Frontend questions</MenuItemLink>
                <MenuItemLink href="#">Design systems</MenuItemLink>
            </Menu>
        </PopoverContent>
    </Popover>
</Story>

{#snippet userLabel()}User{/snippet}

{#snippet userDescription()}
    Can view, ask, answer, and edit questions. Can also vote on and flag
    content.
{/snippet}

{#snippet moderatorLabel()}Moderator{/snippet}

{#snippet moderatorDescription()}
    Everything a user can do, but can also delete and close questions.
{/snippet}

{#snippet adminLabel()}Admin{/snippet}

{#snippet adminDescription()}
    Everything a moderator can do and can also manage users, permissions, and
    site settings.
{/snippet}

<Story name="Radio Groups" asChild>
    <Popover id="menu-items-with-icons-popover" visible>
        <PopoverContent class="ps-relative is-visible p8 ws3">
            <Menu tag="div">
                <fieldset>
                    <legend class="s-menu--title">Role</legend>
                    <MenuItemControl
                        type="radio"
                        id="choice-user-34"
                        name="choice-34"
                        checked
                        label={userLabel}
                        description={userDescription}
                    />
                    <MenuItemControl
                        type="radio"
                        id="choice-moderator-34"
                        name="choice-34"
                        label={moderatorLabel}
                        description={moderatorDescription}
                    />
                    <MenuItemControl
                        type="radio"
                        id="choice-admin-34"
                        name="choice-34"
                        label={adminLabel}
                        description={adminDescription}
                    />
                </fieldset>
            </Menu>
        </PopoverContent>
    </Popover>
</Story>

<Story name="In Popover" asChild>
    <div class="hmn3 d-flex flex__center">
        <Popover id="menu-popover" placement="bottom">
            <PopoverReference>
                <Button weight="filled">Open Menu</Button>
            </PopoverReference>
            <PopoverContent class="p8 ws2">
                <Menu>
                    {@render basicChildren()}
                </Menu>
            </PopoverContent>
        </Popover>
    </div>
</Story>
