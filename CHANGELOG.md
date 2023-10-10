# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0](https://github.com/StackExchange/Stacks/compare/v1.10.6...v2.0.0) (2023-10-06)

### ⚠ BREAKING CHANGES

> **Note**
> This is a breaking change and will require your references to color atomic classes be remapped.
Please see the **[migration guide](https://github.com/StackExchange/Stacks/blob/develop/MIGRATION_GUIDE.md)** for detailed information on these changes and guidance on migrating.

#### Improvements and additions

- ◑ Color contrast improvements to meet or exceed [APCA](https://git.apcacontrast.com/documentation/README) Lc 60 in standard light and dark modes and WCAG 2.2 AAA in high contrast modes
- 🎨 Simplification of color sets, reducing most sets down to just 6 color stops
- 🔧 Under the hood improvements to custom theme generation
- 🪄 A new custom theme generation function
- 🌓 Fixes to forced light/dark color modes
- 🟣 The addition of a purple color set
- 📝 Improved documentation of [atomic color classes](https://stackoverflow.design/product/base/colors/), [color fundamentals](https://stackoverflow.design/product/base/colors-fundamentals), and [theming](https://stackoverflow.design/product/guidelines/theming/)

#### Deprecations

- The **legacy color sets** are now deprecated. They can be referenced by adding `-legacy` to color references.
See the migration guide section “[Using legacy colors](https://github.com/StackExchange/Stacks/blob/develop/MIGRATION_GUIDE.md#using-legacy-colors)” for more details.
- The **`powder` color set** has not been ported to the new color sets.
See the migration guide section “[Deprecation of powder color set](https://github.com/StackExchange/Stacks/blob/develop/MIGRATION_GUIDE.md#deprecation-of-powder-color-set)” for more details.
- Referencing of **Less variables** has been deprecated.
See the migration guide section “[Deprecation of Less color variables](https://github.com/StackExchange/Stacks/blob/develop/MIGRATION_GUIDE.md#deprecation-of-less-color-variables)” for more details.
- The **custom theme generation function** `.generate-calculated-themed-variables()` has been replaced with `.create-custom-theme-hsl-variables`.
See the migration guide section “[Replacing `.generate-calculated-themed-variables()`](https://github.com/StackExchange/Stacks/blob/develop/MIGRATION_GUIDE.md#replacing-generate-calculated-themed-variables)” for more details.
- The **`.s-btn__primary` button variant** is deprecated.
See the migration guide section “[Deprecation of `.s-btn__primary`](https://github.com/StackExchange/Stacks/blob/develop/MIGRATION_GUIDE.md#deprecation-of-s-btn__primary)” and the [button documentation](https://stackoverflow.design/product/components/buttons/)) for more information.
