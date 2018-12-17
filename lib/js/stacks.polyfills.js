// At the time of writing, @stimulus/polyfills adds the following:
//  - [].find
//  - [].findIndex
//  - Array.from
//  - Map
//  - Object.assign
//  - elem.closest
//  - the missing parts of mutation observer for IE11
import "@stimulus/polyfills";

import 'mdn-polyfills/NodeList.prototype.forEach';

// IE11 implements most of the classList stuff that we need,
// so this only adds the missing pieces, using existing functionality
// as much as possible, instead of doing a complete polyfill.
(function () {

    // IE11 doesn't support the two-argument version of classList.toggle
    var elem = document.createElement("span");
    elem.classList.toggle("foo", false);

    // if the element has the class now, that means the second argument
    // was ignored, so we have to modify .toggle to support it.
    if (elem.classList.contains("foo")) {
        var oldToggle = DOMTokenList.prototype.toggle;

        DOMTokenList.prototype.toggle = function (cls, force) {
            if (arguments.length === 1) {
                return oldToggle.apply(this, arguments);
            }
            if (force) {
                this.add(cls);
            } else {
                this.remove(cls);
            }
            return !!force;
        };
    }

    if ("classList" in SVGElement.prototype) {
        return;
    }

    // IE11 supports classList on HTML elements, but not SVG elements,
    // so we have to add it on the latter.
    //
    // Instead of polyfilling the complete logic (class attribute parsing etc.),
    // we use the implementation that the browser already provides. We do this
    // by creating a <span> element and using its .classList to perform the work,
    // and making svg.classList return a proxy-ish object that forwards the relevant
    // function calls to the <span> and updates the SVG's `class` attribute afterwards,
    // if necessary.

    Object.defineProperty(SVGElement.prototype, "classList", {
        get: function () {
            if (this.__polyfilled_classList) {
                return this.__polyfilled_classList;
            }
            var svg = this;
            var span = document.createElement("span");

            span.className = svg.getAttribute("class");
            var spanClassList = span.classList;
            var classList = svg.__polyfilled_classList = Object.create(null);

            function proxyFunction(property, isGetter) {
                return function () {
                    // before proxying the function call, ensure that our <span> has
                    // the same `class` attribute as the SVG
                    var oldClass = svg.getAttribute("class");
                    if (oldClass !== span.className) {
                        span.className = oldClass;
                    }

                    // proxy the function call to the <span>'s .classList
                    var ret;
                    if (isGetter) {
                        ret = spanClassList[property];
                    } else {
                        ret = spanClassList[property].apply(spanClassList, arguments);
                    }

                    // if this caused a change in the <span>'s `class` attribute, update
                    // the SVG to match
                    var newClass = span.className;
                    if (svg.getAttribute("class") !== newClass) {
                        svg.setAttribute("class", newClass);
                    }

                    // return whatever the proxied call returned
                    return ret;
                };
            }


            ["add", "remove", "toggle", "contains", "item"].forEach(function (p) {
                classList[p] = proxyFunction(p, false);
            });
            Object.defineProperty(classList, "length", { get: proxyFunction("length", true) });

            return classList;
        }
    });
})();
