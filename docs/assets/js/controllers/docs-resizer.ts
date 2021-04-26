(function(){
    var application = Stimulus.Application.start();
    application.register("docs-resizer", class extends Stimulus.Controller {
        static targets = ["resizable", "default"];
        resizableTarget!: Element;
        resizableTargets!: Element[];
        hasResizableTarget!: boolean;
        defaultTarget!: Element;
        defaultTargets!: Element[];
        hasDefaultTarget!: boolean;
    
        private _selected!: Element | null;
        private _sizeClass!: string | null;
    
        connect() {
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
        };
    
        small(e: Event) {
            this._handleSizeEvent(e, "w40");
        };
    
        large(e: Event) {
            this._handleSizeEvent(e, "w100");
        };
    
        _handleSizeEvent(evt: Event, cls: string) {
            if (!(evt.currentTarget instanceof Element)) {
                throw "unexpected event"
            }
            if (this._sizeClass) {
                this.resizableTarget.classList.remove(this._sizeClass);
            }
            if (this._selected) {
                this._selected.classList.remove("bg-black-100");
                this._selected.classList.remove("fc-black-600");
            }
            this._sizeClass = cls;
            this.resizableTarget.classList.add(cls);
            this._selected = evt.currentTarget as Element;
            evt.currentTarget.classList.add("bg-black-100");
            evt.currentTarget.classList.add("fc-black-600");
            evt.preventDefault();
        }
    });
})();