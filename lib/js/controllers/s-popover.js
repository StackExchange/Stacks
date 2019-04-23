(function () {
    "use strict";
    var arrowHeight = 8;
    var arrowMargin = 4;
    var arrowPadding = 12;
    var arrowInset = arrowPadding + arrowHeight;

    var visibleClass = 'is-visible';
    var modalClass = 'is-modal';
    var possibleChildSelector = '.s-modal, .s-toast';

    Stacks.addController('s-popover', {

        initialize: function () {
            this._boundDocumentKeyup = this.documentKeyup.bind(this);
            this._boundWindowResize = this.windowResize.bind(this);
            this._boundDocumentClick = this.documentClick.bind(this);
            this._boundWindowScroll = this.windowScroll.bind(this);
        },

        get _popover() {
            return document.getElementById(this.element.getAttribute("aria-controls"));
        },

        get isVisible() {
            return this._popover.classList.contains(visibleClass);
        },

        get isInViewport() {
            var bounding = this._popover.getBoundingClientRect();
            var padding = arrowMargin + arrowHeight;
            return (
                bounding.top - padding >= 0 &&
                bounding.left - padding >= 0 &&
                bounding.bottom + padding <= (window.innerHeight || document.documentElement.clientHeight) &&
                bounding.right + padding <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },

        _updateAria: function () {
            this.element.setAttribute('aria-expanded', this.isVisible ? 'true' : 'false');
            this._popover.setAttribute('aria-hidden', !this.isVisible ? 'true' : 'false');
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

        _showModal: function() {
            this._popover.classList.add(modalClass);
        },

        toggle: function (e) {
            e.preventDefault();
            this._toggle();
        },

        _toggle: function () {
            this.triggerEvent(this.isVisible ? "hide": "show");
            this._popover.classList.toggle(visibleClass);
            this._updateAria();
            this._reposition();
            if (this.isVisible) {
                if (!this.isInViewport) {
                    this._showModal();
                }
            } else {
                this._popover.classList.remove(modalClass);
            }
        },

        documentClick: function (e) {
            var target = e.target;
            if(!document.documentElement.contains(target)
                || !this.isVisible
                || this._popover.contains(target)
                || this.element.contains(target)) {
                return;
            }

            this._toggle();
        },

        documentKeyup: function (e) {
            var target = e.target;

            if (!document.documentElement.contains(target)
                || !this.isVisible
                || e.which !== 27
                || document.querySelector(possibleChildSelector) !== null) {
                return;
            }

            if (this._popover.contains(target)) { this.element.focus(); }
            this._toggle();
        },

        windowResize: function (e) {
            if (this.isVisible) { this._reposition(); }
        },

        windowScroll: function(e) {
            if (this.isVisible) { this._reposition(); }
        },

        connect: function () {
            document.addEventListener('keyup', this._boundDocumentKeyup);
            document.addEventListener('click', this._boundDocumentClick);
            window.addEventListener('resize', this._boundWindowResize);
            window.addEventListener('scroll', this._boundWindowScroll);
        },

        disconnect: function () {
            document.removeEventListener('keyup', this._boundDocumentKeyup);
            document.removeEventListener('click', this._boundDocumentClick);
            window.removeEventListener('resize', this._boundWindowResize);
            window.removeEventListener('scroll', this._boundWindowScroll);
        },
    });
})();