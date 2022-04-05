import "@highlightjs/cdn-assets/highlight.min.js"; // TODO move away from using cdn-assets?
var { StacksEditor } = require("@stackoverflow/stacks-editor");

new StacksEditor(
    document.querySelector("#editor-example-1"),
    "",
    {}
);

new StacksEditor(
    document.querySelector("#editor-example-2"),
    document.querySelector("#editor-content-2").value,
    {
        parserFeatures: {
            tables: true,
        },
    }
);