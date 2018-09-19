Stacks.addController("s-modal", {
    targets: ["container"],
    connect: function () {
        console.log("We have a modal");
    },
    open: function() {
        // we don't do anything by default yet
    },
});

Stacks.addController("s-modalListener", {
    targets: ["container"],
    connect: function () {
        console.log("We have a modalListener");
    },
    open: function() {
        // we don't do anything by default yet
    },
});

