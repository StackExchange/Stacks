# @stackeng/stacks-svelte

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
