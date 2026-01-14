# @stackoverflow/stacks-svelte

## 1.0.0-beta.17

### Minor Changes

- [#2092](https://github.com/StackExchange/Stacks/pull/2092) [`c1443ec`](https://github.com/StackExchange/Stacks/commit/c1443ecfc69784be393fa26edefb63cca24a80f2) Thanks [@ttaylor-stack](https://github.com/ttaylor-stack)! - Update User card to new SHINE design (part 1)

- [#2109](https://github.com/StackExchange/Stacks/pull/2109) [`96224f0`](https://github.com/StackExchange/Stacks/commit/96224f0bdf3c9208489c4053d34af86df9ffe25b) Thanks [@mukunku](https://github.com/mukunku)! - feat(notice): update styles for SHINE
  feat(toast): update styles for SHINE

    BREAKING CHANGES
    - Markup for notices has been updated

### Patch Changes

- Updated dependencies [[`c1443ec`](https://github.com/StackExchange/Stacks/commit/c1443ecfc69784be393fa26edefb63cca24a80f2), [`85c14d4`](https://github.com/StackExchange/Stacks/commit/85c14d41a33f36cadc338d1f83b166b8ba1ff01f), [`96224f0`](https://github.com/StackExchange/Stacks/commit/96224f0bdf3c9208489c4053d34af86df9ffe25b)]:
    - @stackoverflow/stacks@3.0.0-beta.15

## 1.0.0-beta.16

### Minor Changes

- [#2062](https://github.com/StackExchange/Stacks/pull/2062) [`83d21b8`](https://github.com/StackExchange/Stacks/commit/83d21b8cc89fdc8ad2fe4e43ad39fd07a1eca8a0) Thanks [@dancormier](https://github.com/dancormier)! - Add Vote component

- [#2060](https://github.com/StackExchange/Stacks/pull/2060) [`d53cdd1`](https://github.com/StackExchange/Stacks/commit/d53cdd189e6b831ea2db442068b26ab7c281f3b8) Thanks [@ttaylor-stack](https://github.com/ttaylor-stack)! - Updated checkbox and radio styling in Stacks Classic and documentation for SHINE
  `.s-check-control` has been removed
  Renamed `.s-check-group` to `.s-form-group`
  `.s-checkbox` and `.s-radio` are now expected to be on the container where `.s-check-control` would previously be applied. They are no longer needed on the input itself
  Added `.s-checkbox__checkmark` and `.s-radio__checkmark` to Stacks Classic
  Added `Checkbox`, `CheckboxGroup`, `Radio`, `RadioGroup` components to Stacks Svelte

- [#2100](https://github.com/StackExchange/Stacks/pull/2100) [`1407fb5`](https://github.com/StackExchange/Stacks/commit/1407fb512458203d5f9d4dbf40efb0d2b0426062) Thanks [@mukunku](https://github.com/mukunku)! - feat(empty-state): new SHINE styles and Svelte Component
  fix(expanding-input): expands correctly now after textarea update

- [#2113](https://github.com/StackExchange/Stacks/pull/2113) [`0b92e2c`](https://github.com/StackExchange/Stacks/commit/0b92e2cc63ce005f75724f6983898b7548c34d7e) Thanks [@chris-doucette-stack](https://github.com/chris-doucette-stack)! - Added aria-label and aria-labelledby props to PopoverContent

### Patch Changes

- Updated dependencies [[`83d21b8`](https://github.com/StackExchange/Stacks/commit/83d21b8cc89fdc8ad2fe4e43ad39fd07a1eca8a0), [`d53cdd1`](https://github.com/StackExchange/Stacks/commit/d53cdd189e6b831ea2db442068b26ab7c281f3b8), [`1407fb5`](https://github.com/StackExchange/Stacks/commit/1407fb512458203d5f9d4dbf40efb0d2b0426062)]:
    - @stackoverflow/stacks@3.0.0-beta.14

## 1.0.0-beta.15

### Minor Changes

- [#2107](https://github.com/StackExchange/Stacks/pull/2107) [`c130895`](https://github.com/StackExchange/Stacks/commit/c1308950616e7950c3fb5dc0257fa6572e0f6c66) Thanks [@chris-doucette-stack](https://github.com/chris-doucette-stack)! - Made TextInputs value prop bindable

## 1.0.0-beta.14

### Major Changes

- [#2082](https://github.com/StackExchange/Stacks/pull/2082) [`8ed0cea`](https://github.com/StackExchange/Stacks/commit/8ed0cea0dda875049713263a00aa4be5e986ea7c) Thanks [@giamir](https://github.com/giamir)! - Badges: update to the new SHINE visuals

    BREAKING CHANGES:
    - `.s-badge__icon` removed
    - `.s-badge__bounty` removed
    - `.s-badge__answered` removed
    - `.s-badge__votes` removed
    - `.s-badge__rep-down` removed
    - `.s-badge__muted` removed
    - `.s-badge__new` renamed to `.s-badge__featured`

### Patch Changes

- Updated dependencies [[`5a8a4e1`](https://github.com/StackExchange/Stacks/commit/5a8a4e17c73ca5a2a9c282ca769dd08426b17812), [`8ed0cea`](https://github.com/StackExchange/Stacks/commit/8ed0cea0dda875049713263a00aa4be5e986ea7c), [`5c4b9b5`](https://github.com/StackExchange/Stacks/commit/5c4b9b52ef12937307b234a179d52d109e1333e3), [`ae44e91`](https://github.com/StackExchange/Stacks/commit/ae44e9103ce0f581d48cf744ecba173ca7eedcc6)]:
    - @stackoverflow/stacks@3.0.0-beta.11

## 1.0.0-beta.13

### Minor Changes

- [#2077](https://github.com/StackExchange/Stacks/pull/2077) [`78d6a22`](https://github.com/StackExchange/Stacks/commit/78d6a22fd01442de1a325d3530d429b55aa5a8c4) Thanks [@mukunku](https://github.com/mukunku)! - feat(textarea): new SHINE styles and Svelte component

    BREAKING CHANGES:
    - `s-input__md` removed
    - `s-input__xl` removed

- [#2070](https://github.com/StackExchange/Stacks/pull/2070) [`55f3a17`](https://github.com/StackExchange/Stacks/commit/55f3a179621375ca95fc93d219f8ab3edb526514) Thanks [@mukunku](https://github.com/mukunku)! - feat(input): update input styles for SHINE

    BREAKING CHANGES:
    - `s-input__md` removed
    - `s-input__xl` removed
    - Nested input styles slightly updated
    - `optional` and `i18nOptionalText` attributes removed from TextInput Svelte component

### Patch Changes

- [#2085](https://github.com/StackExchange/Stacks/pull/2085) [`4310a45`](https://github.com/StackExchange/Stacks/commit/4310a45c72f058d59f4ad97deeade3d7243d22dc) Thanks [@mukunku](https://github.com/mukunku)! - chore(textinput/textarea): upgrade to Svelte 5 syntax

    BREAKING CHANGES:
    - The message, description, and fill slots have been replaced with snippets.

- Updated dependencies [[`78d6a22`](https://github.com/StackExchange/Stacks/commit/78d6a22fd01442de1a325d3530d429b55aa5a8c4), [`55f3a17`](https://github.com/StackExchange/Stacks/commit/55f3a179621375ca95fc93d219f8ab3edb526514), [`2f3cb89`](https://github.com/StackExchange/Stacks/commit/2f3cb89399c06564ec5c1c59893787e8af4d9643), [`efc2120`](https://github.com/StackExchange/Stacks/commit/efc21209fd73e12f1fd42d5a89138757923de4fc)]:
    - @stackoverflow/stacks@3.0.0-beta.10

## 1.0.0-beta.12

### Patch Changes

- [#2080](https://github.com/StackExchange/Stacks/pull/2080) [`1f53476`](https://github.com/StackExchange/Stacks/commit/1f534769e7375b5a77434b8c7ee542f0dfd1729f) Thanks [@stacks-tooling](https://github.com/stacks-tooling)! - Navigation: ensure dropdown items can be rendered in a semantically correct way

## 1.0.0-beta.11

### Minor Changes

- [#2069](https://github.com/StackExchange/Stacks/pull/2069) [`bb1284b`](https://github.com/StackExchange/Stacks/commit/bb1284be4f168e5513a5377b077ddc274c27c7e4) Thanks [@ttaylor-stack](https://github.com/ttaylor-stack)! - Update Select component in classic and svelte to new SHINE styles

    BREAKING CHANGES:
    - `md` and `xl` sizes removed

### Patch Changes

- [#2068](https://github.com/StackExchange/Stacks/pull/2068) [`6de581f`](https://github.com/StackExchange/Stacks/commit/6de581f165a319ca0cfb9d4db0e2096bc6fb8a75) Thanks [@giamir](https://github.com/giamir)! - Modal: changed close icon to the new `Cross` beta icon (including some padding adjustments)

- Updated dependencies [[`bb1284b`](https://github.com/StackExchange/Stacks/commit/bb1284be4f168e5513a5377b077ddc274c27c7e4), [`6de581f`](https://github.com/StackExchange/Stacks/commit/6de581f165a319ca0cfb9d4db0e2096bc6fb8a75)]:
    - @stackoverflow/stacks@3.0.0-beta.8

## 1.0.0-beta.10

### Patch Changes

- [#2074](https://github.com/StackExchange/Stacks/pull/2074) [`1e98516`](https://github.com/StackExchange/Stacks/commit/1e9851617653b2233cb8ed62b5c0248379f528fb) Thanks [@dancormier](https://github.com/dancormier)! - Navigation: Add animate prop to NavigationItem

## 1.0.0-beta.9

### Minor Changes

- [#2051](https://github.com/StackExchange/Stacks/pull/2051) [`f3f078c`](https://github.com/StackExchange/Stacks/commit/f3f078c682ec2df4dc338f6766792de2c158b4c2) Thanks [@mukunku](https://github.com/mukunku)! - feat(badges): first batch of design updates for the badge component as part of SHINE

    BREAKING CHANGES:
    - `.s-badge__xs` removed
    - `.s-award-bling` renamed to `.s-bling` (used in some badge templates)

### Patch Changes

- [#2065](https://github.com/StackExchange/Stacks/pull/2065) [`a89da8b`](https://github.com/StackExchange/Stacks/commit/a89da8b1bec2fccca1c8a1a016461c6fd1c6e1a0) Thanks [@giamir](https://github.com/giamir)! - Navigation: Address an issue where in highcontrast mode anchor navigation items with activity indicator or badges were not correctly underlined

- Updated dependencies [[`a89da8b`](https://github.com/StackExchange/Stacks/commit/a89da8b1bec2fccca1c8a1a016461c6fd1c6e1a0), [`f3f078c`](https://github.com/StackExchange/Stacks/commit/f3f078c682ec2df4dc338f6766792de2c158b4c2)]:
    - @stackoverflow/stacks@3.0.0-beta.7

## 1.0.0-beta.8

### Patch Changes

- [#2061](https://github.com/StackExchange/Stacks/pull/2061) [`da4276a`](https://github.com/StackExchange/Stacks/commit/da4276adac3562f9d31ea2775e707cab6d5df816) Thanks [@chris-doucette-stack](https://github.com/chris-doucette-stack)! - Popover: add the ability to add classes to the s-popover--content element

- [#2063](https://github.com/StackExchange/Stacks/pull/2063) [`efed5b2`](https://github.com/StackExchange/Stacks/commit/efed5b2d01892fad814778bd9a7ba6407a4979f0) Thanks [@dancormier](https://github.com/dancormier)! - Add `onoutclick` to Popover component

- Updated dependencies [[`32ae839`](https://github.com/StackExchange/Stacks/commit/32ae839dd675ae50621a33f24bcd66694bc5c5c4)]:
    - @stackoverflow/stacks@3.0.0-beta.6

## 1.0.0-beta.7

### Minor Changes

- [#2008](https://github.com/StackExchange/Stacks/pull/2008) [`4610d3a`](https://github.com/StackExchange/Stacks/commit/4610d3a6f8183a3e57208b6b8780cfa9aba393c4) Thanks [@ttaylor-stack](https://github.com/ttaylor-stack)! - Update button to new Shine styles

    BREAKING CHANGES:
    - The secondary style `outlined` has been removed i.e. `.s-btn__outlined`
    - The variant `Muted` has been removed
    - `s-btn__md` has been removed

- [#2043](https://github.com/StackExchange/Stacks/pull/2043) [`6f6d576`](https://github.com/StackExchange/Stacks/commit/6f6d576b65cd0db5d9ed2747d8cba474d4633680) Thanks [@giamir](https://github.com/giamir)! - Added new Navigation Component

### Patch Changes

- [#2057](https://github.com/StackExchange/Stacks/pull/2057) [`ec61da3`](https://github.com/StackExchange/Stacks/commit/ec61da30c742ea7be21de11e932381d34e36bdba) Thanks [@dancormier](https://github.com/dancormier)! - Change popover close icon to Cross

- Updated dependencies [[`4610d3a`](https://github.com/StackExchange/Stacks/commit/4610d3a6f8183a3e57208b6b8780cfa9aba393c4), [`6f6d576`](https://github.com/StackExchange/Stacks/commit/6f6d576b65cd0db5d9ed2747d8cba474d4633680), [`ec61da3`](https://github.com/StackExchange/Stacks/commit/ec61da30c742ea7be21de11e932381d34e36bdba)]:
    - @stackoverflow/stacks@3.0.0-beta.5

## 1.0.0-beta.6

### Minor Changes

- [#2046](https://github.com/StackExchange/Stacks/pull/2046) [`5e49f0b`](https://github.com/StackExchange/Stacks/commit/5e49f0b6b2361058bc941f81ee90fb9a5158e961) Thanks [@dancormier](https://github.com/dancormier)! - Update Menu to SHINE styles; add Svelte component

- [#2035](https://github.com/StackExchange/Stacks/pull/2035) [`0b1841d`](https://github.com/StackExchange/Stacks/commit/0b1841d147ff8e9dc369c4bb758b3a11d1fafc73) Thanks [@ttaylor-stack](https://github.com/ttaylor-stack)! - Update pagination component to match new SHINE design system

    BREAKING CHANGES
    The next button now uses an ArrowRight and ArrowLeft icon instead of text. To apply the new styling, add the `item__nav` class to pagination items that represent the "Next" button.

### Patch Changes

- [#2045](https://github.com/StackExchange/Stacks/pull/2045) [`10e108a`](https://github.com/StackExchange/Stacks/commit/10e108a476801015237f7937e7dcd79e268a52a2) Thanks [@mukunku](https://github.com/mukunku)! - accessibility(tags): add screen reader improvements

- Updated dependencies [[`5e49f0b`](https://github.com/StackExchange/Stacks/commit/5e49f0b6b2361058bc941f81ee90fb9a5158e961), [`13b6189`](https://github.com/StackExchange/Stacks/commit/13b6189f3228a506fa6a607ef65cac7a45a912c9), [`0b1841d`](https://github.com/StackExchange/Stacks/commit/0b1841d147ff8e9dc369c4bb758b3a11d1fafc73)]:
    - @stackoverflow/stacks@3.0.0-beta.4

## 1.0.0-beta.5

### Minor Changes

- [#2038](https://github.com/StackExchange/Stacks/pull/2038) [`e0da077`](https://github.com/StackExchange/Stacks/commit/e0da0777c7bf2b3aca8e82e0a8542820c361291b) Thanks [@mukunku](https://github.com/mukunku)! - feat(tags): updates tag component designs for project SHINE

    BREAKING CHANGES

    Tag sizes `xs` and `md` have been removed.

- [#2013](https://github.com/StackExchange/Stacks/pull/2013) [`35fe29b`](https://github.com/StackExchange/Stacks/commit/35fe29b0af58cafe4858e11f1c4061409d1c120b) Thanks [@dancormier](https://github.com/dancormier)! - Update Bling component to match SHINE styles

### Patch Changes

- Updated dependencies [[`e0da077`](https://github.com/StackExchange/Stacks/commit/e0da0777c7bf2b3aca8e82e0a8542820c361291b), [`7233e20`](https://github.com/StackExchange/Stacks/commit/7233e2035ea9c2f034da4249ef3eb7031f86ce1e), [`35fe29b`](https://github.com/StackExchange/Stacks/commit/35fe29b0af58cafe4858e11f1c4061409d1c120b), [`8854903`](https://github.com/StackExchange/Stacks/commit/8854903e12f642e627131bcca99ac0ccb961ba5c)]:
    - @stackoverflow/stacks@3.0.0-beta.3

## 1.0.0-beta.4

### Patch Changes

- [`b5d8e90`](https://github.com/StackExchange/Stacks/commit/b5d8e901e31b121b32931f16d9605451a0effbfb) Thanks [@giamir](https://github.com/giamir)! - Support both @stackoverflow/stacks v2 and v3 as peer dependencies

## 1.0.0-beta.3

### Patch Changes

- Updated dependencies [[`66bfd40`](https://github.com/StackExchange/Stacks/commit/66bfd409b4643db3970457eb884066aa799c15d9), [`c9bd0f6`](https://github.com/StackExchange/Stacks/commit/c9bd0f6ed0286bd2b1b2935662f96c537445bf12), [`73c8edd`](https://github.com/StackExchange/Stacks/commit/73c8edd05eacee5d26e9267279a1cb5b32923710)]:
    - @stackoverflow/stacks@3.0.0-beta.2

## 1.0.0-beta.2

### Minor Changes

- [#2027](https://github.com/StackExchange/Stacks/pull/2027) [`4bd5612`](https://github.com/StackExchange/Stacks/commit/4bd561230e43bb411a58f1cf975c0a5f62a205fe) Thanks [@giamir](https://github.com/giamir)! - **Activity Indicator Updates:**
    - **Stacks Classic**: Updated activity indicator component to the new visual language (default 16x16). Introduced `.s-activity-indicator__sm` variant (10x10).
    - **Stacks Svelte**: Added new `ActivityIndicator` component.

### Patch Changes

- [#2019](https://github.com/StackExchange/Stacks/pull/2019) [`e9b8885`](https://github.com/StackExchange/Stacks/commit/e9b888585e2d145e4216ea413904bba83a4faa80) Thanks [@giamir](https://github.com/giamir)! - **Avatar Updates:**
    - **Stacks Classic**: Made avatar border squared. Introduced `.s-avatar--indicator` class for positioning an activity indicator element in relation to the avatar.
    - **Stacks Svelte**: Introduced a new `status` prop. When set to `online` it will show an activity indicator on the avatar.

- Updated dependencies [[`2a4a741`](https://github.com/StackExchange/Stacks/commit/2a4a74100534b2020aa7e9ebecd956a2aa15a74e), [`e9b8885`](https://github.com/StackExchange/Stacks/commit/e9b888585e2d145e4216ea413904bba83a4faa80), [`4bd5612`](https://github.com/StackExchange/Stacks/commit/4bd561230e43bb411a58f1cf975c0a5f62a205fe), [`da8616a`](https://github.com/StackExchange/Stacks/commit/da8616a618e0d0f36f768a7f6600b5b6e129b314)]:
    - @stackoverflow/stacks@3.0.0-beta.1

## 1.0.0-beta.1

### Patch Changes

- Incorporate v0.6.0 changes in the beta release tag
  https://github.com/StackExchange/Stacks/releases/tag/%40stackoverflow%2Fstacks-svelte%400.6.0

## 0.6.0

### Minor Changes

- [#2018](https://github.com/StackExchange/Stacks/pull/2018) [`9cfbe19`](https://github.com/StackExchange/Stacks/commit/9cfbe19f066ae1146bf2065e78c2812f89a2df18) Thanks [@giamir](https://github.com/giamir)! - Migrate `Pagination` components to use Svelte 5 runes API.

    BREAKING CHANGES:
    - `PaginationItem`: `on:click` event forwarding is replaced by `onclick` callback prop.
    - `PaginationController`: `on:pagechange` event is replaced by `onpagechange` callback prop with simplified signature. Previously the event passed `{ detail: pageNumber }`, now the callback directly receives the page number as the argument: `onpagechange(pageNumber)`.

    Migration example:

    ```svelte
    <!-- Before (Svelte 4) -->
    <PaginationController on:pagechange={(e) => handlePageChange(e.detail)} />

    <!-- After (Svelte 5) -->
    <PaginationController
        onpagechange={(pageNumber) => handlePageChange(pageNumber)}
    />
    ```

- [#2016](https://github.com/StackExchange/Stacks/pull/2016) [`6712bc2`](https://github.com/StackExchange/Stacks/commit/6712bc29f22579ae368f8ec5211a25fc257f0cb9) Thanks [@giamir](https://github.com/giamir)! - Migrate `Popover`, `PopoverReference`, `PopoverContent`, and `PopoverCloseButton` components to use Svelte 5 runes API

    BREAKING CHANGES:

    **Popover component:**
    - Slot props (`let:visible`, `let:open`, `let:close`) are not available anymore. Snippet parameters should be used instead: `{#snippet children({ visible, open, close })}...{/snippet}`
    - `on:open` and `on:close` events are not available anymore. The new callback props should be used instead: `onopen`, `onclose`.

    **PopoverCloseButton component:**
    - `on:click` event forwarding is not available anymore. The new callback prop should be used instead: `onclick`.

    **Migration examples:**

    ```svelte
    <!-- Before (Svelte 4 API) -->
    <Popover
        id="my-popover"
        on:open={() => console.log("opened")}
        on:close={() => console.log("closed")}
        let:visible
        let:close
    >
        <PopoverReference>
            <button>Trigger</button>
        </PopoverReference>
        <PopoverContent>
            <p>Content here</p>
            <PopoverCloseButton on:click={handleClick} />
        </PopoverContent>
        <p>Visible: {visible}</p>
    </Popover>

    <!-- After (Svelte 5 API) -->
    <Popover
        id="my-popover"
        onopen={() => console.log("opened")}
        onclose={() => console.log("closed")}
    >
        {#snippet children({ visible, close })}
            <PopoverReference>
                <button>Trigger</button>
            </PopoverReference>
            <PopoverContent>
                <p>Content here</p>
                <PopoverCloseButton onclick={handleClick} />
            </PopoverContent>
            <p>Visible: {visible}</p>
        {/snippet}
    </Popover>
    ```

- [#2017](https://github.com/StackExchange/Stacks/pull/2017) [`067d647`](https://github.com/StackExchange/Stacks/commit/067d6476aedab2f683e379bfae37ee54374997d5) Thanks [@giamir](https://github.com/giamir)! - Migrate `Modal` component to use Svelte 5 runes API.

    BREAKING CHANGES:
    - Named slots (`header`, `body`, `footer`) are replaced by snippet props. Use `{#snippet header()}...{/snippet}` instead of `<svelte:fragment slot="header">...</svelte:fragment>`.
    - `on:close` event is replaced by `onclose` callback prop.

## 0.5.1

### Patch Changes

- [#2005](https://github.com/StackExchange/Stacks/pull/2005) [`b5ca551`](https://github.com/StackExchange/Stacks/commit/b5ca5519aba92fb2bb13ed00746c3f90eb8e0f5d) Thanks [@giamir](https://github.com/giamir)! - Migrate `Select` and `SelectItem` components to use Svelte 5 runes API

    BREAKING CHANGES:
    - `message` and `description` slotted content are not available anymore. `message` and `description` snippets should be used instead.
    - `on:change` `on:focus` and `on:blur` are not available anymore. The new callback props should be used instead: `onchange`, `onfocus`, `onblur`.

## 1.0.0-beta.0

### Major Changes

- [#1994](https://github.com/StackExchange/Stacks/pull/1994) [`83db25a`](https://github.com/StackExchange/Stacks/commit/83db25abba127a1ff8ce1e239c644992266b2d44) Thanks [@dancormier](https://github.com/dancormier)! - enter prerelease mode for project shine

### Patch Changes

- Updated dependencies [[`83db25a`](https://github.com/StackExchange/Stacks/commit/83db25abba127a1ff8ce1e239c644992266b2d44)]:
    - @stackoverflow/stacks@3.0.0-beta.0

## 0.5.0

### Minor Changes

- [#1991](https://github.com/StackExchange/Stacks/pull/1991) [`b9dba0e`](https://github.com/StackExchange/Stacks/commit/b9dba0e86a9e926f597f4460cb64bef25f1aad71) Thanks [@mukunku](https://github.com/mukunku)! - [SPARK- 48] - publish stacks svelte to npm

### Patch Changes

- [#1991](https://github.com/StackExchange/Stacks/pull/1991) [`b9dba0e`](https://github.com/StackExchange/Stacks/commit/b9dba0e86a9e926f597f4460cb64bef25f1aad71) Thanks [@mukunku](https://github.com/mukunku)! - Updating UserCard to show deleted User without badges, rep, user type, etc.

## 0.4.0

### Minor Changes

- [#479](https://github.com/StackEng/Stacks-Svelte/pull/479) [`1dbb27a`](https://github.com/StackEng/Stacks-Svelte/commit/1dbb27a54454970db1cabc275e552c6ac9f2682c) Thanks [@ttaylor-stack](https://github.com/ttaylor-stack)! - [SPARK-32] - add notice component

- [#513](https://github.com/StackEng/Stacks-Svelte/pull/513) [`10ca8d9`](https://github.com/StackEng/Stacks-Svelte/commit/10ca8d9bd57b1ff1a5fb2ad2fc75c0ae3a264288) Thanks [@ttaylor-stack](https://github.com/ttaylor-stack)! - Add toast functionalities including a Toaster component and showToast and hideToast functions

## 0.3.2

### Patch Changes

- [#477](https://github.com/StackEng/Stacks-Svelte/pull/477) [`0c3239e`](https://github.com/StackEng/Stacks-Svelte/commit/0c3239e4033460f5d0c7cd25326f8d6c438f02e6) Thanks [@ttaylor-stack](https://github.com/ttaylor-stack)! - chore(badge): update to use Runes API

- [#476](https://github.com/StackEng/Stacks-Svelte/pull/476) [`3e2c2cd`](https://github.com/StackEng/Stacks-Svelte/commit/3e2c2cdf252105f1758520991aa87d3e1fdc034e) Thanks [@ttaylor-stack](https://github.com/ttaylor-stack)! - [SPARK-18] - Migrate Button component to use rune API

    BREAKING CHANGES:
    - badge slotted content is not available anymore. A badge snippet should be used instead.
    - on:click is not available anymore. The new callback prop should be used instead: onclick

## 0.3.1

### Patch Changes

- [#463](https://github.com/StackEng/Stacks-Svelte/pull/463) [`6de7817`](https://github.com/StackEng/Stacks-Svelte/commit/6de7817ec0236c9c9c546f337df789ad72558ea0) Thanks [@marradoss](https://github.com/marradoss)! - Expose the keydown event for expanding input

## 0.3.0

### Minor Changes

- [#381](https://github.com/StackEng/Stacks-Svelte/pull/381) [`ec76bb2`](https://github.com/StackEng/Stacks-Svelte/commit/ec76bb2bd9148affc3b64ea3bc2d630811b111a2) Thanks [@dancormier](https://github.com/dancormier)! - Major dependency updates including Svelte v5

    Components updated to Svelte v5 APIs:
    - Avatar
    - AwardBling
    - Icon
    - Tag
    - UserCard

    BREAKING CHANGES:
    - Tag Component: `on:dismiss`, `on:focus`, `on:blur`, `on:click`, `on:mousenter` and `on:mouseleave` events are not available anymore. The new callback props should be used instead: `ondismiss`, `onfocus`, `onblur`, `onclick`, `onmousenter` and `onmouseleave`
    - Tag Component: `sponsor` slotted content is not available anymore. A `sponsor` snippet should be used instead.
    - UserCard Component: `tags` and `type` slotted contents are not available anymore. `tags` and `type` snippets should be used instead.
    - ClickOutside Action: `on:outclick` becomes `onoutclick`

## 0.2.2

### Patch Changes

- [#385](https://github.com/StackEng/Stacks-Svelte/pull/385) [`f438357`](https://github.com/StackEng/Stacks-Svelte/commit/f438357e54f75d2462c45706182d64b9b21ac011) Thanks [@dancormier](https://github.com/dancormier)! - Update Skeleton component to use Stacks Classic styles and variants

## 0.2.1

### Patch Changes

- [#382](https://github.com/StackEng/Stacks-Svelte/pull/382) [`5556c73`](https://github.com/StackEng/Stacks-Svelte/commit/5556c73fa9456368dc88d41d221766f269578ca5) Thanks [@dancormier](https://github.com/dancormier)! - Update the TextInput required indicator to match Stacks Classic

## 0.2.0

### Minor Changes

- [#364](https://github.com/StackEng/Stacks-Svelte/pull/364) [`2c2a9d8`](https://github.com/StackEng/Stacks-Svelte/commit/2c2a9d891cb2ac2ff9bd1d1f9949220af20a66b9) Thanks [@dancormier](https://github.com/dancormier)! - Add UserCard component

- [#363](https://github.com/StackEng/Stacks-Svelte/pull/363) [`0b47499`](https://github.com/StackEng/Stacks-Svelte/commit/0b47499c71dd1687718c6839525ff6da9e176a92) Thanks [@dancormier](https://github.com/dancormier)! - Add AwardBling component

- [`10ad5a7`](https://github.com/StackEng/Stacks-Svelte/commit/10ad5a719ae8a30ab4447cc3505147a0944abda0) Thanks [@dancormier](https://github.com/dancormier)! - Add PostSummary component

- [#360](https://github.com/StackEng/Stacks-Svelte/pull/360) [`49153b4`](https://github.com/StackEng/Stacks-Svelte/commit/49153b42bf8631c52c384d38cdae9ac882a04722) Thanks [@dancormier](https://github.com/dancormier)! - Add Avatar component

### Patch Changes

- [#361](https://github.com/StackEng/Stacks-Svelte/pull/361) [`39134b0`](https://github.com/StackEng/Stacks-Svelte/commit/39134b04fa9fe8f044a9450497a9da128ea43732) Thanks [@dancormier](https://github.com/dancormier)! - Export the Tag component

## 0.1.0

### Minor Changes

- [#326](https://github.com/StackEng/Stacks-Svelte/pull/326) [`a257903`](https://github.com/StackEng/Stacks-Svelte/commit/a257903a29acde25baf2f331fe73f3de62d2fa10) Thanks [@dancormier](https://github.com/dancormier)! - Add Select component

- [#341](https://github.com/StackEng/Stacks-Svelte/pull/341) [`904454e`](https://github.com/StackEng/Stacks-Svelte/commit/904454e285b960eb44273bbad6deb2919ef5ca66) Thanks [@dancormier](https://github.com/dancormier)! - Add Pagination component

- [#352](https://github.com/StackEng/Stacks-Svelte/pull/352) [`d02b830`](https://github.com/StackEng/Stacks-Svelte/commit/d02b8304217e42c65fe3cbe301d7576fe0c75602) Thanks [@dancormier](https://github.com/dancormier)! - add tag component

### Patch Changes

- [#357](https://github.com/StackEng/Stacks-Svelte/pull/357) [`6c62e1b`](https://github.com/StackEng/Stacks-Svelte/commit/6c62e1bcec75906e88fc946523d07e3283e337c3) Thanks [@giamir](https://github.com/giamir)! - Resolve an issue for svelte 5 consumers where popover would throw an exception if unmounted when open

## 0.0.8

### Patch Changes

- [#274](https://github.com/StackEng/Stacks-Svelte/pull/274) [`1d06b97`](https://github.com/StackEng/Stacks-Svelte/commit/1d06b974c0faaacef6f94898b4ff94c14ab84f64) Thanks [@elcart](https://github.com/elcart)! - add hideCloseButton escape hatch to the Modal component

## 0.0.7

### Patch Changes

- [#163](https://github.com/StackEng/Stacks-Svelte/pull/163) [`9a02367`](https://github.com/StackEng/Stacks-Svelte/commit/9a023674e0970ddfe1454ad1adcc321e0a2d8557) Thanks [@giamir](https://github.com/giamir)! - Add popover content element to support reflow resolution

- [#266](https://github.com/StackEng/Stacks-Svelte/pull/266) [`b13ee65`](https://github.com/StackEng/Stacks-Svelte/commit/b13ee65a6fab28a53017cc1883f6e77d3c6bdee9) Thanks [@elcart](https://github.com/elcart)! - Add preventCloseOnClickOutside prop to Modal

## 0.0.6

### Patch Changes

- [#153](https://github.com/StackEng/Stacks-Svelte/pull/153) [`879431f`](https://github.com/StackEng/Stacks-Svelte/commit/879431fd93022903822969a7c725280e49b44ae5) Thanks [@alexwarren](https://github.com/alexwarren)! - Keep tooltip open when hovering over content

- [#151](https://github.com/StackEng/Stacks-Svelte/pull/151) [`c03fd75`](https://github.com/StackEng/Stacks-Svelte/commit/c03fd75cf955be4122da1aa0edee96e2e1c903f4) Thanks [@alexwarren](https://github.com/alexwarren)! - Expose strategy property to Popover component

## 0.0.5

### Patch Changes

- [#149](https://github.com/StackEng/Stacks-Svelte/pull/149) [`7b2e9c3`](https://github.com/StackEng/Stacks-Svelte/commit/7b2e9c30805e89b34b9d7b09abc470d0a68614ab) Thanks [@alexwarren](https://github.com/alexwarren)! - Add tooltip support to Popover component

## 0.0.4

### Patch Changes

- [#123](https://github.com/StackEng/Stacks-Svelte/pull/123) [`b35cedb`](https://github.com/StackEng/Stacks-Svelte/commit/b35cedb13c3faf7b7036da4044598271676c8660) Thanks [@elcart](https://github.com/elcart)! - Add option to specify popover reference via element id

- [#121](https://github.com/StackEng/Stacks-Svelte/pull/121) [`1646d3c`](https://github.com/StackEng/Stacks-Svelte/commit/1646d3c96453d0336ab211544e63735bd89c07b7) Thanks [@elcart](https://github.com/elcart)! - Forward on:click dom event for PopoverCloseButton component

## 0.0.3

### Patch Changes

- [`8322c4d`](https://github.com/StackEng/Stacks-Svelte/commit/8322c4dfca1453a0125b674768448cb0cfd9a6dc) Thanks [@giamir](https://github.com/giamir)! - Support svelte 5

- [#46](https://github.com/StackEng/Stacks-Svelte/pull/46) [`025d1c8`](https://github.com/StackEng/Stacks-Svelte/commit/025d1c86b5b199310f36242da8ede5a6b77fe2cc) Thanks [@giamir](https://github.com/giamir)! - Introduce basic way to handle i18n in components via props

- [#84](https://github.com/StackEng/Stacks-Svelte/pull/84) [`364e32f`](https://github.com/StackEng/Stacks-Svelte/commit/364e32ff1325a752f3fc98fc1de12f740d774566) Thanks [@elcart](https://github.com/elcart)! - feat(popover): add popover component to library

## 0.0.2

### Patch Changes

- [`3625793`](https://github.com/StackEng/Stacks-Svelte/commit/3625793697252adcd39d7079061b0439273edfb1) Thanks [@giamir](https://github.com/giamir)! - Enable typescript components intellisense in projects consuming the library.

    We now use @sveltejs/package to precompile the library before packaging.

## 0.0.1

### Patch Changes

- [#27](https://github.com/StackEng/Stacks-Svelte/pull/27) [`29884be`](https://github.com/StackEng/Stacks-Svelte/commit/29884be417de6656f671dce74dfbf4effaab58bc) Thanks [@giamir](https://github.com/giamir)! - Initial Release

    This is the first release after extracting the stacks svelte codebase in its own dedicated package and repo.
