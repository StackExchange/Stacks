---
title: "Theming"
description: "Stacks provides a robust theming API to handle theming in various contexts."
---

<script lang="ts">
    import { Notice } from '@stackoverflow/stacks-svelte';
    import Example from '$components/Example.svelte';
</script>

## Default theme stops

Stacks provides primary and secondary theme stops that can be overridden in your custom theme.

## Theming API

### Programmatic theme generation

Use `.create-custom-theme-hsl-variables(@color, @tier, @modeCustom)` to create a custom theme.

This function generates two sets of CSS variables: 1) independent h/s/l color variables and 2) variables at each colors stop that reference the h/s/l variables. Provide this function the arguments defined below to generate theme colors which will apply across Stacks.

<div class="overflow-x-auto mb32" tabindex="0">
    <table class="docs-table s-table s-table__bx-simple">
        <thead>
            <tr>
                <th class="s-table--cell2" scope="col">Argument</th>
                <th class="s-table--cell3" scope="col">Type</th>
                <th scope="col">Default</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody class="fs-caption">
            <tr>
                <td><code>@color</code></td>
                <td>HSL, hex, or other color value</td>
                <td></td>
                <td>Color to use to generate theme values.</td>
            </tr>
            <tr>
                <td><code>@tier</code></td>
                <td><code>primary</code> | <code>secondary</code></td>
                <td><code>primary</code></td>
                <td>Color tier to generate.</td>
            </tr>
            <tr>
                <td><code>@modeCustom</code></td>
                <td><code>base</code> | <code>dark</code></td>
                <td><code>base</code></td>
                <td>The color mode the theme applies to.</td>
            </tr>
        </tbody>
    </table>
</div>

#### Format

```css
.theme-custom.themed {
    .create-custom-theme-hsl-variables(hsl(172, 37%, 48%), primary);
    .create-custom-theme-hsl-variables(hsl(259, 29%, 55%), secondary);
    .create-custom-theme-hsl-variables(hsl(201, 70%, 55%), primary, dark);
    .create-custom-theme-hsl-variables(hsl(270, 34%, 40%), secondary, dark);
}
```

#### Example

```css
/* Input */
.theme-custom.themed {
    .create-custom-theme-hsl-variables(hsl(172, 37%, 48%), primary);
}

/* Output */
.theme-custom.themed {
    /* HSL variables */
    --theme-base-primary-color-h: 172;
    --theme-base-primary-color-s: 37%;
    --theme-base-primary-color-l: 48%;
    /* Color variables based on HSL variables */
    --theme-primary-custom: var(--theme-primary-custom-400);
    --theme-primary-custom-100: hsl(var(--theme-base-primary-color-h), calc(var(--theme-base-primary-color-s) + 0 * 1%), clamp(70%, calc(var(--theme-base-primary-color-l) + 50 * 1%), 95%));
    --theme-primary-custom-200: hsl(var(--theme-base-primary-color-h), calc(var(--theme-base-primary-color-s) + 0 * 1%), clamp(55%, calc(var(--theme-base-primary-color-l) + 35 * 1%), 90%));
    --theme-primary-custom-300: hsl(var(--theme-base-primary-color-h), calc(var(--theme-base-primary-color-s) + 0 * 1%), clamp(35%, calc(var(--theme-base-primary-color-l) + 15 * 1%), 75%));
    --theme-primary-custom-400: hsl(var(--theme-base-primary-color-h), calc(var(--theme-base-primary-color-s) + 0 * 1%), clamp(20%, calc(var(--theme-base-primary-color-l) + 0 * 1%), 60%));
    --theme-primary-custom-500: hsl(var(--theme-base-primary-color-h), calc(var(--theme-base-primary-color-s) + 0 * 1%), clamp(15%, calc(var(--theme-base-primary-color-l) + -14 * 1%), 45%));
    --theme-primary-custom-600: hsl(var(--theme-base-primary-color-h), calc(var(--theme-base-primary-color-s) + 0 * 1%), clamp(5%, calc(var(--theme-base-primary-color-l) + -26 * 1%), 30%));
}
```

#### Manual addition of theme variables

If you need to apply a theme without using the above function, you can do so by manually adding the variables above to your CSS. The most common use for this approach is when the theme needs to change client-side, such as when allowing the user to change and preview a theme dynamically.

With this approach, we recommend targeting new h/s/l color variables on a parent element that includes `.themed` class.

### Live playground

<!-- TODO: interactive theme playground -->

<Notice variant="info" class="s-anchors s-anchors__inherit s-anchors__underlined">
    <p>An interactive theme playground is coming soon.</p>
</Notice>

