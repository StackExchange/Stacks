# axe-apca

⚠️ *Once this package become more mature and stable it should be extracted in its own repo (e.g. StackExchange/axe-apca) and published as an npm package. This will allow to use the rule/checks in many contexts including our Core codebase.*

This package contains custom axe rules and checks for [APCA](https://readtech.org/) Bronze and Silver+ [conformance levels](https://readtech.org/ARC/tests/visual-readability-contrast/?tn=criterion).

## Usage

### Install

⚠️ *The following command doesn't work yet because this package is not published on npm yet.*

```bash
npm install --save-dev axe-core axe-apca
```

### Import

```js
import { registerAxeAPCA } from 'axe-apca';

registerAxeAPCA('bronze');
// or
registerAxeAPCA('silver');

 // consider turning off default WCAG 2.1 AA color contrast rules when using APCA
axe.configure({
    rules: [{ id: "color-contrast", enabled: false }]
})
```

### Use

```js
import axe from "axe-core";

 axe.run(document, (err, results) => {
    if (err) throw err;
    console.log(results);
});
```
