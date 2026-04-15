---
title: "Editor"
description: "The Stacks editor adds \"what you see is what you get\" and Markdown capabilities to textareas. It is available as a separate <a href=\"https://github.com/StackExchange/Stacks-Editor\">Editor</a> repository, but requires Stacks' CSS for styling."
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=610-18806"
---

<script lang="ts">
    import Example from '$components/Example.svelte';
    import StacksEditorDemo from '$components/StacksEditorDemo.svelte';
</script>

Because of its size, the Stacks editor is bundled independently of Stacks. You can install it a few ways:

## Installation

### NPM

The Stacks Editor is available as an NPM package. To make it available in your node modules, `npm install @stackoverflow/stacks-editor`

### Import via Modules or CommonJS

```javascript
import { StacksEditor } from "@stackoverflow/stacks-editor";
// Don't forget to include the styles as well
import "@stackoverflow/stacks-editor/styles.css";

new StacksEditor(
    document.querySelector("#editor-container"),
    "*Hello* World!",
    {}
);
```

### Import via script tag

```html
<!-- Include the bundled styles -->
<link rel="stylesheet" src="path/to/node_modules/@stackoverflow/stacks-editor/dist/styles.css"/>

<div id="editor-container"></div>

<!-- highlight.js is not included in the bundle, but is required -->
<script src="path/to/highlight.pack.js"></script>
<script src="path/to/node_modules/@stackoverflow/stacks-editor/dist/app.bundle.js"></script>
<script>
    new window.stacksEditor.StacksEditor(
        document.querySelector("#editor-container"),
        "*Hello* World!",
        {}
    );
</script>
```

## Configuration

There are several options you can pass to the Stacks Editor.

## Examples

### Empty

```html
<div id="editor-example-1"></div>
<script>
    new window.stacksEditor.StacksEditor(
        document.querySelector("#editor-example-1"),
        "",
        {}
    );
</script>
```

<Example>
    <StacksEditorDemo />
</Example>

### Textarea content with tables enabled

```html
<textarea id="editor-content-2" class="d-none">…</textarea>
<div id="editor-example-2"></div>
<script>
    new window.stacksEditor.StacksEditor(
        document.querySelector("#editor-example-2"),
        document.querySelector("#editor-content-2").value,
        { parserFeatures: { tables: true } }
    );
</script>
```

<Example>
    <StacksEditorDemo
        content="# Hello World\n\nThis is a *markdown* editor with **tables** enabled.\n\n| Column 1 | Column 2 |\n|---|---|\n| Cell 1 | Cell 2 |"
        options={{ parserFeatures: { tables: true } }}
    />
</Example>