### Theme variables overrides

Stacks provides CSS variables for fine grained control of theming. These variables allow you to adjust the theming on specific components and elements, as well as body background and font color.

```css
--theme-background-color
--theme-body-font-color
--theme-button-active-background-color
--theme-button-color
--theme-button-hover-background-color
--theme-button-hover-color
--theme-button-outlined-border-color
--theme-button-outlined-selected-border-color
--theme-button-primary-active-background-color
--theme-button-primary-background-color
--theme-button-primary-color
--theme-button-primary-hover-background-color
--theme-button-primary-hover-color
--theme-button-primary-number-color
--theme-button-primary-selected-background-color
--theme-button-primary-selected-color
--theme-button-selected-background-color
--theme-button-selected-color
--theme-link-color
--theme-link-color-hover
--theme-link-color-visited
--theme-post-body-font-family
--theme-post-title-color
--theme-post-title-color-hover
--theme-post-title-color-visited
--theme-post-title-font-family
--theme-tag-background-color
--theme-tag-border-color
--theme-tag-color
--theme-tag-hover-background-color
--theme-tag-hover-border-color
--theme-tag-hover-color
--theme-tag-required-background-color
--theme-tag-required-border-color
--theme-tag-required-color
--theme-tag-required-hover-background-color
--theme-tag-required-hover-border-color
--theme-tag-required-hover-color
--theme-topbar-height
```

## Child theming

Stacks allows for further theming various portions of a page. You can simply pair the `.themed` class with an atomic color stop, and a new theming scope. For this example, we're using a class name of `.theme-team-[xxx]` with a unique ID appended.

```html
<div class="bg-theme-primary-740"></div>
<div class="themed theme-team-001 bg-theme-primary-400"></div>
<div class="themed theme-team-002 bg-theme-primary-400"></div>
<div class="themed theme-team-003 bg-theme-primary-400"></div>

<style>
    .theme-team-001 {
        --theme-base-primary-color-h: 349;
        --theme-base-primary-color-s: 81%;
        --theme-base-primary-color-l: 58%;
        --theme-base-secondary-color-h: 349;
        --theme-base-secondary-color-s: 81%;
        --theme-base-secondary-color-l: 58%;
    }

    .theme-team-002 {
        --theme-base-primary-color-h: 41;
        --theme-base-primary-color-s: 93%;
        --theme-base-primary-color-l: 58%;
        --theme-base-secondary-color-h: 41;
        --theme-base-secondary-color-s: 93%;
        --theme-base-secondary-color-l: 58%;
    }

    .theme-team-003 {
        --theme-base-primary-color-h: 288;
        --theme-base-primary-color-s: 76%;
        --theme-base-primary-color-l: 38%;
        --theme-base-secondary-color-h: 288;
        --theme-base-secondary-color-s: 76%;
        --theme-base-secondary-color-l: 38%;

        /* Override colors for dark mode only */
        --theme-dark-primary-color-h: 288;
        --theme-dark-primary-color-s: 45%;
        --theme-dark-primary-color-l: 60%;
        --theme-dark-secondary-color-h: 288;
        --theme-dark-secondary-color-s: 45%;
        --theme-dark-secondary-color-l: 60%;
    }
</style>
```

### Default

