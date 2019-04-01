(function () {
    "use strict";
    var arrowHeight = 8;
    var arrowMargin = 4;
    var arrowPadding = 12;
    var arrowInset = arrowPadding + arrowHeight;

    var visibleClass = 'is-visible';
    var possibleChildSelector = '.s-modal, .s-toast, .tag-suggestions';
    var popoverIndex = 0;

    Stacks.addController('s-popover', {

        initialize: function () {
            this.eventSuffix = '.s-popover-' + (popoverIndex++);
        },

        get $source() {
            return $(this.element);
        },

        get _popover() {
            return document.getElementById(this.element.getAttribute("aria-controls"));
        },

        get isVisible() {
            return this._popover.classList.contains(visibleClass);
        },

        _updateAria: function () {
            this.element.setAttribute('aria-expanded', this.isVisible ? 'true' : 'false');
        },

        _reposition: function () {
            function hasArrow(popover, directions) {
                var selector = directions.map(function (d) { return '.s-popover--arrow__' + d; }).join(',');
                return popover.querySelectorAll(selector).length === 1;
            }

            var bL = this.element.offsetLeft;
            var bT = this.element.offsetTop;
            var bR = bL + this.element.offsetWidth;
            var bB = bT + this.element.offsetHeight;
            var bC = (bL + bR) / 2;
            var bM = (bT + bB) / 2;

            var pH = this._popover.offsetHeight;
            var pW = this._popover.offsetWidth;

            var popoverLeft;

            if (hasArrow(this._popover, ['tl', 'bl'])) {
                popoverLeft = bC - arrowInset;
            } else if (hasArrow(this._popover, ['tc', 'bc'])) {
                popoverLeft = bC - pW / 2;
            } else if (hasArrow(this._popover, ['tr', 'br'])) {
                popoverLeft = bC - pW + arrowInset;
            } else if (hasArrow(this._popover, ['lt', 'lc', 'lb'])) {
                popoverLeft = bR + (arrowHeight + arrowMargin);
            } else if (hasArrow(this._popover, ['rt', 'rc', 'rb'])) {
                popoverLeft = bL - pW - (arrowHeight + arrowMargin);
            }

            var popoverTop;

            if (hasArrow(this._popover, ['tl', 'tc', 'tr'])) {
                popoverTop = bB + (arrowHeight + arrowMargin);
            } else if (hasArrow(this._popover, ['bl', 'bc', 'br'])) {
                popoverTop = bT - pH - (arrowHeight + arrowMargin);
            } else if (hasArrow(this._popover, ['lt', 'rt'])) {
                popoverTop = bM - arrowInset;
            } else if (hasArrow(this._popover, ['lc', 'rc'])) {
                popoverTop = bM - pH / 2;
            } else if (hasArrow(this._popover, ['lb', 'rb'])) {
                popoverTop = bM - pH + arrowInset;
            }

            this._popover.style.top = (popoverTop | 0) + "px";
            this._popover.style.left = (popoverLeft | 0) + "px";
        },

        toggle: function (e) {
            e.preventDefault();
            this._toggle();
        },

        _toggle: function () {
            this.triggerEvent(this.isVisible ? "hide": "show");
            this._popover.classList.toggle(visibleClass);
            this._updateAria();
            if (this.isVisible) {
                this._reposition();
            }
        },

        documentClick: function (e) {
            var target = e.target;
            if(!document.documentElement.contains(target)
                || !this.isVisible
                || this._popover === target || this._popover.contains(target)
                || this.element === target || this.element.contains(target)) {
                return;
            }

            this._toggle();
        },

        documentKeyup: function (e) {
            var target = e.target;
            if (e.which === 27 && this.isVisible && $(possibleChildSelector).length === 0) {
                if (this.$popover.has(target).length > 0 || this.$popover.is(target)) { this.$source.focus(); }
                this._toggle();
            }
        },

        windowResize: function (e) {
            if (this.isVisible) { this._reposition(); }
        },

        connect: function () {
            $(document).on('keyup' + this.eventSuffix, this.documentKeyup.bind(this));
            $(window).on('resize' + this.eventSuffix, this.windowResize.bind(this));
            document.addEventListener('click', this.documentClick.bind(this));
        },

        disconnect: function () {
            $(document).off(this.eventSuffix);
            $(window).off(this.eventSuffix);
            document.removeEventListener('click');
        },
    });
})();