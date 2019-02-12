Stacks.addController("docs-resizer", {
    targets: ["resizable", "default"],

    connect: function () {
        this._selected = null;
        this._sizeClass = null;
        if (this.hasDefaultTarget) {
            var evt = document.createEvent('mouseevent');
            evt.initEvent('click', true, true);
            var that = this;
            setTimeout(function () {
                that.defaultTarget.dispatchEvent(evt);
            }, 0);
        }
    },

    small: function (e) {
        this._handleSizeEvent(e, "w4");
    },

    large: function (e) {
        this._handleSizeEvent(e, "w100");
    },

    _handleSizeEvent: function(evt, cls) {
        if (this._sizeClass) {
            this.resizableTarget.classList.remove(this._sizeClass);
        }
        if (this._selected) {
            this._selected.classList.remove("bg-black-100");
            this._selected.classList.remove("fc-black-600");
        }
        this._sizeClass = cls;
        this.resizableTarget.classList.add(cls);
        this._selected = evt.currentTarget;
        evt.currentTarget.classList.add("bg-black-100");
        evt.currentTarget.classList.add("fc-black-600");
        evt.preventDefault();
    }
});
