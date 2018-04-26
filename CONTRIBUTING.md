# Contributing to Stacks

Want to get involved? There are plenty of way you can help! Both internal and external contributors can get involved by submitting new features, fixes or updates. We are thrilled to review all help and will do our best to process them as quickly as possible.

Before you start coding though, we recommend [opening an issue](https://gh.stackoverflow.com/Design/Stacks/issues/new) to discuss your idea. This gives the Stack team and other contributors the chance to provide feedback, possible historical context, and find out others who might want to help you out!

When you move ahead with your issue, please start a new branch and [open a pull request](https://gh.stackoverflow.com/Design/Stacks/pulls) to merge it into the `develop` branch. No pull requests will be merged into `master`.

If you want to raise an issue or file a bug, please use the guidelines below.

## Reporting bugs

One great way you can help Stacks is by reporting bugs. A bug is a reproducable problem with the Stacks code or incorrect or confusing documentation. When submitting a bug or issue, please do the following:

 1. [**Search previous issues**](https://gh.stackoverflow.com/Design/Stacks/issues?utf8=%E2%9C%93&q=) — Maybe this issue has been reported previously? If so, re-open the issue and provide more details there.
 2. **What's the problem?** — Explain what you wanted to happen or are trying to do.
 3. **Provide the simplest block of code to reproduce the problem** — This will help us isolate the problem.
 4. **Describe what you've tried so far** — Understanding what you've tried so far will help us respond more quickly.
 5. **Label your issue as a "bug"**

Issues don't need to be exhaustive, but we do ask you enough details. This will help us respond and fix issues quickly.

## Feature requests

Have an idea for how to make Stacks better? Great! We welcome all ideas. When submitting a request, please include the following information:

 1. **What's your suggestion?**
 2. **Why do you need it?** — Is this required for a project? What's your timeline? Have you tried using other elements and components first? Explain to us why this needs to be standardized into Stacks.
 3. **Provide examples** — If you have examples how others have solved this problem, provide those so we can better understand what you're asking for.

## Pull requests

We welcome all contributions. No PR is too small. We strive to provide initial feedback on a PR within 2 business days. If your PR isn't accepted initially, that's okay. We'll work with you as much as we can.

## Code syntax

All pull requests should match our code syntax standards:

**For HTML**
 - Use soft tabs with four spaces.
 - Nested elements should be indented once (four spaces).
 - Always use double quotes, never single quotes, on attributes.
 - Don’t include a trailing slash in self-closing elements—the [HTML5 spec](http://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag) says they’re optional.
 - Don’t omit optional closing tags (e.g. `</li>` or `</body>`).
 - In body copy, use smart punctuation. `’` instead of `'`. See [Smart Quotes for Smart People](http://smartquotesforsmartpeople.com/) for more information.
 - When possible, use sentence case.

**For Less**
 - Use a variable. You shouldn’t be hard-coding pixel values or colors.
 - Use soft tabs with four spaces.
 - When commenting, use `// Double slash` comments instead of `/* Slash star */`.
 - When grouping selectors, keep individual selectors on their own line.
 - Include one space before the opening brace of declaration blocks for legibility.
 - Place closing braces of declaration blocks on a new line.
 - Include one space after `:` for each declaration.
 - Each declaration should appear on its own line for more accurate error reporting.
 - End all declarations with a semi-colon. The last declaration’s is optional, but your code is more error prone without it.
 - Comma-separated property values should include a space after each comma (e.g., `box-shadow`).
 - Include spaces after commas within `rgb()`, `rgba()`, `hsl()`, `hsla()`, or `rect()` values.
 - Prefix property values or color parameters with a leading zero (e.g., `.5` should be `0.5` and `-.5px` should be `-0.5px`).
 - Use our pre-defined color variables instead of hard-coding hex values where possible.
 - Quote attribute values in selectors, e.g., `input[type="text"]`. [They’re only optional in some cases](http://mathiasbynens.be/notes/unquoted-attribute-values#css), and it’s a good practice for consistency.
 - Generally, we should avoid specifying `0` as a value, but when doing so avoid specifying units for zero values, e.g., `margin: 0;` instead of `margin: 0px;`.

We provide an [editor config file](/.editorconfig) to help you adhere to these standards.

## License

By contributing to Stacks, you agree to license your work under the [MIT License](https://gh.stackoverflow.com/Design/Stacks/blob/develop/LICENSE.MD).

## References

This contribution guide was pulled from Stack Overflow and contribution guides for [Grommet](https://github.com/grommet/grommet/blob/master/CONTRIBUTING.md), [Salesforce Lightning Design System](https://github.com/salesforce-ux/design-system/blob/master/CONTRIBUTING.md), and [Bootstrap](https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md).
