---
title: Accessibility
description: A non-comprehensive guide to accessibility best practices when using Stacks.
updated: 2026-02-12
---

<script>
  import Grid from '$components/Grid.svelte'
  import GridColumn from '$components/GridColumn.svelte'

  import { Icon } from '@stackoverflow/stacks-svelte';
  import {
    IconCheckFillCircle,
    IconCrossFillCircle,
    IconAlert,
    IconCompose,
    IconHome,
    IconList,
    IconPlus,
    IconDocument,
    IconCode,
    IconLink
  } from '@stackoverflow/stacks-icons'
</script>

## Target

All Stack Overflow product UIs must conform to the AA conformance level of the Web Content Accessibility Guidelines (WCAG) 2.2 with a few exceptions around color contrast documented below.

### High contrast modes

When high contrast mode is enabled, Stack Overflow product UIs must meet or exceed the [Success Criterion 1.4.6 Contrast (Enhanced)](https://www.w3.org/TR/WCAG22/#contrast-enhanced) of the [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) and should conform to the remaining [AAA conformance level rules](https://www.w3.org/TR/WCAG22/#cc1) when reasonably achievable. This only applies to the subset of Stack Overflow products that provide high contrast modes. **Note: not all Stack Overflow products are expected to support high contrast modes**.

## Visual accessibility

Stack Overflow product UIs MUST conform to a custom conformance level of the Accessible Perceptual Contrast Algorithm (APCA). This custom conformance level replaces the [AA conformance level](https://www.w3.org/TR/WCAG22/#cc1) of the [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) for color contrast.

### Color & contrast

Stacks aims to equip you with an accessible color palette and has been tested against WCAG AA, WCAG AAA and the newer APCA color standards. Most of our color combinations meet WCAG AA and APCA levels defined below. We also offer high contrast mode which offers a greater level of contrast.

#### Contrast ratios

Contrast is the difference in luminance or color between any two elements. All visual readers require ample luminance contrast for fluent readability. Stack Overflow products must conform to a custom conformance level of the Accessible Perceptual Contrast Algorithm (APCA). Based on our custom conformance level, all text must have a Lightness contrast (Lc) value of 60, body copy must have a Lc value of 75, icons must have a Lc value of 45, and placeholder and disabled text must have a Lc of 30. These numbers will be negative when calculating for dark mode.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <p class="mb16">Use low luminance contrast that fails our standards.</p>
    <div class="d-flex ai-center g8 fw-wrap">
      <button class="s-btn s-btn__filled bg-theme-secondary-200">Button</button>
      <div class="bar-pill ta-center px8 py2 bg-green-400 fc-green-300">Robotics</div>
    </div>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <p class="mb16">Use luminance contrast that meets our standards as defined above.</p>
    <div class="d-flex ai-center g8 fw-wrap">
      <button class="s-btn s-btn__filled">Button</button>
      <div class="bar-pill ta-center px8 py2 bg-green-400 fc-white">Robotics</div>
    </div>
  </GridColumn>
</Grid>

#### Visual cues

Visual readers with color vision deficiency (CVD) have problems differentiating some hues and therefore these users need help discerning differences between items. This means that color (hue) should never be the sole means of communicating information and should always be paired with a non-color dependent indicator to accommodate all visual users.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <p class="mb16">Use color alone to convey meaning.</p>
    <div class="d-flex ps-relative w100 has-error">
      <input class="s-input" type="text" placeholder="placeholder" />
    </div>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <p class="mb16">Use an icon alongside color to convey meaning.</p>
    <div class="d-flex ps-relative w100 has-error">
      <input class="s-input" type="text" placeholder="placeholder" />
      <Icon src={IconAlert} class="s-input-icon" />
    </div>
  </GridColumn>
</Grid>

## Focus states

Some people navigate through a website by using a keyboard or other device (instead of a mouse). A focus state should clearly let users know which item they're on and is ready to interact with. Stack's has taken a hybrid approach in using both the browser's default styles (smaller interactive components like text links) and a custom focus ring.

### Foundation for custom approach

The custom approach adds two different outline rings on the inside of the component. The outer ring color uses `secondary-theme-400` (matching the primary button color) and the inner ring color uses `white` (matching the background).

<div class="d-grid fw-wrap gx24 gy64 jc-space-evenly bg-black-100 bar-md mb16 mt32 py32 px8 grid__2 mb32">
  <div class="ta-center">
    <button class="s-btn s-btn__filled s-btn__dropdown s-btn__icon" role="presentation">
      <Icon src={IconCompose} /> Button
    </button>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Default</p>
    </div>
  </div>
  <div class="ta-center">
    <button class="s-btn s-btn__filled s-btn__dropdown s-btn__icon focus-inset-bordered" role="presentation">
      <Icon src={IconCompose} /> Button
    </button>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Focus</p>
    </div>
  </div>
</div>

The outer ring color will always display as the theme color even when applied to a `muted` or `danger` styled button. This ensures the focus ring maintains a 3:1 color contrast ratio for any adjacent colors (WCAG level AA) within any theme (assuming the `secondary-theme` color already passes the 3:1 contrast ratio).

<div class="d-grid fw-wrap gx24 gy64 jc-space-evenly bg-black-100 bar-md mb16 py32 px8 grid__4 md:grid__2">
  <div class="ta-center">
    <button class="s-btn s-btn__dropdown s-btn__icon s-btn__tonal" role="presentation">
      <Icon src={IconCompose} /> Button
    </button>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Tonal default</p>
    </div>
  </div>
  <div class="ta-center">
    <button class="s-btn s-btn__dropdown s-btn__icon s-btn__tonal focus-inset-bordered" role="presentation">
      <Icon src={IconCompose} /> Button
    </button>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Tonal focus</p>
    </div>
  </div>
  <div class="ta-center">
    <button class="s-btn s-btn__danger s-btn__filled s-btn__dropdown s-btn__icon" role="presentation">
      <Icon src={IconCompose} /> Button
    </button>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Danger filled default</p>
    </div>
  </div>
  <div class="ta-center">
    <button class="s-btn s-btn__danger s-btn__filled s-btn__dropdown s-btn__icon focus-inset-bordered" role="presentation">
      <Icon src={IconCompose} /> Button
    </button>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Danger filled focus</p>
    </div>
  </div>
</div>

### Meeting level AAA

Both focus rings are always 2px thick. This allows the focus state to meet [WCAG 2.4.13 Focus Appearance (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html) standards for High Contrast mode. Whenever possible, the rings should be added to the inside of the component so we can better ensure that the rings don't get accidentally cut off by the surrounding layout (which helps us to meet [WCAG 2.4.11 Focus Not Obscured AA](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)). However, this does result in a padding reduction within the element, surrounding the text. When choosing to set the focus rings on the inside (inset), the component must have at least 4px of padding at the smallest size. This has been applied to buttons, button groups, navigation, pagination and topbar.

When the padding amount is not sufficient enough to support a double ring on the inside of the component, the rings are placed on the outside. The components included are tags, toggles, form elements (input fields, selects, radio/checkboxes…), block links and the editor.

<div class="d-grid fw-wrap gx24 gy64 jc-space-evenly bg-black-100 bar-md mb16 py32 px8 grid__4 md:grid__2">
  <div class="ta-center">
    <span class="s-tag" role="presentation">javascript</span>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Tag default</p>
    </div>
  </div>
  <div class="ta-center">
    <span class="s-tag focus-bordered" role="presentation">javascript</span>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Tag focus</p>
    </div>
  </div>
  <div class="ta-center">
    <input class="s-toggle-switch" type="checkbox" role="presentation" />
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Toggle default</p>
    </div>
  </div>
  <div class="ta-center">
    <input class="s-toggle-switch focus" type="checkbox" role="presentation" />
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Toggle focused</p>
    </div>
  </div>
</div>

### Consistent style patterns

#### Filled

Any component that already has an existing background color that fills the shape will maintain its original fill color.

<div class="d-grid fw-wrap gx24 gy64 jc-space-evenly bg-black-100 bar-md mb16 py32 px8 grid__4 md:grid__2">
  <div class="ta-center">
    <div class="d-flex ai-center jc-center h32">
      <ul class="s-navigation" role="presentation">
        <li class="m-auto">
          <a href="#" class="s-navigation--item is-selected">
            <span class="s-navigation--item-text" data-text="Product">Product</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Navigation active default</p>
    </div>
  </div>
  <div class="ta-center">
    <div class="d-flex ai-center jc-center h32">
      <ul class="s-navigation" role="presentation">
        <li class="m-auto">
          <a href="#" class="s-navigation--item is-selected focus-inset">
            <span class="s-navigation--item-text" data-text="Product">Product</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Navigation active focus</p>
    </div>
  </div>
  <div class="ta-center">
    <div class="d-flex ai-center jc-center h32">
      <div class="d-flex jc-space-around">
        <div class="s-toggle-switch s-toggle-switch__multiple">
          <input type="radio" name="toggle-multi-default" id="toggle-multi-default-four" checked />
          <label for="toggle-multi-default-four" class="s-toggle-switch--label-off">Off</label>
          <input type="radio" name="toggle-multi-default" id="toggle-multi-default-one" />
          <label for="toggle-multi-default-one">Weekly</label>
        </div>
      </div>
    </div>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Toggle (multi) default</p>
    </div>
  </div>
  <div class="ta-center">
    <div class="d-flex ai-center jc-center h32">
      <div class="d-flex jc-space-around">
        <div class="s-toggle-switch s-toggle-switch__multiple">
          <input type="radio" name="toggle-multi-focused" id="toggle-multi-focused-four" checked />
          <label for="toggle-multi-focused-four" class="s-toggle-switch--label-off focus-inset">Off</label>
          <input type="radio" name="toggle-multi-focused" id="toggle-multi-focused-one" />
          <label for="toggle-multi-focused-one">Weekly</label>
        </div>
      </div>
    </div>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Toggle (multi) focused</p>
    </div>
  </div>
</div>

#### Bordered

For components that have an existing border around the component when not in focus, a background fill color is added in addition to the focus rings. This ensures there's a strong enough visual difference between the non-focus and focus state. These patterns are maintained across all components for consistency.

<div class="d-grid fw-wrap gx24 gy64 jc-space-evenly bg-black-100 bar-md mb16 py32 px8 grid__4 md:grid__2">
  <div class="ta-center">
    <div class="s-pagination">
      <span class="s-pagination--item m-auto" role="presentation">
        <span class="v-visible-sr">page</span>
        2
      </span>
    </div>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Pagination default</p>
    </div>
  </div>
  <div class="ta-center">
    <div class="s-pagination">
      <span class="s-pagination--item m-auto focus-inset-bordered" role="presentation">
        <span class="v-visible-sr">page</span>
        2
      </span>
    </div>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Pagination focus</p>
    </div>
  </div>
</div>

#### Floating

Components without an existing fill or border will only display the double rings on focus. Since the inner ring matches the background color in most cases, this will visually appear like a single ring around the perimeter of the component.

<div class="d-grid fw-wrap gx24 gy64 jc-space-evenly bg-black-100 bar-md mb16 py32 px8 grid__4 md:grid__2">
  <div class="ta-center">
    <div class="d-flex ai-center jc-center h32">
      <a class="s-block-link bar-md mx-auto wmx1" href="#" role="presentation">
        <Icon src={IconHome} /> Home
      </a>
    </div>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Navigation default</p>
    </div>
  </div>
  <div class="ta-center">
    <div class="d-flex ai-center jc-center h32">
      <a class="s-block-link bar-md mx-auto wmx1 focus-inset" href="#" role="presentation">
        <Icon src={IconHome} /> Home
      </a>
    </div>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Navigation focus</p>
    </div>
  </div>
  <div class="ta-center">
    <div class="d-flex ai-center jc-center h32">
      <button class="s-btn s-btn__clear s-btn__dropdown bar-md bg-transparent p1 pr12" role="presentation">
        <Icon src={IconList} />
        <span class="v-visible-sr">List</span>
      </button>
      <button class="s-btn s-btn__clear bar-md bg-transparent p1" role="presentation">
        <Icon src={IconPlus} />
        <span class="v-visible-sr">Insert</span>
      </button>
      <button class="s-btn s-btn__clear bar-md bg-transparent p1" role="presentation">
        <Icon src={IconDocument} />
        <span class="v-visible-sr">Document</span>
      </button>
      <button class="s-btn s-btn__clear bar-md bg-transparent p1" role="presentation">
        <Icon src={IconCode} />
        <span class="v-visible-sr">Code</span>
      </button>
      <button class="s-btn s-btn__clear bar-md bg-transparent p1" role="presentation">
        <Icon src={IconLink} />
        <span class="v-visible-sr">Link</span>
      </button>
    </div>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Editor icon default</p>
    </div>
  </div>
  <div class="ta-center">
    <div class="d-flex ai-center jc-center h32">
      <button class="s-btn s-btn__clear s-btn__dropdown bar-md bg-transparent p1 pr12" role="presentation">
        <Icon src={IconList} />
        <span class="v-visible-sr">List</span>
      </button>
      <button class="s-btn s-btn__clear bar-md bg-transparent p1 focus-inset-bordered fc-black" role="presentation">
        <Icon src={IconPlus} />
        <span class="v-visible-sr">Insert</span>
      </button>
      <button class="s-btn s-btn__clear bar-md bg-transparent p1" role="presentation">
        <Icon src={IconDocument} />
        <span class="v-visible-sr">Document</span>
      </button>
      <button class="s-btn s-btn__clear bar-md bg-transparent p1" role="presentation">
        <Icon src={IconCode} />
        <span class="v-visible-sr">Code</span>
      </button>
      <button class="s-btn s-btn__clear bar-md bg-transparent p1" role="presentation">
        <Icon src={IconLink} />
        <span class="v-visible-sr">Link</span>
      </button>
    </div>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Editor icon focus</p>
    </div>
  </div>
</div>

#### Exceptions

The exceptions to this pattern are the `Clear` button variations. All buttons display a background fill layer when in focus. `Clear`, `Outline` and `Filled` styles will all look the same when in focus. The fill color was chosen to match the existing `Filled` style.

<div class="d-grid fw-wrap gx24 gy64 jc-space-evenly bg-black-100 bar-md mb16 py32 px8 grid__4 md:grid__2">
  <div class="ta-center">
    <button class="s-btn s-btn__dropdown s-btn__icon" role="presentation">
      <Icon src={IconCompose} /> Button
    </button>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Clear default</p>
    </div>
  </div>
  <div class="ta-center">
    <button class="s-btn s-btn__dropdown s-btn__icon focus-inset-bordered" role="presentation">
      <Icon src={IconCompose} /> Button
    </button>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Clear focus</p>
    </div>
  </div>
  <div class="ta-center">
    <button class="s-btn s-btn__tonal s-btn__dropdown s-btn__icon" role="presentation">
      <Icon src={IconCompose} /> Button
    </button>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Tonal default</p>
    </div>
  </div>
  <div class="ta-center">
    <button class="s-btn s-btn__tonal s-btn__dropdown s-btn__icon focus-inset-bordered" role="presentation">
      <Icon src={IconCompose} /> Button
    </button>
    <div class="ps-relative mt16">
      <div class="ps-absolute bc-black-200 bs1 bt bbw2 h0 l50 ml-neg4 w8"></div>
      <p class="fs-caption fc-black-500 mt16 mx-auto">Tonal default focus</p>
    </div>
  </div>
</div>

### Browser default

Some focusable elements and Stacks components currently do not include custom focus styling. These elements will instead render the browser-default focus indicators.

## Viewport size

All Stack Overflow products must conform to the [WCAG 2.2 SC 1.4.10: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). This requires that our product UIs support viewports as small as **320px x 256px** without requiring the user scrolling in multiple dimensions (unless an element requires it for usage or meaning). Very few users will ever use a viewport this small, but it's important to support it so users can zoom in up to 400% and still have a usable experience. At 400% zoom, a 320x256 viewport translates to 1280x1024, which is a common resolution for many users. Supporting this small viewport size ensures that users with low vision can still use our products effectively.

### Exceptions

There are some exceptions to this rule. Some elements such as tables and videos may require horizontal scrolling on small viewports. In these cases, it's acceptable to require scrolling in two dimensions. See the [WCAG 2.2 documentation on Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html#content-exceptions-for-reflow) for detailed guidance.

## Landmarks

[ARIA landmarks](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role) should be used across Stack Overflow product pages to provide clear navigation structures for users relying on assistive technologies. Landmarks are inserted into the page explicitly using the `role` attribute on an element (e.g. `role="search"`, etc...) or by leveraging semantic HTML (e.g. an `header` element is given automatically the `banner` landmark).

Using semantic HTML elements should be preferred over using the `role` attribute whenever possible.

For a comprehensive guide on using ARIA landmark roles refer to:

- [WCAG ARIA11 Technique](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)
- [Using HTML landmark roles to improve accessibility](https://developer.mozilla.org/en-US/blog/aria-accessibility-html-landmark-roles)
- [Landmarks Browser Extension](https://matatk.agrip.org.uk/landmarks)
