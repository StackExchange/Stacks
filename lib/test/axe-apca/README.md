# axe-apca

⚠️ *Once this package become more mature and stable it should be extracted in its own repo (e.g. StackExchange/axe-apca) and published as an npm package. This will allow to use the rule/checks in many contexts including our Core codebase.*

This package contains custom axe rules and checks for [APCA](https://readtech.org/) Bronze and Silver+ [conformance levels](https://readtech.org/ARC/tests/visual-readability-contrast/?tn=criterion).

## Usage

### Installation

⚠️ *The following command doesn't work because this package is not published on npm yet.*

```bash
npm install --save-dev axe-core axe-apca
```

### Setup

```js
import axe from "axe-core";
import { registerAxeAPCA } from 'axe-apca';

registerAxeAPCA('bronze'); // or registerAxeAPCA('silver');

 // consider turning off default WCAG 2.1 AA color contrast rules when using APCA
axe.configure({
    rules: [{ id: "color-contrast", enabled: false }]
})

 axe.run(document, (err, results) => {
    if (err) throw err;
    console.log(results);
});
```

### Using custom APCA thresholds

To set custom thresholds for APCA checks, follow these steps:

1. Use `custom` as the first argument when calling `registerAxeAPCA`.
1. Provide a function as the second argument, optionally accepting `fontSize` and `fontWeight` arguments.


```js
const customConformanceThresholdFn = (fontSize) => {
    return parseFloat(fontSize) >= 32 ? 45 : 60;
};

registerAxeAPCA('custom', customConformanceThresholdFn);
```