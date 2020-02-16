"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var _a;
    var application = Stimulus.Application.start();
    application.register("docs-resizer", (_a = (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.connect = function () {
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
            ;
            class_1.prototype.small = function (e) {
                this._handleSizeEvent(e, "w40");
            };
            ;
            class_1.prototype.large = function (e) {
                this._handleSizeEvent(e, "w100");
            };
            ;
            class_1.prototype._handleSizeEvent = function (evt, cls) {
                if (!(evt.currentTarget instanceof Element)) {
                    throw "unexpected event";
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
                this._selected = evt.currentTarget;
                evt.currentTarget.classList.add("bg-black-100");
                evt.currentTarget.classList.add("fc-black-600");
                evt.preventDefault();
            };
            return class_1;
        }(Stimulus.Controller)),
        _a.targets = ["resizable", "default"],
        _a));
})();
//# sourceMappingURL=controllers.js.map