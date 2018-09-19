Stacks.addController("s-auto-overflow", {
    targets: ["visible", "overflow"],

    initialize: function () {
        var that = this;
        var iframe = document.createElement("IFRAME");
        iframe.src = "about:blank";
        iframe.style.position = "absolute";
        iframe.style.opacity = "0";
        iframe.style.width = "100%";
        iframe.style.pointerEvents = "none";
        iframe.style.height = "1px";
        iframe.style.zIndex = "-1000";
        iframe.addEventListener("load", function () {
            iframe.contentWindow.addEventListener("resize", function () {
                that.onResize();
            });
        })
        this.element.appendChild(iframe);
    },

    onResize: function () {
        var thisRect = this.element.getClientRects()[0];
        while (this.overflowTarget.children.length) {
            this.visibleTarget.appendChild(this.overflowTarget.children[0]);
        }
        var anyOverflown = false;
        for (var i = this.visibleTarget.children.length - 1; i >= 0; i--) {
            var child = this.visibleTarget.children[i];
            var rect = child.getClientRects()[0];
            if (rect.left + rect.width >= thisRect.right) {
                var children = this.overflowTarget.children;
                if (!children.length)
                    this.overflowTarget.appendChild(child);
                else
                    this.overflowTarget.insertBefore(child, children[0]);
            }
            anyOverflown = true;
        }
    }
});
