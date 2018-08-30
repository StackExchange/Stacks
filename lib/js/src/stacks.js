
(function () {
    var application = Stimulus.Application.start();

    function createController(name, data) {
        var controller = function () {
            Stimulus.Controller.apply(this, arguments);
        };
        controller.prototype = Object.create(Stimulus.Controller.prototype, {
            constructor: { value: controller, enumerable: false }
        });
        Object.setPrototypeOf(controller, Stimulus.Controller);

        var targets;
        for (var prop in data) if (data.hasOwnProperty(prop)) {
            if (prop === "targets") {
                targets = data[prop];
                Object.defineProperty(controller, "targets", {
                    get: function () { return targets; },
                    enumerable: false
                });
            } else {
                controller.prototype[prop] = data[prop];
            }
        }
        return controller;
    }


    var modalController = createController("s-modal", {
        targets: ["container"],
        close: function(event) {
            this.containerTarget.setAttribute("aria-hidden", "true");
            this.containerTarget.setAttribute("tabindex", "-1");
        },
        confirm: function() {
            // we don't do anything by default yet
        },
    })

    application.register("s-modal", modalController);

    var modalController = createController("s-modalListener", {
        targets: ["container"],
        connect: function () {
            console.log("We have a modalListener");
        },
        open: function() {
            // we don't do anything by default yet
        },
    })

    application.register("s-modalListener", modalController);

    application.register("s-auto-overflow", createController("s-auto-overflow", {
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
    }));

})()
