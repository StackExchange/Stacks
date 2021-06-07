# Contributing to Stacks

Want to get involved? There are plenty of ways to help! Both internal and external contributors can get involved by submitting new features, fixes, or updates. Before you get started, please take a moment to review this contribution guide. This will make the process easier for everyone involved.

## Table of contents

-   [Open an issue](#open-an-issue)
-   [Reporting bugs](#reporting-bugs)
-   [Feature requests](#feature-requests)
-   [Pull requests](#pull-requests)
-   [Code guidelines](#code-guidelines)
-   [License](#license)
-   [References](#references)

## Open an issue

Before you start anything, we recommend [opening an issue](https://github.com/StackExchange/Stacks/issues/new). This gives the Stacks team and other contributors a chance to provide initial feedback, thoughts, and possible historical context. It may also help you find others who might want to help you out!

When creating an issue, use following labels to help us out:

-   [`bug`](https://github.com/StackExchange/Stacks/labels/bug) – A _reproducible_ problem with the Stacks code. This will require a build version bump (e.g., `v0.1.1` > `v0.1.2`).
-   [`feature`](https://github.com/StackExchange/Stacks/labels/feature) – Issues requesting a new item to Stacks. This will require a minor version bump (e.g., `v0.1.0` > `v0.2.0`).
-   [`enhancement`](https://github.com/StackExchange/Stacks/labels/enhancement) – Issues requesting a feature modification or extension. This will require a minor version bump (e.g., `v0.1.0` > `v0.2.0`).
-   [`docs`](https://github.com/StackExchange/Stacks/labels/docs) - Issues with the documentation site.
-   [`do-not-merge`](https://github.com/StackExchange/Stacks/labels/do-not-merge) - Pull requests that are in progress and should not be merged yet.
-   [`help-wanted`](https://github.com/StackExchange/Stacks/labels/help-wanted) – A person would like help with an issue.
-   [`setup`](https://github.com/StackExchange/Stacks/labels/setup) – Issues related to Stacks setup and compilation processes. These include items relating to `grunt`, `jekyll`, `postcss`, or other plugins.
-   [`status-bydesign`](https://github.com/StackExchange/Stacks/labels/status-bydesign) – Indicates the issue is intentional and not subject to change.
-   [`status-completed`](https://github.com/StackExchange/Stacks/labels/status-completed) – Indicates the issue has been resolved.
-   [`status-declined`](https://github.com/StackExchange/Stacks/labels/status-declined) – Indicates the issue has been reviewed and will not be addressed at this time.
-   [`status-deferred`](https://github.com/StackExchange/Stacks/labels/status-deferred) – Indicates the issue is something that will be addressed, but not in the near term.
-   [`status-planned`](https://github.com/StackExchange/Stacks/labels/status-planned) – Indicates the issue has been reviewed and will be addressed in the near team.
-   [`status-review`](https://github.com/StackExchange/Stacks/labels/status-review) – Indicates the issue has merit, but a decision either way requires more investigation.
-   [`status-reproduced`](https://github.com/StackExchange/Stacks/labels/status-reproduced) – Indicates that the Stacks team were able to reproduce the problem, but cannot address it right now.
-   [`status-norepro`](https://github.com/StackExchange/Stacks/labels/status-norepro) – Indicates that the Stacks team were unable to reproduce the problem.
-   [`meta`](https://github.com/StackExchange/Stacks/labels/meta) – Issues about Stacks or the GitHub repository.

## Reporting bugs

Reporting bugs is a great way to help Stacks. A bug is a _reproducable_ problem with the Stacks code or incorrect (or confusing) documentation. If you’ve found a bug, report it using the following guidelines. Adherence to these guidelines helps us better understand the problem.

1.  [**Search previous issues**](https://github.com/StackExchange/Stacks/issues?utf8=%E2%9C%93&q=) — Make sure this issue hasn't already been reported
2.  **What’s the problem?** — If the issue hasn’t been reported, explain what you are trying to do and what actually happened
3.  **Provide an example** — A CodePen that illustrates the problem is perfect
4.  **Describe what you’ve tried so far** — Understanding what you’ve tried so far will help us respond more quickly. Include possible related issues that you’ve read or explored if you can
5.  **Label your issue as a `bug`**

Issues don’t need to be exhaustive, but we do ask you provide enough details that we can understand the problem and fix the issues.

## Feature requests

Have an idea for how to make Stacks better? Great! We welcome all ideas. There are a few ways you can submit requests: 1) ask us to do it or 2) do it yourself. Either way we do ask that you open an issue first. When opening an issue, provide the following information:

1.  **Proposed feature** – What are you proposing?
2.  **Why do you need it?** — Is this required for a project? What’s your timeline? Have you tried using other elements and components first? Explain to us why this needs to be standardized into Stacks.
3.  **Provide examples** — If you have examples how others have solved this problem, provide those so we can better understand what you're asking for.
4.  **Who do you want to create this?** — Are you building this or do you want the Stacks team to build it?
5.  **Label your issue as a `feature`**

Please note that if you are requesting a feature for the Stacks team to build, it will be prioritized against other work. This doesn’t mean it won’t be added. Depending on the request, it could happen rather quickly. But it may also not happen immediately.

## Pull requests

No PR is too small, or too early. We strive to provide initial feedback within a timely manner. Adherence to the following process is the best way to get your work included within Stacks.

1. **Download Stacks**<br/>
   _For **internal** Stack Overflow contributors_, simply clone the repo:

```bash
# Clone your fork of the repo into the current directory
git clone https://github.com/StackExchange/Stacks.git
# Navigate to the newly cloned directory
cd Stacks
```

_For **external** contributors_, [fork](https://help.github.com/fork-a-repo/) the project, clone your fork, and configure the remotes:

```bash
# Clone your fork of the repo into the current directory
git clone https://github.com/<your-username>/Stacks.git
# Navigate to the newly cloned directory
cd Stacks
# Assign the original repo to a remote called "upstream"
git remote add upstream https://github.com/StackExchange/Stacks.git
```

2. Make sure you have the latest changes from the upstream:<br/>
   _For **internal** Stack Overflow contributors:_

```bash
git checkout develop
git pull origin develop
```

_For **external** contributors:_

```bash
git checkout develop
git pull upstream develop
```

3. Checkout `develop` branch and create a new topic branch for your feature, change, or fix:<br/>
    ```bash
    git checkout develop
    git checkout -b <branch-name>
    ```
4. Commit your changes in logical chunks. Please adhere to these [git commit
   message guidelines](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
   or your code is unlikely to be merged into the main project. Use Git’s
   [interactive rebase](https://help.github.com/articles/interactive-rebase)
   feature to tidy up your commits before making them public.
5. Locally merge (or rebase) the upstream development branch into your topic branch:<br/>
    ```bash
    git pull --rebase upstream develop
    ```
6. Push your branch up to your fork:
    ```bash
    git push origin <branch-name>
    ```
7. [Open a Pull Request](https://github.com/StackExchange/Stacks/pulls)
   with a clear title and description.

**Please note** that all pull requests should be merged into the `develop` branch. Any pull request for `production` will be rejected.

## Code guidelines

### General preferences

We provide an [editor config file](/.editorconfig) to help you adhere to these standards. All files submitted should adhere to these preferences.

-   Use soft tabs with four spaces.
-   Nested elements should be indented once (four spaces).
-   Trim trailing white space on save.
-   Set encoding to UTF-8.
-   Add new line at end of files.

### HTML

#### Syntax

-   Always use double quotes, never single quotes, on attributes.
-   Use tags and elements appropriate for an HTML5 doctype (e.g. self-closing tags).
-   Use [WAI-ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) attributes provided in the documentation examples to promote accessibility.
-   Don’t omit optional closing tags (e.g. `</li>` or `</body>`).
-   In body copy, use smart punctuation. `’` instead of `'`. See [Smart Quotes for Smart People](http://smartquotesforsmartpeople.com/) for more information.
-   Copy should be written in sentence-casing (or [downstyle casing](https://en.wiktionary.org/wiki/downstyle#English)).

#### Attribute Order

HTML attributes should be listed in the following order for easier reading:

1.  `class`
2.  `id`, `name`
3.  `data-[name]`
4.  `src`, `for`, `type`, `href`, `value`
5.  `title`, `alt`
6.  `role`, `aria-[name]`

Classes are reusable so they come first. Ids are more specific and should be used sparingly, so they come second. Order classes the following way:

1.  Atomic classes (In the same fashion as our Less ordering)
2.  Component classes
3.  View classes
4.  JS classes
5.  State classes

#### Boolean attributes

A boolean attribute is one that needs no declared value. XHTML required you to declare a value, but HTML5 has no such requirement. If you must include the attribute’s value, and **you don’t need to**, follow this [WhatWG guideline](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes):

> If the attribute is present, its value must either be the empty string or […] the attribute’s canonical name, with no leading or trailing whitespace.

_In short, don’t add a value._

```html
<!-- Not so great -->
<input type="text" disabled="disabled" />

<!-- Better -->
<input type="text" disabled />
```

#### Reducing markup

Whenever possible, avoid superfluous parent elements when writing HTML. Many times this requires iteration and refactoring, but produces less HTML. Take the following example:

```html
<!-- Not so great -->
<span class="avatar">
    <img src="…" />
</span>

<!-- Better -->
<img class="avatar" src="…" />
```

#### Javascript-generated markup

Writing markup in a JavaScript file makes the content harder to find, harder to edit, and less performant. Avoid it whenever possible.

### CSS / Less

#### Syntax

-   Use a variable. You shouldn’t be hard-coding pixel values or colors.
-   When commenting, use `// Double slash` comments instead of `/* Slash star */`.
-   When grouping selectors, keep individual selectors on their own line.
-   Include one space before the opening brace of declaration blocks for legibility.
-   Place closing braces of declaration blocks on a new line.
-   Include one space after `:` for each declaration.
-   Each declaration should appear on its own line for more accurate error reporting.
-   End all declarations with a semi-colon. The last declaration’s is optional, but your code is more error prone without it.
-   Comma-separated property values should include a space after each comma (e.g., `box-shadow`).
-   Include spaces after commas within `rgb()`, `rgba()`, `hsl()`, `hsla()`, or `rect()` values.
-   Prefix property values or color parameters with a leading zero (e.g., `.5` should be `0.5` and `-.5px` should be `-0.5px`).
-   Use our pre-defined color variables instead of hard-coding hex values where possible.
-   Quote attribute values in selectors, e.g., `input[type="text"]`. [They’re only optional in some cases](http://mathiasbynens.be/notes/unquoted-attribute-values#css), and it’s a good practice for consistency.
-   Generally, we should avoid specifying `0` as a value, but when doing so avoid specifying units for zero values, e.g., `margin: 0;` instead of `margin: 0px;`.

#### Declaration Order

Instead of ordering declarations alphabetically, we logically group items together. [Field Manuals](https://manuals.gravitydept.com/code/css/properties) does a great job explaining this idea. Ordering Less this way helps people to understand maintain the code.

The ordering works from outside the box to inside the box:

| Group                                                                                        | Decision being made                             | Property examples                                                                                                                                                              |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1. Generated content                                                                         | Items like `:before`/`:after` are listed first. | `content`, `list-style`, `quotes`                                                                                                                                              |
| 2. Flow Context<br/>3. Position Model<br/>4. Float Model<br/>5. Flex Model<br/>6. Grid Model | Interplay and relationship between boxes        | `display`, `overflow`, `visibility`<br/>`clip`, `position`, `z-index`, `top`<br/>`clear`, `float`<br/>`flex`, `align-content`, `order`<br/>`grid`, `grid-gap`, `grid-template` |
| 7. Box Model                                                                                 | Dimensions of the box                           | `box-sizing`, `width`, `height`, `margin`, `padding`, `border`                                                                                                                 |
| 8. Visual Box                                                                                | How the box appears                             | `background`, `box-shadow`, `opacity`, `outline`                                                                                                                               |
| 9. Typography                                                                                | Font and color appearance                       | `color`, `font-size`, `line-height`, `text-align`, `vertical-align`, `white-space`                                                                                             |
| 10. Animation<br/>11. Transform<br/>12. Transition                                           | Changing the box's representation 2D/3D/4D      | `animation`, `animation-delay`<br/>`backface-visibility`, `perspective`, `transform`<br/>`transition`, `transition-delay`                                                      |
| 13. Will Change                                                                              | Rendering optimization                          | `will-change`                                                                                                                                                                  |
| 14. Pointer + Selection                                                                      | Modify the user's input tool                    | `appearance`, `cursor`, `pointer-events`                                                                                                                                       |

For the most part you will not have to worry about this because PostCSS automatically reorders all Less files for you.

#### Shorthand Notation

Avoid using shorthand declaration unless you are explicitly setting all the available values. Commonly overused shorthand properties include:

-   `padding`
-   `margin`
-   `font`
-   `background`
-   `border`
-   `border-radius`

Typically you don’t need to set all the values the shorthand property represents. Shorthand properties have a higher specificity than their longform counterparts. They also reset undeclared property values, which leads to unintended side effects. The Mozilla Developer Network has a [great article on shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) for those unfamiliar with notation and behavior.

```css
// Avoid this
.element {
    margin: 0 0 10px;
    background: red;
    background: url("image.jpg");
    border-radius: 3px 3px 0 0;
}

// Do this
.element {
    margin-bottom: 10px;
    background-color: red;
    background-image: url("image.jpg");
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
```

## License

By contributing to Stacks, you agree to license your work under Stacks’ [MIT License](https://github.com/StackExchange/Stacks/blob/production/LICENSE.MD).

## References

The following contribution guides were used as references when creating this one: [Grommet](https://github.com/grommet/grommet/blob/production/CONTRIBUTING.md), [Salesforce Lightning Design System](https://github.com/salesforce-ux/design-system/blob/production/CONTRIBUTING.md), and [Bootstrap](https://github.com/twbs/bootstrap/blob/production/CONTRIBUTING.md).