<Example>
    <div class="ba bc-black-225 p16 d:bg-black-100">
        <div class="d-flex g24 fd-column">
            <div class="d-flex g8 fd-column">
                <div class="mb4 ff-mono fc-medium">body</div>
                <div class="d-flex g16 ai-center">
                    <div class="s-avatar s-avatar__32 bg-theme-primary-400"></div>
                    <input class="s-input s-input__xs wmx1" aria-label="demo input" placeholder="email" />
                    <button class="s-btn s-btn__sm" type="button">Subscribe</button>
                    <div>
                        <div class="s-pagination">
                            <span class="s-pagination--item is-selected">1</span>
                            <a class="s-pagination--item">2</a>
                            <a class="s-pagination--item">Next</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex g8 fd-column themed theme-team-001">
                <div class="mb4 ff-mono fc-medium">.themed.theme-team-001</div>
                <div class="d-flex g16 ai-center">
                    <div class="s-avatar s-avatar__32 bg-theme-primary-400">
                        <div class="s-avatar--letter">C</div>
                    </div>
                    <input class="s-input s-input__xs wmx1" aria-label="demo input" placeholder="email" />
                    <button class="s-btn s-btn__sm" type="button">Subscribe</button>
                    <div>
                        <div class="s-pagination">
                            <span class="s-pagination--item is-selected">1</span>
                            <a class="s-pagination--item">2</a>
                            <a class="s-pagination--item">Next</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex g8 fd-column themed theme-team-002">
                <div class="mb4 ff-mono fc-medium">.themed.theme-team-002</div>
                <div class="d-flex g16 ai-center">
                    <div class="s-avatar s-avatar__32 bg-theme-primary-400">
                        <div class="s-avatar--letter">C</div>
                    </div>
                    <input class="s-input s-input__xs wmx1" aria-label="demo input" placeholder="email" />
                    <button class="s-btn s-btn__sm" type="button">Subscribe</button>
                    <div>
                        <div class="s-pagination">
                            <span class="s-pagination--item is-selected">1</span>
                            <a class="s-pagination--item">2</a>
                            <a class="s-pagination--item">Next</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex g8 fd-column themed theme-team-003">
                <div class="mb4 ff-mono fc-medium">.themed.theme-team-003</div>
                <div class="d-flex g16 ai-center">
                    <div class="s-avatar s-avatar__32 bg-theme-primary-400">
                        <div class="s-avatar--letter">C</div>
                    </div>
                    <input class="s-input s-input__xs wmx1" aria-label="demo input" placeholder="email" />
                    <button class="s-btn s-btn__sm" type="button">Subscribe</button>
                    <div>
                        <div class="s-pagination">
                            <span class="s-pagination--item is-selected">1</span>
                            <a class="s-pagination--item">2</a>
                            <a class="s-pagination--item">Next</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Example>

### Light forced

<Example>
    <div class="ba bc-black-225 p16 d:bg-black-100 theme-light__forced">
        <div class="d-flex g24 fd-column">
            <div class="d-flex g8 fd-column">
                <div class="mb4 ff-mono fc-medium">.theme-light__forced body</div>
                <div class="d-flex g16 ai-center">
                    <div class="s-avatar s-avatar__32 bg-theme-primary-400"></div>
                    <input class="s-input s-input__xs wmx1" aria-label="demo input" placeholder="email" />
                    <button class="s-btn s-btn__sm" type="button">Subscribe</button>
                    <div>
                        <div class="s-pagination">
                            <span class="s-pagination--item is-selected">1</span>
                            <a class="s-pagination--item">2</a>
                            <a class="s-pagination--item">Next</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex g8 fd-column themed theme-team-001">
                <div class="mb4 ff-mono fc-medium">.theme-light__forced .themed.theme-team-001</div>
                <div class="d-flex g16 ai-center">
                    <div class="s-avatar s-avatar__32 bg-theme-primary-400">
                        <div class="s-avatar--letter">C</div>
                    </div>
                    <input class="s-input s-input__xs wmx1" aria-label="demo input" placeholder="email" />
                    <button class="s-btn s-btn__sm" type="button">Subscribe</button>
                    <div>
                        <div class="s-pagination">
                            <span class="s-pagination--item is-selected">1</span>
                            <a class="s-pagination--item">2</a>
                            <a class="s-pagination--item">Next</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex g8 fd-column themed theme-team-002">
                <div class="mb4 ff-mono fc-medium">.theme-light__forced .themed.theme-team-002</div>
                <div class="d-flex g16 ai-center">
                    <div class="s-avatar s-avatar__32 bg-theme-primary-400">
                        <div class="s-avatar--letter">C</div>
                    </div>
                    <input class="s-input s-input__xs wmx1" aria-label="demo input" placeholder="email" />
                    <button class="s-btn s-btn__sm" type="button">Subscribe</button>
                    <div>
                        <div class="s-pagination">
                            <span class="s-pagination--item is-selected">1</span>
                            <a class="s-pagination--item">2</a>
                            <a class="s-pagination--item">Next</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex g8 fd-column themed theme-team-003">
                <div class="mb4 ff-mono fc-medium">.theme-light__forced .themed.theme-team-003</div>
                <div class="d-flex g16 ai-center">
                    <div class="s-avatar s-avatar__32 bg-theme-primary-400">
                        <div class="s-avatar--letter">C</div>
                    </div>
                    <input class="s-input s-input__xs wmx1" aria-label="demo input" placeholder="email" />
                    <button class="s-btn s-btn__sm" type="button">Subscribe</button>
                    <div>
                        <div class="s-pagination">
                            <span class="s-pagination--item is-selected">1</span>
                            <a class="s-pagination--item">2</a>
                            <a class="s-pagination--item">Next</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Example>

### Dark forced

