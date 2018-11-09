
import "@stimulus/polyfills";

import 'mdn-polyfills/NodeList.prototype.forEach';

(function () {

    var elem = document.createElement("span");
    elem.classList.toggle("foo", false);
    if (elem.classList.contains("foo")) {
        var oldToggle = DOMTokenList.prototype.toggle;

        DOMTokenList.prototype.toggle = function (cls, force) {
            if (arguments.length === 1) {
                return oldToggle.apply(this, arguments);
            }
            force = !!force;
            if (force) {
                this.add(cls);
            } else {
                this.remove(cls);
            }
            return force;
        };
    }

    if ("classList" in SVGElement.prototype) {
        return;
    }

    Object.defineProperty(SVGElement.prototype, "classList", {
        get: function () {
            if (this.__classList) {
                return this.__classList;
            }
            var svg = this;
            var span = document.createElement("span");
            span.className = svg.getAttribute("class");
            var spanClassList = span.classList;
            var classList = svg.__classList = Object.create(null);
            ["add", "remove", "toggle", "contains"].forEach(function (p) {
                classList[p] = function () {
                    var ret = spanClassList[p].apply(spanClassList, arguments);
                    var newClass = span.className;
                    if (svg.getAttribute("class") !== newClass) {
                        svg.setAttribute("class", newClass);
                    }
                    return ret;
                };
            });
            return classList;
        }
    });
})();
