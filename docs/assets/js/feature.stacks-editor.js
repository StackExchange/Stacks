new window.stacksEditor.StacksEditor(
    document.querySelector("#editor-example-1"),
    "",
    {}
);

new window.stacksEditor.StacksEditor(
    document.querySelector("#editor-example-2"),
    document.querySelector("#editor-content-2").value,
    {
        parserFeatures: {
            tables: true,
        },
    }
);