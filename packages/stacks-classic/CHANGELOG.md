# @stackoverflow/stacks

## 3.0.0-beta.2

### Minor Changes

- [#2015](https://github.com/StackExchange/Stacks/pull/2015) [`66bfd40`](https://github.com/StackExchange/Stacks/commit/66bfd409b4643db3970457eb884066aa799c15d9) Thanks [@dancormier](https://github.com/dancormier)! - Updated colors for SHINE

- [#2028](https://github.com/StackExchange/Stacks/pull/2028) [`c9bd0f6`](https://github.com/StackExchange/Stacks/commit/c9bd0f6ed0286bd2b1b2935662f96c537445bf12) Thanks [@dancormier](https://github.com/dancormier)! - Update typography for new SHINE design system

### Patch Changes

- [#2037](https://github.com/StackExchange/Stacks/pull/2037) [`73c8edd`](https://github.com/StackExchange/Stacks/commit/73c8edd05eacee5d26e9267279a1cb5b32923710) Thanks [@dancormier](https://github.com/dancormier)! - Add legacy sm, lg border radius custom properties

## 3.0.0-beta.1

### Minor Changes

- [#2026](https://github.com/StackExchange/Stacks/pull/2026) [`2a4a741`](https://github.com/StackExchange/Stacks/commit/2a4a74100534b2020aa7e9ebecd956a2aa15a74e) Thanks [@ttaylor-stack](https://github.com/ttaylor-stack)! - Update border radius for new SHINE design system

    BREAKING CHANGE:
    - bar-sm and bar-lg are deprecated use bar-md instead

- [#2030](https://github.com/StackExchange/Stacks/pull/2030) [`da8616a`](https://github.com/StackExchange/Stacks/commit/da8616a618e0d0f36f768a7f6600b5b6e129b314) Thanks [@ttaylor-stack](https://github.com/ttaylor-stack)! - Update popover component to match SHINE styles

    BREAKING CHANGES:
    - `s-popover--arrow` css class has been removed

### Patch Changes

- [#2019](https://github.com/StackExchange/Stacks/pull/2019) [`e9b8885`](https://github.com/StackExchange/Stacks/commit/e9b888585e2d145e4216ea413904bba83a4faa80) Thanks [@giamir](https://github.com/giamir)! - **Avatar Updates:**
    - **Stacks Classic**: Made avatar border squared. Introduced `.s-avatar--indicator` class for positioning an activity indicator element in relation to the avatar.
    - **Stacks Svelte**: Introduced a new `status` prop. When set to `online` it will show an activity indicator on the avatar.

- [#2027](https://github.com/StackExchange/Stacks/pull/2027) [`4bd5612`](https://github.com/StackExchange/Stacks/commit/4bd561230e43bb411a58f1cf975c0a5f62a205fe) Thanks [@giamir](https://github.com/giamir)! - **Activity Indicator Updates:**
    - **Stacks Classic**: Updated activity indicator component to the new visual language (default 16x16). Introduced `.s-activity-indicator__sm` variant (10x10).
    - **Stacks Svelte**: Added new `ActivityIndicator` component.

## 3.0.0-beta.0

### Major Changes

- [#1994](https://github.com/StackExchange/Stacks/pull/1994) [`83db25a`](https://github.com/StackExchange/Stacks/commit/83db25abba127a1ff8ce1e239c644992266b2d44) Thanks [@dancormier](https://github.com/dancormier)! - enter prerelease mode for project shine

## 2.8.6

### Patch Changes

- [#1982](https://github.com/StackExchange/Stacks/pull/1982) [`aed3725`](https://github.com/StackExchange/Stacks/commit/aed37250448e620f1af3dc1d063c1d90aa604671) Thanks [@mukunku](https://github.com/mukunku)! - chore(docs): add readme for each workspace

## 2.8.5

### Patch Changes

- [#1969](https://github.com/StackExchange/Stacks/pull/1969) [`1add86d`](https://github.com/StackExchange/Stacks/commit/1add86d0987e24bb1cc43022620747b717b8059d) Thanks [@mukunku](https://github.com/mukunku)! - SPARK-12: Move to monorepo setup by splitting Stacks Docs and Classic into NPM workspaces

## 2.8.4

### Patch Changes

- [#1965](https://github.com/StackExchange/Stacks/pull/1965) [`236f4a5`](https://github.com/StackExchange/Stacks/commit/236f4a56b9785f6487e58a7647b30dd296ab37b5) Thanks [@ttaylor-stack](https://github.com/ttaylor-stack)! - [SPARK-6] - update the notice border color for dark mode and high contrast dark mode

## 2.8.3

### Patch Changes

- [#1963](https://github.com/StackExchange/Stacks/pull/1963) [`9c08388`](https://github.com/StackExchange/Stacks/commit/9c083886cb57ee343e455f2d36c584aa6f021022) Thanks [@mukunku](https://github.com/mukunku)! - SPARK-8: Fix Modal text selection issue when using keyboard

## 2.8.2

### Patch Changes

- [#1894](https://github.com/StackExchange/Stacks/pull/1894) [`ed521b9`](https://github.com/StackExchange/Stacks/commit/ed521b964e4d587ccfe1cc0c539c012a91ee8015) Thanks [@qheaden-stack](https://github.com/qheaden-stack)! - Set selected navigation items to bold

## 2.8.1

### Patch Changes

- [#1958](https://github.com/StackExchange/Stacks/pull/1958) [`4f0b3aa`](https://github.com/StackExchange/Stacks/commit/4f0b3aa6ae0ee0cdbfe1df03f1cfdb15728879c2) Thanks [@dancormier](https://github.com/dancormier)! - Remove unneeded will-change CSS property on modal

## 2.8.0

### Minor Changes

- [#1925](https://github.com/StackExchange/Stacks/pull/1925) [`279502e`](https://github.com/StackExchange/Stacks/commit/279502e8acfc35b560cfbe7250a63e4f5b95e722) Thanks [@dancormier](https://github.com/dancormier)! - Add skeleton component

## 2.7.5

### Patch Changes

- [#1913](https://github.com/StackExchange/Stacks/pull/1913) [`9ba53d2`](https://github.com/StackExchange/Stacks/commit/9ba53d2d0e1f8333dd38ec3b0aa03c8a8f29db12) Thanks [@dancormier](https://github.com/dancormier)! - Update cursor styles for disabled, readonly inputs

## 2.7.4

### Patch Changes

- [`9309a97`](https://github.com/StackExchange/Stacks/commit/9309a9718be88771a31691823de3ef0b6c8037ec) Thanks [@giamir](https://github.com/giamir)! - upgrade library dependencies
