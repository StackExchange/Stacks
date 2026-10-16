---
"@stackoverflow/stacks": patch
---

Use solid backgrounds for buttons so APCA checks can measure their base color contrast. Render the two-tone selected styling on an inner decorative layer for buttons and checked radio labels, with separate regression tests for contrast against both visible colors. Transparent borders now show a thin solid-color rim around that layer. Axe's built-in WCAG contrast rules still report selected pseudo-element backgrounds as incomplete.
