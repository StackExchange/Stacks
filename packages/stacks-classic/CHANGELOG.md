# @stackoverflow/stacks

## 3.0.0-beta.5

### Minor Changes

- [#2008](https://github.com/StackExchange/Stacks/pull/2008) [`4610d3a`](https://github.com/StackExchange/Stacks/commit/4610d3a6f8183a3e57208b6b8780cfa9aba393c4) Thanks [@ttaylor-stack](https://github.com/ttaylor-stack)! - Update button to new Shine styles

    BREAKING CHANGES:
    - The secondary style `outlined` has been removed i.e. `.s-btn__outlined`
    - The variant `Muted` has been removed
    - `s-btn__md` has been removed

- [#2043](https://github.com/StackExchange/Stacks/pull/2043) [`6f6d576`](https://github.com/StackExchange/Stacks/commit/6f6d576b65cd0db5d9ed2747d8cba474d4633680) Thanks [@giamir](https://github.com/giamir)! - Navigation updates:
    - Deprecated muted variant (`.s-navigation__muted`)

### Patch Changes

- [#2057](https://github.com/StackExchange/Stacks/pull/2057) [`ec61da3`](https://github.com/StackExchange/Stacks/commit/ec61da30c742ea7be21de11e932381d34e36bdba) Thanks [@dancormier](https://github.com/dancormier)! - Change popover close icon to Cross

## 3.0.0-beta.4

### Minor Changes

- [#2046](https://github.com/StackExchange/Stacks/pull/2046) [`5e49f0b`](https://github.com/StackExchange/Stacks/commit/5e49f0b6b2361058bc941f81ee90fb9a5158e961) Thanks [@dancormier](https://github.com/dancormier)! - Update Menu to SHINE styles; add Svelte component

- [#2035](https://github.com/StackExchange/Stacks/pull/2035) [`0b1841d`](https://github.com/StackExchange/Stacks/commit/0b1841d147ff8e9dc369c4bb758b3a11d1fafc73) Thanks [@ttaylor-stack](https://github.com/ttaylor-stack)! - Update pagination component to match new SHINE design system

    BREAKING CHANGES
    The next button now uses an ArrowRight and ArrowLeft icon instead of text. To apply the new styling, add the `item__nav` class to pagination items that represent the "Next" button.

### Patch Changes

- [#2054](https://github.com/StackExchange/Stacks/pull/2054) [`13b6189`](https://github.com/StackExchange/Stacks/commit/13b6189f3228a506fa6a607ef65cac7a45a912c9) Thanks [@dancormier](https://github.com/dancormier)! - Fix dark mode orange color

## 3.0.0-beta.3

### Minor Changes

- [#2038](https://github.com/StackExchange/Stacks/pull/2038) [`e0da077`](https://github.com/StackExchange/Stacks/commit/e0da0777c7bf2b3aca8e82e0a8542820c361291b) Thanks [@mukunku](https://github.com/mukunku)! - feat(tags): updates tag component designs for project SHINE

    BREAKING CHANGES

    Tag sizes `xs` and `md` have been removed.

- [#2013](https://github.com/StackExchange/Stacks/pull/2013) [`35fe29b`](https://github.com/StackExchange/Stacks/commit/35fe29b0af58cafe4858e11f1c4061409d1c120b) Thanks [@dancormier](https://github.com/dancormier)! - Update Bling component to match SHINE styles

### Patch Changes

- [#2048](https://github.com/StackExchange/Stacks/pull/2048) [`7233e20`](https://github.com/StackExchange/Stacks/commit/7233e2035ea9c2f034da4249ef3eb7031f86ce1e) Thanks [@dancormier](https://github.com/dancormier)! - Simplify tag styles, tweak docs

- [#2047](https://github.com/StackExchange/Stacks/pull/2047) [`8854903`](https://github.com/StackExchange/Stacks/commit/8854903e12f642e627131bcca99ac0ccb961ba5c) Thanks [@mukunku](https://github.com/mukunku)! - chore(tags): tweak padding for new tag styles

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
