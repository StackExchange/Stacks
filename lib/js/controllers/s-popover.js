(function () {
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

        get $popover() {
            return $('#' + $(this.element).attr('aria-controls'));
        },

        get isVisible() {
            return this.$popover.hasClass(visibleClass);
        },

        _updateAria: function () {
            this.$source.attr('aria-expanded', this.isVisible ? 'true' : 'false');
        },

        _reposition: function () {

            var $popover = this.$popover;
            var $source = this.$source;

            function hasArrow(directions) {
                var selector = $.map(arguments, function (d) { return '.s-popover--arrow__' + d; }).join(',');
                return $popover.find(selector).length === 1;
            }

            var sourcePosition = $source.position();
            var bL = sourcePosition.left;
            var bT = sourcePosition.top;
            var bR = bL + $source.outerWidth();
            var bB = bT + $source.outerHeight();
            var bC = (bL + bR) / 2;
            var bM = (bT + bB) / 2;

            var pH = $popover.outerHeight();
            var pW = $popover.outerWidth();

            var popoverLeft;

            if (hasArrow('tl', 'bl')) {
                popoverLeft = bC - arrowInset;
            } else if (hasArrow('tc', 'bc')) {
                popoverLeft = bC - pW / 2;
            } else if (hasArrow('tr', 'br')) {
                popoverLeft = bC - pW + arrowInset;
            } else if (hasArrow('lt', 'lc', 'lb')) {
                popoverLeft = bR + (arrowHeight + arrowMargin);
            } else if (hasArrow('rt', 'rc', 'rb')) {
                popoverLeft = bL - pW - (arrowHeight + arrowMargin);
            }

            var popoverTop;

            if (hasArrow('tl', 'tc', 'tr')) {
                popoverTop = bB + (arrowHeight + arrowMargin);
            } else if (hasArrow('bl', 'bc', 'br')) {
                popoverTop = bT - pH - (arrowHeight + arrowMargin);
            } else if (hasArrow('lt', 'rt')) {
                popoverTop = bM - arrowInset;
            } else if (hasArrow('lc', 'rc')) {
                popoverTop = bM - pH / 2;
            } else if (hasArrow('lb', 'rb')) {
                popoverTop = bM - pH + arrowInset;
            }

            $popover.css({
                top: (popoverTop | 0) + "px",
                left: (popoverLeft | 0) + "px"
            });
        },

        toggle: function (e) {
            e.preventDefault();
            this._toggle();
        },

        _toggle: function () {
            if (!this.isVisible) {
                this.$source.trigger(this.identifier + ':show');
                this._reposition();
            }
            this.$popover.toggleClass(visibleClass);
            this._updateAria();
            if (!this.isVisible) {
                this.$source.trigger(this.identifier + ':hide');
            }
        },

        documentClick: function (e) {
            var target = e.target;
            if (!$.contains(document.documentElement, target)
                || !this.isVisible
                || this.$popover.has(target).length > 0 || this.$popover.is(target)
                || this.$source.has(target).length > 0 || this.$source.is(target)
                || $(target).parents(possibleChildSelector).length > 0 || $(target).is(possibleChildSelector)) {
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
            $(document).on('click' + this.eventSuffix, this.documentClick.bind(this));
            $(document).on('keyup' + this.eventSuffix, this.documentKeyup.bind(this));
            $(window).on('resize' + this.eventSuffix, this.windowResize.bind(this));
        },

        disconnect: function () {
            $(document).off(this.eventSuffix);
            $(window).off(this.eventSuffix);
        },
    });
})();