<Example>
    <div class="ba bc-black-225 p16 bg-black-100 theme-dark__forced">
        <div class="d-flex g24 fd-column">
            <div class="d-flex g8 fd-column">
                <div class="mb4 ff-mono fc-medium">.theme-dark__forced body</div>
                <div class="d-flex g16 ai-center">
                    <div class="s-avatar s-avatar__32 bg-theme-primary-400"></div>
                    <input class="s-input s-input__xs wmx1" aria-label="demo input" placeholder="email" />
                    <button class="s-btn s-btn__sm" type="button">Subscribe</button>
                    <div>
                        <div class="s-pagination">
                            <span class="s-pagination--item is-selected">1</span>
                            <a class="s-pagination--item">2</a>
                            <a class="s-pagination--item">Next</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex g8 fd-column themed theme-team-001">
                <div class="mb4 ff-mono fc-medium">.theme-dark__forced .themed.theme-team-001</div>
                <div class="d-flex g16 ai-center">
                    <div class="s-avatar s-avatar__32 bg-theme-primary-400">
                        <div class="s-avatar--letter">C</div>
                    </div>
                    <input class="s-input s-input__xs wmx1" aria-label="demo input" placeholder="email" />
                    <button class="s-btn s-btn__sm" type="button">Subscribe</button>
                    <div>
                        <div class="s-pagination">
                            <span class="s-pagination--item is-selected">1</span>
                            <a class="s-pagination--item">2</a>
                            <a class="s-pagination--item">Next</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex g8 fd-column themed theme-team-002">
                <div class="mb4 ff-mono fc-medium">.theme-dark__forced .themed.theme-team-002</div>
                <div class="d-flex g16 ai-center">
                    <div class="s-avatar s-avatar__32 bg-theme-primary-400">
                        <div class="s-avatar--letter">C</div>
                    </div>
                    <input class="s-input s-input__xs wmx1" aria-label="demo input" placeholder="email" />
                    <button class="s-btn s-btn__sm" type="button">Subscribe</button>
                    <div>
                        <div class="s-pagination">
                            <span class="s-pagination--item is-selected">1</span>
                            <a class="s-pagination--item">2</a>
                            <a class="s-pagination--item">Next</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex g8 fd-column themed theme-team-003">
                <div class="mb4 ff-mono fc-medium">.theme-dark__forced .themed.theme-team-003</div>
                <div class="d-flex g16 ai-center">
                    <div class="s-avatar s-avatar__32 bg-theme-primary-400">
                        <div class="s-avatar--letter">C</div>
                    </div>
                    <input class="s-input s-input__xs wmx1" aria-label="demo input" placeholder="email" />
                    <button class="s-btn s-btn__sm" type="button">Subscribe</button>
                    <div>
                        <div class="s-pagination">
                            <span class="s-pagination--item is-selected">1</span>
                            <a class="s-pagination--item">2</a>
                            <a class="s-pagination--item">Next</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Example>

<style>
    .theme-team-001 {
        --theme-base-primary-color-h: 349;
        --theme-base-primary-color-s: 81%;
        --theme-base-primary-color-l: 58%;
        --theme-base-secondary-color-h: 349;
        --theme-base-secondary-color-s: 81%;
        --theme-base-secondary-color-l: 58%;

        --theme-dark-primary-color-h: 349;
        --theme-dark-primary-color-s: 81%;
        --theme-dark-primary-color-l: 58%;
        --theme-dark-secondary-color-h: 349;
        --theme-dark-secondary-color-s: 81%;
        --theme-dark-secondary-color-l: 58%;
    }
    .theme-team-002 {
        --theme-base-primary-color-h: 41;
        --theme-base-primary-color-s: 93%;
        --theme-base-primary-color-l: 58%;
        --theme-base-secondary-color-h: 41;
        --theme-base-secondary-color-s: 93%;
        --theme-base-secondary-color-l: 58%;

        --theme-dark-primary-color-h: 41;
        --theme-dark-primary-color-s: 93%;
        --theme-dark-primary-color-l: 58%;
        --theme-dark-secondary-color-h: 41;
        --theme-dark-secondary-color-s: 93%;
        --theme-dark-secondary-color-l: 58%;
    }
    .theme-team-003 {
        --theme-base-primary-color-h: 288;
        --theme-base-primary-color-s: 76%;
        --theme-base-primary-color-l: 38%;
        --theme-base-secondary-color-h: 288;
        --theme-base-secondary-color-s: 76%;
        --theme-base-secondary-color-l: 38%;

        --theme-dark-primary-color-h: 288;
        --theme-dark-primary-color-s: 45%;
        --theme-dark-primary-color-l: 60%;
        --theme-dark-secondary-color-h: 288;
        --theme-dark-secondary-color-s: 45%;
        --theme-dark-secondary-color-l: 60%;
    }
</style>
