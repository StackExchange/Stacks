/*INFO
 * Output built from Stacks-Editor commit f5d2dc1e4215756d9bf88805dafb9cee4e261ce9
 * You can view all changes (and file diffs) via the GitHub ui like so:
 * https://github.com/StackEng/Stacks-Editor/compare/LAST_COMMIT_HASH_HERE...f5d2dc1e4215756d9bf88805dafb9cee4e261ce9
*/
!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory(require("highlight.js/lib/core"), require("highlight.js/lib/languages/markdown"), require("highlight.js/lib/languages/bash"), require("highlight.js/lib/languages/c-like"), require("highlight.js/lib/languages/cpp"), require("highlight.js/lib/languages/csharp"), require("highlight.js/lib/languages/coffeescript"), require("highlight.js/lib/languages/xml"), require("highlight.js/lib/languages/java"), require("highlight.js/lib/languages/json"), require("highlight.js/lib/languages/perl"), require("highlight.js/lib/languages/python"), require("highlight.js/lib/languages/ruby"), require("highlight.js/lib/languages/clojure"), require("highlight.js/lib/languages/css"), require("highlight.js/lib/languages/dart"), require("highlight.js/lib/languages/erlang"), require("highlight.js/lib/languages/go"), require("highlight.js/lib/languages/haskell"), require("highlight.js/lib/languages/javascript"), require("highlight.js/lib/languages/kotlin"), require("highlight.js/lib/languages/lisp"), require("highlight.js/lib/languages/scheme"), require("highlight.js/lib/languages/lua"), require("highlight.js/lib/languages/matlab"), require("highlight.js/lib/languages/mathematica"), require("highlight.js/lib/languages/ocaml"), require("highlight.js/lib/languages/protobuf"), require("highlight.js/lib/languages/r"), require("highlight.js/lib/languages/rust"), require("highlight.js/lib/languages/scala"), require("highlight.js/lib/languages/sql"), require("highlight.js/lib/languages/swift"), require("highlight.js/lib/languages/vhdl"), require("highlight.js/lib/languages/vbscript")) : "function" == typeof define && define.amd ? define([ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,  ], factory) : "object" == typeof exports ? exports.stacksEditor = factory(require("highlight.js/lib/core"), require("highlight.js/lib/languages/markdown"), require("highlight.js/lib/languages/bash"), require("highlight.js/lib/languages/c-like"), require("highlight.js/lib/languages/cpp"), require("highlight.js/lib/languages/csharp"), require("highlight.js/lib/languages/coffeescript"), require("highlight.js/lib/languages/xml"), require("highlight.js/lib/languages/java"), require("highlight.js/lib/languages/json"), require("highlight.js/lib/languages/perl"), require("highlight.js/lib/languages/python"), require("highlight.js/lib/languages/ruby"), require("highlight.js/lib/languages/clojure"), require("highlight.js/lib/languages/css"), require("highlight.js/lib/languages/dart"), require("highlight.js/lib/languages/erlang"), require("highlight.js/lib/languages/go"), require("highlight.js/lib/languages/haskell"), require("highlight.js/lib/languages/javascript"), require("highlight.js/lib/languages/kotlin"), require("highlight.js/lib/languages/lisp"), require("highlight.js/lib/languages/scheme"), require("highlight.js/lib/languages/lua"), require("highlight.js/lib/languages/matlab"), require("highlight.js/lib/languages/mathematica"), require("highlight.js/lib/languages/ocaml"), require("highlight.js/lib/languages/protobuf"), require("highlight.js/lib/languages/r"), require("highlight.js/lib/languages/rust"), require("highlight.js/lib/languages/scala"), require("highlight.js/lib/languages/sql"), require("highlight.js/lib/languages/swift"), require("highlight.js/lib/languages/vhdl"), require("highlight.js/lib/languages/vbscript")) : root.stacksEditor = factory(root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs, root.hljs);
}(window, (function(__WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__76__, __WEBPACK_EXTERNAL_MODULE__77__, __WEBPACK_EXTERNAL_MODULE__78__, __WEBPACK_EXTERNAL_MODULE__79__, __WEBPACK_EXTERNAL_MODULE__80__, __WEBPACK_EXTERNAL_MODULE__81__, __WEBPACK_EXTERNAL_MODULE__82__, __WEBPACK_EXTERNAL_MODULE__83__, __WEBPACK_EXTERNAL_MODULE__84__, __WEBPACK_EXTERNAL_MODULE__85__, __WEBPACK_EXTERNAL_MODULE__86__, __WEBPACK_EXTERNAL_MODULE__87__, __WEBPACK_EXTERNAL_MODULE__88__, __WEBPACK_EXTERNAL_MODULE__89__, __WEBPACK_EXTERNAL_MODULE__90__, __WEBPACK_EXTERNAL_MODULE__91__, __WEBPACK_EXTERNAL_MODULE__92__, __WEBPACK_EXTERNAL_MODULE__93__, __WEBPACK_EXTERNAL_MODULE__94__, __WEBPACK_EXTERNAL_MODULE__95__, __WEBPACK_EXTERNAL_MODULE__96__, __WEBPACK_EXTERNAL_MODULE__97__, __WEBPACK_EXTERNAL_MODULE__98__, __WEBPACK_EXTERNAL_MODULE__99__, __WEBPACK_EXTERNAL_MODULE__100__, __WEBPACK_EXTERNAL_MODULE__101__, __WEBPACK_EXTERNAL_MODULE__102__, __WEBPACK_EXTERNAL_MODULE__103__, __WEBPACK_EXTERNAL_MODULE__104__, __WEBPACK_EXTERNAL_MODULE__105__, __WEBPACK_EXTERNAL_MODULE__106__, __WEBPACK_EXTERNAL_MODULE__107__, __WEBPACK_EXTERNAL_MODULE__108__, __WEBPACK_EXTERNAL_MODULE__109__) {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                enumerable: !0,
                get: getter
            });
        }, __webpack_require__.r = function(exports) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(exports, "__esModule", {
                value: !0
            });
        }, __webpack_require__.t = function(value, mode) {
            if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
            var ns = Object.create(null);
            if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                enumerable: !0,
                value: value
            }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
            return ns;
        }, __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 111);
    }([ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function OrderedMap(content) {
            this.content = content;
        }
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return ContentMatch;
        })), __webpack_require__.d(__webpack_exports__, "b", (function() {
            return DOMParser;
        })), __webpack_require__.d(__webpack_exports__, "c", (function() {
            return DOMSerializer;
        })), __webpack_require__.d(__webpack_exports__, "d", (function() {
            return Fragment;
        })), __webpack_require__.d(__webpack_exports__, "e", (function() {
            return Mark;
        })), __webpack_require__.d(__webpack_exports__, "f", (function() {
            return MarkType;
        })), __webpack_require__.d(__webpack_exports__, "g", (function() {
            return Node;
        })), __webpack_require__.d(__webpack_exports__, "h", (function() {
            return NodeRange;
        })), __webpack_require__.d(__webpack_exports__, "i", (function() {
            return NodeType;
        })), __webpack_require__.d(__webpack_exports__, "j", (function() {
            return ReplaceError;
        })), __webpack_require__.d(__webpack_exports__, "k", (function() {
            return index_es_Schema;
        })), __webpack_require__.d(__webpack_exports__, "l", (function() {
            return Slice;
        })), OrderedMap.prototype = {
            constructor: OrderedMap,
            find: function(key) {
                for (var i = 0; i < this.content.length; i += 2) if (this.content[i] === key) return i;
                return -1;
            },
            get: function(key) {
                var found = this.find(key);
                return -1 == found ? void 0 : this.content[found + 1];
            },
            update: function(key, value, newKey) {
                var self = newKey && newKey != key ? this.remove(newKey) : this, found = self.find(key), content = self.content.slice();
                return -1 == found ? content.push(newKey || key, value) : (content[found + 1] = value, 
                newKey && (content[found] = newKey)), new OrderedMap(content);
            },
            remove: function(key) {
                var found = this.find(key);
                if (-1 == found) return this;
                var content = this.content.slice();
                return content.splice(found, 2), new OrderedMap(content);
            },
            addToStart: function(key, value) {
                return new OrderedMap([ key, value ].concat(this.remove(key).content));
            },
            addToEnd: function(key, value) {
                var content = this.remove(key).content.slice();
                return content.push(key, value), new OrderedMap(content);
            },
            addBefore: function(place, key, value) {
                var without = this.remove(key), content = without.content.slice(), found = without.find(place);
                return content.splice(-1 == found ? content.length : found, 0, key, value), new OrderedMap(content);
            },
            forEach: function(f) {
                for (var i = 0; i < this.content.length; i += 2) f(this.content[i], this.content[i + 1]);
            },
            prepend: function(map) {
                return (map = OrderedMap.from(map)).size ? new OrderedMap(map.content.concat(this.subtract(map).content)) : this;
            },
            append: function(map) {
                return (map = OrderedMap.from(map)).size ? new OrderedMap(this.subtract(map).content.concat(map.content)) : this;
            },
            subtract: function(map) {
                var result = this;
                map = OrderedMap.from(map);
                for (var i = 0; i < map.content.length; i += 2) result = result.remove(map.content[i]);
                return result;
            },
            get size() {
                return this.content.length >> 1;
            }
        }, OrderedMap.from = function(value) {
            if (value instanceof OrderedMap) return value;
            var content = [];
            if (value) for (var prop in value) content.push(prop, value[prop]);
            return new OrderedMap(content);
        };
        var index_es = OrderedMap;
        function findDiffStart(a, b, pos) {
            for (var i = 0; ;i++) {
                if (i == a.childCount || i == b.childCount) return a.childCount == b.childCount ? null : pos;
                var childA = a.child(i), childB = b.child(i);
                if (childA != childB) {
                    if (!childA.sameMarkup(childB)) return pos;
                    if (childA.isText && childA.text != childB.text) {
                        for (var j = 0; childA.text[j] == childB.text[j]; j++) pos++;
                        return pos;
                    }
                    if (childA.content.size || childB.content.size) {
                        var inner = findDiffStart(childA.content, childB.content, pos + 1);
                        if (null != inner) return inner;
                    }
                    pos += childA.nodeSize;
                } else pos += childA.nodeSize;
            }
        }
        function findDiffEnd(a, b, posA, posB) {
            for (var iA = a.childCount, iB = b.childCount; ;) {
                if (0 == iA || 0 == iB) return iA == iB ? null : {
                    a: posA,
                    b: posB
                };
                var childA = a.child(--iA), childB = b.child(--iB), size = childA.nodeSize;
                if (childA != childB) {
                    if (!childA.sameMarkup(childB)) return {
                        a: posA,
                        b: posB
                    };
                    if (childA.isText && childA.text != childB.text) {
                        for (var same = 0, minSize = Math.min(childA.text.length, childB.text.length); same < minSize && childA.text[childA.text.length - same - 1] == childB.text[childB.text.length - same - 1]; ) same++, 
                        posA--, posB--;
                        return {
                            a: posA,
                            b: posB
                        };
                    }
                    if (childA.content.size || childB.content.size) {
                        var inner = findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);
                        if (inner) return inner;
                    }
                    posA -= size, posB -= size;
                } else posA -= size, posB -= size;
            }
        }
        var Fragment = function(content, size) {
            if (this.content = content, this.size = size || 0, null == size) for (var i = 0; i < content.length; i++) this.size += content[i].nodeSize;
        }, prototypeAccessors = {
            firstChild: {
                configurable: !0
            },
            lastChild: {
                configurable: !0
            },
            childCount: {
                configurable: !0
            }
        };
        Fragment.prototype.nodesBetween = function(from, to, f, nodeStart, parent) {
            void 0 === nodeStart && (nodeStart = 0);
            for (var i = 0, pos = 0; pos < to; i++) {
                var child = this.content[i], end = pos + child.nodeSize;
                if (end > from && !1 !== f(child, nodeStart + pos, parent, i) && child.content.size) {
                    var start = pos + 1;
                    child.nodesBetween(Math.max(0, from - start), Math.min(child.content.size, to - start), f, nodeStart + start);
                }
                pos = end;
            }
        }, Fragment.prototype.descendants = function(f) {
            this.nodesBetween(0, this.size, f);
        }, Fragment.prototype.textBetween = function(from, to, blockSeparator, leafText) {
            var text = "", separated = !0;
            return this.nodesBetween(from, to, (function(node, pos) {
                node.isText ? (text += node.text.slice(Math.max(from, pos) - pos, to - pos), separated = !blockSeparator) : node.isLeaf && leafText ? (text += leafText, 
                separated = !blockSeparator) : !separated && node.isBlock && (text += blockSeparator, 
                separated = !0);
            }), 0), text;
        }, Fragment.prototype.append = function(other) {
            if (!other.size) return this;
            if (!this.size) return other;
            var last = this.lastChild, first = other.firstChild, content = this.content.slice(), i = 0;
            for (last.isText && last.sameMarkup(first) && (content[content.length - 1] = last.withText(last.text + first.text), 
            i = 1); i < other.content.length; i++) content.push(other.content[i]);
            return new Fragment(content, this.size + other.size);
        }, Fragment.prototype.cut = function(from, to) {
            if (null == to && (to = this.size), 0 == from && to == this.size) return this;
            var result = [], size = 0;
            if (to > from) for (var i = 0, pos = 0; pos < to; i++) {
                var child = this.content[i], end = pos + child.nodeSize;
                end > from && ((pos < from || end > to) && (child = child.isText ? child.cut(Math.max(0, from - pos), Math.min(child.text.length, to - pos)) : child.cut(Math.max(0, from - pos - 1), Math.min(child.content.size, to - pos - 1))), 
                result.push(child), size += child.nodeSize), pos = end;
            }
            return new Fragment(result, size);
        }, Fragment.prototype.cutByIndex = function(from, to) {
            return from == to ? Fragment.empty : 0 == from && to == this.content.length ? this : new Fragment(this.content.slice(from, to));
        }, Fragment.prototype.replaceChild = function(index, node) {
            var current = this.content[index];
            if (current == node) return this;
            var copy = this.content.slice(), size = this.size + node.nodeSize - current.nodeSize;
            return copy[index] = node, new Fragment(copy, size);
        }, Fragment.prototype.addToStart = function(node) {
            return new Fragment([ node ].concat(this.content), this.size + node.nodeSize);
        }, Fragment.prototype.addToEnd = function(node) {
            return new Fragment(this.content.concat(node), this.size + node.nodeSize);
        }, Fragment.prototype.eq = function(other) {
            if (this.content.length != other.content.length) return !1;
            for (var i = 0; i < this.content.length; i++) if (!this.content[i].eq(other.content[i])) return !1;
            return !0;
        }, prototypeAccessors.firstChild.get = function() {
            return this.content.length ? this.content[0] : null;
        }, prototypeAccessors.lastChild.get = function() {
            return this.content.length ? this.content[this.content.length - 1] : null;
        }, prototypeAccessors.childCount.get = function() {
            return this.content.length;
        }, Fragment.prototype.child = function(index) {
            var found = this.content[index];
            if (!found) throw new RangeError("Index " + index + " out of range for " + this);
            return found;
        }, Fragment.prototype.maybeChild = function(index) {
            return this.content[index];
        }, Fragment.prototype.forEach = function(f) {
            for (var i = 0, p = 0; i < this.content.length; i++) {
                var child = this.content[i];
                f(child, p, i), p += child.nodeSize;
            }
        }, Fragment.prototype.findDiffStart = function(other, pos) {
            return void 0 === pos && (pos = 0), findDiffStart(this, other, pos);
        }, Fragment.prototype.findDiffEnd = function(other, pos, otherPos) {
            return void 0 === pos && (pos = this.size), void 0 === otherPos && (otherPos = other.size), 
            findDiffEnd(this, other, pos, otherPos);
        }, Fragment.prototype.findIndex = function(pos, round) {
            if (void 0 === round && (round = -1), 0 == pos) return retIndex(0, pos);
            if (pos == this.size) return retIndex(this.content.length, pos);
            if (pos > this.size || pos < 0) throw new RangeError("Position " + pos + " outside of fragment (" + this + ")");
            for (var i = 0, curPos = 0; ;i++) {
                var end = curPos + this.child(i).nodeSize;
                if (end >= pos) return end == pos || round > 0 ? retIndex(i + 1, end) : retIndex(i, curPos);
                curPos = end;
            }
        }, Fragment.prototype.toString = function() {
            return "<" + this.toStringInner() + ">";
        }, Fragment.prototype.toStringInner = function() {
            return this.content.join(", ");
        }, Fragment.prototype.toJSON = function() {
            return this.content.length ? this.content.map((function(n) {
                return n.toJSON();
            })) : null;
        }, Fragment.fromJSON = function(schema, value) {
            if (!value) return Fragment.empty;
            if (!Array.isArray(value)) throw new RangeError("Invalid input for Fragment.fromJSON");
            return new Fragment(value.map(schema.nodeFromJSON));
        }, Fragment.fromArray = function(array) {
            if (!array.length) return Fragment.empty;
            for (var joined, size = 0, i = 0; i < array.length; i++) {
                var node = array[i];
                size += node.nodeSize, i && node.isText && array[i - 1].sameMarkup(node) ? (joined || (joined = array.slice(0, i)), 
                joined[joined.length - 1] = node.withText(joined[joined.length - 1].text + node.text)) : joined && joined.push(node);
            }
            return new Fragment(joined || array, size);
        }, Fragment.from = function(nodes) {
            if (!nodes) return Fragment.empty;
            if (nodes instanceof Fragment) return nodes;
            if (Array.isArray(nodes)) return this.fromArray(nodes);
            if (nodes.attrs) return new Fragment([ nodes ], nodes.nodeSize);
            throw new RangeError("Can not convert " + nodes + " to a Fragment" + (nodes.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
        }, Object.defineProperties(Fragment.prototype, prototypeAccessors);
        var found = {
            index: 0,
            offset: 0
        };
        function retIndex(index, offset) {
            return found.index = index, found.offset = offset, found;
        }
        function compareDeep(a, b) {
            if (a === b) return !0;
            if (!a || "object" != typeof a || !b || "object" != typeof b) return !1;
            var array = Array.isArray(a);
            if (Array.isArray(b) != array) return !1;
            if (array) {
                if (a.length != b.length) return !1;
                for (var i = 0; i < a.length; i++) if (!compareDeep(a[i], b[i])) return !1;
            } else {
                for (var p in a) if (!(p in b) || !compareDeep(a[p], b[p])) return !1;
                for (var p$1 in b) if (!(p$1 in a)) return !1;
            }
            return !0;
        }
        Fragment.empty = new Fragment([], 0);
        var Mark = function(type, attrs) {
            this.type = type, this.attrs = attrs;
        };
        function ReplaceError(message) {
            var err = Error.call(this, message);
            return err.__proto__ = ReplaceError.prototype, err;
        }
        Mark.prototype.addToSet = function(set) {
            for (var copy, placed = !1, i = 0; i < set.length; i++) {
                var other = set[i];
                if (this.eq(other)) return set;
                if (this.type.excludes(other.type)) copy || (copy = set.slice(0, i)); else {
                    if (other.type.excludes(this.type)) return set;
                    !placed && other.type.rank > this.type.rank && (copy || (copy = set.slice(0, i)), 
                    copy.push(this), placed = !0), copy && copy.push(other);
                }
            }
            return copy || (copy = set.slice()), placed || copy.push(this), copy;
        }, Mark.prototype.removeFromSet = function(set) {
            for (var i = 0; i < set.length; i++) if (this.eq(set[i])) return set.slice(0, i).concat(set.slice(i + 1));
            return set;
        }, Mark.prototype.isInSet = function(set) {
            for (var i = 0; i < set.length; i++) if (this.eq(set[i])) return !0;
            return !1;
        }, Mark.prototype.eq = function(other) {
            return this == other || this.type == other.type && compareDeep(this.attrs, other.attrs);
        }, Mark.prototype.toJSON = function() {
            var obj = {
                type: this.type.name
            };
            for (var _ in this.attrs) {
                obj.attrs = this.attrs;
                break;
            }
            return obj;
        }, Mark.fromJSON = function(schema, json) {
            if (!json) throw new RangeError("Invalid input for Mark.fromJSON");
            var type = schema.marks[json.type];
            if (!type) throw new RangeError("There is no mark type " + json.type + " in this schema");
            return type.create(json.attrs);
        }, Mark.sameSet = function(a, b) {
            if (a == b) return !0;
            if (a.length != b.length) return !1;
            for (var i = 0; i < a.length; i++) if (!a[i].eq(b[i])) return !1;
            return !0;
        }, Mark.setFrom = function(marks) {
            if (!marks || 0 == marks.length) return Mark.none;
            if (marks instanceof Mark) return [ marks ];
            var copy = marks.slice();
            return copy.sort((function(a, b) {
                return a.type.rank - b.type.rank;
            })), copy;
        }, Mark.none = [], ReplaceError.prototype = Object.create(Error.prototype), ReplaceError.prototype.constructor = ReplaceError, 
        ReplaceError.prototype.name = "ReplaceError";
        var Slice = function(content, openStart, openEnd) {
            this.content = content, this.openStart = openStart, this.openEnd = openEnd;
        }, prototypeAccessors$1 = {
            size: {
                configurable: !0
            }
        };
        function removeRange(content, from, to) {
            var ref = content.findIndex(from), index = ref.index, offset = ref.offset, child = content.maybeChild(index), ref$1 = content.findIndex(to), indexTo = ref$1.index, offsetTo = ref$1.offset;
            if (offset == from || child.isText) {
                if (offsetTo != to && !content.child(indexTo).isText) throw new RangeError("Removing non-flat range");
                return content.cut(0, from).append(content.cut(to));
            }
            if (index != indexTo) throw new RangeError("Removing non-flat range");
            return content.replaceChild(index, child.copy(removeRange(child.content, from - offset - 1, to - offset - 1)));
        }
        function insertInto(content, dist, insert, parent) {
            var ref = content.findIndex(dist), index = ref.index, offset = ref.offset, child = content.maybeChild(index);
            if (offset == dist || child.isText) return parent && !parent.canReplace(index, index, insert) ? null : content.cut(0, dist).append(insert).append(content.cut(dist));
            var inner = insertInto(child.content, dist - offset - 1, insert);
            return inner && content.replaceChild(index, child.copy(inner));
        }
        function replace($from, $to, slice) {
            if (slice.openStart > $from.depth) throw new ReplaceError("Inserted content deeper than insertion position");
            if ($from.depth - slice.openStart != $to.depth - slice.openEnd) throw new ReplaceError("Inconsistent open depths");
            return replaceOuter($from, $to, slice, 0);
        }
        function replaceOuter($from, $to, slice, depth) {
            var index = $from.index(depth), node = $from.node(depth);
            if (index == $to.index(depth) && depth < $from.depth - slice.openStart) {
                var inner = replaceOuter($from, $to, slice, depth + 1);
                return node.copy(node.content.replaceChild(index, inner));
            }
            if (slice.content.size) {
                if (slice.openStart || slice.openEnd || $from.depth != depth || $to.depth != depth) {
                    var ref = function(slice, $along) {
                        for (var extra = $along.depth - slice.openStart, node = $along.node(extra).copy(slice.content), i = extra - 1; i >= 0; i--) node = $along.node(i).copy(Fragment.from(node));
                        return {
                            start: node.resolveNoCache(slice.openStart + extra),
                            end: node.resolveNoCache(node.content.size - slice.openEnd - extra)
                        };
                    }(slice, $from);
                    return index_es_close(node, replaceThreeWay($from, ref.start, ref.end, $to, depth));
                }
                var parent = $from.parent, content = parent.content;
                return index_es_close(parent, content.cut(0, $from.parentOffset).append(slice.content).append(content.cut($to.parentOffset)));
            }
            return index_es_close(node, replaceTwoWay($from, $to, depth));
        }
        function checkJoin(main, sub) {
            if (!sub.type.compatibleContent(main.type)) throw new ReplaceError("Cannot join " + sub.type.name + " onto " + main.type.name);
        }
        function joinable($before, $after, depth) {
            var node = $before.node(depth);
            return checkJoin(node, $after.node(depth)), node;
        }
        function addNode(child, target) {
            var last = target.length - 1;
            last >= 0 && child.isText && child.sameMarkup(target[last]) ? target[last] = child.withText(target[last].text + child.text) : target.push(child);
        }
        function addRange($start, $end, depth, target) {
            var node = ($end || $start).node(depth), startIndex = 0, endIndex = $end ? $end.index(depth) : node.childCount;
            $start && (startIndex = $start.index(depth), $start.depth > depth ? startIndex++ : $start.textOffset && (addNode($start.nodeAfter, target), 
            startIndex++));
            for (var i = startIndex; i < endIndex; i++) addNode(node.child(i), target);
            $end && $end.depth == depth && $end.textOffset && addNode($end.nodeBefore, target);
        }
        function index_es_close(node, content) {
            if (!node.type.validContent(content)) throw new ReplaceError("Invalid content for node " + node.type.name);
            return node.copy(content);
        }
        function replaceThreeWay($from, $start, $end, $to, depth) {
            var openStart = $from.depth > depth && joinable($from, $start, depth + 1), openEnd = $to.depth > depth && joinable($end, $to, depth + 1), content = [];
            return addRange(null, $from, depth, content), openStart && openEnd && $start.index(depth) == $end.index(depth) ? (checkJoin(openStart, openEnd), 
            addNode(index_es_close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content)) : (openStart && addNode(index_es_close(openStart, replaceTwoWay($from, $start, depth + 1)), content), 
            addRange($start, $end, depth, content), openEnd && addNode(index_es_close(openEnd, replaceTwoWay($end, $to, depth + 1)), content)), 
            addRange($to, null, depth, content), new Fragment(content);
        }
        function replaceTwoWay($from, $to, depth) {
            var content = [];
            (addRange(null, $from, depth, content), $from.depth > depth) && addNode(index_es_close(joinable($from, $to, depth + 1), replaceTwoWay($from, $to, depth + 1)), content);
            return addRange($to, null, depth, content), new Fragment(content);
        }
        prototypeAccessors$1.size.get = function() {
            return this.content.size - this.openStart - this.openEnd;
        }, Slice.prototype.insertAt = function(pos, fragment) {
            var content = insertInto(this.content, pos + this.openStart, fragment, null);
            return content && new Slice(content, this.openStart, this.openEnd);
        }, Slice.prototype.removeBetween = function(from, to) {
            return new Slice(removeRange(this.content, from + this.openStart, to + this.openStart), this.openStart, this.openEnd);
        }, Slice.prototype.eq = function(other) {
            return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd;
        }, Slice.prototype.toString = function() {
            return this.content + "(" + this.openStart + "," + this.openEnd + ")";
        }, Slice.prototype.toJSON = function() {
            if (!this.content.size) return null;
            var json = {
                content: this.content.toJSON()
            };
            return this.openStart > 0 && (json.openStart = this.openStart), this.openEnd > 0 && (json.openEnd = this.openEnd), 
            json;
        }, Slice.fromJSON = function(schema, json) {
            if (!json) return Slice.empty;
            var openStart = json.openStart || 0, openEnd = json.openEnd || 0;
            if ("number" != typeof openStart || "number" != typeof openEnd) throw new RangeError("Invalid input for Slice.fromJSON");
            return new Slice(Fragment.fromJSON(schema, json.content), openStart, openEnd);
        }, Slice.maxOpen = function(fragment, openIsolating) {
            void 0 === openIsolating && (openIsolating = !0);
            for (var openStart = 0, openEnd = 0, n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild) openStart++;
            for (var n$1 = fragment.lastChild; n$1 && !n$1.isLeaf && (openIsolating || !n$1.type.spec.isolating); n$1 = n$1.lastChild) openEnd++;
            return new Slice(fragment, openStart, openEnd);
        }, Object.defineProperties(Slice.prototype, prototypeAccessors$1), Slice.empty = new Slice(Fragment.empty, 0, 0);
        var ResolvedPos = function(pos, path, parentOffset) {
            this.pos = pos, this.path = path, this.depth = path.length / 3 - 1, this.parentOffset = parentOffset;
        }, prototypeAccessors$2 = {
            parent: {
                configurable: !0
            },
            doc: {
                configurable: !0
            },
            textOffset: {
                configurable: !0
            },
            nodeAfter: {
                configurable: !0
            },
            nodeBefore: {
                configurable: !0
            }
        };
        ResolvedPos.prototype.resolveDepth = function(val) {
            return null == val ? this.depth : val < 0 ? this.depth + val : val;
        }, prototypeAccessors$2.parent.get = function() {
            return this.node(this.depth);
        }, prototypeAccessors$2.doc.get = function() {
            return this.node(0);
        }, ResolvedPos.prototype.node = function(depth) {
            return this.path[3 * this.resolveDepth(depth)];
        }, ResolvedPos.prototype.index = function(depth) {
            return this.path[3 * this.resolveDepth(depth) + 1];
        }, ResolvedPos.prototype.indexAfter = function(depth) {
            return depth = this.resolveDepth(depth), this.index(depth) + (depth != this.depth || this.textOffset ? 1 : 0);
        }, ResolvedPos.prototype.start = function(depth) {
            return 0 == (depth = this.resolveDepth(depth)) ? 0 : this.path[3 * depth - 1] + 1;
        }, ResolvedPos.prototype.end = function(depth) {
            return depth = this.resolveDepth(depth), this.start(depth) + this.node(depth).content.size;
        }, ResolvedPos.prototype.before = function(depth) {
            if (!(depth = this.resolveDepth(depth))) throw new RangeError("There is no position before the top-level node");
            return depth == this.depth + 1 ? this.pos : this.path[3 * depth - 1];
        }, ResolvedPos.prototype.after = function(depth) {
            if (!(depth = this.resolveDepth(depth))) throw new RangeError("There is no position after the top-level node");
            return depth == this.depth + 1 ? this.pos : this.path[3 * depth - 1] + this.path[3 * depth].nodeSize;
        }, prototypeAccessors$2.textOffset.get = function() {
            return this.pos - this.path[this.path.length - 1];
        }, prototypeAccessors$2.nodeAfter.get = function() {
            var parent = this.parent, index = this.index(this.depth);
            if (index == parent.childCount) return null;
            var dOff = this.pos - this.path[this.path.length - 1], child = parent.child(index);
            return dOff ? parent.child(index).cut(dOff) : child;
        }, prototypeAccessors$2.nodeBefore.get = function() {
            var index = this.index(this.depth), dOff = this.pos - this.path[this.path.length - 1];
            return dOff ? this.parent.child(index).cut(0, dOff) : 0 == index ? null : this.parent.child(index - 1);
        }, ResolvedPos.prototype.posAtIndex = function(index, depth) {
            depth = this.resolveDepth(depth);
            for (var node = this.path[3 * depth], pos = 0 == depth ? 0 : this.path[3 * depth - 1] + 1, i = 0; i < index; i++) pos += node.child(i).nodeSize;
            return pos;
        }, ResolvedPos.prototype.marks = function() {
            var parent = this.parent, index = this.index();
            if (0 == parent.content.size) return Mark.none;
            if (this.textOffset) return parent.child(index).marks;
            var main = parent.maybeChild(index - 1), other = parent.maybeChild(index);
            if (!main) {
                var tmp = main;
                main = other, other = tmp;
            }
            for (var marks = main.marks, i = 0; i < marks.length; i++) !1 !== marks[i].type.spec.inclusive || other && marks[i].isInSet(other.marks) || (marks = marks[i--].removeFromSet(marks));
            return marks;
        }, ResolvedPos.prototype.marksAcross = function($end) {
            var after = this.parent.maybeChild(this.index());
            if (!after || !after.isInline) return null;
            for (var marks = after.marks, next = $end.parent.maybeChild($end.index()), i = 0; i < marks.length; i++) !1 !== marks[i].type.spec.inclusive || next && marks[i].isInSet(next.marks) || (marks = marks[i--].removeFromSet(marks));
            return marks;
        }, ResolvedPos.prototype.sharedDepth = function(pos) {
            for (var depth = this.depth; depth > 0; depth--) if (this.start(depth) <= pos && this.end(depth) >= pos) return depth;
            return 0;
        }, ResolvedPos.prototype.blockRange = function(other, pred) {
            if (void 0 === other && (other = this), other.pos < this.pos) return other.blockRange(this);
            for (var d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--) if (other.pos <= this.end(d) && (!pred || pred(this.node(d)))) return new NodeRange(this, other, d);
        }, ResolvedPos.prototype.sameParent = function(other) {
            return this.pos - this.parentOffset == other.pos - other.parentOffset;
        }, ResolvedPos.prototype.max = function(other) {
            return other.pos > this.pos ? other : this;
        }, ResolvedPos.prototype.min = function(other) {
            return other.pos < this.pos ? other : this;
        }, ResolvedPos.prototype.toString = function() {
            for (var str = "", i = 1; i <= this.depth; i++) str += (str ? "/" : "") + this.node(i).type.name + "_" + this.index(i - 1);
            return str + ":" + this.parentOffset;
        }, ResolvedPos.resolve = function(doc, pos) {
            if (!(pos >= 0 && pos <= doc.content.size)) throw new RangeError("Position " + pos + " out of range");
            for (var path = [], start = 0, parentOffset = pos, node = doc; ;) {
                var ref = node.content.findIndex(parentOffset), index = ref.index, offset = ref.offset, rem = parentOffset - offset;
                if (path.push(node, index, start + offset), !rem) break;
                if ((node = node.child(index)).isText) break;
                parentOffset = rem - 1, start += offset + 1;
            }
            return new ResolvedPos(pos, path, parentOffset);
        }, ResolvedPos.resolveCached = function(doc, pos) {
            for (var i = 0; i < resolveCache.length; i++) {
                var cached = resolveCache[i];
                if (cached.pos == pos && cached.doc == doc) return cached;
            }
            var result = resolveCache[resolveCachePos] = ResolvedPos.resolve(doc, pos);
            return resolveCachePos = (resolveCachePos + 1) % resolveCacheSize, result;
        }, Object.defineProperties(ResolvedPos.prototype, prototypeAccessors$2);
        var resolveCache = [], resolveCachePos = 0, resolveCacheSize = 12, NodeRange = function($from, $to, depth) {
            this.$from = $from, this.$to = $to, this.depth = depth;
        }, prototypeAccessors$1$1 = {
            start: {
                configurable: !0
            },
            end: {
                configurable: !0
            },
            parent: {
                configurable: !0
            },
            startIndex: {
                configurable: !0
            },
            endIndex: {
                configurable: !0
            }
        };
        prototypeAccessors$1$1.start.get = function() {
            return this.$from.before(this.depth + 1);
        }, prototypeAccessors$1$1.end.get = function() {
            return this.$to.after(this.depth + 1);
        }, prototypeAccessors$1$1.parent.get = function() {
            return this.$from.node(this.depth);
        }, prototypeAccessors$1$1.startIndex.get = function() {
            return this.$from.index(this.depth);
        }, prototypeAccessors$1$1.endIndex.get = function() {
            return this.$to.indexAfter(this.depth);
        }, Object.defineProperties(NodeRange.prototype, prototypeAccessors$1$1);
        var emptyAttrs = Object.create(null), Node = function(type, attrs, content, marks) {
            this.type = type, this.attrs = attrs, this.content = content || Fragment.empty, 
            this.marks = marks || Mark.none;
        }, prototypeAccessors$3 = {
            nodeSize: {
                configurable: !0
            },
            childCount: {
                configurable: !0
            },
            textContent: {
                configurable: !0
            },
            firstChild: {
                configurable: !0
            },
            lastChild: {
                configurable: !0
            },
            isBlock: {
                configurable: !0
            },
            isTextblock: {
                configurable: !0
            },
            inlineContent: {
                configurable: !0
            },
            isInline: {
                configurable: !0
            },
            isText: {
                configurable: !0
            },
            isLeaf: {
                configurable: !0
            },
            isAtom: {
                configurable: !0
            }
        };
        prototypeAccessors$3.nodeSize.get = function() {
            return this.isLeaf ? 1 : 2 + this.content.size;
        }, prototypeAccessors$3.childCount.get = function() {
            return this.content.childCount;
        }, Node.prototype.child = function(index) {
            return this.content.child(index);
        }, Node.prototype.maybeChild = function(index) {
            return this.content.maybeChild(index);
        }, Node.prototype.forEach = function(f) {
            this.content.forEach(f);
        }, Node.prototype.nodesBetween = function(from, to, f, startPos) {
            void 0 === startPos && (startPos = 0), this.content.nodesBetween(from, to, f, startPos, this);
        }, Node.prototype.descendants = function(f) {
            this.nodesBetween(0, this.content.size, f);
        }, prototypeAccessors$3.textContent.get = function() {
            return this.textBetween(0, this.content.size, "");
        }, Node.prototype.textBetween = function(from, to, blockSeparator, leafText) {
            return this.content.textBetween(from, to, blockSeparator, leafText);
        }, prototypeAccessors$3.firstChild.get = function() {
            return this.content.firstChild;
        }, prototypeAccessors$3.lastChild.get = function() {
            return this.content.lastChild;
        }, Node.prototype.eq = function(other) {
            return this == other || this.sameMarkup(other) && this.content.eq(other.content);
        }, Node.prototype.sameMarkup = function(other) {
            return this.hasMarkup(other.type, other.attrs, other.marks);
        }, Node.prototype.hasMarkup = function(type, attrs, marks) {
            return this.type == type && compareDeep(this.attrs, attrs || type.defaultAttrs || emptyAttrs) && Mark.sameSet(this.marks, marks || Mark.none);
        }, Node.prototype.copy = function(content) {
            return void 0 === content && (content = null), content == this.content ? this : new this.constructor(this.type, this.attrs, content, this.marks);
        }, Node.prototype.mark = function(marks) {
            return marks == this.marks ? this : new this.constructor(this.type, this.attrs, this.content, marks);
        }, Node.prototype.cut = function(from, to) {
            return 0 == from && to == this.content.size ? this : this.copy(this.content.cut(from, to));
        }, Node.prototype.slice = function(from, to, includeParents) {
            if (void 0 === to && (to = this.content.size), void 0 === includeParents && (includeParents = !1), 
            from == to) return Slice.empty;
            var $from = this.resolve(from), $to = this.resolve(to), depth = includeParents ? 0 : $from.sharedDepth(to), start = $from.start(depth), content = $from.node(depth).content.cut($from.pos - start, $to.pos - start);
            return new Slice(content, $from.depth - depth, $to.depth - depth);
        }, Node.prototype.replace = function(from, to, slice) {
            return replace(this.resolve(from), this.resolve(to), slice);
        }, Node.prototype.nodeAt = function(pos) {
            for (var node = this; ;) {
                var ref = node.content.findIndex(pos), index = ref.index, offset = ref.offset;
                if (!(node = node.maybeChild(index))) return null;
                if (offset == pos || node.isText) return node;
                pos -= offset + 1;
            }
        }, Node.prototype.childAfter = function(pos) {
            var ref = this.content.findIndex(pos), index = ref.index, offset = ref.offset;
            return {
                node: this.content.maybeChild(index),
                index: index,
                offset: offset
            };
        }, Node.prototype.childBefore = function(pos) {
            if (0 == pos) return {
                node: null,
                index: 0,
                offset: 0
            };
            var ref = this.content.findIndex(pos), index = ref.index, offset = ref.offset;
            if (offset < pos) return {
                node: this.content.child(index),
                index: index,
                offset: offset
            };
            var node = this.content.child(index - 1);
            return {
                node: node,
                index: index - 1,
                offset: offset - node.nodeSize
            };
        }, Node.prototype.resolve = function(pos) {
            return ResolvedPos.resolveCached(this, pos);
        }, Node.prototype.resolveNoCache = function(pos) {
            return ResolvedPos.resolve(this, pos);
        }, Node.prototype.rangeHasMark = function(from, to, type) {
            var found = !1;
            return to > from && this.nodesBetween(from, to, (function(node) {
                return type.isInSet(node.marks) && (found = !0), !found;
            })), found;
        }, prototypeAccessors$3.isBlock.get = function() {
            return this.type.isBlock;
        }, prototypeAccessors$3.isTextblock.get = function() {
            return this.type.isTextblock;
        }, prototypeAccessors$3.inlineContent.get = function() {
            return this.type.inlineContent;
        }, prototypeAccessors$3.isInline.get = function() {
            return this.type.isInline;
        }, prototypeAccessors$3.isText.get = function() {
            return this.type.isText;
        }, prototypeAccessors$3.isLeaf.get = function() {
            return this.type.isLeaf;
        }, prototypeAccessors$3.isAtom.get = function() {
            return this.type.isAtom;
        }, Node.prototype.toString = function() {
            if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
            var name = this.type.name;
            return this.content.size && (name += "(" + this.content.toStringInner() + ")"), 
            wrapMarks(this.marks, name);
        }, Node.prototype.contentMatchAt = function(index) {
            var match = this.type.contentMatch.matchFragment(this.content, 0, index);
            if (!match) throw new Error("Called contentMatchAt on a node with invalid content");
            return match;
        }, Node.prototype.canReplace = function(from, to, replacement, start, end) {
            void 0 === replacement && (replacement = Fragment.empty), void 0 === start && (start = 0), 
            void 0 === end && (end = replacement.childCount);
            var one = this.contentMatchAt(from).matchFragment(replacement, start, end), two = one && one.matchFragment(this.content, to);
            if (!two || !two.validEnd) return !1;
            for (var i = start; i < end; i++) if (!this.type.allowsMarks(replacement.child(i).marks)) return !1;
            return !0;
        }, Node.prototype.canReplaceWith = function(from, to, type, marks) {
            if (marks && !this.type.allowsMarks(marks)) return !1;
            var start = this.contentMatchAt(from).matchType(type), end = start && start.matchFragment(this.content, to);
            return !!end && end.validEnd;
        }, Node.prototype.canAppend = function(other) {
            return other.content.size ? this.canReplace(this.childCount, this.childCount, other.content) : this.type.compatibleContent(other.type);
        }, Node.prototype.check = function() {
            if (!this.type.validContent(this.content)) throw new RangeError("Invalid content for node " + this.type.name + ": " + this.content.toString().slice(0, 50));
            this.content.forEach((function(node) {
                return node.check();
            }));
        }, Node.prototype.toJSON = function() {
            var obj = {
                type: this.type.name
            };
            for (var _ in this.attrs) {
                obj.attrs = this.attrs;
                break;
            }
            return this.content.size && (obj.content = this.content.toJSON()), this.marks.length && (obj.marks = this.marks.map((function(n) {
                return n.toJSON();
            }))), obj;
        }, Node.fromJSON = function(schema, json) {
            if (!json) throw new RangeError("Invalid input for Node.fromJSON");
            var marks = null;
            if (json.marks) {
                if (!Array.isArray(json.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
                marks = json.marks.map(schema.markFromJSON);
            }
            if ("text" == json.type) {
                if ("string" != typeof json.text) throw new RangeError("Invalid text node in JSON");
                return schema.text(json.text, marks);
            }
            var content = Fragment.fromJSON(schema, json.content);
            return schema.nodeType(json.type).create(json.attrs, content, marks);
        }, Object.defineProperties(Node.prototype, prototypeAccessors$3);
        var TextNode = function(Node) {
            function TextNode(type, attrs, content, marks) {
                if (Node.call(this, type, attrs, null, marks), !content) throw new RangeError("Empty text nodes are not allowed");
                this.text = content;
            }
            Node && (TextNode.__proto__ = Node), TextNode.prototype = Object.create(Node && Node.prototype), 
            TextNode.prototype.constructor = TextNode;
            var prototypeAccessors$1 = {
                textContent: {
                    configurable: !0
                },
                nodeSize: {
                    configurable: !0
                }
            };
            return TextNode.prototype.toString = function() {
                return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : wrapMarks(this.marks, JSON.stringify(this.text));
            }, prototypeAccessors$1.textContent.get = function() {
                return this.text;
            }, TextNode.prototype.textBetween = function(from, to) {
                return this.text.slice(from, to);
            }, prototypeAccessors$1.nodeSize.get = function() {
                return this.text.length;
            }, TextNode.prototype.mark = function(marks) {
                return marks == this.marks ? this : new TextNode(this.type, this.attrs, this.text, marks);
            }, TextNode.prototype.withText = function(text) {
                return text == this.text ? this : new TextNode(this.type, this.attrs, text, this.marks);
            }, TextNode.prototype.cut = function(from, to) {
                return void 0 === from && (from = 0), void 0 === to && (to = this.text.length), 
                0 == from && to == this.text.length ? this : this.withText(this.text.slice(from, to));
            }, TextNode.prototype.eq = function(other) {
                return this.sameMarkup(other) && this.text == other.text;
            }, TextNode.prototype.toJSON = function() {
                var base = Node.prototype.toJSON.call(this);
                return base.text = this.text, base;
            }, Object.defineProperties(TextNode.prototype, prototypeAccessors$1), TextNode;
        }(Node);
        function wrapMarks(marks, str) {
            for (var i = marks.length - 1; i >= 0; i--) str = marks[i].type.name + "(" + str + ")";
            return str;
        }
        var ContentMatch = function(validEnd) {
            this.validEnd = validEnd, this.next = [], this.wrapCache = [];
        }, prototypeAccessors$4 = {
            inlineContent: {
                configurable: !0
            },
            defaultType: {
                configurable: !0
            },
            edgeCount: {
                configurable: !0
            }
        };
        ContentMatch.parse = function(string, nodeTypes) {
            var stream = new TokenStream(string, nodeTypes);
            if (null == stream.next) return ContentMatch.empty;
            var expr = parseExpr(stream);
            stream.next && stream.err("Unexpected trailing text");
            var match = function(nfa) {
                var labeled = Object.create(null);
                return explore(nullFrom(nfa, 0));
                function explore(states) {
                    var out = [];
                    states.forEach((function(node) {
                        nfa[node].forEach((function(ref) {
                            var term = ref.term, to = ref.to;
                            if (term) {
                                var known = out.indexOf(term), set = known > -1 && out[known + 1];
                                nullFrom(nfa, to).forEach((function(node) {
                                    set || out.push(term, set = []), -1 == set.indexOf(node) && set.push(node);
                                }));
                            }
                        }));
                    }));
                    for (var state = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa.length - 1) > -1), i = 0; i < out.length; i += 2) {
                        var states$1 = out[i + 1].sort(cmp);
                        state.next.push(out[i], labeled[states$1.join(",")] || explore(states$1));
                    }
                    return state;
                }
            }(function(expr) {
                var nfa = [ [] ];
                return connect(compile(expr, 0), node()), nfa;
                function node() {
                    return nfa.push([]) - 1;
                }
                function edge(from, to, term) {
                    var edge = {
                        term: term,
                        to: to
                    };
                    return nfa[from].push(edge), edge;
                }
                function connect(edges, to) {
                    edges.forEach((function(edge) {
                        return edge.to = to;
                    }));
                }
                function compile(expr, from) {
                    if ("choice" == expr.type) return expr.exprs.reduce((function(out, expr) {
                        return out.concat(compile(expr, from));
                    }), []);
                    if ("seq" == expr.type) for (var i = 0; ;i++) {
                        var next = compile(expr.exprs[i], from);
                        if (i == expr.exprs.length - 1) return next;
                        connect(next, from = node());
                    } else {
                        if ("star" == expr.type) {
                            var loop = node();
                            return edge(from, loop), connect(compile(expr.expr, loop), loop), [ edge(loop) ];
                        }
                        if ("plus" == expr.type) {
                            var loop$1 = node();
                            return connect(compile(expr.expr, from), loop$1), connect(compile(expr.expr, loop$1), loop$1), 
                            [ edge(loop$1) ];
                        }
                        if ("opt" == expr.type) return [ edge(from) ].concat(compile(expr.expr, from));
                        if ("range" == expr.type) {
                            for (var cur = from, i$1 = 0; i$1 < expr.min; i$1++) {
                                var next$1 = node();
                                connect(compile(expr.expr, cur), next$1), cur = next$1;
                            }
                            if (-1 == expr.max) connect(compile(expr.expr, cur), cur); else for (var i$2 = expr.min; i$2 < expr.max; i$2++) {
                                var next$2 = node();
                                edge(cur, next$2), connect(compile(expr.expr, cur), next$2), cur = next$2;
                            }
                            return [ edge(cur) ];
                        }
                        if ("name" == expr.type) return [ edge(from, null, expr.value) ];
                    }
                }
            }(expr));
            return function(match, stream) {
                for (var i = 0, work = [ match ]; i < work.length; i++) {
                    for (var state = work[i], dead = !state.validEnd, nodes = [], j = 0; j < state.next.length; j += 2) {
                        var node = state.next[j], next = state.next[j + 1];
                        nodes.push(node.name), !dead || node.isText || node.hasRequiredAttrs() || (dead = !1), 
                        -1 == work.indexOf(next) && work.push(next);
                    }
                    dead && stream.err("Only non-generatable nodes (" + nodes.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
                }
            }(match, stream), match;
        }, ContentMatch.prototype.matchType = function(type) {
            for (var i = 0; i < this.next.length; i += 2) if (this.next[i] == type) return this.next[i + 1];
            return null;
        }, ContentMatch.prototype.matchFragment = function(frag, start, end) {
            void 0 === start && (start = 0), void 0 === end && (end = frag.childCount);
            for (var cur = this, i = start; cur && i < end; i++) cur = cur.matchType(frag.child(i).type);
            return cur;
        }, prototypeAccessors$4.inlineContent.get = function() {
            var first = this.next[0];
            return !!first && first.isInline;
        }, prototypeAccessors$4.defaultType.get = function() {
            for (var i = 0; i < this.next.length; i += 2) {
                var type = this.next[i];
                if (!type.isText && !type.hasRequiredAttrs()) return type;
            }
        }, ContentMatch.prototype.compatible = function(other) {
            for (var i = 0; i < this.next.length; i += 2) for (var j = 0; j < other.next.length; j += 2) if (this.next[i] == other.next[j]) return !0;
            return !1;
        }, ContentMatch.prototype.fillBefore = function(after, toEnd, startIndex) {
            void 0 === toEnd && (toEnd = !1), void 0 === startIndex && (startIndex = 0);
            var seen = [ this ];
            return function search(match, types) {
                var finished = match.matchFragment(after, startIndex);
                if (finished && (!toEnd || finished.validEnd)) return Fragment.from(types.map((function(tp) {
                    return tp.createAndFill();
                })));
                for (var i = 0; i < match.next.length; i += 2) {
                    var type = match.next[i], next = match.next[i + 1];
                    if (!type.isText && !type.hasRequiredAttrs() && -1 == seen.indexOf(next)) {
                        seen.push(next);
                        var found = search(next, types.concat(type));
                        if (found) return found;
                    }
                }
            }(this, []);
        }, ContentMatch.prototype.findWrapping = function(target) {
            for (var i = 0; i < this.wrapCache.length; i += 2) if (this.wrapCache[i] == target) return this.wrapCache[i + 1];
            var computed = this.computeWrapping(target);
            return this.wrapCache.push(target, computed), computed;
        }, ContentMatch.prototype.computeWrapping = function(target) {
            for (var seen = Object.create(null), active = [ {
                match: this,
                type: null,
                via: null
            } ]; active.length; ) {
                var current = active.shift(), match = current.match;
                if (match.matchType(target)) {
                    for (var result = [], obj = current; obj.type; obj = obj.via) result.push(obj.type);
                    return result.reverse();
                }
                for (var i = 0; i < match.next.length; i += 2) {
                    var type = match.next[i];
                    type.isLeaf || type.hasRequiredAttrs() || type.name in seen || current.type && !match.next[i + 1].validEnd || (active.push({
                        match: type.contentMatch,
                        type: type,
                        via: current
                    }), seen[type.name] = !0);
                }
            }
        }, prototypeAccessors$4.edgeCount.get = function() {
            return this.next.length >> 1;
        }, ContentMatch.prototype.edge = function(n) {
            var i = n << 1;
            if (i >= this.next.length) throw new RangeError("There's no " + n + "th edge in this content match");
            return {
                type: this.next[i],
                next: this.next[i + 1]
            };
        }, ContentMatch.prototype.toString = function() {
            var seen = [];
            return function scan(m) {
                seen.push(m);
                for (var i = 1; i < m.next.length; i += 2) -1 == seen.indexOf(m.next[i]) && scan(m.next[i]);
            }(this), seen.map((function(m, i) {
                for (var out = i + (m.validEnd ? "*" : " ") + " ", i$1 = 0; i$1 < m.next.length; i$1 += 2) out += (i$1 ? ", " : "") + m.next[i$1].name + "->" + seen.indexOf(m.next[i$1 + 1]);
                return out;
            })).join("\n");
        }, Object.defineProperties(ContentMatch.prototype, prototypeAccessors$4), ContentMatch.empty = new ContentMatch(!0);
        var TokenStream = function(string, nodeTypes) {
            this.string = string, this.nodeTypes = nodeTypes, this.inline = null, this.pos = 0, 
            this.tokens = string.split(/\s*(?=\b|\W|$)/), "" == this.tokens[this.tokens.length - 1] && this.tokens.pop(), 
            "" == this.tokens[0] && this.tokens.unshift();
        }, prototypeAccessors$1$2 = {
            next: {
                configurable: !0
            }
        };
        function parseExpr(stream) {
            var exprs = [];
            do {
                exprs.push(parseExprSeq(stream));
            } while (stream.eat("|"));
            return 1 == exprs.length ? exprs[0] : {
                type: "choice",
                exprs: exprs
            };
        }
        function parseExprSeq(stream) {
            var exprs = [];
            do {
                exprs.push(parseExprSubscript(stream));
            } while (stream.next && ")" != stream.next && "|" != stream.next);
            return 1 == exprs.length ? exprs[0] : {
                type: "seq",
                exprs: exprs
            };
        }
        function parseExprSubscript(stream) {
            for (var expr = function(stream) {
                if (stream.eat("(")) {
                    var expr = parseExpr(stream);
                    return stream.eat(")") || stream.err("Missing closing paren"), expr;
                }
                if (!/\W/.test(stream.next)) {
                    var exprs = function(stream, name) {
                        var types = stream.nodeTypes, type = types[name];
                        if (type) return [ type ];
                        var result = [];
                        for (var typeName in types) {
                            var type$1 = types[typeName];
                            type$1.groups.indexOf(name) > -1 && result.push(type$1);
                        }
                        0 == result.length && stream.err("No node type or group '" + name + "' found");
                        return result;
                    }(stream, stream.next).map((function(type) {
                        return null == stream.inline ? stream.inline = type.isInline : stream.inline != type.isInline && stream.err("Mixing inline and block content"), 
                        {
                            type: "name",
                            value: type
                        };
                    }));
                    return stream.pos++, 1 == exprs.length ? exprs[0] : {
                        type: "choice",
                        exprs: exprs
                    };
                }
                stream.err("Unexpected token '" + stream.next + "'");
            }(stream); ;) if (stream.eat("+")) expr = {
                type: "plus",
                expr: expr
            }; else if (stream.eat("*")) expr = {
                type: "star",
                expr: expr
            }; else if (stream.eat("?")) expr = {
                type: "opt",
                expr: expr
            }; else {
                if (!stream.eat("{")) break;
                expr = parseExprRange(stream, expr);
            }
            return expr;
        }
        function parseNum(stream) {
            /\D/.test(stream.next) && stream.err("Expected number, got '" + stream.next + "'");
            var result = Number(stream.next);
            return stream.pos++, result;
        }
        function parseExprRange(stream, expr) {
            var min = parseNum(stream), max = min;
            return stream.eat(",") && (max = "}" != stream.next ? parseNum(stream) : -1), stream.eat("}") || stream.err("Unclosed braced range"), 
            {
                type: "range",
                min: min,
                max: max,
                expr: expr
            };
        }
        function cmp(a, b) {
            return b - a;
        }
        function nullFrom(nfa, node) {
            var result = [];
            return function scan(node) {
                var edges = nfa[node];
                if (1 == edges.length && !edges[0].term) return scan(edges[0].to);
                result.push(node);
                for (var i = 0; i < edges.length; i++) {
                    var ref = edges[i], term = ref.term, to = ref.to;
                    term || -1 != result.indexOf(to) || scan(to);
                }
            }(node), result.sort(cmp);
        }
        function defaultAttrs(attrs) {
            var defaults = Object.create(null);
            for (var attrName in attrs) {
                var attr = attrs[attrName];
                if (!attr.hasDefault) return null;
                defaults[attrName] = attr.default;
            }
            return defaults;
        }
        function computeAttrs(attrs, value) {
            var built = Object.create(null);
            for (var name in attrs) {
                var given = value && value[name];
                if (void 0 === given) {
                    var attr = attrs[name];
                    if (!attr.hasDefault) throw new RangeError("No value supplied for attribute " + name);
                    given = attr.default;
                }
                built[name] = given;
            }
            return built;
        }
        function initAttrs(attrs) {
            var result = Object.create(null);
            if (attrs) for (var name in attrs) result[name] = new Attribute(attrs[name]);
            return result;
        }
        prototypeAccessors$1$2.next.get = function() {
            return this.tokens[this.pos];
        }, TokenStream.prototype.eat = function(tok) {
            return this.next == tok && (this.pos++ || !0);
        }, TokenStream.prototype.err = function(str) {
            throw new SyntaxError(str + " (in content expression '" + this.string + "')");
        }, Object.defineProperties(TokenStream.prototype, prototypeAccessors$1$2);
        var NodeType = function(name, schema, spec) {
            this.name = name, this.schema = schema, this.spec = spec, this.groups = spec.group ? spec.group.split(" ") : [], 
            this.attrs = initAttrs(spec.attrs), this.defaultAttrs = defaultAttrs(this.attrs), 
            this.contentMatch = null, this.markSet = null, this.inlineContent = null, this.isBlock = !(spec.inline || "text" == name), 
            this.isText = "text" == name;
        }, prototypeAccessors$5 = {
            isInline: {
                configurable: !0
            },
            isTextblock: {
                configurable: !0
            },
            isLeaf: {
                configurable: !0
            },
            isAtom: {
                configurable: !0
            }
        };
        prototypeAccessors$5.isInline.get = function() {
            return !this.isBlock;
        }, prototypeAccessors$5.isTextblock.get = function() {
            return this.isBlock && this.inlineContent;
        }, prototypeAccessors$5.isLeaf.get = function() {
            return this.contentMatch == ContentMatch.empty;
        }, prototypeAccessors$5.isAtom.get = function() {
            return this.isLeaf || this.spec.atom;
        }, NodeType.prototype.hasRequiredAttrs = function() {
            for (var n in this.attrs) if (this.attrs[n].isRequired) return !0;
            return !1;
        }, NodeType.prototype.compatibleContent = function(other) {
            return this == other || this.contentMatch.compatible(other.contentMatch);
        }, NodeType.prototype.computeAttrs = function(attrs) {
            return !attrs && this.defaultAttrs ? this.defaultAttrs : computeAttrs(this.attrs, attrs);
        }, NodeType.prototype.create = function(attrs, content, marks) {
            if (this.isText) throw new Error("NodeType.create can't construct text nodes");
            return new Node(this, this.computeAttrs(attrs), Fragment.from(content), Mark.setFrom(marks));
        }, NodeType.prototype.createChecked = function(attrs, content, marks) {
            if (content = Fragment.from(content), !this.validContent(content)) throw new RangeError("Invalid content for node " + this.name);
            return new Node(this, this.computeAttrs(attrs), content, Mark.setFrom(marks));
        }, NodeType.prototype.createAndFill = function(attrs, content, marks) {
            if (attrs = this.computeAttrs(attrs), (content = Fragment.from(content)).size) {
                var before = this.contentMatch.fillBefore(content);
                if (!before) return null;
                content = before.append(content);
            }
            var after = this.contentMatch.matchFragment(content).fillBefore(Fragment.empty, !0);
            return after ? new Node(this, attrs, content.append(after), Mark.setFrom(marks)) : null;
        }, NodeType.prototype.validContent = function(content) {
            var result = this.contentMatch.matchFragment(content);
            if (!result || !result.validEnd) return !1;
            for (var i = 0; i < content.childCount; i++) if (!this.allowsMarks(content.child(i).marks)) return !1;
            return !0;
        }, NodeType.prototype.allowsMarkType = function(markType) {
            return null == this.markSet || this.markSet.indexOf(markType) > -1;
        }, NodeType.prototype.allowsMarks = function(marks) {
            if (null == this.markSet) return !0;
            for (var i = 0; i < marks.length; i++) if (!this.allowsMarkType(marks[i].type)) return !1;
            return !0;
        }, NodeType.prototype.allowedMarks = function(marks) {
            if (null == this.markSet) return marks;
            for (var copy, i = 0; i < marks.length; i++) this.allowsMarkType(marks[i].type) ? copy && copy.push(marks[i]) : copy || (copy = marks.slice(0, i));
            return copy ? copy.length ? copy : Mark.empty : marks;
        }, NodeType.compile = function(nodes, schema) {
            var result = Object.create(null);
            nodes.forEach((function(name, spec) {
                return result[name] = new NodeType(name, schema, spec);
            }));
            var topType = schema.spec.topNode || "doc";
            if (!result[topType]) throw new RangeError("Schema is missing its top node type ('" + topType + "')");
            if (!result.text) throw new RangeError("Every schema needs a 'text' type");
            for (var _ in result.text.attrs) throw new RangeError("The text node type should not have attributes");
            return result;
        }, Object.defineProperties(NodeType.prototype, prototypeAccessors$5);
        var Attribute = function(options) {
            this.hasDefault = Object.prototype.hasOwnProperty.call(options, "default"), this.default = options.default;
        }, prototypeAccessors$1$3 = {
            isRequired: {
                configurable: !0
            }
        };
        prototypeAccessors$1$3.isRequired.get = function() {
            return !this.hasDefault;
        }, Object.defineProperties(Attribute.prototype, prototypeAccessors$1$3);
        var MarkType = function(name, rank, schema, spec) {
            this.name = name, this.schema = schema, this.spec = spec, this.attrs = initAttrs(spec.attrs), 
            this.rank = rank, this.excluded = null;
            var defaults = defaultAttrs(this.attrs);
            this.instance = defaults && new Mark(this, defaults);
        };
        MarkType.prototype.create = function(attrs) {
            return !attrs && this.instance ? this.instance : new Mark(this, computeAttrs(this.attrs, attrs));
        }, MarkType.compile = function(marks, schema) {
            var result = Object.create(null), rank = 0;
            return marks.forEach((function(name, spec) {
                return result[name] = new MarkType(name, rank++, schema, spec);
            })), result;
        }, MarkType.prototype.removeFromSet = function(set) {
            for (var i = 0; i < set.length; i++) if (set[i].type == this) return set.slice(0, i).concat(set.slice(i + 1));
            return set;
        }, MarkType.prototype.isInSet = function(set) {
            for (var i = 0; i < set.length; i++) if (set[i].type == this) return set[i];
        }, MarkType.prototype.excludes = function(other) {
            return this.excluded.indexOf(other) > -1;
        };
        var index_es_Schema = function(spec) {
            for (var prop in this.spec = {}, spec) this.spec[prop] = spec[prop];
            this.spec.nodes = index_es.from(spec.nodes), this.spec.marks = index_es.from(spec.marks), 
            this.nodes = NodeType.compile(this.spec.nodes, this), this.marks = MarkType.compile(this.spec.marks, this);
            var contentExprCache = Object.create(null);
            for (var prop$1 in this.nodes) {
                if (prop$1 in this.marks) throw new RangeError(prop$1 + " can not be both a node and a mark");
                var type = this.nodes[prop$1], contentExpr = type.spec.content || "", markExpr = type.spec.marks;
                type.contentMatch = contentExprCache[contentExpr] || (contentExprCache[contentExpr] = ContentMatch.parse(contentExpr, this.nodes)), 
                type.inlineContent = type.contentMatch.inlineContent, type.markSet = "_" == markExpr ? null : markExpr ? gatherMarks(this, markExpr.split(" ")) : "" != markExpr && type.inlineContent ? null : [];
            }
            for (var prop$2 in this.marks) {
                var type$1 = this.marks[prop$2], excl = type$1.spec.excludes;
                type$1.excluded = null == excl ? [ type$1 ] : "" == excl ? [] : gatherMarks(this, excl.split(" "));
            }
            this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), 
            this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached = Object.create(null), 
            this.cached.wrappings = Object.create(null);
        };
        function gatherMarks(schema, marks) {
            for (var found = [], i = 0; i < marks.length; i++) {
                var name = marks[i], mark = schema.marks[name], ok = mark;
                if (mark) found.push(mark); else for (var prop in schema.marks) {
                    var mark$1 = schema.marks[prop];
                    ("_" == name || mark$1.spec.group && mark$1.spec.group.split(" ").indexOf(name) > -1) && found.push(ok = mark$1);
                }
                if (!ok) throw new SyntaxError("Unknown mark type: '" + marks[i] + "'");
            }
            return found;
        }
        index_es_Schema.prototype.node = function(type, attrs, content, marks) {
            if ("string" == typeof type) type = this.nodeType(type); else {
                if (!(type instanceof NodeType)) throw new RangeError("Invalid node type: " + type);
                if (type.schema != this) throw new RangeError("Node type from different schema used (" + type.name + ")");
            }
            return type.createChecked(attrs, content, marks);
        }, index_es_Schema.prototype.text = function(text$1, marks) {
            var type = this.nodes.text;
            return new TextNode(type, type.defaultAttrs, text$1, Mark.setFrom(marks));
        }, index_es_Schema.prototype.mark = function(type, attrs) {
            return "string" == typeof type && (type = this.marks[type]), type.create(attrs);
        }, index_es_Schema.prototype.nodeFromJSON = function(json) {
            return Node.fromJSON(this, json);
        }, index_es_Schema.prototype.markFromJSON = function(json) {
            return Mark.fromJSON(this, json);
        }, index_es_Schema.prototype.nodeType = function(name) {
            var found = this.nodes[name];
            if (!found) throw new RangeError("Unknown node type: " + name);
            return found;
        };
        var DOMParser = function(schema, rules) {
            var this$1 = this;
            this.schema = schema, this.rules = rules, this.tags = [], this.styles = [], rules.forEach((function(rule) {
                rule.tag ? this$1.tags.push(rule) : rule.style && this$1.styles.push(rule);
            })), this.normalizeLists = !this.tags.some((function(r) {
                if (!/^(ul|ol)\b/.test(r.tag) || !r.node) return !1;
                var node = schema.nodes[r.node];
                return node.contentMatch.matchType(node);
            }));
        };
        DOMParser.prototype.parse = function(dom, options) {
            void 0 === options && (options = {});
            var context = new ParseContext(this, options, !1);
            return context.addAll(dom, null, options.from, options.to), context.finish();
        }, DOMParser.prototype.parseSlice = function(dom, options) {
            void 0 === options && (options = {});
            var context = new ParseContext(this, options, !0);
            return context.addAll(dom, null, options.from, options.to), Slice.maxOpen(context.finish());
        }, DOMParser.prototype.matchTag = function(dom, context) {
            for (var i = 0; i < this.tags.length; i++) {
                var rule = this.tags[i];
                if (matches(dom, rule.tag) && (void 0 === rule.namespace || dom.namespaceURI == rule.namespace) && (!rule.context || context.matchesContext(rule.context))) {
                    if (rule.getAttrs) {
                        var result = rule.getAttrs(dom);
                        if (!1 === result) continue;
                        rule.attrs = result;
                    }
                    return rule;
                }
            }
        }, DOMParser.prototype.matchStyle = function(prop, value, context) {
            for (var i = 0; i < this.styles.length; i++) {
                var rule = this.styles[i];
                if (!(0 != rule.style.indexOf(prop) || rule.context && !context.matchesContext(rule.context) || rule.style.length > prop.length && (61 != rule.style.charCodeAt(prop.length) || rule.style.slice(prop.length + 1) != value))) {
                    if (rule.getAttrs) {
                        var result = rule.getAttrs(value);
                        if (!1 === result) continue;
                        rule.attrs = result;
                    }
                    return rule;
                }
            }
        }, DOMParser.schemaRules = function(schema) {
            var result = [];
            function insert(rule) {
                for (var priority = null == rule.priority ? 50 : rule.priority, i = 0; i < result.length; i++) {
                    var next = result[i];
                    if ((null == next.priority ? 50 : next.priority) < priority) break;
                }
                result.splice(i, 0, rule);
            }
            var loop = function(name) {
                var rules = schema.marks[name].spec.parseDOM;
                rules && rules.forEach((function(rule) {
                    insert(rule = copy(rule)), rule.mark = name;
                }));
            };
            for (var name in schema.marks) loop(name);
            var rules$1;
            for (var name$1 in schema.nodes) rules$1 = void 0, (rules$1 = schema.nodes[name$1].spec.parseDOM) && rules$1.forEach((function(rule) {
                insert(rule = copy(rule)), rule.node = name$1;
            }));
            return result;
        }, DOMParser.fromSchema = function(schema) {
            return schema.cached.domParser || (schema.cached.domParser = new DOMParser(schema, DOMParser.schemaRules(schema)));
        };
        var blockTags = {
            address: !0,
            article: !0,
            aside: !0,
            blockquote: !0,
            canvas: !0,
            dd: !0,
            div: !0,
            dl: !0,
            fieldset: !0,
            figcaption: !0,
            figure: !0,
            footer: !0,
            form: !0,
            h1: !0,
            h2: !0,
            h3: !0,
            h4: !0,
            h5: !0,
            h6: !0,
            header: !0,
            hgroup: !0,
            hr: !0,
            li: !0,
            noscript: !0,
            ol: !0,
            output: !0,
            p: !0,
            pre: !0,
            section: !0,
            table: !0,
            tfoot: !0,
            ul: !0
        }, ignoreTags = {
            head: !0,
            noscript: !0,
            object: !0,
            script: !0,
            style: !0,
            title: !0
        }, listTags = {
            ol: !0,
            ul: !0
        };
        function wsOptionsFor(preserveWhitespace) {
            return (preserveWhitespace ? 1 : 0) | ("full" === preserveWhitespace ? 2 : 0);
        }
        var NodeContext = function(type, attrs, marks, pendingMarks, solid, match, options) {
            this.type = type, this.attrs = attrs, this.solid = solid, this.match = match || (4 & options ? null : type.contentMatch), 
            this.options = options, this.content = [], this.marks = marks, this.activeMarks = Mark.none, 
            this.pendingMarks = pendingMarks, this.stashMarks = [];
        };
        NodeContext.prototype.findWrapping = function(node) {
            if (!this.match) {
                if (!this.type) return [];
                var fill = this.type.contentMatch.fillBefore(Fragment.from(node));
                if (!fill) {
                    var wrap, start = this.type.contentMatch;
                    return (wrap = start.findWrapping(node.type)) ? (this.match = start, wrap) : null;
                }
                this.match = this.type.contentMatch.matchFragment(fill);
            }
            return this.match.findWrapping(node.type);
        }, NodeContext.prototype.finish = function(openEnd) {
            if (!(1 & this.options)) {
                var m, last = this.content[this.content.length - 1];
                last && last.isText && (m = /[ \t\r\n\u000c]+$/.exec(last.text)) && (last.text.length == m[0].length ? this.content.pop() : this.content[this.content.length - 1] = last.withText(last.text.slice(0, last.text.length - m[0].length)));
            }
            var content = Fragment.from(this.content);
            return !openEnd && this.match && (content = content.append(this.match.fillBefore(Fragment.empty, !0))), 
            this.type ? this.type.create(this.attrs, content, this.marks) : content;
        }, NodeContext.prototype.popFromStashMark = function(markType) {
            for (var i = this.stashMarks.length - 1; i >= 0; i--) if (this.stashMarks[i].type == markType) return this.stashMarks.splice(i, 1)[0];
        }, NodeContext.prototype.applyPending = function(nextType) {
            for (var i = 0, pending = this.pendingMarks; i < pending.length; i++) {
                var mark = pending[i];
                if ((this.type ? this.type.allowsMarkType(mark.type) : markMayApply(mark.type, nextType)) && !mark.isInSet(this.activeMarks)) {
                    var found = findSameTypeInSet(mark, this.activeMarks);
                    found && this.stashMarks.push(found), this.activeMarks = mark.addToSet(this.activeMarks), 
                    this.pendingMarks = mark.removeFromSet(this.pendingMarks);
                }
            }
        };
        var ParseContext = function(parser, options, open) {
            this.parser = parser, this.options = options, this.isOpen = open;
            var topContext, topNode = options.topNode, topOptions = wsOptionsFor(options.preserveWhitespace) | (open ? 4 : 0);
            topContext = topNode ? new NodeContext(topNode.type, topNode.attrs, Mark.none, Mark.none, !0, options.topMatch || topNode.type.contentMatch, topOptions) : new NodeContext(open ? null : parser.schema.topNodeType, null, Mark.none, Mark.none, !0, null, topOptions), 
            this.nodes = [ topContext ], this.open = 0, this.find = options.findPositions, this.needsBlock = !1;
        }, prototypeAccessors$6 = {
            top: {
                configurable: !0
            },
            currentPos: {
                configurable: !0
            }
        };
        function matches(dom, selector) {
            return (dom.matches || dom.msMatchesSelector || dom.webkitMatchesSelector || dom.mozMatchesSelector).call(dom, selector);
        }
        function copy(obj) {
            var copy = {};
            for (var prop in obj) copy[prop] = obj[prop];
            return copy;
        }
        function markMayApply(markType, nodeType) {
            var nodes = nodeType.schema.nodes, loop = function(name) {
                var parent = nodes[name];
                if (parent.allowsMarkType(markType)) {
                    var seen = [], scan = function(match) {
                        seen.push(match);
                        for (var i = 0; i < match.edgeCount; i++) {
                            var ref = match.edge(i), type = ref.type, next = ref.next;
                            if (type == nodeType) return !0;
                            if (seen.indexOf(next) < 0 && scan(next)) return !0;
                        }
                    };
                    return scan(parent.contentMatch) ? {
                        v: !0
                    } : void 0;
                }
            };
            for (var name in nodes) {
                var returned = loop(name);
                if (returned) return returned.v;
            }
        }
        function findSameTypeInSet(mark, set) {
            for (var i = 0; i < set.length; i++) if (mark.type == set[i].type) return set[i];
        }
        prototypeAccessors$6.top.get = function() {
            return this.nodes[this.open];
        }, ParseContext.prototype.addDOM = function(dom) {
            if (3 == dom.nodeType) this.addTextNode(dom); else if (1 == dom.nodeType) {
                var style = dom.getAttribute("style"), marks = style ? this.readStyles(function(style) {
                    var m, re = /\s*([\w-]+)\s*:\s*([^;]+)/g, result = [];
                    for (;m = re.exec(style); ) result.push(m[1], m[2].trim());
                    return result;
                }(style)) : null, top = this.top;
                if (null != marks) for (var i = 0; i < marks.length; i++) this.addPendingMark(marks[i]);
                if (this.addElement(dom), null != marks) for (var i$1 = 0; i$1 < marks.length; i$1++) this.removePendingMark(marks[i$1], top);
            }
        }, ParseContext.prototype.addTextNode = function(dom) {
            var value = dom.nodeValue, top = this.top;
            if ((top.type ? top.type.inlineContent : top.content.length && top.content[0].isInline) || /[^ \t\r\n\u000c]/.test(value)) {
                if (1 & top.options) 2 & top.options || (value = value.replace(/\r?\n|\r/g, " ")); else if (value = value.replace(/[ \t\r\n\u000c]+/g, " "), 
                /^[ \t\r\n\u000c]/.test(value) && this.open == this.nodes.length - 1) {
                    var nodeBefore = top.content[top.content.length - 1], domNodeBefore = dom.previousSibling;
                    (!nodeBefore || domNodeBefore && "BR" == domNodeBefore.nodeName || nodeBefore.isText && /[ \t\r\n\u000c]$/.test(nodeBefore.text)) && (value = value.slice(1));
                }
                value && this.insertNode(this.parser.schema.text(value)), this.findInText(dom);
            } else this.findInside(dom);
        }, ParseContext.prototype.addElement = function(dom) {
            var name = dom.nodeName.toLowerCase();
            listTags.hasOwnProperty(name) && this.parser.normalizeLists && function(dom) {
                for (var child = dom.firstChild, prevItem = null; child; child = child.nextSibling) {
                    var name = 1 == child.nodeType ? child.nodeName.toLowerCase() : null;
                    name && listTags.hasOwnProperty(name) && prevItem ? (prevItem.appendChild(child), 
                    child = prevItem) : "li" == name ? prevItem = child : name && (prevItem = null);
                }
            }(dom);
            var rule = this.options.ruleFromNode && this.options.ruleFromNode(dom) || this.parser.matchTag(dom, this);
            if (rule ? rule.ignore : ignoreTags.hasOwnProperty(name)) this.findInside(dom); else if (!rule || rule.skip || rule.closeParent) {
                rule && rule.closeParent ? this.open = Math.max(0, this.open - 1) : rule && rule.skip.nodeType && (dom = rule.skip);
                var sync, top = this.top, oldNeedsBlock = this.needsBlock;
                if (blockTags.hasOwnProperty(name)) sync = !0, top.type || (this.needsBlock = !0); else if (!dom.firstChild) return void this.leafFallback(dom);
                this.addAll(dom), sync && this.sync(top), this.needsBlock = oldNeedsBlock;
            } else this.addElementByRule(dom, rule);
        }, ParseContext.prototype.leafFallback = function(dom) {
            "BR" == dom.nodeName && this.top.type && this.top.type.inlineContent && this.addTextNode(dom.ownerDocument.createTextNode("\n"));
        }, ParseContext.prototype.readStyles = function(styles) {
            for (var marks = Mark.none, i = 0; i < styles.length; i += 2) {
                var rule = this.parser.matchStyle(styles[i], styles[i + 1], this);
                if (rule) {
                    if (rule.ignore) return null;
                    marks = this.parser.schema.marks[rule.mark].create(rule.attrs).addToSet(marks);
                }
            }
            return marks;
        }, ParseContext.prototype.addElementByRule = function(dom, rule) {
            var sync, nodeType, mark, this$1 = this;
            rule.node ? (nodeType = this.parser.schema.nodes[rule.node]).isLeaf ? this.insertNode(nodeType.create(rule.attrs)) || this.leafFallback(dom) : sync = this.enter(nodeType, rule.attrs, rule.preserveWhitespace) : (mark = this.parser.schema.marks[rule.mark].create(rule.attrs), 
            this.addPendingMark(mark));
            var startIn = this.top;
            if (nodeType && nodeType.isLeaf) this.findInside(dom); else if (rule.getContent) this.findInside(dom), 
            rule.getContent(dom, this.parser.schema).forEach((function(node) {
                return this$1.insertNode(node);
            })); else {
                var contentDOM = rule.contentElement;
                "string" == typeof contentDOM ? contentDOM = dom.querySelector(contentDOM) : "function" == typeof contentDOM && (contentDOM = contentDOM(dom)), 
                contentDOM || (contentDOM = dom), this.findAround(dom, contentDOM, !0), this.addAll(contentDOM, sync);
            }
            sync && (this.sync(startIn), this.open--), mark && this.removePendingMark(mark, startIn);
        }, ParseContext.prototype.addAll = function(parent, sync, startIndex, endIndex) {
            for (var index = startIndex || 0, dom = startIndex ? parent.childNodes[startIndex] : parent.firstChild, end = null == endIndex ? null : parent.childNodes[endIndex]; dom != end; dom = dom.nextSibling, 
            ++index) this.findAtPoint(parent, index), this.addDOM(dom), sync && blockTags.hasOwnProperty(dom.nodeName.toLowerCase()) && this.sync(sync);
            this.findAtPoint(parent, index);
        }, ParseContext.prototype.findPlace = function(node) {
            for (var route, sync, depth = this.open; depth >= 0; depth--) {
                var cx = this.nodes[depth], found = cx.findWrapping(node);
                if (found && (!route || route.length > found.length) && (route = found, sync = cx, 
                !found.length)) break;
                if (cx.solid) break;
            }
            if (!route) return !1;
            this.sync(sync);
            for (var i = 0; i < route.length; i++) this.enterInner(route[i], null, !1);
            return !0;
        }, ParseContext.prototype.insertNode = function(node) {
            if (node.isInline && this.needsBlock && !this.top.type) {
                var block = this.textblockFromContext();
                block && this.enterInner(block);
            }
            if (this.findPlace(node)) {
                this.closeExtra();
                var top = this.top;
                top.applyPending(node.type), top.match && (top.match = top.match.matchType(node.type));
                for (var marks = top.activeMarks, i = 0; i < node.marks.length; i++) top.type && !top.type.allowsMarkType(node.marks[i].type) || (marks = node.marks[i].addToSet(marks));
                return top.content.push(node.mark(marks)), !0;
            }
            return !1;
        }, ParseContext.prototype.enter = function(type, attrs, preserveWS) {
            var ok = this.findPlace(type.create(attrs));
            return ok && this.enterInner(type, attrs, !0, preserveWS), ok;
        }, ParseContext.prototype.enterInner = function(type, attrs, solid, preserveWS) {
            this.closeExtra();
            var top = this.top;
            top.applyPending(type), top.match = top.match && top.match.matchType(type, attrs);
            var options = null == preserveWS ? -5 & top.options : wsOptionsFor(preserveWS);
            4 & top.options && 0 == top.content.length && (options |= 4), this.nodes.push(new NodeContext(type, attrs, top.activeMarks, top.pendingMarks, solid, null, options)), 
            this.open++;
        }, ParseContext.prototype.closeExtra = function(openEnd) {
            var i = this.nodes.length - 1;
            if (i > this.open) {
                for (;i > this.open; i--) this.nodes[i - 1].content.push(this.nodes[i].finish(openEnd));
                this.nodes.length = this.open + 1;
            }
        }, ParseContext.prototype.finish = function() {
            return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
        }, ParseContext.prototype.sync = function(to) {
            for (var i = this.open; i >= 0; i--) if (this.nodes[i] == to) return void (this.open = i);
        }, prototypeAccessors$6.currentPos.get = function() {
            this.closeExtra();
            for (var pos = 0, i = this.open; i >= 0; i--) {
                for (var content = this.nodes[i].content, j = content.length - 1; j >= 0; j--) pos += content[j].nodeSize;
                i && pos++;
            }
            return pos;
        }, ParseContext.prototype.findAtPoint = function(parent, offset) {
            if (this.find) for (var i = 0; i < this.find.length; i++) this.find[i].node == parent && this.find[i].offset == offset && (this.find[i].pos = this.currentPos);
        }, ParseContext.prototype.findInside = function(parent) {
            if (this.find) for (var i = 0; i < this.find.length; i++) null == this.find[i].pos && 1 == parent.nodeType && parent.contains(this.find[i].node) && (this.find[i].pos = this.currentPos);
        }, ParseContext.prototype.findAround = function(parent, content, before) {
            if (parent != content && this.find) for (var i = 0; i < this.find.length; i++) {
                if (null == this.find[i].pos && 1 == parent.nodeType && parent.contains(this.find[i].node)) content.compareDocumentPosition(this.find[i].node) & (before ? 2 : 4) && (this.find[i].pos = this.currentPos);
            }
        }, ParseContext.prototype.findInText = function(textNode) {
            if (this.find) for (var i = 0; i < this.find.length; i++) this.find[i].node == textNode && (this.find[i].pos = this.currentPos - (textNode.nodeValue.length - this.find[i].offset));
        }, ParseContext.prototype.matchesContext = function(context) {
            var this$1 = this;
            if (context.indexOf("|") > -1) return context.split(/\s*\|\s*/).some(this.matchesContext, this);
            var parts = context.split("/"), option = this.options.context, useRoot = !(this.isOpen || option && option.parent.type != this.nodes[0].type), minDepth = -(option ? option.depth + 1 : 0) + (useRoot ? 0 : 1), match = function(i, depth) {
                for (;i >= 0; i--) {
                    var part = parts[i];
                    if ("" == part) {
                        if (i == parts.length - 1 || 0 == i) continue;
                        for (;depth >= minDepth; depth--) if (match(i - 1, depth)) return !0;
                        return !1;
                    }
                    var next = depth > 0 || 0 == depth && useRoot ? this$1.nodes[depth].type : option && depth >= minDepth ? option.node(depth - minDepth).type : null;
                    if (!next || next.name != part && -1 == next.groups.indexOf(part)) return !1;
                    depth--;
                }
                return !0;
            };
            return match(parts.length - 1, this.open);
        }, ParseContext.prototype.textblockFromContext = function() {
            var $context = this.options.context;
            if ($context) for (var d = $context.depth; d >= 0; d--) {
                var deflt = $context.node(d).contentMatchAt($context.indexAfter(d)).defaultType;
                if (deflt && deflt.isTextblock && deflt.defaultAttrs) return deflt;
            }
            for (var name in this.parser.schema.nodes) {
                var type = this.parser.schema.nodes[name];
                if (type.isTextblock && type.defaultAttrs) return type;
            }
        }, ParseContext.prototype.addPendingMark = function(mark) {
            var found = findSameTypeInSet(mark, this.top.pendingMarks);
            found && this.top.stashMarks.push(found), this.top.pendingMarks = mark.addToSet(this.top.pendingMarks);
        }, ParseContext.prototype.removePendingMark = function(mark, upto) {
            for (var depth = this.open; depth >= 0; depth--) {
                var level = this.nodes[depth];
                if (level.pendingMarks.lastIndexOf(mark) > -1) level.pendingMarks = mark.removeFromSet(level.pendingMarks); else {
                    level.activeMarks = mark.removeFromSet(level.activeMarks);
                    var stashMark = level.popFromStashMark(mark.type);
                    stashMark && (level.activeMarks = stashMark.addToSet(level.activeMarks));
                }
                if (level == upto) break;
            }
        }, Object.defineProperties(ParseContext.prototype, prototypeAccessors$6);
        var DOMSerializer = function(nodes, marks) {
            this.nodes = nodes || {}, this.marks = marks || {};
        };
        function gatherToDOM(obj) {
            var result = {};
            for (var name in obj) {
                var toDOM = obj[name].spec.toDOM;
                toDOM && (result[name] = toDOM);
            }
            return result;
        }
        function doc(options) {
            return options.document || window.document;
        }
        DOMSerializer.prototype.serializeFragment = function(fragment, options, target) {
            var this$1 = this;
            void 0 === options && (options = {}), target || (target = doc(options).createDocumentFragment());
            var top = target, active = null;
            return fragment.forEach((function(node) {
                if (active || node.marks.length) {
                    active || (active = []);
                    for (var keep = 0, rendered = 0; keep < active.length && rendered < node.marks.length; ) {
                        var next = node.marks[rendered];
                        if (this$1.marks[next.type.name]) {
                            if (!next.eq(active[keep]) || !1 === next.type.spec.spanning) break;
                            keep += 2, rendered++;
                        } else rendered++;
                    }
                    for (;keep < active.length; ) top = active.pop(), active.pop();
                    for (;rendered < node.marks.length; ) {
                        var add = node.marks[rendered++], markDOM = this$1.serializeMark(add, node.isInline, options);
                        markDOM && (active.push(add, top), top.appendChild(markDOM.dom), top = markDOM.contentDOM || markDOM.dom);
                    }
                }
                top.appendChild(this$1.serializeNode(node, options));
            })), target;
        }, DOMSerializer.prototype.serializeNode = function(node, options) {
            void 0 === options && (options = {});
            var ref = DOMSerializer.renderSpec(doc(options), this.nodes[node.type.name](node)), dom = ref.dom, contentDOM = ref.contentDOM;
            if (contentDOM) {
                if (node.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
                options.onContent ? options.onContent(node, contentDOM, options) : this.serializeFragment(node.content, options, contentDOM);
            }
            return dom;
        }, DOMSerializer.prototype.serializeNodeAndMarks = function(node, options) {
            void 0 === options && (options = {});
            for (var dom = this.serializeNode(node, options), i = node.marks.length - 1; i >= 0; i--) {
                var wrap = this.serializeMark(node.marks[i], node.isInline, options);
                wrap && ((wrap.contentDOM || wrap.dom).appendChild(dom), dom = wrap.dom);
            }
            return dom;
        }, DOMSerializer.prototype.serializeMark = function(mark, inline, options) {
            void 0 === options && (options = {});
            var toDOM = this.marks[mark.type.name];
            return toDOM && DOMSerializer.renderSpec(doc(options), toDOM(mark, inline));
        }, DOMSerializer.renderSpec = function(doc, structure, xmlNS) {
            if (void 0 === xmlNS && (xmlNS = null), "string" == typeof structure) return {
                dom: doc.createTextNode(structure)
            };
            if (null != structure.nodeType) return {
                dom: structure
            };
            var tagName = structure[0], space = tagName.indexOf(" ");
            space > 0 && (xmlNS = tagName.slice(0, space), tagName = tagName.slice(space + 1));
            var contentDOM = null, dom = xmlNS ? doc.createElementNS(xmlNS, tagName) : doc.createElement(tagName), attrs = structure[1], start = 1;
            if (attrs && "object" == typeof attrs && null == attrs.nodeType && !Array.isArray(attrs)) for (var name in start = 2, 
            attrs) if (null != attrs[name]) {
                var space$1 = name.indexOf(" ");
                space$1 > 0 ? dom.setAttributeNS(name.slice(0, space$1), name.slice(space$1 + 1), attrs[name]) : dom.setAttribute(name, attrs[name]);
            }
            for (var i = start; i < structure.length; i++) {
                var child = structure[i];
                if (0 === child) {
                    if (i < structure.length - 1 || i > start) throw new RangeError("Content hole must be the only child of its parent node");
                    return {
                        dom: dom,
                        contentDOM: dom
                    };
                }
                var ref = DOMSerializer.renderSpec(doc, child, xmlNS), inner = ref.dom, innerContent = ref.contentDOM;
                if (dom.appendChild(inner), innerContent) {
                    if (contentDOM) throw new RangeError("Multiple content holes");
                    contentDOM = innerContent;
                }
            }
            return {
                dom: dom,
                contentDOM: contentDOM
            };
        }, DOMSerializer.fromSchema = function(schema) {
            return schema.cached.domSerializer || (schema.cached.domSerializer = new DOMSerializer(this.nodesFromSchema(schema), this.marksFromSchema(schema)));
        }, DOMSerializer.nodesFromSchema = function(schema) {
            var result = gatherToDOM(schema.nodes);
            return result.text || (result.text = function(node) {
                return node.text;
            }), result;
        }, DOMSerializer.marksFromSchema = function(schema) {
            return gatherToDOM(schema.marks);
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "AllSelection", (function() {
            return AllSelection;
        })), __webpack_require__.d(__webpack_exports__, "EditorState", (function() {
            return EditorState;
        })), __webpack_require__.d(__webpack_exports__, "NodeSelection", (function() {
            return NodeSelection;
        })), __webpack_require__.d(__webpack_exports__, "Plugin", (function() {
            return Plugin;
        })), __webpack_require__.d(__webpack_exports__, "PluginKey", (function() {
            return PluginKey;
        })), __webpack_require__.d(__webpack_exports__, "Selection", (function() {
            return Selection;
        })), __webpack_require__.d(__webpack_exports__, "SelectionRange", (function() {
            return SelectionRange;
        })), __webpack_require__.d(__webpack_exports__, "TextSelection", (function() {
            return TextSelection;
        })), __webpack_require__.d(__webpack_exports__, "Transaction", (function() {
            return Transaction;
        }));
        var prosemirror_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0), prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2), classesById = Object.create(null), Selection = function($anchor, $head, ranges) {
            this.ranges = ranges || [ new SelectionRange($anchor.min($head), $anchor.max($head)) ], 
            this.$anchor = $anchor, this.$head = $head;
        }, prototypeAccessors = {
            anchor: {
                configurable: !0
            },
            head: {
                configurable: !0
            },
            from: {
                configurable: !0
            },
            to: {
                configurable: !0
            },
            $from: {
                configurable: !0
            },
            $to: {
                configurable: !0
            },
            empty: {
                configurable: !0
            }
        };
        prototypeAccessors.anchor.get = function() {
            return this.$anchor.pos;
        }, prototypeAccessors.head.get = function() {
            return this.$head.pos;
        }, prototypeAccessors.from.get = function() {
            return this.$from.pos;
        }, prototypeAccessors.to.get = function() {
            return this.$to.pos;
        }, prototypeAccessors.$from.get = function() {
            return this.ranges[0].$from;
        }, prototypeAccessors.$to.get = function() {
            return this.ranges[0].$to;
        }, prototypeAccessors.empty.get = function() {
            for (var ranges = this.ranges, i = 0; i < ranges.length; i++) if (ranges[i].$from.pos != ranges[i].$to.pos) return !1;
            return !0;
        }, Selection.prototype.content = function() {
            return this.$from.node(0).slice(this.from, this.to, !0);
        }, Selection.prototype.replace = function(tr, content) {
            void 0 === content && (content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l.empty);
            for (var lastNode = content.content.lastChild, lastParent = null, i = 0; i < content.openEnd; i++) lastParent = lastNode, 
            lastNode = lastNode.lastChild;
            for (var mapFrom = tr.steps.length, ranges = this.ranges, i$1 = 0; i$1 < ranges.length; i$1++) {
                var ref = ranges[i$1], $from = ref.$from, $to = ref.$to, mapping = tr.mapping.slice(mapFrom);
                tr.replaceRange(mapping.map($from.pos), mapping.map($to.pos), i$1 ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l.empty : content), 
                0 == i$1 && selectionToInsertionEnd(tr, mapFrom, (lastNode ? lastNode.isInline : lastParent && lastParent.isTextblock) ? -1 : 1);
            }
        }, Selection.prototype.replaceWith = function(tr, node) {
            for (var mapFrom = tr.steps.length, ranges = this.ranges, i = 0; i < ranges.length; i++) {
                var ref = ranges[i], $from = ref.$from, $to = ref.$to, mapping = tr.mapping.slice(mapFrom), from = mapping.map($from.pos), to = mapping.map($to.pos);
                i ? tr.deleteRange(from, to) : (tr.replaceRangeWith(from, to, node), selectionToInsertionEnd(tr, mapFrom, node.isInline ? -1 : 1));
            }
        }, Selection.findFrom = function($pos, dir, textOnly) {
            var inner = $pos.parent.inlineContent ? new TextSelection($pos) : findSelectionIn($pos.node(0), $pos.parent, $pos.pos, $pos.index(), dir, textOnly);
            if (inner) return inner;
            for (var depth = $pos.depth - 1; depth >= 0; depth--) {
                var found = dir < 0 ? findSelectionIn($pos.node(0), $pos.node(depth), $pos.before(depth + 1), $pos.index(depth), dir, textOnly) : findSelectionIn($pos.node(0), $pos.node(depth), $pos.after(depth + 1), $pos.index(depth) + 1, dir, textOnly);
                if (found) return found;
            }
        }, Selection.near = function($pos, bias) {
            return void 0 === bias && (bias = 1), this.findFrom($pos, bias) || this.findFrom($pos, -bias) || new AllSelection($pos.node(0));
        }, Selection.atStart = function(doc) {
            return findSelectionIn(doc, doc, 0, 0, 1) || new AllSelection(doc);
        }, Selection.atEnd = function(doc) {
            return findSelectionIn(doc, doc, doc.content.size, doc.childCount, -1) || new AllSelection(doc);
        }, Selection.fromJSON = function(doc, json) {
            if (!json || !json.type) throw new RangeError("Invalid input for Selection.fromJSON");
            var cls = classesById[json.type];
            if (!cls) throw new RangeError("No selection type " + json.type + " defined");
            return cls.fromJSON(doc, json);
        }, Selection.jsonID = function(id, selectionClass) {
            if (id in classesById) throw new RangeError("Duplicate use of selection JSON ID " + id);
            return classesById[id] = selectionClass, selectionClass.prototype.jsonID = id, selectionClass;
        }, Selection.prototype.getBookmark = function() {
            return TextSelection.between(this.$anchor, this.$head).getBookmark();
        }, Object.defineProperties(Selection.prototype, prototypeAccessors), Selection.prototype.visible = !0;
        var SelectionRange = function($from, $to) {
            this.$from = $from, this.$to = $to;
        }, TextSelection = function(Selection) {
            function TextSelection($anchor, $head) {
                void 0 === $head && ($head = $anchor), Selection.call(this, $anchor, $head);
            }
            Selection && (TextSelection.__proto__ = Selection), TextSelection.prototype = Object.create(Selection && Selection.prototype), 
            TextSelection.prototype.constructor = TextSelection;
            var prototypeAccessors$1 = {
                $cursor: {
                    configurable: !0
                }
            };
            return prototypeAccessors$1.$cursor.get = function() {
                return this.$anchor.pos == this.$head.pos ? this.$head : null;
            }, TextSelection.prototype.map = function(doc, mapping) {
                var $head = doc.resolve(mapping.map(this.head));
                if (!$head.parent.inlineContent) return Selection.near($head);
                var $anchor = doc.resolve(mapping.map(this.anchor));
                return new TextSelection($anchor.parent.inlineContent ? $anchor : $head, $head);
            }, TextSelection.prototype.replace = function(tr, content) {
                if (void 0 === content && (content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l.empty), 
                Selection.prototype.replace.call(this, tr, content), content == prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l.empty) {
                    var marks = this.$from.marksAcross(this.$to);
                    marks && tr.ensureMarks(marks);
                }
            }, TextSelection.prototype.eq = function(other) {
                return other instanceof TextSelection && other.anchor == this.anchor && other.head == this.head;
            }, TextSelection.prototype.getBookmark = function() {
                return new TextBookmark(this.anchor, this.head);
            }, TextSelection.prototype.toJSON = function() {
                return {
                    type: "text",
                    anchor: this.anchor,
                    head: this.head
                };
            }, TextSelection.fromJSON = function(doc, json) {
                if ("number" != typeof json.anchor || "number" != typeof json.head) throw new RangeError("Invalid input for TextSelection.fromJSON");
                return new TextSelection(doc.resolve(json.anchor), doc.resolve(json.head));
            }, TextSelection.create = function(doc, anchor, head) {
                void 0 === head && (head = anchor);
                var $anchor = doc.resolve(anchor);
                return new this($anchor, head == anchor ? $anchor : doc.resolve(head));
            }, TextSelection.between = function($anchor, $head, bias) {
                var dPos = $anchor.pos - $head.pos;
                if (bias && !dPos || (bias = dPos >= 0 ? 1 : -1), !$head.parent.inlineContent) {
                    var found = Selection.findFrom($head, bias, !0) || Selection.findFrom($head, -bias, !0);
                    if (!found) return Selection.near($head, bias);
                    $head = found.$head;
                }
                return $anchor.parent.inlineContent || (0 == dPos || ($anchor = (Selection.findFrom($anchor, -bias, !0) || Selection.findFrom($anchor, bias, !0)).$anchor).pos < $head.pos != dPos < 0) && ($anchor = $head), 
                new TextSelection($anchor, $head);
            }, Object.defineProperties(TextSelection.prototype, prototypeAccessors$1), TextSelection;
        }(Selection);
        Selection.jsonID("text", TextSelection);
        var TextBookmark = function(anchor, head) {
            this.anchor = anchor, this.head = head;
        };
        TextBookmark.prototype.map = function(mapping) {
            return new TextBookmark(mapping.map(this.anchor), mapping.map(this.head));
        }, TextBookmark.prototype.resolve = function(doc) {
            return TextSelection.between(doc.resolve(this.anchor), doc.resolve(this.head));
        };
        var NodeSelection = function(Selection) {
            function NodeSelection($pos) {
                var node = $pos.nodeAfter, $end = $pos.node(0).resolve($pos.pos + node.nodeSize);
                Selection.call(this, $pos, $end), this.node = node;
            }
            return Selection && (NodeSelection.__proto__ = Selection), NodeSelection.prototype = Object.create(Selection && Selection.prototype), 
            NodeSelection.prototype.constructor = NodeSelection, NodeSelection.prototype.map = function(doc, mapping) {
                var ref = mapping.mapResult(this.anchor), deleted = ref.deleted, pos = ref.pos, $pos = doc.resolve(pos);
                return deleted ? Selection.near($pos) : new NodeSelection($pos);
            }, NodeSelection.prototype.content = function() {
                return new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.from(this.node), 0, 0);
            }, NodeSelection.prototype.eq = function(other) {
                return other instanceof NodeSelection && other.anchor == this.anchor;
            }, NodeSelection.prototype.toJSON = function() {
                return {
                    type: "node",
                    anchor: this.anchor
                };
            }, NodeSelection.prototype.getBookmark = function() {
                return new NodeBookmark(this.anchor);
            }, NodeSelection.fromJSON = function(doc, json) {
                if ("number" != typeof json.anchor) throw new RangeError("Invalid input for NodeSelection.fromJSON");
                return new NodeSelection(doc.resolve(json.anchor));
            }, NodeSelection.create = function(doc, from) {
                return new this(doc.resolve(from));
            }, NodeSelection.isSelectable = function(node) {
                return !node.isText && !1 !== node.type.spec.selectable;
            }, NodeSelection;
        }(Selection);
        NodeSelection.prototype.visible = !1, Selection.jsonID("node", NodeSelection);
        var NodeBookmark = function(anchor) {
            this.anchor = anchor;
        };
        NodeBookmark.prototype.map = function(mapping) {
            var ref = mapping.mapResult(this.anchor), deleted = ref.deleted, pos = ref.pos;
            return deleted ? new TextBookmark(pos, pos) : new NodeBookmark(pos);
        }, NodeBookmark.prototype.resolve = function(doc) {
            var $pos = doc.resolve(this.anchor), node = $pos.nodeAfter;
            return node && NodeSelection.isSelectable(node) ? new NodeSelection($pos) : Selection.near($pos);
        };
        var AllSelection = function(Selection) {
            function AllSelection(doc) {
                Selection.call(this, doc.resolve(0), doc.resolve(doc.content.size));
            }
            return Selection && (AllSelection.__proto__ = Selection), AllSelection.prototype = Object.create(Selection && Selection.prototype), 
            AllSelection.prototype.constructor = AllSelection, AllSelection.prototype.replace = function(tr, content) {
                if (void 0 === content && (content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l.empty), 
                content == prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l.empty) {
                    tr.delete(0, tr.doc.content.size);
                    var sel = Selection.atStart(tr.doc);
                    sel.eq(tr.selection) || tr.setSelection(sel);
                } else Selection.prototype.replace.call(this, tr, content);
            }, AllSelection.prototype.toJSON = function() {
                return {
                    type: "all"
                };
            }, AllSelection.fromJSON = function(doc) {
                return new AllSelection(doc);
            }, AllSelection.prototype.map = function(doc) {
                return new AllSelection(doc);
            }, AllSelection.prototype.eq = function(other) {
                return other instanceof AllSelection;
            }, AllSelection.prototype.getBookmark = function() {
                return AllBookmark;
            }, AllSelection;
        }(Selection);
        Selection.jsonID("all", AllSelection);
        var AllBookmark = {
            map: function() {
                return this;
            },
            resolve: function(doc) {
                return new AllSelection(doc);
            }
        };
        function findSelectionIn(doc, node, pos, index, dir, text) {
            if (node.inlineContent) return TextSelection.create(doc, pos);
            for (var i = index - (dir > 0 ? 0 : 1); dir > 0 ? i < node.childCount : i >= 0; i += dir) {
                var child = node.child(i);
                if (child.isAtom) {
                    if (!text && NodeSelection.isSelectable(child)) return NodeSelection.create(doc, pos - (dir < 0 ? child.nodeSize : 0));
                } else {
                    var inner = findSelectionIn(doc, child, pos + dir, dir < 0 ? child.childCount : 0, dir, text);
                    if (inner) return inner;
                }
                pos += child.nodeSize * dir;
            }
        }
        function selectionToInsertionEnd(tr, startLen, bias) {
            var last = tr.steps.length - 1;
            if (!(last < startLen)) {
                var end, step = tr.steps[last];
                if (step instanceof prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.c || step instanceof prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.b) tr.mapping.maps[last].forEach((function(_from, _to, _newFrom, newTo) {
                    null == end && (end = newTo);
                })), tr.setSelection(Selection.near(tr.doc.resolve(end), bias));
            }
        }
        var Transaction = function(Transform) {
            function Transaction(state) {
                Transform.call(this, state.doc), this.time = Date.now(), this.curSelection = state.selection, 
                this.curSelectionFor = 0, this.storedMarks = state.storedMarks, this.updated = 0, 
                this.meta = Object.create(null);
            }
            Transform && (Transaction.__proto__ = Transform), Transaction.prototype = Object.create(Transform && Transform.prototype), 
            Transaction.prototype.constructor = Transaction;
            var prototypeAccessors = {
                selection: {
                    configurable: !0
                },
                selectionSet: {
                    configurable: !0
                },
                storedMarksSet: {
                    configurable: !0
                },
                isGeneric: {
                    configurable: !0
                },
                scrolledIntoView: {
                    configurable: !0
                }
            };
            return prototypeAccessors.selection.get = function() {
                return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), 
                this.curSelectionFor = this.steps.length), this.curSelection;
            }, Transaction.prototype.setSelection = function(selection) {
                if (selection.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
                return this.curSelection = selection, this.curSelectionFor = this.steps.length, 
                this.updated = -3 & (1 | this.updated), this.storedMarks = null, this;
            }, prototypeAccessors.selectionSet.get = function() {
                return (1 & this.updated) > 0;
            }, Transaction.prototype.setStoredMarks = function(marks) {
                return this.storedMarks = marks, this.updated |= 2, this;
            }, Transaction.prototype.ensureMarks = function(marks) {
                return prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.e.sameSet(this.storedMarks || this.selection.$from.marks(), marks) || this.setStoredMarks(marks), 
                this;
            }, Transaction.prototype.addStoredMark = function(mark) {
                return this.ensureMarks(mark.addToSet(this.storedMarks || this.selection.$head.marks()));
            }, Transaction.prototype.removeStoredMark = function(mark) {
                return this.ensureMarks(mark.removeFromSet(this.storedMarks || this.selection.$head.marks()));
            }, prototypeAccessors.storedMarksSet.get = function() {
                return (2 & this.updated) > 0;
            }, Transaction.prototype.addStep = function(step, doc) {
                Transform.prototype.addStep.call(this, step, doc), this.updated = -3 & this.updated, 
                this.storedMarks = null;
            }, Transaction.prototype.setTime = function(time) {
                return this.time = time, this;
            }, Transaction.prototype.replaceSelection = function(slice) {
                return this.selection.replace(this, slice), this;
            }, Transaction.prototype.replaceSelectionWith = function(node, inheritMarks) {
                var selection = this.selection;
                return !1 !== inheritMarks && (node = node.mark(this.storedMarks || (selection.empty ? selection.$from.marks() : selection.$from.marksAcross(selection.$to) || prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.e.none))), 
                selection.replaceWith(this, node), this;
            }, Transaction.prototype.deleteSelection = function() {
                return this.selection.replace(this), this;
            }, Transaction.prototype.insertText = function(text, from, to) {
                void 0 === to && (to = from);
                var schema = this.doc.type.schema;
                if (null == from) return text ? this.replaceSelectionWith(schema.text(text), !0) : this.deleteSelection();
                if (!text) return this.deleteRange(from, to);
                var marks = this.storedMarks;
                if (!marks) {
                    var $from = this.doc.resolve(from);
                    marks = to == from ? $from.marks() : $from.marksAcross(this.doc.resolve(to));
                }
                return this.replaceRangeWith(from, to, schema.text(text, marks)), this.selection.empty || this.setSelection(Selection.near(this.selection.$to)), 
                this;
            }, Transaction.prototype.setMeta = function(key, value) {
                return this.meta["string" == typeof key ? key : key.key] = value, this;
            }, Transaction.prototype.getMeta = function(key) {
                return this.meta["string" == typeof key ? key : key.key];
            }, prototypeAccessors.isGeneric.get = function() {
                for (var _ in this.meta) return !1;
                return !0;
            }, Transaction.prototype.scrollIntoView = function() {
                return this.updated |= 4, this;
            }, prototypeAccessors.scrolledIntoView.get = function() {
                return (4 & this.updated) > 0;
            }, Object.defineProperties(Transaction.prototype, prototypeAccessors), Transaction;
        }(prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.d);
        function bind(f, self) {
            return self && f ? f.bind(self) : f;
        }
        var FieldDesc = function(name, desc, self) {
            this.name = name, this.init = bind(desc.init, self), this.apply = bind(desc.apply, self);
        }, baseFields = [ new FieldDesc("doc", {
            init: function(config) {
                return config.doc || config.schema.topNodeType.createAndFill();
            },
            apply: function(tr) {
                return tr.doc;
            }
        }), new FieldDesc("selection", {
            init: function(config, instance) {
                return config.selection || Selection.atStart(instance.doc);
            },
            apply: function(tr) {
                return tr.selection;
            }
        }), new FieldDesc("storedMarks", {
            init: function(config) {
                return config.storedMarks || null;
            },
            apply: function(tr, _marks, _old, state) {
                return state.selection.$cursor ? tr.storedMarks : null;
            }
        }), new FieldDesc("scrollToSelection", {
            init: function() {
                return 0;
            },
            apply: function(tr, prev) {
                return tr.scrolledIntoView ? prev + 1 : prev;
            }
        }) ], Configuration = function(schema, plugins) {
            var this$1 = this;
            this.schema = schema, this.fields = baseFields.concat(), this.plugins = [], this.pluginsByKey = Object.create(null), 
            plugins && plugins.forEach((function(plugin) {
                if (this$1.pluginsByKey[plugin.key]) throw new RangeError("Adding different instances of a keyed plugin (" + plugin.key + ")");
                this$1.plugins.push(plugin), this$1.pluginsByKey[plugin.key] = plugin, plugin.spec.state && this$1.fields.push(new FieldDesc(plugin.key, plugin.spec.state, plugin));
            }));
        }, EditorState = function(config) {
            this.config = config;
        }, prototypeAccessors$1 = {
            schema: {
                configurable: !0
            },
            plugins: {
                configurable: !0
            },
            tr: {
                configurable: !0
            }
        };
        prototypeAccessors$1.schema.get = function() {
            return this.config.schema;
        }, prototypeAccessors$1.plugins.get = function() {
            return this.config.plugins;
        }, EditorState.prototype.apply = function(tr) {
            return this.applyTransaction(tr).state;
        }, EditorState.prototype.filterTransaction = function(tr, ignore) {
            void 0 === ignore && (ignore = -1);
            for (var i = 0; i < this.config.plugins.length; i++) if (i != ignore) {
                var plugin = this.config.plugins[i];
                if (plugin.spec.filterTransaction && !plugin.spec.filterTransaction.call(plugin, tr, this)) return !1;
            }
            return !0;
        }, EditorState.prototype.applyTransaction = function(rootTr) {
            if (!this.filterTransaction(rootTr)) return {
                state: this,
                transactions: []
            };
            for (var trs = [ rootTr ], newState = this.applyInner(rootTr), seen = null; ;) {
                for (var haveNew = !1, i = 0; i < this.config.plugins.length; i++) {
                    var plugin = this.config.plugins[i];
                    if (plugin.spec.appendTransaction) {
                        var n = seen ? seen[i].n : 0, oldState = seen ? seen[i].state : this, tr = n < trs.length && plugin.spec.appendTransaction.call(plugin, n ? trs.slice(n) : trs, oldState, newState);
                        if (tr && newState.filterTransaction(tr, i)) {
                            if (tr.setMeta("appendedTransaction", rootTr), !seen) {
                                seen = [];
                                for (var j = 0; j < this.config.plugins.length; j++) seen.push(j < i ? {
                                    state: newState,
                                    n: trs.length
                                } : {
                                    state: this,
                                    n: 0
                                });
                            }
                            trs.push(tr), newState = newState.applyInner(tr), haveNew = !0;
                        }
                        seen && (seen[i] = {
                            state: newState,
                            n: trs.length
                        });
                    }
                }
                if (!haveNew) return {
                    state: newState,
                    transactions: trs
                };
            }
        }, EditorState.prototype.applyInner = function(tr) {
            if (!tr.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
            for (var newInstance = new EditorState(this.config), fields = this.config.fields, i = 0; i < fields.length; i++) {
                var field = fields[i];
                newInstance[field.name] = field.apply(tr, this[field.name], this, newInstance);
            }
            for (var i$1 = 0; i$1 < applyListeners.length; i$1++) applyListeners[i$1](this, tr, newInstance);
            return newInstance;
        }, prototypeAccessors$1.tr.get = function() {
            return new Transaction(this);
        }, EditorState.create = function(config) {
            for (var $config = new Configuration(config.schema || config.doc.type.schema, config.plugins), instance = new EditorState($config), i = 0; i < $config.fields.length; i++) instance[$config.fields[i].name] = $config.fields[i].init(config, instance);
            return instance;
        }, EditorState.prototype.reconfigure = function(config) {
            for (var $config = new Configuration(config.schema || this.schema, config.plugins), fields = $config.fields, instance = new EditorState($config), i = 0; i < fields.length; i++) {
                var name = fields[i].name;
                instance[name] = this.hasOwnProperty(name) ? this[name] : fields[i].init(config, instance);
            }
            return instance;
        }, EditorState.prototype.toJSON = function(pluginFields) {
            var result = {
                doc: this.doc.toJSON(),
                selection: this.selection.toJSON()
            };
            if (this.storedMarks && (result.storedMarks = this.storedMarks.map((function(m) {
                return m.toJSON();
            }))), pluginFields && "object" == typeof pluginFields) for (var prop in pluginFields) {
                if ("doc" == prop || "selection" == prop) throw new RangeError("The JSON fields `doc` and `selection` are reserved");
                var plugin = pluginFields[prop], state = plugin.spec.state;
                state && state.toJSON && (result[prop] = state.toJSON.call(plugin, this[plugin.key]));
            }
            return result;
        }, EditorState.fromJSON = function(config, json, pluginFields) {
            if (!json) throw new RangeError("Invalid input for EditorState.fromJSON");
            if (!config.schema) throw new RangeError("Required config field 'schema' missing");
            var $config = new Configuration(config.schema, config.plugins), instance = new EditorState($config);
            return $config.fields.forEach((function(field) {
                if ("doc" == field.name) instance.doc = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.g.fromJSON(config.schema, json.doc); else if ("selection" == field.name) instance.selection = Selection.fromJSON(instance.doc, json.selection); else if ("storedMarks" == field.name) json.storedMarks && (instance.storedMarks = json.storedMarks.map(config.schema.markFromJSON)); else {
                    if (pluginFields) for (var prop in pluginFields) {
                        var plugin = pluginFields[prop], state = plugin.spec.state;
                        if (plugin.key == field.name && state && state.fromJSON && Object.prototype.hasOwnProperty.call(json, prop)) return void (instance[field.name] = state.fromJSON.call(plugin, config, json[prop], instance));
                    }
                    instance[field.name] = field.init(config, instance);
                }
            })), instance;
        }, EditorState.addApplyListener = function(f) {
            applyListeners.push(f);
        }, EditorState.removeApplyListener = function(f) {
            var found = applyListeners.indexOf(f);
            found > -1 && applyListeners.splice(found, 1);
        }, Object.defineProperties(EditorState.prototype, prototypeAccessors$1);
        var applyListeners = [];
        function bindProps(obj, self, target) {
            for (var prop in obj) {
                var val = obj[prop];
                val instanceof Function ? val = val.bind(self) : "handleDOMEvents" == prop && (val = bindProps(val, self, {})), 
                target[prop] = val;
            }
            return target;
        }
        var Plugin = function(spec) {
            this.props = {}, spec.props && bindProps(spec.props, this, this.props), this.spec = spec, 
            this.key = spec.key ? spec.key.key : createKey("plugin");
        };
        Plugin.prototype.getState = function(state) {
            return state[this.key];
        };
        var keys = Object.create(null);
        function createKey(name) {
            return name in keys ? name + "$" + ++keys[name] : (keys[name] = 0, name + "$");
        }
        var PluginKey = function(name) {
            void 0 === name && (name = "key"), this.key = createKey(name);
        };
        PluginKey.prototype.get = function(state) {
            return state.config.pluginsByKey[this.key];
        }, PluginKey.prototype.getState = function(state) {
            return state[this.key];
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return Mapping;
        })), __webpack_require__.d(__webpack_exports__, "b", (function() {
            return ReplaceAroundStep;
        })), __webpack_require__.d(__webpack_exports__, "c", (function() {
            return ReplaceStep;
        })), __webpack_require__.d(__webpack_exports__, "d", (function() {
            return Transform;
        })), __webpack_require__.d(__webpack_exports__, "e", (function() {
            return canJoin;
        })), __webpack_require__.d(__webpack_exports__, "f", (function() {
            return canSplit;
        })), __webpack_require__.d(__webpack_exports__, "g", (function() {
            return dropPoint;
        })), __webpack_require__.d(__webpack_exports__, "h", (function() {
            return findWrapping;
        })), __webpack_require__.d(__webpack_exports__, "i", (function() {
            return joinPoint;
        })), __webpack_require__.d(__webpack_exports__, "j", (function() {
            return liftTarget;
        }));
        var prosemirror_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0), factor16 = Math.pow(2, 16);
        function recoverIndex(value) {
            return 65535 & value;
        }
        var MapResult = function(pos, deleted, recover) {
            void 0 === deleted && (deleted = !1), void 0 === recover && (recover = null), this.pos = pos, 
            this.deleted = deleted, this.recover = recover;
        }, StepMap = function(ranges, inverted) {
            void 0 === inverted && (inverted = !1), this.ranges = ranges, this.inverted = inverted;
        };
        StepMap.prototype.recover = function(value) {
            var diff = 0, index = recoverIndex(value);
            if (!this.inverted) for (var i = 0; i < index; i++) diff += this.ranges[3 * i + 2] - this.ranges[3 * i + 1];
            return this.ranges[3 * index] + diff + function(value) {
                return (value - (65535 & value)) / factor16;
            }(value);
        }, StepMap.prototype.mapResult = function(pos, assoc) {
            return void 0 === assoc && (assoc = 1), this._map(pos, assoc, !1);
        }, StepMap.prototype.map = function(pos, assoc) {
            return void 0 === assoc && (assoc = 1), this._map(pos, assoc, !0);
        }, StepMap.prototype._map = function(pos, assoc, simple) {
            for (var diff = 0, oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2, i = 0; i < this.ranges.length; i += 3) {
                var start = this.ranges[i] - (this.inverted ? diff : 0);
                if (start > pos) break;
                var oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex], end = start + oldSize;
                if (pos <= end) {
                    var result = start + diff + ((oldSize ? pos == start ? -1 : pos == end ? 1 : assoc : assoc) < 0 ? 0 : newSize);
                    if (simple) return result;
                    var recover = pos == (assoc < 0 ? start : end) ? null : i / 3 + (pos - start) * factor16;
                    return new MapResult(result, assoc < 0 ? pos != start : pos != end, recover);
                }
                diff += newSize - oldSize;
            }
            return simple ? pos + diff : new MapResult(pos + diff);
        }, StepMap.prototype.touches = function(pos, recover) {
            for (var diff = 0, index = recoverIndex(recover), oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2, i = 0; i < this.ranges.length; i += 3) {
                var start = this.ranges[i] - (this.inverted ? diff : 0);
                if (start > pos) break;
                var oldSize = this.ranges[i + oldIndex];
                if (pos <= start + oldSize && i == 3 * index) return !0;
                diff += this.ranges[i + newIndex] - oldSize;
            }
            return !1;
        }, StepMap.prototype.forEach = function(f) {
            for (var oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2, i = 0, diff = 0; i < this.ranges.length; i += 3) {
                var start = this.ranges[i], oldStart = start - (this.inverted ? diff : 0), newStart = start + (this.inverted ? 0 : diff), oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex];
                f(oldStart, oldStart + oldSize, newStart, newStart + newSize), diff += newSize - oldSize;
            }
        }, StepMap.prototype.invert = function() {
            return new StepMap(this.ranges, !this.inverted);
        }, StepMap.prototype.toString = function() {
            return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }, StepMap.offset = function(n) {
            return 0 == n ? StepMap.empty : new StepMap(n < 0 ? [ 0, -n, 0 ] : [ 0, 0, n ]);
        }, StepMap.empty = new StepMap([]);
        var Mapping = function(maps, mirror, from, to) {
            this.maps = maps || [], this.from = from || 0, this.to = null == to ? this.maps.length : to, 
            this.mirror = mirror;
        };
        function TransformError(message) {
            var err = Error.call(this, message);
            return err.__proto__ = TransformError.prototype, err;
        }
        Mapping.prototype.slice = function(from, to) {
            return void 0 === from && (from = 0), void 0 === to && (to = this.maps.length), 
            new Mapping(this.maps, this.mirror, from, to);
        }, Mapping.prototype.copy = function() {
            return new Mapping(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
        }, Mapping.prototype.appendMap = function(map, mirrors) {
            this.to = this.maps.push(map), null != mirrors && this.setMirror(this.maps.length - 1, mirrors);
        }, Mapping.prototype.appendMapping = function(mapping) {
            for (var i = 0, startSize = this.maps.length; i < mapping.maps.length; i++) {
                var mirr = mapping.getMirror(i);
                this.appendMap(mapping.maps[i], null != mirr && mirr < i ? startSize + mirr : null);
            }
        }, Mapping.prototype.getMirror = function(n) {
            if (this.mirror) for (var i = 0; i < this.mirror.length; i++) if (this.mirror[i] == n) return this.mirror[i + (i % 2 ? -1 : 1)];
        }, Mapping.prototype.setMirror = function(n, m) {
            this.mirror || (this.mirror = []), this.mirror.push(n, m);
        }, Mapping.prototype.appendMappingInverted = function(mapping) {
            for (var i = mapping.maps.length - 1, totalSize = this.maps.length + mapping.maps.length; i >= 0; i--) {
                var mirr = mapping.getMirror(i);
                this.appendMap(mapping.maps[i].invert(), null != mirr && mirr > i ? totalSize - mirr - 1 : null);
            }
        }, Mapping.prototype.invert = function() {
            var inverse = new Mapping;
            return inverse.appendMappingInverted(this), inverse;
        }, Mapping.prototype.map = function(pos, assoc) {
            if (void 0 === assoc && (assoc = 1), this.mirror) return this._map(pos, assoc, !0);
            for (var i = this.from; i < this.to; i++) pos = this.maps[i].map(pos, assoc);
            return pos;
        }, Mapping.prototype.mapResult = function(pos, assoc) {
            return void 0 === assoc && (assoc = 1), this._map(pos, assoc, !1);
        }, Mapping.prototype._map = function(pos, assoc, simple) {
            for (var deleted = !1, i = this.from; i < this.to; i++) {
                var result = this.maps[i].mapResult(pos, assoc);
                if (null != result.recover) {
                    var corr = this.getMirror(i);
                    if (null != corr && corr > i && corr < this.to) {
                        i = corr, pos = this.maps[corr].recover(result.recover);
                        continue;
                    }
                }
                result.deleted && (deleted = !0), pos = result.pos;
            }
            return simple ? pos : new MapResult(pos, deleted);
        }, TransformError.prototype = Object.create(Error.prototype), TransformError.prototype.constructor = TransformError, 
        TransformError.prototype.name = "TransformError";
        var Transform = function(doc) {
            this.doc = doc, this.steps = [], this.docs = [], this.mapping = new Mapping;
        }, prototypeAccessors = {
            before: {
                configurable: !0
            },
            docChanged: {
                configurable: !0
            }
        };
        function mustOverride() {
            throw new Error("Override me");
        }
        prototypeAccessors.before.get = function() {
            return this.docs.length ? this.docs[0] : this.doc;
        }, Transform.prototype.step = function(object) {
            var result = this.maybeStep(object);
            if (result.failed) throw new TransformError(result.failed);
            return this;
        }, Transform.prototype.maybeStep = function(step) {
            var result = step.apply(this.doc);
            return result.failed || this.addStep(step, result.doc), result;
        }, prototypeAccessors.docChanged.get = function() {
            return this.steps.length > 0;
        }, Transform.prototype.addStep = function(step, doc) {
            this.docs.push(this.doc), this.steps.push(step), this.mapping.appendMap(step.getMap()), 
            this.doc = doc;
        }, Object.defineProperties(Transform.prototype, prototypeAccessors);
        var stepsByID = Object.create(null), Step = function() {};
        Step.prototype.apply = function(_doc) {
            return mustOverride();
        }, Step.prototype.getMap = function() {
            return StepMap.empty;
        }, Step.prototype.invert = function(_doc) {
            return mustOverride();
        }, Step.prototype.map = function(_mapping) {
            return mustOverride();
        }, Step.prototype.merge = function(_other) {
            return null;
        }, Step.prototype.toJSON = function() {
            return mustOverride();
        }, Step.fromJSON = function(schema, json) {
            if (!json || !json.stepType) throw new RangeError("Invalid input for Step.fromJSON");
            var type = stepsByID[json.stepType];
            if (!type) throw new RangeError("No step type " + json.stepType + " defined");
            return type.fromJSON(schema, json);
        }, Step.jsonID = function(id, stepClass) {
            if (id in stepsByID) throw new RangeError("Duplicate use of step JSON ID " + id);
            return stepsByID[id] = stepClass, stepClass.prototype.jsonID = id, stepClass;
        };
        var StepResult = function(doc, failed) {
            this.doc = doc, this.failed = failed;
        };
        StepResult.ok = function(doc) {
            return new StepResult(doc, null);
        }, StepResult.fail = function(message) {
            return new StepResult(null, message);
        }, StepResult.fromReplace = function(doc, from, to, slice) {
            try {
                return StepResult.ok(doc.replace(from, to, slice));
            } catch (e) {
                if (e instanceof prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.j) return StepResult.fail(e.message);
                throw e;
            }
        };
        var ReplaceStep = function(Step) {
            function ReplaceStep(from, to, slice, structure) {
                Step.call(this), this.from = from, this.to = to, this.slice = slice, this.structure = !!structure;
            }
            return Step && (ReplaceStep.__proto__ = Step), ReplaceStep.prototype = Object.create(Step && Step.prototype), 
            ReplaceStep.prototype.constructor = ReplaceStep, ReplaceStep.prototype.apply = function(doc) {
                return this.structure && contentBetween(doc, this.from, this.to) ? StepResult.fail("Structure replace would overwrite content") : StepResult.fromReplace(doc, this.from, this.to, this.slice);
            }, ReplaceStep.prototype.getMap = function() {
                return new StepMap([ this.from, this.to - this.from, this.slice.size ]);
            }, ReplaceStep.prototype.invert = function(doc) {
                return new ReplaceStep(this.from, this.from + this.slice.size, doc.slice(this.from, this.to));
            }, ReplaceStep.prototype.map = function(mapping) {
                var from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
                return from.deleted && to.deleted ? null : new ReplaceStep(from.pos, Math.max(from.pos, to.pos), this.slice);
            }, ReplaceStep.prototype.merge = function(other) {
                if (!(other instanceof ReplaceStep) || other.structure != this.structure) return null;
                if (this.from + this.slice.size != other.from || this.slice.openEnd || other.slice.openStart) {
                    if (other.to != this.from || this.slice.openStart || other.slice.openEnd) return null;
                    var slice$1 = this.slice.size + other.slice.size == 0 ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l.empty : new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
                    return new ReplaceStep(other.from, this.to, slice$1, this.structure);
                }
                var slice = this.slice.size + other.slice.size == 0 ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l.empty : new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
                return new ReplaceStep(this.from, this.to + (other.to - other.from), slice, this.structure);
            }, ReplaceStep.prototype.toJSON = function() {
                var json = {
                    stepType: "replace",
                    from: this.from,
                    to: this.to
                };
                return this.slice.size && (json.slice = this.slice.toJSON()), this.structure && (json.structure = !0), 
                json;
            }, ReplaceStep.fromJSON = function(schema, json) {
                if ("number" != typeof json.from || "number" != typeof json.to) throw new RangeError("Invalid input for ReplaceStep.fromJSON");
                return new ReplaceStep(json.from, json.to, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l.fromJSON(schema, json.slice), !!json.structure);
            }, ReplaceStep;
        }(Step);
        Step.jsonID("replace", ReplaceStep);
        var ReplaceAroundStep = function(Step) {
            function ReplaceAroundStep(from, to, gapFrom, gapTo, slice, insert, structure) {
                Step.call(this), this.from = from, this.to = to, this.gapFrom = gapFrom, this.gapTo = gapTo, 
                this.slice = slice, this.insert = insert, this.structure = !!structure;
            }
            return Step && (ReplaceAroundStep.__proto__ = Step), ReplaceAroundStep.prototype = Object.create(Step && Step.prototype), 
            ReplaceAroundStep.prototype.constructor = ReplaceAroundStep, ReplaceAroundStep.prototype.apply = function(doc) {
                if (this.structure && (contentBetween(doc, this.from, this.gapFrom) || contentBetween(doc, this.gapTo, this.to))) return StepResult.fail("Structure gap-replace would overwrite content");
                var gap = doc.slice(this.gapFrom, this.gapTo);
                if (gap.openStart || gap.openEnd) return StepResult.fail("Gap is not a flat range");
                var inserted = this.slice.insertAt(this.insert, gap.content);
                return inserted ? StepResult.fromReplace(doc, this.from, this.to, inserted) : StepResult.fail("Content does not fit in gap");
            }, ReplaceAroundStep.prototype.getMap = function() {
                return new StepMap([ this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert ]);
            }, ReplaceAroundStep.prototype.invert = function(doc) {
                var gap = this.gapTo - this.gapFrom;
                return new ReplaceAroundStep(this.from, this.from + this.slice.size + gap, this.from + this.insert, this.from + this.insert + gap, doc.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
            }, ReplaceAroundStep.prototype.map = function(mapping) {
                var from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1), gapFrom = mapping.map(this.gapFrom, -1), gapTo = mapping.map(this.gapTo, 1);
                return from.deleted && to.deleted || gapFrom < from.pos || gapTo > to.pos ? null : new ReplaceAroundStep(from.pos, to.pos, gapFrom, gapTo, this.slice, this.insert, this.structure);
            }, ReplaceAroundStep.prototype.toJSON = function() {
                var json = {
                    stepType: "replaceAround",
                    from: this.from,
                    to: this.to,
                    gapFrom: this.gapFrom,
                    gapTo: this.gapTo,
                    insert: this.insert
                };
                return this.slice.size && (json.slice = this.slice.toJSON()), this.structure && (json.structure = !0), 
                json;
            }, ReplaceAroundStep.fromJSON = function(schema, json) {
                if ("number" != typeof json.from || "number" != typeof json.to || "number" != typeof json.gapFrom || "number" != typeof json.gapTo || "number" != typeof json.insert) throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
                return new ReplaceAroundStep(json.from, json.to, json.gapFrom, json.gapTo, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l.fromJSON(schema, json.slice), json.insert, !!json.structure);
            }, ReplaceAroundStep;
        }(Step);
        function contentBetween(doc, from, to) {
            for (var $from = doc.resolve(from), dist = to - from, depth = $from.depth; dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount; ) depth--, 
            dist--;
            if (dist > 0) for (var next = $from.node(depth).maybeChild($from.indexAfter(depth)); dist > 0; ) {
                if (!next || next.isLeaf) return !0;
                next = next.firstChild, dist--;
            }
            return !1;
        }
        function canCut(node, start, end) {
            return (0 == start || node.canReplace(start, node.childCount)) && (end == node.childCount || node.canReplace(0, end));
        }
        function liftTarget(range) {
            for (var content = range.parent.content.cutByIndex(range.startIndex, range.endIndex), depth = range.depth; ;--depth) {
                var node = range.$from.node(depth), index = range.$from.index(depth), endIndex = range.$to.indexAfter(depth);
                if (depth < range.depth && node.canReplace(index, endIndex, content)) return depth;
                if (0 == depth || node.type.spec.isolating || !canCut(node, index, endIndex)) break;
            }
        }
        function findWrapping(range, nodeType, attrs, innerRange) {
            void 0 === innerRange && (innerRange = range);
            var around = function(range, type) {
                var parent = range.parent, startIndex = range.startIndex, endIndex = range.endIndex, around = parent.contentMatchAt(startIndex).findWrapping(type);
                if (!around) return null;
                var outer = around.length ? around[0] : type;
                return parent.canReplaceWith(startIndex, endIndex, outer) ? around : null;
            }(range, nodeType), inner = around && function(range, type) {
                var parent = range.parent, startIndex = range.startIndex, endIndex = range.endIndex, inner = parent.child(startIndex), inside = type.contentMatch.findWrapping(inner.type);
                if (!inside) return null;
                for (var innerMatch = (inside.length ? inside[inside.length - 1] : type).contentMatch, i = startIndex; innerMatch && i < endIndex; i++) innerMatch = innerMatch.matchType(parent.child(i).type);
                if (!innerMatch || !innerMatch.validEnd) return null;
                return inside;
            }(innerRange, nodeType);
            return inner ? around.map(withAttrs).concat({
                type: nodeType,
                attrs: attrs
            }).concat(inner.map(withAttrs)) : null;
        }
        function withAttrs(type) {
            return {
                type: type,
                attrs: null
            };
        }
        function canSplit(doc, pos, depth, typesAfter) {
            void 0 === depth && (depth = 1);
            var $pos = doc.resolve(pos), base = $pos.depth - depth, innerType = typesAfter && typesAfter[typesAfter.length - 1] || $pos.parent;
            if (base < 0 || $pos.parent.type.spec.isolating || !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) || !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount))) return !1;
            for (var d = $pos.depth - 1, i = depth - 2; d > base; d--, i--) {
                var node = $pos.node(d), index$1 = $pos.index(d);
                if (node.type.spec.isolating) return !1;
                var rest = node.content.cutByIndex(index$1, node.childCount), after = typesAfter && typesAfter[i] || node;
                if (after != node && (rest = rest.replaceChild(0, after.type.create(after.attrs))), 
                !node.canReplace(index$1 + 1, node.childCount) || !after.type.validContent(rest)) return !1;
            }
            var index = $pos.indexAfter(base), baseType = typesAfter && typesAfter[0];
            return $pos.node(base).canReplaceWith(index, index, baseType ? baseType.type : $pos.node(base + 1).type);
        }
        function canJoin(doc, pos) {
            var $pos = doc.resolve(pos), index = $pos.index();
            return joinable($pos.nodeBefore, $pos.nodeAfter) && $pos.parent.canReplace(index, index + 1);
        }
        function joinable(a, b) {
            return a && b && !a.isLeaf && a.canAppend(b);
        }
        function joinPoint(doc, pos, dir) {
            void 0 === dir && (dir = -1);
            for (var $pos = doc.resolve(pos), d = $pos.depth; ;d--) {
                var before = void 0, after = void 0, index = $pos.index(d);
                if (d == $pos.depth ? (before = $pos.nodeBefore, after = $pos.nodeAfter) : dir > 0 ? (before = $pos.node(d + 1), 
                index++, after = $pos.node(d).maybeChild(index)) : (before = $pos.node(d).maybeChild(index - 1), 
                after = $pos.node(d + 1)), before && !before.isTextblock && joinable(before, after) && $pos.node(d).canReplace(index, index + 1)) return pos;
                if (0 == d) break;
                pos = dir < 0 ? $pos.before(d) : $pos.after(d);
            }
        }
        function dropPoint(doc, pos, slice) {
            var $pos = doc.resolve(pos);
            if (!slice.content.size) return pos;
            for (var content = slice.content, i = 0; i < slice.openStart; i++) content = content.firstChild.content;
            for (var pass = 1; pass <= (0 == slice.openStart && slice.size ? 2 : 1); pass++) for (var d = $pos.depth; d >= 0; d--) {
                var bias = d == $pos.depth ? 0 : $pos.pos <= ($pos.start(d + 1) + $pos.end(d + 1)) / 2 ? -1 : 1, insertPos = $pos.index(d) + (bias > 0 ? 1 : 0);
                if (1 == pass ? $pos.node(d).canReplace(insertPos, insertPos, content) : $pos.node(d).contentMatchAt(insertPos).findWrapping(content.firstChild.type)) return 0 == bias ? $pos.pos : bias < 0 ? $pos.before(d + 1) : $pos.after(d + 1);
            }
            return null;
        }
        function mapFragment(fragment, f, parent) {
            for (var mapped = [], i = 0; i < fragment.childCount; i++) {
                var child = fragment.child(i);
                child.content.size && (child = child.copy(mapFragment(child.content, f, child))), 
                child.isInline && (child = f(child, parent, i)), mapped.push(child);
            }
            return prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.fromArray(mapped);
        }
        Step.jsonID("replaceAround", ReplaceAroundStep), Transform.prototype.lift = function(range, target) {
            for (var $from = range.$from, $to = range.$to, depth = range.depth, gapStart = $from.before(depth + 1), gapEnd = $to.after(depth + 1), start = gapStart, end = gapEnd, before = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.empty, openStart = 0, d = depth, splitting = !1; d > target; d--) splitting || $from.index(d) > 0 ? (splitting = !0, 
            before = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.from($from.node(d).copy(before)), 
            openStart++) : start--;
            for (var after = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.empty, openEnd = 0, d$1 = depth, splitting$1 = !1; d$1 > target; d$1--) splitting$1 || $to.after(d$1 + 1) < $to.end(d$1) ? (splitting$1 = !0, 
            after = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.from($to.node(d$1).copy(after)), 
            openEnd++) : end++;
            return this.step(new ReplaceAroundStep(start, end, gapStart, gapEnd, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(before.append(after), openStart, openEnd), before.size - openStart, !0));
        }, Transform.prototype.wrap = function(range, wrappers) {
            for (var content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.empty, i = wrappers.length - 1; i >= 0; i--) content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.from(wrappers[i].type.create(wrappers[i].attrs, content));
            var start = range.start, end = range.end;
            return this.step(new ReplaceAroundStep(start, end, start, end, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(content, 0, 0), wrappers.length, !0));
        }, Transform.prototype.setBlockType = function(from, to, type, attrs) {
            var this$1 = this;
            if (void 0 === to && (to = from), !type.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
            var mapFrom = this.steps.length;
            return this.doc.nodesBetween(from, to, (function(node, pos) {
                if (node.isTextblock && !node.hasMarkup(type, attrs) && function(doc, pos, type) {
                    var $pos = doc.resolve(pos), index = $pos.index();
                    return $pos.parent.canReplaceWith(index, index + 1, type);
                }(this$1.doc, this$1.mapping.slice(mapFrom).map(pos), type)) {
                    this$1.clearIncompatible(this$1.mapping.slice(mapFrom).map(pos, 1), type);
                    var mapping = this$1.mapping.slice(mapFrom), startM = mapping.map(pos, 1), endM = mapping.map(pos + node.nodeSize, 1);
                    return this$1.step(new ReplaceAroundStep(startM, endM, startM + 1, endM - 1, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.from(type.create(attrs, null, node.marks)), 0, 0), 1, !0)), 
                    !1;
                }
            })), this;
        }, Transform.prototype.setNodeMarkup = function(pos, type, attrs, marks) {
            var node = this.doc.nodeAt(pos);
            if (!node) throw new RangeError("No node at given position");
            type || (type = node.type);
            var newNode = type.create(attrs, null, marks || node.marks);
            if (node.isLeaf) return this.replaceWith(pos, pos + node.nodeSize, newNode);
            if (!type.validContent(node.content)) throw new RangeError("Invalid content for node type " + type.name);
            return this.step(new ReplaceAroundStep(pos, pos + node.nodeSize, pos + 1, pos + node.nodeSize - 1, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.from(newNode), 0, 0), 1, !0));
        }, Transform.prototype.split = function(pos, depth, typesAfter) {
            void 0 === depth && (depth = 1);
            for (var $pos = this.doc.resolve(pos), before = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.empty, after = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.empty, d = $pos.depth, e = $pos.depth - depth, i = depth - 1; d > e; d--, 
            i--) {
                before = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.from($pos.node(d).copy(before));
                var typeAfter = typesAfter && typesAfter[i];
                after = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.from(typeAfter ? typeAfter.type.create(typeAfter.attrs, after) : $pos.node(d).copy(after));
            }
            return this.step(new ReplaceStep(pos, pos, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(before.append(after), depth, depth), !0));
        }, Transform.prototype.join = function(pos, depth) {
            void 0 === depth && (depth = 1);
            var step = new ReplaceStep(pos - depth, pos + depth, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l.empty, !0);
            return this.step(step);
        };
        var AddMarkStep = function(Step) {
            function AddMarkStep(from, to, mark) {
                Step.call(this), this.from = from, this.to = to, this.mark = mark;
            }
            return Step && (AddMarkStep.__proto__ = Step), AddMarkStep.prototype = Object.create(Step && Step.prototype), 
            AddMarkStep.prototype.constructor = AddMarkStep, AddMarkStep.prototype.apply = function(doc) {
                var this$1 = this, oldSlice = doc.slice(this.from, this.to), $from = doc.resolve(this.from), parent = $from.node($from.sharedDepth(this.to)), slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(mapFragment(oldSlice.content, (function(node, parent) {
                    return parent.type.allowsMarkType(this$1.mark.type) ? node.mark(this$1.mark.addToSet(node.marks)) : node;
                }), parent), oldSlice.openStart, oldSlice.openEnd);
                return StepResult.fromReplace(doc, this.from, this.to, slice);
            }, AddMarkStep.prototype.invert = function() {
                return new RemoveMarkStep(this.from, this.to, this.mark);
            }, AddMarkStep.prototype.map = function(mapping) {
                var from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
                return from.deleted && to.deleted || from.pos >= to.pos ? null : new AddMarkStep(from.pos, to.pos, this.mark);
            }, AddMarkStep.prototype.merge = function(other) {
                if (other instanceof AddMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new AddMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
            }, AddMarkStep.prototype.toJSON = function() {
                return {
                    stepType: "addMark",
                    mark: this.mark.toJSON(),
                    from: this.from,
                    to: this.to
                };
            }, AddMarkStep.fromJSON = function(schema, json) {
                if ("number" != typeof json.from || "number" != typeof json.to) throw new RangeError("Invalid input for AddMarkStep.fromJSON");
                return new AddMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
            }, AddMarkStep;
        }(Step);
        Step.jsonID("addMark", AddMarkStep);
        var RemoveMarkStep = function(Step) {
            function RemoveMarkStep(from, to, mark) {
                Step.call(this), this.from = from, this.to = to, this.mark = mark;
            }
            return Step && (RemoveMarkStep.__proto__ = Step), RemoveMarkStep.prototype = Object.create(Step && Step.prototype), 
            RemoveMarkStep.prototype.constructor = RemoveMarkStep, RemoveMarkStep.prototype.apply = function(doc) {
                var this$1 = this, oldSlice = doc.slice(this.from, this.to), slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(mapFragment(oldSlice.content, (function(node) {
                    return node.mark(this$1.mark.removeFromSet(node.marks));
                })), oldSlice.openStart, oldSlice.openEnd);
                return StepResult.fromReplace(doc, this.from, this.to, slice);
            }, RemoveMarkStep.prototype.invert = function() {
                return new AddMarkStep(this.from, this.to, this.mark);
            }, RemoveMarkStep.prototype.map = function(mapping) {
                var from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
                return from.deleted && to.deleted || from.pos >= to.pos ? null : new RemoveMarkStep(from.pos, to.pos, this.mark);
            }, RemoveMarkStep.prototype.merge = function(other) {
                if (other instanceof RemoveMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new RemoveMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
            }, RemoveMarkStep.prototype.toJSON = function() {
                return {
                    stepType: "removeMark",
                    mark: this.mark.toJSON(),
                    from: this.from,
                    to: this.to
                };
            }, RemoveMarkStep.fromJSON = function(schema, json) {
                if ("number" != typeof json.from || "number" != typeof json.to) throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
                return new RemoveMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
            }, RemoveMarkStep;
        }(Step);
        function fitsTrivially($from, $to, slice) {
            return !slice.openStart && !slice.openEnd && $from.start() == $to.start() && $from.parent.canReplace($from.index(), $to.index(), slice.content);
        }
        Step.jsonID("removeMark", RemoveMarkStep), Transform.prototype.addMark = function(from, to, mark) {
            var this$1 = this, removed = [], added = [], removing = null, adding = null;
            return this.doc.nodesBetween(from, to, (function(node, pos, parent) {
                if (node.isInline) {
                    var marks = node.marks;
                    if (!mark.isInSet(marks) && parent.type.allowsMarkType(mark.type)) {
                        for (var start = Math.max(pos, from), end = Math.min(pos + node.nodeSize, to), newSet = mark.addToSet(marks), i = 0; i < marks.length; i++) marks[i].isInSet(newSet) || (removing && removing.to == start && removing.mark.eq(marks[i]) ? removing.to = end : removed.push(removing = new RemoveMarkStep(start, end, marks[i])));
                        adding && adding.to == start ? adding.to = end : added.push(adding = new AddMarkStep(start, end, mark));
                    }
                }
            })), removed.forEach((function(s) {
                return this$1.step(s);
            })), added.forEach((function(s) {
                return this$1.step(s);
            })), this;
        }, Transform.prototype.removeMark = function(from, to, mark) {
            var this$1 = this;
            void 0 === mark && (mark = null);
            var matched = [], step = 0;
            return this.doc.nodesBetween(from, to, (function(node, pos) {
                if (node.isInline) {
                    step++;
                    var toRemove = null;
                    if (mark instanceof prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.f) {
                        var found = mark.isInSet(node.marks);
                        found && (toRemove = [ found ]);
                    } else mark ? mark.isInSet(node.marks) && (toRemove = [ mark ]) : toRemove = node.marks;
                    if (toRemove && toRemove.length) for (var end = Math.min(pos + node.nodeSize, to), i = 0; i < toRemove.length; i++) {
                        for (var style = toRemove[i], found$1 = void 0, j = 0; j < matched.length; j++) {
                            var m = matched[j];
                            m.step == step - 1 && style.eq(matched[j].style) && (found$1 = m);
                        }
                        found$1 ? (found$1.to = end, found$1.step = step) : matched.push({
                            style: style,
                            from: Math.max(pos, from),
                            to: end,
                            step: step
                        });
                    }
                }
            })), matched.forEach((function(m) {
                return this$1.step(new RemoveMarkStep(m.from, m.to, m.style));
            })), this;
        }, Transform.prototype.clearIncompatible = function(pos, parentType, match) {
            void 0 === match && (match = parentType.contentMatch);
            for (var node = this.doc.nodeAt(pos), delSteps = [], cur = pos + 1, i = 0; i < node.childCount; i++) {
                var child = node.child(i), end = cur + child.nodeSize, allowed = match.matchType(child.type, child.attrs);
                if (allowed) {
                    match = allowed;
                    for (var j = 0; j < child.marks.length; j++) parentType.allowsMarkType(child.marks[j].type) || this.step(new RemoveMarkStep(cur, end, child.marks[j]));
                } else delSteps.push(new ReplaceStep(cur, end, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l.empty));
                cur = end;
            }
            if (!match.validEnd) {
                var fill = match.fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.empty, !0);
                this.replace(cur, cur, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(fill, 0, 0));
            }
            for (var i$1 = delSteps.length - 1; i$1 >= 0; i$1--) this.step(delSteps[i$1]);
            return this;
        }, Transform.prototype.replace = function(from, to, slice) {
            void 0 === to && (to = from), void 0 === slice && (slice = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l.empty);
            var step = function(doc, from, to, slice) {
                if (void 0 === to && (to = from), void 0 === slice && (slice = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l.empty), 
                from == to && !slice.size) return null;
                var $from = doc.resolve(from), $to = doc.resolve(to);
                return fitsTrivially($from, $to, slice) ? new ReplaceStep(from, to, slice) : new Fitter($from, $to, slice).fit();
            }(this.doc, from, to, slice);
            return step && this.step(step), this;
        }, Transform.prototype.replaceWith = function(from, to, content) {
            return this.replace(from, to, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.from(content), 0, 0));
        }, Transform.prototype.delete = function(from, to) {
            return this.replace(from, to, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l.empty);
        }, Transform.prototype.insert = function(pos, content) {
            return this.replaceWith(pos, pos, content);
        };
        var Fitter = function($from, $to, slice) {
            this.$to = $to, this.$from = $from, this.unplaced = slice, this.frontier = [];
            for (var i = 0; i <= $from.depth; i++) {
                var node = $from.node(i);
                this.frontier.push({
                    type: node.type,
                    match: node.contentMatchAt($from.indexAfter(i))
                });
            }
            this.placed = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.empty;
            for (var i$1 = $from.depth; i$1 > 0; i$1--) this.placed = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.from($from.node(i$1).copy(this.placed));
        }, prototypeAccessors$1 = {
            depth: {
                configurable: !0
            }
        };
        function dropFromFragment(fragment, depth, count) {
            return 0 == depth ? fragment.cutByIndex(count) : fragment.replaceChild(0, fragment.firstChild.copy(dropFromFragment(fragment.firstChild.content, depth - 1, count)));
        }
        function addToFragment(fragment, depth, content) {
            return 0 == depth ? fragment.append(content) : fragment.replaceChild(fragment.childCount - 1, fragment.lastChild.copy(addToFragment(fragment.lastChild.content, depth - 1, content)));
        }
        function contentAt(fragment, depth) {
            for (var i = 0; i < depth; i++) fragment = fragment.firstChild.content;
            return fragment;
        }
        function closeNodeStart(node, openStart, openEnd) {
            if (openStart <= 0) return node;
            var frag = node.content;
            return openStart > 1 && (frag = frag.replaceChild(0, closeNodeStart(frag.firstChild, openStart - 1, 1 == frag.childCount ? openEnd - 1 : 0))), 
            openStart > 0 && (frag = node.type.contentMatch.fillBefore(frag).append(frag), openEnd <= 0 && (frag = frag.append(node.type.contentMatch.matchFragment(frag).fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.empty, !0)))), 
            node.copy(frag);
        }
        function contentAfterFits($to, depth, type, match, open) {
            var node = $to.node(depth), index = open ? $to.indexAfter(depth) : $to.index(depth);
            if (index == node.childCount && !type.compatibleContent(node.type)) return null;
            var fit = match.fillBefore(node.content, !0, index);
            return fit && !function(type, fragment, start) {
                for (var i = start; i < fragment.childCount; i++) if (!type.allowsMarks(fragment.child(i).marks)) return !0;
                return !1;
            }(type, node.content, index) ? fit : null;
        }
        function closeFragment(fragment, depth, oldOpen, newOpen, parent) {
            if (depth < oldOpen) {
                var first = fragment.firstChild;
                fragment = fragment.replaceChild(0, first.copy(closeFragment(first.content, depth + 1, oldOpen, newOpen, first)));
            }
            if (depth > newOpen) {
                var match = parent.contentMatchAt(0), start = match.fillBefore(fragment).append(fragment);
                fragment = start.append(match.matchFragment(start).fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.empty, !0));
            }
            return fragment;
        }
        function coveredDepths($from, $to) {
            for (var result = [], d = Math.min($from.depth, $to.depth); d >= 0; d--) {
                var start = $from.start(d);
                if (start < $from.pos - ($from.depth - d) || $to.end(d) > $to.pos + ($to.depth - d) || $from.node(d).type.spec.isolating || $to.node(d).type.spec.isolating) break;
                start == $to.start(d) && result.push(d);
            }
            return result;
        }
        prototypeAccessors$1.depth.get = function() {
            return this.frontier.length - 1;
        }, Fitter.prototype.fit = function() {
            for (;this.unplaced.size; ) {
                var fit = this.findFittable();
                fit ? this.placeNodes(fit) : this.openMore() || this.dropNode();
            }
            var moveInline = this.mustMoveInline(), placedSize = this.placed.size - this.depth - this.$from.depth, $from = this.$from, $to = this.close(moveInline < 0 ? this.$to : $from.doc.resolve(moveInline));
            if (!$to) return null;
            for (var content = this.placed, openStart = $from.depth, openEnd = $to.depth; openStart && openEnd && 1 == content.childCount; ) content = content.firstChild.content, 
            openStart--, openEnd--;
            var slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(content, openStart, openEnd);
            return moveInline > -1 ? new ReplaceAroundStep($from.pos, moveInline, this.$to.pos, this.$to.end(), slice, placedSize) : slice.size || $from.pos != this.$to.pos ? new ReplaceStep($from.pos, $to.pos, slice) : void 0;
        }, Fitter.prototype.findFittable = function() {
            for (var pass = 1; pass <= 2; pass++) for (var sliceDepth = this.unplaced.openStart; sliceDepth >= 0; sliceDepth--) for (var parent = void 0, first = (sliceDepth ? (parent = contentAt(this.unplaced.content, sliceDepth - 1).firstChild).content : this.unplaced.content).firstChild, frontierDepth = this.depth; frontierDepth >= 0; frontierDepth--) {
                var ref = this.frontier[frontierDepth], type = ref.type, match = ref.match, wrap = void 0, inject = void 0;
                if (1 == pass && (first ? match.matchType(first.type) || (inject = match.fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.from(first), !1)) : type.compatibleContent(parent.type))) return {
                    sliceDepth: sliceDepth,
                    frontierDepth: frontierDepth,
                    parent: parent,
                    inject: inject
                };
                if (2 == pass && first && (wrap = match.findWrapping(first.type))) return {
                    sliceDepth: sliceDepth,
                    frontierDepth: frontierDepth,
                    parent: parent,
                    wrap: wrap
                };
                if (parent && match.matchType(parent.type)) break;
            }
        }, Fitter.prototype.openMore = function() {
            var ref = this.unplaced, content = ref.content, openStart = ref.openStart, openEnd = ref.openEnd, inner = contentAt(content, openStart);
            return !(!inner.childCount || inner.firstChild.isLeaf) && (this.unplaced = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(content, openStart + 1, Math.max(openEnd, inner.size + openStart >= content.size - openEnd ? openStart + 1 : 0)), 
            !0);
        }, Fitter.prototype.dropNode = function() {
            var ref = this.unplaced, content = ref.content, openStart = ref.openStart, openEnd = ref.openEnd, inner = contentAt(content, openStart);
            if (inner.childCount <= 1 && openStart > 0) {
                var openAtEnd = content.size - openStart <= openStart + inner.size;
                this.unplaced = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(dropFromFragment(content, openStart - 1, 1), openStart - 1, openAtEnd ? openStart - 1 : openEnd);
            } else this.unplaced = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(dropFromFragment(content, openStart, 1), openStart, openEnd);
        }, Fitter.prototype.placeNodes = function(ref) {
            for (var sliceDepth = ref.sliceDepth, frontierDepth = ref.frontierDepth, parent = ref.parent, inject = ref.inject, wrap = ref.wrap; this.depth > frontierDepth; ) this.closeFrontierNode();
            if (wrap) for (var i = 0; i < wrap.length; i++) this.openFrontierNode(wrap[i]);
            var slice = this.unplaced, fragment = parent ? parent.content : slice.content, openStart = slice.openStart - sliceDepth, taken = 0, add = [], ref$1 = this.frontier[frontierDepth], match = ref$1.match, type = ref$1.type;
            if (inject) {
                for (var i$1 = 0; i$1 < inject.childCount; i$1++) add.push(inject.child(i$1));
                match = match.matchFragment(inject);
            }
            for (var openEndCount = fragment.size + sliceDepth - (slice.content.size - slice.openEnd); taken < fragment.childCount; ) {
                var next = fragment.child(taken), matches = match.matchType(next.type);
                if (!matches) break;
                (++taken > 1 || 0 == openStart || next.content.size) && (match = matches, add.push(closeNodeStart(next.mark(type.allowedMarks(next.marks)), 1 == taken ? openStart : 0, taken == fragment.childCount ? openEndCount : -1)));
            }
            var toEnd = taken == fragment.childCount;
            toEnd || (openEndCount = -1), this.placed = addToFragment(this.placed, frontierDepth, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.from(add)), 
            this.frontier[frontierDepth].match = match, toEnd && openEndCount < 0 && parent && parent.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
            for (var i$2 = 0, cur = fragment; i$2 < openEndCount; i$2++) {
                var node = cur.lastChild;
                this.frontier.push({
                    type: node.type,
                    match: node.contentMatchAt(node.childCount)
                }), cur = node.content;
            }
            this.unplaced = toEnd ? 0 == sliceDepth ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l.empty : new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(dropFromFragment(slice.content, sliceDepth - 1, 1), sliceDepth - 1, openEndCount < 0 ? slice.openEnd : sliceDepth - 1) : new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(dropFromFragment(slice.content, sliceDepth, taken), slice.openStart, slice.openEnd);
        }, Fitter.prototype.mustMoveInline = function() {
            if (!this.$to.parent.isTextblock || this.$to.end() == this.$to.pos) return -1;
            var level, top = this.frontier[this.depth];
            if (!top.type.isTextblock || !contentAfterFits(this.$to, this.$to.depth, top.type, top.match, !1) || this.$to.depth == this.depth && (level = this.findCloseLevel(this.$to)) && level.depth == this.depth) return -1;
            for (var depth = this.$to.depth, after = this.$to.after(depth); depth > 1 && after == this.$to.end(--depth); ) ++after;
            return after;
        }, Fitter.prototype.findCloseLevel = function($to) {
            scan: for (var i = Math.min(this.depth, $to.depth); i >= 0; i--) {
                var ref = this.frontier[i], match = ref.match, type = ref.type, dropInner = i < $to.depth && $to.end(i + 1) == $to.pos + ($to.depth - (i + 1)), fit = contentAfterFits($to, i, type, match, dropInner);
                if (fit) {
                    for (var d = i - 1; d >= 0; d--) {
                        var ref$1 = this.frontier[d], match$1 = ref$1.match, matches = contentAfterFits($to, d, ref$1.type, match$1, !0);
                        if (!matches || matches.childCount) continue scan;
                    }
                    return {
                        depth: i,
                        fit: fit,
                        move: dropInner ? $to.doc.resolve($to.after(i + 1)) : $to
                    };
                }
            }
        }, Fitter.prototype.close = function($to) {
            var close = this.findCloseLevel($to);
            if (!close) return null;
            for (;this.depth > close.depth; ) this.closeFrontierNode();
            close.fit.childCount && (this.placed = addToFragment(this.placed, close.depth, close.fit)), 
            $to = close.move;
            for (var d = close.depth + 1; d <= $to.depth; d++) {
                var node = $to.node(d), add = node.type.contentMatch.fillBefore(node.content, !0, $to.index(d));
                this.openFrontierNode(node.type, node.attrs, add);
            }
            return $to;
        }, Fitter.prototype.openFrontierNode = function(type, attrs, content) {
            var top = this.frontier[this.depth];
            top.match = top.match.matchType(type), this.placed = addToFragment(this.placed, this.depth, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.from(type.create(attrs, content))), 
            this.frontier.push({
                type: type,
                match: type.contentMatch
            });
        }, Fitter.prototype.closeFrontierNode = function() {
            var add = this.frontier.pop().match.fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.empty, !0);
            add.childCount && (this.placed = addToFragment(this.placed, this.frontier.length, add));
        }, Object.defineProperties(Fitter.prototype, prototypeAccessors$1), Transform.prototype.replaceRange = function(from, to, slice) {
            if (!slice.size) return this.deleteRange(from, to);
            var $from = this.doc.resolve(from), $to = this.doc.resolve(to);
            if (fitsTrivially($from, $to, slice)) return this.step(new ReplaceStep(from, to, slice));
            var targetDepths = coveredDepths($from, this.doc.resolve(to));
            0 == targetDepths[targetDepths.length - 1] && targetDepths.pop();
            var preferredTarget = -($from.depth + 1);
            targetDepths.unshift(preferredTarget);
            for (var d = $from.depth, pos = $from.pos - 1; d > 0; d--, pos--) {
                var spec = $from.node(d).type.spec;
                if (spec.defining || spec.isolating) break;
                targetDepths.indexOf(d) > -1 ? preferredTarget = d : $from.before(d) == pos && targetDepths.splice(1, 0, -d);
            }
            for (var preferredTargetIndex = targetDepths.indexOf(preferredTarget), leftNodes = [], preferredDepth = slice.openStart, content = slice.content, i = 0; ;i++) {
                var node = content.firstChild;
                if (leftNodes.push(node), i == slice.openStart) break;
                content = node.content;
            }
            preferredDepth > 0 && leftNodes[preferredDepth - 1].type.spec.defining && $from.node(preferredTargetIndex).type != leftNodes[preferredDepth - 1].type ? preferredDepth -= 1 : preferredDepth >= 2 && leftNodes[preferredDepth - 1].isTextblock && leftNodes[preferredDepth - 2].type.spec.defining && $from.node(preferredTargetIndex).type != leftNodes[preferredDepth - 2].type && (preferredDepth -= 2);
            for (var j = slice.openStart; j >= 0; j--) {
                var openDepth = (j + preferredDepth + 1) % (slice.openStart + 1), insert = leftNodes[openDepth];
                if (insert) for (var i$1 = 0; i$1 < targetDepths.length; i$1++) {
                    var targetDepth = targetDepths[(i$1 + preferredTargetIndex) % targetDepths.length], expand = !0;
                    targetDepth < 0 && (expand = !1, targetDepth = -targetDepth);
                    var parent = $from.node(targetDepth - 1), index = $from.index(targetDepth - 1);
                    if (parent.canReplaceWith(index, index, insert.type, insert.marks)) return this.replace($from.before(targetDepth), expand ? $to.after(targetDepth) : to, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(closeFragment(slice.content, 0, slice.openStart, openDepth), openDepth, slice.openEnd));
                }
            }
            for (var startSteps = this.steps.length, i$2 = targetDepths.length - 1; i$2 >= 0 && (this.replace(from, to, slice), 
            !(this.steps.length > startSteps)); i$2--) {
                var depth = targetDepths[i$2];
                i$2 < 0 || (from = $from.before(depth), to = $to.after(depth));
            }
            return this;
        }, Transform.prototype.replaceRangeWith = function(from, to, node) {
            if (!node.isInline && from == to && this.doc.resolve(from).parent.content.size) {
                var point = function(doc, pos, nodeType) {
                    var $pos = doc.resolve(pos);
                    if ($pos.parent.canReplaceWith($pos.index(), $pos.index(), nodeType)) return pos;
                    if (0 == $pos.parentOffset) for (var d = $pos.depth - 1; d >= 0; d--) {
                        var index = $pos.index(d);
                        if ($pos.node(d).canReplaceWith(index, index, nodeType)) return $pos.before(d + 1);
                        if (index > 0) return null;
                    }
                    if ($pos.parentOffset == $pos.parent.content.size) for (var d$1 = $pos.depth - 1; d$1 >= 0; d$1--) {
                        var index$1 = $pos.indexAfter(d$1);
                        if ($pos.node(d$1).canReplaceWith(index$1, index$1, nodeType)) return $pos.after(d$1 + 1);
                        if (index$1 < $pos.node(d$1).childCount) return null;
                    }
                }(this.doc, from, node.type);
                null != point && (from = to = point);
            }
            return this.replaceRange(from, to, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.l(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__.d.from(node), 0, 0));
        }, Transform.prototype.deleteRange = function(from, to) {
            for (var $from = this.doc.resolve(from), $to = this.doc.resolve(to), covered = coveredDepths($from, $to), i = 0; i < covered.length; i++) {
                var depth = covered[i], last = i == covered.length - 1;
                if (last && 0 == depth || $from.node(depth).type.contentMatch.validEnd) return this.delete($from.start(depth), $to.end(depth));
                if (depth > 0 && (last || $from.node(depth - 1).canReplace($from.index(depth - 1), $to.indexAfter(depth - 1)))) return this.delete($from.before(depth), $to.after(depth));
            }
            for (var d = 1; d <= $from.depth && d <= $to.depth; d++) if (from - $from.start(d) == $from.depth - d && to > $from.end(d) && $to.end(d) - to != $to.depth - d) return this.delete($from.before(d), to);
            return this.delete(from, to);
        };
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__3__;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _hasOwnProperty = Object.prototype.hasOwnProperty;
        function has(object, key) {
            return _hasOwnProperty.call(object, key);
        }
        function isValidEntityCode(c) {
            return !(c >= 55296 && c <= 57343) && (!(c >= 64976 && c <= 65007) && (65535 != (65535 & c) && 65534 != (65535 & c) && (!(c >= 0 && c <= 8) && (11 !== c && (!(c >= 14 && c <= 31) && (!(c >= 127 && c <= 159) && !(c > 1114111)))))));
        }
        function fromCodePoint(c) {
            if (c > 65535) {
                var surrogate1 = 55296 + ((c -= 65536) >> 10), surrogate2 = 56320 + (1023 & c);
                return String.fromCharCode(surrogate1, surrogate2);
            }
            return String.fromCharCode(c);
        }
        var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi"), DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, entities = __webpack_require__(10);
        var HTML_ESCAPE_TEST_RE = /[&<>"]/, HTML_ESCAPE_REPLACE_RE = /[&<>"]/g, HTML_REPLACEMENTS = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;"
        };
        function replaceUnsafeChar(ch) {
            return HTML_REPLACEMENTS[ch];
        }
        var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
        var UNICODE_PUNCT_RE = __webpack_require__(7);
        exports.lib = {}, exports.lib.mdurl = __webpack_require__(11), exports.lib.ucmicro = __webpack_require__(27), 
        exports.assign = function(obj) {
            var sources = Array.prototype.slice.call(arguments, 1);
            return sources.forEach((function(source) {
                if (source) {
                    if ("object" != typeof source) throw new TypeError(source + "must be object");
                    Object.keys(source).forEach((function(key) {
                        obj[key] = source[key];
                    }));
                }
            })), obj;
        }, exports.isString = function(obj) {
            return "[object String]" === function(obj) {
                return Object.prototype.toString.call(obj);
            }(obj);
        }, exports.has = has, exports.unescapeMd = function(str) {
            return str.indexOf("\\") < 0 ? str : str.replace(UNESCAPE_MD_RE, "$1");
        }, exports.unescapeAll = function(str) {
            return str.indexOf("\\") < 0 && str.indexOf("&") < 0 ? str : str.replace(UNESCAPE_ALL_RE, (function(match, escaped, entity) {
                return escaped || function(match, name) {
                    var code = 0;
                    return has(entities, name) ? entities[name] : 35 === name.charCodeAt(0) && DIGITAL_ENTITY_TEST_RE.test(name) && isValidEntityCode(code = "x" === name[1].toLowerCase() ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10)) ? fromCodePoint(code) : match;
                }(match, entity);
            }));
        }, exports.isValidEntityCode = isValidEntityCode, exports.fromCodePoint = fromCodePoint, 
        exports.escapeHtml = function(str) {
            return HTML_ESCAPE_TEST_RE.test(str) ? str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar) : str;
        }, exports.arrayReplaceAt = function(src, pos, newElements) {
            return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
        }, exports.isSpace = function(code) {
            switch (code) {
              case 9:
              case 32:
                return !0;
            }
            return !1;
        }, exports.isWhiteSpace = function(code) {
            if (code >= 8192 && code <= 8202) return !0;
            switch (code) {
              case 9:
              case 10:
              case 11:
              case 12:
              case 13:
              case 32:
              case 160:
              case 5760:
              case 8239:
              case 8287:
              case 12288:
                return !0;
            }
            return !1;
        }, exports.isMdAsciiPunct = function(ch) {
            switch (ch) {
              case 33:
              case 34:
              case 35:
              case 36:
              case 37:
              case 38:
              case 39:
              case 40:
              case 41:
              case 42:
              case 43:
              case 44:
              case 45:
              case 46:
              case 47:
              case 58:
              case 59:
              case 60:
              case 61:
              case 62:
              case 63:
              case 64:
              case 91:
              case 92:
              case 93:
              case 94:
              case 95:
              case 96:
              case 123:
              case 124:
              case 125:
              case 126:
                return !0;

              default:
                return !1;
            }
        }, exports.isPunctChar = function(ch) {
            return UNICODE_PUNCT_RE.test(ch);
        }, exports.escapeRE = function(str) {
            return str.replace(REGEXP_ESCAPE_RE, "\\$&");
        }, exports.normalizeReference = function(str) {
            return str = str.trim().replace(/\s+/g, " "), "Ṿ" === "ẞ".toLowerCase() && (str = str.replace(/ẞ/g, "ß")), 
            str.toLowerCase().toUpperCase();
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "Decoration", (function() {
            return Decoration;
        })), __webpack_require__.d(__webpack_exports__, "DecorationSet", (function() {
            return DecorationSet;
        })), __webpack_require__.d(__webpack_exports__, "EditorView", (function() {
            return EditorView;
        })), __webpack_require__.d(__webpack_exports__, "__endComposition", (function() {
            return endComposition;
        })), __webpack_require__.d(__webpack_exports__, "__parseFromClipboard", (function() {
            return parseFromClipboard;
        })), __webpack_require__.d(__webpack_exports__, "__serializeForClipboard", (function() {
            return serializeForClipboard;
        }));
        var prosemirror_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1), prosemirror_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0), prosemirror_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2), result = {};
        if ("undefined" != typeof navigator && "undefined" != typeof document) {
            var ie_edge = /Edge\/(\d+)/.exec(navigator.userAgent), ie_upto10 = /MSIE \d/.test(navigator.userAgent), ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
            result.mac = /Mac/.test(navigator.platform);
            var ie = result.ie = !!(ie_upto10 || ie_11up || ie_edge);
            result.ie_version = ie_upto10 ? document.documentMode || 6 : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : null, 
            result.gecko = !ie && /gecko\/(\d+)/i.test(navigator.userAgent), result.gecko_version = result.gecko && +(/Firefox\/(\d+)/.exec(navigator.userAgent) || [ 0, 0 ])[1];
            var chrome = !ie && /Chrome\/(\d+)/.exec(navigator.userAgent);
            result.chrome = !!chrome, result.chrome_version = chrome && +chrome[1], result.ios = !ie && /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent), 
            result.android = /Android \d/.test(navigator.userAgent), result.webkit = "webkitFontSmoothing" in document.documentElement.style, 
            result.safari = /Apple Computer/.test(navigator.vendor), result.webkit_version = result.webkit && +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [ 0, 0 ])[1];
        }
        var domIndex = function(node) {
            for (var index = 0; ;index++) if (!(node = node.previousSibling)) return index;
        }, parentNode = function(node) {
            var parent = node.parentNode;
            return parent && 11 == parent.nodeType ? parent.host : parent;
        }, textRange = function(node, from, to) {
            var range = document.createRange();
            return range.setEnd(node, null == to ? node.nodeValue.length : to), range.setStart(node, from || 0), 
            range;
        }, isEquivalentPosition = function(node, off, targetNode, targetOff) {
            return targetNode && (scanFor(node, off, targetNode, targetOff, -1) || scanFor(node, off, targetNode, targetOff, 1));
        }, atomElements = /^(img|br|input|textarea|hr)$/i;
        function scanFor(node, off, targetNode, targetOff, dir) {
            for (;;) {
                if (node == targetNode && off == targetOff) return !0;
                if (off == (dir < 0 ? 0 : nodeSize(node))) {
                    var parent = node.parentNode;
                    if (1 != parent.nodeType || hasBlockDesc(node) || atomElements.test(node.nodeName) || "false" == node.contentEditable) return !1;
                    off = domIndex(node) + (dir < 0 ? 0 : 1), node = parent;
                } else {
                    if (1 != node.nodeType) return !1;
                    if ("false" == (node = node.childNodes[off + (dir < 0 ? -1 : 0)]).contentEditable) return !1;
                    off = dir < 0 ? nodeSize(node) : 0;
                }
            }
        }
        function nodeSize(node) {
            return 3 == node.nodeType ? node.nodeValue.length : node.childNodes.length;
        }
        function hasBlockDesc(dom) {
            for (var desc, cur = dom; cur && !(desc = cur.pmViewDesc); cur = cur.parentNode) ;
            return desc && desc.node && desc.node.isBlock && (desc.dom == dom || desc.contentDOM == dom);
        }
        var selectionCollapsed = function(domSel) {
            var collapsed = domSel.isCollapsed;
            return collapsed && result.chrome && domSel.rangeCount && !domSel.getRangeAt(0).collapsed && (collapsed = !1), 
            collapsed;
        };
        function keyEvent(keyCode, key) {
            var event = document.createEvent("Event");
            return event.initEvent("keydown", !0, !0), event.keyCode = keyCode, event.key = event.code = key, 
            event;
        }
        function windowRect(doc) {
            return {
                left: 0,
                right: doc.documentElement.clientWidth,
                top: 0,
                bottom: doc.documentElement.clientHeight
            };
        }
        function getSide(value, side) {
            return "number" == typeof value ? value : value[side];
        }
        function clientRect(node) {
            var rect = node.getBoundingClientRect();
            return {
                left: rect.left,
                right: rect.left + node.clientWidth,
                top: rect.top,
                bottom: rect.top + node.clientHeight
            };
        }
        function scrollRectIntoView(view, rect, startDOM) {
            for (var scrollThreshold = view.someProp("scrollThreshold") || 0, scrollMargin = view.someProp("scrollMargin") || 5, doc = view.dom.ownerDocument, parent = startDOM || view.dom; parent; parent = parentNode(parent)) if (1 == parent.nodeType) {
                var atTop = parent == doc.body || 1 != parent.nodeType, bounding = atTop ? windowRect(doc) : clientRect(parent), moveX = 0, moveY = 0;
                if (rect.top < bounding.top + getSide(scrollThreshold, "top") ? moveY = -(bounding.top - rect.top + getSide(scrollMargin, "top")) : rect.bottom > bounding.bottom - getSide(scrollThreshold, "bottom") && (moveY = rect.bottom - bounding.bottom + getSide(scrollMargin, "bottom")), 
                rect.left < bounding.left + getSide(scrollThreshold, "left") ? moveX = -(bounding.left - rect.left + getSide(scrollMargin, "left")) : rect.right > bounding.right - getSide(scrollThreshold, "right") && (moveX = rect.right - bounding.right + getSide(scrollMargin, "right")), 
                moveX || moveY) if (atTop) doc.defaultView.scrollBy(moveX, moveY); else {
                    var startX = parent.scrollLeft, startY = parent.scrollTop;
                    moveY && (parent.scrollTop += moveY), moveX && (parent.scrollLeft += moveX);
                    var dX = parent.scrollLeft - startX, dY = parent.scrollTop - startY;
                    rect = {
                        left: rect.left - dX,
                        top: rect.top - dY,
                        right: rect.right - dX,
                        bottom: rect.bottom - dY
                    };
                }
                if (atTop) break;
            }
        }
        function scrollStack(dom) {
            for (var stack = [], doc = dom.ownerDocument; dom && (stack.push({
                dom: dom,
                top: dom.scrollTop,
                left: dom.scrollLeft
            }), dom != doc); dom = parentNode(dom)) ;
            return stack;
        }
        function restoreScrollStack(stack, dTop) {
            for (var i = 0; i < stack.length; i++) {
                var ref = stack[i], dom = ref.dom, top = ref.top, left = ref.left;
                dom.scrollTop != top + dTop && (dom.scrollTop = top + dTop), dom.scrollLeft != left && (dom.scrollLeft = left);
            }
        }
        var preventScrollSupported = null;
        function findOffsetInNode(node, coords) {
            for (var closest, coordsClosest, dxClosest = 2e8, offset = 0, rowBot = coords.top, rowTop = coords.top, child = node.firstChild, childIndex = 0; child; child = child.nextSibling, 
            childIndex++) {
                var rects = void 0;
                if (1 == child.nodeType) rects = child.getClientRects(); else {
                    if (3 != child.nodeType) continue;
                    rects = textRange(child).getClientRects();
                }
                for (var i = 0; i < rects.length; i++) {
                    var rect = rects[i];
                    if (rect.top <= rowBot && rect.bottom >= rowTop) {
                        rowBot = Math.max(rect.bottom, rowBot), rowTop = Math.min(rect.top, rowTop);
                        var dx = rect.left > coords.left ? rect.left - coords.left : rect.right < coords.left ? coords.left - rect.right : 0;
                        if (dx < dxClosest) {
                            closest = child, dxClosest = dx, coordsClosest = dx && 3 == closest.nodeType ? {
                                left: rect.right < coords.left ? rect.right : rect.left,
                                top: coords.top
                            } : coords, 1 == child.nodeType && dx && (offset = childIndex + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0));
                            continue;
                        }
                    }
                    !closest && (coords.left >= rect.right && coords.top >= rect.top || coords.left >= rect.left && coords.top >= rect.bottom) && (offset = childIndex + 1);
                }
            }
            return closest && 3 == closest.nodeType ? function(node, coords) {
                for (var len = node.nodeValue.length, range = document.createRange(), i = 0; i < len; i++) {
                    range.setEnd(node, i + 1), range.setStart(node, i);
                    var rect = singleRect(range, 1);
                    if (rect.top != rect.bottom && inRect(coords, rect)) return {
                        node: node,
                        offset: i + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0)
                    };
                }
                return {
                    node: node,
                    offset: 0
                };
            }(closest, coordsClosest) : !closest || dxClosest && 1 == closest.nodeType ? {
                node: node,
                offset: offset
            } : findOffsetInNode(closest, coordsClosest);
        }
        function inRect(coords, rect) {
            return coords.left >= rect.left - 1 && coords.left <= rect.right + 1 && coords.top >= rect.top - 1 && coords.top <= rect.bottom + 1;
        }
        function elementFromPoint(element, coords, box) {
            var len = element.childNodes.length;
            if (len && box.top < box.bottom) for (var startI = Math.max(0, Math.min(len - 1, Math.floor(len * (coords.top - box.top) / (box.bottom - box.top)) - 2)), i = startI; ;) {
                var child = element.childNodes[i];
                if (1 == child.nodeType) for (var rects = child.getClientRects(), j = 0; j < rects.length; j++) {
                    var rect = rects[j];
                    if (inRect(coords, rect)) return elementFromPoint(child, coords, rect);
                }
                if ((i = (i + 1) % len) == startI) break;
            }
            return element;
        }
        function posAtCoords(view, coords) {
            var assign, assign$1, node, offset, root = view.root;
            if (root.caretPositionFromPoint) try {
                var pos$1 = root.caretPositionFromPoint(coords.left, coords.top);
                pos$1 && (node = (assign = pos$1).offsetNode, offset = assign.offset);
            } catch (_) {}
            if (!node && root.caretRangeFromPoint) {
                var range = root.caretRangeFromPoint(coords.left, coords.top);
                range && (node = (assign$1 = range).startContainer, offset = assign$1.startOffset);
            }
            var pos, elt = root.elementFromPoint(coords.left, coords.top + 1);
            if (!elt || !view.dom.contains(1 != elt.nodeType ? elt.parentNode : elt)) {
                var box = view.dom.getBoundingClientRect();
                if (!inRect(coords, box)) return null;
                if (!(elt = elementFromPoint(view.dom, coords, box))) return null;
            }
            if (result.safari && elt.draggable && (node = offset = null), elt = function(dom, coords) {
                var parent = dom.parentNode;
                return parent && /^li$/i.test(parent.nodeName) && coords.left < dom.getBoundingClientRect().left ? parent : dom;
            }(elt, coords), node) {
                if (result.gecko && 1 == node.nodeType && (offset = Math.min(offset, node.childNodes.length)) < node.childNodes.length) {
                    var box$1, next = node.childNodes[offset];
                    "IMG" == next.nodeName && (box$1 = next.getBoundingClientRect()).right <= coords.left && box$1.bottom > coords.top && offset++;
                }
                node == view.dom && offset == node.childNodes.length - 1 && 1 == node.lastChild.nodeType && coords.top > node.lastChild.getBoundingClientRect().bottom ? pos = view.state.doc.content.size : 0 != offset && 1 == node.nodeType && "BR" == node.childNodes[offset - 1].nodeName || (pos = function(view, node, offset, coords) {
                    for (var outside = -1, cur = node; cur != view.dom; ) {
                        var desc = view.docView.nearestDesc(cur, !0);
                        if (!desc) return null;
                        if (desc.node.isBlock && desc.parent) {
                            var rect = desc.dom.getBoundingClientRect();
                            if (rect.left > coords.left || rect.top > coords.top) outside = desc.posBefore; else {
                                if (!(rect.right < coords.left || rect.bottom < coords.top)) break;
                                outside = desc.posAfter;
                            }
                        }
                        cur = desc.dom.parentNode;
                    }
                    return outside > -1 ? outside : view.docView.posFromDOM(node, offset);
                }(view, node, offset, coords));
            }
            null == pos && (pos = function(view, elt, coords) {
                var ref = findOffsetInNode(elt, coords), node = ref.node, offset = ref.offset, bias = -1;
                if (1 == node.nodeType && !node.firstChild) {
                    var rect = node.getBoundingClientRect();
                    bias = rect.left != rect.right && coords.left > (rect.left + rect.right) / 2 ? 1 : -1;
                }
                return view.docView.posFromDOM(node, offset, bias);
            }(view, elt, coords));
            var desc = view.docView.nearestDesc(elt, !0);
            return {
                pos: pos,
                inside: desc ? desc.posAtStart - desc.border : -1
            };
        }
        function singleRect(object, bias) {
            var rects = object.getClientRects();
            return rects.length ? rects[bias < 0 ? 0 : rects.length - 1] : object.getBoundingClientRect();
        }
        function coordsAtPos(view, pos) {
            var ref = view.docView.domFromPos(pos), node = ref.node, offset = ref.offset;
            if (3 == node.nodeType && (result.webkit || result.gecko)) {
                var rect = singleRect(textRange(node, offset, offset), 0);
                if (result.gecko && offset && /\s/.test(node.nodeValue[offset - 1]) && offset < node.nodeValue.length) {
                    var rectBefore = singleRect(textRange(node, offset - 1, offset - 1), -1);
                    if (rectBefore.top == rect.top) {
                        var rectAfter = singleRect(textRange(node, offset, offset + 1), -1);
                        if (rectAfter.top != rect.top) return flattenV(rectAfter, rectAfter.left < rectBefore.left);
                    }
                }
                return rect;
            }
            if (1 == node.nodeType && !view.state.doc.resolve(pos).parent.inlineContent) {
                var rect$1, top = !0;
                if (offset < node.childNodes.length) {
                    var after = node.childNodes[offset];
                    1 == after.nodeType && (rect$1 = after.getBoundingClientRect());
                }
                if (!rect$1 && offset) {
                    var before = node.childNodes[offset - 1];
                    1 == before.nodeType && (rect$1 = before.getBoundingClientRect(), top = !1);
                }
                return function(rect, top) {
                    if (0 == rect.height) return rect;
                    var y = top ? rect.top : rect.bottom;
                    return {
                        top: y,
                        bottom: y,
                        left: rect.left,
                        right: rect.right
                    };
                }(rect$1 || node.getBoundingClientRect(), top);
            }
            for (var dir = -1; dir < 2; dir += 2) if (dir < 0 && offset) {
                var prev = void 0, target = 3 == node.nodeType ? textRange(node, offset - 1, offset) : 3 == (prev = node.childNodes[offset - 1]).nodeType ? textRange(prev) : 1 == prev.nodeType && "BR" != prev.nodeName ? prev : null;
                if (target) {
                    var rect$2 = singleRect(target, 1);
                    if (rect$2.top < rect$2.bottom) return flattenV(rect$2, !1);
                }
            } else if (dir > 0 && offset < nodeSize(node)) {
                var next = void 0, target$1 = 3 == node.nodeType ? textRange(node, offset, offset + 1) : 3 == (next = node.childNodes[offset]).nodeType ? textRange(next) : 1 == next.nodeType ? next : null;
                if (target$1) {
                    var rect$3 = singleRect(target$1, -1);
                    if (rect$3.top < rect$3.bottom) return flattenV(rect$3, !0);
                }
            }
            return flattenV(singleRect(3 == node.nodeType ? textRange(node) : node, 0), !1);
        }
        function flattenV(rect, left) {
            if (0 == rect.width) return rect;
            var x = left ? rect.left : rect.right;
            return {
                top: rect.top,
                bottom: rect.bottom,
                left: x,
                right: x
            };
        }
        function withFlushedState(view, state, f) {
            var viewState = view.state, active = view.root.activeElement;
            viewState != state && view.updateState(state), active != view.dom && view.focus();
            try {
                return f();
            } finally {
                viewState != state && view.updateState(viewState), active != view.dom && active && active.focus();
            }
        }
        var maybeRTL = /[\u0590-\u08ac]/;
        var cachedState = null, cachedDir = null, cachedResult = !1;
        function endOfTextblock(view, state, dir) {
            return cachedState == state && cachedDir == dir ? cachedResult : (cachedState = state, 
            cachedDir = dir, cachedResult = "up" == dir || "down" == dir ? function(view, state, dir) {
                var sel = state.selection, $pos = "up" == dir ? sel.$anchor.min(sel.$head) : sel.$anchor.max(sel.$head);
                return withFlushedState(view, state, (function() {
                    for (var dom = view.docView.domFromPos($pos.pos).node; ;) {
                        var nearest = view.docView.nearestDesc(dom, !0);
                        if (!nearest) break;
                        if (nearest.node.isBlock) {
                            dom = nearest.dom;
                            break;
                        }
                        dom = nearest.dom.parentNode;
                    }
                    for (var coords = coordsAtPos(view, $pos.pos), child = dom.firstChild; child; child = child.nextSibling) {
                        var boxes = void 0;
                        if (1 == child.nodeType) boxes = child.getClientRects(); else {
                            if (3 != child.nodeType) continue;
                            boxes = textRange(child, 0, child.nodeValue.length).getClientRects();
                        }
                        for (var i = 0; i < boxes.length; i++) {
                            var box = boxes[i];
                            if (box.bottom > box.top && ("up" == dir ? box.bottom < coords.top + 1 : box.top > coords.bottom - 1)) return !1;
                        }
                    }
                    return !0;
                }));
            }(view, state, dir) : function(view, state, dir) {
                var $head = state.selection.$head;
                if (!$head.parent.isTextblock) return !1;
                var offset = $head.parentOffset, atStart = !offset, atEnd = offset == $head.parent.content.size, sel = getSelection();
                return maybeRTL.test($head.parent.textContent) && sel.modify ? withFlushedState(view, state, (function() {
                    var oldRange = sel.getRangeAt(0), oldNode = sel.focusNode, oldOff = sel.focusOffset, oldBidiLevel = sel.caretBidiLevel;
                    sel.modify("move", dir, "character");
                    var result = !($head.depth ? view.docView.domAfterPos($head.before()) : view.dom).contains(1 == sel.focusNode.nodeType ? sel.focusNode : sel.focusNode.parentNode) || oldNode == sel.focusNode && oldOff == sel.focusOffset;
                    return sel.removeAllRanges(), sel.addRange(oldRange), null != oldBidiLevel && (sel.caretBidiLevel = oldBidiLevel), 
                    result;
                })) : "left" == dir || "backward" == dir ? atStart : atEnd;
            }(view, state, dir));
        }
        var ViewDesc = function(parent, children, dom, contentDOM) {
            this.parent = parent, this.children = children, this.dom = dom, dom.pmViewDesc = this, 
            this.contentDOM = contentDOM, this.dirty = 0;
        }, prototypeAccessors = {
            beforePosition: {
                configurable: !0
            },
            size: {
                configurable: !0
            },
            border: {
                configurable: !0
            },
            posBefore: {
                configurable: !0
            },
            posAtStart: {
                configurable: !0
            },
            posAfter: {
                configurable: !0
            },
            posAtEnd: {
                configurable: !0
            },
            contentLost: {
                configurable: !0
            }
        };
        ViewDesc.prototype.matchesWidget = function() {
            return !1;
        }, ViewDesc.prototype.matchesMark = function() {
            return !1;
        }, ViewDesc.prototype.matchesNode = function() {
            return !1;
        }, ViewDesc.prototype.matchesHack = function() {
            return !1;
        }, prototypeAccessors.beforePosition.get = function() {
            return !1;
        }, ViewDesc.prototype.parseRule = function() {
            return null;
        }, ViewDesc.prototype.stopEvent = function() {
            return !1;
        }, prototypeAccessors.size.get = function() {
            for (var size = 0, i = 0; i < this.children.length; i++) size += this.children[i].size;
            return size;
        }, prototypeAccessors.border.get = function() {
            return 0;
        }, ViewDesc.prototype.destroy = function() {
            this.parent = null, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = null);
            for (var i = 0; i < this.children.length; i++) this.children[i].destroy();
        }, ViewDesc.prototype.posBeforeChild = function(child) {
            for (var i = 0, pos = this.posAtStart; i < this.children.length; i++) {
                var cur = this.children[i];
                if (cur == child) return pos;
                pos += cur.size;
            }
        }, prototypeAccessors.posBefore.get = function() {
            return this.parent.posBeforeChild(this);
        }, prototypeAccessors.posAtStart.get = function() {
            return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
        }, prototypeAccessors.posAfter.get = function() {
            return this.posBefore + this.size;
        }, prototypeAccessors.posAtEnd.get = function() {
            return this.posAtStart + this.size - 2 * this.border;
        }, ViewDesc.prototype.localPosFromDOM = function(dom, offset, bias) {
            if (this.contentDOM && this.contentDOM.contains(1 == dom.nodeType ? dom : dom.parentNode)) {
                if (bias < 0) {
                    var domBefore, desc;
                    if (dom == this.contentDOM) domBefore = dom.childNodes[offset - 1]; else {
                        for (;dom.parentNode != this.contentDOM; ) dom = dom.parentNode;
                        domBefore = dom.previousSibling;
                    }
                    for (;domBefore && (!(desc = domBefore.pmViewDesc) || desc.parent != this); ) domBefore = domBefore.previousSibling;
                    return domBefore ? this.posBeforeChild(desc) + desc.size : this.posAtStart;
                }
                var domAfter, desc$1;
                if (dom == this.contentDOM) domAfter = dom.childNodes[offset]; else {
                    for (;dom.parentNode != this.contentDOM; ) dom = dom.parentNode;
                    domAfter = dom.nextSibling;
                }
                for (;domAfter && (!(desc$1 = domAfter.pmViewDesc) || desc$1.parent != this); ) domAfter = domAfter.nextSibling;
                return domAfter ? this.posBeforeChild(desc$1) : this.posAtEnd;
            }
            var atEnd;
            if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) atEnd = 2 & dom.compareDocumentPosition(this.contentDOM); else if (this.dom.firstChild) {
                if (0 == offset) for (var search = dom; ;search = search.parentNode) {
                    if (search == this.dom) {
                        atEnd = !1;
                        break;
                    }
                    if (search.parentNode.firstChild != search) break;
                }
                if (null == atEnd && offset == dom.childNodes.length) for (var search$1 = dom; ;search$1 = search$1.parentNode) {
                    if (search$1 == this.dom) {
                        atEnd = !0;
                        break;
                    }
                    if (search$1.parentNode.lastChild != search$1) break;
                }
            }
            return (null == atEnd ? bias > 0 : atEnd) ? this.posAtEnd : this.posAtStart;
        }, ViewDesc.prototype.nearestDesc = function(dom, onlyNodes) {
            for (var first = !0, cur = dom; cur; cur = cur.parentNode) {
                var desc = this.getDesc(cur);
                if (desc && (!onlyNodes || desc.node)) {
                    if (!first || !desc.nodeDOM || (1 == desc.nodeDOM.nodeType ? desc.nodeDOM.contains(1 == dom.nodeType ? dom : dom.parentNode) : desc.nodeDOM == dom)) return desc;
                    first = !1;
                }
            }
        }, ViewDesc.prototype.getDesc = function(dom) {
            for (var desc = dom.pmViewDesc, cur = desc; cur; cur = cur.parent) if (cur == this) return desc;
        }, ViewDesc.prototype.posFromDOM = function(dom, offset, bias) {
            for (var scan = dom; scan; scan = scan.parentNode) {
                var desc = this.getDesc(scan);
                if (desc) return desc.localPosFromDOM(dom, offset, bias);
            }
            return -1;
        }, ViewDesc.prototype.descAt = function(pos) {
            for (var i = 0, offset = 0; i < this.children.length; i++) {
                var child = this.children[i], end = offset + child.size;
                if (offset == pos && end != offset) {
                    for (;!child.border && child.children.length; ) child = child.children[0];
                    return child;
                }
                if (pos < end) return child.descAt(pos - offset - child.border);
                offset = end;
            }
        }, ViewDesc.prototype.domFromPos = function(pos) {
            if (!this.contentDOM) return {
                node: this.dom,
                offset: 0
            };
            for (var offset = 0, i = 0; ;i++) {
                if (offset == pos) {
                    for (;i < this.children.length && (this.children[i].beforePosition || this.children[i].dom.parentNode != this.contentDOM); ) i++;
                    return {
                        node: this.contentDOM,
                        offset: i == this.children.length ? this.contentDOM.childNodes.length : domIndex(this.children[i].dom)
                    };
                }
                if (i == this.children.length) throw new Error("Invalid position " + pos);
                var child = this.children[i], end = offset + child.size;
                if (pos < end) return child.domFromPos(pos - offset - child.border);
                offset = end;
            }
        }, ViewDesc.prototype.parseRange = function(from, to, base) {
            if (void 0 === base && (base = 0), 0 == this.children.length) return {
                node: this.contentDOM,
                from: from,
                to: to,
                fromOffset: 0,
                toOffset: this.contentDOM.childNodes.length
            };
            for (var fromOffset = -1, toOffset = -1, offset = base, i = 0; ;i++) {
                var child = this.children[i], end = offset + child.size;
                if (-1 == fromOffset && from <= end) {
                    var childBase = offset + child.border;
                    if (from >= childBase && to <= end - child.border && child.node && child.contentDOM && this.contentDOM.contains(child.contentDOM)) return child.parseRange(from, to, childBase);
                    from = offset;
                    for (var j = i; j > 0; j--) {
                        var prev = this.children[j - 1];
                        if (prev.size && prev.dom.parentNode == this.contentDOM && !prev.emptyChildAt(1)) {
                            fromOffset = domIndex(prev.dom) + 1;
                            break;
                        }
                        from -= prev.size;
                    }
                    -1 == fromOffset && (fromOffset = 0);
                }
                if (fromOffset > -1 && (end > to || i == this.children.length - 1)) {
                    to = end;
                    for (var j$1 = i + 1; j$1 < this.children.length; j$1++) {
                        var next = this.children[j$1];
                        if (next.size && next.dom.parentNode == this.contentDOM && !next.emptyChildAt(-1)) {
                            toOffset = domIndex(next.dom);
                            break;
                        }
                        to += next.size;
                    }
                    -1 == toOffset && (toOffset = this.contentDOM.childNodes.length);
                    break;
                }
                offset = end;
            }
            return {
                node: this.contentDOM,
                from: from,
                to: to,
                fromOffset: fromOffset,
                toOffset: toOffset
            };
        }, ViewDesc.prototype.emptyChildAt = function(side) {
            if (this.border || !this.contentDOM || !this.children.length) return !1;
            var child = this.children[side < 0 ? 0 : this.children.length - 1];
            return 0 == child.size || child.emptyChildAt(side);
        }, ViewDesc.prototype.domAfterPos = function(pos) {
            var ref = this.domFromPos(pos), node = ref.node, offset = ref.offset;
            if (1 != node.nodeType || offset == node.childNodes.length) throw new RangeError("No node after pos " + pos);
            return node.childNodes[offset];
        }, ViewDesc.prototype.setSelection = function(anchor, head, root, force) {
            for (var from = Math.min(anchor, head), to = Math.max(anchor, head), i = 0, offset = 0; i < this.children.length; i++) {
                var child = this.children[i], end = offset + child.size;
                if (from > offset && to < end) return child.setSelection(anchor - offset - child.border, head - offset - child.border, root, force);
                offset = end;
            }
            var anchorDOM = this.domFromPos(anchor), headDOM = this.domFromPos(head), domSel = root.getSelection(), brKludge = !1;
            if ((result.gecko || result.safari) && anchor == head) {
                var prev = anchorDOM.node.childNodes[anchorDOM.offset - 1];
                brKludge = prev && ("BR" == prev.nodeName || "false" == prev.contentEditable);
            }
            if (force || brKludge && result.safari || !isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset) || !isEquivalentPosition(headDOM.node, headDOM.offset, domSel.focusNode, domSel.focusOffset)) {
                var domSelExtended = !1;
                if ((domSel.extend || anchor == head) && !brKludge) {
                    domSel.collapse(anchorDOM.node, anchorDOM.offset);
                    try {
                        anchor != head && domSel.extend(headDOM.node, headDOM.offset), domSelExtended = !0;
                    } catch (err) {
                        if (!(err instanceof DOMException)) throw err;
                    }
                }
                if (!domSelExtended) {
                    if (anchor > head) {
                        var tmp = anchorDOM;
                        anchorDOM = headDOM, headDOM = tmp;
                    }
                    var range = document.createRange();
                    range.setEnd(headDOM.node, headDOM.offset), range.setStart(anchorDOM.node, anchorDOM.offset), 
                    domSel.removeAllRanges(), domSel.addRange(range);
                }
            }
        }, ViewDesc.prototype.ignoreMutation = function(mutation) {
            return !this.contentDOM && "selection" != mutation.type;
        }, prototypeAccessors.contentLost.get = function() {
            return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
        }, ViewDesc.prototype.markDirty = function(from, to) {
            for (var offset = 0, i = 0; i < this.children.length; i++) {
                var child = this.children[i], end = offset + child.size;
                if (offset == end ? from <= end && to >= offset : from < end && to > offset) {
                    var startInside = offset + child.border, endInside = end - child.border;
                    if (from >= startInside && to <= endInside) return this.dirty = from == offset || to == end ? 2 : 1, 
                    void (from != startInside || to != endInside || !child.contentLost && child.dom.parentNode == this.contentDOM ? child.markDirty(from - startInside, to - startInside) : child.dirty = 3);
                    child.dirty = 3;
                }
                offset = end;
            }
            this.dirty = 2;
        }, ViewDesc.prototype.markParentsDirty = function() {
            for (var level = 1, node = this.parent; node; node = node.parent, level++) {
                var dirty = 1 == level ? 2 : 1;
                node.dirty < dirty && (node.dirty = dirty);
            }
        }, Object.defineProperties(ViewDesc.prototype, prototypeAccessors);
        var nothing = [], WidgetViewDesc = function(ViewDesc) {
            function WidgetViewDesc(parent, widget, view, pos) {
                var self, dom = widget.type.toDOM;
                if ("function" == typeof dom && (dom = dom(view, (function() {
                    return self ? self.parent ? self.parent.posBeforeChild(self) : void 0 : pos;
                }))), !widget.type.spec.raw) {
                    if (1 != dom.nodeType) {
                        var wrap = document.createElement("span");
                        wrap.appendChild(dom), dom = wrap;
                    }
                    dom.contentEditable = !1, dom.classList.add("ProseMirror-widget");
                }
                ViewDesc.call(this, parent, nothing, dom, null), this.widget = widget, self = this;
            }
            ViewDesc && (WidgetViewDesc.__proto__ = ViewDesc), WidgetViewDesc.prototype = Object.create(ViewDesc && ViewDesc.prototype), 
            WidgetViewDesc.prototype.constructor = WidgetViewDesc;
            var prototypeAccessors$1 = {
                beforePosition: {
                    configurable: !0
                }
            };
            return prototypeAccessors$1.beforePosition.get = function() {
                return this.widget.type.side < 0;
            }, WidgetViewDesc.prototype.matchesWidget = function(widget) {
                return 0 == this.dirty && widget.type.eq(this.widget.type);
            }, WidgetViewDesc.prototype.parseRule = function() {
                return {
                    ignore: !0
                };
            }, WidgetViewDesc.prototype.stopEvent = function(event) {
                var stop = this.widget.spec.stopEvent;
                return !!stop && stop(event);
            }, WidgetViewDesc.prototype.ignoreMutation = function(mutation) {
                return "selection" != mutation.type || this.widget.spec.ignoreSelection;
            }, Object.defineProperties(WidgetViewDesc.prototype, prototypeAccessors$1), WidgetViewDesc;
        }(ViewDesc), CompositionViewDesc = function(ViewDesc) {
            function CompositionViewDesc(parent, dom, textDOM, text) {
                ViewDesc.call(this, parent, nothing, dom, null), this.textDOM = textDOM, this.text = text;
            }
            ViewDesc && (CompositionViewDesc.__proto__ = ViewDesc), CompositionViewDesc.prototype = Object.create(ViewDesc && ViewDesc.prototype), 
            CompositionViewDesc.prototype.constructor = CompositionViewDesc;
            var prototypeAccessors$2 = {
                size: {
                    configurable: !0
                }
            };
            return prototypeAccessors$2.size.get = function() {
                return this.text.length;
            }, CompositionViewDesc.prototype.localPosFromDOM = function(dom, offset) {
                return dom != this.textDOM ? this.posAtStart + (offset ? this.size : 0) : this.posAtStart + offset;
            }, CompositionViewDesc.prototype.domFromPos = function(pos) {
                return {
                    node: this.textDOM,
                    offset: pos
                };
            }, CompositionViewDesc.prototype.ignoreMutation = function(mut) {
                return "characterData" === mut.type && mut.target.nodeValue == mut.oldValue;
            }, Object.defineProperties(CompositionViewDesc.prototype, prototypeAccessors$2), 
            CompositionViewDesc;
        }(ViewDesc), MarkViewDesc = function(ViewDesc) {
            function MarkViewDesc(parent, mark, dom, contentDOM) {
                ViewDesc.call(this, parent, [], dom, contentDOM), this.mark = mark;
            }
            return ViewDesc && (MarkViewDesc.__proto__ = ViewDesc), MarkViewDesc.prototype = Object.create(ViewDesc && ViewDesc.prototype), 
            MarkViewDesc.prototype.constructor = MarkViewDesc, MarkViewDesc.create = function(parent, mark, inline, view) {
                var custom = view.nodeViews[mark.type.name], spec = custom && custom(mark, view, inline);
                return spec && spec.dom || (spec = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.c.renderSpec(document, mark.type.spec.toDOM(mark, inline))), 
                new MarkViewDesc(parent, mark, spec.dom, spec.contentDOM || spec.dom);
            }, MarkViewDesc.prototype.parseRule = function() {
                return {
                    mark: this.mark.type.name,
                    attrs: this.mark.attrs,
                    contentElement: this.contentDOM
                };
            }, MarkViewDesc.prototype.matchesMark = function(mark) {
                return 3 != this.dirty && this.mark.eq(mark);
            }, MarkViewDesc.prototype.markDirty = function(from, to) {
                if (ViewDesc.prototype.markDirty.call(this, from, to), 0 != this.dirty) {
                    for (var parent = this.parent; !parent.node; ) parent = parent.parent;
                    parent.dirty < this.dirty && (parent.dirty = this.dirty), this.dirty = 0;
                }
            }, MarkViewDesc.prototype.slice = function(from, to, view) {
                var copy = MarkViewDesc.create(this.parent, this.mark, !0, view), nodes = this.children, size = this.size;
                to < size && (nodes = replaceNodes(nodes, to, size, view)), from > 0 && (nodes = replaceNodes(nodes, 0, from, view));
                for (var i = 0; i < nodes.length; i++) nodes[i].parent = copy;
                return copy.children = nodes, copy;
            }, MarkViewDesc;
        }(ViewDesc), NodeViewDesc = function(ViewDesc) {
            function NodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos) {
                ViewDesc.call(this, parent, node.isLeaf ? nothing : [], dom, contentDOM), this.nodeDOM = nodeDOM, 
                this.node = node, this.outerDeco = outerDeco, this.innerDeco = innerDeco, contentDOM && this.updateChildren(view, pos);
            }
            ViewDesc && (NodeViewDesc.__proto__ = ViewDesc), NodeViewDesc.prototype = Object.create(ViewDesc && ViewDesc.prototype), 
            NodeViewDesc.prototype.constructor = NodeViewDesc;
            var prototypeAccessors$3 = {
                size: {
                    configurable: !0
                },
                border: {
                    configurable: !0
                }
            };
            return NodeViewDesc.create = function(parent, node, outerDeco, innerDeco, view, pos) {
                var assign, descObj, custom = view.nodeViews[node.type.name], spec = custom && custom(node, view, (function() {
                    return descObj ? descObj.parent ? descObj.parent.posBeforeChild(descObj) : void 0 : pos;
                }), outerDeco), dom = spec && spec.dom, contentDOM = spec && spec.contentDOM;
                if (node.isText) if (dom) {
                    if (3 != dom.nodeType) throw new RangeError("Text must be rendered as a DOM text node");
                } else dom = document.createTextNode(node.text); else dom || (dom = (assign = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.c.renderSpec(document, node.type.spec.toDOM(node))).dom, 
                contentDOM = assign.contentDOM);
                contentDOM || node.isText || "BR" == dom.nodeName || (dom.hasAttribute("contenteditable") || (dom.contentEditable = !1), 
                node.type.spec.draggable && (dom.draggable = !0));
                var nodeDOM = dom;
                return dom = applyOuterDeco(dom, outerDeco, node), spec ? descObj = new CustomNodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, spec, view, pos + 1) : node.isText ? new TextViewDesc(parent, node, outerDeco, innerDeco, dom, nodeDOM, view) : new NodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos + 1);
            }, NodeViewDesc.prototype.parseRule = function() {
                var this$1 = this;
                if (this.node.type.spec.reparseInView) return null;
                var rule = {
                    node: this.node.type.name,
                    attrs: this.node.attrs
                };
                return this.node.type.spec.code && (rule.preserveWhitespace = "full"), this.contentDOM && !this.contentLost ? rule.contentElement = this.contentDOM : rule.getContent = function() {
                    return this$1.contentDOM ? prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.d.empty : this$1.node.content;
                }, rule;
            }, NodeViewDesc.prototype.matchesNode = function(node, outerDeco, innerDeco) {
                return 0 == this.dirty && node.eq(this.node) && sameOuterDeco(outerDeco, this.outerDeco) && innerDeco.eq(this.innerDeco);
            }, prototypeAccessors$3.size.get = function() {
                return this.node.nodeSize;
            }, prototypeAccessors$3.border.get = function() {
                return this.node.isLeaf ? 0 : 1;
            }, NodeViewDesc.prototype.updateChildren = function(view, pos) {
                var this$1 = this, inline = this.node.inlineContent, off = pos, composition = inline && view.composing && this.localCompositionNode(view, pos), updater = new ViewTreeUpdater(this, composition && composition.node);
                !function(parent, deco, onWidget, onNode) {
                    var locals = deco.locals(parent), offset = 0;
                    if (0 == locals.length) {
                        for (var i = 0; i < parent.childCount; i++) {
                            var child = parent.child(i);
                            onNode(child, locals, deco.forChild(offset, child), i), offset += child.nodeSize;
                        }
                        return;
                    }
                    for (var decoIndex = 0, active = [], restNode = null, parentIndex = 0; ;) {
                        if (decoIndex < locals.length && locals[decoIndex].to == offset) {
                            for (var widget = locals[decoIndex++], widgets = void 0; decoIndex < locals.length && locals[decoIndex].to == offset; ) (widgets || (widgets = [ widget ])).push(locals[decoIndex++]);
                            if (widgets) {
                                widgets.sort(compareSide);
                                for (var i$1 = 0; i$1 < widgets.length; i$1++) onWidget(widgets[i$1], parentIndex, !!restNode);
                            } else onWidget(widget, parentIndex, !!restNode);
                        }
                        var child$1 = void 0, index = void 0;
                        if (restNode) index = -1, child$1 = restNode, restNode = null; else {
                            if (!(parentIndex < parent.childCount)) break;
                            index = parentIndex, child$1 = parent.child(parentIndex++);
                        }
                        for (var i$2 = 0; i$2 < active.length; i$2++) active[i$2].to <= offset && active.splice(i$2--, 1);
                        for (;decoIndex < locals.length && locals[decoIndex].from <= offset && locals[decoIndex].to > offset; ) active.push(locals[decoIndex++]);
                        var end = offset + child$1.nodeSize;
                        if (child$1.isText) {
                            var cutAt = end;
                            decoIndex < locals.length && locals[decoIndex].from < cutAt && (cutAt = locals[decoIndex].from);
                            for (var i$3 = 0; i$3 < active.length; i$3++) active[i$3].to < cutAt && (cutAt = active[i$3].to);
                            cutAt < end && (restNode = child$1.cut(cutAt - offset), child$1 = child$1.cut(0, cutAt - offset), 
                            end = cutAt, index = -1);
                        }
                        onNode(child$1, active.length ? child$1.isInline && !child$1.isLeaf ? active.filter((function(d) {
                            return !d.inline;
                        })) : active.slice() : nothing, deco.forChild(offset, child$1), index), offset = end;
                    }
                }(this.node, this.innerDeco, (function(widget, i, insideNode) {
                    widget.spec.marks ? updater.syncToMarks(widget.spec.marks, inline, view) : widget.type.side >= 0 && !insideNode && updater.syncToMarks(i == this$1.node.childCount ? prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.e.none : this$1.node.child(i).marks, inline, view), 
                    updater.placeWidget(widget, view, off);
                }), (function(child, outerDeco, innerDeco, i) {
                    updater.syncToMarks(child.marks, inline, view), updater.findNodeMatch(child, outerDeco, innerDeco, i) || updater.updateNextNode(child, outerDeco, innerDeco, view, i) || updater.addNode(child, outerDeco, innerDeco, view, off), 
                    off += child.nodeSize;
                })), updater.syncToMarks(nothing, inline, view), this.node.isTextblock && updater.addTextblockHacks(), 
                updater.destroyRest(), (updater.changed || 2 == this.dirty) && (composition && this.protectLocalComposition(view, composition), 
                renderDescs(this.contentDOM, this.children, view), result.ios && function(dom) {
                    if ("UL" == dom.nodeName || "OL" == dom.nodeName) {
                        var oldCSS = dom.style.cssText;
                        dom.style.cssText = oldCSS + "; list-style: square !important", window.getComputedStyle(dom).listStyle, 
                        dom.style.cssText = oldCSS;
                    }
                }(this.dom));
            }, NodeViewDesc.prototype.localCompositionNode = function(view, pos) {
                var ref = view.state.selection, from = ref.from, to = ref.to;
                if (!(!(view.state.selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection) || from < pos || to > pos + this.node.content.size)) {
                    var sel = view.root.getSelection(), textNode = function(node, offset) {
                        for (;;) {
                            if (3 == node.nodeType) return node;
                            if (1 == node.nodeType && offset > 0) {
                                if (node.childNodes.length > offset && 3 == node.childNodes[offset].nodeType) return node.childNodes[offset];
                                offset = nodeSize(node = node.childNodes[offset - 1]);
                            } else {
                                if (!(1 == node.nodeType && offset < node.childNodes.length)) return null;
                                node = node.childNodes[offset], offset = 0;
                            }
                        }
                    }(sel.focusNode, sel.focusOffset);
                    if (textNode && this.dom.contains(textNode.parentNode)) {
                        var text = textNode.nodeValue, textPos = function(frag, text, from, to) {
                            for (var i = 0, pos = 0; i < frag.childCount && pos <= to; ) {
                                var child = frag.child(i++), childStart = pos;
                                if (pos += child.nodeSize, child.isText) {
                                    for (var str = child.text; i < frag.childCount; ) {
                                        var next = frag.child(i++);
                                        if (pos += next.nodeSize, !next.isText) break;
                                        str += next.text;
                                    }
                                    if (pos >= from) {
                                        var found = str.lastIndexOf(text, to - childStart);
                                        if (found >= 0 && found + text.length + childStart >= from) return childStart + found;
                                    }
                                }
                            }
                            return -1;
                        }(this.node.content, text, from - pos, to - pos);
                        return textPos < 0 ? null : {
                            node: textNode,
                            pos: textPos,
                            text: text
                        };
                    }
                }
            }, NodeViewDesc.prototype.protectLocalComposition = function(view, ref) {
                var node = ref.node, pos = ref.pos, text = ref.text;
                if (!this.getDesc(node)) {
                    for (var topNode = node; topNode.parentNode != this.contentDOM; topNode = topNode.parentNode) {
                        for (;topNode.previousSibling; ) topNode.parentNode.removeChild(topNode.previousSibling);
                        for (;topNode.nextSibling; ) topNode.parentNode.removeChild(topNode.nextSibling);
                        topNode.pmViewDesc && (topNode.pmViewDesc = null);
                    }
                    var desc = new CompositionViewDesc(this, topNode, node, text);
                    view.compositionNodes.push(desc), this.children = replaceNodes(this.children, pos, pos + text.length, view, desc);
                }
            }, NodeViewDesc.prototype.update = function(node, outerDeco, innerDeco, view) {
                return !(3 == this.dirty || !node.sameMarkup(this.node)) && (this.updateInner(node, outerDeco, innerDeco, view), 
                !0);
            }, NodeViewDesc.prototype.updateInner = function(node, outerDeco, innerDeco, view) {
                this.updateOuterDeco(outerDeco), this.node = node, this.innerDeco = innerDeco, this.contentDOM && this.updateChildren(view, this.posAtStart), 
                this.dirty = 0;
            }, NodeViewDesc.prototype.updateOuterDeco = function(outerDeco) {
                if (!sameOuterDeco(outerDeco, this.outerDeco)) {
                    var needsWrap = 1 != this.nodeDOM.nodeType, oldDOM = this.dom;
                    this.dom = patchOuterDeco(this.dom, this.nodeDOM, computeOuterDeco(this.outerDeco, this.node, needsWrap), computeOuterDeco(outerDeco, this.node, needsWrap)), 
                    this.dom != oldDOM && (oldDOM.pmViewDesc = null, this.dom.pmViewDesc = this), this.outerDeco = outerDeco;
                }
            }, NodeViewDesc.prototype.selectNode = function() {
                this.nodeDOM.classList.add("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || (this.dom.draggable = !0);
            }, NodeViewDesc.prototype.deselectNode = function() {
                this.nodeDOM.classList.remove("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || this.dom.removeAttribute("draggable");
            }, Object.defineProperties(NodeViewDesc.prototype, prototypeAccessors$3), NodeViewDesc;
        }(ViewDesc);
        function docViewDesc(doc, outerDeco, innerDeco, dom, view) {
            return applyOuterDeco(dom, outerDeco, doc), new NodeViewDesc(null, doc, outerDeco, innerDeco, dom, dom, dom, view, 0);
        }
        var TextViewDesc = function(NodeViewDesc) {
            function TextViewDesc(parent, node, outerDeco, innerDeco, dom, nodeDOM, view) {
                NodeViewDesc.call(this, parent, node, outerDeco, innerDeco, dom, null, nodeDOM, view);
            }
            return NodeViewDesc && (TextViewDesc.__proto__ = NodeViewDesc), TextViewDesc.prototype = Object.create(NodeViewDesc && NodeViewDesc.prototype), 
            TextViewDesc.prototype.constructor = TextViewDesc, TextViewDesc.prototype.parseRule = function() {
                for (var skip = this.nodeDOM.parentNode; skip && skip != this.dom && !skip.pmIsDeco; ) skip = skip.parentNode;
                return {
                    skip: skip || !0
                };
            }, TextViewDesc.prototype.update = function(node, outerDeco, _, view) {
                return !(3 == this.dirty || 0 != this.dirty && !this.inParent() || !node.sameMarkup(this.node)) && (this.updateOuterDeco(outerDeco), 
                0 == this.dirty && node.text == this.node.text || node.text == this.nodeDOM.nodeValue || (this.nodeDOM.nodeValue = node.text, 
                view.trackWrites == this.nodeDOM && (view.trackWrites = null)), this.node = node, 
                this.dirty = 0, !0);
            }, TextViewDesc.prototype.inParent = function() {
                for (var parentDOM = this.parent.contentDOM, n = this.nodeDOM; n; n = n.parentNode) if (n == parentDOM) return !0;
                return !1;
            }, TextViewDesc.prototype.domFromPos = function(pos) {
                return {
                    node: this.nodeDOM,
                    offset: pos
                };
            }, TextViewDesc.prototype.localPosFromDOM = function(dom, offset, bias) {
                return dom == this.nodeDOM ? this.posAtStart + Math.min(offset, this.node.text.length) : NodeViewDesc.prototype.localPosFromDOM.call(this, dom, offset, bias);
            }, TextViewDesc.prototype.ignoreMutation = function(mutation) {
                return "characterData" != mutation.type && "selection" != mutation.type;
            }, TextViewDesc.prototype.slice = function(from, to, view) {
                var node = this.node.cut(from, to), dom = document.createTextNode(node.text);
                return new TextViewDesc(this.parent, node, this.outerDeco, this.innerDeco, dom, dom, view);
            }, TextViewDesc;
        }(NodeViewDesc), BRHackViewDesc = function(ViewDesc) {
            function BRHackViewDesc() {
                ViewDesc.apply(this, arguments);
            }
            return ViewDesc && (BRHackViewDesc.__proto__ = ViewDesc), BRHackViewDesc.prototype = Object.create(ViewDesc && ViewDesc.prototype), 
            BRHackViewDesc.prototype.constructor = BRHackViewDesc, BRHackViewDesc.prototype.parseRule = function() {
                return {
                    ignore: !0
                };
            }, BRHackViewDesc.prototype.matchesHack = function() {
                return 0 == this.dirty;
            }, BRHackViewDesc;
        }(ViewDesc), CustomNodeViewDesc = function(NodeViewDesc) {
            function CustomNodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, spec, view, pos) {
                NodeViewDesc.call(this, parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos), 
                this.spec = spec;
            }
            return NodeViewDesc && (CustomNodeViewDesc.__proto__ = NodeViewDesc), CustomNodeViewDesc.prototype = Object.create(NodeViewDesc && NodeViewDesc.prototype), 
            CustomNodeViewDesc.prototype.constructor = CustomNodeViewDesc, CustomNodeViewDesc.prototype.update = function(node, outerDeco, innerDeco, view) {
                if (3 == this.dirty) return !1;
                if (this.spec.update) {
                    var result = this.spec.update(node, outerDeco);
                    return result && this.updateInner(node, outerDeco, innerDeco, view), result;
                }
                return !(!this.contentDOM && !node.isLeaf) && NodeViewDesc.prototype.update.call(this, node, outerDeco, innerDeco, view);
            }, CustomNodeViewDesc.prototype.selectNode = function() {
                this.spec.selectNode ? this.spec.selectNode() : NodeViewDesc.prototype.selectNode.call(this);
            }, CustomNodeViewDesc.prototype.deselectNode = function() {
                this.spec.deselectNode ? this.spec.deselectNode() : NodeViewDesc.prototype.deselectNode.call(this);
            }, CustomNodeViewDesc.prototype.setSelection = function(anchor, head, root, force) {
                this.spec.setSelection ? this.spec.setSelection(anchor, head, root) : NodeViewDesc.prototype.setSelection.call(this, anchor, head, root, force);
            }, CustomNodeViewDesc.prototype.destroy = function() {
                this.spec.destroy && this.spec.destroy(), NodeViewDesc.prototype.destroy.call(this);
            }, CustomNodeViewDesc.prototype.stopEvent = function(event) {
                return !!this.spec.stopEvent && this.spec.stopEvent(event);
            }, CustomNodeViewDesc.prototype.ignoreMutation = function(mutation) {
                return this.spec.ignoreMutation ? this.spec.ignoreMutation(mutation) : NodeViewDesc.prototype.ignoreMutation.call(this, mutation);
            }, CustomNodeViewDesc;
        }(NodeViewDesc);
        function renderDescs(parentDOM, descs, view) {
            for (var dom = parentDOM.firstChild, written = !1, i = 0; i < descs.length; i++) {
                var desc = descs[i], childDOM = desc.dom;
                if (childDOM.parentNode == parentDOM) {
                    for (;childDOM != dom; ) dom = rm(dom), written = !0;
                    dom = dom.nextSibling;
                } else written = !0, parentDOM.insertBefore(childDOM, dom);
                if (desc instanceof MarkViewDesc) {
                    var pos = dom ? dom.previousSibling : parentDOM.lastChild;
                    renderDescs(desc.contentDOM, desc.children, view), dom = pos ? pos.nextSibling : parentDOM.firstChild;
                }
            }
            for (;dom; ) dom = rm(dom), written = !0;
            written && view.trackWrites == parentDOM && (view.trackWrites = null);
        }
        function OuterDecoLevel(nodeName) {
            nodeName && (this.nodeName = nodeName);
        }
        OuterDecoLevel.prototype = Object.create(null);
        var noDeco = [ new OuterDecoLevel ];
        function computeOuterDeco(outerDeco, node, needsWrap) {
            if (0 == outerDeco.length) return noDeco;
            for (var top = needsWrap ? noDeco[0] : new OuterDecoLevel, result = [ top ], i = 0; i < outerDeco.length; i++) {
                var attrs = outerDeco[i].type.attrs, cur = top;
                if (attrs) for (var name in attrs.nodeName && result.push(cur = new OuterDecoLevel(attrs.nodeName)), 
                attrs) {
                    var val = attrs[name];
                    null != val && (needsWrap && 1 == result.length && result.push(cur = top = new OuterDecoLevel(node.isInline ? "span" : "div")), 
                    "class" == name ? cur.class = (cur.class ? cur.class + " " : "") + val : "style" == name ? cur.style = (cur.style ? cur.style + ";" : "") + val : "nodeName" != name && (cur[name] = val));
                }
            }
            return result;
        }
        function patchOuterDeco(outerDOM, nodeDOM, prevComputed, curComputed) {
            if (prevComputed == noDeco && curComputed == noDeco) return nodeDOM;
            for (var curDOM = nodeDOM, i = 0; i < curComputed.length; i++) {
                var deco = curComputed[i], prev = prevComputed[i];
                if (i) {
                    var parent = void 0;
                    prev && prev.nodeName == deco.nodeName && curDOM != outerDOM && (parent = curDOM.parentNode) && parent.tagName.toLowerCase() == deco.nodeName || ((parent = document.createElement(deco.nodeName)).pmIsDeco = !0, 
                    parent.appendChild(curDOM), prev = noDeco[0]), curDOM = parent;
                }
                patchAttributes(curDOM, prev || noDeco[0], deco);
            }
            return curDOM;
        }
        function patchAttributes(dom, prev, cur) {
            for (var name in prev) "class" == name || "style" == name || "nodeName" == name || name in cur || dom.removeAttribute(name);
            for (var name$1 in cur) "class" != name$1 && "style" != name$1 && "nodeName" != name$1 && cur[name$1] != prev[name$1] && dom.setAttribute(name$1, cur[name$1]);
            if (prev.class != cur.class) {
                for (var prevList = prev.class ? prev.class.split(" ") : nothing, curList = cur.class ? cur.class.split(" ") : nothing, i = 0; i < prevList.length; i++) -1 == curList.indexOf(prevList[i]) && dom.classList.remove(prevList[i]);
                for (var i$1 = 0; i$1 < curList.length; i$1++) -1 == prevList.indexOf(curList[i$1]) && dom.classList.add(curList[i$1]);
            }
            if (prev.style != cur.style) {
                if (prev.style) for (var m, prop = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g; m = prop.exec(prev.style); ) dom.style.removeProperty(m[1]);
                cur.style && (dom.style.cssText += cur.style);
            }
        }
        function applyOuterDeco(dom, deco, node) {
            return patchOuterDeco(dom, dom, noDeco, computeOuterDeco(deco, node, 1 != dom.nodeType));
        }
        function sameOuterDeco(a, b) {
            if (a.length != b.length) return !1;
            for (var i = 0; i < a.length; i++) if (!a[i].type.eq(b[i].type)) return !1;
            return !0;
        }
        function rm(dom) {
            var next = dom.nextSibling;
            return dom.parentNode.removeChild(dom), next;
        }
        var ViewTreeUpdater = function(top, lockedNode) {
            this.top = top, this.lock = lockedNode, this.index = 0, this.stack = [], this.changed = !1;
            var pre = function(frag, descs) {
                for (var result = [], end = frag.childCount, i = descs.length - 1; end > 0 && i >= 0; i--) {
                    var desc = descs[i], node = desc.node;
                    if (node) {
                        if (node != frag.child(end - 1)) break;
                        result.push(desc), --end;
                    }
                }
                return {
                    nodes: result.reverse(),
                    offset: end
                };
            }(top.node.content, top.children);
            this.preMatched = pre.nodes, this.preMatchOffset = pre.offset;
        };
        function compareSide(a, b) {
            return a.type.side - b.type.side;
        }
        function replaceNodes(nodes, from, to, view, replacement) {
            for (var result = [], i = 0, off = 0; i < nodes.length; i++) {
                var child = nodes[i], start = off, end = off += child.size;
                start >= to || end <= from ? result.push(child) : (start < from && result.push(child.slice(0, from - start, view)), 
                replacement && (result.push(replacement), replacement = null), end > to && result.push(child.slice(to - start, child.size, view)));
            }
            return result;
        }
        function selectionFromDOM(view, origin) {
            var domSel = view.root.getSelection(), doc = view.state.doc;
            if (!domSel.focusNode) return null;
            var nearestDesc = view.docView.nearestDesc(domSel.focusNode), inWidget = nearestDesc && 0 == nearestDesc.size, head = view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset);
            if (head < 0) return null;
            var $anchor, selection, $head = doc.resolve(head);
            if (selectionCollapsed(domSel)) {
                for ($anchor = $head; nearestDesc && !nearestDesc.node; ) nearestDesc = nearestDesc.parent;
                if (nearestDesc && nearestDesc.node.isAtom && prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection.isSelectable(nearestDesc.node) && nearestDesc.parent && (!nearestDesc.node.isInline || !function(node, offset, parent) {
                    for (var atStart = 0 == offset, atEnd = offset == nodeSize(node); atStart || atEnd; ) {
                        if (node == parent) return !0;
                        var index = domIndex(node);
                        if (!(node = node.parentNode)) return !1;
                        atStart = atStart && 0 == index, atEnd = atEnd && index == nodeSize(node);
                    }
                }(domSel.focusNode, domSel.focusOffset, nearestDesc.dom))) {
                    var pos = nearestDesc.posBefore;
                    selection = new prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection(head == pos ? $head : doc.resolve(pos));
                }
            } else {
                var anchor = view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset);
                if (anchor < 0) return null;
                $anchor = doc.resolve(anchor);
            }
            selection || (selection = selectionBetween(view, $anchor, $head, "pointer" == origin || view.state.selection.head < $head.pos && !inWidget ? 1 : -1));
            return selection;
        }
        function selectionToDOM(view, force) {
            var sel = view.state.selection;
            if (syncNodeSelection(view, sel), view.editable ? view.hasFocus() : hasSelection(view) && document.activeElement && document.activeElement.contains(view.dom)) {
                if (view.domObserver.disconnectSelection(), view.cursorWrapper) !function(view) {
                    var domSel = view.root.getSelection(), range = document.createRange(), node = view.cursorWrapper.dom, img = "IMG" == node.nodeName;
                    img ? range.setEnd(node.parentNode, domIndex(node) + 1) : range.setEnd(node, 0);
                    range.collapse(!1), domSel.removeAllRanges(), domSel.addRange(range), !img && !view.state.selection.visible && result.ie && result.ie_version <= 11 && (node.disabled = !0, 
                    node.disabled = !1);
                }(view); else {
                    var resetEditableFrom, resetEditableTo, anchor = sel.anchor, head = sel.head;
                    !brokenSelectBetweenUneditable || sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection || (sel.$from.parent.inlineContent || (resetEditableFrom = temporarilyEditableNear(view, sel.from)), 
                    sel.empty || sel.$from.parent.inlineContent || (resetEditableTo = temporarilyEditableNear(view, sel.to))), 
                    view.docView.setSelection(anchor, head, view.root, force), brokenSelectBetweenUneditable && (resetEditableFrom && resetEditable(resetEditableFrom), 
                    resetEditableTo && resetEditable(resetEditableTo)), sel.visible ? view.dom.classList.remove("ProseMirror-hideselection") : (view.dom.classList.add("ProseMirror-hideselection"), 
                    "onselectionchange" in document && function(view) {
                        var doc = view.dom.ownerDocument;
                        doc.removeEventListener("selectionchange", view.hideSelectionGuard);
                        var domSel = view.root.getSelection(), node = domSel.anchorNode, offset = domSel.anchorOffset;
                        doc.addEventListener("selectionchange", view.hideSelectionGuard = function() {
                            domSel.anchorNode == node && domSel.anchorOffset == offset || (doc.removeEventListener("selectionchange", view.hideSelectionGuard), 
                            view.dom.classList.remove("ProseMirror-hideselection"));
                        });
                    }(view));
                }
                view.domObserver.setCurSelection(), view.domObserver.connectSelection();
            }
        }
        ViewTreeUpdater.prototype.getPreMatch = function(index) {
            return index >= this.preMatchOffset ? this.preMatched[index - this.preMatchOffset] : null;
        }, ViewTreeUpdater.prototype.destroyBetween = function(start, end) {
            if (start != end) {
                for (var i = start; i < end; i++) this.top.children[i].destroy();
                this.top.children.splice(start, end - start), this.changed = !0;
            }
        }, ViewTreeUpdater.prototype.destroyRest = function() {
            this.destroyBetween(this.index, this.top.children.length);
        }, ViewTreeUpdater.prototype.syncToMarks = function(marks, inline, view) {
            for (var keep = 0, depth = this.stack.length >> 1, maxKeep = Math.min(depth, marks.length); keep < maxKeep && (keep == depth - 1 ? this.top : this.stack[keep + 1 << 1]).matchesMark(marks[keep]) && !1 !== marks[keep].type.spec.spanning; ) keep++;
            for (;keep < depth; ) this.destroyRest(), this.top.dirty = 0, this.index = this.stack.pop(), 
            this.top = this.stack.pop(), depth--;
            for (;depth < marks.length; ) {
                this.stack.push(this.top, this.index + 1);
                for (var found = -1, i = this.index; i < Math.min(this.index + 3, this.top.children.length); i++) if (this.top.children[i].matchesMark(marks[depth])) {
                    found = i;
                    break;
                }
                if (found > -1) found > this.index && (this.changed = !0, this.destroyBetween(this.index, found)), 
                this.top = this.top.children[this.index]; else {
                    var markDesc = MarkViewDesc.create(this.top, marks[depth], inline, view);
                    this.top.children.splice(this.index, 0, markDesc), this.top = markDesc, this.changed = !0;
                }
                this.index = 0, depth++;
            }
        }, ViewTreeUpdater.prototype.findNodeMatch = function(node, outerDeco, innerDeco, index) {
            var found = -1, preMatch = index < 0 ? void 0 : this.getPreMatch(index), children = this.top.children;
            if (preMatch && preMatch.matchesNode(node, outerDeco, innerDeco)) found = children.indexOf(preMatch); else for (var i = this.index, e = Math.min(children.length, i + 5); i < e; i++) {
                var child = children[i];
                if (child.matchesNode(node, outerDeco, innerDeco) && this.preMatched.indexOf(child) < 0) {
                    found = i;
                    break;
                }
            }
            return !(found < 0) && (this.destroyBetween(this.index, found), this.index++, !0);
        }, ViewTreeUpdater.prototype.updateNextNode = function(node, outerDeco, innerDeco, view, index) {
            for (var i = this.index; i < this.top.children.length; i++) {
                var next = this.top.children[i];
                if (next instanceof NodeViewDesc) {
                    var preMatch = this.preMatched.indexOf(next);
                    if (preMatch > -1 && preMatch + this.preMatchOffset != index) return !1;
                    var nextDOM = next.dom;
                    if (!(this.lock && (nextDOM == this.lock || 1 == nextDOM.nodeType && nextDOM.contains(this.lock.parentNode)) && !(node.isText && next.node && next.node.isText && next.nodeDOM.nodeValue == node.text && 3 != next.dirty && sameOuterDeco(outerDeco, next.outerDeco))) && next.update(node, outerDeco, innerDeco, view)) return this.destroyBetween(this.index, i), 
                    next.dom != nextDOM && (this.changed = !0), this.index++, !0;
                    break;
                }
            }
            return !1;
        }, ViewTreeUpdater.prototype.addNode = function(node, outerDeco, innerDeco, view, pos) {
            this.top.children.splice(this.index++, 0, NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view, pos)), 
            this.changed = !0;
        }, ViewTreeUpdater.prototype.placeWidget = function(widget, view, pos) {
            var next = this.index < this.top.children.length ? this.top.children[this.index] : null;
            if (!next || !next.matchesWidget(widget) || widget != next.widget && next.widget.type.toDOM.parentNode) {
                var desc = new WidgetViewDesc(this.top, widget, view, pos);
                this.top.children.splice(this.index++, 0, desc), this.changed = !0;
            } else this.index++;
        }, ViewTreeUpdater.prototype.addTextblockHacks = function() {
            for (var lastChild = this.top.children[this.index - 1]; lastChild instanceof MarkViewDesc; ) lastChild = lastChild.children[lastChild.children.length - 1];
            if (!lastChild || !(lastChild instanceof TextViewDesc) || /\n$/.test(lastChild.node.text)) if (this.index < this.top.children.length && this.top.children[this.index].matchesHack()) this.index++; else {
                var dom = document.createElement("br");
                this.top.children.splice(this.index++, 0, new BRHackViewDesc(this.top, nothing, dom, null)), 
                this.changed = !0;
            }
        };
        var brokenSelectBetweenUneditable = result.safari || result.chrome && result.chrome_version < 63;
        function temporarilyEditableNear(view, pos) {
            var ref = view.docView.domFromPos(pos), node = ref.node, offset = ref.offset, after = offset < node.childNodes.length ? node.childNodes[offset] : null, before = offset ? node.childNodes[offset - 1] : null;
            if (result.safari && after && "false" == after.contentEditable) return setEditable(after);
            if (!(after && "false" != after.contentEditable || before && "false" != before.contentEditable)) {
                if (after) return setEditable(after);
                if (before) return setEditable(before);
            }
        }
        function setEditable(element) {
            return element.contentEditable = "true", result.safari && element.draggable && (element.draggable = !1, 
            element.wasDraggable = !0), element;
        }
        function resetEditable(element) {
            element.contentEditable = "false", element.wasDraggable && (element.draggable = !0, 
            element.wasDraggable = null);
        }
        function syncNodeSelection(view, sel) {
            if (sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection) {
                var desc = view.docView.descAt(sel.from);
                desc != view.lastSelectedViewDesc && (clearNodeSelection(view), desc && desc.selectNode(), 
                view.lastSelectedViewDesc = desc);
            } else clearNodeSelection(view);
        }
        function clearNodeSelection(view) {
            view.lastSelectedViewDesc && (view.lastSelectedViewDesc.parent && view.lastSelectedViewDesc.deselectNode(), 
            view.lastSelectedViewDesc = null);
        }
        function selectionBetween(view, $anchor, $head, bias) {
            return view.someProp("createSelectionBetween", (function(f) {
                return f(view, $anchor, $head);
            })) || prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection.between($anchor, $head, bias);
        }
        function hasSelection(view) {
            var sel = view.root.getSelection();
            if (!sel.anchorNode) return !1;
            try {
                return view.dom.contains(3 == sel.anchorNode.nodeType ? sel.anchorNode.parentNode : sel.anchorNode) && (view.editable || view.dom.contains(3 == sel.focusNode.nodeType ? sel.focusNode.parentNode : sel.focusNode));
            } catch (_) {
                return !1;
            }
        }
        function moveSelectionBlock(state, dir) {
            var ref = state.selection, $anchor = ref.$anchor, $head = ref.$head, $side = dir > 0 ? $anchor.max($head) : $anchor.min($head), $start = $side.parent.inlineContent ? $side.depth ? state.doc.resolve(dir > 0 ? $side.after() : $side.before()) : null : $side;
            return $start && prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Selection.findFrom($start, dir);
        }
        function apply(view, sel) {
            return view.dispatch(view.state.tr.setSelection(sel).scrollIntoView()), !0;
        }
        function selectHorizontally(view, dir, mods) {
            var sel = view.state.selection;
            if (!(sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection)) {
                if (sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection && sel.node.isInline) return apply(view, new prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection(dir > 0 ? sel.$to : sel.$from));
                var next$1 = moveSelectionBlock(view.state, dir);
                return !!next$1 && apply(view, next$1);
            }
            if (!sel.empty || mods.indexOf("s") > -1) return !1;
            if (view.endOfTextblock(dir > 0 ? "right" : "left")) {
                var next = moveSelectionBlock(view.state, dir);
                return !!(next && next instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection) && apply(view, next);
            }
            if (!(result.mac && mods.indexOf("m") > -1)) {
                var desc, $head = sel.$head, node = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter;
                if (!node || node.isText) return !1;
                var nodePos = dir < 0 ? $head.pos - node.nodeSize : $head.pos;
                return !!(node.isAtom || (desc = view.docView.descAt(nodePos)) && !desc.contentDOM) && (prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection.isSelectable(node) ? apply(view, new prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection(dir < 0 ? view.state.doc.resolve($head.pos - node.nodeSize) : $head)) : !!result.webkit && apply(view, new prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection(view.state.doc.resolve(dir < 0 ? nodePos : nodePos + node.nodeSize))));
            }
        }
        function nodeLen(node) {
            return 3 == node.nodeType ? node.nodeValue.length : node.childNodes.length;
        }
        function isIgnorable(dom) {
            var desc = dom.pmViewDesc;
            return desc && 0 == desc.size && (dom.nextSibling || "BR" != dom.nodeName);
        }
        function skipIgnoredNodesLeft(view) {
            var sel = view.root.getSelection(), node = sel.focusNode, offset = sel.focusOffset;
            if (node) {
                var moveNode, moveOffset, force = !1;
                for (result.gecko && 1 == node.nodeType && offset < nodeLen(node) && isIgnorable(node.childNodes[offset]) && (force = !0); ;) if (offset > 0) {
                    if (1 != node.nodeType) break;
                    var before = node.childNodes[offset - 1];
                    if (isIgnorable(before)) moveNode = node, moveOffset = --offset; else {
                        if (3 != before.nodeType) break;
                        offset = (node = before).nodeValue.length;
                    }
                } else {
                    if (isBlockNode(node)) break;
                    for (var prev = node.previousSibling; prev && isIgnorable(prev); ) moveNode = node.parentNode, 
                    moveOffset = domIndex(prev), prev = prev.previousSibling;
                    if (prev) offset = nodeLen(node = prev); else {
                        if ((node = node.parentNode) == view.dom) break;
                        offset = 0;
                    }
                }
                force ? setSelFocus(view, sel, node, offset) : moveNode && setSelFocus(view, sel, moveNode, moveOffset);
            }
        }
        function skipIgnoredNodesRight(view) {
            var sel = view.root.getSelection(), node = sel.focusNode, offset = sel.focusOffset;
            if (node) {
                for (var moveNode, moveOffset, len = nodeLen(node); ;) if (offset < len) {
                    if (1 != node.nodeType) break;
                    if (!isIgnorable(node.childNodes[offset])) break;
                    moveNode = node, moveOffset = ++offset;
                } else {
                    if (isBlockNode(node)) break;
                    for (var next = node.nextSibling; next && isIgnorable(next); ) moveNode = next.parentNode, 
                    moveOffset = domIndex(next) + 1, next = next.nextSibling;
                    if (next) offset = 0, len = nodeLen(node = next); else {
                        if ((node = node.parentNode) == view.dom) break;
                        offset = len = 0;
                    }
                }
                moveNode && setSelFocus(view, sel, moveNode, moveOffset);
            }
        }
        function isBlockNode(dom) {
            var desc = dom.pmViewDesc;
            return desc && desc.node && desc.node.isBlock;
        }
        function setSelFocus(view, sel, node, offset) {
            if (selectionCollapsed(sel)) {
                var range = document.createRange();
                range.setEnd(node, offset), range.setStart(node, offset), sel.removeAllRanges(), 
                sel.addRange(range);
            } else sel.extend && sel.extend(node, offset);
            view.domObserver.setCurSelection();
            var state = view.state;
            setTimeout((function() {
                view.state == state && selectionToDOM(view);
            }), 50);
        }
        function selectVertically(view, dir, mods) {
            var sel = view.state.selection;
            if (sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection && !sel.empty || mods.indexOf("s") > -1) return !1;
            if (result.mac && mods.indexOf("m") > -1) return !1;
            var $from = sel.$from, $to = sel.$to;
            if (!$from.parent.inlineContent || view.endOfTextblock(dir < 0 ? "up" : "down")) {
                var next = moveSelectionBlock(view.state, dir);
                if (next && next instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection) return apply(view, next);
            }
            if (!$from.parent.inlineContent) {
                var beyond = prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Selection.findFrom(dir < 0 ? $from : $to, dir);
                return !beyond || apply(view, beyond);
            }
            return !1;
        }
        function stopNativeHorizontalDelete(view, dir) {
            if (!(view.state.selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection)) return !0;
            var ref = view.state.selection, $head = ref.$head, $anchor = ref.$anchor, empty = ref.empty;
            if (!$head.sameParent($anchor)) return !0;
            if (!empty) return !1;
            if (view.endOfTextblock(dir > 0 ? "forward" : "backward")) return !0;
            var nextNode = !$head.textOffset && (dir < 0 ? $head.nodeBefore : $head.nodeAfter);
            if (nextNode && !nextNode.isText) {
                var tr = view.state.tr;
                return dir < 0 ? tr.delete($head.pos - nextNode.nodeSize, $head.pos) : tr.delete($head.pos, $head.pos + nextNode.nodeSize), 
                view.dispatch(tr), !0;
            }
            return !1;
        }
        function switchEditable(view, node, state) {
            view.domObserver.stop(), node.contentEditable = state, view.domObserver.start();
        }
        function captureKeyDown(view, event) {
            var code = event.keyCode, mods = function(event) {
                var result = "";
                return event.ctrlKey && (result += "c"), event.metaKey && (result += "m"), event.altKey && (result += "a"), 
                event.shiftKey && (result += "s"), result;
            }(event);
            return 8 == code || result.mac && 72 == code && "c" == mods ? stopNativeHorizontalDelete(view, -1) || skipIgnoredNodesLeft(view) : 46 == code || result.mac && 68 == code && "c" == mods ? stopNativeHorizontalDelete(view, 1) || skipIgnoredNodesRight(view) : 13 == code || 27 == code || (37 == code ? selectHorizontally(view, -1, mods) || skipIgnoredNodesLeft(view) : 39 == code ? selectHorizontally(view, 1, mods) || skipIgnoredNodesRight(view) : 38 == code ? selectVertically(view, -1, mods) || skipIgnoredNodesLeft(view) : 40 == code ? function(view) {
                if (result.safari && !(view.state.selection.$head.parentOffset > 0)) {
                    var ref = view.root.getSelection(), focusNode = ref.focusNode, focusOffset = ref.focusOffset;
                    if (focusNode && 1 == focusNode.nodeType && 0 == focusOffset && focusNode.firstChild && "false" == focusNode.firstChild.contentEditable) {
                        var child = focusNode.firstChild;
                        switchEditable(view, child, !0), setTimeout((function() {
                            return switchEditable(view, child, !1);
                        }), 20);
                    }
                }
            }(view) || selectVertically(view, 1, mods) || skipIgnoredNodesRight(view) : mods == (result.mac ? "m" : "c") && (66 == code || 73 == code || 89 == code || 90 == code));
        }
        function ruleFromNode(dom) {
            var desc = dom.pmViewDesc;
            if (desc) return desc.parseRule();
            if ("BR" == dom.nodeName && dom.parentNode) {
                if (result.safari && /^(ul|ol)$/i.test(dom.parentNode.nodeName)) {
                    var skip = document.createElement("div");
                    return skip.appendChild(document.createElement("li")), {
                        skip: skip
                    };
                }
                if (dom.parentNode.lastChild == dom || result.safari && /^(tr|table)$/i.test(dom.parentNode.nodeName)) return {
                    ignore: !0
                };
            } else if ("IMG" == dom.nodeName && dom.getAttribute("mark-placeholder")) return {
                ignore: !0
            };
        }
        function readDOMChange(view, from, to, typeOver, addedNodes) {
            if (from < 0) {
                var origin = view.lastSelectionTime > Date.now() - 50 ? view.lastSelectionOrigin : null, newSel = selectionFromDOM(view, origin);
                if (newSel && !view.state.selection.eq(newSel)) {
                    var tr$1 = view.state.tr.setSelection(newSel);
                    "pointer" == origin ? tr$1.setMeta("pointer", !0) : "key" == origin && tr$1.scrollIntoView(), 
                    view.dispatch(tr$1);
                }
            } else {
                var $before = view.state.doc.resolve(from), shared = $before.sharedDepth(to);
                from = $before.before(shared + 1), to = view.state.doc.resolve(to).after(shared + 1);
                var preferredPos, preferredSide, sel = view.state.selection, parse = function(view, from_, to_) {
                    var ref = view.docView.parseRange(from_, to_), parent = ref.node, fromOffset = ref.fromOffset, toOffset = ref.toOffset, from = ref.from, to = ref.to, domSel = view.root.getSelection(), find = null, anchor = domSel.anchorNode;
                    if (anchor && view.dom.contains(1 == anchor.nodeType ? anchor : anchor.parentNode) && (find = [ {
                        node: anchor,
                        offset: domSel.anchorOffset
                    } ], selectionCollapsed(domSel) || find.push({
                        node: domSel.focusNode,
                        offset: domSel.focusOffset
                    })), result.chrome && 8 === view.lastKeyCode) for (var off = toOffset; off > fromOffset; off--) {
                        var node = parent.childNodes[off - 1], desc = node.pmViewDesc;
                        if ("BR" == node.nodeType && !desc) {
                            toOffset = off;
                            break;
                        }
                        if (!desc || desc.size) break;
                    }
                    var startDoc = view.state.doc, parser = view.someProp("domParser") || prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.b.fromSchema(view.state.schema), $from = startDoc.resolve(from), sel = null, doc = parser.parse(parent, {
                        topNode: $from.parent,
                        topMatch: $from.parent.contentMatchAt($from.index()),
                        topOpen: !0,
                        from: fromOffset,
                        to: toOffset,
                        preserveWhitespace: !$from.parent.type.spec.code || "full",
                        editableContent: !0,
                        findPositions: find,
                        ruleFromNode: ruleFromNode,
                        context: $from
                    });
                    if (find && null != find[0].pos) {
                        var anchor$1 = find[0].pos, head = find[1] && find[1].pos;
                        null == head && (head = anchor$1), sel = {
                            anchor: anchor$1 + from,
                            head: head + from
                        };
                    }
                    return {
                        doc: doc,
                        sel: sel,
                        from: from,
                        to: to
                    };
                }(view, from, to), doc = view.state.doc, compare = doc.slice(parse.from, parse.to);
                8 === view.lastKeyCode && Date.now() - 100 < view.lastKeyCodeTime ? (preferredPos = view.state.selection.to, 
                preferredSide = "end") : (preferredPos = view.state.selection.from, preferredSide = "start"), 
                view.lastKeyCode = null;
                var change = function(a, b, pos, preferredPos, preferredSide) {
                    var start = a.findDiffStart(b, pos);
                    if (null == start) return null;
                    var ref = a.findDiffEnd(b, pos + a.size, pos + b.size), endA = ref.a, endB = ref.b;
                    if ("end" == preferredSide) {
                        preferredPos -= endA + Math.max(0, start - Math.min(endA, endB)) - start;
                    }
                    if (endA < start && a.size < b.size) {
                        endB = (start -= preferredPos <= start && preferredPos >= endA ? start - preferredPos : 0) + (endB - endA), 
                        endA = start;
                    } else if (endB < start) {
                        endA = (start -= preferredPos <= start && preferredPos >= endB ? start - preferredPos : 0) + (endA - endB), 
                        endB = start;
                    }
                    return {
                        start: start,
                        endA: endA,
                        endB: endB
                    };
                }(compare.content, parse.doc.content, parse.from, preferredPos, preferredSide);
                if (!change) {
                    if (!(typeOver && sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection && !sel.empty && sel.$head.sameParent(sel.$anchor)) || view.composing || parse.sel && parse.sel.anchor != parse.sel.head) {
                        if (parse.sel) {
                            var sel$1 = resolveSelection(view, view.state.doc, parse.sel);
                            sel$1 && !sel$1.eq(view.state.selection) && view.dispatch(view.state.tr.setSelection(sel$1));
                        }
                        return;
                    }
                    change = {
                        start: sel.from,
                        endA: sel.to,
                        endB: sel.to
                    };
                }
                view.domChangeCount++, view.state.selection.from < view.state.selection.to && change.start == change.endB && view.state.selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection && (change.start > view.state.selection.from && change.start <= view.state.selection.from + 2 ? change.start = view.state.selection.from : change.endA < view.state.selection.to && change.endA >= view.state.selection.to - 2 && (change.endB += view.state.selection.to - change.endA, 
                change.endA = view.state.selection.to)), result.ie && result.ie_version <= 11 && change.endB == change.start + 1 && change.endA == change.start && change.start > parse.from && "  " == parse.doc.textBetween(change.start - parse.from - 1, change.start - parse.from + 1) && (change.start--, 
                change.endA--, change.endB--);
                var nextSel, $from = parse.doc.resolveNoCache(change.start - parse.from), $to = parse.doc.resolveNoCache(change.endB - parse.from), inlineChange = $from.sameParent($to) && $from.parent.inlineContent;
                if ((result.ios && view.lastIOSEnter > Date.now() - 225 && (!inlineChange || addedNodes.some((function(n) {
                    return "DIV" == n.nodeName || "P" == n.nodeName;
                }))) || !inlineChange && $from.pos < parse.doc.content.size && (nextSel = prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Selection.findFrom(parse.doc.resolve($from.pos + 1), 1, !0)) && nextSel.head == $to.pos) && view.someProp("handleKeyDown", (function(f) {
                    return f(view, keyEvent(13, "Enter"));
                }))) view.lastIOSEnter = 0; else if (view.state.selection.anchor > change.start && function(old, start, end, $newStart, $newEnd) {
                    if (!$newStart.parent.isTextblock || end - start <= $newEnd.pos - $newStart.pos || skipClosingAndOpening($newStart, !0, !1) < $newEnd.pos) return !1;
                    var $start = old.resolve(start);
                    if ($start.parentOffset < $start.parent.content.size || !$start.parent.isTextblock) return !1;
                    var $next = old.resolve(skipClosingAndOpening($start, !0, !0));
                    if (!$next.parent.isTextblock || $next.pos > end || skipClosingAndOpening($next, !0, !1) < end) return !1;
                    return $newStart.parent.content.cut($newStart.parentOffset).eq($next.parent.content);
                }(doc, change.start, change.endA, $from, $to) && view.someProp("handleKeyDown", (function(f) {
                    return f(view, keyEvent(8, "Backspace"));
                }))) result.android && result.chrome && view.domObserver.suppressSelectionUpdates(); else {
                    result.android && !inlineChange && $from.start() != $to.start() && 0 == $to.parentOffset && $from.depth == $to.depth && parse.sel && parse.sel.anchor == parse.sel.head && parse.sel.head == change.endA && (change.endB -= 2, 
                    $to = parse.doc.resolveNoCache(change.endB - parse.from), setTimeout((function() {
                        view.someProp("handleKeyDown", (function(f) {
                            return f(view, keyEvent(13, "Enter"));
                        }));
                    }), 20));
                    var tr, storedMarks, markChange, $from1, chFrom = change.start, chTo = change.endA;
                    if (inlineChange) if ($from.pos == $to.pos) result.ie && result.ie_version <= 11 && 0 == $from.parentOffset && (view.domObserver.suppressSelectionUpdates(), 
                    setTimeout((function() {
                        return selectionToDOM(view);
                    }), 20)), tr = view.state.tr.delete(chFrom, chTo), storedMarks = doc.resolve(change.start).marksAcross(doc.resolve(change.endA)); else if (change.endA == change.endB && ($from1 = doc.resolve(change.start)) && (markChange = function(cur, prev) {
                        for (var type, mark, update, curMarks = cur.firstChild.marks, prevMarks = prev.firstChild.marks, added = curMarks, removed = prevMarks, i = 0; i < prevMarks.length; i++) added = prevMarks[i].removeFromSet(added);
                        for (var i$1 = 0; i$1 < curMarks.length; i$1++) removed = curMarks[i$1].removeFromSet(removed);
                        if (1 == added.length && 0 == removed.length) mark = added[0], type = "add", update = function(node) {
                            return node.mark(mark.addToSet(node.marks));
                        }; else {
                            if (0 != added.length || 1 != removed.length) return null;
                            mark = removed[0], type = "remove", update = function(node) {
                                return node.mark(mark.removeFromSet(node.marks));
                            };
                        }
                        for (var updated = [], i$2 = 0; i$2 < prev.childCount; i$2++) updated.push(update(prev.child(i$2)));
                        if (prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.d.from(updated).eq(cur)) return {
                            mark: mark,
                            type: type
                        };
                    }($from.parent.content.cut($from.parentOffset, $to.parentOffset), $from1.parent.content.cut($from1.parentOffset, change.endA - $from1.start())))) tr = view.state.tr, 
                    "add" == markChange.type ? tr.addMark(chFrom, chTo, markChange.mark) : tr.removeMark(chFrom, chTo, markChange.mark); else if ($from.parent.child($from.index()).isText && $from.index() == $to.index() - ($to.textOffset ? 0 : 1)) {
                        var text = $from.parent.textBetween($from.parentOffset, $to.parentOffset);
                        if (view.someProp("handleTextInput", (function(f) {
                            return f(view, chFrom, chTo, text);
                        }))) return;
                        tr = view.state.tr.insertText(text, chFrom, chTo);
                    }
                    if (tr || (tr = view.state.tr.replace(chFrom, chTo, parse.doc.slice(change.start - parse.from, change.endB - parse.from))), 
                    parse.sel) {
                        var sel$2 = resolveSelection(view, tr.doc, parse.sel);
                        sel$2 && !(result.chrome && result.android && view.composing && sel$2.empty && (sel$2.head == chFrom || sel$2.head == tr.mapping.map(chTo) - 1) || result.ie && sel$2.empty && sel$2.head == chFrom) && tr.setSelection(sel$2);
                    }
                    storedMarks && tr.ensureMarks(storedMarks), view.dispatch(tr.scrollIntoView());
                }
            }
        }
        function resolveSelection(view, doc, parsedSel) {
            return Math.max(parsedSel.anchor, parsedSel.head) > doc.content.size ? null : selectionBetween(view, doc.resolve(parsedSel.anchor), doc.resolve(parsedSel.head));
        }
        function skipClosingAndOpening($pos, fromEnd, mayOpen) {
            for (var depth = $pos.depth, end = fromEnd ? $pos.end() : $pos.pos; depth > 0 && (fromEnd || $pos.indexAfter(depth) == $pos.node(depth).childCount); ) depth--, 
            end++, fromEnd = !1;
            if (mayOpen) for (var next = $pos.node(depth).maybeChild($pos.indexAfter(depth)); next && !next.isLeaf; ) next = next.firstChild, 
            end++;
            return end;
        }
        function serializeForClipboard(view, slice) {
            for (var context = [], content = slice.content, openStart = slice.openStart, openEnd = slice.openEnd; openStart > 1 && openEnd > 1 && 1 == content.childCount && 1 == content.firstChild.childCount; ) {
                openStart--, openEnd--;
                var node = content.firstChild;
                context.push(node.type.name, node.type.hasRequiredAttrs() ? node.attrs : null), 
                content = node.content;
            }
            var serializer = view.someProp("clipboardSerializer") || prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.c.fromSchema(view.state.schema), doc = detachedDoc(), wrap = doc.createElement("div");
            wrap.appendChild(serializer.serializeFragment(content, {
                document: doc
            }));
            for (var needsWrap, firstChild = wrap.firstChild; firstChild && 1 == firstChild.nodeType && (needsWrap = wrapMap[firstChild.nodeName.toLowerCase()]); ) {
                for (var i = needsWrap.length - 1; i >= 0; i--) {
                    for (var wrapper = doc.createElement(needsWrap[i]); wrap.firstChild; ) wrapper.appendChild(wrap.firstChild);
                    wrap.appendChild(wrapper);
                }
                firstChild = wrap.firstChild;
            }
            return firstChild && 1 == firstChild.nodeType && firstChild.setAttribute("data-pm-slice", openStart + " " + openEnd + " " + JSON.stringify(context)), 
            {
                dom: wrap,
                text: view.someProp("clipboardTextSerializer", (function(f) {
                    return f(slice);
                })) || slice.content.textBetween(0, slice.content.size, "\n\n")
            };
        }
        function parseFromClipboard(view, text, html, plainText, $context) {
            var dom, slice, inCode = $context.parent.type.spec.code;
            if (!html && !text) return null;
            var asText = text && (plainText || inCode || !html);
            if (asText) {
                if (view.someProp("transformPastedText", (function(f) {
                    text = f(text, inCode || plainText);
                })), inCode) return new prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.l(prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.d.from(view.state.schema.text(text)), 0, 0);
                var parsed = view.someProp("clipboardTextParser", (function(f) {
                    return f(text, $context, plainText);
                }));
                parsed ? slice = parsed : (dom = document.createElement("div"), text.trim().split(/(?:\r\n?|\n)+/).forEach((function(block) {
                    dom.appendChild(document.createElement("p")).textContent = block;
                })));
            } else view.someProp("transformPastedHTML", (function(f) {
                html = f(html);
            })), dom = function(html) {
                var metas = /(\s*<meta [^>]*>)*/.exec(html);
                metas && (html = html.slice(metas[0].length));
                var wrap, elt = detachedDoc().createElement("div"), firstTag = /(?:<meta [^>]*>)*<([a-z][^>\s]+)/i.exec(html), depth = 0;
                (wrap = firstTag && wrapMap[firstTag[1].toLowerCase()]) && (html = wrap.map((function(n) {
                    return "<" + n + ">";
                })).join("") + html + wrap.map((function(n) {
                    return "</" + n + ">";
                })).reverse().join(""), depth = wrap.length);
                elt.innerHTML = html;
                for (var i = 0; i < depth; i++) elt = elt.firstChild;
                return elt;
            }(html);
            var contextNode = dom && dom.querySelector("[data-pm-slice]"), sliceData = contextNode && /^(\d+) (\d+) (.*)/.exec(contextNode.getAttribute("data-pm-slice"));
            if (!slice) {
                var parser = view.someProp("clipboardParser") || view.someProp("domParser") || prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.b.fromSchema(view.state.schema);
                slice = parser.parseSlice(dom, {
                    preserveWhitespace: !(!asText && !sliceData),
                    context: $context
                });
            }
            return slice = sliceData ? function(slice, context) {
                if (!slice.size) return slice;
                var array, schema = slice.content.firstChild.type.schema;
                try {
                    array = JSON.parse(context);
                } catch (e) {
                    return slice;
                }
                for (var content = slice.content, openStart = slice.openStart, openEnd = slice.openEnd, i = array.length - 2; i >= 0; i -= 2) {
                    var type = schema.nodes[array[i]];
                    if (!type || type.hasRequiredAttrs()) break;
                    content = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.d.from(type.create(array[i + 1], content)), 
                    openStart++, openEnd++;
                }
                return new prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.l(content, openStart, openEnd);
            }(function(slice, openStart, openEnd) {
                openStart < slice.openStart && (slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.l(closeRange(slice.content, -1, openStart, slice.openStart, 0, slice.openEnd), openStart, slice.openEnd));
                openEnd < slice.openEnd && (slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.l(closeRange(slice.content, 1, openEnd, slice.openEnd, 0, 0), slice.openStart, openEnd));
                return slice;
            }(slice, +sliceData[1], +sliceData[2]), sliceData[3]) : prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.l.maxOpen(function(fragment, $context) {
                if (fragment.childCount < 2) return fragment;
                for (var loop = function(d) {
                    var match = $context.node(d).contentMatchAt($context.index(d)), lastWrap = void 0, result = [];
                    if (fragment.forEach((function(node) {
                        if (result) {
                            var inLast, wrap = match.findWrapping(node.type);
                            if (!wrap) return result = null;
                            if (inLast = result.length && lastWrap.length && addToSibling(wrap, lastWrap, node, result[result.length - 1], 0)) result[result.length - 1] = inLast; else {
                                result.length && (result[result.length - 1] = closeRight(result[result.length - 1], lastWrap.length));
                                var wrapped = withWrappers(node, wrap);
                                result.push(wrapped), match = match.matchType(wrapped.type, wrapped.attrs), lastWrap = wrap;
                            }
                        }
                    })), result) return {
                        v: prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.d.from(result)
                    };
                }, d = $context.depth; d >= 0; d--) {
                    var returned = loop(d);
                    if (returned) return returned.v;
                }
                return fragment;
            }(slice.content, $context), !1), view.someProp("transformPasted", (function(f) {
                slice = f(slice);
            })), slice;
        }
        function withWrappers(node, wrap, from) {
            void 0 === from && (from = 0);
            for (var i = wrap.length - 1; i >= from; i--) node = wrap[i].create(null, prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.d.from(node));
            return node;
        }
        function addToSibling(wrap, lastWrap, node, sibling, depth) {
            if (depth < wrap.length && depth < lastWrap.length && wrap[depth] == lastWrap[depth]) {
                var inner = addToSibling(wrap, lastWrap, node, sibling.lastChild, depth + 1);
                if (inner) return sibling.copy(sibling.content.replaceChild(sibling.childCount - 1, inner));
                if (sibling.contentMatchAt(sibling.childCount).matchType(depth == wrap.length - 1 ? node.type : wrap[depth + 1])) return sibling.copy(sibling.content.append(prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.d.from(withWrappers(node, wrap, depth + 1))));
            }
        }
        function closeRight(node, depth) {
            if (0 == depth) return node;
            var fragment = node.content.replaceChild(node.childCount - 1, closeRight(node.lastChild, depth - 1)), fill = node.contentMatchAt(node.childCount).fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.d.empty, !0);
            return node.copy(fragment.append(fill));
        }
        function closeRange(fragment, side, from, to, depth, openEnd) {
            var node = side < 0 ? fragment.firstChild : fragment.lastChild, inner = node.content;
            return depth < to - 1 && (inner = closeRange(inner, side, from, to, depth + 1, openEnd)), 
            depth >= from && (inner = side < 0 ? node.contentMatchAt(0).fillBefore(inner, fragment.childCount > 1 || openEnd <= depth).append(inner) : inner.append(node.contentMatchAt(node.childCount).fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.d.empty, !0))), 
            fragment.replaceChild(side < 0 ? 0 : fragment.childCount - 1, node.copy(inner));
        }
        var wrapMap = {
            thead: [ "table" ],
            tbody: [ "table" ],
            tfoot: [ "table" ],
            caption: [ "table" ],
            colgroup: [ "table" ],
            col: [ "table", "colgroup" ],
            tr: [ "table", "tbody" ],
            td: [ "table", "tbody", "tr" ],
            th: [ "table", "tbody", "tr" ]
        }, _detachedDoc = null;
        function detachedDoc() {
            return _detachedDoc || (_detachedDoc = document.implementation.createHTMLDocument("title"));
        }
        var observeOptions = {
            childList: !0,
            characterData: !0,
            characterDataOldValue: !0,
            attributes: !0,
            attributeOldValue: !0,
            subtree: !0
        }, useCharData = result.ie && result.ie_version <= 11, SelectionState = function() {
            this.anchorNode = this.anchorOffset = this.focusNode = this.focusOffset = null;
        };
        SelectionState.prototype.set = function(sel) {
            this.anchorNode = sel.anchorNode, this.anchorOffset = sel.anchorOffset, this.focusNode = sel.focusNode, 
            this.focusOffset = sel.focusOffset;
        }, SelectionState.prototype.eq = function(sel) {
            return sel.anchorNode == this.anchorNode && sel.anchorOffset == this.anchorOffset && sel.focusNode == this.focusNode && sel.focusOffset == this.focusOffset;
        };
        var DOMObserver = function(view, handleDOMChange) {
            var this$1 = this;
            this.view = view, this.handleDOMChange = handleDOMChange, this.queue = [], this.flushingSoon = -1, 
            this.observer = window.MutationObserver && new window.MutationObserver((function(mutations) {
                for (var i = 0; i < mutations.length; i++) this$1.queue.push(mutations[i]);
                result.ie && result.ie_version <= 11 && mutations.some((function(m) {
                    return "childList" == m.type && m.removedNodes.length || "characterData" == m.type && m.oldValue.length > m.target.nodeValue.length;
                })) ? this$1.flushSoon() : this$1.flush();
            })), this.currentSelection = new SelectionState, useCharData && (this.onCharData = function(e) {
                this$1.queue.push({
                    target: e.target,
                    type: "characterData",
                    oldValue: e.prevValue
                }), this$1.flushSoon();
            }), this.onSelectionChange = this.onSelectionChange.bind(this), this.suppressingSelectionUpdates = !1;
        };
        DOMObserver.prototype.flushSoon = function() {
            var this$1 = this;
            this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout((function() {
                this$1.flushingSoon = -1, this$1.flush();
            }), 20));
        }, DOMObserver.prototype.forceFlush = function() {
            this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, 
            this.flush());
        }, DOMObserver.prototype.start = function() {
            this.observer && this.observer.observe(this.view.dom, observeOptions), useCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), 
            this.connectSelection();
        }, DOMObserver.prototype.stop = function() {
            var this$1 = this;
            if (this.observer) {
                var take = this.observer.takeRecords();
                if (take.length) {
                    for (var i = 0; i < take.length; i++) this.queue.push(take[i]);
                    window.setTimeout((function() {
                        return this$1.flush();
                    }), 20);
                }
                this.observer.disconnect();
            }
            useCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), 
            this.disconnectSelection();
        }, DOMObserver.prototype.connectSelection = function() {
            this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
        }, DOMObserver.prototype.disconnectSelection = function() {
            this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
        }, DOMObserver.prototype.suppressSelectionUpdates = function() {
            var this$1 = this;
            this.suppressingSelectionUpdates = !0, setTimeout((function() {
                return this$1.suppressingSelectionUpdates = !1;
            }), 50);
        }, DOMObserver.prototype.onSelectionChange = function() {
            if ((!(view = this.view).editable || view.root.activeElement == view.dom) && hasSelection(view)) {
                var view;
                if (this.suppressingSelectionUpdates) return selectionToDOM(this.view);
                if (result.ie && result.ie_version <= 11 && !this.view.state.selection.empty) {
                    var sel = this.view.root.getSelection();
                    if (sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset)) return this.flushSoon();
                }
                this.flush();
            }
        }, DOMObserver.prototype.setCurSelection = function() {
            this.currentSelection.set(this.view.root.getSelection());
        }, DOMObserver.prototype.ignoreSelectionChange = function(sel) {
            if (0 == sel.rangeCount) return !0;
            var container = sel.getRangeAt(0).commonAncestorContainer, desc = this.view.docView.nearestDesc(container);
            return desc && desc.ignoreMutation({
                type: "selection",
                target: 3 == container.nodeType ? container.parentNode : container
            }) ? (this.setCurSelection(), !0) : void 0;
        }, DOMObserver.prototype.flush = function() {
            if (this.view.docView && !(this.flushingSoon > -1)) {
                var mutations = this.observer ? this.observer.takeRecords() : [];
                this.queue.length && (mutations = this.queue.concat(mutations), this.queue.length = 0);
                var sel = this.view.root.getSelection(), newSel = !this.suppressingSelectionUpdates && !this.currentSelection.eq(sel) && hasSelection(this.view) && !this.ignoreSelectionChange(sel), from = -1, to = -1, typeOver = !1, added = [];
                if (this.view.editable) for (var i = 0; i < mutations.length; i++) {
                    var result$1 = this.registerMutation(mutations[i], added);
                    result$1 && (from = from < 0 ? result$1.from : Math.min(result$1.from, from), to = to < 0 ? result$1.to : Math.max(result$1.to, to), 
                    result$1.typeOver && (typeOver = !0));
                }
                if (result.gecko && added.length > 1) {
                    var brs = added.filter((function(n) {
                        return "BR" == n.nodeName;
                    }));
                    if (2 == brs.length) {
                        var a = brs[0], b = brs[1];
                        a.parentNode && a.parentNode.parentNode == b.parentNode ? b.remove() : a.remove();
                    }
                }
                (from > -1 || newSel) && (from > -1 && (this.view.docView.markDirty(from, to), function(view) {
                    if (cssChecked) return;
                    cssChecked = !0, "normal" == getComputedStyle(view.dom).whiteSpace && console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.");
                }(this.view)), this.handleDOMChange(from, to, typeOver, added), this.view.docView.dirty ? this.view.updateState(this.view.state) : this.currentSelection.eq(sel) || selectionToDOM(this.view));
            }
        }, DOMObserver.prototype.registerMutation = function(mut, added) {
            if (added.indexOf(mut.target) > -1) return null;
            var desc = this.view.docView.nearestDesc(mut.target);
            if ("attributes" == mut.type && (desc == this.view.docView || "contenteditable" == mut.attributeName || "style" == mut.attributeName && !mut.oldValue && !mut.target.getAttribute("style"))) return null;
            if (!desc || desc.ignoreMutation(mut)) return null;
            if ("childList" == mut.type) {
                var prev = mut.previousSibling, next = mut.nextSibling;
                if (result.ie && result.ie_version <= 11 && mut.addedNodes.length) for (var i = 0; i < mut.addedNodes.length; i++) {
                    var ref = mut.addedNodes[i], previousSibling = ref.previousSibling, nextSibling = ref.nextSibling;
                    (!previousSibling || Array.prototype.indexOf.call(mut.addedNodes, previousSibling) < 0) && (prev = previousSibling), 
                    (!nextSibling || Array.prototype.indexOf.call(mut.addedNodes, nextSibling) < 0) && (next = nextSibling);
                }
                for (var fromOffset = prev && prev.parentNode == mut.target ? domIndex(prev) + 1 : 0, from = desc.localPosFromDOM(mut.target, fromOffset, -1), toOffset = next && next.parentNode == mut.target ? domIndex(next) : mut.target.childNodes.length, i$1 = 0; i$1 < mut.addedNodes.length; i$1++) added.push(mut.addedNodes[i$1]);
                return {
                    from: from,
                    to: desc.localPosFromDOM(mut.target, toOffset, 1)
                };
            }
            return "attributes" == mut.type ? {
                from: desc.posAtStart - desc.border,
                to: desc.posAtEnd + desc.border
            } : {
                from: desc.posAtStart,
                to: desc.posAtEnd,
                typeOver: mut.target.nodeValue == mut.oldValue
            };
        };
        var cssChecked = !1;
        var handlers = {}, editHandlers = {};
        function setSelectionOrigin(view, origin) {
            view.lastSelectionOrigin = origin, view.lastSelectionTime = Date.now();
        }
        function ensureListeners(view) {
            view.someProp("handleDOMEvents", (function(currentHandlers) {
                for (var type in currentHandlers) view.eventHandlers[type] || view.dom.addEventListener(type, view.eventHandlers[type] = function(event) {
                    return runCustomHandler(view, event);
                });
            }));
        }
        function runCustomHandler(view, event) {
            return view.someProp("handleDOMEvents", (function(handlers) {
                var handler = handlers[event.type];
                return !!handler && (handler(view, event) || event.defaultPrevented);
            }));
        }
        function eventCoords(event) {
            return {
                left: event.clientX,
                top: event.clientY
            };
        }
        function runHandlerOnContext(view, propName, pos, inside, event) {
            if (-1 == inside) return !1;
            for (var $pos = view.state.doc.resolve(inside), loop = function(i) {
                if (view.someProp(propName, (function(f) {
                    return i > $pos.depth ? f(view, pos, $pos.nodeAfter, $pos.before(i), event, !0) : f(view, pos, $pos.node(i), $pos.before(i), event, !1);
                }))) return {
                    v: !0
                };
            }, i = $pos.depth + 1; i > 0; i--) {
                var returned = loop(i);
                if (returned) return returned.v;
            }
            return !1;
        }
        function updateSelection(view, selection, origin) {
            view.focused || view.focus();
            var tr = view.state.tr.setSelection(selection);
            "pointer" == origin && tr.setMeta("pointer", !0), view.dispatch(tr);
        }
        function handleSingleClick(view, pos, inside, event, selectNode) {
            return runHandlerOnContext(view, "handleClickOn", pos, inside, event) || view.someProp("handleClick", (function(f) {
                return f(view, pos, event);
            })) || (selectNode ? function(view, inside) {
                if (-1 == inside) return !1;
                var selectedNode, selectAt, sel = view.state.selection;
                sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection && (selectedNode = sel.node);
                for (var $pos = view.state.doc.resolve(inside), i = $pos.depth + 1; i > 0; i--) {
                    var node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
                    if (prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection.isSelectable(node)) {
                        selectAt = selectedNode && sel.$from.depth > 0 && i >= sel.$from.depth && $pos.before(sel.$from.depth + 1) == sel.$from.pos ? $pos.before(sel.$from.depth) : $pos.before(i);
                        break;
                    }
                }
                return null != selectAt && (updateSelection(view, prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection.create(view.state.doc, selectAt), "pointer"), 
                !0);
            }(view, inside) : function(view, inside) {
                if (-1 == inside) return !1;
                var $pos = view.state.doc.resolve(inside), node = $pos.nodeAfter;
                return !!(node && node.isAtom && prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection.isSelectable(node)) && (updateSelection(view, new prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection($pos), "pointer"), 
                !0);
            }(view, inside));
        }
        function handleDoubleClick(view, pos, inside, event) {
            return runHandlerOnContext(view, "handleDoubleClickOn", pos, inside, event) || view.someProp("handleDoubleClick", (function(f) {
                return f(view, pos, event);
            }));
        }
        function handleTripleClick(view, pos, inside, event) {
            return runHandlerOnContext(view, "handleTripleClickOn", pos, inside, event) || view.someProp("handleTripleClick", (function(f) {
                return f(view, pos, event);
            })) || function(view, inside) {
                var doc = view.state.doc;
                if (-1 == inside) return !!doc.inlineContent && (updateSelection(view, prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection.create(doc, 0, doc.content.size), "pointer"), 
                !0);
                for (var $pos = doc.resolve(inside), i = $pos.depth + 1; i > 0; i--) {
                    var node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i), nodePos = $pos.before(i);
                    if (node.inlineContent) updateSelection(view, prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection.create(doc, nodePos + 1, nodePos + 1 + node.content.size), "pointer"); else {
                        if (!prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection.isSelectable(node)) continue;
                        updateSelection(view, prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection.create(doc, nodePos), "pointer");
                    }
                    return !0;
                }
            }(view, inside);
        }
        function forceDOMFlush(view) {
            return endComposition(view);
        }
        editHandlers.keydown = function(view, event) {
            if (view.shiftKey = 16 == event.keyCode || event.shiftKey, !inOrNearComposition(view, event)) if (view.domObserver.forceFlush(), 
            view.lastKeyCode = event.keyCode, view.lastKeyCodeTime = Date.now(), !result.ios || 13 != event.keyCode || event.ctrlKey || event.altKey || event.metaKey) view.someProp("handleKeyDown", (function(f) {
                return f(view, event);
            })) || captureKeyDown(view, event) ? event.preventDefault() : setSelectionOrigin(view, "key"); else {
                var now = Date.now();
                view.lastIOSEnter = now, view.lastIOSEnterFallbackTimeout = setTimeout((function() {
                    view.lastIOSEnter == now && (view.someProp("handleKeyDown", (function(f) {
                        return f(view, keyEvent(13, "Enter"));
                    })), view.lastIOSEnter = 0);
                }), 200);
            }
        }, editHandlers.keyup = function(view, e) {
            16 == e.keyCode && (view.shiftKey = !1);
        }, editHandlers.keypress = function(view, event) {
            if (!(inOrNearComposition(view, event) || !event.charCode || event.ctrlKey && !event.altKey || result.mac && event.metaKey)) if (view.someProp("handleKeyPress", (function(f) {
                return f(view, event);
            }))) event.preventDefault(); else {
                var sel = view.state.selection;
                if (!(sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection && sel.$from.sameParent(sel.$to))) {
                    var text = String.fromCharCode(event.charCode);
                    view.someProp("handleTextInput", (function(f) {
                        return f(view, sel.$from.pos, sel.$to.pos, text);
                    })) || view.dispatch(view.state.tr.insertText(text).scrollIntoView()), event.preventDefault();
                }
            }
        };
        var selectNodeModifier = result.mac ? "metaKey" : "ctrlKey";
        handlers.mousedown = function(view, event) {
            view.shiftKey = event.shiftKey;
            var flushed = forceDOMFlush(view), now = Date.now(), type = "singleClick";
            now - view.lastClick.time < 500 && function(event, click) {
                var dx = click.x - event.clientX, dy = click.y - event.clientY;
                return dx * dx + dy * dy < 100;
            }(event, view.lastClick) && !event[selectNodeModifier] && ("singleClick" == view.lastClick.type ? type = "doubleClick" : "doubleClick" == view.lastClick.type && (type = "tripleClick")), 
            view.lastClick = {
                time: now,
                x: event.clientX,
                y: event.clientY,
                type: type
            };
            var pos = view.posAtCoords(eventCoords(event));
            pos && ("singleClick" == type ? view.mouseDown = new MouseDown(view, pos, event, flushed) : ("doubleClick" == type ? handleDoubleClick : handleTripleClick)(view, pos.pos, pos.inside, event) ? event.preventDefault() : setSelectionOrigin(view, "pointer"));
        };
        var MouseDown = function(view, pos, event, flushed) {
            var targetNode, targetPos, this$1 = this;
            if (this.view = view, this.startDoc = view.state.doc, this.pos = pos, this.event = event, 
            this.flushed = flushed, this.selectNode = event[selectNodeModifier], this.allowDefault = event.shiftKey, 
            pos.inside > -1) targetNode = view.state.doc.nodeAt(pos.inside), targetPos = pos.inside; else {
                var $pos = view.state.doc.resolve(pos.pos);
                targetNode = $pos.parent, targetPos = $pos.depth ? $pos.before() : 0;
            }
            this.mightDrag = null;
            var target = flushed ? null : event.target, targetDesc = target ? view.docView.nearestDesc(target, !0) : null;
            this.target = targetDesc ? targetDesc.dom : null, (targetNode.type.spec.draggable && !1 !== targetNode.type.spec.selectable || view.state.selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection && targetPos == view.state.selection.from) && (this.mightDrag = {
                node: targetNode,
                pos: targetPos,
                addAttr: this.target && !this.target.draggable,
                setUneditable: this.target && result.gecko && !this.target.hasAttribute("contentEditable")
            }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), 
            this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout((function() {
                return this$1.target.setAttribute("contentEditable", "false");
            }), 20), this.view.domObserver.start()), view.root.addEventListener("mouseup", this.up = this.up.bind(this)), 
            view.root.addEventListener("mousemove", this.move = this.move.bind(this)), setSelectionOrigin(view, "pointer");
        };
        function inOrNearComposition(view, event) {
            return !!view.composing || !!(result.safari && Math.abs(event.timeStamp - view.compositionEndedAt) < 500) && (view.compositionEndedAt = -2e8, 
            !0);
        }
        MouseDown.prototype.done = function() {
            this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), 
            this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), 
            this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), 
            this.view.domObserver.start()), this.view.mouseDown = null;
        }, MouseDown.prototype.up = function(event) {
            if (this.done(), this.view.dom.contains(3 == event.target.nodeType ? event.target.parentNode : event.target)) {
                var pos = this.pos;
                this.view.state.doc != this.startDoc && (pos = this.view.posAtCoords(eventCoords(event))), 
                this.allowDefault || !pos ? setSelectionOrigin(this.view, "pointer") : handleSingleClick(this.view, pos.pos, pos.inside, event, this.selectNode) ? event.preventDefault() : this.flushed || result.safari && this.mightDrag && !this.mightDrag.node.isAtom || result.chrome && !(this.view.state.selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.TextSelection) && (pos.pos == this.view.state.selection.from || pos.pos == this.view.state.selection.to) ? (updateSelection(this.view, prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Selection.near(this.view.state.doc.resolve(pos.pos)), "pointer"), 
                event.preventDefault()) : setSelectionOrigin(this.view, "pointer");
            }
        }, MouseDown.prototype.move = function(event) {
            !this.allowDefault && (Math.abs(this.event.x - event.clientX) > 4 || Math.abs(this.event.y - event.clientY) > 4) && (this.allowDefault = !0), 
            setSelectionOrigin(this.view, "pointer");
        }, handlers.touchdown = function(view) {
            forceDOMFlush(view), setSelectionOrigin(view, "pointer");
        }, handlers.contextmenu = function(view) {
            return forceDOMFlush(view);
        };
        var timeoutComposition = result.android ? 5e3 : -1;
        function scheduleComposeEnd(view, delay) {
            clearTimeout(view.composingTimeout), delay > -1 && (view.composingTimeout = setTimeout((function() {
                return endComposition(view);
            }), delay));
        }
        function clearComposition(view) {
            for (view.composing = !1; view.compositionNodes.length > 0; ) view.compositionNodes.pop().markParentsDirty();
        }
        function endComposition(view, forceUpdate) {
            if (view.domObserver.forceFlush(), clearComposition(view), forceUpdate || view.docView.dirty) {
                var sel = selectionFromDOM(view);
                return sel && !sel.eq(view.state.selection) ? view.dispatch(view.state.tr.setSelection(sel)) : view.updateState(view.state), 
                !0;
            }
            return !1;
        }
        editHandlers.compositionstart = editHandlers.compositionupdate = function(view) {
            if (!view.composing) {
                view.domObserver.flush();
                var state = view.state, $pos = state.selection.$from;
                if (state.selection.empty && (state.storedMarks || !$pos.textOffset && $pos.parentOffset && $pos.nodeBefore.marks.some((function(m) {
                    return !1 === m.type.spec.inclusive;
                })))) view.markCursor = view.state.storedMarks || $pos.marks(), endComposition(view, !0), 
                view.markCursor = null; else if (endComposition(view), result.gecko && state.selection.empty && $pos.parentOffset && !$pos.textOffset && $pos.nodeBefore.marks.length) for (var sel = view.root.getSelection(), node = sel.focusNode, offset = sel.focusOffset; node && 1 == node.nodeType && 0 != offset; ) {
                    var before = offset < 0 ? node.lastChild : node.childNodes[offset - 1];
                    if (!before) break;
                    if (3 == before.nodeType) {
                        sel.collapse(before, before.nodeValue.length);
                        break;
                    }
                    node = before, offset = -1;
                }
                view.composing = !0;
            }
            scheduleComposeEnd(view, timeoutComposition);
        }, editHandlers.compositionend = function(view, event) {
            view.composing && (view.composing = !1, view.compositionEndedAt = event.timeStamp, 
            scheduleComposeEnd(view, 20));
        };
        var brokenClipboardAPI = result.ie && result.ie_version < 15 || result.ios && result.webkit_version < 604;
        function doPaste(view, text, html, e) {
            var slice = parseFromClipboard(view, text, html, view.shiftKey, view.state.selection.$from);
            if (!view.someProp("handlePaste", (function(f) {
                return f(view, e, slice || prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.l.empty);
            })) && slice) {
                var singleNode = function(slice) {
                    return 0 == slice.openStart && 0 == slice.openEnd && 1 == slice.content.childCount ? slice.content.firstChild : null;
                }(slice), tr = singleNode ? view.state.tr.replaceSelectionWith(singleNode, view.shiftKey) : view.state.tr.replaceSelection(slice);
                view.dispatch(tr.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste"));
            }
        }
        handlers.copy = editHandlers.cut = function(view, e) {
            var sel = view.state.selection, cut = "cut" == e.type;
            if (!sel.empty) {
                var data = brokenClipboardAPI ? null : e.clipboardData, ref = serializeForClipboard(view, sel.content()), dom = ref.dom, text = ref.text;
                data ? (e.preventDefault(), data.clearData(), data.setData("text/html", dom.innerHTML), 
                data.setData("text/plain", text)) : function(view, dom) {
                    if (view.dom.parentNode) {
                        var wrap = view.dom.parentNode.appendChild(document.createElement("div"));
                        wrap.appendChild(dom), wrap.style.cssText = "position: fixed; left: -10000px; top: 10px";
                        var sel = getSelection(), range = document.createRange();
                        range.selectNodeContents(dom), view.dom.blur(), sel.removeAllRanges(), sel.addRange(range), 
                        setTimeout((function() {
                            wrap.parentNode && wrap.parentNode.removeChild(wrap), view.focus();
                        }), 50);
                    }
                }(view, dom), cut && view.dispatch(view.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
            }
        }, editHandlers.paste = function(view, e) {
            var data = brokenClipboardAPI ? null : e.clipboardData, html = data && data.getData("text/html"), text = data && data.getData("text/plain");
            data && (html || text || data.files.length) ? (doPaste(view, text, html, e), e.preventDefault()) : function(view, e) {
                if (view.dom.parentNode) {
                    var plainText = view.shiftKey || view.state.selection.$from.parent.type.spec.code, target = view.dom.parentNode.appendChild(document.createElement(plainText ? "textarea" : "div"));
                    plainText || (target.contentEditable = "true"), target.style.cssText = "position: fixed; left: -10000px; top: 10px", 
                    target.focus(), setTimeout((function() {
                        view.focus(), target.parentNode && target.parentNode.removeChild(target), plainText ? doPaste(view, target.value, null, e) : doPaste(view, target.textContent, target.innerHTML, e);
                    }), 50);
                }
            }(view, e);
        };
        var Dragging = function(slice, move) {
            this.slice = slice, this.move = move;
        }, dragCopyModifier = result.mac ? "altKey" : "ctrlKey";
        for (var prop in handlers.dragstart = function(view, e) {
            var mouseDown = view.mouseDown;
            if (mouseDown && mouseDown.done(), e.dataTransfer) {
                var sel = view.state.selection, pos = sel.empty ? null : view.posAtCoords(eventCoords(e));
                if (pos && pos.pos >= sel.from && pos.pos <= (sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection ? sel.to - 1 : sel.to)) ; else if (mouseDown && mouseDown.mightDrag) view.dispatch(view.state.tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection.create(view.state.doc, mouseDown.mightDrag.pos))); else if (e.target && 1 == e.target.nodeType) {
                    var desc = view.docView.nearestDesc(e.target, !0);
                    if (!desc || !desc.node.type.spec.draggable || desc == view.docView) return;
                    view.dispatch(view.state.tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection.create(view.state.doc, desc.posBefore)));
                }
                var slice = view.state.selection.content(), ref = serializeForClipboard(view, slice), dom = ref.dom, text = ref.text;
                e.dataTransfer.clearData(), e.dataTransfer.setData(brokenClipboardAPI ? "Text" : "text/html", dom.innerHTML), 
                brokenClipboardAPI || e.dataTransfer.setData("text/plain", text), view.dragging = new Dragging(slice, !e[dragCopyModifier]);
            }
        }, handlers.dragend = function(view) {
            window.setTimeout((function() {
                return view.dragging = null;
            }), 50);
        }, editHandlers.dragover = editHandlers.dragenter = function(_, e) {
            return e.preventDefault();
        }, editHandlers.drop = function(view, e) {
            var dragging = view.dragging;
            if (view.dragging = null, e.dataTransfer) {
                var eventPos = view.posAtCoords(eventCoords(e));
                if (eventPos) {
                    var $mouse = view.state.doc.resolve(eventPos.pos);
                    if ($mouse) {
                        var slice = dragging && dragging.slice || parseFromClipboard(view, e.dataTransfer.getData(brokenClipboardAPI ? "Text" : "text/plain"), brokenClipboardAPI ? null : e.dataTransfer.getData("text/html"), !1, $mouse), move = dragging && !e[dragCopyModifier];
                        if (view.someProp("handleDrop", (function(f) {
                            return f(view, e, slice || prosemirror_model__WEBPACK_IMPORTED_MODULE_1__.l.empty, move);
                        }))) e.preventDefault(); else if (slice) {
                            e.preventDefault();
                            var insertPos = slice ? Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_2__.g)(view.state.doc, $mouse.pos, slice) : $mouse.pos;
                            null == insertPos && (insertPos = $mouse.pos);
                            var tr = view.state.tr;
                            move && tr.deleteSelection();
                            var pos = tr.mapping.map(insertPos), isNode = 0 == slice.openStart && 0 == slice.openEnd && 1 == slice.content.childCount, beforeInsert = tr.doc;
                            if (isNode ? tr.replaceRangeWith(pos, pos, slice.content.firstChild) : tr.replaceRange(pos, pos, slice), 
                            !tr.doc.eq(beforeInsert)) {
                                var $pos = tr.doc.resolve(pos);
                                if (isNode && prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection.isSelectable(slice.content.firstChild) && $pos.nodeAfter && $pos.nodeAfter.sameMarkup(slice.content.firstChild)) tr.setSelection(new prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection($pos)); else {
                                    var end = tr.mapping.map(insertPos);
                                    tr.mapping.maps[tr.mapping.maps.length - 1].forEach((function(_from, _to, _newFrom, newTo) {
                                        return end = newTo;
                                    })), tr.setSelection(selectionBetween(view, $pos, tr.doc.resolve(end)));
                                }
                                view.focus(), view.dispatch(tr.setMeta("uiEvent", "drop"));
                            }
                        }
                    }
                }
            }
        }, handlers.focus = function(view) {
            view.focused || (view.domObserver.stop(), view.dom.classList.add("ProseMirror-focused"), 
            view.domObserver.start(), view.focused = !0, setTimeout((function() {
                view.docView && view.hasFocus() && !view.domObserver.currentSelection.eq(view.root.getSelection()) && selectionToDOM(view);
            }), 20));
        }, handlers.blur = function(view) {
            view.focused && (view.domObserver.stop(), view.dom.classList.remove("ProseMirror-focused"), 
            view.domObserver.start(), view.domObserver.currentSelection.set({}), view.focused = !1);
        }, handlers.beforeinput = function(view, event) {
            if (result.chrome && result.android && "deleteContentBackward" == event.inputType) {
                var domChangeCount = view.domChangeCount;
                setTimeout((function() {
                    if (view.domChangeCount == domChangeCount && (view.dom.blur(), view.focus(), !view.someProp("handleKeyDown", (function(f) {
                        return f(view, keyEvent(8, "Backspace"));
                    })))) {
                        var $cursor = view.state.selection.$cursor;
                        $cursor && $cursor.pos > 0 && view.dispatch(view.state.tr.delete($cursor.pos - 1, $cursor.pos).scrollIntoView());
                    }
                }), 50);
            }
        }, editHandlers) handlers[prop] = editHandlers[prop];
        function compareObjs(a, b) {
            if (a == b) return !0;
            for (var p in a) if (a[p] !== b[p]) return !1;
            for (var p$1 in b) if (!(p$1 in a)) return !1;
            return !0;
        }
        var WidgetType = function(toDOM, spec) {
            this.spec = spec || noSpec, this.side = this.spec.side || 0, this.toDOM = toDOM;
        };
        WidgetType.prototype.map = function(mapping, span, offset, oldOffset) {
            var ref = mapping.mapResult(span.from + oldOffset, this.side < 0 ? -1 : 1), pos = ref.pos;
            return ref.deleted ? null : new Decoration(pos - offset, pos - offset, this);
        }, WidgetType.prototype.valid = function() {
            return !0;
        }, WidgetType.prototype.eq = function(other) {
            return this == other || other instanceof WidgetType && (this.spec.key && this.spec.key == other.spec.key || this.toDOM == other.toDOM && compareObjs(this.spec, other.spec));
        };
        var InlineType = function(attrs, spec) {
            this.spec = spec || noSpec, this.attrs = attrs;
        };
        InlineType.prototype.map = function(mapping, span, offset, oldOffset) {
            var from = mapping.map(span.from + oldOffset, this.spec.inclusiveStart ? -1 : 1) - offset, to = mapping.map(span.to + oldOffset, this.spec.inclusiveEnd ? 1 : -1) - offset;
            return from >= to ? null : new Decoration(from, to, this);
        }, InlineType.prototype.valid = function(_, span) {
            return span.from < span.to;
        }, InlineType.prototype.eq = function(other) {
            return this == other || other instanceof InlineType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
        }, InlineType.is = function(span) {
            return span.type instanceof InlineType;
        };
        var NodeType = function(attrs, spec) {
            this.spec = spec || noSpec, this.attrs = attrs;
        };
        NodeType.prototype.map = function(mapping, span, offset, oldOffset) {
            var from = mapping.mapResult(span.from + oldOffset, 1);
            if (from.deleted) return null;
            var to = mapping.mapResult(span.to + oldOffset, -1);
            return to.deleted || to.pos <= from.pos ? null : new Decoration(from.pos - offset, to.pos - offset, this);
        }, NodeType.prototype.valid = function(node, span) {
            var ref = node.content.findIndex(span.from), index = ref.index, offset = ref.offset;
            return offset == span.from && offset + node.child(index).nodeSize == span.to;
        }, NodeType.prototype.eq = function(other) {
            return this == other || other instanceof NodeType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
        };
        var Decoration = function(from, to, type) {
            this.from = from, this.to = to, this.type = type;
        }, prototypeAccessors$1 = {
            spec: {
                configurable: !0
            },
            inline: {
                configurable: !0
            }
        };
        Decoration.prototype.copy = function(from, to) {
            return new Decoration(from, to, this.type);
        }, Decoration.prototype.eq = function(other, offset) {
            return void 0 === offset && (offset = 0), this.type.eq(other.type) && this.from + offset == other.from && this.to + offset == other.to;
        }, Decoration.prototype.map = function(mapping, offset, oldOffset) {
            return this.type.map(mapping, this, offset, oldOffset);
        }, Decoration.widget = function(pos, toDOM, spec) {
            return new Decoration(pos, pos, new WidgetType(toDOM, spec));
        }, Decoration.inline = function(from, to, attrs, spec) {
            return new Decoration(from, to, new InlineType(attrs, spec));
        }, Decoration.node = function(from, to, attrs, spec) {
            return new Decoration(from, to, new NodeType(attrs, spec));
        }, prototypeAccessors$1.spec.get = function() {
            return this.type.spec;
        }, prototypeAccessors$1.inline.get = function() {
            return this.type instanceof InlineType;
        }, Object.defineProperties(Decoration.prototype, prototypeAccessors$1);
        var none = [], noSpec = {}, DecorationSet = function(local, children) {
            this.local = local && local.length ? local : none, this.children = children && children.length ? children : none;
        };
        DecorationSet.create = function(doc, decorations) {
            return decorations.length ? buildTree(decorations, doc, 0, noSpec) : empty;
        }, DecorationSet.prototype.find = function(start, end, predicate) {
            var result = [];
            return this.findInner(null == start ? 0 : start, null == end ? 1e9 : end, result, 0, predicate), 
            result;
        }, DecorationSet.prototype.findInner = function(start, end, result, offset, predicate) {
            for (var i = 0; i < this.local.length; i++) {
                var span = this.local[i];
                span.from <= end && span.to >= start && (!predicate || predicate(span.spec)) && result.push(span.copy(span.from + offset, span.to + offset));
            }
            for (var i$1 = 0; i$1 < this.children.length; i$1 += 3) if (this.children[i$1] < end && this.children[i$1 + 1] > start) {
                var childOff = this.children[i$1] + 1;
                this.children[i$1 + 2].findInner(start - childOff, end - childOff, result, offset + childOff, predicate);
            }
        }, DecorationSet.prototype.map = function(mapping, doc, options) {
            return this == empty || 0 == mapping.maps.length ? this : this.mapInner(mapping, doc, 0, 0, options || noSpec);
        }, DecorationSet.prototype.mapInner = function(mapping, node, offset, oldOffset, options) {
            for (var newLocal, i = 0; i < this.local.length; i++) {
                var mapped = this.local[i].map(mapping, offset, oldOffset);
                mapped && mapped.type.valid(node, mapped) ? (newLocal || (newLocal = [])).push(mapped) : options.onRemove && options.onRemove(this.local[i].spec);
            }
            return this.children.length ? function(oldChildren, newLocal, mapping, node, offset, oldOffset, options) {
                for (var children = oldChildren.slice(), shift = function(oldStart, oldEnd, newStart, newEnd) {
                    for (var i = 0; i < children.length; i += 3) {
                        var end = children[i + 1], dSize = void 0;
                        -1 == end || oldStart > end + oldOffset || (oldEnd >= children[i] + oldOffset ? children[i + 1] = -1 : newStart >= offset && (dSize = newEnd - newStart - (oldEnd - oldStart)) && (children[i] += dSize, 
                        children[i + 1] += dSize));
                    }
                }, i = 0; i < mapping.maps.length; i++) mapping.maps[i].forEach(shift);
                for (var mustRebuild = !1, i$1 = 0; i$1 < children.length; i$1 += 3) if (-1 == children[i$1 + 1]) {
                    var from = mapping.map(oldChildren[i$1] + oldOffset), fromLocal = from - offset;
                    if (fromLocal < 0 || fromLocal >= node.content.size) {
                        mustRebuild = !0;
                        continue;
                    }
                    var toLocal = mapping.map(oldChildren[i$1 + 1] + oldOffset, -1) - offset, ref = node.content.findIndex(fromLocal), index = ref.index, childOffset = ref.offset, childNode = node.maybeChild(index);
                    if (childNode && childOffset == fromLocal && childOffset + childNode.nodeSize == toLocal) {
                        var mapped = children[i$1 + 2].mapInner(mapping, childNode, from + 1, oldChildren[i$1] + oldOffset + 1, options);
                        mapped != empty ? (children[i$1] = fromLocal, children[i$1 + 1] = toLocal, children[i$1 + 2] = mapped) : (children[i$1 + 1] = -2, 
                        mustRebuild = !0);
                    } else mustRebuild = !0;
                }
                if (mustRebuild) {
                    var built = buildTree(function(children, oldChildren, decorations, mapping, offset, oldOffset, options) {
                        function gather(set, oldOffset) {
                            for (var i = 0; i < set.local.length; i++) {
                                var mapped = set.local[i].map(mapping, offset, oldOffset);
                                mapped ? decorations.push(mapped) : options.onRemove && options.onRemove(set.local[i].spec);
                            }
                            for (var i$1 = 0; i$1 < set.children.length; i$1 += 3) gather(set.children[i$1 + 2], set.children[i$1] + oldOffset + 1);
                        }
                        for (var i = 0; i < children.length; i += 3) -1 == children[i + 1] && gather(children[i + 2], oldChildren[i] + oldOffset + 1);
                        return decorations;
                    }(children, oldChildren, newLocal || [], mapping, offset, oldOffset, options), node, 0, options);
                    newLocal = built.local;
                    for (var i$2 = 0; i$2 < children.length; i$2 += 3) children[i$2 + 1] < 0 && (children.splice(i$2, 3), 
                    i$2 -= 3);
                    for (var i$3 = 0, j = 0; i$3 < built.children.length; i$3 += 3) {
                        for (var from$1 = built.children[i$3]; j < children.length && children[j] < from$1; ) j += 3;
                        children.splice(j, 0, built.children[i$3], built.children[i$3 + 1], built.children[i$3 + 2]);
                    }
                }
                return new DecorationSet(newLocal && newLocal.sort(byPos), children);
            }(this.children, newLocal, mapping, node, offset, oldOffset, options) : newLocal ? new DecorationSet(newLocal.sort(byPos)) : empty;
        }, DecorationSet.prototype.add = function(doc, decorations) {
            return decorations.length ? this == empty ? DecorationSet.create(doc, decorations) : this.addInner(doc, decorations, 0) : this;
        }, DecorationSet.prototype.addInner = function(doc, decorations, offset) {
            var children, this$1 = this, childIndex = 0;
            doc.forEach((function(childNode, childOffset) {
                var found, baseOffset = childOffset + offset;
                if (found = takeSpansForNode(decorations, childNode, baseOffset)) {
                    for (children || (children = this$1.children.slice()); childIndex < children.length && children[childIndex] < childOffset; ) childIndex += 3;
                    children[childIndex] == childOffset ? children[childIndex + 2] = children[childIndex + 2].addInner(childNode, found, baseOffset + 1) : children.splice(childIndex, 0, childOffset, childOffset + childNode.nodeSize, buildTree(found, childNode, baseOffset + 1, noSpec)), 
                    childIndex += 3;
                }
            }));
            var local = moveSpans(childIndex ? withoutNulls(decorations) : decorations, -offset);
            return new DecorationSet(local.length ? this.local.concat(local).sort(byPos) : this.local, children || this.children);
        }, DecorationSet.prototype.remove = function(decorations) {
            return 0 == decorations.length || this == empty ? this : this.removeInner(decorations, 0);
        }, DecorationSet.prototype.removeInner = function(decorations, offset) {
            for (var children = this.children, local = this.local, i = 0; i < children.length; i += 3) {
                for (var found = void 0, from = children[i] + offset, to = children[i + 1] + offset, j = 0, span = void 0; j < decorations.length; j++) (span = decorations[j]) && span.from > from && span.to < to && (decorations[j] = null, 
                (found || (found = [])).push(span));
                if (found) {
                    children == this.children && (children = this.children.slice());
                    var removed = children[i + 2].removeInner(found, from + 1);
                    removed != empty ? children[i + 2] = removed : (children.splice(i, 3), i -= 3);
                }
            }
            if (local.length) for (var i$1 = 0, span$1 = void 0; i$1 < decorations.length; i$1++) if (span$1 = decorations[i$1]) for (var j$1 = 0; j$1 < local.length; j$1++) local[j$1].eq(span$1, offset) && (local == this.local && (local = this.local.slice()), 
            local.splice(j$1--, 1));
            return children == this.children && local == this.local ? this : local.length || children.length ? new DecorationSet(local, children) : empty;
        }, DecorationSet.prototype.forChild = function(offset, node) {
            if (this == empty) return this;
            if (node.isLeaf) return DecorationSet.empty;
            for (var child, local, i = 0; i < this.children.length; i += 3) if (this.children[i] >= offset) {
                this.children[i] == offset && (child = this.children[i + 2]);
                break;
            }
            for (var start = offset + 1, end = start + node.content.size, i$1 = 0; i$1 < this.local.length; i$1++) {
                var dec = this.local[i$1];
                if (dec.from < end && dec.to > start && dec.type instanceof InlineType) {
                    var from = Math.max(start, dec.from) - start, to = Math.min(end, dec.to) - start;
                    from < to && (local || (local = [])).push(dec.copy(from, to));
                }
            }
            if (local) {
                var localSet = new DecorationSet(local.sort(byPos));
                return child ? new DecorationGroup([ localSet, child ]) : localSet;
            }
            return child || empty;
        }, DecorationSet.prototype.eq = function(other) {
            if (this == other) return !0;
            if (!(other instanceof DecorationSet) || this.local.length != other.local.length || this.children.length != other.children.length) return !1;
            for (var i = 0; i < this.local.length; i++) if (!this.local[i].eq(other.local[i])) return !1;
            for (var i$1 = 0; i$1 < this.children.length; i$1 += 3) if (this.children[i$1] != other.children[i$1] || this.children[i$1 + 1] != other.children[i$1 + 1] || !this.children[i$1 + 2].eq(other.children[i$1 + 2])) return !1;
            return !0;
        }, DecorationSet.prototype.locals = function(node) {
            return removeOverlap(this.localsInner(node));
        }, DecorationSet.prototype.localsInner = function(node) {
            if (this == empty) return none;
            if (node.inlineContent || !this.local.some(InlineType.is)) return this.local;
            for (var result = [], i = 0; i < this.local.length; i++) this.local[i].type instanceof InlineType || result.push(this.local[i]);
            return result;
        };
        var empty = new DecorationSet;
        DecorationSet.empty = empty, DecorationSet.removeOverlap = removeOverlap;
        var DecorationGroup = function(members) {
            this.members = members;
        };
        function moveSpans(spans, offset) {
            if (!offset || !spans.length) return spans;
            for (var result = [], i = 0; i < spans.length; i++) {
                var span = spans[i];
                result.push(new Decoration(span.from + offset, span.to + offset, span.type));
            }
            return result;
        }
        function takeSpansForNode(spans, node, offset) {
            if (node.isLeaf) return null;
            for (var end = offset + node.nodeSize, found = null, i = 0, span = void 0; i < spans.length; i++) (span = spans[i]) && span.from > offset && span.to < end && ((found || (found = [])).push(span), 
            spans[i] = null);
            return found;
        }
        function withoutNulls(array) {
            for (var result = [], i = 0; i < array.length; i++) null != array[i] && result.push(array[i]);
            return result;
        }
        function buildTree(spans, node, offset, options) {
            var children = [], hasNulls = !1;
            node.forEach((function(childNode, localStart) {
                var found = takeSpansForNode(spans, childNode, localStart + offset);
                if (found) {
                    hasNulls = !0;
                    var subtree = buildTree(found, childNode, offset + localStart + 1, options);
                    subtree != empty && children.push(localStart, localStart + childNode.nodeSize, subtree);
                }
            }));
            for (var locals = moveSpans(hasNulls ? withoutNulls(spans) : spans, -offset).sort(byPos), i = 0; i < locals.length; i++) locals[i].type.valid(node, locals[i]) || (options.onRemove && options.onRemove(locals[i].spec), 
            locals.splice(i--, 1));
            return locals.length || children.length ? new DecorationSet(locals, children) : empty;
        }
        function byPos(a, b) {
            return a.from - b.from || a.to - b.to;
        }
        function removeOverlap(spans) {
            for (var working = spans, i = 0; i < working.length - 1; i++) {
                var span = working[i];
                if (span.from != span.to) for (var j = i + 1; j < working.length; j++) {
                    var next = working[j];
                    if (next.from != span.from) {
                        next.from < span.to && (working == spans && (working = spans.slice()), working[i] = span.copy(span.from, next.from), 
                        insertAhead(working, j, span.copy(next.from, span.to)));
                        break;
                    }
                    next.to != span.to && (working == spans && (working = spans.slice()), working[j] = next.copy(next.from, span.to), 
                    insertAhead(working, j + 1, next.copy(span.to, next.to)));
                }
            }
            return working;
        }
        function insertAhead(array, i, deco) {
            for (;i < array.length && byPos(deco, array[i]) > 0; ) i++;
            array.splice(i, 0, deco);
        }
        function viewDecorations(view) {
            var found = [];
            return view.someProp("decorations", (function(f) {
                var result = f(view.state);
                result && result != empty && found.push(result);
            })), view.cursorWrapper && found.push(DecorationSet.create(view.state.doc, [ view.cursorWrapper.deco ])), 
            DecorationGroup.from(found);
        }
        DecorationGroup.prototype.forChild = function(offset, child) {
            if (child.isLeaf) return DecorationSet.empty;
            for (var found = [], i = 0; i < this.members.length; i++) {
                var result = this.members[i].forChild(offset, child);
                result != empty && (result instanceof DecorationGroup ? found = found.concat(result.members) : found.push(result));
            }
            return DecorationGroup.from(found);
        }, DecorationGroup.prototype.eq = function(other) {
            if (!(other instanceof DecorationGroup) || other.members.length != this.members.length) return !1;
            for (var i = 0; i < this.members.length; i++) if (!this.members[i].eq(other.members[i])) return !1;
            return !0;
        }, DecorationGroup.prototype.locals = function(node) {
            for (var result, sorted = !0, i = 0; i < this.members.length; i++) {
                var locals = this.members[i].localsInner(node);
                if (locals.length) if (result) {
                    sorted && (result = result.slice(), sorted = !1);
                    for (var j = 0; j < locals.length; j++) result.push(locals[j]);
                } else result = locals;
            }
            return result ? removeOverlap(sorted ? result : result.sort(byPos)) : none;
        }, DecorationGroup.from = function(members) {
            switch (members.length) {
              case 0:
                return empty;

              case 1:
                return members[0];

              default:
                return new DecorationGroup(members);
            }
        };
        var EditorView = function(place, props) {
            this._props = props, this.state = props.state, this.dispatch = this.dispatch.bind(this), 
            this._root = null, this.focused = !1, this.trackWrites = null, this.dom = place && place.mount || document.createElement("div"), 
            place && (place.appendChild ? place.appendChild(this.dom) : place.apply ? place(this.dom) : place.mount && (this.mounted = !0)), 
            this.editable = getEditable(this), this.markCursor = null, this.cursorWrapper = null, 
            updateCursorWrapper(this), this.nodeViews = buildNodeViews(this), this.docView = docViewDesc(this.state.doc, computeDocDeco(this), viewDecorations(this), this.dom, this), 
            this.lastSelectedViewDesc = null, this.dragging = null, function(view) {
                view.shiftKey = !1, view.mouseDown = null, view.lastKeyCode = null, view.lastKeyCodeTime = 0, 
                view.lastClick = {
                    time: 0,
                    x: 0,
                    y: 0,
                    type: ""
                }, view.lastSelectionOrigin = null, view.lastSelectionTime = 0, view.lastIOSEnter = 0, 
                view.lastIOSEnterFallbackTimeout = null, view.composing = !1, view.composingTimeout = null, 
                view.compositionNodes = [], view.compositionEndedAt = -2e8, view.domObserver = new DOMObserver(view, (function(from, to, typeOver, added) {
                    return readDOMChange(view, from, to, typeOver, added);
                })), view.domObserver.start(), view.domChangeCount = 0, view.eventHandlers = Object.create(null);
                var loop = function(event) {
                    var handler = handlers[event];
                    view.dom.addEventListener(event, view.eventHandlers[event] = function(event) {
                        !function(view, event) {
                            if (!event.bubbles) return !0;
                            if (event.defaultPrevented) return !1;
                            for (var node = event.target; node != view.dom; node = node.parentNode) if (!node || 11 == node.nodeType || node.pmViewDesc && node.pmViewDesc.stopEvent(event)) return !1;
                            return !0;
                        }(view, event) || runCustomHandler(view, event) || !view.editable && event.type in editHandlers || handler(view, event);
                    });
                };
                for (var event in handlers) loop(event);
                result.safari && view.dom.addEventListener("input", (function() {
                    return null;
                })), ensureListeners(view);
            }(this), this.pluginViews = [], this.updatePluginViews();
        }, prototypeAccessors$2 = {
            props: {
                configurable: !0
            },
            root: {
                configurable: !0
            }
        };
        function computeDocDeco(view) {
            var attrs = Object.create(null);
            return attrs.class = "ProseMirror", attrs.contenteditable = String(view.editable), 
            view.someProp("attributes", (function(value) {
                if ("function" == typeof value && (value = value(view.state)), value) for (var attr in value) "class" == attr ? attrs.class += " " + value[attr] : attrs[attr] || "contenteditable" == attr || "nodeName" == attr || (attrs[attr] = String(value[attr]));
            })), [ Decoration.node(0, view.state.doc.content.size, attrs) ];
        }
        function updateCursorWrapper(view) {
            if (view.markCursor) {
                var dom = document.createElement("img");
                dom.setAttribute("mark-placeholder", "true"), view.cursorWrapper = {
                    dom: dom,
                    deco: Decoration.widget(view.state.selection.head, dom, {
                        raw: !0,
                        marks: view.markCursor
                    })
                };
            } else view.cursorWrapper = null;
        }
        function getEditable(view) {
            return !view.someProp("editable", (function(value) {
                return !1 === value(view.state);
            }));
        }
        function buildNodeViews(view) {
            var result = {};
            return view.someProp("nodeViews", (function(obj) {
                for (var prop in obj) Object.prototype.hasOwnProperty.call(result, prop) || (result[prop] = obj[prop]);
            })), result;
        }
        prototypeAccessors$2.props.get = function() {
            if (this._props.state != this.state) {
                var prev = this._props;
                for (var name in this._props = {}, prev) this._props[name] = prev[name];
                this._props.state = this.state;
            }
            return this._props;
        }, EditorView.prototype.update = function(props) {
            props.handleDOMEvents != this._props.handleDOMEvents && ensureListeners(this), this._props = props, 
            this.updateStateInner(props.state, !0);
        }, EditorView.prototype.setProps = function(props) {
            var updated = {};
            for (var name in this._props) updated[name] = this._props[name];
            for (var name$1 in updated.state = this.state, props) updated[name$1] = props[name$1];
            this.update(updated);
        }, EditorView.prototype.updateState = function(state) {
            this.updateStateInner(state, this.state.plugins != state.plugins);
        }, EditorView.prototype.updateStateInner = function(state, reconfigured) {
            var this$1 = this, prev = this.state, redraw = !1, updateSel = !1;
            if (state.storedMarks && this.composing && (clearComposition(this), updateSel = !0), 
            this.state = state, reconfigured) {
                var nodeViews = buildNodeViews(this);
                (function(a, b) {
                    var nA = 0, nB = 0;
                    for (var prop in a) {
                        if (a[prop] != b[prop]) return !0;
                        nA++;
                    }
                    for (var _ in b) nB++;
                    return nA != nB;
                })(nodeViews, this.nodeViews) && (this.nodeViews = nodeViews, redraw = !0), ensureListeners(this);
            }
            this.editable = getEditable(this), updateCursorWrapper(this);
            var innerDeco = viewDecorations(this), outerDeco = computeDocDeco(this), scroll = reconfigured ? "reset" : state.scrollToSelection > prev.scrollToSelection ? "to selection" : "preserve", updateDoc = redraw || !this.docView.matchesNode(state.doc, outerDeco, innerDeco);
            !updateDoc && state.selection.eq(prev.selection) || (updateSel = !0);
            var view, anchorDOM, domSel, sel1, sel2, depth, ref, refDOM, refTop, stack, newRefTop, oldScrollPos = "preserve" == scroll && updateSel && null == this.dom.style.overflowAnchor && function(view) {
                for (var refDOM, refTop, rect = view.dom.getBoundingClientRect(), startY = Math.max(0, rect.top), x = (rect.left + rect.right) / 2, y = startY + 1; y < Math.min(innerHeight, rect.bottom); y += 5) {
                    var dom = view.root.elementFromPoint(x, y);
                    if (dom != view.dom && view.dom.contains(dom)) {
                        var localRect = dom.getBoundingClientRect();
                        if (localRect.top >= startY - 20) {
                            refDOM = dom, refTop = localRect.top;
                            break;
                        }
                    }
                }
                return {
                    refDOM: refDOM,
                    refTop: refTop,
                    stack: scrollStack(view.dom)
                };
            }(this);
            if (updateSel) {
                this.domObserver.stop();
                var forceSelUpdate = updateDoc && (result.ie || result.chrome) && !this.composing && !prev.selection.empty && !state.selection.empty && (sel1 = prev.selection, 
                sel2 = state.selection, depth = Math.min(sel1.$anchor.sharedDepth(sel1.head), sel2.$anchor.sharedDepth(sel2.head)), 
                sel1.$anchor.start(depth) != sel2.$anchor.start(depth));
                if (updateDoc) {
                    var chromeKludge = result.chrome ? this.trackWrites = this.root.getSelection().focusNode : null;
                    !redraw && this.docView.update(state.doc, outerDeco, innerDeco, this) || (this.docView.updateOuterDeco([]), 
                    this.docView.destroy(), this.docView = docViewDesc(state.doc, outerDeco, innerDeco, this.dom, this)), 
                    chromeKludge && !this.trackWrites && (forceSelUpdate = !0);
                }
                forceSelUpdate || !(this.mouseDown && this.domObserver.currentSelection.eq(this.root.getSelection()) && (view = this, 
                anchorDOM = view.docView.domFromPos(view.state.selection.anchor), domSel = view.root.getSelection(), 
                isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset))) ? selectionToDOM(this, forceSelUpdate) : (syncNodeSelection(this, state.selection), 
                this.domObserver.setCurSelection()), this.domObserver.start();
            }
            if (this.updatePluginViews(prev), "reset" == scroll) this.dom.scrollTop = 0; else if ("to selection" == scroll) {
                var startDOM = this.root.getSelection().focusNode;
                this.someProp("handleScrollToSelection", (function(f) {
                    return f(this$1);
                })) || (state.selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.NodeSelection ? scrollRectIntoView(this, this.docView.domAfterPos(state.selection.from).getBoundingClientRect(), startDOM) : scrollRectIntoView(this, this.coordsAtPos(state.selection.head), startDOM));
            } else oldScrollPos && (refDOM = (ref = oldScrollPos).refDOM, refTop = ref.refTop, 
            stack = ref.stack, newRefTop = refDOM ? refDOM.getBoundingClientRect().top : 0, 
            restoreScrollStack(stack, 0 == newRefTop ? 0 : newRefTop - refTop));
        }, EditorView.prototype.destroyPluginViews = function() {
            for (var view; view = this.pluginViews.pop(); ) view.destroy && view.destroy();
        }, EditorView.prototype.updatePluginViews = function(prevState) {
            if (prevState && prevState.plugins == this.state.plugins) for (var i$1 = 0; i$1 < this.pluginViews.length; i$1++) {
                var pluginView = this.pluginViews[i$1];
                pluginView.update && pluginView.update(this, prevState);
            } else {
                this.destroyPluginViews();
                for (var i = 0; i < this.state.plugins.length; i++) {
                    var plugin = this.state.plugins[i];
                    plugin.spec.view && this.pluginViews.push(plugin.spec.view(this));
                }
            }
        }, EditorView.prototype.someProp = function(propName, f) {
            var value, prop = this._props && this._props[propName];
            if (null != prop && (value = f ? f(prop) : prop)) return value;
            var plugins = this.state.plugins;
            if (plugins) for (var i = 0; i < plugins.length; i++) {
                var prop$1 = plugins[i].props[propName];
                if (null != prop$1 && (value = f ? f(prop$1) : prop$1)) return value;
            }
        }, EditorView.prototype.hasFocus = function() {
            return this.root.activeElement == this.dom;
        }, EditorView.prototype.focus = function() {
            this.domObserver.stop(), this.editable && function(dom) {
                if (dom.setActive) return dom.setActive();
                if (preventScrollSupported) return dom.focus(preventScrollSupported);
                var stored = scrollStack(dom);
                dom.focus(null == preventScrollSupported ? {
                    get preventScroll() {
                        return preventScrollSupported = {
                            preventScroll: !0
                        }, !0;
                    }
                } : void 0), preventScrollSupported || (preventScrollSupported = !1, restoreScrollStack(stored, 0));
            }(this.dom), selectionToDOM(this), this.domObserver.start();
        }, prototypeAccessors$2.root.get = function() {
            var cached = this._root;
            if (null == cached) for (var search = this.dom.parentNode; search; search = search.parentNode) if (9 == search.nodeType || 11 == search.nodeType && search.host) return search.getSelection || (Object.getPrototypeOf(search).getSelection = function() {
                return document.getSelection();
            }), this._root = search;
            return cached || document;
        }, EditorView.prototype.posAtCoords = function(coords) {
            return posAtCoords(this, coords);
        }, EditorView.prototype.coordsAtPos = function(pos) {
            return coordsAtPos(this, pos);
        }, EditorView.prototype.domAtPos = function(pos) {
            return this.docView.domFromPos(pos);
        }, EditorView.prototype.nodeDOM = function(pos) {
            var desc = this.docView.descAt(pos);
            return desc ? desc.nodeDOM : null;
        }, EditorView.prototype.posAtDOM = function(node, offset, bias) {
            void 0 === bias && (bias = -1);
            var pos = this.docView.posFromDOM(node, offset, bias);
            if (null == pos) throw new RangeError("DOM position not inside the editor");
            return pos;
        }, EditorView.prototype.endOfTextblock = function(dir, state) {
            return endOfTextblock(this, state || this.state, dir);
        }, EditorView.prototype.destroy = function() {
            this.docView && (!function(view) {
                for (var type in view.domObserver.stop(), view.eventHandlers) view.dom.removeEventListener(type, view.eventHandlers[type]);
                clearTimeout(view.composingTimeout), clearTimeout(view.lastIOSEnterFallbackTimeout);
            }(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], viewDecorations(this), this), 
            this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), 
            this.docView.destroy(), this.docView = null);
        }, EditorView.prototype.dispatchEvent = function(event) {
            return function(view, event) {
                runCustomHandler(view, event) || !handlers[event.type] || !view.editable && event.type in editHandlers || handlers[event.type](view, event);
            }(this, event);
        }, EditorView.prototype.dispatch = function(tr) {
            var dispatchTransaction = this._props.dispatchTransaction;
            dispatchTransaction ? dispatchTransaction.call(this, tr) : this.updateState(this.state.apply(tr));
        }, Object.defineProperties(EditorView.prototype, prototypeAccessors$2);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function Token(type, tag, nesting) {
            this.type = type, this.tag = tag, this.attrs = null, this.map = null, this.nesting = nesting, 
            this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", 
            this.meta = null, this.block = !1, this.hidden = !1;
        }
        Token.prototype.attrIndex = function(name) {
            var attrs, i, len;
            if (!this.attrs) return -1;
            for (i = 0, len = (attrs = this.attrs).length; i < len; i++) if (attrs[i][0] === name) return i;
            return -1;
        }, Token.prototype.attrPush = function(attrData) {
            this.attrs ? this.attrs.push(attrData) : this.attrs = [ attrData ];
        }, Token.prototype.attrSet = function(name, value) {
            var idx = this.attrIndex(name), attrData = [ name, value ];
            idx < 0 ? this.attrPush(attrData) : this.attrs[idx] = attrData;
        }, Token.prototype.attrGet = function(name) {
            var idx = this.attrIndex(name), value = null;
            return idx >= 0 && (value = this.attrs[idx][1]), value;
        }, Token.prototype.attrJoin = function(name, value) {
            var idx = this.attrIndex(name);
            idx < 0 ? this.attrPush([ name, value ]) : this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
        }, module.exports = Token;
    }, function(module, exports) {
        module.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function Ruler() {
            this.__rules__ = [], this.__cache__ = null;
        }
        Ruler.prototype.__find__ = function(name) {
            for (var i = 0; i < this.__rules__.length; i++) if (this.__rules__[i].name === name) return i;
            return -1;
        }, Ruler.prototype.__compile__ = function() {
            var self = this, chains = [ "" ];
            self.__rules__.forEach((function(rule) {
                rule.enabled && rule.alt.forEach((function(altName) {
                    chains.indexOf(altName) < 0 && chains.push(altName);
                }));
            })), self.__cache__ = {}, chains.forEach((function(chain) {
                self.__cache__[chain] = [], self.__rules__.forEach((function(rule) {
                    rule.enabled && (chain && rule.alt.indexOf(chain) < 0 || self.__cache__[chain].push(rule.fn));
                }));
            }));
        }, Ruler.prototype.at = function(name, fn, options) {
            var index = this.__find__(name), opt = options || {};
            if (-1 === index) throw new Error("Parser rule not found: " + name);
            this.__rules__[index].fn = fn, this.__rules__[index].alt = opt.alt || [], this.__cache__ = null;
        }, Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
            var index = this.__find__(beforeName), opt = options || {};
            if (-1 === index) throw new Error("Parser rule not found: " + beforeName);
            this.__rules__.splice(index, 0, {
                name: ruleName,
                enabled: !0,
                fn: fn,
                alt: opt.alt || []
            }), this.__cache__ = null;
        }, Ruler.prototype.after = function(afterName, ruleName, fn, options) {
            var index = this.__find__(afterName), opt = options || {};
            if (-1 === index) throw new Error("Parser rule not found: " + afterName);
            this.__rules__.splice(index + 1, 0, {
                name: ruleName,
                enabled: !0,
                fn: fn,
                alt: opt.alt || []
            }), this.__cache__ = null;
        }, Ruler.prototype.push = function(ruleName, fn, options) {
            var opt = options || {};
            this.__rules__.push({
                name: ruleName,
                enabled: !0,
                fn: fn,
                alt: opt.alt || []
            }), this.__cache__ = null;
        }, Ruler.prototype.enable = function(list, ignoreInvalid) {
            Array.isArray(list) || (list = [ list ]);
            var result = [];
            return list.forEach((function(name) {
                var idx = this.__find__(name);
                if (idx < 0) {
                    if (ignoreInvalid) return;
                    throw new Error("Rules manager: invalid rule name " + name);
                }
                this.__rules__[idx].enabled = !0, result.push(name);
            }), this), this.__cache__ = null, result;
        }, Ruler.prototype.enableOnly = function(list, ignoreInvalid) {
            Array.isArray(list) || (list = [ list ]), this.__rules__.forEach((function(rule) {
                rule.enabled = !1;
            })), this.enable(list, ignoreInvalid);
        }, Ruler.prototype.disable = function(list, ignoreInvalid) {
            Array.isArray(list) || (list = [ list ]);
            var result = [];
            return list.forEach((function(name) {
                var idx = this.__find__(name);
                if (idx < 0) {
                    if (ignoreInvalid) return;
                    throw new Error("Rules manager: invalid rule name " + name);
                }
                this.__rules__[idx].enabled = !1, result.push(name);
            }), this), this.__cache__ = null, result;
        }, Ruler.prototype.getRules = function(chainName) {
            return null === this.__cache__ && this.__compile__(), this.__cache__[chainName] || [];
        }, module.exports = Ruler;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__(4), helpers = __webpack_require__(29), Renderer = __webpack_require__(33), ParserCore = __webpack_require__(34), ParserBlock = __webpack_require__(42), ParserInline = __webpack_require__(56), LinkifyIt = __webpack_require__(69), mdurl = __webpack_require__(11), punycode = __webpack_require__(71), config = {
            default: __webpack_require__(73),
            zero: __webpack_require__(74),
            commonmark: __webpack_require__(75)
        }, BAD_PROTO_RE = /^(vbscript|javascript|file|data):/, GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
        function validateLink(url) {
            var str = url.trim().toLowerCase();
            return !BAD_PROTO_RE.test(str) || !!GOOD_DATA_RE.test(str);
        }
        var RECODE_HOSTNAME_FOR = [ "http:", "https:", "mailto:" ];
        function normalizeLink(url) {
            var parsed = mdurl.parse(url, !0);
            if (parsed.hostname && (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0)) try {
                parsed.hostname = punycode.toASCII(parsed.hostname);
            } catch (er) {}
            return mdurl.encode(mdurl.format(parsed));
        }
        function normalizeLinkText(url) {
            var parsed = mdurl.parse(url, !0);
            if (parsed.hostname && (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0)) try {
                parsed.hostname = punycode.toUnicode(parsed.hostname);
            } catch (er) {}
            return mdurl.decode(mdurl.format(parsed));
        }
        function MarkdownIt(presetName, options) {
            if (!(this instanceof MarkdownIt)) return new MarkdownIt(presetName, options);
            options || utils.isString(presetName) || (options = presetName || {}, presetName = "default"), 
            this.inline = new ParserInline, this.block = new ParserBlock, this.core = new ParserCore, 
            this.renderer = new Renderer, this.linkify = new LinkifyIt, this.validateLink = validateLink, 
            this.normalizeLink = normalizeLink, this.normalizeLinkText = normalizeLinkText, 
            this.utils = utils, this.helpers = utils.assign({}, helpers), this.options = {}, 
            this.configure(presetName), options && this.set(options);
        }
        MarkdownIt.prototype.set = function(options) {
            return utils.assign(this.options, options), this;
        }, MarkdownIt.prototype.configure = function(presets) {
            var presetName, self = this;
            if (utils.isString(presets) && !(presets = config[presetName = presets])) throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
            if (!presets) throw new Error("Wrong `markdown-it` preset, can't be empty");
            return presets.options && self.set(presets.options), presets.components && Object.keys(presets.components).forEach((function(name) {
                presets.components[name].rules && self[name].ruler.enableOnly(presets.components[name].rules), 
                presets.components[name].rules2 && self[name].ruler2.enableOnly(presets.components[name].rules2);
            })), this;
        }, MarkdownIt.prototype.enable = function(list, ignoreInvalid) {
            var result = [];
            Array.isArray(list) || (list = [ list ]), [ "core", "block", "inline" ].forEach((function(chain) {
                result = result.concat(this[chain].ruler.enable(list, !0));
            }), this), result = result.concat(this.inline.ruler2.enable(list, !0));
            var missed = list.filter((function(name) {
                return result.indexOf(name) < 0;
            }));
            if (missed.length && !ignoreInvalid) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
            return this;
        }, MarkdownIt.prototype.disable = function(list, ignoreInvalid) {
            var result = [];
            Array.isArray(list) || (list = [ list ]), [ "core", "block", "inline" ].forEach((function(chain) {
                result = result.concat(this[chain].ruler.disable(list, !0));
            }), this), result = result.concat(this.inline.ruler2.disable(list, !0));
            var missed = list.filter((function(name) {
                return result.indexOf(name) < 0;
            }));
            if (missed.length && !ignoreInvalid) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
            return this;
        }, MarkdownIt.prototype.use = function(plugin) {
            var args = [ this ].concat(Array.prototype.slice.call(arguments, 1));
            return plugin.apply(plugin, args), this;
        }, MarkdownIt.prototype.parse = function(src, env) {
            if ("string" != typeof src) throw new Error("Input data should be a String");
            var state = new this.core.State(src, this, env);
            return this.core.process(state), state.tokens;
        }, MarkdownIt.prototype.render = function(src, env) {
            return env = env || {}, this.renderer.render(this.parse(src, env), this.options, env);
        }, MarkdownIt.prototype.parseInline = function(src, env) {
            var state = new this.core.State(src, this, env);
            return state.inlineMode = !0, this.core.process(state), state.tokens;
        }, MarkdownIt.prototype.renderInline = function(src, env) {
            return env = env || {}, this.renderer.render(this.parseInline(src, env), this.options, env);
        }, module.exports = MarkdownIt;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(22);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports.encode = __webpack_require__(23), module.exports.decode = __webpack_require__(24), 
        module.exports.format = __webpack_require__(25), module.exports.parse = __webpack_require__(26);
    }, function(module, exports) {
        module.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    }, function(module, exports) {
        module.exports = /[\0-\x1F\x7F-\x9F]/;
    }, function(module, exports) {
        module.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>", close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", HTML_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + "|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"), HTML_OPEN_CLOSE_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
        module.exports.HTML_TAG_RE = HTML_TAG_RE, module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function postProcess(state, delimiters) {
            var i, j, startDelim, endDelim, token, loneMarkers = [], max = delimiters.length;
            for (i = 0; i < max; i++) 126 === (startDelim = delimiters[i]).marker && -1 !== startDelim.end && (endDelim = delimiters[startDelim.end], 
            (token = state.tokens[startDelim.token]).type = "s_open", token.tag = "s", token.nesting = 1, 
            token.markup = "~~", token.content = "", (token = state.tokens[endDelim.token]).type = "s_close", 
            token.tag = "s", token.nesting = -1, token.markup = "~~", token.content = "", "text" === state.tokens[endDelim.token - 1].type && "~" === state.tokens[endDelim.token - 1].content && loneMarkers.push(endDelim.token - 1));
            for (;loneMarkers.length; ) {
                for (j = (i = loneMarkers.pop()) + 1; j < state.tokens.length && "s_close" === state.tokens[j].type; ) j++;
                i !== --j && (token = state.tokens[j], state.tokens[j] = state.tokens[i], state.tokens[i] = token);
            }
        }
        module.exports.tokenize = function(state, silent) {
            var i, scanned, len, ch, start = state.pos, marker = state.src.charCodeAt(start);
            if (silent) return !1;
            if (126 !== marker) return !1;
            if (len = (scanned = state.scanDelims(state.pos, !0)).length, ch = String.fromCharCode(marker), 
            len < 2) return !1;
            for (len % 2 && (state.push("text", "", 0).content = ch, len--), i = 0; i < len; i += 2) state.push("text", "", 0).content = ch + ch, 
            state.delimiters.push({
                marker: marker,
                length: 0,
                jump: i,
                token: state.tokens.length - 1,
                end: -1,
                open: scanned.can_open,
                close: scanned.can_close
            });
            return state.pos += scanned.length, !0;
        }, module.exports.postProcess = function(state) {
            var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
            for (postProcess(state, state.delimiters), curr = 0; curr < max; curr++) tokens_meta[curr] && tokens_meta[curr].delimiters && postProcess(state, tokens_meta[curr].delimiters);
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function postProcess(state, delimiters) {
            var i, startDelim, endDelim, token, ch, isStrong;
            for (i = delimiters.length - 1; i >= 0; i--) 95 !== (startDelim = delimiters[i]).marker && 42 !== startDelim.marker || -1 !== startDelim.end && (endDelim = delimiters[startDelim.end], 
            isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && delimiters[i - 1].token === startDelim.token - 1 && delimiters[startDelim.end + 1].token === endDelim.token + 1 && delimiters[i - 1].marker === startDelim.marker, 
            ch = String.fromCharCode(startDelim.marker), (token = state.tokens[startDelim.token]).type = isStrong ? "strong_open" : "em_open", 
            token.tag = isStrong ? "strong" : "em", token.nesting = 1, token.markup = isStrong ? ch + ch : ch, 
            token.content = "", (token = state.tokens[endDelim.token]).type = isStrong ? "strong_close" : "em_close", 
            token.tag = isStrong ? "strong" : "em", token.nesting = -1, token.markup = isStrong ? ch + ch : ch, 
            token.content = "", isStrong && (state.tokens[delimiters[i - 1].token].content = "", 
            state.tokens[delimiters[startDelim.end + 1].token].content = "", i--));
        }
        module.exports.tokenize = function(state, silent) {
            var i, scanned, start = state.pos, marker = state.src.charCodeAt(start);
            if (silent) return !1;
            if (95 !== marker && 42 !== marker) return !1;
            for (scanned = state.scanDelims(state.pos, 42 === marker), i = 0; i < scanned.length; i++) state.push("text", "", 0).content = String.fromCharCode(marker), 
            state.delimiters.push({
                marker: marker,
                length: scanned.length,
                jump: i,
                token: state.tokens.length - 1,
                end: -1,
                open: scanned.can_open,
                close: scanned.can_close
            });
            return state.pos += scanned.length, !0;
        }, module.exports.postProcess = function(state) {
            var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
            for (postProcess(state, state.delimiters), curr = 0; curr < max; curr++) tokens_meta[curr] && tokens_meta[curr].delimiters && postProcess(state, tokens_meta[curr].delimiters);
        };
    }, function(module, exports) {
        var g;
        g = function() {
            return this;
        }();
        try {
            g = g || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (g = window);
        }
        module.exports = g;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(9);
    }, function(module, exports, __webpack_require__) {
        !function(e, t) {
            for (var n in t) e[n] = t[n];
        }(exports, function(e) {
            var t = {};
            function n(o) {
                if (t[o]) return t[o].exports;
                var r = t[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
            }
            return n.m = e, n.c = t, n.d = function(e, t, o) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: o
                });
            }, n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                });
            }, n.t = function(e, t) {
                if (1 & t && (e = n(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var o = Object.create(null);
                if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var r in e) n.d(o, r, function(t) {
                    return e[t];
                }.bind(null, r));
                return o;
            }, n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default;
                } : function() {
                    return e;
                };
                return n.d(t, "a", t), t;
            }, n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, n.p = "", n(n.s = 4);
        }([ function(e, t) {
            e.exports = __webpack_require__(5);
        }, function(e, t) {
            e.exports = __webpack_require__(1);
        }, , , function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "getHighlightDecorations", (function() {
                return i;
            })), n.d(t, "DecorationCache", (function() {
                return s;
            })), n.d(t, "highlightPlugin", (function() {
                return d;
            }));
            var o = n(0), r = function() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var o = Array(e), r = 0;
                for (t = 0; t < n; t++) for (var i = arguments[t], u = 0, a = i.length; u < a; u++, 
                r++) o[r] = i[u];
                return o;
            };
            function i(e, t, n, i, a) {
                if (!(e && e.nodeSize && (null == n ? void 0 : n.length) && i)) return [];
                var c = function(e, t) {
                    var n = [];
                    return e.descendants((function(e, o) {
                        if (e.isBlock && t.indexOf(e.type.name) > -1) return n.push({
                            node: e,
                            pos: o
                        }), !1;
                    })), n;
                }(e, n), s = [];
                return c.forEach((function(e) {
                    if (null == a ? void 0 : a.preRenderer) {
                        var n = a.preRenderer(e.node, e.pos);
                        if (n) return void (s = r(s, n));
                    }
                    var c = i(e.node);
                    if (!c || t.getLanguage(c)) {
                        var d = c ? t.highlight(c, e.node.textContent) : t.highlightAuto(e.node.textContent);
                        !c && (null == a ? void 0 : a.autohighlightCallback) && a.autohighlightCallback(e.node, e.pos, d.language);
                        var f = d.emitter, l = new u(f, e.pos, f.options.classPrefix).value(), p = [];
                        l.forEach((function(e) {
                            if (e.kind) {
                                var t = o.Decoration.inline(e.from, e.to, {
                                    class: e.classes
                                });
                                p.push(t);
                            }
                        })), (null == a ? void 0 : a.postRenderer) && a.postRenderer(e.node, e.pos, p), 
                        s = r(s, p);
                    }
                })), s;
            }
            var u = function() {
                function e(e, t, n) {
                    this.buffer = [], this.nodeQueue = [], this.classPrefix = n, this.currentPosition = t + 1, 
                    e.walk(this);
                }
                return Object.defineProperty(e.prototype, "currentNode", {
                    get: function() {
                        return this.nodeQueue.length ? this.nodeQueue.slice(-1) : null;
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.addText = function(e) {
                    this.currentNode && (this.currentPosition += e.length);
                }, e.prototype.openNode = function(e) {
                    var t = e.kind || "";
                    e.sublanguage || (t = "" + this.classPrefix + t);
                    var n = this.newNode();
                    n.kind = e.kind, n.classes = t, n.from = this.currentPosition, this.nodeQueue.push(n);
                }, e.prototype.closeNode = function(e) {
                    var t = this.nodeQueue.pop();
                    if (!t) throw "Cannot close node!";
                    if (t.to = this.currentPosition, e.kind !== t.kind) throw "Mismatch!";
                    this.buffer.push(t);
                }, e.prototype.value = function() {
                    return this.buffer;
                }, e.prototype.newNode = function() {
                    return {
                        from: 0,
                        to: 0,
                        kind: void 0,
                        classes: ""
                    };
                }, e;
            }(), a = n(1), c = function() {
                return (c = Object.assign || function(e) {
                    for (var t, n = 1, o = arguments.length; n < o; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e;
                }).apply(this, arguments);
            }, s = function() {
                function e(e) {
                    this.cache = c({}, e);
                }
                return e.prototype.get = function(e) {
                    return this.cache[e] || null;
                }, e.prototype.set = function(e, t, n) {
                    this.cache[e] = {
                        node: t,
                        decorations: n
                    };
                }, e.prototype.replace = function(e, t, n, o) {
                    this.remove(e), this.set(t, n, o);
                }, e.prototype.remove = function(e) {
                    delete this.cache[e];
                }, e.prototype.invalidate = function(t) {
                    var n = this, o = new e(this.cache), r = t.mapping;
                    return Object.keys(this.cache).forEach((function(e) {
                        var i = +e, u = r.mapResult(i), a = t.doc.nodeAt(u.pos), c = n.get(i), s = c.node, d = c.decorations;
                        if (u.deleted || !(null == a ? void 0 : a.eq(s))) o.remove(i); else if (i !== u.pos) {
                            var f = d.map((function(e) {
                                return e.map(r, 0, 0);
                            })).filter((function(e) {
                                return null !== e;
                            }));
                            o.replace(i, u.pos, a, f);
                        }
                    })), o;
                }, e;
            }();
            function d(e, t, n, r) {
                void 0 === t && (t = [ "code_block" ]);
                var u = n || function(e) {
                    var t = e.attrs.detectedHighlightLanguage, n = e.attrs.params;
                    return t || (null == n ? void 0 : n.split(" ")[0]) || "";
                }, c = r || function(e, t, n, o) {
                    var r = t.attrs || {};
                    return r.detectedHighlightLanguage = o, e.setNodeMarkup(n, void 0, r);
                }, d = function(n, o) {
                    var r = [];
                    return {
                        content: i(n, e, t, u, {
                            preRenderer: function(e, t) {
                                var n;
                                return null === (n = o.get(t)) || void 0 === n ? void 0 : n.decorations;
                            },
                            postRenderer: function(e, t, n) {
                                o.set(t, e, n);
                            },
                            autohighlightCallback: function(e, t, n) {
                                r.push({
                                    node: e,
                                    pos: t,
                                    language: n
                                });
                            }
                        }),
                        autodetectedLanguages: r
                    };
                }, f = new a.PluginKey;
                return new a.Plugin({
                    key: f,
                    state: {
                        init: function(e, t) {
                            var n = new s({}), r = d(t.doc, n);
                            return {
                                cache: n,
                                decorations: o.DecorationSet.create(t.doc, r.content),
                                autodetectedLanguages: r.autodetectedLanguages
                            };
                        },
                        apply: function(e, t) {
                            var n = t.cache.invalidate(e);
                            if (!e.docChanged) return {
                                cache: n,
                                decorations: t.decorations.map(e.mapping, e.doc),
                                autodetectedLanguages: []
                            };
                            var r = d(e.doc, n);
                            return {
                                cache: n,
                                decorations: o.DecorationSet.create(e.doc, r.content),
                                autodetectedLanguages: r.autodetectedLanguages
                            };
                        }
                    },
                    props: {
                        decorations: function(e) {
                            return this.getState(e).decorations;
                        }
                    },
                    view: function(e) {
                        var t = function(e) {
                            var t = f.getState(e.state);
                            if (t && t.autodetectedLanguages.length) {
                                var n = e.state.tr;
                                t.autodetectedLanguages.forEach((function(e) {
                                    if (e.language) {
                                        var t = c(n, e.node, e.pos, e.language);
                                        n = t || n;
                                    }
                                })), n = n.setMeta("addToHistory", !1), e.dispatch(n);
                            }
                        };
                        return t(e), {
                            update: t
                        };
                    }
                });
            }
        } ]));
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function(global) {
            __webpack_require__.d(__webpack_exports__, "a", (function() {
                return getHljsInstance;
            }));
            var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3), highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__);
            function getHljsInstance() {
                return global.hljs || __webpack_require__(3);
            }
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a && !global.hljs && (highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("markdown", __webpack_require__(76)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("bash", __webpack_require__(77)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("c-like", __webpack_require__(78)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("cpp", __webpack_require__(79)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("csharp", __webpack_require__(80)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("coffeescript", __webpack_require__(81)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("xml", __webpack_require__(82)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("java", __webpack_require__(83)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("json", __webpack_require__(84)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("perl", __webpack_require__(85)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("python", __webpack_require__(86)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("ruby", __webpack_require__(87)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("clojure", __webpack_require__(88)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("css", __webpack_require__(89)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("dart", __webpack_require__(90)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("erlang", __webpack_require__(91)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("go", __webpack_require__(92)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("haskell", __webpack_require__(93)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("javascript", __webpack_require__(94)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("kotlin", __webpack_require__(95)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("lisp", __webpack_require__(96)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("scheme", __webpack_require__(97)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("lua", __webpack_require__(98)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("matlab", __webpack_require__(99)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("mathematica", __webpack_require__(100)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("ocaml", __webpack_require__(101)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("protobuf", __webpack_require__(102)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("r", __webpack_require__(103)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("rust", __webpack_require__(104)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("scala", __webpack_require__(105)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("sql", __webpack_require__(106)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("swift", __webpack_require__(107)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("vhdl", __webpack_require__(108)), 
            highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("vbscript", __webpack_require__(109)));
        }).call(this, __webpack_require__(18));
    }, function(module) {
        module.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}');
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var encodeCache = {};
        function encode(string, exclude, keepEscaped) {
            var i, l, code, nextCode, cache, result = "";
            for ("string" != typeof exclude && (keepEscaped = exclude, exclude = encode.defaultChars), 
            void 0 === keepEscaped && (keepEscaped = !0), cache = function(exclude) {
                var i, ch, cache = encodeCache[exclude];
                if (cache) return cache;
                for (cache = encodeCache[exclude] = [], i = 0; i < 128; i++) ch = String.fromCharCode(i), 
                /^[0-9a-z]$/i.test(ch) ? cache.push(ch) : cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
                for (i = 0; i < exclude.length; i++) cache[exclude.charCodeAt(i)] = exclude[i];
                return cache;
            }(exclude), i = 0, l = string.length; i < l; i++) if (code = string.charCodeAt(i), 
            keepEscaped && 37 === code && i + 2 < l && /^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) result += string.slice(i, i + 3), 
            i += 2; else if (code < 128) result += cache[code]; else if (code >= 55296 && code <= 57343) {
                if (code >= 55296 && code <= 56319 && i + 1 < l && (nextCode = string.charCodeAt(i + 1)) >= 56320 && nextCode <= 57343) {
                    result += encodeURIComponent(string[i] + string[i + 1]), i++;
                    continue;
                }
                result += "%EF%BF%BD";
            } else result += encodeURIComponent(string[i]);
            return result;
        }
        encode.defaultChars = ";/?:@&=+$,-_.!~*'()#", encode.componentChars = "-_.!~*'()", 
        module.exports = encode;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var decodeCache = {};
        function decode(string, exclude) {
            var cache;
            return "string" != typeof exclude && (exclude = decode.defaultChars), cache = function(exclude) {
                var i, ch, cache = decodeCache[exclude];
                if (cache) return cache;
                for (cache = decodeCache[exclude] = [], i = 0; i < 128; i++) ch = String.fromCharCode(i), 
                cache.push(ch);
                for (i = 0; i < exclude.length; i++) cache[ch = exclude.charCodeAt(i)] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
                return cache;
            }(exclude), string.replace(/(%[a-f0-9]{2})+/gi, (function(seq) {
                var i, l, b1, b2, b3, b4, chr, result = "";
                for (i = 0, l = seq.length; i < l; i += 3) (b1 = parseInt(seq.slice(i + 1, i + 3), 16)) < 128 ? result += cache[b1] : 192 == (224 & b1) && i + 3 < l && 128 == (192 & (b2 = parseInt(seq.slice(i + 4, i + 6), 16))) ? (result += (chr = b1 << 6 & 1984 | 63 & b2) < 128 ? "��" : String.fromCharCode(chr), 
                i += 3) : 224 == (240 & b1) && i + 6 < l && (b2 = parseInt(seq.slice(i + 4, i + 6), 16), 
                b3 = parseInt(seq.slice(i + 7, i + 9), 16), 128 == (192 & b2) && 128 == (192 & b3)) ? (result += (chr = b1 << 12 & 61440 | b2 << 6 & 4032 | 63 & b3) < 2048 || chr >= 55296 && chr <= 57343 ? "���" : String.fromCharCode(chr), 
                i += 6) : 240 == (248 & b1) && i + 9 < l && (b2 = parseInt(seq.slice(i + 4, i + 6), 16), 
                b3 = parseInt(seq.slice(i + 7, i + 9), 16), b4 = parseInt(seq.slice(i + 10, i + 12), 16), 
                128 == (192 & b2) && 128 == (192 & b3) && 128 == (192 & b4)) ? ((chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | 63 & b4) < 65536 || chr > 1114111 ? result += "����" : (chr -= 65536, 
                result += String.fromCharCode(55296 + (chr >> 10), 56320 + (1023 & chr))), i += 9) : result += "�";
                return result;
            }));
        }
        decode.defaultChars = ";/?:@&=+$,#", decode.componentChars = "", module.exports = decode;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(url) {
            var result = "";
            return result += url.protocol || "", result += url.slashes ? "//" : "", result += url.auth ? url.auth + "@" : "", 
            url.hostname && -1 !== url.hostname.indexOf(":") ? result += "[" + url.hostname + "]" : result += url.hostname || "", 
            result += url.port ? ":" + url.port : "", result += url.pathname || "", result += url.search || "", 
            result += url.hash || "";
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function Url() {
            this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, 
            this.hash = null, this.search = null, this.pathname = null;
        }
        var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, unwise = [ "{", "}", "|", "\\", "^", "`" ].concat([ "<", ">", '"', "`", " ", "\r", "\n", "\t" ]), autoEscape = [ "'" ].concat(unwise), nonHostChars = [ "%", "/", "?", ";", "#" ].concat(autoEscape), hostEndingChars = [ "/", "?", "#" ], hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, hostlessProtocol = {
            javascript: !0,
            "javascript:": !0
        }, slashedProtocol = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        };
        Url.prototype.parse = function(url, slashesDenoteHost) {
            var i, l, lowerProto, hec, slashes, rest = url;
            if (rest = rest.trim(), !slashesDenoteHost && 1 === url.split("#").length) {
                var simplePath = simplePathPattern.exec(rest);
                if (simplePath) return this.pathname = simplePath[1], simplePath[2] && (this.search = simplePath[2]), 
                this;
            }
            var proto = protocolPattern.exec(rest);
            if (proto && (lowerProto = (proto = proto[0]).toLowerCase(), this.protocol = proto, 
            rest = rest.substr(proto.length)), (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(slashes = "//" === rest.substr(0, 2)) || proto && hostlessProtocol[proto] || (rest = rest.substr(2), 
            this.slashes = !0)), !hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
                var auth, atSign, hostEnd = -1;
                for (i = 0; i < hostEndingChars.length; i++) -1 !== (hec = rest.indexOf(hostEndingChars[i])) && (-1 === hostEnd || hec < hostEnd) && (hostEnd = hec);
                for (-1 !== (atSign = -1 === hostEnd ? rest.lastIndexOf("@") : rest.lastIndexOf("@", hostEnd)) && (auth = rest.slice(0, atSign), 
                rest = rest.slice(atSign + 1), this.auth = auth), hostEnd = -1, i = 0; i < nonHostChars.length; i++) -1 !== (hec = rest.indexOf(nonHostChars[i])) && (-1 === hostEnd || hec < hostEnd) && (hostEnd = hec);
                -1 === hostEnd && (hostEnd = rest.length), ":" === rest[hostEnd - 1] && hostEnd--;
                var host = rest.slice(0, hostEnd);
                rest = rest.slice(hostEnd), this.parseHost(host), this.hostname = this.hostname || "";
                var ipv6Hostname = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!ipv6Hostname) {
                    var hostparts = this.hostname.split(/\./);
                    for (i = 0, l = hostparts.length; i < l; i++) {
                        var part = hostparts[i];
                        if (part && !part.match(hostnamePartPattern)) {
                            for (var newpart = "", j = 0, k = part.length; j < k; j++) part.charCodeAt(j) > 127 ? newpart += "x" : newpart += part[j];
                            if (!newpart.match(hostnamePartPattern)) {
                                var validParts = hostparts.slice(0, i), notHost = hostparts.slice(i + 1), bit = part.match(hostnamePartStart);
                                bit && (validParts.push(bit[1]), notHost.unshift(bit[2])), notHost.length && (rest = notHost.join(".") + rest), 
                                this.hostname = validParts.join(".");
                                break;
                            }
                        }
                    }
                }
                this.hostname.length > 255 && (this.hostname = ""), ipv6Hostname && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
            }
            var hash = rest.indexOf("#");
            -1 !== hash && (this.hash = rest.substr(hash), rest = rest.slice(0, hash));
            var qm = rest.indexOf("?");
            return -1 !== qm && (this.search = rest.substr(qm), rest = rest.slice(0, qm)), rest && (this.pathname = rest), 
            slashedProtocol[lowerProto] && this.hostname && !this.pathname && (this.pathname = ""), 
            this;
        }, Url.prototype.parseHost = function(host) {
            var port = portPattern.exec(host);
            port && (":" !== (port = port[0]) && (this.port = port.substr(1)), host = host.substr(0, host.length - port.length)), 
            host && (this.hostname = host);
        }, module.exports = function(url, slashesDenoteHost) {
            if (url && url instanceof Url) return url;
            var u = new Url;
            return u.parse(url, slashesDenoteHost), u;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.Any = __webpack_require__(12), exports.Cc = __webpack_require__(13), exports.Cf = __webpack_require__(28), 
        exports.P = __webpack_require__(7), exports.Z = __webpack_require__(14);
    }, function(module, exports) {
        module.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.parseLinkLabel = __webpack_require__(30), exports.parseLinkDestination = __webpack_require__(31), 
        exports.parseLinkTitle = __webpack_require__(32);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(state, start, disableNested) {
            var level, found, marker, prevPos, labelEnd = -1, max = state.posMax, oldPos = state.pos;
            for (state.pos = start + 1, level = 1; state.pos < max; ) {
                if (93 === (marker = state.src.charCodeAt(state.pos)) && 0 === --level) {
                    found = !0;
                    break;
                }
                if (prevPos = state.pos, state.md.inline.skipToken(state), 91 === marker) if (prevPos === state.pos - 1) level++; else if (disableNested) return state.pos = oldPos, 
                -1;
            }
            return found && (labelEnd = state.pos), state.pos = oldPos, labelEnd;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var unescapeAll = __webpack_require__(4).unescapeAll;
        module.exports = function(str, pos, max) {
            var code, level, start = pos, result = {
                ok: !1,
                pos: 0,
                lines: 0,
                str: ""
            };
            if (60 === str.charCodeAt(pos)) {
                for (pos++; pos < max; ) {
                    if (10 === (code = str.charCodeAt(pos))) return result;
                    if (62 === code) return result.pos = pos + 1, result.str = unescapeAll(str.slice(start + 1, pos)), 
                    result.ok = !0, result;
                    92 === code && pos + 1 < max ? pos += 2 : pos++;
                }
                return result;
            }
            for (level = 0; pos < max && 32 !== (code = str.charCodeAt(pos)) && !(code < 32 || 127 === code); ) if (92 === code && pos + 1 < max) pos += 2; else {
                if (40 === code && level++, 41 === code) {
                    if (0 === level) break;
                    level--;
                }
                pos++;
            }
            return start === pos || 0 !== level || (result.str = unescapeAll(str.slice(start, pos)), 
            result.lines = 0, result.pos = pos, result.ok = !0), result;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var unescapeAll = __webpack_require__(4).unescapeAll;
        module.exports = function(str, pos, max) {
            var code, marker, lines = 0, start = pos, result = {
                ok: !1,
                pos: 0,
                lines: 0,
                str: ""
            };
            if (pos >= max) return result;
            if (34 !== (marker = str.charCodeAt(pos)) && 39 !== marker && 40 !== marker) return result;
            for (pos++, 40 === marker && (marker = 41); pos < max; ) {
                if ((code = str.charCodeAt(pos)) === marker) return result.pos = pos + 1, result.lines = lines, 
                result.str = unescapeAll(str.slice(start + 1, pos)), result.ok = !0, result;
                10 === code ? lines++ : 92 === code && pos + 1 < max && (pos++, 10 === str.charCodeAt(pos) && lines++), 
                pos++;
            }
            return result;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var assign = __webpack_require__(4).assign, unescapeAll = __webpack_require__(4).unescapeAll, escapeHtml = __webpack_require__(4).escapeHtml, default_rules = {};
        function Renderer() {
            this.rules = assign({}, default_rules);
        }
        default_rules.code_inline = function(tokens, idx, options, env, slf) {
            var token = tokens[idx];
            return "<code" + slf.renderAttrs(token) + ">" + escapeHtml(tokens[idx].content) + "</code>";
        }, default_rules.code_block = function(tokens, idx, options, env, slf) {
            var token = tokens[idx];
            return "<pre" + slf.renderAttrs(token) + "><code>" + escapeHtml(tokens[idx].content) + "</code></pre>\n";
        }, default_rules.fence = function(tokens, idx, options, env, slf) {
            var highlighted, i, tmpAttrs, tmpToken, token = tokens[idx], info = token.info ? unescapeAll(token.info).trim() : "", langName = "";
            return info && (langName = info.split(/\s+/g)[0]), 0 === (highlighted = options.highlight && options.highlight(token.content, langName) || escapeHtml(token.content)).indexOf("<pre") ? highlighted + "\n" : info ? (i = token.attrIndex("class"), 
            tmpAttrs = token.attrs ? token.attrs.slice() : [], i < 0 ? tmpAttrs.push([ "class", options.langPrefix + langName ]) : tmpAttrs[i][1] += " " + options.langPrefix + langName, 
            tmpToken = {
                attrs: tmpAttrs
            }, "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n") : "<pre><code" + slf.renderAttrs(token) + ">" + highlighted + "</code></pre>\n";
        }, default_rules.image = function(tokens, idx, options, env, slf) {
            var token = tokens[idx];
            return token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(token.children, options, env), 
            slf.renderToken(tokens, idx, options);
        }, default_rules.hardbreak = function(tokens, idx, options) {
            return options.xhtmlOut ? "<br />\n" : "<br>\n";
        }, default_rules.softbreak = function(tokens, idx, options) {
            return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
        }, default_rules.text = function(tokens, idx) {
            return escapeHtml(tokens[idx].content);
        }, default_rules.html_block = function(tokens, idx) {
            return tokens[idx].content;
        }, default_rules.html_inline = function(tokens, idx) {
            return tokens[idx].content;
        }, Renderer.prototype.renderAttrs = function(token) {
            var i, l, result;
            if (!token.attrs) return "";
            for (result = "", i = 0, l = token.attrs.length; i < l; i++) result += " " + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
            return result;
        }, Renderer.prototype.renderToken = function(tokens, idx, options) {
            var nextToken, result = "", needLf = !1, token = tokens[idx];
            return token.hidden ? "" : (token.block && -1 !== token.nesting && idx && tokens[idx - 1].hidden && (result += "\n"), 
            result += (-1 === token.nesting ? "</" : "<") + token.tag, result += this.renderAttrs(token), 
            0 === token.nesting && options.xhtmlOut && (result += " /"), token.block && (needLf = !0, 
            1 === token.nesting && idx + 1 < tokens.length && ("inline" === (nextToken = tokens[idx + 1]).type || nextToken.hidden || -1 === nextToken.nesting && nextToken.tag === token.tag) && (needLf = !1)), 
            result += needLf ? ">\n" : ">");
        }, Renderer.prototype.renderInline = function(tokens, options, env) {
            for (var type, result = "", rules = this.rules, i = 0, len = tokens.length; i < len; i++) void 0 !== rules[type = tokens[i].type] ? result += rules[type](tokens, i, options, env, this) : result += this.renderToken(tokens, i, options);
            return result;
        }, Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
            for (var result = "", i = 0, len = tokens.length; i < len; i++) "text" === tokens[i].type ? result += tokens[i].content : "image" === tokens[i].type && (result += this.renderInlineAsText(tokens[i].children, options, env));
            return result;
        }, Renderer.prototype.render = function(tokens, options, env) {
            var i, len, type, result = "", rules = this.rules;
            for (i = 0, len = tokens.length; i < len; i++) "inline" === (type = tokens[i].type) ? result += this.renderInline(tokens[i].children, options, env) : void 0 !== rules[type] ? result += rules[tokens[i].type](tokens, i, options, env, this) : result += this.renderToken(tokens, i, options, env);
            return result;
        }, module.exports = Renderer;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var Ruler = __webpack_require__(8), _rules = [ [ "normalize", __webpack_require__(35) ], [ "block", __webpack_require__(36) ], [ "inline", __webpack_require__(37) ], [ "linkify", __webpack_require__(38) ], [ "replacements", __webpack_require__(39) ], [ "smartquotes", __webpack_require__(40) ] ];
        function Core() {
            this.ruler = new Ruler;
            for (var i = 0; i < _rules.length; i++) this.ruler.push(_rules[i][0], _rules[i][1]);
        }
        Core.prototype.process = function(state) {
            var i, l, rules;
            for (i = 0, l = (rules = this.ruler.getRules("")).length; i < l; i++) rules[i](state);
        }, Core.prototype.State = __webpack_require__(41), module.exports = Core;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var NEWLINES_RE = /\r\n?|\n/g, NULL_RE = /\0/g;
        module.exports = function(state) {
            var str;
            str = (str = state.src.replace(NEWLINES_RE, "\n")).replace(NULL_RE, "�"), state.src = str;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(state) {
            var token;
            state.inlineMode ? ((token = new state.Token("inline", "", 0)).content = state.src, 
            token.map = [ 0, 1 ], token.children = [], state.tokens.push(token)) : state.md.block.parse(state.src, state.md, state.env, state.tokens);
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(state) {
            var tok, i, l, tokens = state.tokens;
            for (i = 0, l = tokens.length; i < l; i++) "inline" === (tok = tokens[i]).type && state.md.inline.parse(tok.content, state.md, state.env, tok.children);
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var arrayReplaceAt = __webpack_require__(4).arrayReplaceAt;
        function isLinkClose(str) {
            return /^<\/a\s*>/i.test(str);
        }
        module.exports = function(state) {
            var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, links, str, blockTokens = state.tokens;
            if (state.md.options.linkify) for (j = 0, l = blockTokens.length; j < l; j++) if ("inline" === blockTokens[j].type && state.md.linkify.pretest(blockTokens[j].content)) for (htmlLinkLevel = 0, 
            i = (tokens = blockTokens[j].children).length - 1; i >= 0; i--) if ("link_close" !== (currentToken = tokens[i]).type) {
                if ("html_inline" === currentToken.type && (str = currentToken.content, /^<a[>\s]/i.test(str) && htmlLinkLevel > 0 && htmlLinkLevel--, 
                isLinkClose(currentToken.content) && htmlLinkLevel++), !(htmlLinkLevel > 0) && "text" === currentToken.type && state.md.linkify.test(currentToken.content)) {
                    for (text = currentToken.content, links = state.md.linkify.match(text), nodes = [], 
                    level = currentToken.level, lastPos = 0, ln = 0; ln < links.length; ln++) url = links[ln].url, 
                    fullUrl = state.md.normalizeLink(url), state.md.validateLink(fullUrl) && (urlText = links[ln].text, 
                    urlText = links[ln].schema ? "mailto:" !== links[ln].schema || /^mailto:/i.test(urlText) ? state.md.normalizeLinkText(urlText) : state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "") : state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, ""), 
                    (pos = links[ln].index) > lastPos && ((token = new state.Token("text", "", 0)).content = text.slice(lastPos, pos), 
                    token.level = level, nodes.push(token)), (token = new state.Token("link_open", "a", 1)).attrs = [ [ "href", fullUrl ] ], 
                    token.level = level++, token.markup = "linkify", token.info = "auto", nodes.push(token), 
                    (token = new state.Token("text", "", 0)).content = urlText, token.level = level, 
                    nodes.push(token), (token = new state.Token("link_close", "a", -1)).level = --level, 
                    token.markup = "linkify", token.info = "auto", nodes.push(token), lastPos = links[ln].lastIndex);
                    lastPos < text.length && ((token = new state.Token("text", "", 0)).content = text.slice(lastPos), 
                    token.level = level, nodes.push(token)), blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
                }
            } else for (i--; tokens[i].level !== currentToken.level && "link_open" !== tokens[i].type; ) i--;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i, SCOPED_ABBR_RE = /\((c|tm|r|p)\)/gi, SCOPED_ABBR = {
            c: "©",
            r: "®",
            p: "§",
            tm: "™"
        };
        function replaceFn(match, name) {
            return SCOPED_ABBR[name.toLowerCase()];
        }
        function replace_scoped(inlineTokens) {
            var i, token, inside_autolink = 0;
            for (i = inlineTokens.length - 1; i >= 0; i--) "text" !== (token = inlineTokens[i]).type || inside_autolink || (token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn)), 
            "link_open" === token.type && "auto" === token.info && inside_autolink--, "link_close" === token.type && "auto" === token.info && inside_autolink++;
        }
        function replace_rare(inlineTokens) {
            var i, token, inside_autolink = 0;
            for (i = inlineTokens.length - 1; i >= 0; i--) "text" !== (token = inlineTokens[i]).type || inside_autolink || RARE_RE.test(token.content) && (token.content = token.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1—$2").replace(/(^|\s)--(\s|$)/gm, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1–$2")), 
            "link_open" === token.type && "auto" === token.info && inside_autolink--, "link_close" === token.type && "auto" === token.info && inside_autolink++;
        }
        module.exports = function(state) {
            var blkIdx;
            if (state.md.options.typographer) for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) "inline" === state.tokens[blkIdx].type && (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content) && replace_scoped(state.tokens[blkIdx].children), 
            RARE_RE.test(state.tokens[blkIdx].content) && replace_rare(state.tokens[blkIdx].children));
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var isWhiteSpace = __webpack_require__(4).isWhiteSpace, isPunctChar = __webpack_require__(4).isPunctChar, isMdAsciiPunct = __webpack_require__(4).isMdAsciiPunct, QUOTE_TEST_RE = /['"]/, QUOTE_RE = /['"]/g;
        function replaceAt(str, index, ch) {
            return str.substr(0, index) + ch + str.substr(index + 1);
        }
        function process_inlines(tokens, state) {
            var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
            for (stack = [], i = 0; i < tokens.length; i++) {
                for (token = tokens[i], thisLevel = tokens[i].level, j = stack.length - 1; j >= 0 && !(stack[j].level <= thisLevel); j--) ;
                if (stack.length = j + 1, "text" === token.type) {
                    pos = 0, max = (text = token.content).length;
                    OUTER: for (;pos < max && (QUOTE_RE.lastIndex = pos, t = QUOTE_RE.exec(text)); ) {
                        if (canOpen = canClose = !0, pos = t.index + 1, isSingle = "'" === t[0], lastChar = 32, 
                        t.index - 1 >= 0) lastChar = text.charCodeAt(t.index - 1); else for (j = i - 1; j >= 0 && ("softbreak" !== tokens[j].type && "hardbreak" !== tokens[j].type); j--) if ("text" === tokens[j].type) {
                            lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
                            break;
                        }
                        if (nextChar = 32, pos < max) nextChar = text.charCodeAt(pos); else for (j = i + 1; j < tokens.length && ("softbreak" !== tokens[j].type && "hardbreak" !== tokens[j].type); j++) if ("text" === tokens[j].type) {
                            nextChar = tokens[j].content.charCodeAt(0);
                            break;
                        }
                        if (isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar)), 
                        isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar)), 
                        isLastWhiteSpace = isWhiteSpace(lastChar), (isNextWhiteSpace = isWhiteSpace(nextChar)) ? canOpen = !1 : isNextPunctChar && (isLastWhiteSpace || isLastPunctChar || (canOpen = !1)), 
                        isLastWhiteSpace ? canClose = !1 : isLastPunctChar && (isNextWhiteSpace || isNextPunctChar || (canClose = !1)), 
                        34 === nextChar && '"' === t[0] && lastChar >= 48 && lastChar <= 57 && (canClose = canOpen = !1), 
                        canOpen && canClose && (canOpen = !1, canClose = isNextPunctChar), canOpen || canClose) {
                            if (canClose) for (j = stack.length - 1; j >= 0 && (item = stack[j], !(stack[j].level < thisLevel)); j--) if (item.single === isSingle && stack[j].level === thisLevel) {
                                item = stack[j], isSingle ? (openQuote = state.md.options.quotes[2], closeQuote = state.md.options.quotes[3]) : (openQuote = state.md.options.quotes[0], 
                                closeQuote = state.md.options.quotes[1]), token.content = replaceAt(token.content, t.index, closeQuote), 
                                tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, openQuote), 
                                pos += closeQuote.length - 1, item.token === i && (pos += openQuote.length - 1), 
                                max = (text = token.content).length, stack.length = j;
                                continue OUTER;
                            }
                            canOpen ? stack.push({
                                token: i,
                                pos: t.index,
                                single: isSingle,
                                level: thisLevel
                            }) : canClose && isSingle && (token.content = replaceAt(token.content, t.index, "’"));
                        } else isSingle && (token.content = replaceAt(token.content, t.index, "’"));
                    }
                }
            }
        }
        module.exports = function(state) {
            var blkIdx;
            if (state.md.options.typographer) for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) "inline" === state.tokens[blkIdx].type && QUOTE_TEST_RE.test(state.tokens[blkIdx].content) && process_inlines(state.tokens[blkIdx].children, state);
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var Token = __webpack_require__(6);
        function StateCore(src, md, env) {
            this.src = src, this.env = env, this.tokens = [], this.inlineMode = !1, this.md = md;
        }
        StateCore.prototype.Token = Token, module.exports = StateCore;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var Ruler = __webpack_require__(8), _rules = [ [ "table", __webpack_require__(43), [ "paragraph", "reference" ] ], [ "code", __webpack_require__(44) ], [ "fence", __webpack_require__(45), [ "paragraph", "reference", "blockquote", "list" ] ], [ "blockquote", __webpack_require__(46), [ "paragraph", "reference", "blockquote", "list" ] ], [ "hr", __webpack_require__(47), [ "paragraph", "reference", "blockquote", "list" ] ], [ "list", __webpack_require__(48), [ "paragraph", "reference", "blockquote" ] ], [ "reference", __webpack_require__(49) ], [ "heading", __webpack_require__(50), [ "paragraph", "reference", "blockquote" ] ], [ "lheading", __webpack_require__(51) ], [ "html_block", __webpack_require__(52), [ "paragraph", "reference", "blockquote" ] ], [ "paragraph", __webpack_require__(54) ] ];
        function ParserBlock() {
            this.ruler = new Ruler;
            for (var i = 0; i < _rules.length; i++) this.ruler.push(_rules[i][0], _rules[i][1], {
                alt: (_rules[i][2] || []).slice()
            });
        }
        ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
            for (var i, rules = this.ruler.getRules(""), len = rules.length, line = startLine, hasEmptyLines = !1, maxNesting = state.md.options.maxNesting; line < endLine && (state.line = line = state.skipEmptyLines(line), 
            !(line >= endLine)) && !(state.sCount[line] < state.blkIndent); ) {
                if (state.level >= maxNesting) {
                    state.line = endLine;
                    break;
                }
                for (i = 0; i < len && !rules[i](state, line, endLine, !1); i++) ;
                state.tight = !hasEmptyLines, state.isEmpty(state.line - 1) && (hasEmptyLines = !0), 
                (line = state.line) < endLine && state.isEmpty(line) && (hasEmptyLines = !0, line++, 
                state.line = line);
            }
        }, ParserBlock.prototype.parse = function(src, md, env, outTokens) {
            var state;
            src && (state = new this.State(src, md, env, outTokens), this.tokenize(state, state.line, state.lineMax));
        }, ParserBlock.prototype.State = __webpack_require__(55), module.exports = ParserBlock;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var isSpace = __webpack_require__(4).isSpace;
        function getLine(state, line) {
            var pos = state.bMarks[line] + state.blkIndent, max = state.eMarks[line];
            return state.src.substr(pos, max - pos);
        }
        function escapedSplit(str) {
            var ch, result = [], pos = 0, max = str.length, escapes = 0, lastPos = 0, backTicked = !1, lastBackTick = 0;
            for (ch = str.charCodeAt(pos); pos < max; ) 96 === ch ? backTicked ? (backTicked = !1, 
            lastBackTick = pos) : escapes % 2 == 0 && (backTicked = !0, lastBackTick = pos) : 124 !== ch || escapes % 2 != 0 || backTicked || (result.push(str.substring(lastPos, pos)), 
            lastPos = pos + 1), 92 === ch ? escapes++ : escapes = 0, ++pos === max && backTicked && (backTicked = !1, 
            pos = lastBackTick + 1), ch = str.charCodeAt(pos);
            return result.push(str.substring(lastPos)), result;
        }
        module.exports = function(state, startLine, endLine, silent) {
            var ch, lineText, pos, i, nextLine, columns, columnCount, token, aligns, t, tableLines, tbodyLines;
            if (startLine + 2 > endLine) return !1;
            if (nextLine = startLine + 1, state.sCount[nextLine] < state.blkIndent) return !1;
            if (state.sCount[nextLine] - state.blkIndent >= 4) return !1;
            if ((pos = state.bMarks[nextLine] + state.tShift[nextLine]) >= state.eMarks[nextLine]) return !1;
            if (124 !== (ch = state.src.charCodeAt(pos++)) && 45 !== ch && 58 !== ch) return !1;
            for (;pos < state.eMarks[nextLine]; ) {
                if (124 !== (ch = state.src.charCodeAt(pos)) && 45 !== ch && 58 !== ch && !isSpace(ch)) return !1;
                pos++;
            }
            for (columns = (lineText = getLine(state, startLine + 1)).split("|"), aligns = [], 
            i = 0; i < columns.length; i++) {
                if (!(t = columns[i].trim())) {
                    if (0 === i || i === columns.length - 1) continue;
                    return !1;
                }
                if (!/^:?-+:?$/.test(t)) return !1;
                58 === t.charCodeAt(t.length - 1) ? aligns.push(58 === t.charCodeAt(0) ? "center" : "right") : 58 === t.charCodeAt(0) ? aligns.push("left") : aligns.push("");
            }
            if (-1 === (lineText = getLine(state, startLine).trim()).indexOf("|")) return !1;
            if (state.sCount[startLine] - state.blkIndent >= 4) return !1;
            if ((columnCount = (columns = escapedSplit(lineText.replace(/^\||\|$/g, ""))).length) > aligns.length) return !1;
            if (silent) return !0;
            for ((token = state.push("table_open", "table", 1)).map = tableLines = [ startLine, 0 ], 
            (token = state.push("thead_open", "thead", 1)).map = [ startLine, startLine + 1 ], 
            (token = state.push("tr_open", "tr", 1)).map = [ startLine, startLine + 1 ], i = 0; i < columns.length; i++) (token = state.push("th_open", "th", 1)).map = [ startLine, startLine + 1 ], 
            aligns[i] && (token.attrs = [ [ "style", "text-align:" + aligns[i] ] ]), (token = state.push("inline", "", 0)).content = columns[i].trim(), 
            token.map = [ startLine, startLine + 1 ], token.children = [], token = state.push("th_close", "th", -1);
            for (token = state.push("tr_close", "tr", -1), token = state.push("thead_close", "thead", -1), 
            (token = state.push("tbody_open", "tbody", 1)).map = tbodyLines = [ startLine + 2, 0 ], 
            nextLine = startLine + 2; nextLine < endLine && !(state.sCount[nextLine] < state.blkIndent) && -1 !== (lineText = getLine(state, nextLine).trim()).indexOf("|") && !(state.sCount[nextLine] - state.blkIndent >= 4); nextLine++) {
                for (columns = escapedSplit(lineText.replace(/^\||\|$/g, "")), token = state.push("tr_open", "tr", 1), 
                i = 0; i < columnCount; i++) token = state.push("td_open", "td", 1), aligns[i] && (token.attrs = [ [ "style", "text-align:" + aligns[i] ] ]), 
                (token = state.push("inline", "", 0)).content = columns[i] ? columns[i].trim() : "", 
                token.children = [], token = state.push("td_close", "td", -1);
                token = state.push("tr_close", "tr", -1);
            }
            return token = state.push("tbody_close", "tbody", -1), token = state.push("table_close", "table", -1), 
            tableLines[1] = tbodyLines[1] = nextLine, state.line = nextLine, !0;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(state, startLine, endLine) {
            var nextLine, last, token;
            if (state.sCount[startLine] - state.blkIndent < 4) return !1;
            for (last = nextLine = startLine + 1; nextLine < endLine; ) if (state.isEmpty(nextLine)) nextLine++; else {
                if (!(state.sCount[nextLine] - state.blkIndent >= 4)) break;
                last = ++nextLine;
            }
            return state.line = last, (token = state.push("code_block", "code", 0)).content = state.getLines(startLine, last, 4 + state.blkIndent, !0), 
            token.map = [ startLine, state.line ], !0;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(state, startLine, endLine, silent) {
            var marker, len, params, nextLine, mem, token, markup, haveEndMarker = !1, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
            if (state.sCount[startLine] - state.blkIndent >= 4) return !1;
            if (pos + 3 > max) return !1;
            if (126 !== (marker = state.src.charCodeAt(pos)) && 96 !== marker) return !1;
            if (mem = pos, (len = (pos = state.skipChars(pos, marker)) - mem) < 3) return !1;
            if (markup = state.src.slice(mem, pos), params = state.src.slice(pos, max), 96 === marker && params.indexOf(String.fromCharCode(marker)) >= 0) return !1;
            if (silent) return !0;
            for (nextLine = startLine; !(++nextLine >= endLine) && !((pos = mem = state.bMarks[nextLine] + state.tShift[nextLine]) < (max = state.eMarks[nextLine]) && state.sCount[nextLine] < state.blkIndent); ) if (state.src.charCodeAt(pos) === marker && !(state.sCount[nextLine] - state.blkIndent >= 4 || (pos = state.skipChars(pos, marker)) - mem < len || (pos = state.skipSpaces(pos)) < max)) {
                haveEndMarker = !0;
                break;
            }
            return len = state.sCount[startLine], state.line = nextLine + (haveEndMarker ? 1 : 0), 
            (token = state.push("fence", "code", 0)).info = params, token.content = state.getLines(startLine + 1, nextLine, len, !0), 
            token.markup = markup, token.map = [ startLine, state.line ], !0;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var isSpace = __webpack_require__(4).isSpace;
        module.exports = function(state, startLine, endLine, silent) {
            var adjustTab, ch, i, initial, l, lastLineEmpty, lines, nextLine, offset, oldBMarks, oldBSCount, oldIndent, oldParentType, oldSCount, oldTShift, spaceAfterMarker, terminate, terminatorRules, token, wasOutdented, oldLineMax = state.lineMax, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
            if (state.sCount[startLine] - state.blkIndent >= 4) return !1;
            if (62 !== state.src.charCodeAt(pos++)) return !1;
            if (silent) return !0;
            for (initial = offset = state.sCount[startLine] + pos - (state.bMarks[startLine] + state.tShift[startLine]), 
            32 === state.src.charCodeAt(pos) ? (pos++, initial++, offset++, adjustTab = !1, 
            spaceAfterMarker = !0) : 9 === state.src.charCodeAt(pos) ? (spaceAfterMarker = !0, 
            (state.bsCount[startLine] + offset) % 4 == 3 ? (pos++, initial++, offset++, adjustTab = !1) : adjustTab = !0) : spaceAfterMarker = !1, 
            oldBMarks = [ state.bMarks[startLine] ], state.bMarks[startLine] = pos; pos < max && (ch = state.src.charCodeAt(pos), 
            isSpace(ch)); ) 9 === ch ? offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4 : offset++, 
            pos++;
            for (oldBSCount = [ state.bsCount[startLine] ], state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0), 
            lastLineEmpty = pos >= max, oldSCount = [ state.sCount[startLine] ], state.sCount[startLine] = offset - initial, 
            oldTShift = [ state.tShift[startLine] ], state.tShift[startLine] = pos - state.bMarks[startLine], 
            terminatorRules = state.md.block.ruler.getRules("blockquote"), oldParentType = state.parentType, 
            state.parentType = "blockquote", wasOutdented = !1, nextLine = startLine + 1; nextLine < endLine && (state.sCount[nextLine] < state.blkIndent && (wasOutdented = !0), 
            !((pos = state.bMarks[nextLine] + state.tShift[nextLine]) >= (max = state.eMarks[nextLine]))); nextLine++) if (62 !== state.src.charCodeAt(pos++) || wasOutdented) {
                if (lastLineEmpty) break;
                for (terminate = !1, i = 0, l = terminatorRules.length; i < l; i++) if (terminatorRules[i](state, nextLine, endLine, !0)) {
                    terminate = !0;
                    break;
                }
                if (terminate) {
                    state.lineMax = nextLine, 0 !== state.blkIndent && (oldBMarks.push(state.bMarks[nextLine]), 
                    oldBSCount.push(state.bsCount[nextLine]), oldTShift.push(state.tShift[nextLine]), 
                    oldSCount.push(state.sCount[nextLine]), state.sCount[nextLine] -= state.blkIndent);
                    break;
                }
                oldBMarks.push(state.bMarks[nextLine]), oldBSCount.push(state.bsCount[nextLine]), 
                oldTShift.push(state.tShift[nextLine]), oldSCount.push(state.sCount[nextLine]), 
                state.sCount[nextLine] = -1;
            } else {
                for (initial = offset = state.sCount[nextLine] + pos - (state.bMarks[nextLine] + state.tShift[nextLine]), 
                32 === state.src.charCodeAt(pos) ? (pos++, initial++, offset++, adjustTab = !1, 
                spaceAfterMarker = !0) : 9 === state.src.charCodeAt(pos) ? (spaceAfterMarker = !0, 
                (state.bsCount[nextLine] + offset) % 4 == 3 ? (pos++, initial++, offset++, adjustTab = !1) : adjustTab = !0) : spaceAfterMarker = !1, 
                oldBMarks.push(state.bMarks[nextLine]), state.bMarks[nextLine] = pos; pos < max && (ch = state.src.charCodeAt(pos), 
                isSpace(ch)); ) 9 === ch ? offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4 : offset++, 
                pos++;
                lastLineEmpty = pos >= max, oldBSCount.push(state.bsCount[nextLine]), state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0), 
                oldSCount.push(state.sCount[nextLine]), state.sCount[nextLine] = offset - initial, 
                oldTShift.push(state.tShift[nextLine]), state.tShift[nextLine] = pos - state.bMarks[nextLine];
            }
            for (oldIndent = state.blkIndent, state.blkIndent = 0, (token = state.push("blockquote_open", "blockquote", 1)).markup = ">", 
            token.map = lines = [ startLine, 0 ], state.md.block.tokenize(state, startLine, nextLine), 
            (token = state.push("blockquote_close", "blockquote", -1)).markup = ">", state.lineMax = oldLineMax, 
            state.parentType = oldParentType, lines[1] = state.line, i = 0; i < oldTShift.length; i++) state.bMarks[i + startLine] = oldBMarks[i], 
            state.tShift[i + startLine] = oldTShift[i], state.sCount[i + startLine] = oldSCount[i], 
            state.bsCount[i + startLine] = oldBSCount[i];
            return state.blkIndent = oldIndent, !0;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var isSpace = __webpack_require__(4).isSpace;
        module.exports = function(state, startLine, endLine, silent) {
            var marker, cnt, ch, token, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
            if (state.sCount[startLine] - state.blkIndent >= 4) return !1;
            if (42 !== (marker = state.src.charCodeAt(pos++)) && 45 !== marker && 95 !== marker) return !1;
            for (cnt = 1; pos < max; ) {
                if ((ch = state.src.charCodeAt(pos++)) !== marker && !isSpace(ch)) return !1;
                ch === marker && cnt++;
            }
            return !(cnt < 3) && (silent || (state.line = startLine + 1, (token = state.push("hr", "hr", 0)).map = [ startLine, state.line ], 
            token.markup = Array(cnt + 1).join(String.fromCharCode(marker))), !0);
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var isSpace = __webpack_require__(4).isSpace;
        function skipBulletListMarker(state, startLine) {
            var marker, pos, max, ch;
            return pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine], 
            42 !== (marker = state.src.charCodeAt(pos++)) && 45 !== marker && 43 !== marker || pos < max && (ch = state.src.charCodeAt(pos), 
            !isSpace(ch)) ? -1 : pos;
        }
        function skipOrderedListMarker(state, startLine) {
            var ch, start = state.bMarks[startLine] + state.tShift[startLine], pos = start, max = state.eMarks[startLine];
            if (pos + 1 >= max) return -1;
            if ((ch = state.src.charCodeAt(pos++)) < 48 || ch > 57) return -1;
            for (;;) {
                if (pos >= max) return -1;
                if (!((ch = state.src.charCodeAt(pos++)) >= 48 && ch <= 57)) {
                    if (41 === ch || 46 === ch) break;
                    return -1;
                }
                if (pos - start >= 10) return -1;
            }
            return pos < max && (ch = state.src.charCodeAt(pos), !isSpace(ch)) ? -1 : pos;
        }
        module.exports = function(state, startLine, endLine, silent) {
            var ch, contentStart, i, indent, indentAfterMarker, initial, isOrdered, itemLines, l, listLines, listTokIdx, markerCharCode, markerValue, max, nextLine, offset, oldListIndent, oldParentType, oldSCount, oldTShift, oldTight, pos, posAfterMarker, prevEmptyEnd, start, terminate, terminatorRules, token, isTerminatingParagraph = !1, tight = !0;
            if (state.sCount[startLine] - state.blkIndent >= 4) return !1;
            if (state.listIndent >= 0 && state.sCount[startLine] - state.listIndent >= 4 && state.sCount[startLine] < state.blkIndent) return !1;
            if (silent && "paragraph" === state.parentType && state.tShift[startLine] >= state.blkIndent && (isTerminatingParagraph = !0), 
            (posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
                if (isOrdered = !0, start = state.bMarks[startLine] + state.tShift[startLine], markerValue = Number(state.src.substr(start, posAfterMarker - start - 1)), 
                isTerminatingParagraph && 1 !== markerValue) return !1;
            } else {
                if (!((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0)) return !1;
                isOrdered = !1;
            }
            if (isTerminatingParagraph && state.skipSpaces(posAfterMarker) >= state.eMarks[startLine]) return !1;
            if (markerCharCode = state.src.charCodeAt(posAfterMarker - 1), silent) return !0;
            for (listTokIdx = state.tokens.length, isOrdered ? (token = state.push("ordered_list_open", "ol", 1), 
            1 !== markerValue && (token.attrs = [ [ "start", markerValue ] ])) : token = state.push("bullet_list_open", "ul", 1), 
            token.map = listLines = [ startLine, 0 ], token.markup = String.fromCharCode(markerCharCode), 
            nextLine = startLine, prevEmptyEnd = !1, terminatorRules = state.md.block.ruler.getRules("list"), 
            oldParentType = state.parentType, state.parentType = "list"; nextLine < endLine; ) {
                for (pos = posAfterMarker, max = state.eMarks[nextLine], initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]); pos < max; ) {
                    if (9 === (ch = state.src.charCodeAt(pos))) offset += 4 - (offset + state.bsCount[nextLine]) % 4; else {
                        if (32 !== ch) break;
                        offset++;
                    }
                    pos++;
                }
                if ((indentAfterMarker = (contentStart = pos) >= max ? 1 : offset - initial) > 4 && (indentAfterMarker = 1), 
                indent = initial + indentAfterMarker, (token = state.push("list_item_open", "li", 1)).markup = String.fromCharCode(markerCharCode), 
                token.map = itemLines = [ startLine, 0 ], oldTight = state.tight, oldTShift = state.tShift[startLine], 
                oldSCount = state.sCount[startLine], oldListIndent = state.listIndent, state.listIndent = state.blkIndent, 
                state.blkIndent = indent, state.tight = !0, state.tShift[startLine] = contentStart - state.bMarks[startLine], 
                state.sCount[startLine] = offset, contentStart >= max && state.isEmpty(startLine + 1) ? state.line = Math.min(state.line + 2, endLine) : state.md.block.tokenize(state, startLine, endLine, !0), 
                state.tight && !prevEmptyEnd || (tight = !1), prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1), 
                state.blkIndent = state.listIndent, state.listIndent = oldListIndent, state.tShift[startLine] = oldTShift, 
                state.sCount[startLine] = oldSCount, state.tight = oldTight, (token = state.push("list_item_close", "li", -1)).markup = String.fromCharCode(markerCharCode), 
                nextLine = startLine = state.line, itemLines[1] = nextLine, contentStart = state.bMarks[startLine], 
                nextLine >= endLine) break;
                if (state.sCount[nextLine] < state.blkIndent) break;
                if (state.sCount[startLine] - state.blkIndent >= 4) break;
                for (terminate = !1, i = 0, l = terminatorRules.length; i < l; i++) if (terminatorRules[i](state, nextLine, endLine, !0)) {
                    terminate = !0;
                    break;
                }
                if (terminate) break;
                if (isOrdered) {
                    if ((posAfterMarker = skipOrderedListMarker(state, nextLine)) < 0) break;
                } else if ((posAfterMarker = skipBulletListMarker(state, nextLine)) < 0) break;
                if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) break;
            }
            return (token = isOrdered ? state.push("ordered_list_close", "ol", -1) : state.push("bullet_list_close", "ul", -1)).markup = String.fromCharCode(markerCharCode), 
            listLines[1] = nextLine, state.line = nextLine, state.parentType = oldParentType, 
            tight && function(state, idx) {
                var i, l, level = state.level + 2;
                for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) state.tokens[i].level === level && "paragraph_open" === state.tokens[i].type && (state.tokens[i + 2].hidden = !0, 
                state.tokens[i].hidden = !0, i += 2);
            }(state, listTokIdx), !0;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var normalizeReference = __webpack_require__(4).normalizeReference, isSpace = __webpack_require__(4).isSpace;
        module.exports = function(state, startLine, _endLine, silent) {
            var ch, destEndPos, destEndLineNo, endLine, href, i, l, label, labelEnd, oldParentType, res, start, str, terminate, terminatorRules, title, lines = 0, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine], nextLine = startLine + 1;
            if (state.sCount[startLine] - state.blkIndent >= 4) return !1;
            if (91 !== state.src.charCodeAt(pos)) return !1;
            for (;++pos < max; ) if (93 === state.src.charCodeAt(pos) && 92 !== state.src.charCodeAt(pos - 1)) {
                if (pos + 1 === max) return !1;
                if (58 !== state.src.charCodeAt(pos + 1)) return !1;
                break;
            }
            for (endLine = state.lineMax, terminatorRules = state.md.block.ruler.getRules("reference"), 
            oldParentType = state.parentType, state.parentType = "reference"; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) if (!(state.sCount[nextLine] - state.blkIndent > 3 || state.sCount[nextLine] < 0)) {
                for (terminate = !1, i = 0, l = terminatorRules.length; i < l; i++) if (terminatorRules[i](state, nextLine, endLine, !0)) {
                    terminate = !0;
                    break;
                }
                if (terminate) break;
            }
            for (max = (str = state.getLines(startLine, nextLine, state.blkIndent, !1).trim()).length, 
            pos = 1; pos < max; pos++) {
                if (91 === (ch = str.charCodeAt(pos))) return !1;
                if (93 === ch) {
                    labelEnd = pos;
                    break;
                }
                (10 === ch || 92 === ch && ++pos < max && 10 === str.charCodeAt(pos)) && lines++;
            }
            if (labelEnd < 0 || 58 !== str.charCodeAt(labelEnd + 1)) return !1;
            for (pos = labelEnd + 2; pos < max; pos++) if (10 === (ch = str.charCodeAt(pos))) lines++; else if (!isSpace(ch)) break;
            if (!(res = state.md.helpers.parseLinkDestination(str, pos, max)).ok) return !1;
            if (href = state.md.normalizeLink(res.str), !state.md.validateLink(href)) return !1;
            for (destEndPos = pos = res.pos, destEndLineNo = lines += res.lines, start = pos; pos < max; pos++) if (10 === (ch = str.charCodeAt(pos))) lines++; else if (!isSpace(ch)) break;
            for (res = state.md.helpers.parseLinkTitle(str, pos, max), pos < max && start !== pos && res.ok ? (title = res.str, 
            pos = res.pos, lines += res.lines) : (title = "", pos = destEndPos, lines = destEndLineNo); pos < max && (ch = str.charCodeAt(pos), 
            isSpace(ch)); ) pos++;
            if (pos < max && 10 !== str.charCodeAt(pos) && title) for (title = "", pos = destEndPos, 
            lines = destEndLineNo; pos < max && (ch = str.charCodeAt(pos), isSpace(ch)); ) pos++;
            return !(pos < max && 10 !== str.charCodeAt(pos)) && (!!(label = normalizeReference(str.slice(1, labelEnd))) && (silent || (void 0 === state.env.references && (state.env.references = {}), 
            void 0 === state.env.references[label] && (state.env.references[label] = {
                title: title,
                href: href
            }), state.parentType = oldParentType, state.line = startLine + lines + 1), !0));
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var isSpace = __webpack_require__(4).isSpace;
        module.exports = function(state, startLine, endLine, silent) {
            var ch, level, tmp, token, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
            if (state.sCount[startLine] - state.blkIndent >= 4) return !1;
            if (35 !== (ch = state.src.charCodeAt(pos)) || pos >= max) return !1;
            for (level = 1, ch = state.src.charCodeAt(++pos); 35 === ch && pos < max && level <= 6; ) level++, 
            ch = state.src.charCodeAt(++pos);
            return !(level > 6 || pos < max && !isSpace(ch)) && (silent || (max = state.skipSpacesBack(max, pos), 
            (tmp = state.skipCharsBack(max, 35, pos)) > pos && isSpace(state.src.charCodeAt(tmp - 1)) && (max = tmp), 
            state.line = startLine + 1, (token = state.push("heading_open", "h" + String(level), 1)).markup = "########".slice(0, level), 
            token.map = [ startLine, state.line ], (token = state.push("inline", "", 0)).content = state.src.slice(pos, max).trim(), 
            token.map = [ startLine, state.line ], token.children = [], (token = state.push("heading_close", "h" + String(level), -1)).markup = "########".slice(0, level)), 
            !0);
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(state, startLine, endLine) {
            var content, terminate, i, l, token, pos, max, level, marker, oldParentType, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph");
            if (state.sCount[startLine] - state.blkIndent >= 4) return !1;
            for (oldParentType = state.parentType, state.parentType = "paragraph"; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) if (!(state.sCount[nextLine] - state.blkIndent > 3)) {
                if (state.sCount[nextLine] >= state.blkIndent && (pos = state.bMarks[nextLine] + state.tShift[nextLine]) < (max = state.eMarks[nextLine]) && (45 === (marker = state.src.charCodeAt(pos)) || 61 === marker) && (pos = state.skipChars(pos, marker), 
                (pos = state.skipSpaces(pos)) >= max)) {
                    level = 61 === marker ? 1 : 2;
                    break;
                }
                if (!(state.sCount[nextLine] < 0)) {
                    for (terminate = !1, i = 0, l = terminatorRules.length; i < l; i++) if (terminatorRules[i](state, nextLine, endLine, !0)) {
                        terminate = !0;
                        break;
                    }
                    if (terminate) break;
                }
            }
            return !!level && (content = state.getLines(startLine, nextLine, state.blkIndent, !1).trim(), 
            state.line = nextLine + 1, (token = state.push("heading_open", "h" + String(level), 1)).markup = String.fromCharCode(marker), 
            token.map = [ startLine, state.line ], (token = state.push("inline", "", 0)).content = content, 
            token.map = [ startLine, state.line - 1 ], token.children = [], (token = state.push("heading_close", "h" + String(level), -1)).markup = String.fromCharCode(marker), 
            state.parentType = oldParentType, !0);
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var block_names = __webpack_require__(53), HTML_OPEN_CLOSE_TAG_RE = __webpack_require__(15).HTML_OPEN_CLOSE_TAG_RE, HTML_SEQUENCES = [ [ /^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0 ], [ /^<!--/, /-->/, !0 ], [ /^<\?/, /\?>/, !0 ], [ /^<![A-Z]/, />/, !0 ], [ /^<!\[CDATA\[/, /\]\]>/, !0 ], [ new RegExp("^</?(" + block_names.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0 ], [ new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"), /^$/, !1 ] ];
        module.exports = function(state, startLine, endLine, silent) {
            var i, nextLine, token, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
            if (state.sCount[startLine] - state.blkIndent >= 4) return !1;
            if (!state.md.options.html) return !1;
            if (60 !== state.src.charCodeAt(pos)) return !1;
            for (lineText = state.src.slice(pos, max), i = 0; i < HTML_SEQUENCES.length && !HTML_SEQUENCES[i][0].test(lineText); i++) ;
            if (i === HTML_SEQUENCES.length) return !1;
            if (silent) return HTML_SEQUENCES[i][2];
            if (nextLine = startLine + 1, !HTML_SEQUENCES[i][1].test(lineText)) for (;nextLine < endLine && !(state.sCount[nextLine] < state.blkIndent); nextLine++) if (pos = state.bMarks[nextLine] + state.tShift[nextLine], 
            max = state.eMarks[nextLine], lineText = state.src.slice(pos, max), HTML_SEQUENCES[i][1].test(lineText)) {
                0 !== lineText.length && nextLine++;
                break;
            }
            return state.line = nextLine, (token = state.push("html_block", "", 0)).map = [ startLine, nextLine ], 
            token.content = state.getLines(startLine, nextLine, state.blkIndent, !0), !0;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = [ "address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "meta", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul" ];
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(state, startLine) {
            var content, terminate, i, l, token, oldParentType, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph"), endLine = state.lineMax;
            for (oldParentType = state.parentType, state.parentType = "paragraph"; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) if (!(state.sCount[nextLine] - state.blkIndent > 3 || state.sCount[nextLine] < 0)) {
                for (terminate = !1, i = 0, l = terminatorRules.length; i < l; i++) if (terminatorRules[i](state, nextLine, endLine, !0)) {
                    terminate = !0;
                    break;
                }
                if (terminate) break;
            }
            return content = state.getLines(startLine, nextLine, state.blkIndent, !1).trim(), 
            state.line = nextLine, (token = state.push("paragraph_open", "p", 1)).map = [ startLine, state.line ], 
            (token = state.push("inline", "", 0)).content = content, token.map = [ startLine, state.line ], 
            token.children = [], token = state.push("paragraph_close", "p", -1), state.parentType = oldParentType, 
            !0;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var Token = __webpack_require__(6), isSpace = __webpack_require__(4).isSpace;
        function StateBlock(src, md, env, tokens) {
            var ch, s, start, pos, len, indent, offset, indent_found;
            for (this.src = src, this.md = md, this.env = env, this.tokens = tokens, this.bMarks = [], 
            this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, 
            this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, 
            this.parentType = "root", this.level = 0, this.result = "", indent_found = !1, start = pos = indent = offset = 0, 
            len = (s = this.src).length; pos < len; pos++) {
                if (ch = s.charCodeAt(pos), !indent_found) {
                    if (isSpace(ch)) {
                        indent++, 9 === ch ? offset += 4 - offset % 4 : offset++;
                        continue;
                    }
                    indent_found = !0;
                }
                10 !== ch && pos !== len - 1 || (10 !== ch && pos++, this.bMarks.push(start), this.eMarks.push(pos), 
                this.tShift.push(indent), this.sCount.push(offset), this.bsCount.push(0), indent_found = !1, 
                indent = 0, offset = 0, start = pos + 1);
            }
            this.bMarks.push(s.length), this.eMarks.push(s.length), this.tShift.push(0), this.sCount.push(0), 
            this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
        }
        StateBlock.prototype.push = function(type, tag, nesting) {
            var token = new Token(type, tag, nesting);
            return token.block = !0, nesting < 0 && this.level--, token.level = this.level, 
            nesting > 0 && this.level++, this.tokens.push(token), token;
        }, StateBlock.prototype.isEmpty = function(line) {
            return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
        }, StateBlock.prototype.skipEmptyLines = function(from) {
            for (var max = this.lineMax; from < max && !(this.bMarks[from] + this.tShift[from] < this.eMarks[from]); from++) ;
            return from;
        }, StateBlock.prototype.skipSpaces = function(pos) {
            for (var ch, max = this.src.length; pos < max && (ch = this.src.charCodeAt(pos), 
            isSpace(ch)); pos++) ;
            return pos;
        }, StateBlock.prototype.skipSpacesBack = function(pos, min) {
            if (pos <= min) return pos;
            for (;pos > min; ) if (!isSpace(this.src.charCodeAt(--pos))) return pos + 1;
            return pos;
        }, StateBlock.prototype.skipChars = function(pos, code) {
            for (var max = this.src.length; pos < max && this.src.charCodeAt(pos) === code; pos++) ;
            return pos;
        }, StateBlock.prototype.skipCharsBack = function(pos, code, min) {
            if (pos <= min) return pos;
            for (;pos > min; ) if (code !== this.src.charCodeAt(--pos)) return pos + 1;
            return pos;
        }, StateBlock.prototype.getLines = function(begin, end, indent, keepLastLF) {
            var i, lineIndent, ch, first, last, queue, lineStart, line = begin;
            if (begin >= end) return "";
            for (queue = new Array(end - begin), i = 0; line < end; line++, i++) {
                for (lineIndent = 0, lineStart = first = this.bMarks[line], last = line + 1 < end || keepLastLF ? this.eMarks[line] + 1 : this.eMarks[line]; first < last && lineIndent < indent; ) {
                    if (ch = this.src.charCodeAt(first), isSpace(ch)) 9 === ch ? lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4 : lineIndent++; else {
                        if (!(first - lineStart < this.tShift[line])) break;
                        lineIndent++;
                    }
                    first++;
                }
                queue[i] = lineIndent > indent ? new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last) : this.src.slice(first, last);
            }
            return queue.join("");
        }, StateBlock.prototype.Token = Token, module.exports = StateBlock;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var Ruler = __webpack_require__(8), _rules = [ [ "text", __webpack_require__(57) ], [ "newline", __webpack_require__(58) ], [ "escape", __webpack_require__(59) ], [ "backticks", __webpack_require__(60) ], [ "strikethrough", __webpack_require__(16).tokenize ], [ "emphasis", __webpack_require__(17).tokenize ], [ "link", __webpack_require__(61) ], [ "image", __webpack_require__(62) ], [ "autolink", __webpack_require__(63) ], [ "html_inline", __webpack_require__(64) ], [ "entity", __webpack_require__(65) ] ], _rules2 = [ [ "balance_pairs", __webpack_require__(66) ], [ "strikethrough", __webpack_require__(16).postProcess ], [ "emphasis", __webpack_require__(17).postProcess ], [ "text_collapse", __webpack_require__(67) ] ];
        function ParserInline() {
            var i;
            for (this.ruler = new Ruler, i = 0; i < _rules.length; i++) this.ruler.push(_rules[i][0], _rules[i][1]);
            for (this.ruler2 = new Ruler, i = 0; i < _rules2.length; i++) this.ruler2.push(_rules2[i][0], _rules2[i][1]);
        }
        ParserInline.prototype.skipToken = function(state) {
            var ok, i, pos = state.pos, rules = this.ruler.getRules(""), len = rules.length, maxNesting = state.md.options.maxNesting, cache = state.cache;
            if (void 0 === cache[pos]) {
                if (state.level < maxNesting) for (i = 0; i < len && (state.level++, ok = rules[i](state, !0), 
                state.level--, !ok); i++) ; else state.pos = state.posMax;
                ok || state.pos++, cache[pos] = state.pos;
            } else state.pos = cache[pos];
        }, ParserInline.prototype.tokenize = function(state) {
            for (var ok, i, rules = this.ruler.getRules(""), len = rules.length, end = state.posMax, maxNesting = state.md.options.maxNesting; state.pos < end; ) {
                if (state.level < maxNesting) for (i = 0; i < len && !(ok = rules[i](state, !1)); i++) ;
                if (ok) {
                    if (state.pos >= end) break;
                } else state.pending += state.src[state.pos++];
            }
            state.pending && state.pushPending();
        }, ParserInline.prototype.parse = function(str, md, env, outTokens) {
            var i, rules, len, state = new this.State(str, md, env, outTokens);
            for (this.tokenize(state), len = (rules = this.ruler2.getRules("")).length, i = 0; i < len; i++) rules[i](state);
        }, ParserInline.prototype.State = __webpack_require__(68), module.exports = ParserInline;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function isTerminatorChar(ch) {
            switch (ch) {
              case 10:
              case 33:
              case 35:
              case 36:
              case 37:
              case 38:
              case 42:
              case 43:
              case 45:
              case 58:
              case 60:
              case 61:
              case 62:
              case 64:
              case 91:
              case 92:
              case 93:
              case 94:
              case 95:
              case 96:
              case 123:
              case 125:
              case 126:
                return !0;

              default:
                return !1;
            }
        }
        module.exports = function(state, silent) {
            for (var pos = state.pos; pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos)); ) pos++;
            return pos !== state.pos && (silent || (state.pending += state.src.slice(state.pos, pos)), 
            state.pos = pos, !0);
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var isSpace = __webpack_require__(4).isSpace;
        module.exports = function(state, silent) {
            var pmax, max, pos = state.pos;
            if (10 !== state.src.charCodeAt(pos)) return !1;
            for (pmax = state.pending.length - 1, max = state.posMax, silent || (pmax >= 0 && 32 === state.pending.charCodeAt(pmax) ? pmax >= 1 && 32 === state.pending.charCodeAt(pmax - 1) ? (state.pending = state.pending.replace(/ +$/, ""), 
            state.push("hardbreak", "br", 0)) : (state.pending = state.pending.slice(0, -1), 
            state.push("softbreak", "br", 0)) : state.push("softbreak", "br", 0)), pos++; pos < max && isSpace(state.src.charCodeAt(pos)); ) pos++;
            return state.pos = pos, !0;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        for (var isSpace = __webpack_require__(4).isSpace, ESCAPED = [], i = 0; i < 256; i++) ESCAPED.push(0);
        "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach((function(ch) {
            ESCAPED[ch.charCodeAt(0)] = 1;
        })), module.exports = function(state, silent) {
            var ch, pos = state.pos, max = state.posMax;
            if (92 !== state.src.charCodeAt(pos)) return !1;
            if (++pos < max) {
                if ((ch = state.src.charCodeAt(pos)) < 256 && 0 !== ESCAPED[ch]) return silent || (state.pending += state.src[pos]), 
                state.pos += 2, !0;
                if (10 === ch) {
                    for (silent || state.push("hardbreak", "br", 0), pos++; pos < max && (ch = state.src.charCodeAt(pos), 
                    isSpace(ch)); ) pos++;
                    return state.pos = pos, !0;
                }
            }
            return silent || (state.pending += "\\"), state.pos++, !0;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(state, silent) {
            var start, max, marker, matchStart, matchEnd, token, pos = state.pos;
            if (96 !== state.src.charCodeAt(pos)) return !1;
            for (start = pos, pos++, max = state.posMax; pos < max && 96 === state.src.charCodeAt(pos); ) pos++;
            for (marker = state.src.slice(start, pos), matchStart = matchEnd = pos; -1 !== (matchStart = state.src.indexOf("`", matchEnd)); ) {
                for (matchEnd = matchStart + 1; matchEnd < max && 96 === state.src.charCodeAt(matchEnd); ) matchEnd++;
                if (matchEnd - matchStart === marker.length) return silent || ((token = state.push("code_inline", "code", 0)).markup = marker, 
                token.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), 
                state.pos = matchEnd, !0;
            }
            return silent || (state.pending += marker), state.pos += marker.length, !0;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var normalizeReference = __webpack_require__(4).normalizeReference, isSpace = __webpack_require__(4).isSpace;
        module.exports = function(state, silent) {
            var attrs, code, label, labelEnd, labelStart, pos, res, ref, title, href = "", oldPos = state.pos, max = state.posMax, start = state.pos, parseReference = !0;
            if (91 !== state.src.charCodeAt(state.pos)) return !1;
            if (labelStart = state.pos + 1, (labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, !0)) < 0) return !1;
            if ((pos = labelEnd + 1) < max && 40 === state.src.charCodeAt(pos)) {
                for (parseReference = !1, pos++; pos < max && (code = state.src.charCodeAt(pos), 
                isSpace(code) || 10 === code); pos++) ;
                if (pos >= max) return !1;
                for (start = pos, (res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax)).ok && (href = state.md.normalizeLink(res.str), 
                state.md.validateLink(href) ? pos = res.pos : href = ""), start = pos; pos < max && (code = state.src.charCodeAt(pos), 
                isSpace(code) || 10 === code); pos++) ;
                if (res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax), pos < max && start !== pos && res.ok) for (title = res.str, 
                pos = res.pos; pos < max && (code = state.src.charCodeAt(pos), isSpace(code) || 10 === code); pos++) ; else title = "";
                (pos >= max || 41 !== state.src.charCodeAt(pos)) && (parseReference = !0), pos++;
            }
            if (parseReference) {
                if (void 0 === state.env.references) return !1;
                if (pos < max && 91 === state.src.charCodeAt(pos) ? (start = pos + 1, (pos = state.md.helpers.parseLinkLabel(state, pos)) >= 0 ? label = state.src.slice(start, pos++) : pos = labelEnd + 1) : pos = labelEnd + 1, 
                label || (label = state.src.slice(labelStart, labelEnd)), !(ref = state.env.references[normalizeReference(label)])) return state.pos = oldPos, 
                !1;
                href = ref.href, title = ref.title;
            }
            return silent || (state.pos = labelStart, state.posMax = labelEnd, state.push("link_open", "a", 1).attrs = attrs = [ [ "href", href ] ], 
            title && attrs.push([ "title", title ]), state.md.inline.tokenize(state), state.push("link_close", "a", -1)), 
            state.pos = pos, state.posMax = max, !0;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var normalizeReference = __webpack_require__(4).normalizeReference, isSpace = __webpack_require__(4).isSpace;
        module.exports = function(state, silent) {
            var attrs, code, content, label, labelEnd, labelStart, pos, ref, res, title, token, tokens, start, href = "", oldPos = state.pos, max = state.posMax;
            if (33 !== state.src.charCodeAt(state.pos)) return !1;
            if (91 !== state.src.charCodeAt(state.pos + 1)) return !1;
            if (labelStart = state.pos + 2, (labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, !1)) < 0) return !1;
            if ((pos = labelEnd + 1) < max && 40 === state.src.charCodeAt(pos)) {
                for (pos++; pos < max && (code = state.src.charCodeAt(pos), isSpace(code) || 10 === code); pos++) ;
                if (pos >= max) return !1;
                for (start = pos, (res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax)).ok && (href = state.md.normalizeLink(res.str), 
                state.md.validateLink(href) ? pos = res.pos : href = ""), start = pos; pos < max && (code = state.src.charCodeAt(pos), 
                isSpace(code) || 10 === code); pos++) ;
                if (res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax), pos < max && start !== pos && res.ok) for (title = res.str, 
                pos = res.pos; pos < max && (code = state.src.charCodeAt(pos), isSpace(code) || 10 === code); pos++) ; else title = "";
                if (pos >= max || 41 !== state.src.charCodeAt(pos)) return state.pos = oldPos, !1;
                pos++;
            } else {
                if (void 0 === state.env.references) return !1;
                if (pos < max && 91 === state.src.charCodeAt(pos) ? (start = pos + 1, (pos = state.md.helpers.parseLinkLabel(state, pos)) >= 0 ? label = state.src.slice(start, pos++) : pos = labelEnd + 1) : pos = labelEnd + 1, 
                label || (label = state.src.slice(labelStart, labelEnd)), !(ref = state.env.references[normalizeReference(label)])) return state.pos = oldPos, 
                !1;
                href = ref.href, title = ref.title;
            }
            return silent || (content = state.src.slice(labelStart, labelEnd), state.md.inline.parse(content, state.md, state.env, tokens = []), 
            (token = state.push("image", "img", 0)).attrs = attrs = [ [ "src", href ], [ "alt", "" ] ], 
            token.children = tokens, token.content = content, title && attrs.push([ "title", title ])), 
            state.pos = pos, state.posMax = max, !0;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var EMAIL_RE = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/, AUTOLINK_RE = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;
        module.exports = function(state, silent) {
            var tail, linkMatch, emailMatch, url, fullUrl, token, pos = state.pos;
            return 60 === state.src.charCodeAt(pos) && (!((tail = state.src.slice(pos)).indexOf(">") < 0) && (AUTOLINK_RE.test(tail) ? (url = (linkMatch = tail.match(AUTOLINK_RE))[0].slice(1, -1), 
            fullUrl = state.md.normalizeLink(url), !!state.md.validateLink(fullUrl) && (silent || ((token = state.push("link_open", "a", 1)).attrs = [ [ "href", fullUrl ] ], 
            token.markup = "autolink", token.info = "auto", (token = state.push("text", "", 0)).content = state.md.normalizeLinkText(url), 
            (token = state.push("link_close", "a", -1)).markup = "autolink", token.info = "auto"), 
            state.pos += linkMatch[0].length, !0)) : !!EMAIL_RE.test(tail) && (url = (emailMatch = tail.match(EMAIL_RE))[0].slice(1, -1), 
            fullUrl = state.md.normalizeLink("mailto:" + url), !!state.md.validateLink(fullUrl) && (silent || ((token = state.push("link_open", "a", 1)).attrs = [ [ "href", fullUrl ] ], 
            token.markup = "autolink", token.info = "auto", (token = state.push("text", "", 0)).content = state.md.normalizeLinkText(url), 
            (token = state.push("link_close", "a", -1)).markup = "autolink", token.info = "auto"), 
            state.pos += emailMatch[0].length, !0))));
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var HTML_TAG_RE = __webpack_require__(15).HTML_TAG_RE;
        module.exports = function(state, silent) {
            var ch, match, max, pos = state.pos;
            return !!state.md.options.html && (max = state.posMax, !(60 !== state.src.charCodeAt(pos) || pos + 2 >= max) && (!(33 !== (ch = state.src.charCodeAt(pos + 1)) && 63 !== ch && 47 !== ch && !function(ch) {
                var lc = 32 | ch;
                return lc >= 97 && lc <= 122;
            }(ch)) && (!!(match = state.src.slice(pos).match(HTML_TAG_RE)) && (silent || (state.push("html_inline", "", 0).content = state.src.slice(pos, pos + match[0].length)), 
            state.pos += match[0].length, !0))));
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var entities = __webpack_require__(10), has = __webpack_require__(4).has, isValidEntityCode = __webpack_require__(4).isValidEntityCode, fromCodePoint = __webpack_require__(4).fromCodePoint, DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
        module.exports = function(state, silent) {
            var code, match, pos = state.pos, max = state.posMax;
            if (38 !== state.src.charCodeAt(pos)) return !1;
            if (pos + 1 < max) if (35 === state.src.charCodeAt(pos + 1)) {
                if (match = state.src.slice(pos).match(DIGITAL_RE)) return silent || (code = "x" === match[1][0].toLowerCase() ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10), 
                state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(65533)), 
                state.pos += match[0].length, !0;
            } else if ((match = state.src.slice(pos).match(NAMED_RE)) && has(entities, match[1])) return silent || (state.pending += entities[match[1]]), 
            state.pos += match[0].length, !0;
            return silent || (state.pending += "&"), state.pos++, !0;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function processDelimiters(state, delimiters) {
            var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx, isOddMatch, lastJump, openersBottom = {}, max = delimiters.length;
            for (closerIdx = 0; closerIdx < max; closerIdx++) if ((closer = delimiters[closerIdx]).length = closer.length || 0, 
            closer.close) {
                for (openersBottom.hasOwnProperty(closer.marker) || (openersBottom[closer.marker] = [ -1, -1, -1 ]), 
                minOpenerIdx = openersBottom[closer.marker][closer.length % 3], newMinOpenerIdx = -1, 
                openerIdx = closerIdx - closer.jump - 1; openerIdx > minOpenerIdx; openerIdx -= opener.jump + 1) if ((opener = delimiters[openerIdx]).marker === closer.marker && (-1 === newMinOpenerIdx && (newMinOpenerIdx = openerIdx), 
                opener.open && opener.end < 0 && opener.level === closer.level && (isOddMatch = !1, 
                (opener.close || closer.open) && (opener.length + closer.length) % 3 == 0 && (opener.length % 3 == 0 && closer.length % 3 == 0 || (isOddMatch = !0)), 
                !isOddMatch))) {
                    lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? delimiters[openerIdx - 1].jump + 1 : 0, 
                    closer.jump = closerIdx - openerIdx + lastJump, closer.open = !1, opener.end = closerIdx, 
                    opener.jump = lastJump, opener.close = !1, newMinOpenerIdx = -1;
                    break;
                }
                -1 !== newMinOpenerIdx && (openersBottom[closer.marker][(closer.length || 0) % 3] = newMinOpenerIdx);
            }
        }
        module.exports = function(state) {
            var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
            for (processDelimiters(0, state.delimiters), curr = 0; curr < max; curr++) tokens_meta[curr] && tokens_meta[curr].delimiters && processDelimiters(0, tokens_meta[curr].delimiters);
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(state) {
            var curr, last, level = 0, tokens = state.tokens, max = state.tokens.length;
            for (curr = last = 0; curr < max; curr++) tokens[curr].nesting < 0 && level--, tokens[curr].level = level, 
            tokens[curr].nesting > 0 && level++, "text" === tokens[curr].type && curr + 1 < max && "text" === tokens[curr + 1].type ? tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content : (curr !== last && (tokens[last] = tokens[curr]), 
            last++);
            curr !== last && (tokens.length = last);
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var Token = __webpack_require__(6), isWhiteSpace = __webpack_require__(4).isWhiteSpace, isPunctChar = __webpack_require__(4).isPunctChar, isMdAsciiPunct = __webpack_require__(4).isMdAsciiPunct;
        function StateInline(src, md, env, outTokens) {
            this.src = src, this.env = env, this.md = md, this.tokens = outTokens, this.tokens_meta = Array(outTokens.length), 
            this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", 
            this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [];
        }
        StateInline.prototype.pushPending = function() {
            var token = new Token("text", "", 0);
            return token.content = this.pending, token.level = this.pendingLevel, this.tokens.push(token), 
            this.pending = "", token;
        }, StateInline.prototype.push = function(type, tag, nesting) {
            this.pending && this.pushPending();
            var token = new Token(type, tag, nesting), token_meta = null;
            return nesting < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), 
            token.level = this.level, nesting > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), 
            this.delimiters = [], token_meta = {
                delimiters: this.delimiters
            }), this.pendingLevel = this.level, this.tokens.push(token), this.tokens_meta.push(token_meta), 
            token;
        }, StateInline.prototype.scanDelims = function(start, canSplitWord) {
            var lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, pos = start, left_flanking = !0, right_flanking = !0, max = this.posMax, marker = this.src.charCodeAt(start);
            for (lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32; pos < max && this.src.charCodeAt(pos) === marker; ) pos++;
            return count = pos - start, nextChar = pos < max ? this.src.charCodeAt(pos) : 32, 
            isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar)), 
            isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar)), 
            isLastWhiteSpace = isWhiteSpace(lastChar), (isNextWhiteSpace = isWhiteSpace(nextChar)) ? left_flanking = !1 : isNextPunctChar && (isLastWhiteSpace || isLastPunctChar || (left_flanking = !1)), 
            isLastWhiteSpace ? right_flanking = !1 : isLastPunctChar && (isNextWhiteSpace || isNextPunctChar || (right_flanking = !1)), 
            canSplitWord ? (can_open = left_flanking, can_close = right_flanking) : (can_open = left_flanking && (!right_flanking || isLastPunctChar), 
            can_close = right_flanking && (!left_flanking || isNextPunctChar)), {
                can_open: can_open,
                can_close: can_close,
                length: count
            };
        }, StateInline.prototype.Token = Token, module.exports = StateInline;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function assign(obj) {
            var sources = Array.prototype.slice.call(arguments, 1);
            return sources.forEach((function(source) {
                source && Object.keys(source).forEach((function(key) {
                    obj[key] = source[key];
                }));
            })), obj;
        }
        function _class(obj) {
            return Object.prototype.toString.call(obj);
        }
        function isFunction(obj) {
            return "[object Function]" === _class(obj);
        }
        function escapeRE(str) {
            return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
        }
        var defaultOptions = {
            fuzzyLink: !0,
            fuzzyEmail: !0,
            fuzzyIP: !1
        };
        var defaultSchemas = {
            "http:": {
                validate: function(text, pos, self) {
                    var tail = text.slice(pos);
                    return self.re.http || (self.re.http = new RegExp("^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, "i")), 
                    self.re.http.test(tail) ? tail.match(self.re.http)[0].length : 0;
                }
            },
            "https:": "http:",
            "ftp:": "http:",
            "//": {
                validate: function(text, pos, self) {
                    var tail = text.slice(pos);
                    return self.re.no_http || (self.re.no_http = new RegExp("^" + self.re.src_auth + "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path, "i")), 
                    self.re.no_http.test(tail) ? pos >= 3 && ":" === text[pos - 3] || pos >= 3 && "/" === text[pos - 3] ? 0 : tail.match(self.re.no_http)[0].length : 0;
                }
            },
            "mailto:": {
                validate: function(text, pos, self) {
                    var tail = text.slice(pos);
                    return self.re.mailto || (self.re.mailto = new RegExp("^" + self.re.src_email_name + "@" + self.re.src_host_strict, "i")), 
                    self.re.mailto.test(tail) ? tail.match(self.re.mailto)[0].length : 0;
                }
            }
        }, tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
        function compile(self) {
            var re = self.re = __webpack_require__(70)(self.__opts__), tlds = self.__tlds__.slice();
            function untpl(tpl) {
                return tpl.replace("%TLDS%", re.src_tlds);
            }
            self.onCompile(), self.__tlds_replaced__ || tlds.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"), 
            tlds.push(re.src_xn), re.src_tlds = tlds.join("|"), re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), "i"), 
            re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), "i"), re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), "i"), 
            re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), "i");
            var aliases = [];
            function schemaError(name, val) {
                throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
            }
            self.__compiled__ = {}, Object.keys(self.__schemas__).forEach((function(name) {
                var val = self.__schemas__[name];
                if (null !== val) {
                    var compiled = {
                        validate: null,
                        link: null
                    };
                    if (self.__compiled__[name] = compiled, "[object Object]" === _class(val)) return !function(obj) {
                        return "[object RegExp]" === _class(obj);
                    }(val.validate) ? isFunction(val.validate) ? compiled.validate = val.validate : schemaError(name, val) : compiled.validate = function(re) {
                        return function(text, pos) {
                            var tail = text.slice(pos);
                            return re.test(tail) ? tail.match(re)[0].length : 0;
                        };
                    }(val.validate), void (isFunction(val.normalize) ? compiled.normalize = val.normalize : val.normalize ? schemaError(name, val) : compiled.normalize = function(match, self) {
                        self.normalize(match);
                    });
                    !function(obj) {
                        return "[object String]" === _class(obj);
                    }(val) ? schemaError(name, val) : aliases.push(name);
                }
            })), aliases.forEach((function(alias) {
                self.__compiled__[self.__schemas__[alias]] && (self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate, 
                self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize);
            })), self.__compiled__[""] = {
                validate: null,
                normalize: function(match, self) {
                    self.normalize(match);
                }
            };
            var slist = Object.keys(self.__compiled__).filter((function(name) {
                return name.length > 0 && self.__compiled__[name];
            })).map(escapeRE).join("|");
            self.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + re.src_ZPCc + "))(" + slist + ")", "i"), 
            self.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + re.src_ZPCc + "))(" + slist + ")", "ig"), 
            self.re.pretest = RegExp("(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@", "i"), 
            function(self) {
                self.__index__ = -1, self.__text_cache__ = "";
            }(self);
        }
        function Match(self, shift) {
            var start = self.__index__, end = self.__last_index__, text = self.__text_cache__.slice(start, end);
            this.schema = self.__schema__.toLowerCase(), this.index = start + shift, this.lastIndex = end + shift, 
            this.raw = text, this.text = text, this.url = text;
        }
        function createMatch(self, shift) {
            var match = new Match(self, shift);
            return self.__compiled__[match.schema].normalize(match, self), match;
        }
        function LinkifyIt(schemas, options) {
            if (!(this instanceof LinkifyIt)) return new LinkifyIt(schemas, options);
            var obj;
            options || (obj = schemas, Object.keys(obj || {}).reduce((function(acc, k) {
                return acc || defaultOptions.hasOwnProperty(k);
            }), !1) && (options = schemas, schemas = {})), this.__opts__ = assign({}, defaultOptions, options), 
            this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", 
            this.__schemas__ = assign({}, defaultSchemas, schemas), this.__compiled__ = {}, 
            this.__tlds__ = tlds_default, this.__tlds_replaced__ = !1, this.re = {}, compile(this);
        }
        LinkifyIt.prototype.add = function(schema, definition) {
            return this.__schemas__[schema] = definition, compile(this), this;
        }, LinkifyIt.prototype.set = function(options) {
            return this.__opts__ = assign(this.__opts__, options), this;
        }, LinkifyIt.prototype.test = function(text) {
            if (this.__text_cache__ = text, this.__index__ = -1, !text.length) return !1;
            var m, ml, me, len, shift, next, re, tld_pos;
            if (this.re.schema_test.test(text)) for ((re = this.re.schema_search).lastIndex = 0; null !== (m = re.exec(text)); ) if (len = this.testSchemaAt(text, m[2], re.lastIndex)) {
                this.__schema__ = m[2], this.__index__ = m.index + m[1].length, this.__last_index__ = m.index + m[0].length + len;
                break;
            }
            return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (tld_pos = text.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || tld_pos < this.__index__) && null !== (ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (shift = ml.index + ml[1].length, 
            (this.__index__ < 0 || shift < this.__index__) && (this.__schema__ = "", this.__index__ = shift, 
            this.__last_index__ = ml.index + ml[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && text.indexOf("@") >= 0 && null !== (me = text.match(this.re.email_fuzzy)) && (shift = me.index + me[1].length, 
            next = me.index + me[0].length, (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) && (this.__schema__ = "mailto:", 
            this.__index__ = shift, this.__last_index__ = next)), this.__index__ >= 0;
        }, LinkifyIt.prototype.pretest = function(text) {
            return this.re.pretest.test(text);
        }, LinkifyIt.prototype.testSchemaAt = function(text, schema, pos) {
            return this.__compiled__[schema.toLowerCase()] ? this.__compiled__[schema.toLowerCase()].validate(text, pos, this) : 0;
        }, LinkifyIt.prototype.match = function(text) {
            var shift = 0, result = [];
            this.__index__ >= 0 && this.__text_cache__ === text && (result.push(createMatch(this, shift)), 
            shift = this.__last_index__);
            for (var tail = shift ? text.slice(shift) : text; this.test(tail); ) result.push(createMatch(this, shift)), 
            tail = tail.slice(this.__last_index__), shift += this.__last_index__;
            return result.length ? result : null;
        }, LinkifyIt.prototype.tlds = function(list, keepOld) {
            return list = Array.isArray(list) ? list : [ list ], keepOld ? (this.__tlds__ = this.__tlds__.concat(list).sort().filter((function(el, idx, arr) {
                return el !== arr[idx - 1];
            })).reverse(), compile(this), this) : (this.__tlds__ = list.slice(), this.__tlds_replaced__ = !0, 
            compile(this), this);
        }, LinkifyIt.prototype.normalize = function(match) {
            match.schema || (match.url = "http://" + match.url), "mailto:" !== match.schema || /^mailto:/i.test(match.url) || (match.url = "mailto:" + match.url);
        }, LinkifyIt.prototype.onCompile = function() {}, module.exports = LinkifyIt;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(opts) {
            var re = {};
            re.src_Any = __webpack_require__(12).source, re.src_Cc = __webpack_require__(13).source, 
            re.src_Z = __webpack_require__(14).source, re.src_P = __webpack_require__(7).source, 
            re.src_ZPCc = [ re.src_Z, re.src_P, re.src_Cc ].join("|"), re.src_ZCc = [ re.src_Z, re.src_Cc ].join("|");
            return re.src_pseudo_letter = "(?:(?![><｜]|" + re.src_ZPCc + ")" + re.src_Any + ")", 
            re.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", 
            re.src_auth = "(?:(?:(?!" + re.src_ZCc + "|[@/\\[\\]()]).)+@)?", re.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", 
            re.src_host_terminator = "(?=$|[><｜]|" + re.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + re.src_ZPCc + "))", 
            re.src_path = "(?:[/?#](?:(?!" + re.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + re.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + re.src_ZCc + "|[']).)+\\'|\\'(?=" + re.src_pseudo_letter + "|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!" + re.src_ZCc + "|[.]).|" + (opts && opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + re.src_ZCc + ").|\\!(?!" + re.src_ZCc + "|[!]).|\\?(?!" + re.src_ZCc + "|[?]).)+|\\/)?", 
            re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', 
            re.src_xn = "xn--[a-z0-9\\-]{1,59}", re.src_domain_root = "(?:" + re.src_xn + "|" + re.src_pseudo_letter + "{1,63})", 
            re.src_domain = "(?:" + re.src_xn + "|(?:" + re.src_pseudo_letter + ")|(?:" + re.src_pseudo_letter + "(?:-|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + "))", 
            re.src_host = "(?:(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain + "))", 
            re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%)))", 
            re.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))", re.src_host_strict = re.src_host + re.src_host_terminator, 
            re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator, re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator, 
            re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator, 
            re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator, 
            re.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re.src_ZPCc + "|>|$))", 
            re.tpl_email_fuzzy = '(^|[><｜]|"|\\(|' + re.src_ZCc + ")(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")", 
            re.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re.src_ZPCc + "))((?![$+<=>^`|｜])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")", 
            re.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re.src_ZPCc + "))((?![$+<=>^`|｜])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")", 
            re;
        };
    }, function(module, exports, __webpack_require__) {
        (function(module, global) {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            !function(root) {
                exports && exports.nodeType, module && module.nodeType;
                var freeGlobal = "object" == typeof global && global;
                freeGlobal.global !== freeGlobal && freeGlobal.window !== freeGlobal && freeGlobal.self;
                var punycode, maxInt = 2147483647, regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, errors = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, floor = Math.floor, stringFromCharCode = String.fromCharCode;
                function error(type) {
                    throw new RangeError(errors[type]);
                }
                function map(array, fn) {
                    for (var length = array.length, result = []; length--; ) result[length] = fn(array[length]);
                    return result;
                }
                function mapDomain(string, fn) {
                    var parts = string.split("@"), result = "";
                    return parts.length > 1 && (result = parts[0] + "@", string = parts[1]), result + map((string = string.replace(regexSeparators, ".")).split("."), fn).join(".");
                }
                function ucs2decode(string) {
                    for (var value, extra, output = [], counter = 0, length = string.length; counter < length; ) (value = string.charCodeAt(counter++)) >= 55296 && value <= 56319 && counter < length ? 56320 == (64512 & (extra = string.charCodeAt(counter++))) ? output.push(((1023 & value) << 10) + (1023 & extra) + 65536) : (output.push(value), 
                    counter--) : output.push(value);
                    return output;
                }
                function ucs2encode(array) {
                    return map(array, (function(value) {
                        var output = "";
                        return value > 65535 && (output += stringFromCharCode((value -= 65536) >>> 10 & 1023 | 55296), 
                        value = 56320 | 1023 & value), output += stringFromCharCode(value);
                    })).join("");
                }
                function digitToBasic(digit, flag) {
                    return digit + 22 + 75 * (digit < 26) - ((0 != flag) << 5);
                }
                function adapt(delta, numPoints, firstTime) {
                    var k = 0;
                    for (delta = firstTime ? floor(delta / 700) : delta >> 1, delta += floor(delta / numPoints); delta > 455; k += 36) delta = floor(delta / 35);
                    return floor(k + 36 * delta / (delta + 38));
                }
                function decode(input) {
                    var out, basic, j, index, oldi, w, k, digit, t, baseMinusT, codePoint, output = [], inputLength = input.length, i = 0, n = 128, bias = 72;
                    for ((basic = input.lastIndexOf("-")) < 0 && (basic = 0), j = 0; j < basic; ++j) input.charCodeAt(j) >= 128 && error("not-basic"), 
                    output.push(input.charCodeAt(j));
                    for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
                        for (oldi = i, w = 1, k = 36; index >= inputLength && error("invalid-input"), ((digit = (codePoint = input.charCodeAt(index++)) - 48 < 10 ? codePoint - 22 : codePoint - 65 < 26 ? codePoint - 65 : codePoint - 97 < 26 ? codePoint - 97 : 36) >= 36 || digit > floor((maxInt - i) / w)) && error("overflow"), 
                        i += digit * w, !(digit < (t = k <= bias ? 1 : k >= bias + 26 ? 26 : k - bias)); k += 36) w > floor(maxInt / (baseMinusT = 36 - t)) && error("overflow"), 
                        w *= baseMinusT;
                        bias = adapt(i - oldi, out = output.length + 1, 0 == oldi), floor(i / out) > maxInt - n && error("overflow"), 
                        n += floor(i / out), i %= out, output.splice(i++, 0, n);
                    }
                    return ucs2encode(output);
                }
                function encode(input) {
                    var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, inputLength, handledCPCountPlusOne, baseMinusT, qMinusT, output = [];
                    for (inputLength = (input = ucs2decode(input)).length, n = 128, delta = 0, bias = 72, 
                    j = 0; j < inputLength; ++j) (currentValue = input[j]) < 128 && output.push(stringFromCharCode(currentValue));
                    for (handledCPCount = basicLength = output.length, basicLength && output.push("-"); handledCPCount < inputLength; ) {
                        for (m = maxInt, j = 0; j < inputLength; ++j) (currentValue = input[j]) >= n && currentValue < m && (m = currentValue);
                        for (m - n > floor((maxInt - delta) / (handledCPCountPlusOne = handledCPCount + 1)) && error("overflow"), 
                        delta += (m - n) * handledCPCountPlusOne, n = m, j = 0; j < inputLength; ++j) if ((currentValue = input[j]) < n && ++delta > maxInt && error("overflow"), 
                        currentValue == n) {
                            for (q = delta, k = 36; !(q < (t = k <= bias ? 1 : k >= bias + 26 ? 26 : k - bias)); k += 36) qMinusT = q - t, 
                            baseMinusT = 36 - t, output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))), 
                            q = floor(qMinusT / baseMinusT);
                            output.push(stringFromCharCode(digitToBasic(q, 0))), bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength), 
                            delta = 0, ++handledCPCount;
                        }
                        ++delta, ++n;
                    }
                    return output.join("");
                }
                punycode = {
                    version: "1.4.1",
                    ucs2: {
                        decode: ucs2decode,
                        encode: ucs2encode
                    },
                    decode: decode,
                    encode: encode,
                    toASCII: function(input) {
                        return mapDomain(input, (function(string) {
                            return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
                        }));
                    },
                    toUnicode: function(input) {
                        return mapDomain(input, (function(string) {
                            return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
                        }));
                    }
                }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return punycode;
                }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
            }();
        }).call(this, __webpack_require__(72)(module), __webpack_require__(18));
    }, function(module, exports) {
        module.exports = function(module) {
            return module.webpackPolyfill || (module.deprecate = function() {}, module.paths = [], 
            module.children || (module.children = []), Object.defineProperty(module, "loaded", {
                enumerable: !0,
                get: function() {
                    return module.l;
                }
            }), Object.defineProperty(module, "id", {
                enumerable: !0,
                get: function() {
                    return module.i;
                }
            }), module.webpackPolyfill = 1), module;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 100
            },
            components: {
                core: {},
                block: {},
                inline: {}
            }
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {
                    rules: [ "normalize", "block", "inline" ]
                },
                block: {
                    rules: [ "paragraph" ]
                },
                inline: {
                    rules: [ "text" ],
                    rules2: [ "balance_pairs", "text_collapse" ]
                }
            }
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = {
            options: {
                html: !0,
                xhtmlOut: !0,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {
                    rules: [ "normalize", "block", "inline" ]
                },
                block: {
                    rules: [ "blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph" ]
                },
                inline: {
                    rules: [ "autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text" ],
                    rules2: [ "balance_pairs", "emphasis", "text_collapse" ]
                }
            }
        };
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__76__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__77__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__78__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__79__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__80__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__81__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__82__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__83__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__84__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__85__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__86__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__87__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__88__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__89__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__90__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__91__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__92__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__93__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__94__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__95__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__96__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__97__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__98__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__99__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__100__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__101__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__102__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__103__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__104__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__105__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__106__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__107__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__108__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__109__;
    }, , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "StacksEditor", (function() {
            return editor_StacksEditor;
        })), __webpack_require__.d(__webpack_exports__, "EditorType", (function() {
            return EditorType;
        }));
        var index_es = __webpack_require__(2), dist_index_es = __webpack_require__(0), prosemirror_state_dist_index_es = __webpack_require__(1);
        function deleteSelection(state, dispatch) {
            return !state.selection.empty && (dispatch && dispatch(state.tr.deleteSelection().scrollIntoView()), 
            !0);
        }
        function textblockAt(node, side) {
            for (;node; node = "start" == side ? node.firstChild : node.lastChild) if (node.isTextblock) return !0;
            return !1;
        }
        function findCutBefore($pos) {
            if (!$pos.parent.type.spec.isolating) for (var i = $pos.depth - 1; i >= 0; i--) {
                if ($pos.index(i) > 0) return $pos.doc.resolve($pos.before(i + 1));
                if ($pos.node(i).type.spec.isolating) break;
            }
            return null;
        }
        function findCutAfter($pos) {
            if (!$pos.parent.type.spec.isolating) for (var i = $pos.depth - 1; i >= 0; i--) {
                var parent = $pos.node(i);
                if ($pos.index(i) + 1 < parent.childCount) return $pos.doc.resolve($pos.after(i + 1));
                if (parent.type.spec.isolating) break;
            }
            return null;
        }
        function defaultBlockAt(match) {
            for (var i = 0; i < match.edgeCount; i++) {
                var type = match.edge(i).type;
                if (type.isTextblock && !type.hasRequiredAttrs()) return type;
            }
            return null;
        }
        function exitCode(state, dispatch) {
            var ref = state.selection, $head = ref.$head, $anchor = ref.$anchor;
            if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) return !1;
            var above = $head.node(-1), after = $head.indexAfter(-1), type = defaultBlockAt(above.contentMatchAt(after));
            if (!above.canReplaceWith(after, after, type)) return !1;
            if (dispatch) {
                var pos = $head.after(), tr = state.tr.replaceWith(pos, pos, type.createAndFill());
                tr.setSelection(prosemirror_state_dist_index_es.Selection.near(tr.doc.resolve(pos), 1)), 
                dispatch(tr.scrollIntoView());
            }
            return !0;
        }
        function splitBlock(state, dispatch) {
            var ref = state.selection, $from = ref.$from, $to = ref.$to;
            if (state.selection instanceof prosemirror_state_dist_index_es.NodeSelection && state.selection.node.isBlock) return !(!$from.parentOffset || !Object(index_es.f)(state.doc, $from.pos)) && (dispatch && dispatch(state.tr.split($from.pos).scrollIntoView()), 
            !0);
            if (!$from.parent.isBlock) return !1;
            if (dispatch) {
                var atEnd = $to.parentOffset == $to.parent.content.size, tr = state.tr;
                state.selection instanceof prosemirror_state_dist_index_es.TextSelection && tr.deleteSelection();
                var deflt = 0 == $from.depth ? null : defaultBlockAt($from.node(-1).contentMatchAt($from.indexAfter(-1))), types = atEnd && deflt ? [ {
                    type: deflt
                } ] : null, can = Object(index_es.f)(tr.doc, tr.mapping.map($from.pos), 1, types);
                types || can || !Object(index_es.f)(tr.doc, tr.mapping.map($from.pos), 1, deflt && [ {
                    type: deflt
                } ]) || (types = [ {
                    type: deflt
                } ], can = !0), can && (tr.split(tr.mapping.map($from.pos), 1, types), atEnd || $from.parentOffset || $from.parent.type == deflt || !$from.node(-1).canReplace($from.index(-1), $from.indexAfter(-1), dist_index_es.d.from(deflt.create(), $from.parent)) || tr.setNodeMarkup(tr.mapping.map($from.before()), deflt)), 
                dispatch(tr.scrollIntoView());
            }
            return !0;
        }
        function deleteBarrier(state, $cut, dispatch) {
            var conn, match, before = $cut.nodeBefore, after = $cut.nodeAfter;
            if (before.type.spec.isolating || after.type.spec.isolating) return !1;
            if (function(state, $pos, dispatch) {
                var before = $pos.nodeBefore, after = $pos.nodeAfter, index = $pos.index();
                return !(!(before && after && before.type.compatibleContent(after.type)) || (!before.content.size && $pos.parent.canReplace(index - 1, index) ? (dispatch && dispatch(state.tr.delete($pos.pos - before.nodeSize, $pos.pos).scrollIntoView()), 
                0) : !$pos.parent.canReplace(index, index + 1) || !after.isTextblock && !Object(index_es.e)(state.doc, $pos.pos) || (dispatch && dispatch(state.tr.clearIncompatible($pos.pos, before.type, before.contentMatchAt(before.childCount)).join($pos.pos).scrollIntoView()), 
                0)));
            }(state, $cut, dispatch)) return !0;
            if ($cut.parent.canReplace($cut.index(), $cut.index() + 1) && (conn = (match = before.contentMatchAt(before.childCount)).findWrapping(after.type)) && match.matchType(conn[0] || after.type).validEnd) {
                if (dispatch) {
                    for (var end = $cut.pos + after.nodeSize, wrap = dist_index_es.d.empty, i = conn.length - 1; i >= 0; i--) wrap = dist_index_es.d.from(conn[i].create(null, wrap));
                    wrap = dist_index_es.d.from(before.copy(wrap));
                    var tr = state.tr.step(new index_es.b($cut.pos - 1, end, $cut.pos, end, new dist_index_es.l(wrap, 1, 0), conn.length, !0)), joinAt = end + 2 * conn.length;
                    Object(index_es.e)(tr.doc, joinAt) && tr.join(joinAt), dispatch(tr.scrollIntoView());
                }
                return !0;
            }
            var selAfter = prosemirror_state_dist_index_es.Selection.findFrom($cut, 1), range = selAfter && selAfter.$from.blockRange(selAfter.$to), target = range && Object(index_es.j)(range);
            return null != target && target >= $cut.depth && (dispatch && dispatch(state.tr.lift(range, target).scrollIntoView()), 
            !0);
        }
        function wrapIn(nodeType, attrs) {
            return function(state, dispatch) {
                var ref = state.selection, $from = ref.$from, $to = ref.$to, range = $from.blockRange($to), wrapping = range && Object(index_es.h)(range, nodeType, attrs);
                return !!wrapping && (dispatch && dispatch(state.tr.wrap(range, wrapping).scrollIntoView()), 
                !0);
            };
        }
        function setBlockType(nodeType, attrs) {
            return function(state, dispatch) {
                var ref = state.selection, from = ref.from, to = ref.to, applicable = !1;
                return state.doc.nodesBetween(from, to, (function(node, pos) {
                    if (applicable) return !1;
                    if (node.isTextblock && !node.hasMarkup(nodeType, attrs)) if (node.type == nodeType) applicable = !0; else {
                        var $pos = state.doc.resolve(pos), index = $pos.index();
                        applicable = $pos.parent.canReplaceWith(index, index + 1, nodeType);
                    }
                })), !!applicable && (dispatch && dispatch(state.tr.setBlockType(from, to, nodeType, attrs).scrollIntoView()), 
                !0);
            };
        }
        function toggleMark(markType, attrs) {
            return function(state, dispatch) {
                var ref = state.selection, empty = ref.empty, $cursor = ref.$cursor, ranges = ref.ranges;
                if (empty && !$cursor || !function(doc, ranges, type) {
                    for (var loop = function(i) {
                        var ref = ranges[i], $from = ref.$from, $to = ref.$to, can = 0 == $from.depth && doc.type.allowsMarkType(type);
                        if (doc.nodesBetween($from.pos, $to.pos, (function(node) {
                            if (can) return !1;
                            can = node.inlineContent && node.type.allowsMarkType(type);
                        })), can) return {
                            v: !0
                        };
                    }, i = 0; i < ranges.length; i++) {
                        var returned = loop(i);
                        if (returned) return returned.v;
                    }
                    return !1;
                }(state.doc, ranges, markType)) return !1;
                if (dispatch) if ($cursor) markType.isInSet(state.storedMarks || $cursor.marks()) ? dispatch(state.tr.removeStoredMark(markType)) : dispatch(state.tr.addStoredMark(markType.create(attrs))); else {
                    for (var has = !1, tr = state.tr, i = 0; !has && i < ranges.length; i++) {
                        var ref$1 = ranges[i], $from = ref$1.$from, $to = ref$1.$to;
                        has = state.doc.rangeHasMark($from.pos, $to.pos, markType);
                    }
                    for (var i$1 = 0; i$1 < ranges.length; i$1++) {
                        var ref$2 = ranges[i$1], $from$1 = ref$2.$from, $to$1 = ref$2.$to;
                        has ? tr.removeMark($from$1.pos, $to$1.pos, markType) : tr.addMark($from$1.pos, $to$1.pos, markType.create(attrs));
                    }
                    dispatch(tr.scrollIntoView());
                }
                return !0;
            };
        }
        function chainCommands() {
            for (var commands = [], len = arguments.length; len--; ) commands[len] = arguments[len];
            return function(state, dispatch, view) {
                for (var i = 0; i < commands.length; i++) if (commands[i](state, dispatch, view)) return !0;
                return !1;
            };
        }
        var backspace = chainCommands(deleteSelection, (function(state, dispatch, view) {
            var $cursor = state.selection.$cursor;
            if (!$cursor || (view ? !view.endOfTextblock("backward", state) : $cursor.parentOffset > 0)) return !1;
            var $cut = findCutBefore($cursor);
            if (!$cut) {
                var range = $cursor.blockRange(), target = range && Object(index_es.j)(range);
                return null != target && (dispatch && dispatch(state.tr.lift(range, target).scrollIntoView()), 
                !0);
            }
            var before = $cut.nodeBefore;
            if (!before.type.spec.isolating && deleteBarrier(state, $cut, dispatch)) return !0;
            if (0 == $cursor.parent.content.size && (textblockAt(before, "end") || prosemirror_state_dist_index_es.NodeSelection.isSelectable(before))) {
                if (dispatch) {
                    var tr = state.tr.deleteRange($cursor.before(), $cursor.after());
                    tr.setSelection(textblockAt(before, "end") ? prosemirror_state_dist_index_es.Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos, -1)), -1) : prosemirror_state_dist_index_es.NodeSelection.create(tr.doc, $cut.pos - before.nodeSize)), 
                    dispatch(tr.scrollIntoView());
                }
                return !0;
            }
            return !(!before.isAtom || $cut.depth != $cursor.depth - 1) && (dispatch && dispatch(state.tr.delete($cut.pos - before.nodeSize, $cut.pos).scrollIntoView()), 
            !0);
        }), (function(state, dispatch, view) {
            var ref = state.selection, $head = ref.$head, $cut = $head;
            if (!ref.empty) return !1;
            if ($head.parent.isTextblock) {
                if (view ? !view.endOfTextblock("backward", state) : $head.parentOffset > 0) return !1;
                $cut = findCutBefore($head);
            }
            var node = $cut && $cut.nodeBefore;
            return !(!node || !prosemirror_state_dist_index_es.NodeSelection.isSelectable(node)) && (dispatch && dispatch(state.tr.setSelection(prosemirror_state_dist_index_es.NodeSelection.create(state.doc, $cut.pos - node.nodeSize)).scrollIntoView()), 
            !0);
        })), del = chainCommands(deleteSelection, (function(state, dispatch, view) {
            var $cursor = state.selection.$cursor;
            if (!$cursor || (view ? !view.endOfTextblock("forward", state) : $cursor.parentOffset < $cursor.parent.content.size)) return !1;
            var $cut = findCutAfter($cursor);
            if (!$cut) return !1;
            var after = $cut.nodeAfter;
            if (deleteBarrier(state, $cut, dispatch)) return !0;
            if (0 == $cursor.parent.content.size && (textblockAt(after, "start") || prosemirror_state_dist_index_es.NodeSelection.isSelectable(after))) {
                if (dispatch) {
                    var tr = state.tr.deleteRange($cursor.before(), $cursor.after());
                    tr.setSelection(textblockAt(after, "start") ? prosemirror_state_dist_index_es.Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos)), 1) : prosemirror_state_dist_index_es.NodeSelection.create(tr.doc, tr.mapping.map($cut.pos))), 
                    dispatch(tr.scrollIntoView());
                }
                return !0;
            }
            return !(!after.isAtom || $cut.depth != $cursor.depth - 1) && (dispatch && dispatch(state.tr.delete($cut.pos, $cut.pos + after.nodeSize).scrollIntoView()), 
            !0);
        }), (function(state, dispatch, view) {
            var ref = state.selection, $head = ref.$head, $cut = $head;
            if (!ref.empty) return !1;
            if ($head.parent.isTextblock) {
                if (view ? !view.endOfTextblock("forward", state) : $head.parentOffset < $head.parent.content.size) return !1;
                $cut = findCutAfter($head);
            }
            var node = $cut && $cut.nodeAfter;
            return !(!node || !prosemirror_state_dist_index_es.NodeSelection.isSelectable(node)) && (dispatch && dispatch(state.tr.setSelection(prosemirror_state_dist_index_es.NodeSelection.create(state.doc, $cut.pos)).scrollIntoView()), 
            !0);
        })), pcBaseKeymap = {
            Enter: chainCommands((function(state, dispatch) {
                var ref = state.selection, $head = ref.$head, $anchor = ref.$anchor;
                return !(!$head.parent.type.spec.code || !$head.sameParent($anchor)) && (dispatch && dispatch(state.tr.insertText("\n").scrollIntoView()), 
                !0);
            }), (function(state, dispatch) {
                var ref = state.selection, $from = ref.$from, $to = ref.$to;
                if ($from.parent.inlineContent || $to.parent.inlineContent) return !1;
                var type = defaultBlockAt($from.parent.contentMatchAt($to.indexAfter()));
                if (!type || !type.isTextblock) return !1;
                if (dispatch) {
                    var side = (!$from.parentOffset && $to.index() < $to.parent.childCount ? $from : $to).pos, tr = state.tr.insert(side, type.createAndFill());
                    tr.setSelection(prosemirror_state_dist_index_es.TextSelection.create(tr.doc, side + 1)), 
                    dispatch(tr.scrollIntoView());
                }
                return !0;
            }), (function(state, dispatch) {
                var $cursor = state.selection.$cursor;
                if (!$cursor || $cursor.parent.content.size) return !1;
                if ($cursor.depth > 1 && $cursor.after() != $cursor.end(-1)) {
                    var before = $cursor.before();
                    if (Object(index_es.f)(state.doc, before)) return dispatch && dispatch(state.tr.split(before).scrollIntoView()), 
                    !0;
                }
                var range = $cursor.blockRange(), target = range && Object(index_es.j)(range);
                return null != target && (dispatch && dispatch(state.tr.lift(range, target).scrollIntoView()), 
                !0);
            }), splitBlock),
            "Mod-Enter": exitCode,
            Backspace: backspace,
            "Mod-Backspace": backspace,
            Delete: del,
            "Mod-Delete": del,
            "Mod-a": function(state, dispatch) {
                return dispatch && dispatch(state.tr.setSelection(new prosemirror_state_dist_index_es.AllSelection(state.doc))), 
                !0;
            }
        }, macBaseKeymap = {
            "Ctrl-h": pcBaseKeymap.Backspace,
            "Alt-Backspace": pcBaseKeymap["Mod-Backspace"],
            "Ctrl-d": pcBaseKeymap.Delete,
            "Ctrl-Alt-Backspace": pcBaseKeymap["Mod-Delete"],
            "Alt-Delete": pcBaseKeymap["Mod-Delete"],
            "Alt-d": pcBaseKeymap["Mod-Delete"]
        };
        for (var key in pcBaseKeymap) macBaseKeymap[key] = pcBaseKeymap[key];
        var baseKeymap = ("undefined" != typeof navigator ? /Mac/.test(navigator.platform) : "undefined" != typeof os && "darwin" == os.platform()) ? macBaseKeymap : pcBaseKeymap, RopeSequence = function() {};
        RopeSequence.prototype.append = function(other) {
            return other.length ? (other = RopeSequence.from(other), !this.length && other || other.length < 200 && this.leafAppend(other) || this.length < 200 && other.leafPrepend(this) || this.appendInner(other)) : this;
        }, RopeSequence.prototype.prepend = function(other) {
            return other.length ? RopeSequence.from(other).append(this) : this;
        }, RopeSequence.prototype.appendInner = function(other) {
            return new Append(this, other);
        }, RopeSequence.prototype.slice = function(from, to) {
            return void 0 === from && (from = 0), void 0 === to && (to = this.length), from >= to ? RopeSequence.empty : this.sliceInner(Math.max(0, from), Math.min(this.length, to));
        }, RopeSequence.prototype.get = function(i) {
            if (!(i < 0 || i >= this.length)) return this.getInner(i);
        }, RopeSequence.prototype.forEach = function(f, from, to) {
            void 0 === from && (from = 0), void 0 === to && (to = this.length), from <= to ? this.forEachInner(f, from, to, 0) : this.forEachInvertedInner(f, from, to, 0);
        }, RopeSequence.prototype.map = function(f, from, to) {
            void 0 === from && (from = 0), void 0 === to && (to = this.length);
            var result = [];
            return this.forEach((function(elt, i) {
                return result.push(f(elt, i));
            }), from, to), result;
        }, RopeSequence.from = function(values) {
            return values instanceof RopeSequence ? values : values && values.length ? new Leaf(values) : RopeSequence.empty;
        };
        var Leaf = function(RopeSequence) {
            function Leaf(values) {
                RopeSequence.call(this), this.values = values;
            }
            RopeSequence && (Leaf.__proto__ = RopeSequence), Leaf.prototype = Object.create(RopeSequence && RopeSequence.prototype), 
            Leaf.prototype.constructor = Leaf;
            var prototypeAccessors = {
                length: {
                    configurable: !0
                },
                depth: {
                    configurable: !0
                }
            };
            return Leaf.prototype.flatten = function() {
                return this.values;
            }, Leaf.prototype.sliceInner = function(from, to) {
                return 0 == from && to == this.length ? this : new Leaf(this.values.slice(from, to));
            }, Leaf.prototype.getInner = function(i) {
                return this.values[i];
            }, Leaf.prototype.forEachInner = function(f, from, to, start) {
                for (var i = from; i < to; i++) if (!1 === f(this.values[i], start + i)) return !1;
            }, Leaf.prototype.forEachInvertedInner = function(f, from, to, start) {
                for (var i = from - 1; i >= to; i--) if (!1 === f(this.values[i], start + i)) return !1;
            }, Leaf.prototype.leafAppend = function(other) {
                if (this.length + other.length <= 200) return new Leaf(this.values.concat(other.flatten()));
            }, Leaf.prototype.leafPrepend = function(other) {
                if (this.length + other.length <= 200) return new Leaf(other.flatten().concat(this.values));
            }, prototypeAccessors.length.get = function() {
                return this.values.length;
            }, prototypeAccessors.depth.get = function() {
                return 0;
            }, Object.defineProperties(Leaf.prototype, prototypeAccessors), Leaf;
        }(RopeSequence);
        RopeSequence.empty = new Leaf([]);
        var Append = function(RopeSequence) {
            function Append(left, right) {
                RopeSequence.call(this), this.left = left, this.right = right, this.length = left.length + right.length, 
                this.depth = Math.max(left.depth, right.depth) + 1;
            }
            return RopeSequence && (Append.__proto__ = RopeSequence), Append.prototype = Object.create(RopeSequence && RopeSequence.prototype), 
            Append.prototype.constructor = Append, Append.prototype.flatten = function() {
                return this.left.flatten().concat(this.right.flatten());
            }, Append.prototype.getInner = function(i) {
                return i < this.left.length ? this.left.get(i) : this.right.get(i - this.left.length);
            }, Append.prototype.forEachInner = function(f, from, to, start) {
                var leftLen = this.left.length;
                return !(from < leftLen && !1 === this.left.forEachInner(f, from, Math.min(to, leftLen), start)) && (!(to > leftLen && !1 === this.right.forEachInner(f, Math.max(from - leftLen, 0), Math.min(this.length, to) - leftLen, start + leftLen)) && void 0);
            }, Append.prototype.forEachInvertedInner = function(f, from, to, start) {
                var leftLen = this.left.length;
                return !(from > leftLen && !1 === this.right.forEachInvertedInner(f, from - leftLen, Math.max(to, leftLen) - leftLen, start + leftLen)) && (!(to < leftLen && !1 === this.left.forEachInvertedInner(f, Math.min(from, leftLen), to, start)) && void 0);
            }, Append.prototype.sliceInner = function(from, to) {
                if (0 == from && to == this.length) return this;
                var leftLen = this.left.length;
                return to <= leftLen ? this.left.slice(from, to) : from >= leftLen ? this.right.slice(from - leftLen, to - leftLen) : this.left.slice(from, leftLen).append(this.right.slice(0, to - leftLen));
            }, Append.prototype.leafAppend = function(other) {
                var inner = this.right.leafAppend(other);
                if (inner) return new Append(this.left, inner);
            }, Append.prototype.leafPrepend = function(other) {
                var inner = this.left.leafPrepend(other);
                if (inner) return new Append(inner, this.right);
            }, Append.prototype.appendInner = function(other) {
                return this.left.depth >= Math.max(this.right.depth, other.depth) + 1 ? new Append(this.left, new Append(this.right, other)) : new Append(this, other);
            }, Append;
        }(RopeSequence), rope_sequence_dist_index_es = RopeSequence, Branch = function(items, eventCount) {
            this.items = items, this.eventCount = eventCount;
        };
        Branch.prototype.popEvent = function(state, preserveItems) {
            var this$1 = this;
            if (0 == this.eventCount) return null;
            for (var remap, mapFrom, end = this.items.length; ;end--) {
                if (this.items.get(end - 1).selection) {
                    --end;
                    break;
                }
            }
            preserveItems && (remap = this.remapping(end, this.items.length), mapFrom = remap.maps.length);
            var selection, remaining, transform = state.tr, addAfter = [], addBefore = [];
            return this.items.forEach((function(item, i) {
                if (!item.step) return remap || (remap = this$1.remapping(end, i + 1), mapFrom = remap.maps.length), 
                mapFrom--, void addBefore.push(item);
                if (remap) {
                    addBefore.push(new Item(item.map));
                    var map, step = item.step.map(remap.slice(mapFrom));
                    step && transform.maybeStep(step).doc && (map = transform.mapping.maps[transform.mapping.maps.length - 1], 
                    addAfter.push(new Item(map, null, null, addAfter.length + addBefore.length))), mapFrom--, 
                    map && remap.appendMap(map, mapFrom);
                } else transform.maybeStep(item.step);
                return item.selection ? (selection = remap ? item.selection.map(remap.slice(mapFrom)) : item.selection, 
                remaining = new Branch(this$1.items.slice(0, end).append(addBefore.reverse().concat(addAfter)), this$1.eventCount - 1), 
                !1) : void 0;
            }), this.items.length, 0), {
                remaining: remaining,
                transform: transform,
                selection: selection
            };
        }, Branch.prototype.addTransform = function(transform, selection, histOptions, preserveItems) {
            for (var newItems = [], eventCount = this.eventCount, oldItems = this.items, lastItem = !preserveItems && oldItems.length ? oldItems.get(oldItems.length - 1) : null, i = 0; i < transform.steps.length; i++) {
                var merged, step = transform.steps[i].invert(transform.docs[i]), item = new Item(transform.mapping.maps[i], step, selection);
                (merged = lastItem && lastItem.merge(item)) && (item = merged, i ? newItems.pop() : oldItems = oldItems.slice(0, oldItems.length - 1)), 
                newItems.push(item), selection && (eventCount++, selection = null), preserveItems || (lastItem = item);
            }
            var items, n, cutPoint, overflow = eventCount - histOptions.depth;
            return overflow > DEPTH_OVERFLOW && (n = overflow, (items = oldItems).forEach((function(item, i) {
                if (item.selection && 0 == n--) return cutPoint = i, !1;
            })), oldItems = items.slice(cutPoint), eventCount -= overflow), new Branch(oldItems.append(newItems), eventCount);
        }, Branch.prototype.remapping = function(from, to) {
            var maps = new index_es.a;
            return this.items.forEach((function(item, i) {
                var mirrorPos = null != item.mirrorOffset && i - item.mirrorOffset >= from ? maps.maps.length - item.mirrorOffset : null;
                maps.appendMap(item.map, mirrorPos);
            }), from, to), maps;
        }, Branch.prototype.addMaps = function(array) {
            return 0 == this.eventCount ? this : new Branch(this.items.append(array.map((function(map) {
                return new Item(map);
            }))), this.eventCount);
        }, Branch.prototype.rebased = function(rebasedTransform, rebasedCount) {
            if (!this.eventCount) return this;
            var rebasedItems = [], start = Math.max(0, this.items.length - rebasedCount), mapping = rebasedTransform.mapping, newUntil = rebasedTransform.steps.length, eventCount = this.eventCount;
            this.items.forEach((function(item) {
                item.selection && eventCount--;
            }), start);
            var iRebased = rebasedCount;
            this.items.forEach((function(item) {
                var pos = mapping.getMirror(--iRebased);
                if (null != pos) {
                    newUntil = Math.min(newUntil, pos);
                    var map = mapping.maps[pos];
                    if (item.step) {
                        var step = rebasedTransform.steps[pos].invert(rebasedTransform.docs[pos]), selection = item.selection && item.selection.map(mapping.slice(iRebased + 1, pos));
                        selection && eventCount++, rebasedItems.push(new Item(map, step, selection));
                    } else rebasedItems.push(new Item(map));
                }
            }), start);
            for (var newMaps = [], i = rebasedCount; i < newUntil; i++) newMaps.push(new Item(mapping.maps[i]));
            var items = this.items.slice(0, start).append(newMaps).append(rebasedItems), branch = new Branch(items, eventCount);
            return branch.emptyItemCount() > 500 && (branch = branch.compress(this.items.length - rebasedItems.length)), 
            branch;
        }, Branch.prototype.emptyItemCount = function() {
            var count = 0;
            return this.items.forEach((function(item) {
                item.step || count++;
            })), count;
        }, Branch.prototype.compress = function(upto) {
            void 0 === upto && (upto = this.items.length);
            var remap = this.remapping(0, upto), mapFrom = remap.maps.length, items = [], events = 0;
            return this.items.forEach((function(item, i) {
                if (i >= upto) items.push(item), item.selection && events++; else if (item.step) {
                    var step = item.step.map(remap.slice(mapFrom)), map = step && step.getMap();
                    if (mapFrom--, map && remap.appendMap(map, mapFrom), step) {
                        var selection = item.selection && item.selection.map(remap.slice(mapFrom));
                        selection && events++;
                        var merged, newItem = new Item(map.invert(), step, selection), last = items.length - 1;
                        (merged = items.length && items[last].merge(newItem)) ? items[last] = merged : items.push(newItem);
                    }
                } else item.map && mapFrom--;
            }), this.items.length, 0), new Branch(rope_sequence_dist_index_es.from(items.reverse()), events);
        }, Branch.empty = new Branch(rope_sequence_dist_index_es.empty, 0);
        var Item = function(map, step, selection, mirrorOffset) {
            this.map = map, this.step = step, this.selection = selection, this.mirrorOffset = mirrorOffset;
        };
        Item.prototype.merge = function(other) {
            if (this.step && other.step && !other.selection) {
                var step = other.step.merge(this.step);
                if (step) return new Item(step.getMap().invert(), step, this.selection);
            }
        };
        var HistoryState = function(done, undone, prevRanges, prevTime) {
            this.done = done, this.undone = undone, this.prevRanges = prevRanges, this.prevTime = prevTime;
        }, DEPTH_OVERFLOW = 20;
        function rangesFor(map) {
            var result = [];
            return map.forEach((function(_from, _to, from, to) {
                return result.push(from, to);
            })), result;
        }
        function mapRanges(ranges, mapping) {
            if (!ranges) return null;
            for (var result = [], i = 0; i < ranges.length; i += 2) {
                var from = mapping.map(ranges[i], 1), to = mapping.map(ranges[i + 1], -1);
                from <= to && result.push(from, to);
            }
            return result;
        }
        function histTransaction(history, state, dispatch, redo) {
            var preserveItems = mustPreserveItems(state), histOptions = historyKey.get(state).spec.config, pop = (redo ? history.undone : history.done).popEvent(state, preserveItems);
            if (pop) {
                var selection = pop.selection.resolve(pop.transform.doc), added = (redo ? history.done : history.undone).addTransform(pop.transform, state.selection.getBookmark(), histOptions, preserveItems), newHist = new HistoryState(redo ? added : pop.remaining, redo ? pop.remaining : added, null, 0);
                dispatch(pop.transform.setSelection(selection).setMeta(historyKey, {
                    redo: redo,
                    historyState: newHist
                }).scrollIntoView());
            }
        }
        var cachedPreserveItems = !1, cachedPreserveItemsPlugins = null;
        function mustPreserveItems(state) {
            var plugins = state.plugins;
            if (cachedPreserveItemsPlugins != plugins) {
                cachedPreserveItems = !1, cachedPreserveItemsPlugins = plugins;
                for (var i = 0; i < plugins.length; i++) if (plugins[i].spec.historyPreserveItems) {
                    cachedPreserveItems = !0;
                    break;
                }
            }
            return cachedPreserveItems;
        }
        var historyKey = new prosemirror_state_dist_index_es.PluginKey("history"), closeHistoryKey = new prosemirror_state_dist_index_es.PluginKey("closeHistory");
        function index_es_history(config) {
            return config = {
                depth: config && config.depth || 100,
                newGroupDelay: config && config.newGroupDelay || 500
            }, new prosemirror_state_dist_index_es.Plugin({
                key: historyKey,
                state: {
                    init: function() {
                        return new HistoryState(Branch.empty, Branch.empty, null, 0);
                    },
                    apply: function(tr, hist, state) {
                        return function(history, state, tr, options) {
                            var rebased, historyTr = tr.getMeta(historyKey);
                            if (historyTr) return historyTr.historyState;
                            tr.getMeta(closeHistoryKey) && (history = new HistoryState(history.done, history.undone, null, 0));
                            var appended = tr.getMeta("appendedTransaction");
                            if (0 == tr.steps.length) return history;
                            if (appended && appended.getMeta(historyKey)) return appended.getMeta(historyKey).redo ? new HistoryState(history.done.addTransform(tr, null, options, mustPreserveItems(state)), history.undone, rangesFor(tr.mapping.maps[tr.steps.length - 1]), history.prevTime) : new HistoryState(history.done, history.undone.addTransform(tr, null, options, mustPreserveItems(state)), null, history.prevTime);
                            if (!1 === tr.getMeta("addToHistory") || appended && !1 === appended.getMeta("addToHistory")) return (rebased = tr.getMeta("rebased")) ? new HistoryState(history.done.rebased(tr, rebased), history.undone.rebased(tr, rebased), mapRanges(history.prevRanges, tr.mapping), history.prevTime) : new HistoryState(history.done.addMaps(tr.mapping.maps), history.undone.addMaps(tr.mapping.maps), mapRanges(history.prevRanges, tr.mapping), history.prevTime);
                            var newGroup = 0 == history.prevTime || !appended && (history.prevTime < (tr.time || 0) - options.newGroupDelay || !function(transform, prevRanges) {
                                if (!prevRanges) return !1;
                                if (!transform.docChanged) return !0;
                                var adjacent = !1;
                                return transform.mapping.maps[0].forEach((function(start, end) {
                                    for (var i = 0; i < prevRanges.length; i += 2) start <= prevRanges[i + 1] && end >= prevRanges[i] && (adjacent = !0);
                                })), adjacent;
                            }(tr, history.prevRanges)), prevRanges = appended ? mapRanges(history.prevRanges, tr.mapping) : rangesFor(tr.mapping.maps[tr.steps.length - 1]);
                            return new HistoryState(history.done.addTransform(tr, newGroup ? state.selection.getBookmark() : null, options, mustPreserveItems(state)), Branch.empty, prevRanges, tr.time);
                        }(hist, state, tr, config);
                    }
                },
                config: config
            });
        }
        function undo(state, dispatch) {
            var hist = historyKey.getState(state);
            return !(!hist || 0 == hist.done.eventCount) && (dispatch && histTransaction(hist, state, dispatch, !1), 
            !0);
        }
        function redo(state, dispatch) {
            var hist = historyKey.getState(state);
            return !(!hist || 0 == hist.undone.eventCount) && (dispatch && histTransaction(hist, state, dispatch, !0), 
            !0);
        }
        for (var base = {
            8: "Backspace",
            9: "Tab",
            10: "Enter",
            12: "NumLock",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            44: "PrintScreen",
            45: "Insert",
            46: "Delete",
            59: ";",
            61: "=",
            91: "Meta",
            92: "Meta",
            106: "*",
            107: "+",
            108: ",",
            109: "-",
            110: ".",
            111: "/",
            144: "NumLock",
            145: "ScrollLock",
            160: "Shift",
            161: "Shift",
            162: "Control",
            163: "Control",
            164: "Alt",
            165: "Alt",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
            229: "q"
        }, shift = {
            48: ")",
            49: "!",
            50: "@",
            51: "#",
            52: "$",
            53: "%",
            54: "^",
            55: "&",
            56: "*",
            57: "(",
            59: ":",
            61: "+",
            173: "_",
            186: ":",
            187: "+",
            188: "<",
            189: "_",
            190: ">",
            191: "?",
            192: "~",
            219: "{",
            220: "|",
            221: "}",
            222: '"',
            229: "Q"
        }, chrome = "undefined" != typeof navigator && /Chrome\/(\d+)/.exec(navigator.userAgent), safari = "undefined" != typeof navigator && /Apple Computer/.test(navigator.vendor), gecko = "undefined" != typeof navigator && /Gecko\/\d+/.test(navigator.userAgent), index_es_mac = "undefined" != typeof navigator && /Mac/.test(navigator.platform), ie = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), brokenModifierNames = chrome && (index_es_mac || +chrome[1] < 57) || gecko && index_es_mac, index_es_i = 0; index_es_i < 10; index_es_i++) base[48 + index_es_i] = base[96 + index_es_i] = String(index_es_i);
        for (index_es_i = 1; index_es_i <= 24; index_es_i++) base[index_es_i + 111] = "F" + index_es_i;
        for (index_es_i = 65; index_es_i <= 90; index_es_i++) base[index_es_i] = String.fromCharCode(index_es_i + 32), 
        shift[index_es_i] = String.fromCharCode(index_es_i);
        for (var code in base) shift.hasOwnProperty(code) || (shift[code] = base[code]);
        var dist_index_es_mac = "undefined" != typeof navigator && /Mac/.test(navigator.platform);
        function normalizeKeyName(name) {
            var alt, ctrl, shift, meta, parts = name.split(/-(?!$)/), result = parts[parts.length - 1];
            "Space" == result && (result = " ");
            for (var i = 0; i < parts.length - 1; i++) {
                var mod = parts[i];
                if (/^(cmd|meta|m)$/i.test(mod)) meta = !0; else if (/^a(lt)?$/i.test(mod)) alt = !0; else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = !0; else if (/^s(hift)?$/i.test(mod)) shift = !0; else {
                    if (!/^mod$/i.test(mod)) throw new Error("Unrecognized modifier name: " + mod);
                    dist_index_es_mac ? meta = !0 : ctrl = !0;
                }
            }
            return alt && (result = "Alt-" + result), ctrl && (result = "Ctrl-" + result), meta && (result = "Meta-" + result), 
            shift && (result = "Shift-" + result), result;
        }
        function modifiers(name, event, shift) {
            return event.altKey && (name = "Alt-" + name), event.ctrlKey && (name = "Ctrl-" + name), 
            event.metaKey && (name = "Meta-" + name), !1 !== shift && event.shiftKey && (name = "Shift-" + name), 
            name;
        }
        function keymap(bindings) {
            return new prosemirror_state_dist_index_es.Plugin({
                props: {
                    handleKeyDown: keydownHandler(bindings)
                }
            });
        }
        function keydownHandler(bindings) {
            var map = function(map) {
                var copy = Object.create(null);
                for (var prop in map) copy[normalizeKeyName(prop)] = map[prop];
                return copy;
            }(bindings);
            return function(view, event) {
                var baseName, name = function(event) {
                    var name = !(brokenModifierNames && (event.ctrlKey || event.altKey || event.metaKey) || (safari || ie) && event.shiftKey && event.key && 1 == event.key.length) && event.key || (event.shiftKey ? shift : base)[event.keyCode] || event.key || "Unidentified";
                    return "Esc" == name && (name = "Escape"), "Del" == name && (name = "Delete"), "Left" == name && (name = "ArrowLeft"), 
                    "Up" == name && (name = "ArrowUp"), "Right" == name && (name = "ArrowRight"), "Down" == name && (name = "ArrowDown"), 
                    name;
                }(event), isChar = 1 == name.length && " " != name, direct = map[modifiers(name, event, !isChar)];
                if (direct && direct(view.state, view.dispatch, view)) return !0;
                if (isChar && (event.shiftKey || event.altKey || event.metaKey || name.charCodeAt(0) > 127) && (baseName = base[event.keyCode]) && baseName != name) {
                    var fromCode = map[modifiers(baseName, event, !0)];
                    if (fromCode && fromCode(view.state, view.dispatch, view)) return !0;
                } else if (isChar && event.shiftKey) {
                    var withShift = map[modifiers(name, event, !0)];
                    if (withShift && withShift(view.state, view.dispatch, view)) return !0;
                }
                return !1;
            };
        }
        var prosemirror_view_dist_index_es = __webpack_require__(5), dist = __webpack_require__(20), hljs_instance = __webpack_require__(21), languageAliaises = {
            bsh: "bash",
            csh: "bash",
            sh: "bash",
            c: "cpp",
            cc: "cpp",
            cxx: "cpp",
            cyc: "cpp",
            m: "cpp",
            cs: "csharp",
            coffee: "coffeescript",
            html: "xml",
            xsl: "xml",
            js: "javascript",
            pl: "perl",
            py: "python",
            cv: "python",
            rb: "ruby",
            clj: "clojure",
            erl: "erlang",
            hs: "haskell",
            mma: "mathematica",
            tex: "latex",
            cl: "lisp",
            el: "lisp",
            lsp: "lisp",
            scm: "scheme",
            ss: "scheme",
            rkt: "scheme",
            fs: "ocaml",
            ml: "ocaml",
            s: "r",
            rc: "rust",
            rs: "rust",
            vhd: "vhdl",
            none: "plaintext"
        };
        function getBlockLanguage(block, fallback) {
            return void 0 === fallback && (fallback = "none"), function(rawLanguage) {
                return languageAliaises[rawLanguage] || rawLanguage;
            }((block.attrs.params || "").split(/\s/)[0].toLowerCase() || fallback || null);
        }
        function CodeBlockHighlightPlugin(defaultFallbackLanguage) {
            var hljs = Object(hljs_instance.a)();
            return hljs ? Object(dist.highlightPlugin)(hljs, [ "code_block" ], (function(block) {
                return block.attrs.detectedHighlightLanguage || getBlockLanguage(block, defaultFallbackLanguage);
            })) : new prosemirror_state_dist_index_es.Plugin({});
        }
        var __spreadArrays = function() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            var r = Array(s), k = 0;
            for (i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
            k++) r[k] = a[j];
            return r;
        };
        function styleHeaderText(text, preface) {
            return void 0 === preface && (preface = ""), text ? [ "%c" + preface + text, "font-weight: bold;" ] : [];
        }
        function log(header) {
            for (var message = [], _i = 1; _i < arguments.length; _i++) message[_i - 1] = arguments[_i];
        }
        function error(header) {
            for (var error = [], _i = 1; _i < arguments.length; _i++) error[_i - 1] = arguments[_i];
            console.error.apply(console, __spreadArrays(styleHeaderText(header), error));
        }
        var utils = __webpack_require__(4), markdown_it = __webpack_require__(19), markdown_it_default = __webpack_require__.n(markdown_it), index_es_schema = new dist_index_es.k({
            nodes: {
                doc: {
                    content: "block+"
                },
                paragraph: {
                    content: "inline*",
                    group: "block",
                    parseDOM: [ {
                        tag: "p"
                    } ],
                    toDOM: function() {
                        return [ "p", 0 ];
                    }
                },
                blockquote: {
                    content: "block+",
                    group: "block",
                    parseDOM: [ {
                        tag: "blockquote"
                    } ],
                    toDOM: function() {
                        return [ "blockquote", 0 ];
                    }
                },
                horizontal_rule: {
                    group: "block",
                    parseDOM: [ {
                        tag: "hr"
                    } ],
                    toDOM: function() {
                        return [ "div", [ "hr" ] ];
                    }
                },
                heading: {
                    attrs: {
                        level: {
                            default: 1
                        }
                    },
                    content: "(text | image)*",
                    group: "block",
                    defining: !0,
                    parseDOM: [ {
                        tag: "h1",
                        attrs: {
                            level: 1
                        }
                    }, {
                        tag: "h2",
                        attrs: {
                            level: 2
                        }
                    }, {
                        tag: "h3",
                        attrs: {
                            level: 3
                        }
                    }, {
                        tag: "h4",
                        attrs: {
                            level: 4
                        }
                    }, {
                        tag: "h5",
                        attrs: {
                            level: 5
                        }
                    }, {
                        tag: "h6",
                        attrs: {
                            level: 6
                        }
                    } ],
                    toDOM: function(node) {
                        return [ "h" + node.attrs.level, 0 ];
                    }
                },
                code_block: {
                    content: "text*",
                    group: "block",
                    code: !0,
                    defining: !0,
                    marks: "",
                    attrs: {
                        params: {
                            default: ""
                        }
                    },
                    parseDOM: [ {
                        tag: "pre",
                        preserveWhitespace: "full",
                        getAttrs: function(node) {
                            return {
                                params: node.getAttribute("data-params") || ""
                            };
                        }
                    } ],
                    toDOM: function(node) {
                        return [ "pre", node.attrs.params ? {
                            "data-params": node.attrs.params
                        } : {}, [ "code", 0 ] ];
                    }
                },
                ordered_list: {
                    content: "list_item+",
                    group: "block",
                    attrs: {
                        order: {
                            default: 1
                        },
                        tight: {
                            default: !1
                        }
                    },
                    parseDOM: [ {
                        tag: "ol",
                        getAttrs: function(dom) {
                            return {
                                order: dom.hasAttribute("start") ? +dom.getAttribute("start") : 1,
                                tight: dom.hasAttribute("data-tight")
                            };
                        }
                    } ],
                    toDOM: function(node) {
                        return [ "ol", {
                            start: 1 == node.attrs.order ? null : node.attrs.order,
                            "data-tight": node.attrs.tight ? "true" : null
                        }, 0 ];
                    }
                },
                bullet_list: {
                    content: "list_item+",
                    group: "block",
                    attrs: {
                        tight: {
                            default: !1
                        }
                    },
                    parseDOM: [ {
                        tag: "ul",
                        getAttrs: function(dom) {
                            return {
                                tight: dom.hasAttribute("data-tight")
                            };
                        }
                    } ],
                    toDOM: function(node) {
                        return [ "ul", {
                            "data-tight": node.attrs.tight ? "true" : null
                        }, 0 ];
                    }
                },
                list_item: {
                    content: "paragraph block*",
                    defining: !0,
                    parseDOM: [ {
                        tag: "li"
                    } ],
                    toDOM: function() {
                        return [ "li", 0 ];
                    }
                },
                text: {
                    group: "inline"
                },
                image: {
                    inline: !0,
                    attrs: {
                        src: {},
                        alt: {
                            default: null
                        },
                        title: {
                            default: null
                        }
                    },
                    group: "inline",
                    draggable: !0,
                    parseDOM: [ {
                        tag: "img[src]",
                        getAttrs: function(dom) {
                            return {
                                src: dom.getAttribute("src"),
                                title: dom.getAttribute("title"),
                                alt: dom.getAttribute("alt")
                            };
                        }
                    } ],
                    toDOM: function(node) {
                        return [ "img", node.attrs ];
                    }
                },
                hard_break: {
                    inline: !0,
                    group: "inline",
                    selectable: !1,
                    parseDOM: [ {
                        tag: "br"
                    } ],
                    toDOM: function() {
                        return [ "br" ];
                    }
                }
            },
            marks: {
                em: {
                    parseDOM: [ {
                        tag: "i"
                    }, {
                        tag: "em"
                    }, {
                        style: "font-style",
                        getAttrs: function(value) {
                            return "italic" == value && null;
                        }
                    } ],
                    toDOM: function() {
                        return [ "em" ];
                    }
                },
                strong: {
                    parseDOM: [ {
                        tag: "b"
                    }, {
                        tag: "strong"
                    }, {
                        style: "font-weight",
                        getAttrs: function(value) {
                            return /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null;
                        }
                    } ],
                    toDOM: function() {
                        return [ "strong" ];
                    }
                },
                link: {
                    attrs: {
                        href: {},
                        title: {
                            default: null
                        }
                    },
                    inclusive: !1,
                    parseDOM: [ {
                        tag: "a[href]",
                        getAttrs: function(dom) {
                            return {
                                href: dom.getAttribute("href"),
                                title: dom.getAttribute("title")
                            };
                        }
                    } ],
                    toDOM: function(node) {
                        return [ "a", node.attrs ];
                    }
                },
                code: {
                    parseDOM: [ {
                        tag: "code"
                    } ],
                    toDOM: function() {
                        return [ "code" ];
                    }
                }
            }
        });
        var index_es_MarkdownParseState = function(schema, tokenHandlers) {
            this.schema = schema, this.stack = [ {
                type: schema.topNodeType,
                content: []
            } ], this.marks = dist_index_es.e.none, this.tokenHandlers = tokenHandlers;
        };
        function index_es_attrs(spec, token) {
            return spec.getAttrs ? spec.getAttrs(token) : spec.attrs instanceof Function ? spec.attrs(token) : spec.attrs;
        }
        function noCloseToken(spec, type) {
            return spec.noCloseToken || "code_inline" == type || "code_block" == type || "fence" == type;
        }
        function withoutTrailingNewline(str) {
            return "\n" == str[str.length - 1] ? str.slice(0, str.length - 1) : str;
        }
        function noOp() {}
        index_es_MarkdownParseState.prototype.top = function() {
            return this.stack[this.stack.length - 1];
        }, index_es_MarkdownParseState.prototype.push = function(elt) {
            this.stack.length && this.top().content.push(elt);
        }, index_es_MarkdownParseState.prototype.addText = function(text) {
            if (text) {
                var merged, nodes = this.top().content, last = nodes[nodes.length - 1], node = this.schema.text(text, this.marks);
                last && (merged = function(a, b) {
                    if (a.isText && b.isText && dist_index_es.e.sameSet(a.marks, b.marks)) return a.withText(a.text + b.text);
                }(last, node)) ? nodes[nodes.length - 1] = merged : nodes.push(node);
            }
        }, index_es_MarkdownParseState.prototype.openMark = function(mark) {
            this.marks = mark.addToSet(this.marks);
        }, index_es_MarkdownParseState.prototype.closeMark = function(mark) {
            this.marks = mark.removeFromSet(this.marks);
        }, index_es_MarkdownParseState.prototype.parseTokens = function(toks) {
            for (var i = 0; i < toks.length; i++) {
                var tok = toks[i], handler = this.tokenHandlers[tok.type];
                if (!handler) throw new Error("Token type `" + tok.type + "` not supported by Markdown parser");
                handler(this, tok);
            }
        }, index_es_MarkdownParseState.prototype.addNode = function(type, attrs, content) {
            var node = type.createAndFill(attrs, content, this.marks);
            return node ? (this.push(node), node) : null;
        }, index_es_MarkdownParseState.prototype.openNode = function(type, attrs) {
            this.stack.push({
                type: type,
                attrs: attrs,
                content: []
            });
        }, index_es_MarkdownParseState.prototype.closeNode = function() {
            this.marks.length && (this.marks = dist_index_es.e.none);
            var info = this.stack.pop();
            return this.addNode(info.type, info.attrs, info.content);
        };
        var MarkdownParser = function(schema, tokenizer, tokens) {
            this.tokens = tokens, this.schema = schema, this.tokenizer = tokenizer, this.tokenHandlers = function(schema, tokens) {
                var handlers = Object.create(null), loop = function(type) {
                    var spec = tokens[type];
                    if (spec.block) {
                        var nodeType = schema.nodeType(spec.block);
                        noCloseToken(spec, type) ? handlers[type] = function(state, tok) {
                            state.openNode(nodeType, index_es_attrs(spec, tok)), state.addText(withoutTrailingNewline(tok.content)), 
                            state.closeNode();
                        } : (handlers[type + "_open"] = function(state, tok) {
                            return state.openNode(nodeType, index_es_attrs(spec, tok));
                        }, handlers[type + "_close"] = function(state) {
                            return state.closeNode();
                        });
                    } else if (spec.node) {
                        var nodeType$1 = schema.nodeType(spec.node);
                        handlers[type] = function(state, tok) {
                            return state.addNode(nodeType$1, index_es_attrs(spec, tok));
                        };
                    } else if (spec.mark) {
                        var markType = schema.marks[spec.mark];
                        noCloseToken(spec, type) ? handlers[type] = function(state, tok) {
                            state.openMark(markType.create(index_es_attrs(spec, tok))), state.addText(withoutTrailingNewline(tok.content)), 
                            state.closeMark(markType);
                        } : (handlers[type + "_open"] = function(state, tok) {
                            return state.openMark(markType.create(index_es_attrs(spec, tok)));
                        }, handlers[type + "_close"] = function(state) {
                            return state.closeMark(markType);
                        });
                    } else {
                        if (!spec.ignore) throw new RangeError("Unrecognized parsing spec " + JSON.stringify(spec));
                        noCloseToken(spec, type) ? handlers[type] = noOp : (handlers[type + "_open"] = noOp, 
                        handlers[type + "_close"] = noOp);
                    }
                };
                for (var type in tokens) loop(type);
                return handlers.text = function(state, tok) {
                    return state.addText(tok.content);
                }, handlers.inline = function(state, tok) {
                    return state.parseTokens(tok.children);
                }, handlers.softbreak = handlers.softbreak || function(state) {
                    return state.addText("\n");
                }, handlers;
            }(schema, tokens);
        };
        MarkdownParser.prototype.parse = function(text) {
            var doc, state = new index_es_MarkdownParseState(this.schema, this.tokenHandlers);
            state.parseTokens(this.tokenizer.parse(text, {}));
            do {
                doc = state.closeNode();
            } while (state.stack.length);
            return doc;
        };
        var defaultMarkdownParser = new MarkdownParser(index_es_schema, markdown_it_default()("commonmark", {
            html: !1
        }), {
            blockquote: {
                block: "blockquote"
            },
            paragraph: {
                block: "paragraph"
            },
            list_item: {
                block: "list_item"
            },
            bullet_list: {
                block: "bullet_list"
            },
            ordered_list: {
                block: "ordered_list",
                getAttrs: function(tok) {
                    return {
                        order: +tok.attrGet("start") || 1
                    };
                }
            },
            heading: {
                block: "heading",
                getAttrs: function(tok) {
                    return {
                        level: +tok.tag.slice(1)
                    };
                }
            },
            code_block: {
                block: "code_block",
                noCloseToken: !0
            },
            fence: {
                block: "code_block",
                getAttrs: function(tok) {
                    return {
                        params: tok.info || ""
                    };
                },
                noCloseToken: !0
            },
            hr: {
                node: "horizontal_rule"
            },
            image: {
                node: "image",
                getAttrs: function(tok) {
                    return {
                        src: tok.attrGet("src"),
                        title: tok.attrGet("title") || null,
                        alt: tok.children[0] && tok.children[0].content || null
                    };
                }
            },
            hardbreak: {
                node: "hard_break"
            },
            em: {
                mark: "em"
            },
            strong: {
                mark: "strong"
            },
            link: {
                mark: "link",
                getAttrs: function(tok) {
                    return {
                        href: tok.attrGet("href"),
                        title: tok.attrGet("title") || null
                    };
                }
            },
            code_inline: {
                mark: "code",
                noCloseToken: !0
            }
        }), MarkdownSerializer = function(nodes, marks) {
            this.nodes = nodes, this.marks = marks;
        };
        MarkdownSerializer.prototype.serialize = function(content, options) {
            var state = new MarkdownSerializerState(this.nodes, this.marks, options);
            return state.renderContent(content), state.out;
        };
        var defaultMarkdownSerializer = new MarkdownSerializer({
            blockquote: function(state, node) {
                state.wrapBlock("> ", null, node, (function() {
                    return state.renderContent(node);
                }));
            },
            code_block: function(state, node) {
                state.write("```" + (node.attrs.params || "") + "\n"), state.text(node.textContent, !1), 
                state.ensureNewLine(), state.write("```"), state.closeBlock(node);
            },
            heading: function(state, node) {
                state.write(state.repeat("#", node.attrs.level) + " "), state.renderInline(node), 
                state.closeBlock(node);
            },
            horizontal_rule: function(state, node) {
                state.write(node.attrs.markup || "---"), state.closeBlock(node);
            },
            bullet_list: function(state, node) {
                state.renderList(node, "  ", (function() {
                    return (node.attrs.bullet || "*") + " ";
                }));
            },
            ordered_list: function(state, node) {
                var start = node.attrs.order || 1, maxW = String(start + node.childCount - 1).length, space = state.repeat(" ", maxW + 2);
                state.renderList(node, space, (function(i) {
                    var nStr = String(start + i);
                    return state.repeat(" ", maxW - nStr.length) + nStr + ". ";
                }));
            },
            list_item: function(state, node) {
                state.renderContent(node);
            },
            paragraph: function(state, node) {
                state.renderInline(node), state.closeBlock(node);
            },
            image: function(state, node) {
                state.write("![" + state.esc(node.attrs.alt || "") + "](" + state.esc(node.attrs.src) + (node.attrs.title ? " " + state.quote(node.attrs.title) : "") + ")");
            },
            hard_break: function(state, node, parent, index) {
                for (var i = index + 1; i < parent.childCount; i++) if (parent.child(i).type != node.type) return void state.write("\\\n");
            },
            text: function(state, node) {
                state.text(node.text);
            }
        }, {
            em: {
                open: "*",
                close: "*",
                mixable: !0,
                expelEnclosingWhitespace: !0
            },
            strong: {
                open: "**",
                close: "**",
                mixable: !0,
                expelEnclosingWhitespace: !0
            },
            link: {
                open: function(_state, mark, parent, index) {
                    return isPlainURL(mark, parent, index, 1) ? "<" : "[";
                },
                close: function(state, mark, parent, index) {
                    return isPlainURL(mark, parent, index, -1) ? ">" : "](" + state.esc(mark.attrs.href) + (mark.attrs.title ? " " + state.quote(mark.attrs.title) : "") + ")";
                }
            },
            code: {
                open: function(_state, _mark, parent, index) {
                    return backticksFor(parent.child(index), -1);
                },
                close: function(_state, _mark, parent, index) {
                    return backticksFor(parent.child(index - 1), 1);
                },
                escape: !1
            }
        });
        function backticksFor(node, side) {
            var m, ticks = /`+/g, len = 0;
            if (node.isText) for (;m = ticks.exec(node.text); ) len = Math.max(len, m[0].length);
            for (var result = len > 0 && side > 0 ? " `" : "`", i = 0; i < len; i++) result += "`";
            return len > 0 && side < 0 && (result += " "), result;
        }
        function isPlainURL(link, parent, index, side) {
            if (link.attrs.title || !/^\w+:/.test(link.attrs.href)) return !1;
            var content = parent.child(index + (side < 0 ? -1 : 0));
            if (!content.isText || content.text != link.attrs.href || content.marks[content.marks.length - 1] != link) return !1;
            if (index == (side < 0 ? 1 : parent.childCount - 1)) return !0;
            var next = parent.child(index + (side < 0 ? -2 : 1));
            return !link.isInSet(next.marks);
        }
        var MarkdownSerializerState = function(nodes, marks, options) {
            this.nodes = nodes, this.marks = marks, this.delim = this.out = "", this.closed = !1, 
            this.inTightList = !1, this.options = options || {}, void 0 === this.options.tightLists && (this.options.tightLists = !1);
        };
        MarkdownSerializerState.prototype.flushClose = function(size) {
            if (this.closed) {
                if (this.atBlank() || (this.out += "\n"), null == size && (size = 2), size > 1) {
                    var delimMin = this.delim, trim = /\s+$/.exec(delimMin);
                    trim && (delimMin = delimMin.slice(0, delimMin.length - trim[0].length));
                    for (var i = 1; i < size; i++) this.out += delimMin + "\n";
                }
                this.closed = !1;
            }
        }, MarkdownSerializerState.prototype.wrapBlock = function(delim, firstDelim, node, f) {
            var old = this.delim;
            this.write(firstDelim || delim), this.delim += delim, f(), this.delim = old, this.closeBlock(node);
        }, MarkdownSerializerState.prototype.atBlank = function() {
            return /(^|\n)$/.test(this.out);
        }, MarkdownSerializerState.prototype.ensureNewLine = function() {
            this.atBlank() || (this.out += "\n");
        }, MarkdownSerializerState.prototype.write = function(content) {
            this.flushClose(), this.delim && this.atBlank() && (this.out += this.delim), content && (this.out += content);
        }, MarkdownSerializerState.prototype.closeBlock = function(node) {
            this.closed = node;
        }, MarkdownSerializerState.prototype.text = function(text$1, escape) {
            for (var lines = text$1.split("\n"), i = 0; i < lines.length; i++) {
                var startOfLine = this.atBlank() || this.closed;
                this.write(), this.out += !1 !== escape ? this.esc(lines[i], startOfLine) : lines[i], 
                i != lines.length - 1 && (this.out += "\n");
            }
        }, MarkdownSerializerState.prototype.render = function(node, parent, index) {
            if ("number" == typeof parent) throw new Error("!");
            this.nodes[node.type.name](this, node, parent, index);
        }, MarkdownSerializerState.prototype.renderContent = function(parent) {
            var this$1 = this;
            parent.forEach((function(node, _, i) {
                return this$1.render(node, parent, i);
            }));
        }, MarkdownSerializerState.prototype.renderInline = function(parent) {
            var this$1 = this, active = [], trailing = "", progress = function(node, _, index) {
                var marks = node ? node.marks : [];
                node && "hard_break" === node.type.name && (marks = marks.filter((function(m) {
                    if (index + 1 == parent.childCount) return !1;
                    var next = parent.child(index + 1);
                    return m.isInSet(next.marks) && (!next.isText || /\S/.test(next.text));
                })));
                var leading = trailing;
                if (trailing = "", node && node.isText && marks.some((function(mark) {
                    var info = this$1.marks[mark.type.name];
                    return info && info.expelEnclosingWhitespace;
                }))) {
                    var ref = /^(\s*)(.*?)(\s*)$/m.exec(node.text), lead = (ref[0], ref[1]), inner$1 = ref[2], trail = ref[3];
                    leading += lead, trailing = trail, (lead || trail) && ((node = inner$1 ? node.withText(inner$1) : null) || (marks = active));
                }
                var inner = marks.length && marks[marks.length - 1], noEsc = inner && !1 === this$1.marks[inner.type.name].escape, len = marks.length - (noEsc ? 1 : 0);
                outer: for (var i = 0; i < len; i++) {
                    var mark = marks[i];
                    if (!this$1.marks[mark.type.name].mixable) break;
                    for (var j = 0; j < active.length; j++) {
                        var other = active[j];
                        if (!this$1.marks[other.type.name].mixable) break;
                        if (mark.eq(other)) {
                            i > j ? marks = marks.slice(0, j).concat(mark).concat(marks.slice(j, i)).concat(marks.slice(i + 1, len)) : j > i && (marks = marks.slice(0, i).concat(marks.slice(i + 1, j)).concat(mark).concat(marks.slice(j, len)));
                            continue outer;
                        }
                    }
                }
                for (var keep = 0; keep < Math.min(active.length, len) && marks[keep].eq(active[keep]); ) ++keep;
                for (;keep < active.length; ) this$1.text(this$1.markString(active.pop(), !1, parent, index), !1);
                if (leading && this$1.text(leading), node) {
                    for (;active.length < len; ) {
                        var add = marks[active.length];
                        active.push(add), this$1.text(this$1.markString(add, !0, parent, index), !1);
                    }
                    noEsc && node.isText ? this$1.text(this$1.markString(inner, !0, parent, index) + node.text + this$1.markString(inner, !1, parent, index + 1), !1) : this$1.render(node, parent, index);
                }
            };
            parent.forEach(progress), progress(null, 0, parent.childCount);
        }, MarkdownSerializerState.prototype.renderList = function(node, delim, firstDelim) {
            var this$1 = this;
            this.closed && this.closed.type == node.type ? this.flushClose(3) : this.inTightList && this.flushClose(1);
            var isTight = void 0 !== node.attrs.tight ? node.attrs.tight : this.options.tightLists, prevTight = this.inTightList;
            this.inTightList = isTight, node.forEach((function(child, _, i) {
                i && isTight && this$1.flushClose(1), this$1.wrapBlock(delim, firstDelim(i), node, (function() {
                    return this$1.render(child, node, i);
                }));
            })), this.inTightList = prevTight;
        }, MarkdownSerializerState.prototype.esc = function(str, startOfLine) {
            return str = str.replace(/[`*\\~\[\]]/g, "\\$&"), startOfLine && (str = str.replace(/^[:#\-*+]/, "\\$&").replace(/^(\d+)\./, "$1\\.")), 
            str;
        }, MarkdownSerializerState.prototype.quote = function(str) {
            var wrap = -1 == str.indexOf('"') ? '""' : -1 == str.indexOf("'") ? "''" : "()";
            return wrap[0] + str + wrap[1];
        }, MarkdownSerializerState.prototype.repeat = function(str, n) {
            for (var out = "", i = 0; i < n; i++) out += str;
            return out;
        }, MarkdownSerializerState.prototype.markString = function(mark, open, parent, index) {
            var info = this.marks[mark.type.name], value = open ? info.open : info.close;
            return "string" == typeof value ? value : value(this, mark, parent, index);
        }, MarkdownSerializerState.prototype.getEnclosingWhitespace = function(text) {
            return {
                leading: (text.match(/^(\s+)/) || [])[0],
                trailing: (text.match(/(\s+)$/) || [])[0]
            };
        };
        var extendStatics, __extends = (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        }), __assign = function() {
            return (__assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
            }).apply(this, arguments);
        }, defaultSchema = index_es_schema;
        var tag, defaultNodes = defaultSchema.spec.nodes, extendedImageSpec = __assign(__assign({}, defaultNodes.get("image")), {
            attrs: {
                src: {},
                alt: {
                    default: null
                },
                title: {
                    default: null
                },
                width: {
                    default: null
                },
                height: {
                    default: null
                }
            },
            parseDOM: [ {
                tag: "img[src]",
                getAttrs: function(dom) {
                    return {
                        src: dom.getAttribute("src"),
                        title: dom.getAttribute("title"),
                        alt: dom.getAttribute("alt"),
                        height: dom.getAttribute("height"),
                        width: dom.getAttribute("width")
                    };
                }
            } ],
            toDOM: function(node) {
                return [ "img", node.attrs ];
            }
        }), extendedCodeblockSpec = __assign(__assign({}, defaultNodes.get("code_block")), {
            attrs: {
                params: {
                    default: ""
                },
                detectedHighlightLanguage: {
                    default: ""
                }
            }
        }), schema_nodes = defaultNodes.addBefore("image", "pre", (tag = "pre", {
            content: "block+",
            marks: "",
            group: "block",
            inline: !1,
            selectable: !0,
            toDOM: function() {
                return [ tag, 0 ];
            },
            parseDOM: [ {
                tag: tag
            } ]
        })).addBefore("image", "html_block", {
            content: "text*",
            attrs: {
                content: {
                    default: ""
                }
            },
            marks: "_",
            group: "block",
            atom: !0,
            inline: !1,
            selectable: !0,
            defining: !0,
            isolating: !0,
            parseDOM: [ {
                tag: "div.html_block"
            } ],
            toDOM: function(node) {
                return [ "div", {
                    class: "html_block"
                }, node.attrs.content ];
            }
        }).addBefore("image", "html_inline", {
            content: "text*",
            attrs: {
                content: {
                    default: ""
                }
            },
            marks: "_",
            group: "inline",
            atom: !0,
            inline: !0,
            selectable: !0,
            defining: !0,
            isolating: !0,
            parseDOM: [ {
                tag: "span.html_inline"
            } ],
            toDOM: function(node) {
                return [ "span", {
                    class: "html_inline"
                }, node.attrs.content ];
            }
        }).addBefore("image", "html_block_container", {
            content: "block*",
            attrs: {
                contentOpen: {
                    default: ""
                },
                contentClose: {
                    default: ""
                }
            },
            marks: "_",
            group: "block",
            inline: !1,
            selectable: !0,
            defining: !0,
            isolating: !0
        }).addBefore("image", "softbreak", {
            content: "inline+",
            attrs: {},
            marks: "_",
            inline: !0,
            group: "inline",
            parseDOM: [ {
                tag: "span[softbreak]",
                getAttrs: function(node) {
                    return {
                        content: node.innerHTML
                    };
                }
            } ],
            toDOM: function() {
                return [ "span", {
                    softbreak: ""
                }, 0 ];
            }
        }).addBefore("image", "table", {
            content: "table_head table_body*",
            isolating: !0,
            group: "block",
            selectable: !1,
            parseDOM: [ {
                tag: "table"
            } ],
            toDOM: function() {
                return [ "div", {
                    class: "s-table-container"
                }, [ "table", {
                    class: "s-table"
                }, 0 ] ];
            }
        }).addBefore("image", "table_head", {
            content: "table_row",
            isolating: !0,
            group: "table_block",
            selectable: !1,
            parseDOM: [ {
                tag: "thead"
            } ],
            toDOM: function() {
                return [ "thead", 0 ];
            }
        }).addBefore("image", "table_body", {
            content: "table_row+",
            isolating: !0,
            group: "table_block",
            selectable: !1,
            parseDOM: [ {
                tag: "tbody"
            } ],
            toDOM: function() {
                return [ "tbody", 0 ];
            }
        }).addBefore("image", "table_row", {
            content: "(table_cell | table_header)+",
            isolating: !0,
            group: "table_block",
            selectable: !1,
            parseDOM: [ {
                tag: "tr"
            } ],
            toDOM: function() {
                return [ "tr", 0 ];
            }
        }).addBefore("image", "table_cell", {
            content: "inline*",
            isolating: !0,
            group: "table_block",
            selectable: !1,
            attrs: {
                style: {
                    default: null
                }
            },
            parseDOM: [ {
                tag: "td",
                getAttrs: function(dom) {
                    var textAlign = dom.style.textAlign;
                    return textAlign ? {
                        style: "text-align: " + textAlign
                    } : null;
                }
            } ],
            toDOM: function(node) {
                return [ "td", node.attrs, 0 ];
            }
        }).addBefore("image", "table_header", {
            content: "inline*",
            isolating: !0,
            group: "table_block",
            selectable: !1,
            attrs: {
                style: {
                    default: null
                }
            },
            parseDOM: [ {
                tag: "th",
                getAttrs: function(dom) {
                    var textAlign = dom.style.textAlign;
                    return textAlign ? {
                        style: "text-align: " + textAlign
                    } : null;
                }
            } ],
            toDOM: function(node) {
                return [ "th", node.attrs, 0 ];
            }
        }).addBefore("image", "tagLink", {
            content: "text*",
            marks: "",
            atom: !0,
            inline: !0,
            group: "inline",
            attrs: {
                tagName: {
                    default: null
                },
                tagType: {
                    default: "tag"
                }
            }
        }).addBefore("blockquote", "spoiler", {
            content: "block+",
            group: "block",
            attrs: {
                revealed: {
                    default: !1
                }
            },
            parseDOM: [ {
                tag: "blockquote.spoiler",
                getAttrs: function(node) {
                    return {
                        revealed: node.classList.contains("is-visible")
                    };
                }
            } ],
            toDOM: function(node) {
                return [ "blockquote", {
                    class: "spoiler" + (node.attrs.revealed ? " is-visible" : "")
                }, 0 ];
            }
        }).update("image", extendedImageSpec).update("code_block", extendedCodeblockSpec);
        function genHtmlInlineMarkSpec() {
            for (var tags = [], _i = 0; _i < arguments.length; _i++) tags[_i] = arguments[_i];
            return {
                toDOM: function() {
                    return [ tags[0], 0 ];
                },
                parseDOM: tags.map((function(tag) {
                    return {
                        tag: tag
                    };
                }))
            };
        }
        var defaultMarks = defaultSchema.spec.marks, extendedLinkMark = __assign(__assign({}, defaultMarks.get("link")), {
            toDOM: function(node) {
                return [ "a", {
                    href: node.attrs.href,
                    title: node.attrs.title
                } ];
            }
        }), schema_marks = defaultMarks.addBefore("strong", "strike", genHtmlInlineMarkSpec("del", "s", "strike")).addBefore("strong", "kbd", genHtmlInlineMarkSpec("kbd")).addBefore("strong", "sup", genHtmlInlineMarkSpec("sup")).addBefore("strong", "sub", genHtmlInlineMarkSpec("sub")).update("link", extendedLinkMark);
        schema_marks.forEach((function(k, node) {
            var attrs = node.attrs || {};
            attrs.markup = {
                default: ""
            }, node.attrs = attrs;
        })), schema_nodes.forEach((function(k, node) {
            if ("text" !== k) {
                var attrs = node.attrs || {};
                attrs.markup = {
                    default: ""
                }, node.attrs = attrs;
            }
        }));
        var ValidationResult, richTextSchema = new dist_index_es.k({
            nodes: schema_nodes,
            marks: schema_marks
        }), tableNodes = [ richTextSchema.nodes.table, richTextSchema.nodes.table_head, richTextSchema.nodes.table_body, richTextSchema.nodes.table_row, richTextSchema.nodes.table_cell, richTextSchema.nodes.table_header ], commonmarkSchema = new dist_index_es.k({
            nodes: {
                doc: {
                    content: "code_block+"
                },
                text: {
                    group: "inline"
                },
                code_block: {
                    content: "text*",
                    group: "block",
                    marks: "",
                    code: !0,
                    defining: !0,
                    isolating: !0,
                    selectable: !1,
                    attrs: {
                        params: {
                            default: "markdown"
                        }
                    },
                    parseDOM: [ {
                        tag: "pre",
                        preserveWhitespace: "full"
                    } ],
                    toDOM: function() {
                        return [ "pre", {
                            class: "s-code-block markdown"
                        }, [ "code", 0 ] ];
                    }
                }
            },
            marks: {}
        }), schema_CodeStringParser = function(_super) {
            function CodeStringParser() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            return __extends(CodeStringParser, _super), CodeStringParser.prototype.parseCode = function(content, options) {
                var htmlContent = "<pre>" + Object(utils.escapeHtml)(content) + "</pre>", node = document.createElement("div");
                return node.innerHTML = htmlContent, _super.prototype.parse.call(this, node, options);
            }, CodeStringParser.fromSchema = function(schema) {
                return schema.cached.domParser || (schema.cached.domParser = new CodeStringParser(schema, CodeStringParser.schemaRules(schema)));
            }, CodeStringParser.toString = function(node) {
                return node.textBetween(0, node.content.size, "\n\n");
            }, CodeStringParser;
        }(dist_index_es.b), plugin_extensions_extends = function() {
            var extendStatics = function(d, b) {
                return (extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
                })(d, b);
            };
            return function(d, b) {
                function __() {
                    this.constructor = d;
                }
                extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
                new __);
            };
        }(), StatefulPluginKey = function(_super) {
            function StatefulPluginKey(name) {
                return _super.call(this, name) || this;
            }
            return plugin_extensions_extends(StatefulPluginKey, _super), StatefulPluginKey.prototype.get = function(state) {
                return _super.prototype.get.call(this, state);
            }, StatefulPluginKey.prototype.setMeta = function(tr, data) {
                return tr.setMeta(this, data);
            }, StatefulPluginKey;
        }(prosemirror_state_dist_index_es.PluginKey), StatefulPlugin = function(_super) {
            function StatefulPlugin(spec) {
                return _super.call(this, spec) || this;
            }
            return plugin_extensions_extends(StatefulPlugin, _super), Object.defineProperty(StatefulPlugin.prototype, "transactionKey", {
                get: function() {
                    return this.spec.key;
                },
                enumerable: !1,
                configurable: !0
            }), StatefulPlugin.prototype.getMeta = function(tr) {
                return tr.getMeta(this.transactionKey);
            }, StatefulPlugin;
        }(prosemirror_state_dist_index_es.Plugin), AsyncPluginKey = function(_super) {
            function AsyncPluginKey(name) {
                return _super.call(this, name) || this;
            }
            return plugin_extensions_extends(AsyncPluginKey, _super), AsyncPluginKey.prototype.setMeta = function(tr, data) {
                var wrappedData = {
                    callbackData: null,
                    state: data
                };
                return tr.setMeta(this, wrappedData);
            }, AsyncPluginKey.prototype.setCallbackData = function(tr, data) {
                var wrappedData = {
                    callbackData: data,
                    state: null
                };
                return tr.setMeta(this, wrappedData);
            }, AsyncPluginKey;
        }(StatefulPluginKey), plugin_extensions_AsyncViewHandler = function() {
            function AsyncViewHandler(view, transactionKey, callback) {
                this.callback = callback, this.transactionKey = transactionKey, this.attachCallback(view, null);
            }
            return AsyncViewHandler.prototype.update = function(view, prevState) {
                view.state.doc.eq(prevState.doc) || this.attachCallback(view, prevState);
            }, AsyncViewHandler.prototype.destroy = function() {}, AsyncViewHandler.prototype.attachCallback = function(view, prevState) {
                var _this = this, promiseId = this.inProgressPromise = Math.random();
                this.callback(view, prevState).then((function(data) {
                    if (promiseId === _this.inProgressPromise) {
                        _this.inProgressPromise = null;
                        var trans = view.state.tr;
                        _this.transactionKey.setCallbackData(trans, data), view.updateState(view.state.apply(trans));
                    } else log("AsyncViewHandler attachCallback", "cancelling promise update due to another callback taking its place");
                })).catch((function() {
                    _this.inProgressPromise = null;
                }));
            }, AsyncViewHandler;
        }(), AsyncPlugin = function(_super) {
            function AsyncPlugin(spec) {
                return spec.view = function(view) {
                    return new plugin_extensions_AsyncViewHandler(view, spec.key, spec.asyncCallback);
                }, _super.call(this, spec) || this;
            }
            return plugin_extensions_extends(AsyncPlugin, _super), AsyncPlugin.prototype.getMeta = function(tr) {
                var metadata = tr.getMeta(this.transactionKey);
                return null == metadata ? void 0 : metadata.state;
            }, AsyncPlugin.prototype.getCallbackData = function(tr) {
                var metadata = tr.getMeta(this.transactionKey);
                return null == metadata ? void 0 : metadata.callbackData;
            }, AsyncPlugin;
        }(StatefulPlugin), __awaiter = function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))((function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator.throw(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    var value;
                    result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }))).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            }));
        }, __generator = function(thisArg, body) {
            var f, y, t, g, _ = {
                label: 0,
                sent: function() {
                    if (1 & t[0]) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            };
            return g = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this;
            }), g;
            function verb(n) {
                return function(v) {
                    return function(op) {
                        if (f) throw new TypeError("Generator is already executing.");
                        for (;_; ) try {
                            if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 
                            0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                            switch (y = 0, t && (op = [ 2 & op[0], t.value ]), op[0]) {
                              case 0:
                              case 1:
                                t = op;
                                break;

                              case 4:
                                return _.label++, {
                                    value: op[1],
                                    done: !1
                                };

                              case 5:
                                _.label++, y = op[1], op = [ 0 ];
                                continue;

                              case 7:
                                op = _.ops.pop(), _.trys.pop();
                                continue;

                              default:
                                if (!(t = _.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                                    _ = 0;
                                    continue;
                                }
                                if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                    _.label = op[1];
                                    break;
                                }
                                if (6 === op[0] && _.label < t[1]) {
                                    _.label = t[1], t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2], _.ops.push(op);
                                    break;
                                }
                                t[2] && _.ops.pop(), _.trys.pop();
                                continue;
                            }
                            op = body.call(thisArg, _);
                        } catch (e) {
                            op = [ 6, e ], y = 0;
                        } finally {
                            f = t = 0;
                        }
                        if (5 & op[0]) throw op[1];
                        return {
                            value: op[0] ? op[1] : void 0,
                            done: !0
                        };
                    }([ n, v ]);
                };
            }
        };
        function defaultImageUploadHandler(file) {
            return __awaiter(this, void 0, void 0, (function() {
                var formData, response;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        return (formData = new FormData).append("file", file), [ 4, fetch("/image/upload", {
                            method: "POST",
                            cache: "no-cache",
                            body: formData
                        }) ];

                      case 1:
                        if (!(response = _a.sent()).ok) throw Error("Failed to upload image: " + response.status + " - " + response.statusText);
                        return [ 4, response.json() ];

                      case 2:
                        return [ 2, _a.sent().UploadedImage ];
                    }
                }));
            }));
        }
        !function(ValidationResult) {
            ValidationResult[ValidationResult.Ok = 0] = "Ok", ValidationResult[ValidationResult.FileTooLarge = 1] = "FileTooLarge", 
            ValidationResult[ValidationResult.InvalidFileType = 2] = "InvalidFileType";
        }(ValidationResult || (ValidationResult = {}));
        var ImageUploader = function() {
            function ImageUploader(view, uploadOptions, pluginContainer, addTransactionDispatcher) {
                var _a, _b, _this = this;
                this.image = null, this.isVisible = !1, this.uploadOptions = uploadOptions, this.pluginContainer = pluginContainer, 
                this.addTransactionDispatcher = addTransactionDispatcher, this.uploadContainer = document.createElement("div"), 
                this.uploadContainer.className = "mt6 bt bb bc-black-400 d-none js-image-uploader", 
                this.uploadField = document.createElement("input"), this.uploadField.type = "file", 
                this.uploadField.className = "d-none", this.uploadField.accept = "image/*", this.uploadField.multiple = !1, 
                this.uploadField.id = "fileUpload", this.uploadContainer.innerHTML = '\n            <div class="fs-body2 p12 pb0"><label class="s-link" for="' + this.uploadField.id + '">Browse</label>, drag & drop, or paste an image <span class="fc-light fs-caption">Max size 2 MiB</span></div>\n            ' + this.uploadField.outerHTML + '\n\n            <div class="js-image-preview wmx100 pt12 px12 d-none"></div>\n            <aside class="s-notice s-notice__warning d-none m8 js-validation-message" role="status" aria-hidden="true"></aside>\n\n            <div class="grid ai-center p12">\n                <button class="s-btn s-btn__primary ws-nowrap mr8 js-add-image" type="button" disabled>Add image</button>\n                <button class="s-btn ws-nowrap js-cancel-button" type="button">Cancel</button>\n                <div class="ml64 grid fd-column fs-caption fc-black-300 s-anchors s-anchors__muted">\n                    <div>' + ((null === (_a = this.uploadOptions) || void 0 === _a ? void 0 : _a.brandingHtml) || "") + "</div>\n                    <div>" + ((null === (_b = this.uploadOptions) || void 0 === _b ? void 0 : _b.contentPolicyHtml) || "") + "</div>\n                </div>\n            </div>\n        ", 
                this.uploadField = this.uploadContainer.querySelector("#fileUpload"), this.uploadField.addEventListener("change", (function() {
                    _this.handleFileSelection(view);
                })), pluginContainer.appendChild(this.uploadContainer), this.uploadContainer.addEventListener("dragenter", this.highlightDropArea.bind(this)), 
                this.uploadContainer.addEventListener("dragover", this.highlightDropArea.bind(this)), 
                this.uploadContainer.addEventListener("drop", (function(event) {
                    _this.unhighlightDropArea(event), _this.handleDrop(event, view);
                })), this.uploadContainer.addEventListener("paste", (function(event) {
                    _this.handlePaste(event, view);
                })), this.uploadContainer.addEventListener("dragleave", this.unhighlightDropArea.bind(this)), 
                view.dom.parentNode.addEventListener("keydown", (function(event) {
                    "Escape" === event.key && hideImageUploader(view);
                })), this.uploadContainer.querySelector(".js-cancel-button").addEventListener("click", (function() {
                    return hideImageUploader(view);
                })), this.uploadContainer.querySelector(".js-add-image").addEventListener("click", (function(e) {
                    return _this.handleUploadTrigger(e, _this.image, view);
                }));
            }
            return ImageUploader.prototype.highlightDropArea = function(event) {
                this.uploadContainer.classList.add("bs-ring"), this.uploadContainer.classList.add("bc-blue-300"), 
                event.preventDefault(), event.stopPropagation();
            }, ImageUploader.prototype.unhighlightDropArea = function(event) {
                this.uploadContainer.classList.remove("bs-ring"), this.uploadContainer.classList.remove("bc-blue-300"), 
                event.preventDefault(), event.stopPropagation();
            }, ImageUploader.prototype.handleFileSelection = function(view) {
                this.resetImagePreview();
                var files = this.uploadField.files;
                view.state.selection.$from.parent.inlineContent && files.length && this.showImagePreview(files[0]);
            }, ImageUploader.prototype.handleDrop = function(event, view) {
                this.resetImagePreview();
                var files = event.dataTransfer.files;
                view.state.selection.$from.parent.inlineContent && files.length && this.showImagePreview(files[0]);
            }, ImageUploader.prototype.handlePaste = function(event, view) {
                this.resetImagePreview();
                var files = event.clipboardData.files;
                view.state.selection.$from.parent.inlineContent && files.length && this.showImagePreview(files[0]);
            }, ImageUploader.prototype.validateImage = function(image) {
                return -1 === [ "image/jpeg", "image/png", "image/gif" ].indexOf(image.type) ? ValidationResult.InvalidFileType : image.size >= 2097152 ? ValidationResult.FileTooLarge : ValidationResult.Ok;
            }, ImageUploader.prototype.showValidationError = function(errorMessage, level) {
                void 0 === level && (level = "warning"), this.uploadField.value = null;
                var validationElement = this.uploadContainer.querySelector(".js-validation-message");
                "warning" === level ? (validationElement.classList.remove("s-notice__danger"), validationElement.classList.add("s-notice__warning")) : (validationElement.classList.remove("s-notice__warning"), 
                validationElement.classList.add("s-notice__danger")), validationElement.classList.remove("d-none"), 
                validationElement.innerHTML = errorMessage;
            }, ImageUploader.prototype.hideValidationError = function() {
                var validationElement = this.uploadContainer.querySelector(".js-validation-message");
                validationElement.classList.add("d-none"), validationElement.classList.remove("s-notice__warning"), 
                validationElement.classList.remove("s-notice__danger"), validationElement.innerHTML = "";
            }, ImageUploader.prototype.showImagePreview = function(file) {
                var _this = this;
                return new Promise((function(resolve, reject) {
                    return _this.showImagePreviewAsync(file, resolve, reject);
                }));
            }, ImageUploader.prototype.showImagePreviewAsync = function(file, resolve, reject) {
                var _this = this, previewElement = this.uploadContainer.querySelector(".js-image-preview"), addImageButton = this.uploadContainer.querySelector(".js-add-image");
                switch (this.hideValidationError(), this.validateImage(file)) {
                  case ValidationResult.FileTooLarge:
                    return this.showValidationError("Your image is too large to upload (over 2 MiB)"), 
                    void reject("file too large");

                  case ValidationResult.InvalidFileType:
                    return this.showValidationError("Please select an image (jpeg, png, gif) to upload"), 
                    void reject("invalid filetype");
                }
                this.resetImagePreview();
                var reader = new FileReader;
                reader.addEventListener("load", (function() {
                    var image = new Image;
                    image.className = "hmx1 w-auto", image.title = file.name, image.src = reader.result, 
                    previewElement.appendChild(image), previewElement.classList.remove("d-none"), _this.image = file, 
                    addImageButton.disabled = !1, resolve();
                }), !1), reader.readAsDataURL(file);
            }, ImageUploader.prototype.resetImagePreview = function() {
                this.uploadContainer.querySelector(".js-image-preview").innerHTML = "", this.image = null, 
                this.uploadContainer.querySelector(".js-add-image").disabled = !0;
            }, ImageUploader.prototype.resetUploader = function() {
                this.resetImagePreview(), this.hideValidationError();
            }, ImageUploader.prototype.handleUploadTrigger = function(event, file, view) {
                file && (this.startImageUpload(view, file), this.resetUploader(), hideImageUploader(view), 
                view.focus());
            }, ImageUploader.prototype.startImageUpload = function(view, file) {
                var _a, _this = this, id = {}, tr = view.state.tr;
                tr.selection.empty || tr.deleteSelection(), IMAGE_UPLOADER_KEY.setMeta(tr, {
                    add: {
                        id: id,
                        pos: tr.selection.from
                    },
                    file: null,
                    visible: !1
                }), view.dispatch(tr), (null === (_a = this.uploadOptions) || void 0 === _a ? void 0 : _a.handler) ? this.uploadOptions.handler(file).then((function(url) {
                    var found = IMAGE_UPLOADER_KEY.getState(view.state).decorations.find(null, null, (function(spec) {
                        return spec.id == id;
                    })), pos = found.length ? found[0].from : null;
                    if (null !== pos) {
                        var tr = _this.addTransactionDispatcher(view.state, url, pos);
                        tr = IMAGE_UPLOADER_KEY.setMeta(tr, {
                            remove: {
                                id: id
                            },
                            visible: !1,
                            file: null
                        }), view.dispatch(tr);
                    }
                }), (function() {
                    view.dispatch(IMAGE_UPLOADER_KEY.setMeta(view.state.tr, {
                        remove: {
                            id: id
                        },
                        visible: !1,
                        file: null
                    })), showImageUploader(view), _this.showValidationError("Image upload failed. Please try again.", "error");
                })) : console.error("No upload handler registered. Ensure you set a proper handler on the editor's options.imageUploadHandler");
            }, ImageUploader.prototype.update = function(view) {
                var state = IMAGE_UPLOADER_KEY.getState(view.state), isVisible = null == state ? void 0 : state.visible;
                "boolean" != typeof isVisible && (isVisible = !1), isVisible !== this.isVisible && (this.isVisible = isVisible, 
                this.image = (null == state ? void 0 : state.file) || this.image, this.isVisible ? (this.uploadContainer.classList.remove("d-none"), 
                this.uploadContainer.querySelector("button").focus(), this.image && this.showImagePreview(this.image)) : (this.resetUploader(), 
                this.uploadContainer.classList.add("d-none"), this.uploadContainer.classList.remove("outline-ring")));
            }, ImageUploader.prototype.destroy = function() {
                this.uploadField.remove(), this.uploadContainer.remove(), this.image = null;
            }, ImageUploader;
        }();
        function hideImageUploader(view) {
            var state = IMAGE_UPLOADER_KEY.getState(view.state);
            if (state && state.visible) {
                var tr = view.state.tr;
                IMAGE_UPLOADER_KEY.setMeta(tr, {
                    visible: !1,
                    file: null
                });
                var newState = view.state.apply(tr);
                view.updateState(newState);
            }
        }
        function showImageUploader(view, file) {
            var state = IMAGE_UPLOADER_KEY.getState(view.state);
            if (state && !state.visible) {
                var tr = view.state.tr;
                IMAGE_UPLOADER_KEY.setMeta(tr, {
                    visible: !0,
                    file: file || null
                });
                var newState = view.state.apply(tr);
                view.updateState(newState);
            }
        }
        function imageUploaderEnabled(view) {
            return !!IMAGE_UPLOADER_KEY.getState(view.state);
        }
        function imageUploaderPlaceholderPlugin(uploadOptions, containerFn, addTransactionDispatcher) {
            return (null == uploadOptions ? void 0 : uploadOptions.handler) ? new StatefulPlugin({
                key: IMAGE_UPLOADER_KEY,
                state: {
                    init: function() {
                        return {
                            visible: !1,
                            decorations: prosemirror_view_dist_index_es.DecorationSet.empty,
                            file: null
                        };
                    },
                    apply: function(tr, state) {
                        var set = state.decorations || prosemirror_view_dist_index_es.DecorationSet.empty;
                        set = set.map(tr.mapping, tr.doc);
                        var placeholder, metadata = this.getMeta(tr), returnValue = {
                            visible: state.visible,
                            file: state.file,
                            decorations: set
                        };
                        if (!metadata) return returnValue;
                        if ("visible" in metadata && (returnValue.visible = metadata.visible), returnValue.file = "file" in metadata ? metadata.file : null, 
                        metadata.add) {
                            var deco = prosemirror_view_dist_index_es.Decoration.widget(metadata.add.pos, ((placeholder = document.createElement("div")).className = "ws-normal d-block m8", 
                            placeholder.innerHTML = '\n<div class="py6 px12 bg-black-050 bar-sm grid gsx gs8 d-inline-flex ai-center fw-normal fs-body1">\n    <span class="icon-bg iconImage"></span>\n    <div class="grid--cell">Uploading image</div>\n    <div class="s-spinner s-spinner__sm grid--cell">\n        <div class="v-visible-sr">Loading…</div>\n    </div>\n</div>\n', 
                            placeholder), {
                                id: metadata.add.id
                            });
                            returnValue.decorations = set.add(tr.doc, [ deco ]);
                        } else metadata.remove && (returnValue.decorations = set.remove(set.find(null, null, (function(spec) {
                            return spec.id == metadata.remove.id;
                        }))));
                        return returnValue;
                    }
                },
                props: {
                    decorations: function(state) {
                        return this.getState(state).decorations;
                    },
                    handleClick: function(view) {
                        return hideImageUploader(view), !1;
                    },
                    handleDrop: function(view, event) {
                        var files = event.dataTransfer.files;
                        return !(!view.state.selection.$from.parent.inlineContent || !files.length) && (showImageUploader(view, files[0]), 
                        !0);
                    },
                    handlePaste: function(view, event) {
                        var files = event.clipboardData.files;
                        return !(!view.state.selection.$from.parent.inlineContent || !files.length) && (hideImageUploader(view), 
                        showImageUploader(view, files[0]), !0);
                    }
                },
                view: function(editorView) {
                    return new ImageUploader(editorView, uploadOptions, (containerFn = containerFn || function(view) {
                        return view.dom.parentElement;
                    })(editorView), addTransactionDispatcher);
                }
            }) : new prosemirror_state_dist_index_es.Plugin({});
        }
        var IMAGE_UPLOADER_KEY = new StatefulPluginKey(ImageUploader.name);
        var READ_ONLY_KEY = new prosemirror_state_dist_index_es.PluginKey(readonlyPlugin.name);
        function editableCheck(state) {
            return !READ_ONLY_KEY.getState(state);
        }
        function toggleReadonly(isReadonly, state, dispatch) {
            if (READ_ONLY_KEY.getState(state) === isReadonly) return !1;
            var tr = state.tr.setMeta(READ_ONLY_KEY, isReadonly);
            return tr = tr.setMeta("addToHistory", !1), dispatch && dispatch(tr), !0;
        }
        function readonlyPlugin() {
            return new prosemirror_state_dist_index_es.Plugin({
                key: READ_ONLY_KEY,
                state: {
                    init: function() {
                        return !1;
                    },
                    apply: function(tr, value) {
                        var meta = tr.getMeta(READ_ONLY_KEY);
                        return void 0 === meta ? value : meta;
                    }
                }
            });
        }
        var utils_spreadArrays = function() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            var r = Array(s), k = 0;
            for (i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
            k++) r[k] = a[j];
            return r;
        };
        function deepMerge(object1, object2) {
            return mergeObject(object1, object2);
        }
        function isPlainObject(obj) {
            return obj instanceof Object && (!(obj instanceof Function) && !(obj instanceof Array));
        }
        function mergeObject(object1, object2) {
            if (object1 instanceof Array && object2 instanceof Array) return utils_spreadArrays(object1, object2);
            var obj1IsObject = isPlainObject(object1), obj2IsObject = isPlainObject(object2);
            if (!obj1IsObject && obj2IsObject) return mergeObject({}, object2);
            if (obj1IsObject && !obj2IsObject) return mergeObject({}, object1);
            if (!obj1IsObject && !obj2IsObject) return object2;
            for (var outObject = {}, obj1 = object1, obj2 = object2, keys = Object.keys(obj1), _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                outObject[key = keys_1[_i]] = key in obj2 ? mergeObject(obj1[key], obj2[key]) : obj1[key];
            }
            for (var _a = 0, keys_2 = keys = Object.keys(obj2); _a < keys_2.length; _a++) {
                var key;
                (key = keys_2[_a]) in outObject || (outObject[key] = obj2[key]);
            }
            return outObject;
        }
        function docChanged(prevState, newState) {
            return !prevState || !newState || (!prevState.selection.eq(newState.selection) || !prevState.doc.eq(newState.doc) || prevState.storedMarks !== newState.storedMarks);
        }
        var defaultParserFeatures = {
            snippets: !0,
            html: !0,
            extraEmphasis: !0,
            tables: !0
        }, menu_spreadArrays = function() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            var r = Array(s), k = 0;
            for (i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
            k++) r[k] = a[j];
            return r;
        }, commandNoOp = function() {
            return !1;
        }, menu_MenuView = function() {
            function MenuView(items, view) {
                var _a, _this = this;
                this.items = items, this.view = view, this.menuCommands = (_a = []).concat.apply(_a, this.items.map((function(item) {
                    return item.children ? menu_spreadArrays([ item ], item.children) : item;
                }))), this.dom = document.createElement("div"), this.dom.className = "grid gs2 mln4 fl1 ai-center js-editor-menu", 
                this.items.forEach((function(_a) {
                    var dom = _a.dom;
                    return _this.dom.appendChild(dom);
                })), this.update(view, null);
                var menuCommands = this.menuCommands;
                this.dom.addEventListener("click", (function(e) {
                    var target = e.target.closest(".js-editor-btn");
                    if (target && !target.classList.contains(MenuView.disabledClass)) {
                        var key = target.dataset.key;
                        e.preventDefault(), view.focus();
                        var found = menuCommands.find((function(c) {
                            return c.key === key;
                        }));
                        found && found.command(view.state, view.dispatch.bind(view), view);
                    }
                })), this.readonly = !view.editable;
            }
            return MenuView.prototype.update = function(view, prevState) {
                var _this = this;
                if (docChanged(prevState, view.state) || this.readonly === view.editable) {
                    this.readonly = !view.editable, this.dom.classList.toggle("pe-none", this.readonly);
                    var viewIsReadonly = this.readonly, disabledClass = MenuView.disabledClass;
                    this.menuCommands.forEach((function(entry) {
                        var dom = entry.dom;
                        if (!dom.classList.contains("js-editor-btn")) {
                            var button = dom.querySelector(".js-editor-btn");
                            dom = null != button ? button : dom;
                        }
                        var isFocused = _this.view.hasFocus(), visible = !entry.visible || entry.visible(_this.view.state), active = !(!isFocused || !entry.active) && entry.active(_this.view.state), enabled = !viewIsReadonly && entry.command(_this.view.state, void 0, _this.view);
                        dom.classList.remove(disabledClass), dom.classList.remove("is-selected"), dom.classList.remove("d-none"), 
                        dom.dataset.key = entry.key, visible ? active ? dom.classList.add("is-selected") : enabled || dom.classList.add(disabledClass) : dom.classList.add("d-none");
                    }));
                }
            }, MenuView.prototype.destroy = function() {
                this.dom.remove();
            }, MenuView.disabledClass = "is-disabled", MenuView;
        }();
        function addIf(item, flag) {
            return flag ? item : null;
        }
        function createMenuPlugin(items, containerFn) {
            var validItems = items.filter((function(i) {
                return !!i;
            }));
            return new prosemirror_state_dist_index_es.Plugin({
                view: function(editorView) {
                    var menuView = new menu_MenuView(validItems, editorView), container = (containerFn = containerFn || function(v) {
                        return v.dom.parentNode;
                    })(editorView);
                    return container.contains(editorView.dom) ? container.insertBefore(menuView.dom, editorView.dom) : container.insertBefore(menuView.dom, container.firstChild), 
                    menuView;
                }
            });
        }
        function makeMenuIcon(iconName, title, key, cssClasses) {
            var _a, button = document.createElement("button");
            button.className = "s-editor-btn grid--cell js-editor-btn js-" + key, cssClasses && (_a = button.classList).add.apply(_a, cssClasses), 
            button.title = title, button.dataset.controller = "s-tooltip", button.dataset.sTooltipPlacement = "top", 
            button.dataset.key = key, button.type = "button";
            var icon = document.createElement("span");
            return icon.className = "icon-bg icon" + iconName, button.append(icon), button;
        }
        function makeMenuSpacerEntry(visible, cssClasses) {
            var _a, dom = document.createElement("div");
            return dom.className = "grid--cell w16", cssClasses && (_a = dom.classList).add.apply(_a, cssClasses), 
            {
                key: "spacer",
                command: commandNoOp,
                active: commandNoOp,
                visible: visible,
                dom: dom
            };
        }
        function dropdownItem(title, command, key) {
            var button = document.createElement("button");
            return button.type = "button", button.className = "s-btn s-btn__unset grid--cell ta-left px12 py4 h:bg-black-050 c-pointer js-editor-btn", 
            button.dataset.key = key, button.innerHTML = title, {
                key: key,
                command: command,
                dom: button
            };
        }
        function dropdownSection(title, key) {
            var section = document.createElement("span");
            return section.className = "grid--cell ta-left fs-fine tt-uppercase mx12 mb6 mt12 fc-black-400", 
            section.dataset.key = key, section.innerHTML = title, {
                key: key,
                command: function() {
                    return !0;
                },
                visible: function() {
                    return !0;
                },
                active: function() {
                    return !1;
                },
                dom: section
            };
        }
        function makeMenuLinkEntry(iconName, title, href) {
            var dom = document.createElement("a");
            dom.className = "s-editor-btn js-editor-btn grid--cell", dom.href = href, dom.target = "_blank", 
            dom.title = title, dom.dataset.controller = "s-tooltip", dom.dataset.sTooltipPlacement = "top";
            var icon = document.createElement("span");
            return icon.className = "icon-bg icon" + iconName, dom.append(icon), {
                key: title,
                command: function(_, dispatch) {
                    return dispatch && window.open(dom.href, dom.target), !!href;
                },
                active: commandNoOp,
                dom: dom
            };
        }
        var commands_setBlockTypeCommand = function(formattingText) {
            return commands_setBlockType.bind(null, formattingText);
        }, commands_wrapInCommand = function(formattingText) {
            return toggleWrapIn.bind(null, formattingText);
        }, newTextNode = function(schema, content) {
            return schema.text(content);
        };
        function toggleWrapIn(formattingText, state, dispatch) {
            return !!function(formattingText, state, dispatch) {
                if (state.selection.empty) return !1;
                var _a = state.selection, from = _a.from, to = _a.to, selectedText = state.doc.textBetween(from, to), precedingString = selectedText.slice(0, formattingText.length), postcedingString = selectedText.slice(-1 * formattingText.length);
                if (precedingString !== formattingText || postcedingString !== formattingText) return !1;
                if (dispatch) {
                    var tr = state.tr, unwrappedText = selectedText.slice(formattingText.length, -1 * formattingText.length);
                    tr.replaceSelectionWith(newTextNode(tr.doc.type.schema, unwrappedText)), tr.setSelection(prosemirror_state_dist_index_es.TextSelection.create(state.apply(tr).doc, from, to - 2 * formattingText.length)), 
                    dispatch(tr);
                }
                return !0;
            }(formattingText, state, dispatch) || function(formattingText, state, dispatch) {
                var textToInsertOnEmptySelection = "your text", _a = state.selection, from = _a.from, to = _a.to, tr = state.tr.insertText(formattingText, to);
                state.selection.empty && tr.insertText(textToInsertOnEmptySelection, to);
                if (tr.insertText(formattingText, from).scrollIntoView(), dispatch) {
                    var selectionStart = from, selectionEnd = to + 2 * formattingText.length;
                    state.selection.empty && (selectionEnd = (selectionStart = from + formattingText.length) + textToInsertOnEmptySelection.length), 
                    tr.setSelection(prosemirror_state_dist_index_es.TextSelection.create(state.apply(tr).doc, selectionStart, selectionEnd)), 
                    dispatch(tr);
                }
                return !0;
            }(formattingText, state, dispatch);
        }
        function commands_setBlockType(formattingText, state, dispatch) {
            return !!function(formattingText, state, dispatch) {
                if (state.selection.empty) return !1;
                var from = state.selection.from, selectedText = state.doc.cut(from, state.selection.to).textContent;
                if (!selectedText.includes("\n")) return !1;
                var trailingText = " ", tr = state.tr, lines = selectedText.split("\n"), isTogglingOn = lines.some((function(text) {
                    return !text.startsWith(formattingText + trailingText);
                })), stateOffset = 1, rangeFrom = from;
                lines.forEach((function(l) {
                    var formattedLine, leadingBlockChars = matchLeadingBlockCharacters(l);
                    formattedLine = isTogglingOn && leadingBlockChars === formattingText + trailingText ? l : isTogglingOn && leadingBlockChars.length ? formattingText + trailingText + l.slice(leadingBlockChars.length) : isTogglingOn ? formattingText + trailingText + l : l.slice(leadingBlockChars.length);
                    var rangeTo = rangeFrom + l.length;
                    tr = formattedLine.length ? tr.replaceRangeWith(rangeFrom, rangeTo, newTextNode(tr.doc.type.schema, formattedLine)) : tr.deleteRange(rangeFrom, rangeTo), 
                    rangeFrom += formattedLine.length + "\n".length;
                })), from > stateOffset && "\n" !== state.doc.textBetween(from - stateOffset, from) && (tr = tr.insertText("\n", from, from), 
                from += "\n".length, rangeFrom += "\n".length);
                if (dispatch) {
                    var selectionEnd = rangeFrom - "\n".length;
                    tr.setSelection(prosemirror_state_dist_index_es.TextSelection.create(state.apply(tr).doc, from, selectionEnd)), 
                    tr.scrollIntoView(), dispatch(tr);
                }
                return !0;
            }(formattingText, state, dispatch) || function(formattingText, state, dispatch) {
                var textInsertPos, from = state.selection.from, textToCursor = state.doc.cut(0, from).textContent, stateOffset = 1, prevNewlineIndex = textToCursor.lastIndexOf("\n");
                textInsertPos = -1 === prevNewlineIndex ? stateOffset : prevNewlineIndex + stateOffset + "\n".length;
                var trailingText = " ", leadingBlockChars = matchLeadingBlockCharacters(state.doc.cut(textInsertPos).textContent), tr = state.tr;
                leadingBlockChars.length && (tr = tr.delete(textInsertPos, textInsertPos + leadingBlockChars.length));
                var isTogglingOff = !1;
                leadingBlockChars === formattingText + trailingText && (isTogglingOff = !0);
                isTogglingOff || (tr = tr.insertText(formattingText + trailingText, textInsertPos));
                dispatch && dispatch(tr = tr.scrollIntoView());
                return !0;
            }(formattingText, state, dispatch);
        }
        function matchLeadingBlockCharacters(text) {
            var _a;
            return (null === (_a = /^[^a-zA-Z]+\s{1}(?=[a-zA-Z_*[!]|$)/.exec(text)) || void 0 === _a ? void 0 : _a[0]) || "";
        }
        function toggleBlockWrap(formattingText, state, dispatch) {
            return !!blockUnwrapIn(formattingText, state, dispatch) || function(formattingText, state, dispatch) {
                if (state.selection.empty) {
                    var placeholderText = "type here", newlineOffset = 2;
                    return insertRawText("\n" + formattingText + "\n" + placeholderText + "\n" + formattingText + "\n", formattingText.length + newlineOffset, formattingText.length + placeholderText.length + newlineOffset, state, dispatch);
                }
                var _a = state.selection, from = _a.from, to = _a.to;
                if (blockUnwrapIn(formattingText, state, dispatch)) return !0;
                var tr = state.tr;
                from > 0 && "\n" !== state.doc.textBetween(from - 1, from) && (tr = tr.insertText("\n", from, from), 
                from += 1, to += 1);
                to + 1 < state.doc.content.size && "\n" !== state.doc.textBetween(to, to + 1) && (tr = tr.insertText("\n", to + 1, to + 1), 
                to += 1);
                var surroundingChar = "\n";
                if (tr.insertText(surroundingChar + formattingText, to), tr.insertText(formattingText + surroundingChar, from), 
                dispatch) {
                    var addedTextModifier = surroundingChar.length + formattingText.length;
                    tr.setSelection(prosemirror_state_dist_index_es.TextSelection.create(state.apply(tr).doc, from, to + 2 * addedTextModifier)), 
                    tr.scrollIntoView(), dispatch(tr);
                }
                return !0;
            }(formattingText, state, dispatch);
        }
        function blockUnwrapIn(formattingText, state, dispatch) {
            if (state.selection.empty) return !1;
            var _a = state.selection, from = _a.from, to = _a.to, selectedText = state.doc.textBetween(from, to), totalFormattedLength = formattingText.length + "\n".length, precedingString = selectedText.slice(0, totalFormattedLength), postcedingString = selectedText.slice(-1 * totalFormattedLength);
            if (precedingString !== formattingText + "\n" || postcedingString !== "\n" + formattingText) return !1;
            var tr = state.tr;
            return tr = (tr = tr.delete(to - totalFormattedLength, to)).delete(from, from + totalFormattedLength), 
            dispatch && (tr.setSelection(prosemirror_state_dist_index_es.TextSelection.create(state.apply(tr).doc, from, to - 2 * totalFormattedLength)), 
            tr.scrollIntoView(), dispatch(tr)), !0;
        }
        function insertRawText(text, selectFrom, selectTo, state, dispatch) {
            var tr = state.tr, from = state.selection.from;
            return tr = state.selection.empty ? tr.insertText(text, from) : tr.replaceSelectionWith(newTextNode(tr.doc.type.schema, text)), 
            dispatch && dispatch(tr = (tr = void 0 !== selectFrom && void 0 !== selectTo ? tr.setSelection(prosemirror_state_dist_index_es.TextSelection.create(state.apply(tr).doc, from + selectFrom, from + selectTo)) : tr.setSelection(prosemirror_state_dist_index_es.TextSelection.create(state.apply(tr).doc, from))).scrollIntoView()), 
            !0;
        }
        function insertLinkCommand(state, dispatch) {
            var dummyLink = "https://www.stackoverflow.com/";
            if (state.selection.empty) return insertRawText("[text](" + dummyLink + ")", 1, 5, state, dispatch);
            var _a = state.selection, from = _a.from, to = _a.to, selectedText = state.doc.textBetween(from, to), insertedText = "[" + selectedText + "](" + dummyLink + ")", selectFrom = 3 + selectedText.length;
            return insertRawText(insertedText, selectFrom, selectFrom + dummyLink.length, state, dispatch);
        }
        function insertTableCommand(state, dispatch) {
            if (state.selection.empty) return insertRawText("\n| Column A | Column B |\n| -------- | -------- |\n| Cell 1   | Cell 2   |\n| Cell 3   | Cell 4   |\n", 1, 1, state, dispatch);
        }
        var text, selectFrom, selectTo, formattingText, boldCommand = commands_wrapInCommand("**"), emphasisCommand = commands_wrapInCommand("*"), inlineCodeCommand = commands_wrapInCommand("`"), indentCommand = function() {
            return !1;
        }, headerCommand = commands_setBlockTypeCommand("#"), strikethroughCommand = commands_wrapInCommand("~~"), blockquoteCommand = commands_setBlockTypeCommand(">"), orderedListCommand = commands_setBlockTypeCommand("1."), unorderedListCommand = commands_setBlockTypeCommand("-"), insertHorizontalRuleCommand = (text = "\n---\n", 
        insertRawText.bind(null, text, selectFrom, selectTo)), insertCodeblockCommand = (formattingText = "```", 
        toggleBlockWrap.bind(null, formattingText));
        function insertImageCommand(state, dispatch, view) {
            return !!imageUploaderEnabled(view) && (!dispatch || (showImageUploader(view), !0));
        }
        var createMenu = function(options) {
            var _a;
            return createMenuPlugin([ {
                key: "toggleHeading",
                command: headerCommand,
                dom: makeMenuIcon("Header", "Heading", "heading-btn")
            }, {
                key: "togglBold",
                command: boldCommand,
                dom: makeMenuIcon("Bold", "Bold", "bold-btn")
            }, {
                key: "toggleEmphasis",
                command: emphasisCommand,
                dom: makeMenuIcon("Italic", "Italic", "italic-btn")
            }, {
                key: "toggleCode",
                command: inlineCodeCommand,
                dom: makeMenuIcon("Code", "Inline code", "code-btn")
            }, addIf({
                key: "toggleStrikethrough",
                command: strikethroughCommand,
                dom: makeMenuIcon("Strikethrough", "Strikethrough", "strike-btn")
            }, options.parserFeatures.extraEmphasis), makeMenuSpacerEntry(), {
                key: "toggleLink",
                command: insertLinkCommand,
                dom: makeMenuIcon("Link", "Insert link", "insert-link-btn")
            }, {
                key: "toggleBlockquote",
                command: blockquoteCommand,
                dom: makeMenuIcon("Quote", "Blockquote", "blockquote-btn")
            }, {
                key: "insertCodeblock",
                command: insertCodeblockCommand,
                dom: makeMenuIcon("Codeblock", "Insert code block", "code-block-btn")
            }, addIf({
                key: "insertImage",
                command: insertImageCommand,
                dom: makeMenuIcon("Image", "Insert image", "insert-image-btn")
            }, !!(null === (_a = options.imageUpload) || void 0 === _a ? void 0 : _a.handler)), addIf({
                key: "insertTable",
                command: insertTableCommand,
                dom: makeMenuIcon("Table", "Insert table", "insert-table-btn")
            }, options.parserFeatures.tables), makeMenuSpacerEntry(), {
                key: "toggleOrderedList",
                command: orderedListCommand,
                dom: makeMenuIcon("OrderedList", "Numbered list", "numbered-list-btn")
            }, {
                key: "toggleUnorderedList",
                command: unorderedListCommand,
                dom: makeMenuIcon("UnorderedList", "Bulleted list", "bullet-list-btn")
            }, {
                key: "insertRule",
                command: insertHorizontalRuleCommand,
                dom: makeMenuIcon("HorizontalRule", "Insert Horizontal rule", "horizontal-rule-btn")
            }, makeMenuSpacerEntry((function() {
                return !1;
            }), [ "sm:d-inline-block" ]), {
                key: "undo",
                command: undo,
                dom: makeMenuIcon("Undo", "Undo", "undo-btn", [ "sm:d-inline-block" ]),
                visible: function() {
                    return !1;
                }
            }, {
                key: "redo",
                command: redo,
                dom: makeMenuIcon("Refresh", "Redo", "redo-btn", [ "sm:d-inline-block" ]),
                visible: function() {
                    return !1;
                }
            }, makeMenuSpacerEntry(), makeMenuLinkEntry("Help", "Help", options.editorHelpLink) ], options.menuParentContainer);
        }, commonmarkKeymap = keymap({
            "Mod-z": undo,
            "Mod-y": redo,
            "Mod-Shift-z": redo,
            Tab: indentCommand,
            "Shift-Tab": indentCommand,
            "Mod-b": boldCommand,
            "Mod-i": emphasisCommand,
            "Mod-l": insertLinkCommand,
            "Ctrl-q": blockquoteCommand,
            "Mod-k": inlineCodeCommand,
            "Mod-g": insertImageCommand,
            "Ctrl-g": insertImageCommand,
            "Mod-o": orderedListCommand,
            "Mod-u": unorderedListCommand,
            "Mod-h": headerCommand,
            "Mod-r": insertHorizontalRuleCommand,
            "Mod-m": insertCodeblockCommand
        }), editor_CommonmarkEditor = function() {
            function CommonmarkEditor(target, content, options) {
                var uploadOptions, containerFn, _this = this;
                void 0 === options && (options = {}), this.options = deepMerge(CommonmarkEditor.defaultOptions, options), 
                this.editorView = new prosemirror_view_dist_index_es.EditorView((function(node) {
                    var _a;
                    (_a = node.classList).add.apply(_a, _this.options.classList), target.appendChild(node);
                }), {
                    editable: editableCheck,
                    state: prosemirror_state_dist_index_es.EditorState.create({
                        doc: schema_CodeStringParser.fromSchema(commonmarkSchema).parseCode(content),
                        plugins: [ index_es_history(), commonmarkKeymap, keymap(baseKeymap), createMenu(this.options), CodeBlockHighlightPlugin(null), (uploadOptions = this.options.imageUpload, 
                        containerFn = this.options.pluginParentContainer, imageUploaderPlaceholderPlugin(uploadOptions, containerFn, (function(state, url, pos) {
                            var mdString = "![enter image description here](" + url + ")", tr = state.tr.insertText(mdString, pos);
                            return tr.setSelection(prosemirror_state_dist_index_es.TextSelection.create(state.apply(tr).doc, pos + 2, pos + "enter image description here".length + 2)), 
                            tr;
                        }))), readonlyPlugin() ]
                    })
                }), log("prosemirror commonmark document", this.editorView.state.doc.toJSON());
            }
            return Object.defineProperty(CommonmarkEditor.prototype, "content", {
                get: function() {
                    return schema_CodeStringParser.toString(this.editorView.state.doc);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(CommonmarkEditor.prototype, "document", {
                get: function() {
                    return this.editorView.state.doc;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(CommonmarkEditor.prototype, "dom", {
                get: function() {
                    return this.editorView.dom;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(CommonmarkEditor.prototype, "readonly", {
                get: function() {
                    return !this.editorView.editable;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(CommonmarkEditor, "defaultOptions", {
                get: function() {
                    return {
                        editorHelpLink: null,
                        menuParentContainer: null,
                        parserFeatures: defaultParserFeatures,
                        imageUpload: {
                            handler: defaultImageUploadHandler
                        }
                    };
                },
                enumerable: !1,
                configurable: !0
            }), CommonmarkEditor.prototype.focus = function() {
                var _a;
                null === (_a = this.editorView) || void 0 === _a || _a.focus();
            }, CommonmarkEditor.prototype.destroy = function() {
                var _a;
                null === (_a = this.editorView) || void 0 === _a || _a.destroy();
            }, CommonmarkEditor;
        }();
        function setContentMatch(nodeType, schema) {
            nodeType.contentMatch = dist_index_es.a.parse(nodeType.spec.content || "", schema.nodes), 
            nodeType.inlineContent = nodeType.contentMatch.inlineContent;
        }
        var TagType, lib = __webpack_require__(9), lib_default = __webpack_require__.n(lib), lib_token = __webpack_require__(6), token_default = __webpack_require__.n(lib_token);
        !function(TagType) {
            TagType[TagType.unknown = 0] = "unknown", TagType[TagType.comment = 1] = "comment", 
            TagType[TagType.strike = 2] = "strike", TagType[TagType.strong = 3] = "strong", 
            TagType[TagType.emphasis = 4] = "emphasis", TagType[TagType.hardbreak = 5] = "hardbreak", 
            TagType[TagType.code = 6] = "code", TagType[TagType.link = 7] = "link", TagType[TagType.image = 8] = "image", 
            TagType[TagType.keyboard = 9] = "keyboard", TagType[TagType.pre = 10] = "pre", TagType[TagType.sup = 11] = "sup", 
            TagType[TagType.sub = 12] = "sub", TagType[TagType.heading = 13] = "heading", TagType[TagType.paragraph = 14] = "paragraph", 
            TagType[TagType.horizontal_rule = 15] = "horizontal_rule", TagType[TagType.blockquote = 16] = "blockquote", 
            TagType[TagType.list_item = 17] = "list_item", TagType[TagType.ordered_list = 18] = "ordered_list", 
            TagType[TagType.unordered_list = 19] = "unordered_list", TagType[TagType.dd = 20] = "dd", 
            TagType[TagType.dl = 21] = "dl", TagType[TagType.dt = 22] = "dt";
        }(TagType || (TagType = {}));
        var blockElements = [ TagType.blockquote, TagType.heading, TagType.list_item, TagType.ordered_list, TagType.unordered_list, TagType.dd, TagType.dl, TagType.dt, TagType.paragraph, TagType.horizontal_rule, TagType.pre ];
        function getTagInfo(tag) {
            var _a, _b, _c, _d, _e, _f, _g;
            if (!tag) return {
                type: TagType.unknown,
                isSelfClosing: !1,
                isClosing: !1,
                isBlock: !1,
                tagName: null,
                attributes: {},
                markup: null
            };
            var tagType = TagType.unknown, isClosingTag = /^<\/\S+?.*?>$/.test(tag), tagName = tag.replace(/[<>/]/g, "").trim().split(/\s/)[0], isSelfClosing = !1, attributes = {};
            [ "del", "strike", "s" ].includes(tagName) ? tagType = TagType.strike : [ "b", "strong" ].includes(tagName) ? tagType = TagType.strong : [ "em", "i" ].includes(tagName) ? tagType = TagType.emphasis : "code" === tagName ? tagType = TagType.code : "br" === tagName ? (tagType = TagType.hardbreak, 
            isSelfClosing = !0) : "blockquote" === tagName ? tagType = TagType.blockquote : "a" === tagName ? (tagType = TagType.link, 
            attributes.href = (null === (_a = /href=["'](.+?)["']/.exec(tag)) || void 0 === _a ? void 0 : _a[1]) || "", 
            attributes.title = (null === (_b = /title=["'](.+?)["']/.exec(tag)) || void 0 === _b ? void 0 : _b[1]) || "") : "img" === tagName ? (tagType = TagType.image, 
            attributes.src = (null === (_c = /src=["'](.+?)["']/.exec(tag)) || void 0 === _c ? void 0 : _c[1]) || "", 
            attributes.width = (null === (_d = /width=["'](.+?)["']/.exec(tag)) || void 0 === _d ? void 0 : _d[1]) || "", 
            attributes.height = (null === (_e = /height=["'](.+?)["']/.exec(tag)) || void 0 === _e ? void 0 : _e[1]) || "", 
            attributes.alt = (null === (_f = /alt=["'](.+?)["']/.exec(tag)) || void 0 === _f ? void 0 : _f[1]) || "", 
            attributes.title = (null === (_g = /title=["'](.+?)["']/.exec(tag)) || void 0 === _g ? void 0 : _g[1]) || "", 
            isSelfClosing = !0) : /h[1,2,3,4,5,6]/.test(tagName) ? tagType = TagType.heading : "kbd" === tagName ? tagType = TagType.keyboard : "pre" === tagName ? tagType = TagType.pre : "sup" === tagName ? tagType = TagType.sup : "sub" === tagName ? tagType = TagType.sub : "ul" === tagName ? tagType = TagType.unordered_list : "ol" === tagName ? tagType = TagType.ordered_list : "li" === tagName ? tagType = TagType.list_item : "p" === tagName ? tagType = TagType.paragraph : "hr" === tagName ? (tagType = TagType.horizontal_rule, 
            isSelfClosing = !0) : tagType = TagType.unknown;
            var markup = tagName ? "<" + (isClosingTag ? "/" : "") + tagName + ">" : "";
            return isSelfClosing && (markup = tag.replace(/^(<[a-z]+).*?(\s?\/?>)$/i, "$1$2")), 
            {
                type: tagType,
                isSelfClosing: isSelfClosing,
                isClosing: isClosingTag,
                isBlock: blockElements.includes(tagType),
                tagName: tagName,
                attributes: attributes,
                markup: markup
            };
        }
        function tagInfoToToken(tagInfo, existing) {
            var token = existing || new token_default.a("", "", 0), postfix = tagInfo.isSelfClosing ? "" : tagInfo.isClosing ? "_close" : "_open", tokenType = "";
            switch (tagInfo.type) {
              case TagType.unknown:
                tokenType = "text";
                break;

              case TagType.strike:
                tokenType = "s" + postfix;
                break;

              case TagType.emphasis:
                tokenType = "em" + postfix;
                break;

              case TagType.code:
                tokenType = "code_inline";
                break;

              case TagType.horizontal_rule:
                tokenType = "hr";
                break;

              case TagType.link:
                tokenType = "link" + postfix, token.attrSet("href", tagInfo.attributes.href), token.attrSet("title", tagInfo.attributes.title);
                break;

              case TagType.image:
                tokenType = "image", token.attrSet("src", tagInfo.attributes.src), token.attrSet("height", tagInfo.attributes.height), 
                token.attrSet("width", tagInfo.attributes.width), token.attrSet("alt", tagInfo.attributes.alt), 
                token.attrSet("title", tagInfo.attributes.title);
                break;

              case TagType.keyboard:
                tokenType = "kbd" + postfix;
                break;

              default:
                tokenType = TagType[tagInfo.type] + postfix;
            }
            return token.type = tokenType, token.markup = tagInfo.markup, token.nesting = tagInfo.isClosing ? -1 : 1, 
            tagInfo.isSelfClosing && (token.nesting = 0), token.tag = tagInfo.tagName || "", 
            token;
        }
        function wrapBareInlineToken(token, parentType) {
            if (token.block) return [ token ];
            var takesBlockChildren = [ TagType.blockquote, TagType.pre ], inlineToken = new token_default.a("inline", "", 0);
            return inlineToken.children = [ token ], !parentType || takesBlockChildren.includes(parentType) ? [ new token_default.a("paragraph_open", "p", 1), inlineToken, new token_default.a("paragraph_close", "p", -1) ] : [ inlineToken ];
        }
        function sanitizeHtmlInlineToken(token) {
            var tagInfo = null;
            return "html_inline" === token.type ? tagInfo = getTagInfo(token.content) : token.children && token.children.length && (token.children = sanitizeInlineHtmlTokens(token.children)), 
            tagInfo ? (tagInfo.isBlock || (token = tagInfoToToken(tagInfo, token)).attrSet("inline_html", "true"), 
            token) : token;
        }
        function sanitizeInlineHtmlTokens(tokens) {
            for (var i = 0, len = (tokens = tokens.map(sanitizeHtmlInlineToken).filter((function(t) {
                return !!t;
            }))).length; i < len; i++) {
                var openToken = tokens[i];
                if (openToken.attrGet("inline_html")) if (!openToken.type.includes("_close") || openToken.attrGet("paired")) {
                    if (openToken.type.includes("_open")) {
                        for (var hasClosingTag = !1, j = i + 1, len2 = tokens.length; j < len2; j++) {
                            var closeToken = tokens[j];
                            if (closeToken && closeToken.attrGet("inline_html") && !closeToken.attrGet("paired") && openToken.tag === closeToken.tag) {
                                hasClosingTag = !0, closeToken.attrSet("paired", "true");
                                break;
                            }
                        }
                        hasClosingTag || (openToken.type = "html_inline");
                    }
                } else openToken.type = "html_inline";
            }
            return tokens;
        }
        function sanitizeHtmlString(content) {
            var _a, tags = null === (_a = content.match(/(<\/?[a-z]+.*?>)/gi)) || void 0 === _a ? void 0 : _a.map((function(t) {
                return {
                    match: t,
                    tagInfo: getTagInfo(t)
                };
            }));
            if (!tags || !tags.length) return content;
            var newContent = content;
            return tags.forEach((function(t) {
                var toReplaceWith;
                if (t.tagInfo.type === TagType.unknown) toReplaceWith = ""; else if (t.tagInfo.type === TagType.image) {
                    var attrs = t.match.match(/((width|height|src|alt|title)=["'].+?["'])/g), insert = t.tagInfo.markup;
                    (null == attrs ? void 0 : attrs.length) && (insert = insert.replace("<img", "<img " + attrs.join(" "))), 
                    toReplaceWith = insert;
                } else if (t.tagInfo.type === TagType.link) {
                    attrs = t.match.match(/((href|title)=["'].+?["'])/g), insert = t.tagInfo.markup;
                    (null == attrs ? void 0 : attrs.length) && (insert = insert.replace("<a", "<a " + attrs.join(" "))), 
                    toReplaceWith = insert;
                } else toReplaceWith = t.tagInfo.markup;
                newContent = newContent.replace(t.match, toReplaceWith);
            })), newContent;
        }
        function sanitizeSimpleHtmlBlockTokens(tokens) {
            var retTokens = [];
            return tokens.forEach((function(token) {
                var _a, parsedInfo = null;
                if ("html_block" === token.type ? parsedInfo = function(token) {
                    var content = token.content, matches = /^(?:(<[a-z0-9]+.*?>)([^<>]+?)(<\/[a-z0-9]+>))$|^(<[a-z0-9]+(?:\s.+?)?\s?\/?>)$/i.exec(content);
                    if (!matches) return null;
                    var tagInfo = [], isBlock = !1;
                    if (matches[4]) {
                        var info = getTagInfo(content);
                        info.type !== TagType.unknown && (isBlock = info.isBlock, tagInfo.push(info));
                    } else {
                        var openTag = getTagInfo(matches[1]), text = matches[2], closeTag = getTagInfo(matches[3]);
                        openTag.type !== TagType.unknown && closeTag.type !== TagType.unknown && openTag.type === closeTag.type && (isBlock = openTag.isBlock, 
                        tagInfo.push(openTag), tagInfo.push(text), tagInfo.push(closeTag));
                    }
                    return tagInfo.length > 0 ? {
                        isBlock: isBlock,
                        tagInfo: tagInfo
                    } : null;
                }(token) : (null === (_a = token.children) || void 0 === _a ? void 0 : _a.length) && (token.children = sanitizeSimpleHtmlBlockTokens(token.children)), 
                parsedInfo && parsedInfo.tagInfo.length) {
                    var newTokens = [];
                    parsedInfo.tagInfo.forEach((function(tag, i, arr) {
                        var tok, lastInfo = arr[i - 1], isInline = "string" == typeof tag || !tag.isBlock;
                        if ("string" == typeof tag) {
                            var t = new token_default.a("text", "", 0);
                            t.content = tag, tok = t;
                        } else tok = tagInfoToToken(tag);
                        var wrappedTokens = [ tok ];
                        isInline && (wrappedTokens = wrapBareInlineToken(tok, null == lastInfo ? void 0 : lastInfo.type)), 
                        newTokens.push.apply(newTokens, wrappedTokens);
                    })), retTokens.push.apply(retTokens, newTokens);
                } else retTokens.push(token);
            })), retTokens;
        }
        function sanitizeBlockHtmlTokens(tokens) {
            var retTokens = [];
            return tokens.forEach((function(token) {
                var _a;
                if ((null === (_a = token.children) || void 0 === _a ? void 0 : _a.length) && (token.children = sanitizeBlockHtmlTokens(token.children)), 
                0 === token.type.indexOf("html_block")) if ("html_block" === token.type) {
                    if (token.content = sanitizeHtmlString(token.content), !token.content.trim()) return;
                    if (token.content.includes("<")) retTokens.push(token); else {
                        var textToken = new token_default.a("text", "", 0);
                        textToken.content = token.content;
                        var wrappedToken = wrapBareInlineToken(textToken, null);
                        retTokens.push.apply(retTokens, wrappedToken);
                    }
                } else if ("html_block_container_open" === token.type) {
                    var contentOpen = token.attrGet("contentOpen"), contentClose = token.attrGet("contentClose");
                    token.attrSet("contentOpen", sanitizeHtmlString(contentOpen)), token.attrSet("contentClose", sanitizeHtmlString(contentClose)), 
                    retTokens.push(token);
                } else retTokens.push(token); else retTokens.push(token);
            })), retTokens;
        }
        function mergeSplitBlockHtmlTokens(tokens) {
            var returnTokens = [], splitCount = 0, blockIndexes = tokens.map((function(t, i) {
                var _a, _b, _c, _d;
                if ("html_block" !== t.type) return null;
                var openTags = null !== (_b = null === (_a = t.content.match(/<[a-z]+(\s[a-z0-9\-"'=\s])?>/gi)) || void 0 === _a ? void 0 : _a.length) && void 0 !== _b ? _b : 0, closeTags = null !== (_d = null === (_c = t.content.match(/<\/[a-z]+>/gi)) || void 0 === _c ? void 0 : _c.length) && void 0 !== _d ? _d : 0;
                return openTags > closeTags || openTags < closeTags && splitCount % 2 == 1 ? (splitCount += 1, 
                i) : null;
            })).filter((function(t) {
                return null !== t;
            }));
            blockIndexes.length % 2 == 1 && (blockIndexes = blockIndexes.slice(0, -1));
            var lastOpenToken = null;
            return tokens.forEach((function(t, i) {
                if (t.children && t.children.length && (t.children = mergeSplitBlockHtmlTokens(t.children)), 
                "html_block" === t.type && blockIndexes.includes(i)) {
                    var containerToken = new token_default.a("html_block_container_" + (lastOpenToken ? "close" : "open"), "", lastOpenToken ? -1 : 1);
                    lastOpenToken ? (lastOpenToken.attrSet("contentClose", t.content), lastOpenToken = null, 
                    returnTokens.push(containerToken)) : (containerToken.attrSet("contentOpen", t.content), 
                    lastOpenToken = containerToken, returnTokens.push(containerToken));
                } else returnTokens.push(t);
            })), returnTokens;
        }
        function html(md) {
            md.core.ruler.push("so-sanitize-html", (function(state) {
                return state.tokens = sanitizeInlineHtmlTokens(state.tokens), state.tokens = sanitizeSimpleHtmlBlockTokens(state.tokens), 
                state.tokens = mergeSplitBlockHtmlTokens(state.tokens), state.tokens = sanitizeBlockHtmlTokens(state.tokens), 
                !1;
            }));
        }
        function blockquoteExt(options, state, startLine, endLine, silent) {
            var adjustTab, ch, i, initial, l, lastLineEmpty, lines, nextLine, offset, oldBMarks, oldBSCount, oldIndent, oldParentType, oldSCount, oldTShift, spaceAfterMarker, terminate, terminatorRules, token, wasOutdented, oldLineMax = state.lineMax, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
            if (state.sCount[startLine] - state.blkIndent >= 4) return !1;
            if (62 !== state.src.charCodeAt(pos) || !options.followingCharRegex.test(state.src[pos + 1])) return !1;
            if (pos += options.markup.length, silent) return !0;
            for (initial = offset = state.sCount[startLine] + pos - (state.bMarks[startLine] + state.tShift[startLine]), 
            32 === state.src.charCodeAt(pos) ? (pos++, initial++, offset++, adjustTab = !1, 
            spaceAfterMarker = !0) : 9 === state.src.charCodeAt(pos) ? (spaceAfterMarker = !0, 
            (state.bsCount[startLine] + offset) % 4 == 3 ? (pos++, initial++, offset++, adjustTab = !1) : adjustTab = !0) : spaceAfterMarker = !1, 
            oldBMarks = [ state.bMarks[startLine] ], state.bMarks[startLine] = pos; pos < max && (ch = state.src.charCodeAt(pos), 
            Object(utils.isSpace)(ch)); ) 9 === ch ? offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4 : offset++, 
            pos++;
            for (oldBSCount = [ state.bsCount[startLine] ], state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0), 
            lastLineEmpty = pos >= max, oldSCount = [ state.sCount[startLine] ], state.sCount[startLine] = offset - initial, 
            oldTShift = [ state.tShift[startLine] ], state.tShift[startLine] = pos - state.bMarks[startLine], 
            terminatorRules = state.md.block.ruler.getRules("spoiler"), oldParentType = state.parentType, 
            state.parentType = "spoiler", wasOutdented = !1, nextLine = startLine + 1; nextLine < endLine && (state.sCount[nextLine] < state.blkIndent && (wasOutdented = !0), 
            !((pos = state.bMarks[nextLine] + state.tShift[nextLine]) >= (max = state.eMarks[nextLine]))); nextLine++) if (pos += options.markup.length, 
            62 !== state.src.charCodeAt(pos - options.markup.length) || !options.followingCharRegex.test(state.src[pos - options.markup.length + 1]) || wasOutdented) {
                if (lastLineEmpty) break;
                for (terminate = !1, i = 0, l = terminatorRules.length; i < l; i++) if (terminatorRules[i](state, nextLine, endLine, !0)) {
                    terminate = !0;
                    break;
                }
                if (terminate) {
                    state.lineMax = nextLine, 0 !== state.blkIndent && (oldBMarks.push(state.bMarks[nextLine]), 
                    oldBSCount.push(state.bsCount[nextLine]), oldTShift.push(state.tShift[nextLine]), 
                    oldSCount.push(state.sCount[nextLine]), state.sCount[nextLine] -= state.blkIndent);
                    break;
                }
                oldBMarks.push(state.bMarks[nextLine]), oldBSCount.push(state.bsCount[nextLine]), 
                oldTShift.push(state.tShift[nextLine]), oldSCount.push(state.sCount[nextLine]), 
                state.sCount[nextLine] = -1;
            } else {
                for (initial = offset = state.sCount[nextLine] + pos - (state.bMarks[nextLine] + state.tShift[nextLine]), 
                32 === state.src.charCodeAt(pos) ? (pos++, initial++, offset++, adjustTab = !1, 
                spaceAfterMarker = !0) : 9 === state.src.charCodeAt(pos) ? (spaceAfterMarker = !0, 
                (state.bsCount[nextLine] + offset) % 4 == 3 ? (pos++, initial++, offset++, adjustTab = !1) : adjustTab = !0) : spaceAfterMarker = !1, 
                oldBMarks.push(state.bMarks[nextLine]), state.bMarks[nextLine] = pos; pos < max && (ch = state.src.charCodeAt(pos), 
                Object(utils.isSpace)(ch)); ) 9 === ch ? offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4 : offset++, 
                pos++;
                lastLineEmpty = pos >= max, oldBSCount.push(state.bsCount[nextLine]), state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0), 
                oldSCount.push(state.sCount[nextLine]), state.sCount[nextLine] = offset - initial, 
                oldTShift.push(state.tShift[nextLine]), state.tShift[nextLine] = pos - state.bMarks[nextLine];
            }
            for (oldIndent = state.blkIndent, state.blkIndent = 0, (token = state.push(options.name + "_open", options.name, 1)).markup = options.markup, 
            token.map = lines = [ startLine, 0 ], state.md.block.tokenize(state, startLine, nextLine), 
            (token = state.push(options.name + "_close", options.name, -1)).markup = options.markup, 
            state.lineMax = oldLineMax, state.parentType = oldParentType, lines[1] = state.line, 
            i = 0; i < oldTShift.length; i++) state.bMarks[i + startLine] = oldBMarks[i], state.tShift[i + startLine] = oldTShift[i], 
            state.sCount[i + startLine] = oldSCount[i], state.bsCount[i + startLine] = oldBSCount[i];
            return state.blkIndent = oldIndent, !0;
        }
        function spoilerFn(state, startLine, endLine, silent) {
            return blockquoteExt({
                followingCharRegex: /!/,
                markup: ">!",
                name: "spoiler"
            }, state, startLine, endLine, silent);
        }
        function blockquoteFn(state, startLine, endLine, silent) {
            return blockquoteExt({
                followingCharRegex: /[^!]/,
                markup: ">",
                name: "blockquote"
            }, state, startLine, endLine, silent);
        }
        function spoiler(md) {
            md.block.ruler.__rules__.forEach((function(r) {
                var bqIndex = r.alt.indexOf("blockquote");
                bqIndex > -1 && r.alt.splice(bqIndex, 0, "spoiler");
            })), md.block.ruler.before("blockquote", "spoiler", spoilerFn, {
                alt: [ "paragraph", "reference", "spoiler", "blockquote", "list" ]
            }), md.block.ruler.at("blockquote", blockquoteFn, {
                alt: [ "paragraph", "reference", "spoiler", "blockquote", "list" ]
            });
        }
        function langCommentParser(matcher, tokenType, state, startLine, endLine, silent) {
            var pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
            if (60 !== state.src.charCodeAt(pos) || pos + 2 >= max) return !1;
            if (33 !== state.src.charCodeAt(pos + 1)) return !1;
            var lineText = state.src.slice(pos, max), matches = matcher.exec(lineText);
            if (!(null == matches ? void 0 : matches.length)) return !1;
            if (silent) return !0;
            var nextLine = startLine + 1;
            state.line = nextLine;
            var newToken = state.push(tokenType, "", 0);
            return newToken.map = [ startLine, nextLine ], newToken.content = state.getLines(startLine, nextLine, state.blkIndent, !0), 
            newToken.attrSet("language", matches[1]), !0;
        }
        function stack_language_comment(state, startLine, endLine, silent) {
            return langCommentParser(/<!-- language: lang-(.+?) -->/, "stack_language_comment", state, startLine, 0, silent);
        }
        function stack_lang_all(state, startLine, endLine, silent) {
            return langCommentParser(/<!-- language-all: lang-(.+?) -->/, "stack_language_all_comment", state, startLine, 0, silent);
        }
        function sanitizeCodeBlockLangs(state) {
            for (var currentLanguageAll = null, _i = 0, _a = state.tokens; _i < _a.length; _i++) {
                var token = _a[_i];
                if ("stack_language_all_comment" === token.type) {
                    currentLanguageAll = token.attrGet("language");
                    break;
                }
            }
            for (var i = 0, len = state.tokens.length; i < len; i++) {
                var currentBlock = state.tokens[i], nextBlock = state.tokens[i + 1];
                if ("stack_language_comment" === currentBlock.type && "code_block" === (null == nextBlock ? void 0 : nextBlock.type)) {
                    var language = currentBlock.attrGet("language");
                    nextBlock.info = language;
                } else "stack_language_all_comment" === currentBlock.type ? currentLanguageAll = currentBlock.attrGet("language") : "code_block" === currentBlock.type && !currentBlock.info && currentLanguageAll && (currentBlock.info = currentLanguageAll);
            }
            return state.tokens = state.tokens.filter((function(t) {
                return !t.type.startsWith("stack_language");
            })), !1;
        }
        function stackLanguageComments(md) {
            md.block.ruler.before("html_block", "stack_language_comment", stack_language_comment), 
            md.block.ruler.before("html_block", "stack_language_all_comment", stack_lang_all), 
            md.core.ruler.push("so-sanitize-code-lang", sanitizeCodeBlockLangs);
        }
        function tag_link(state, silent) {
            if (91 !== state.src.charCodeAt(state.pos)) return !1;
            if ("[tag:" !== state.src.slice(state.pos, state.pos + 5) && "[meta-tag:" !== state.src.slice(state.pos, state.pos + 10)) return !1;
            var labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, !1);
            if (labelEnd < 0) return !1;
            if (!silent) {
                var totalContent = state.src.slice(state.pos, labelEnd + 1), isMeta = "[meta-tag:" === totalContent.slice(0, 10), tagName = totalContent.slice(isMeta ? 10 : 5, -1), token = state.push("tag_link_open", "a", 1);
                token.attrSet("tagName", tagName), token.attrSet("tagType", isMeta ? "meta-tag" : "tag"), 
                token.content = totalContent, (token = state.push("text", "", 0)).content = tagName, 
                token = state.push("tag_link_close", "a", -1);
            }
            return state.pos = labelEnd + 1, !0;
        }
        function tagLinks(md) {
            md.inline.ruler.push("tag_link", tag_link);
        }
        var markdown_parser_extends = function() {
            var extendStatics = function(d, b) {
                return (extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
                })(d, b);
            };
            return function(d, b) {
                function __() {
                    this.constructor = d;
                }
                extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
                new __);
            };
        }(), markdown_parser_assign = function() {
            return (markdown_parser_assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
            }).apply(this, arguments);
        }, customMarkdownParserTokens = markdown_parser_assign(markdown_parser_assign({}, defaultMarkdownParser.tokens), {
            pre: {
                block: "pre"
            },
            kbd: {
                mark: "kbd"
            },
            sup: {
                mark: "sup"
            },
            sub: {
                mark: "sub"
            },
            html_inline: {
                node: "html_inline",
                getAttrs: function(token) {
                    return {
                        content: token.content
                    };
                }
            },
            html_block: {
                node: "html_block",
                getAttrs: function(token) {
                    return {
                        content: token.content
                    };
                }
            },
            html_block_container: {
                block: "html_block_container",
                getAttrs: function(token) {
                    return {
                        contentOpen: token.attrGet("contentOpen"),
                        contentClose: token.attrGet("contentClose")
                    };
                }
            },
            stack_language_comment: {
                ignore: !0
            },
            stack_language_all_comment: {
                ignore: !0
            },
            code_block: {
                block: "code_block",
                getAttrs: function(tok) {
                    return {
                        params: tok.info || ""
                    };
                }
            },
            s: {
                mark: "strike"
            },
            table: {
                block: "table"
            },
            thead: {
                block: "table_head"
            },
            tbody: {
                block: "table_body"
            },
            th: {
                block: "table_header",
                getAttrs: function(tok) {
                    return {
                        style: tok.attrGet("style")
                    };
                }
            },
            tr: {
                block: "table_row"
            },
            td: {
                block: "table_cell",
                getAttrs: function(tok) {
                    return {
                        style: tok.attrGet("style")
                    };
                }
            },
            image: {
                node: "image",
                getAttrs: function(tok) {
                    var _a, _b;
                    return {
                        src: tok.attrGet("src"),
                        width: tok.attrGet("width"),
                        height: tok.attrGet("height"),
                        alt: tok.attrGet("alt") || (null === (_b = null === (_a = tok.children) || void 0 === _a ? void 0 : _a[0]) || void 0 === _b ? void 0 : _b.content) || null,
                        title: tok.attrGet("title")
                    };
                }
            },
            tag_link: {
                block: "tagLink",
                getAttrs: function(tok) {
                    return {
                        tagName: tok.attrGet("tagName"),
                        tagType: tok.attrGet("tagType")
                    };
                }
            },
            spoiler: {
                block: "spoiler"
            }
        });
        Object.keys(customMarkdownParserTokens).forEach((function(k) {
            var token = customMarkdownParserTokens[k];
            if (token.getAttrs) {
                var origGetAttrs_1 = token.getAttrs.bind(token);
                token.getAttrs = function(tok) {
                    var attrs = origGetAttrs_1(tok);
                    return attrs.markup = tok.markup, attrs;
                };
            } else token.getAttrs = function(tok) {
                return {
                    markup: tok.markup
                };
            };
        }));
        var SOMarkdownParser = function(_super) {
            function SOMarkdownParser(schema, tokenizer, tokens) {
                var _this = _super.call(this, schema, tokenizer, tokens) || this;
                return _this.tokenHandlers.softbreak = function(state) {
                    var nodeType = _this.schema.nodes.softbreak;
                    state.openNode(nodeType, {}), state.addText(" "), state.closeNode();
                }, _this;
            }
            return markdown_parser_extends(SOMarkdownParser, _super), SOMarkdownParser;
        }(MarkdownParser), markdown_parser_SOMarkdownIt = function(_super) {
            function SOMarkdownIt(presetName, options) {
                return _super.call(this, presetName, options) || this;
            }
            return markdown_parser_extends(SOMarkdownIt, _super), SOMarkdownIt.prototype.parse = function(src, env) {
                var parsed = _super.prototype.parse.call(this, src, env);
                return log("Sanitized markdown token tree", parsed), parsed;
            }, SOMarkdownIt;
        }(lib_default.a);
        var link_tooltip_extends = function() {
            var extendStatics = function(d, b) {
                return (extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
                })(d, b);
            };
            return function(d, b) {
                function __() {
                    this.constructor = d;
                }
                extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
                new __);
            };
        }(), link_tooltip_LinkTooltip = function() {
            function LinkTooltip(state) {
                var _this = this, tooltipString = '<div class="s-popover is-visible p4 w-auto wmx-initial wmn-initial js-link-tooltip"\n    id="link-tooltip-popover"\n    role="menu">\n    <div class="s-popover--arrow"></div>\n    <div class="grid ai-center">\n        <a href="' + this.href + '"\n            class="wmx3 grid--cell fs-body1 fw-normal d-inline-block truncate ml8 mr4"\n            target="_blank"\n            rel="nofollow noreferrer">' + this.href + '</a>\n        <input type="text"\n                class="s-input s-input__sm d-none wmn2 ml2 mr4 js-link-tooltip-input"\n                autocomplete="off"\n                name="link" value="' + this.href + '" />\n        <button type="button"\n                class="grid--cell s-btn mr4 js-link-tooltip-edit"\n                title="Edit link"><span class="svg-icon icon-bg iconPencilSm"></span></button>\n        <button type="button"\n                class="grid--cell s-btn d-none js-link-tooltip-apply"\n                title="Apply new link">Apply</button>\n        <button type="button"\n                class="grid--cell s-btn js-link-tooltip-remove"\n                title="Remove link"><span class="svg-icon icon-bg iconTrashSm"></span></button>\n    </div>\n</div>';
                this.content = document.createElement("span"), this.content.className = "w0", this.content.setAttribute("aria-controls", "link-tooltip-popover"), 
                this.content.setAttribute("data-controller", "s-popover"), this.content.setAttribute("data-s-popover-placement", "bottom"), 
                this.content.innerHTML = tooltipString, this.content.addEventListener("s-popover:hide", (function(e) {
                    e.preventDefault();
                }));
                var applyListener = function(e) {
                    _this.applyListener.call(_this, e);
                };
                this.input.addEventListener("keydown", (function(e) {
                    "Enter" === e.key && (e.stopPropagation(), e.preventDefault(), applyListener(e));
                })), this.bindElementInteraction(this.applyButton, applyListener), this.bindElementInteraction(this.removeButton, (function(e) {
                    _this.removeListener.call(_this, e);
                })), this.bindElementInteraction(this.editButton, (function() {
                    _this.showEditMode(_this.href);
                })), this.editing = !1, this.update(state);
            }
            return Object.defineProperty(LinkTooltip.prototype, "editButton", {
                get: function() {
                    return this.content.querySelector(".js-link-tooltip-edit");
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(LinkTooltip.prototype, "applyButton", {
                get: function() {
                    return this.content.querySelector(".js-link-tooltip-apply");
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(LinkTooltip.prototype, "removeButton", {
                get: function() {
                    return this.content.querySelector(".js-link-tooltip-remove");
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(LinkTooltip.prototype, "link", {
                get: function() {
                    return this.content.querySelector("a");
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(LinkTooltip.prototype, "input", {
                get: function() {
                    return this.content.querySelector(".js-link-tooltip-input");
                },
                enumerable: !1,
                configurable: !0
            }), LinkTooltip.prototype.bindElementInteraction = function(element, callback) {
                var _this = this;
                element.addEventListener("mousedown", (function(e) {
                    e.stopPropagation(), e.preventDefault(), callback.call(_this, e);
                })), element.addEventListener("keydown", (function(e) {
                    "Tab" !== e.key && (e.stopPropagation(), e.preventDefault(), "Enter" !== e.key && " " !== e.key || callback.call(_this, e));
                }));
            }, LinkTooltip.prototype.update = function(state) {
                if (this.isLink(state)) {
                    var linkMarks = this.findMarksInSelection(state);
                    if (linkMarks.length > 0) {
                        this.href = linkMarks[0].attrs.href;
                        var link = this.link;
                        link.href = link.title = link.innerText = this.href;
                    }
                    toggleMark(richTextSchema.marks.link)(state) && this.href && this.hideEditMode(), 
                    (this.editing || "" === this.href) && this.showEditMode(this.href);
                }
            }, LinkTooltip.prototype.getDecorations = function(tr, value, oldState, newState) {
                var _this = this;
                if ("forceHide" in value && value.forceHide) return prosemirror_view_dist_index_es.DecorationSet.empty;
                if (!this.findMarksInSelection(newState).length) return prosemirror_view_dist_index_es.DecorationSet.empty;
                this.update(newState);
                var decoration = prosemirror_view_dist_index_es.Decoration.widget(newState.selection.from, (function(view) {
                    return _this.updateEventListeners(view), _this.content;
                }), {
                    side: -1,
                    ignoreSelection: !0,
                    stopEvent: function() {
                        return !0;
                    }
                });
                return prosemirror_view_dist_index_es.DecorationSet.create(newState.doc, [ decoration ]);
            }, LinkTooltip.prototype.hasFocus = function(e) {
                return this.content.contains(e.relatedTarget);
            }, LinkTooltip.prototype.isLink = function(state) {
                var _a = state.selection, from = _a.from, $from = _a.$from, to = _a.to;
                return _a.empty ? void 0 !== richTextSchema.marks.link.isInSet(state.storedMarks || $from.marks()) : state.doc.rangeHasMark(from, to, richTextSchema.marks.link);
            }, LinkTooltip.prototype.showEditMode = function(url) {
                var input = this.input;
                input.value = url || "https://", input.classList.remove("d-none"), input.select(), 
                this.applyButton.classList.remove("d-none"), this.editButton.classList.add("d-none"), 
                this.link.classList.add("d-none"), input.focus();
            }, LinkTooltip.prototype.hideEditMode = function() {
                this.editButton.classList.remove("d-none"), this.link.classList.remove("d-none"), 
                this.input.classList.add("d-none"), this.applyButton.classList.add("d-none");
            }, LinkTooltip.prototype.expandSelection = function(state, tr) {
                var expanded = this.linkAround(state);
                return tr = tr.setSelection(prosemirror_state_dist_index_es.TextSelection.create(tr.doc, expanded.from, expanded.to));
            }, LinkTooltip.prototype.linkAround = function(state) {
                var $pos = state.selection.$from, start = $pos.parent.childAfter($pos.parentOffset);
                if (start.node) {
                    var link = start.node.marks.find((function(mark) {
                        return mark.type === state.schema.marks.link;
                    }));
                    if (link) {
                        for (var startIndex = $pos.index(), startPos = $pos.start() + start.offset; startIndex > 0 && link.isInSet($pos.parent.child(startIndex - 1).marks); ) startIndex -= 1, 
                        startPos -= $pos.parent.child(startIndex).nodeSize;
                        for (var endIndex = $pos.indexAfter(), endPos = startPos + start.node.nodeSize; endIndex < $pos.parent.childCount && link.isInSet($pos.parent.child(endIndex).marks); ) endPos += $pos.parent.child(endIndex).nodeSize, 
                        endIndex += 1;
                        return {
                            from: startPos,
                            to: endPos
                        };
                    }
                }
            }, LinkTooltip.prototype.findMarksInSelection = function(state) {
                var linkMarks = [], _a = state.selection, to = _a.to, from = _a.from, $from = _a.$from;
                if (_a.empty) return $from.marks().filter((function(mark) {
                    return mark.type === richTextSchema.marks.link;
                }));
                to > from && state.doc.nodesBetween(from, to, (function(node) {
                    linkMarks.push(node.marks.filter((function(mark) {
                        return mark.type === richTextSchema.marks.link;
                    })));
                }));
                var returnValue = [];
                return returnValue.concat.apply(returnValue, linkMarks);
            }, LinkTooltip.prototype.updateEventListeners = function(view) {
                var _this = this;
                this.removeListener = function() {
                    var state = view.state;
                    view.state.selection.empty && (view.dispatch(_this.expandSelection(state, view.state.tr)), 
                    state = view.state), toggleMark(richTextSchema.marks.link)(state, view.dispatch.bind(view));
                }, this.applyListener = function() {
                    var link = _this.link, input = _this.input, _a = view.state.selection, from = _a.from, to = _a.to;
                    if (_this.editing = !1, view.focus(), link.href !== input.value) {
                        if (link.href = link.title = link.innerText = input.value, view.state.selection.empty) {
                            var expanded = _this.linkAround(view.state);
                            from = expanded.from, to = expanded.to;
                        }
                        var tr = view.state.tr.addMark(from, to, richTextSchema.marks.link.create({
                            href: _this.link.href
                        }));
                        view.dispatch(tr);
                    } else _this.hideEditMode();
                };
            }, LinkTooltip;
        }(), LINK_TOOLTIP_KEY = new (function(_super) {
            function LinkTooltipPluginKey() {
                return _super.call(this, link_tooltip_LinkTooltip.name) || this;
            }
            return link_tooltip_extends(LinkTooltipPluginKey, _super), LinkTooltipPluginKey.prototype.setEditMode = function(isEditing, state, tr) {
                var meta = this.getState(state);
                return meta.editing = isEditing, this.setMeta(tr, meta);
            }, LinkTooltipPluginKey.prototype.forceHide = function(state, dispatch) {
                var meta = this.getState(state);
                meta.decorations !== prosemirror_view_dist_index_es.DecorationSet.empty && (meta.forceHide = !0, 
                dispatch(this.setMeta(state.tr, meta)));
            }, LinkTooltipPluginKey;
        }(StatefulPluginKey)), linkTooltipPlugin = new StatefulPlugin({
            key: LINK_TOOLTIP_KEY,
            state: {
                init: function(_, instance) {
                    return {
                        linkTooltip: new link_tooltip_LinkTooltip(instance),
                        decorations: prosemirror_view_dist_index_es.DecorationSet.empty
                    };
                },
                apply: function(tr, value, oldState, newState) {
                    var meta = this.getMeta(tr) || value;
                    "forceHide" in meta && (value.forceHide = meta.forceHide), value.linkTooltip.editing = "editing" in meta && meta.editing;
                    var decorations = value.linkTooltip.getDecorations(tr, value, oldState, newState);
                    return {
                        linkTooltip: value.linkTooltip,
                        decorations: decorations
                    };
                }
            },
            props: {
                decorations: function(state) {
                    return this.getState(state).decorations;
                },
                handleDOMEvents: {
                    blur: function(view, e) {
                        var linkTooltip = LINK_TOOLTIP_KEY.getState(view.state).linkTooltip;
                        return view.hasFocus() || linkTooltip.hasFocus(e) || LINK_TOOLTIP_KEY.forceHide(view.state, view.dispatch.bind(view)), 
                        !1;
                    }
                }
            }
        });
        function commands_toggleWrapIn(nodeType) {
            var nodeCheck = nodeTypeActive(nodeType), wrapInCommand = wrapIn(nodeType);
            return function(state, dispatch) {
                if (!nodeCheck(state)) return wrapInCommand(state, dispatch);
                var _a = state.selection, $from = _a.$from, $to = _a.$to, range = $from.blockRange($to), target = range && Object(index_es.j)(range);
                return null != target && (dispatch && dispatch(state.tr.lift(range, target)), !0);
            };
        }
        var setToTextCommand = setBlockType(richTextSchema.nodes.paragraph);
        function toggleBlockType(nodeType, attrs) {
            var nodeCheck = nodeTypeActive(nodeType), setBlockTypeCommand = setBlockType(nodeType, attrs);
            return function(state, dispatch) {
                return nodeCheck(state) ? setToTextCommand(state, dispatch) : setBlockTypeCommand(state, dispatch);
            };
        }
        function commands_insertHorizontalRuleCommand(state, dispatch) {
            return !inTable(state.selection) && (dispatch && dispatch(state.tr.replaceSelectionWith(richTextSchema.nodes.horizontal_rule.create())), 
            !0);
        }
        function inTable(selection) {
            return tableNodes.includes(selection.$head.parent.type);
        }
        function inTableHead(selection) {
            return selection.$head.parent.type === richTextSchema.nodes.table_header;
        }
        var exitBlockCommand = chainCommands(exitCode, (function(state, dispatch) {
            return dispatch(state.tr.replaceSelectionWith(richTextSchema.nodes.hard_break.create()).scrollIntoView()), 
            !0;
        }));
        function moveSelectionAfterTableCommand(state, dispatch) {
            return exitTableCommand(state, dispatch, !1);
        }
        function exitTableCommand(state, dispatch, before) {
            if (void 0 === before && (before = !1), !inTable(state.selection)) return !1;
            if (dispatch) {
                var type = richTextSchema.nodes.paragraph, newPosition = before ? state.selection.$head.before(-3) - 1 : state.selection.$head.after(-3) + 1, tr = state.tr;
                try {
                    tr.doc.resolve(newPosition);
                } catch (e) {
                    var insertionPosition = before ? newPosition + 1 : newPosition - 1;
                    tr.insert(insertionPosition, type.create());
                }
                tr.setSelection(prosemirror_state_dist_index_es.Selection.near(tr.doc.resolve(Math.max(0, newPosition)), 1)), 
                dispatch(tr.scrollIntoView());
            }
            return !0;
        }
        function insertTableRowCommand(before, state, dispatch) {
            if (!inTable(state.selection) || inTableHead(state.selection)) return !1;
            if (dispatch) {
                var $head = state.selection.$head, tableRowNode = $head.node(-1), newTableCells_1 = [];
                tableRowNode.forEach((function(cell) {
                    newTableCells_1.push(richTextSchema.nodes.table_cell.create(cell.attrs));
                }));
                var newTableRow = richTextSchema.nodes.table_row.create(null, newTableCells_1), positionToInsert = before ? $head.before(-1) : $head.after(-1);
                dispatch(state.tr.insert(positionToInsert, newTableRow).scrollIntoView());
            }
            return !0;
        }
        function insertTableColumnCommand(before, state, dispatch) {
            if (!inTable(state.selection)) return !1;
            if (dispatch) {
                var targetCell_1, $head = state.selection.$head, selectedTable_1 = $head.node(-3), selectedCellIndex_1 = $head.index(-1), newCells_1 = [], tableOffset_1 = $head.start(-3);
                selectedTable_1.descendants((function(node, pos) {
                    if (!tableNodes.includes(node.type)) return !1;
                    if (node.type === richTextSchema.nodes.table_row && (targetCell_1 = node.child(selectedCellIndex_1)), 
                    targetCell_1 && node == targetCell_1) {
                        var position = before ? selectedTable_1.resolve(pos + 1).before() : selectedTable_1.resolve(pos + 1).after();
                        newCells_1.push([ node.type, tableOffset_1 + position ]);
                    }
                }));
                for (var tr = state.tr, _i = 0, _a = newCells_1.reverse(); _i < _a.length; _i++) {
                    var newCell = _a[_i];
                    tr = tr.insert(newCell[1], newCell[0].create());
                }
                dispatch(tr.scrollIntoView());
            }
            return !0;
        }
        function removeRowCommand(state, dispatch) {
            if (!inTable(state.selection) || inTableHead(state.selection)) return !1;
            if (dispatch) {
                var tr = state.tr, $head = state.selection.$head;
                if (1 === $head.node(-2).childCount) return removeTableCommand(state, dispatch);
                tr.delete($head.start(-1) - 1, $head.end(-1) + 1), dispatch(tr.scrollIntoView());
            }
            return !0;
        }
        function removeTableContentCommand(state, dispatch) {
            if (!inTable(state.selection)) return !1;
            var _a = state.selection, $from = _a.$from, $to = _a.$to;
            return $from.start(-3) >= $from.pos - 3 && $from.end(-3) <= $to.pos + 3 ? removeTableCommand(state, dispatch) : $from.start(-1) >= $from.pos - 1 && $from.end(-1) <= $to.pos + 1 ? removeRowCommand(state, dispatch) : !$from.sameParent($to);
        }
        function moveToCellCommand(state, dispatch, direction) {
            if (-1 !== direction && 1 !== direction) return !1;
            if (!inTable(state.selection)) return !1;
            for (var $head = state.selection.$head, level = -1; level > -4; level--) {
                var parentIndex = $head.index(level), parent_1 = $head.node(level);
                if (parent_1) {
                    if (parent_1.maybeChild(parentIndex + direction)) {
                        var newPos = -1 === direction ? $head.start() - -1 * level * 2 : $head.end() + -1 * level * 2;
                        return dispatch(state.tr.setSelection(prosemirror_state_dist_index_es.Selection.near(state.tr.doc.resolve(newPos), 1)).scrollIntoView()), 
                        !0;
                    }
                }
            }
            return 1 === direction ? moveSelectionAfterTableCommand(state, dispatch) : function(state, dispatch) {
                return exitTableCommand(state, dispatch, !0);
            }(state, dispatch);
        }
        function moveToNextCellCommand(state, dispatch) {
            return moveToCellCommand(state, dispatch, 1);
        }
        function removeTableCommand(state, dispatch) {
            var $head = state.selection.$head;
            return dispatch && dispatch(state.tr.deleteRange($head.start(-3) - 1, $head.end(-3) + 1)), 
            !0;
        }
        function commands_insertTableCommand(state, dispatch) {
            if (!setBlockType(richTextSchema.nodes.table)(state)) return !1;
            if (!dispatch) return !0;
            var headerIndex = 1, cellIndex = 1, cell = function() {
                return richTextSchema.nodes.table_cell.create(null, richTextSchema.text("cell " + cellIndex++));
            }, header = function() {
                return richTextSchema.nodes.table_header.create(null, richTextSchema.text("header " + headerIndex++));
            }, row = function() {
                for (var cells = [], _i = 0; _i < arguments.length; _i++) cells[_i] = arguments[_i];
                return richTextSchema.nodes.table_row.create(null, cells);
            }, t = function(head, body) {
                return richTextSchema.nodes.table.createChecked(null, [ head, body ]);
            }(function(row) {
                return richTextSchema.nodes.table_head.create(null, row);
            }(row(header(), header(), header())), function() {
                for (var rows = [], _i = 0; _i < arguments.length; _i++) rows[_i] = arguments[_i];
                return richTextSchema.nodes.table_body.create(null, rows);
            }(row(cell(), cell(), cell()), row(cell(), cell(), cell()), row(cell(), cell(), cell()))), tr = state.tr.replaceSelectionWith(t);
            dispatch(tr.scrollIntoView());
            var newState = state.apply(tr), nodeAfterTable = newState.doc.nodeAt(newState.tr.selection.to - 1);
            return nodeAfterTable && nodeAfterTable.type === richTextSchema.nodes.text && dispatch((tr = newState.tr.insert(newState.tr.selection.to, richTextSchema.nodes.paragraph.create(null))).scrollIntoView()), 
            !0;
        }
        function commands_insertImageCommand(state, dispatch, view) {
            return !!imageUploaderEnabled(view) && (!dispatch || (showImageUploader(view), !0));
        }
        function commands_insertLinkCommand(state, dispatch, view) {
            var _a, _b;
            if (state.selection.empty) return !1;
            if (dispatch) {
                var selectedText = null !== (_b = null === (_a = state.selection.content().content.firstChild) || void 0 === _a ? void 0 : _a.textContent) && void 0 !== _b ? _b : null, linkMatch = /^http(s)?:\/\/\S+$/.exec(selectedText), linkUrl = (null == linkMatch ? void 0 : linkMatch.length) > 0 ? linkMatch[0] : "";
                if (toggleMark(richTextSchema.marks.link, {
                    href: linkUrl
                })(state, dispatch)) {
                    var tr = LINK_TOOLTIP_KEY.setEditMode(!0, state, view.state.tr);
                    view.dispatch(tr);
                }
            }
            return !0;
        }
        function nodeTypeActive(nodeType) {
            return function(state) {
                var _a = state.selection, from = _a.from, to = _a.to, isNodeType = !1;
                return state.doc.nodesBetween(from, to, (function(node) {
                    return !(isNodeType = node.type.name === nodeType.name);
                })), isNodeType;
            };
        }
        function markActive(mark) {
            return function(state) {
                var _a = state.selection, from = _a.from, $from = _a.$from, to = _a.to;
                return _a.empty ? !!mark.isInSet(state.storedMarks || $from.marks()) : state.doc.rangeHasMark(from, to, mark);
            };
        }
        var commands_createMenu = function(options) {
            var _a;
            return createMenuPlugin([ {
                key: "toggleHeading",
                command: toggleBlockType(richTextSchema.nodes.heading, {
                    level: 1
                }),
                dom: makeMenuIcon("Header", "Heading", "heading-btn"),
                active: nodeTypeActive(richTextSchema.nodes.heading)
            }, {
                key: "toggleBold",
                command: toggleMark(richTextSchema.marks.strong),
                dom: makeMenuIcon("Bold", "Bold", "bold-btn"),
                active: markActive(richTextSchema.marks.strong)
            }, {
                key: "toggleEmphasis",
                command: toggleMark(richTextSchema.marks.em),
                dom: makeMenuIcon("Italic", "Italic", "italic-btn"),
                active: markActive(richTextSchema.marks.em)
            }, {
                key: "toggleCode",
                command: toggleMark(richTextSchema.marks.code),
                dom: makeMenuIcon("Code", "Inline code", "code-btn"),
                active: markActive(richTextSchema.marks.code)
            }, addIf({
                key: "toggleStrike",
                command: toggleMark(richTextSchema.marks.strike),
                dom: makeMenuIcon("Strikethrough", "Strikethrough", "strike-btn"),
                active: markActive(richTextSchema.marks.strike)
            }, options.parserFeatures.extraEmphasis), makeMenuSpacerEntry(), {
                key: "toggleLink",
                command: commands_insertLinkCommand,
                dom: makeMenuIcon("Link", "Link selection", "insert-link-btn")
            }, {
                key: "toggleBlockquote",
                command: commands_toggleWrapIn(richTextSchema.nodes.blockquote),
                dom: makeMenuIcon("Quote", "Blockquote", "blockquote-btn"),
                active: nodeTypeActive(richTextSchema.nodes.blockquote)
            }, {
                key: "toggleCodeblock",
                command: toggleBlockType(richTextSchema.nodes.code_block),
                dom: makeMenuIcon("Codeblock", "Code block", "code-block-btn"),
                active: nodeTypeActive(richTextSchema.nodes.code_block)
            }, addIf({
                key: "insertImage",
                command: commands_insertImageCommand,
                dom: makeMenuIcon("Image", "Image", "insert-image-btn")
            }, !!(null === (_a = options.imageUpload) || void 0 === _a ? void 0 : _a.handler)), addIf({
                key: "insertTable",
                command: commands_insertTableCommand,
                dom: makeMenuIcon("Table", "Table", "insert-table-btn"),
                visible: function(state) {
                    return !inTable(state.selection);
                }
            }, options.parserFeatures.tables), addIf(tableDropdown, options.parserFeatures.tables), makeMenuSpacerEntry(), {
                key: "toggleOrderedList",
                command: commands_toggleWrapIn(richTextSchema.nodes.ordered_list),
                dom: makeMenuIcon("OrderedList", "Numbered list", "numbered-list-btn"),
                active: nodeTypeActive(richTextSchema.nodes.ordered_list)
            }, {
                key: "toggleUnorderedList",
                command: commands_toggleWrapIn(richTextSchema.nodes.bullet_list),
                dom: makeMenuIcon("UnorderedList", "Bulleted list", "bullet-list-btn"),
                active: nodeTypeActive(richTextSchema.nodes.bullet_list)
            }, {
                key: "insertRule",
                command: commands_insertHorizontalRuleCommand,
                dom: makeMenuIcon("HorizontalRule", "Horizontal rule", "horizontal-rule-btn")
            }, makeMenuSpacerEntry((function() {
                return !1;
            }), [ "sm:d-inline-block" ]), {
                key: "undo",
                command: undo,
                dom: makeMenuIcon("Undo", "Undo", "undo-btn", [ "sm:d-inline-block" ]),
                visible: function() {
                    return !1;
                }
            }, {
                key: "redo",
                command: redo,
                dom: makeMenuIcon("Refresh", "Redo", "redo-btn", [ "sm:d-inline-block" ]),
                visible: function() {
                    return !1;
                }
            }, makeMenuSpacerEntry(), makeMenuLinkEntry("Help", "Help", options.editorHelpLink) ], options.menuParentContainer);
        }, tableDropdown = function(svg, title, key, visible) {
            for (var children = [], _i = 4; _i < arguments.length; _i++) children[_i - 4] = arguments[_i];
            var popoverId = "table-button-popover", button = makeMenuIcon(svg, title, key);
            button.classList.add("s-btn", "s-btn__dropdown"), button.setAttribute("aria-controls", popoverId), 
            button.setAttribute("data-controller", "s-popover"), button.setAttribute("data-action", "s-popover#toggle"), 
            button.setAttribute("data-s-popover-toggle-class", "is-selected"), button.dataset.key = key;
            var popover = document.createElement("div");
            popover.className = "s-popover wmn-initial w-auto px0 pt0 pb8", popover.id = popoverId, 
            popover.setAttribute("role", "menu");
            var arrow = document.createElement("div");
            arrow.className = "s-popover--arrow", popover.appendChild(arrow);
            var content = document.createElement("div");
            content.className = "grid fd-column", content.append.apply(content, children.map((function(c) {
                return c.dom;
            }))), popover.appendChild(content);
            var wrapper = document.createElement("div");
            return wrapper.appendChild(button), wrapper.appendChild(popover), {
                key: key,
                dom: wrapper,
                children: children,
                command: function() {
                    return !0;
                },
                visible: visible
            };
        }("Table", "Edit table", "table-dropdown", (function(state) {
            return inTable(state.selection);
        }), dropdownSection("Column", "columnSection"), dropdownItem("Remove column", (function(state, dispatch) {
            if (!inTable(state.selection)) return !1;
            if (dispatch) {
                var $head = state.selection.$head, table_1 = $head.node(-3);
                if (1 === $head.node(-1).childCount) return removeTableCommand(state, dispatch);
                var targetCell_2, cellIndex_1 = $head.index(-1), resolvedPositions_1 = [], tableOffset = $head.start(-3);
                table_1.descendants((function(node, pos) {
                    if (!tableNodes.includes(node.type)) return !1;
                    node.type === richTextSchema.nodes.table_row && (targetCell_2 = node.childCount >= cellIndex_1 + 1 ? node.child(cellIndex_1) : null), 
                    targetCell_2 && node == targetCell_2 && resolvedPositions_1.push(table_1.resolve(pos + 1));
                }));
                for (var tr = state.tr, _i = 0, _a = resolvedPositions_1.reverse(); _i < _a.length; _i++) {
                    var cellPosition = _a[_i];
                    tr = tr.delete(tableOffset + cellPosition.start() - 1, tableOffset + cellPosition.end() + 1);
                }
                dispatch(tr.scrollIntoView());
            }
            return !0;
        }), "remove-column-btn"), dropdownItem("Insert column before", (function(state, dispatch) {
            return insertTableColumnCommand(!0, state, dispatch);
        }), "insert-column-before-btn"), dropdownItem("Insert column after", (function(state, dispatch) {
            return insertTableColumnCommand(!1, state, dispatch);
        }), "insert-column-after-btn"), dropdownSection("Row", "rowSection"), dropdownItem("Remove row", removeRowCommand, "remove-row-btn"), dropdownItem("Insert row before", (function(state, dispatch) {
            return insertTableRowCommand(!0, state, dispatch);
        }), "insert-row-before-btn"), dropdownItem("Insert row after", (function(state, dispatch) {
            return insertTableRowCommand(!1, state, dispatch);
        }), "insert-row-after-btn")), InputRule = function(match, handler) {
            var string;
            this.match = match, this.handler = "string" == typeof handler ? (string = handler, 
            function(state, match, start, end) {
                var insert = string;
                if (match[1]) {
                    var offset = match[0].lastIndexOf(match[1]);
                    insert += match[0].slice(offset + match[1].length);
                    var cutOff = (start += offset) - end;
                    cutOff > 0 && (insert = match[0].slice(offset - cutOff, offset) + insert, start = end);
                }
                return state.tr.insertText(insert, start, end);
            }) : handler;
        };
        function run(view, from, to, text, rules, plugin) {
            if (view.composing) return !1;
            var state = view.state, $from = state.doc.resolve(from);
            if ($from.parent.type.spec.code) return !1;
            for (var textBefore = $from.parent.textBetween(Math.max(0, $from.parentOffset - 500), $from.parentOffset, null, "￼") + text, i = 0; i < rules.length; i++) {
                var match = rules[i].match.exec(textBefore), tr = match && rules[i].handler(state, match, from - (match[0].length - text.length), to);
                if (tr) return view.dispatch(tr.setMeta(plugin, {
                    transform: tr,
                    from: from,
                    to: to,
                    text: text
                })), !0;
            }
            return !1;
        }
        var emDash = new InputRule(/--$/, "—"), ellipsis = new InputRule(/\.\.\.$/, "…"), smartQuotes = [ new InputRule(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "“"), new InputRule(/"$/, "”"), new InputRule(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "‘"), new InputRule(/'$/, "’") ];
        function wrappingInputRule(regexp, nodeType, getAttrs, joinPredicate) {
            return new InputRule(regexp, (function(state, match, start, end) {
                var attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs, tr = state.tr.delete(start, end), range = tr.doc.resolve(start).blockRange(), wrapping = range && Object(index_es.h)(range, nodeType, attrs);
                if (!wrapping) return null;
                tr.wrap(range, wrapping);
                var before = tr.doc.resolve(start - 1).nodeBefore;
                return before && before.type == nodeType && Object(index_es.e)(tr.doc, start - 1) && (!joinPredicate || joinPredicate(match, before)) && tr.join(start - 1), 
                tr;
            }));
        }
        function textblockTypeInputRule(regexp, nodeType, getAttrs) {
            return new InputRule(regexp, (function(state, match, start, end) {
                var $start = state.doc.resolve(start), attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
                return $start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), nodeType) ? state.tr.delete(start, end).setBlockType(start, start, nodeType, attrs) : null;
            }));
        }
        var ref, rules, plugin, inputrules_spreadArrays = function() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            var r = Array(s), k = 0;
            for (i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
            k++) r[k] = a[j];
            return r;
        }, blockquoteInputRule = wrappingInputRule(/^\s*>\s$/, richTextSchema.nodes.blockquote), headingInputRule = textblockTypeInputRule(new RegExp("^(#{1,3})\\s$"), richTextSchema.nodes.heading, (function(match) {
            return {
                level: match[1].length
            };
        })), codeBlockRule = textblockTypeInputRule(/^```$/, richTextSchema.nodes.code_block), unorderedListRule = wrappingInputRule(/^\s*[*+-]\s$/, richTextSchema.nodes.bullet_list), orderedListRule = wrappingInputRule(/^\s*\d\.\s$/, richTextSchema.nodes.ordered_list, (function(match) {
            return {
                order: +match[1]
            };
        }), (function(match, node) {
            return node.childCount + node.attrs.order == +match[1];
        })), richTextInputRules = (ref = {
            rules: inputrules_spreadArrays([ emDash, ellipsis ], smartQuotes, [ blockquoteInputRule, headingInputRule, codeBlockRule, unorderedListRule, orderedListRule ])
        }, rules = ref.rules, plugin = new prosemirror_state_dist_index_es.Plugin({
            state: {
                init: function() {
                    return null;
                },
                apply: function(tr, prev) {
                    var stored = tr.getMeta(this);
                    return stored || (tr.selectionSet || tr.docChanged ? null : prev);
                }
            },
            props: {
                handleTextInput: function(view, from, to, text) {
                    return run(view, from, to, text, rules, plugin);
                },
                handleDOMEvents: {
                    compositionend: function(view) {
                        setTimeout((function() {
                            var $cursor = view.state.selection.$cursor;
                            $cursor && run(view, $cursor.pos, $cursor.pos, "", rules, plugin);
                        }));
                    }
                }
            },
            isInputRules: !0
        }));
        var itemType, richTextKeymap = keymap({
            "Mod-z": undo,
            "Mod-y": redo,
            "Mod-Shift-z": redo,
            Backspace: function(state, dispatch) {
                for (var plugins = state.plugins, i = 0; i < plugins.length; i++) {
                    var plugin = plugins[i], undoable = void 0;
                    if (plugin.spec.isInputRules && (undoable = plugin.getState(state))) {
                        if (dispatch) {
                            for (var tr = state.tr, toUndo = undoable.transform, j = toUndo.steps.length - 1; j >= 0; j--) tr.step(toUndo.steps[j].invert(toUndo.docs[j]));
                            if (undoable.text) {
                                var marks = tr.doc.resolve(undoable.from).marks();
                                tr.replaceWith(undoable.from, undoable.to, state.schema.text(undoable.text, marks));
                            } else tr.delete(undoable.from, undoable.to);
                            dispatch(tr);
                        }
                        return !0;
                    }
                }
                return !1;
            },
            Enter: (itemType = richTextSchema.nodes.list_item, function(state, dispatch) {
                var ref = state.selection, $from = ref.$from, $to = ref.$to, node = ref.node;
                if (node && node.isBlock || $from.depth < 2 || !$from.sameParent($to)) return !1;
                var grandParent = $from.node(-1);
                if (grandParent.type != itemType) return !1;
                if (0 == $from.parent.content.size && $from.node(-1).childCount == $from.indexAfter(-1)) {
                    if (2 == $from.depth || $from.node(-3).type != itemType || $from.index(-2) != $from.node(-2).childCount - 1) return !1;
                    if (dispatch) {
                        for (var wrap = dist_index_es.d.empty, keepItem = $from.index(-1) > 0, d = $from.depth - (keepItem ? 1 : 2); d >= $from.depth - 3; d--) wrap = dist_index_es.d.from($from.node(d).copy(wrap));
                        wrap = wrap.append(dist_index_es.d.from(itemType.createAndFill()));
                        var tr$1 = state.tr.replace($from.before(keepItem ? null : -1), $from.after(-3), new dist_index_es.l(wrap, keepItem ? 3 : 2, 2));
                        tr$1.setSelection(state.selection.constructor.near(tr$1.doc.resolve($from.pos + (keepItem ? 3 : 2)))), 
                        dispatch(tr$1.scrollIntoView());
                    }
                    return !0;
                }
                var nextType = $to.pos == $from.end() ? grandParent.contentMatchAt(0).defaultType : null, tr = state.tr.delete($from.pos, $to.pos), types = nextType && [ null, {
                    type: nextType
                } ];
                return !!Object(index_es.f)(tr.doc, $from.pos, 2, types) && (dispatch && dispatch(tr.split($from.pos, 2, types).scrollIntoView()), 
                !0);
            }),
            Tab: function(itemType) {
                return function(state, dispatch) {
                    var ref = state.selection, $from = ref.$from, $to = ref.$to, range = $from.blockRange($to, (function(node) {
                        return node.childCount && node.firstChild.type == itemType;
                    }));
                    if (!range) return !1;
                    var startIndex = range.startIndex;
                    if (0 == startIndex) return !1;
                    var parent = range.parent, nodeBefore = parent.child(startIndex - 1);
                    if (nodeBefore.type != itemType) return !1;
                    if (dispatch) {
                        var nestedBefore = nodeBefore.lastChild && nodeBefore.lastChild.type == parent.type, inner = dist_index_es.d.from(nestedBefore ? itemType.create() : null), slice = new dist_index_es.l(dist_index_es.d.from(itemType.create(null, dist_index_es.d.from(parent.type.create(null, inner)))), nestedBefore ? 3 : 1, 0), before = range.start, after = range.end;
                        dispatch(state.tr.step(new index_es.b(before - (nestedBefore ? 3 : 1), after, before, after, slice, 1, !0)).scrollIntoView());
                    }
                    return !0;
                };
            }(richTextSchema.nodes.list_item),
            "Shift-Tab": function(itemType) {
                return function(state, dispatch) {
                    var ref = state.selection, $from = ref.$from, $to = ref.$to, range = $from.blockRange($to, (function(node) {
                        return node.childCount && node.firstChild.type == itemType;
                    }));
                    return !!range && (!dispatch || ($from.node(range.depth - 1).type == itemType ? function(state, dispatch, itemType, range) {
                        var tr = state.tr, end = range.end, endOfList = range.$to.end(range.depth);
                        end < endOfList && (tr.step(new index_es.b(end - 1, endOfList, end, endOfList, new dist_index_es.l(dist_index_es.d.from(itemType.create(null, range.parent.copy())), 1, 0), 1, !0)), 
                        range = new dist_index_es.h(tr.doc.resolve(range.$from.pos), tr.doc.resolve(endOfList), range.depth));
                        return dispatch(tr.lift(range, Object(index_es.j)(range)).scrollIntoView()), !0;
                    }(state, dispatch, itemType, range) : function(state, dispatch, range) {
                        for (var tr = state.tr, list = range.parent, pos = range.end, i = range.endIndex - 1, e = range.startIndex; i > e; i--) pos -= list.child(i).nodeSize, 
                        tr.delete(pos - 1, pos + 1);
                        var $start = tr.doc.resolve(range.start), item = $start.nodeAfter, atStart = 0 == range.startIndex, atEnd = range.endIndex == list.childCount, parent = $start.node(-1), indexBefore = $start.index(-1);
                        if (!parent.canReplace(indexBefore + (atStart ? 0 : 1), indexBefore + 1, item.content.append(atEnd ? dist_index_es.d.empty : dist_index_es.d.from(list)))) return !1;
                        var start = $start.pos, end = start + item.nodeSize;
                        return tr.step(new index_es.b(start - (atStart ? 1 : 0), end + (atEnd ? 1 : 0), start + 1, end - 1, new dist_index_es.l((atStart ? dist_index_es.d.empty : dist_index_es.d.from(list.copy(dist_index_es.d.empty))).append(atEnd ? dist_index_es.d.empty : dist_index_es.d.from(list.copy(dist_index_es.d.empty))), atStart ? 0 : 1, atEnd ? 0 : 1), atStart ? 0 : 1)), 
                        dispatch(tr.scrollIntoView()), !0;
                    }(state, dispatch, range)));
                };
            }(richTextSchema.nodes.list_item),
            "Mod-Enter": exitBlockCommand,
            "Shift-Enter": exitBlockCommand,
            "Mod-b": toggleMark(richTextSchema.marks.strong),
            "Mod-i": toggleMark(richTextSchema.marks.em),
            "Mod-l": commands_insertLinkCommand,
            "Ctrl-q": wrapIn(richTextSchema.nodes.blockquote),
            "Mod-k": toggleMark(richTextSchema.marks.code),
            "Mod-g": commands_insertImageCommand,
            "Ctrl-g": commands_insertImageCommand,
            "Mod-o": wrapIn(richTextSchema.nodes.ordered_list),
            "Mod-u": wrapIn(richTextSchema.nodes.bullet_list),
            "Mod-h": setBlockType(richTextSchema.nodes.heading),
            "Mod-r": commands_insertHorizontalRuleCommand,
            "Mod-m": setBlockType(richTextSchema.nodes.code_block)
        }), tableKeymap = keymap({
            "Mod-Enter": moveSelectionAfterTableCommand,
            "Shift-Enter": moveSelectionAfterTableCommand,
            Enter: moveToNextCellCommand,
            Backspace: removeTableContentCommand,
            Delete: removeTableContentCommand,
            "Mod-Backspace": removeTableContentCommand,
            "Mod-Delete": removeTableContentCommand,
            Tab: moveToNextCellCommand,
            "Shift-Tab": function(state, dispatch) {
                return moveToCellCommand(state, dispatch, -1);
            }
        }), markdown_serializer_assign = function() {
            return (markdown_serializer_assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
            }).apply(this, arguments);
        }, defaultMarkdownSerializerNodes = markdown_serializer_assign(markdown_serializer_assign({}, defaultMarkdownSerializer.nodes), {
            blockquote: function(state, node) {
                var markup = node.attrs.markup || ">";
                state.wrapBlock(markup + " ", null, node, (function() {
                    return state.renderContent(node);
                }));
            },
            code_block: function(state, node) {
                var markup = node.attrs.markup || "```";
                state.write(markup + (node.attrs.params || "") + "\n"), state.text(node.textContent, !1), 
                state.ensureNewLine(), state.write(markup), state.closeBlock(node);
            },
            heading: function(state, node) {
                var markup = node.attrs.markup || "";
                markup.startsWith("<") ? (state.write("h1 tag TODO"), state.closeBlock(node)) : markup && !markup.startsWith("#") ? (state.renderInline(node), 
                state.ensureNewLine(), state.write(markup), state.closeBlock(node)) : (state.write(state.repeat("#", node.attrs.level) + " "), 
                state.renderInline(node), state.closeBlock(node));
            },
            horizontal_rule: function(state, node) {
                state.write(node.attrs.markup || "----------"), state.closeBlock(node);
            },
            bullet_list: function(state, node) {
                var markup = node.attrs.markup || "-";
                state.renderList(node, "  ", (function() {
                    return markup + " ";
                }));
            },
            ordered_list: function(state, node) {
                var start = node.attrs.order || 1, maxW = String(start + node.childCount - 1).length, space = state.repeat(" ", maxW + 2);
                state.renderList(node, space, (function(i) {
                    var nStr = String(start + i);
                    return state.repeat(" ", maxW - nStr.length) + nStr + ". ";
                }));
            },
            list_item: function(state, node) {
                state.renderContent(node);
            },
            paragraph: function(state, node) {
                state.renderInline(node), state.closeBlock(node);
            },
            image: function(state, node) {
                state.write("![" + state.esc(node.attrs.alt || "") + "](" + state.esc(node.attrs.src) + (node.attrs.title ? " " + state.quote(node.attrs.title) : "") + ")");
            },
            hard_break: function(state, node, parent, index) {
                for (var i = index + 1; i < parent.childCount; i++) if (parent.child(i).type != node.type) return void state.write("\\\n");
            },
            text: function(state, node) {
                var startOfLine = state.atBlank() || state.closed, escapedText = state.esc(node.text, startOfLine);
                escapedText = escapedText.replace(/_/g, "\\_"), state.text(escapedText, !1);
            }
        }), customMarkdownSerializerNodes = {
            html_inline: function(state, node) {
                state.write(node.attrs.content), state.ensureNewLine(), state.write("\n");
            },
            html_block: function(state, node) {
                state.write(node.attrs.content), state.ensureNewLine(), state.write("\n");
            },
            html_block_container: function(state, node) {
                state.write(node.attrs.contentOpen), state.ensureNewLine(), state.write("\n"), state.renderContent(node), 
                state.write(node.attrs.contentClose), state.closeBlock(node);
            },
            softbreak: function(state) {
                state.write("\n");
            },
            table: function(state, node) {
                function serializeTableRow(row) {
                    var columnAlignment = [];
                    return row.forEach((function(cell) {
                        if (cell.type === richTextSchema.nodes.table_header || cell.type === richTextSchema.nodes.table_cell) {
                            var alignment = function(cell) {
                                return state.write("| "), state.renderInline(cell), state.write(" "), function(cell) {
                                    var alignment = cell.attrs.style;
                                    if (!alignment) return null;
                                    var match = alignment.match(/text-align:[ ]?(left|right|center)/);
                                    if (match && match[1]) return match[1];
                                    return null;
                                }(cell);
                            }(cell);
                            columnAlignment.push(alignment);
                        }
                    })), state.write("|"), state.ensureNewLine(), columnAlignment;
                }
                node.forEach((function(table_child) {
                    table_child.type === richTextSchema.nodes.table_head && function(head) {
                        var columnAlignments = [];
                        head.forEach((function(headRow) {
                            headRow.type === richTextSchema.nodes.table_row && (columnAlignments = serializeTableRow(headRow));
                        }));
                        for (var _i = 0, columnAlignments_1 = columnAlignments; _i < columnAlignments_1.length; _i++) {
                            var alignment = columnAlignments_1[_i];
                            state.write("|"), state.write("left" === alignment || "center" === alignment ? ":" : " "), 
                            state.write("---"), state.write("right" === alignment || "center" === alignment ? ":" : " ");
                        }
                        state.write("|"), state.ensureNewLine();
                    }(table_child), table_child.type === richTextSchema.nodes.table_body && (table_child.forEach((function(bodyRow) {
                        bodyRow.type === richTextSchema.nodes.table_row && serializeTableRow(bodyRow);
                    })), state.ensureNewLine());
                })), state.ensureNewLine(), state.write("\n");
            },
            tagLink: function(state, node) {
                var prefix = "meta-tag" === node.attrs.tagType ? "meta-tag" : "tag", tag = node.attrs.tagName;
                state.write("[" + prefix + ":" + tag + "]");
            },
            spoiler: function(state, node) {
                state.wrapBlock(">! ", null, node, (function() {
                    return state.renderContent(node);
                }));
            }
        };
        function genMarkupAwareMarkConfig(config) {
            return config.open instanceof Function || config.close instanceof Function ? (error("markdown-serializer genMarkupAwareMarkSpec", "Unable to extend mark config with open/close as functions", config), 
            config) : markdown_serializer_assign(markdown_serializer_assign({}, config), {
                open: function(_, mark) {
                    return mark.attrs.markup || config.open;
                },
                close: function(_, mark) {
                    var markup = mark.attrs.markup;
                    return (markup = /^<[a-z]+>$/i.test(markup) ? markup.replace(/^</, "</") : markup) || config.close;
                }
            });
        }
        var defaultLinkMarkDeserializer = defaultMarkdownSerializer.marks.link, extendedLinkMarkDeserializer = {
            open: function(state, mark, parent, index) {
                if (!mark.attrs.markup) return "string" == typeof defaultLinkMarkDeserializer.open ? defaultLinkMarkDeserializer.open : defaultLinkMarkDeserializer.open(state, mark, parent, index);
                if ("linkify" === mark.attrs.markup) return "";
                if ("autolink" === mark.attrs.markup) return "<";
                var titleAttr = mark.attrs.title ? ' title="' + mark.attrs.title + '"' : "";
                return "<a" + (mark.attrs.href ? ' href="' + mark.attrs.href + '"' : "") + titleAttr + ">";
            },
            close: function(state, mark, parent, index) {
                return mark.attrs.markup ? "linkify" === mark.attrs.markup ? "" : "autolink" === mark.attrs.markup ? ">" : "</a>" : "string" == typeof defaultLinkMarkDeserializer.close ? defaultLinkMarkDeserializer.close : defaultLinkMarkDeserializer.close(state, mark, parent, index);
            }
        }, customMarkdownSerializerMarks = markdown_serializer_assign(markdown_serializer_assign({}, defaultMarkdownSerializer.marks), {
            em: genMarkupAwareMarkConfig(defaultMarkdownSerializer.marks.em),
            strong: genMarkupAwareMarkConfig(defaultMarkdownSerializer.marks.strong),
            link: extendedLinkMarkDeserializer,
            strike: genMarkupAwareMarkConfig({
                open: "~~",
                close: "~~",
                mixable: !0,
                expelEnclosingWhitespace: !0
            }),
            kbd: genMarkupAwareMarkConfig({
                open: "<kbd>",
                close: "</kbd>",
                mixable: !0,
                expelEnclosingWhitespace: !0
            }),
            sup: genMarkupAwareMarkConfig({
                open: "<sup>",
                close: "</sup>",
                mixable: !0,
                expelEnclosingWhitespace: !0
            }),
            sub: genMarkupAwareMarkConfig({
                open: "<sub>",
                close: "</sub>",
                mixable: !0,
                expelEnclosingWhitespace: !0
            })
        }), code_block_CodeBlockView = function() {
            function CodeBlockView(node) {
                this.language = null, this.dom = document.createElement("div"), this.dom.classList.add("ps-relative", "p0", "ws-normal", "ow-normal");
                var rawLanguage = this.getLanguageFromBlock(node);
                this.language = rawLanguage, this.dom.innerHTML = '\n<div class="ps-absolute t2 r4 fs-fine pe-none us-none fc-black-300 js-language-indicator" contenteditable=false>' + rawLanguage + '</div>\n<pre class="s-code-block"><code class="content-dom"></code></pre>\n        ', 
                this.contentDOM = this.dom.querySelector(".content-dom");
            }
            return CodeBlockView.prototype.update = function(node) {
                var rawLanguage = this.getLanguageFromBlock(node);
                return this.language !== rawLanguage && (this.dom.querySelector(".js-language-indicator").textContent = rawLanguage, 
                this.language = rawLanguage), !0;
            }, CodeBlockView.prototype.getLanguageFromBlock = function(node) {
                var autodetectedLanguage = node.attrs.detectedHighlightLanguage;
                return autodetectedLanguage && (autodetectedLanguage += " (auto)"), autodetectedLanguage || getBlockLanguage(node);
            }, CodeBlockView;
        }(), HtmlBlock = function(node) {
            this.dom = document.createElement("div"), this.dom.className = "html_block ProseMirror-widget", 
            this.dom.innerHTML = node.attrs.content;
        }, HtmlBlockContainer = function(node) {
            if (this.dom = document.createElement("div"), this.dom.className = "html_block_container ProseMirror-widget", 
            node.childCount) {
                var wrappingHtmlString = node.attrs.contentOpen + '<div class="ProseMirror-contentdom"></div>' + node.attrs.contentClose;
                this.dom.innerHTML = wrappingHtmlString, this.contentDOM = this.dom.querySelector(".ProseMirror-contentdom");
            } else this.dom.innerHTML = "invalid html_block_container";
        }, imageId = 0, ImageView = function() {
            function ImageView(node, view, getPos) {
                var _this = this;
                this.id = imageId++, this.img = this.createImage(node), this.form = this.createForm(), 
                this.form.addEventListener("submit", (function(event) {
                    return _this.handleChangedImageAttributes(event, getPos, view);
                })), this.popover = this.createPopover(), this.dom = document.createElement("div"), 
                this.dom.appendChild(this.img), this.dom.appendChild(this.popover), this.dom.addEventListener("s-popover:hide", (function(event) {
                    return _this.preventClose(event);
                }));
            }
            return ImageView.prototype.selectNode = function() {
                this.img.classList.add("bs-ring"), this.selectionActive = !0, this.img.dispatchEvent(new Event("image-popover-show"));
                var inputFields = this.form.querySelectorAll("input");
                inputFields.length > 0 && inputFields[0].focus({
                    preventScroll: !0
                });
            }, ImageView.prototype.deselectNode = function() {
                this.img.classList.remove("bs-ring"), this.selectionActive = !1, this.img.dispatchEvent(new Event("image-popover-hide"));
            }, ImageView.prototype.stopEvent = function(event) {
                return this.popover.contains(event.target);
            }, ImageView.prototype.ignoreMutation = function() {
                return !0;
            }, ImageView.prototype.destroy = function() {
                this.img.remove(), this.popover.remove(), this.dom = null, this.form.remove();
            }, ImageView.prototype.createImage = function(node) {
                var img = document.createElement("img");
                return img.setAttribute("aria-controls", "img-popover-" + this.id), img.setAttribute("data-controller", "s-popover"), 
                img.setAttribute("data-action", "image-popover-show->s-popover#show image-popover-hide->s-popover#hide"), 
                img.src = node.attrs.src, node.attrs.alt && (img.alt = node.attrs.alt), node.attrs.title && (img.title = node.attrs.title), 
                img;
            }, ImageView.prototype.createForm = function() {
                var form = document.createElement("form");
                return form.className = "grid fd-column", form.innerHTML = '\n            <label class="grid--cell s-label mb4" for="img-src-' + this.id + '">Image source</label>\n            <div class="grid ps-relative mb12">\n                <input class="grid--cell s-input" type="text" name="src" id="img-src-' + this.id + '" value="' + this.img.src + '" placeholder="https://example.com/image.png"/>\n            </div>\n            <label class="grid--cell s-label mb4" for="img-alt-' + this.id + '">Image description</label>\n            <div class="grid ps-relative mb12">\n                <input class="grid--cell s-input" type="text" name="alt" id="img-alt-' + this.id + '" value="' + this.img.alt + '" placeholder="A description for the image"/>\n            </div>\n            <label class="grid--cell s-label mb4" for="img-title-' + this.id + '">Title</label>\n            <div class="grid ps-relative mb12">\n                <input class="grid--cell s-input" type="text" name="title" id="img-title-' + this.id + '" value="' + this.img.title + '" placeholder="A title shown on hover"/>\n            </div>\n\n            <button class="s-btn s-btn__primary" type="submit" aria-pressed="false">Apply</button>\n        ', 
                form;
            }, ImageView.prototype.createPopover = function() {
                var popover = document.createElement("div");
                return popover.className = "s-popover ws-normal wb-normal js-img-popover", popover.id = "img-popover-" + this.id, 
                popover.innerHTML = '<div class="s-popover--arrow ws-normal"></div>', popover.append(this.form), 
                popover;
            }, ImageView.prototype.handleChangedImageAttributes = function(event, getPos, view) {
                var _this = this;
                if (event.preventDefault(), "function" == typeof getPos) {
                    var findInput = function(selector) {
                        return _this.form.querySelector(selector);
                    }, src = findInput("#img-src-" + this.id), alt = findInput("#img-alt-" + this.id), title = findInput("#img-title-" + this.id);
                    view.dispatch(view.state.tr.setNodeMarkup(getPos(), null, {
                        src: src.value,
                        alt: alt.value,
                        title: title.value
                    })), view.focus();
                }
            }, ImageView.prototype.preventClose = function(event) {
                this.selectionActive && event.preventDefault();
            }, ImageView;
        }(), TagLink = function(node) {
            this.dom = document.createElement("a"), this.dom.setAttribute("href", "#"), this.dom.classList.add("s-tag"), 
            "meta-tag" === node.attrs.tagType && this.dom.classList.add("s-tag__muted"), this.dom.innerText = node.attrs.tagName;
        };
        var codePasteHandler = new prosemirror_state_dist_index_es.Plugin({
            props: {
                handlePaste: function(view, event, slice) {
                    var codeData;
                    if (!(codeData = 1 === slice.content.childCount && "code_block" === slice.content.child(0).type.name ? slice.content.child(0).textContent : function(clipboardData) {
                        var htmlContent = clipboardData.getData("text/html");
                        if (htmlContent && htmlContent.includes("<code>")) {
                            var allContent = (new DOMParser).parseFromString(htmlContent, "text/html"), codeBlock = allContent.querySelector("code");
                            return allContent.body.textContent.trim() !== codeBlock.textContent ? null : codeBlock.textContent;
                        }
                        var textContent = clipboardData.getData("text/plain");
                        return textContent && (clipboardData.getData("vscode-editor-data") || /^([ ]{2,}|\t)/m.test(textContent)) ? textContent : null;
                    }(event.clipboardData))) return !1;
                    if ("code_block" === view.state.selection.$from.node().type.name) view.dispatch(view.state.tr.insertText(codeData)); else {
                        var schema = view.state.schema, node = schema.node("code_block", {}, schema.text(codeData));
                        view.dispatch(view.state.tr.replaceSelectionWith(node));
                    }
                    return !0;
                }
            }
        }), previewResultCache = {};
        function getValidNodes(doc, providers) {
            var validNodes = [];
            return doc.descendants((function(node, pos) {
                var provider = function(providers, node) {
                    var _a, _b;
                    if (!function(node) {
                        var child = node.content.firstChild;
                        if (!child) return !1;
                        var hasOnlyOneChild = 1 === node.childCount, childIsTextNode = "text" === child.type.name, childHasLinkMark = child.marks.some((function(mark) {
                            return "link" === mark.type.name;
                        }));
                        return hasOnlyOneChild && childIsTextNode && childHasLinkMark;
                    }(node)) return null;
                    var url = null === (_b = null === (_a = node.content.firstChild.marks.find((function(m) {
                        return "link" === m.type.name;
                    }))) || void 0 === _a ? void 0 : _a.attrs) || void 0 === _b ? void 0 : _b.href;
                    if (!url) return null;
                    for (var _i = 0, providers_1 = providers; _i < providers_1.length; _i++) {
                        var provider = providers_1[_i];
                        if (provider.domainTest && provider.domainTest.test(url)) return {
                            url: url,
                            provider: provider
                        };
                    }
                    return null;
                }(providers, node);
                if (provider) return validNodes.push({
                    provider: provider,
                    pos: pos,
                    node: node
                }), !1;
            })), validNodes;
        }
        function generatePreviewDecorations(doc, providers) {
            var linkPreviewDecorations = [];
            return getValidNodes(doc, providers).forEach((function(n) {
                var placeholder = function() {
                    var placeholder = document.createElement("div");
                    return placeholder.className = "js-placeholder", placeholder.innerHTML = '<div class="s-spinner s-spinner__xs"></div>', 
                    placeholder;
                }();
                linkPreviewDecorations.push(prosemirror_view_dist_index_es.Decoration.widget(n.pos, placeholder)), 
                n.provider.url in previewResultCache && function(placeholder, content) {
                    if (placeholder.innerHTML = "", !content) return;
                    placeholder.appendChild(content);
                }(placeholder, previewResultCache[n.provider.url]);
            })), prosemirror_view_dist_index_es.DecorationSet.create(doc, linkPreviewDecorations);
        }
        var LINK_PREVIEWS_KEY = new AsyncPluginKey("linkPreviews");
        function linkPreviewPlugin(providers) {
            return providers = providers || [], new AsyncPlugin({
                key: LINK_PREVIEWS_KEY,
                asyncCallback: function(view) {
                    return function(view, providers) {
                        var unfetchedNodes = getValidNodes(view.state.doc, providers).filter((function(n) {
                            return !(n.provider.url in previewResultCache);
                        }));
                        if (!unfetchedNodes.length) return Promise.reject(null);
                        var promises = unfetchedNodes.map((function(n) {
                            return n.provider.provider.renderer(n.provider.url).then((function(content) {
                                return previewResultCache[n.provider.url] = content, content;
                            })).catch((function() {
                                var errorPlaceholder = document.createElement("div");
                                return errorPlaceholder.innerText = "Error fetching content.", previewResultCache[n.provider.url] = errorPlaceholder, 
                                Promise.resolve(errorPlaceholder);
                            }));
                        }));
                        return Promise.all(promises);
                    }(view, providers);
                },
                state: {
                    init: function(_, _a) {
                        return generatePreviewDecorations(_a.doc, providers);
                    },
                    apply: function(tr, value) {
                        return this.getCallbackData(tr) ? generatePreviewDecorations(tr.doc, providers) : value.map(tr.mapping, tr.doc);
                    }
                },
                props: {
                    decorations: function(state) {
                        return this.getState(state);
                    }
                }
            });
        }
        var spoiler_toggle_assign = function() {
            return (spoiler_toggle_assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
            }).apply(this, arguments);
        };
        function updateSpoilers(tr, state, shouldReveal, transactions) {
            var _a = state.selection, from = _a.from, to = _a.to;
            return state.doc.nodesBetween(from, to, (function(node, pos) {
                if ("spoiler" === node.type.name) {
                    var attrs = spoiler_toggle_assign({}, node.attrs);
                    attrs.revealed = shouldReveal;
                    var wasDeleted_1 = !1;
                    return (null == transactions ? void 0 : transactions.length) && transactions.forEach((function(t) {
                        var result = t.mapping.mapResult(pos);
                        if (result.deleted) return wasDeleted_1 = !0, !1;
                        pos = result.pos;
                    })), wasDeleted_1 ? !1 : (tr = tr.setNodeMarkup(pos, null, attrs), !1);
                }
            })), tr;
        }
        var spoilerToggle = new prosemirror_state_dist_index_es.Plugin({
            appendTransaction: function(transactions, oldState, newState) {
                if (!docChanged(oldState, newState)) return null;
                var tr = newState.tr;
                return tr = updateSpoilers(tr, oldState, !1, transactions), (tr = updateSpoilers(tr, newState, !0)).steps.length ? tr = tr.setMeta("addToHistory", !1) : null;
            }
        }), tables = new prosemirror_state_dist_index_es.Plugin({
            key: new prosemirror_state_dist_index_es.PluginKey("tablesPlugin"),
            props: {
                transformPasted: function(slice) {
                    return new dist_index_es.l(tablesToPlainText(slice.content), 1, 1);
                },
                handlePaste: function(view, event, slice) {
                    return !!inTable(view.state.selection) && (view.dispatch(view.state.tr.insertText(function(slice) {
                        if (!slice.size) return null;
                        if (slice.content && slice.content.firstChild) return slice.content.firstChild.textContent;
                        return null;
                    }(slice))), !0);
                }
            }
        });
        function tablesToPlainText(fragment) {
            var sanitized = [];
            return fragment.forEach((function(node) {
                node.type === richTextSchema.nodes.table ? sanitized.push(richTextSchema.nodes.paragraph.createAndFill({}, richTextSchema.text(node.textContent))) : sanitized.push(node.copy(tablesToPlainText(node.content)));
            })), dist_index_es.d.fromArray(sanitized);
        }
        var EditorType, editor_assign = function() {
            return (editor_assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
            }).apply(this, arguments);
        }, editor_spreadArrays = function() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            var r = Array(s), k = 0;
            for (i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
            k++) r[k] = a[j];
            return r;
        }, editor_RichTextEditor = function() {
            function RichTextEditor(target, content, options) {
                var _this = this;
                void 0 === options && (options = {}), this.options = deepMerge(RichTextEditor.defaultOptions, options);
                var schema, pluginSchema, externalPlugin, doc, uploadOptions, containerFn, externalPlugins = (this.options.externalPlugins || []).reduce((function(prev, next) {
                    return prev ? deepMerge(prev, next) : next;
                }), null) || {
                    menuEntries: [],
                    nodeViews: {},
                    markdownParser: {
                        tokens: {},
                        plugins: []
                    },
                    markdownSerializers: {},
                    plugins: [],
                    schema: null
                }, alteredSchema = (schema = richTextSchema, (pluginSchema = null == externalPlugins ? void 0 : externalPlugins.schema) ? (Object.keys(pluginSchema.nodes).forEach((function(n) {
                    if (!schema.nodes[n]) {
                        var nodeType = new dist_index_es.i(n, schema, pluginSchema.nodes[n]);
                        setContentMatch(nodeType, schema), schema.nodes[n] = nodeType;
                    }
                })), Object.keys(schema.nodes).forEach((function(n) {
                    setContentMatch(schema.nodes[n], schema);
                })), schema) : schema), markdownParser = function(features, schema, externalPlugins) {
                    var _a;
                    if (!features) throw "Cannot build markdown parser without passed features.";
                    var defaultMarkdownItInstance = new markdown_parser_SOMarkdownIt("default", {
                        html: features.html,
                        linkify: !0
                    });
                    return features.tables || defaultMarkdownItInstance.disable("table"), features.extraEmphasis || defaultMarkdownItInstance.disable("strikethrough"), 
                    defaultMarkdownItInstance.linkify.set({
                        fuzzyLink: !1
                    }), features.html && defaultMarkdownItInstance.use((function(md) {
                        return html(md);
                    })), defaultMarkdownItInstance.use(stackLanguageComments), defaultMarkdownItInstance.use(tagLinks), 
                    defaultMarkdownItInstance.use(spoiler), (null == externalPlugins ? void 0 : externalPlugins.markdownParser) && externalPlugins.markdownParser.plugins.forEach((function(p) {
                        defaultMarkdownItInstance.use(p);
                    })), new SOMarkdownParser(schema, defaultMarkdownItInstance, markdown_parser_assign(markdown_parser_assign({}, customMarkdownParserTokens), null === (_a = null == externalPlugins ? void 0 : externalPlugins.markdownParser) || void 0 === _a ? void 0 : _a.tokens));
                }(this.options.parserFeatures, alteredSchema, externalPlugins);
                this.markdownSerializer = (externalPlugin = externalPlugins, new MarkdownSerializer(markdown_serializer_assign(markdown_serializer_assign(markdown_serializer_assign({}, defaultMarkdownSerializerNodes), customMarkdownSerializerNodes), externalPlugin.markdownSerializers), customMarkdownSerializerMarks));
                try {
                    doc = markdownParser.parse(content);
                } catch (e) {
                    error("RichTextEditorConstructor markdownParser.parse", "Catastrophic parse error!", e), 
                    doc = schema_CodeStringParser.fromSchema(alteredSchema).parseCode(content), doc = new index_es.d(doc).insert(0, alteredSchema.node("heading", {
                        level: 1
                    }, alteredSchema.text("WARNING! There was an error parsing the document"))).doc;
                }
                this.editorView = new prosemirror_view_dist_index_es.EditorView((function(node) {
                    var _a;
                    (_a = node.classList).add.apply(_a, _this.options.classList), target.appendChild(node);
                }), {
                    editable: editableCheck,
                    state: prosemirror_state_dist_index_es.EditorState.create({
                        doc: doc,
                        plugins: editor_spreadArrays([ index_es_history(), tableKeymap, richTextKeymap, keymap(baseKeymap), commands_createMenu(this.options), richTextInputRules, linkPreviewPlugin(this.options.linkPreviewProviders), CodeBlockHighlightPlugin(this.options.codeblockOverrideLanguage), linkTooltipPlugin, (uploadOptions = this.options.imageUpload, 
                        containerFn = this.options.pluginParentContainer, imageUploaderPlaceholderPlugin(uploadOptions, containerFn, (function(state, url, pos) {
                            return state.tr.replaceWith(pos, pos, richTextSchema.nodes.image.create({
                                src: url
                            }));
                        }))), readonlyPlugin(), spoilerToggle, tables, codePasteHandler ], externalPlugins.plugins)
                    }),
                    nodeViews: editor_assign({
                        code_block: function(node) {
                            return new code_block_CodeBlockView(node);
                        },
                        image: function(node, view, getPos) {
                            return new ImageView(node, view, getPos);
                        },
                        tagLink: function(node) {
                            return new TagLink(node);
                        },
                        html_block: function(node) {
                            return new HtmlBlock(node);
                        },
                        html_block_container: function(node) {
                            return new HtmlBlockContainer(node);
                        }
                    }, externalPlugins.nodeViews)
                }), log("prosemirror rich-text document", this.editorView.state.doc.toJSON().content);
            }
            return Object.defineProperty(RichTextEditor.prototype, "content", {
                get: function() {
                    return this.markdownSerializer.serialize(this.editorView.state.doc);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(RichTextEditor.prototype, "document", {
                get: function() {
                    return this.editorView.state.doc;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(RichTextEditor.prototype, "dom", {
                get: function() {
                    return this.editorView.dom;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(RichTextEditor.prototype, "readonly", {
                get: function() {
                    return !this.editorView.editable;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(RichTextEditor, "defaultOptions", {
                get: function() {
                    return {
                        parserFeatures: defaultParserFeatures,
                        editorHelpLink: null,
                        linkPreviewProviders: [],
                        codeblockOverrideLanguage: null,
                        menuParentContainer: null,
                        imageUpload: {
                            handler: defaultImageUploadHandler
                        },
                        externalPlugins: []
                    };
                },
                enumerable: !1,
                configurable: !0
            }), RichTextEditor.prototype.focus = function() {
                this.editorView.focus();
            }, RichTextEditor.prototype.destroy = function() {
                this.editorView.destroy();
            }, RichTextEditor;
        }();
        !function(EditorType) {
            EditorType[EditorType.RichText = 0] = "RichText", EditorType[EditorType.Commonmark = 1] = "Commonmark";
        }(EditorType || (EditorType = {}));
        var editor_StacksEditor = function() {
            function StacksEditor(target, content, options) {
                void 0 === options && (options = {}), this.options = deepMerge(StacksEditor.defaultOptions, options), 
                this.target = target, this.internalId = (1e4 * Math.random()).toFixed(0), this.innerTarget = document.createElement("div"), 
                this.target.appendChild(this.innerTarget), this.setupPluginContainer(), this.setBackingView(this.options.defaultView, content);
            }
            return Object.defineProperty(StacksEditor.prototype, "editorView", {
                get: function() {
                    var _a;
                    return null === (_a = this.backingView) || void 0 === _a ? void 0 : _a.editorView;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(StacksEditor.prototype, "content", {
                get: function() {
                    var _a;
                    return (null === (_a = this.backingView) || void 0 === _a ? void 0 : _a.content) || "";
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(StacksEditor.prototype, "document", {
                get: function() {
                    return this.editorView.state.doc;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(StacksEditor.prototype, "dom", {
                get: function() {
                    return this.editorView.dom;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(StacksEditor.prototype, "readonly", {
                get: function() {
                    return !!this.editorView && !this.editorView.editable;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(StacksEditor.prototype, "currentViewType", {
                get: function() {
                    return this.backingView instanceof editor_RichTextEditor ? EditorType.RichText : EditorType.Commonmark;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(StacksEditor, "defaultOptions", {
                get: function() {
                    var commonClasses = [ "fl1", "outline-none", "p12", "pt6", "w100", "s-prose", "js-editor", "ProseMirror" ];
                    return {
                        defaultView: EditorType.RichText,
                        targetClassList: [ "ps-relative", "z-base", "s-textarea", "overflow-auto", "hmn2", "w100", "p0", "s-editor-resizable" ],
                        parserFeatures: editor_RichTextEditor.defaultOptions.parserFeatures,
                        commonmarkOptions: {
                            classList: commonClasses
                        },
                        richTextOptions: {
                            classList: commonClasses
                        }
                    };
                },
                enumerable: !1,
                configurable: !0
            }), StacksEditor.prototype.focus = function() {
                this.backingView.focus();
            }, StacksEditor.prototype.destroy = function() {
                this.backingView.destroy();
            }, StacksEditor.prototype.setView = function(type) {
                this.setBackingView(type, null);
            }, StacksEditor.prototype.enable = function() {
                var _a;
                toggleReadonly(!1, this.editorView.state, this.editorView.dispatch.bind(null)), 
                (_a = this.innerTarget.classList).remove.apply(_a, StacksEditor.READONLY_CLASSES);
            }, StacksEditor.prototype.disable = function() {
                var _a;
                toggleReadonly(!0, this.editorView.state, this.editorView.dispatch.bind(null)), 
                (_a = this.innerTarget.classList).add.apply(_a, StacksEditor.READONLY_CLASSES);
            }, StacksEditor.prototype.reinitialize = function(options) {
                void 0 === options && (options = {}), this.options = deepMerge(this.options, options), 
                this.setBackingView(this.currentViewType, this.content);
            }, StacksEditor.prototype.setupPluginContainer = function() {
                this.pluginContainer = document.createElement("div"), this.pluginContainer.className = "py6 bg-inherit btr-sm w100 ps-sticky t0 l0 z-nav s-editor-shadow js-plugin-container js-sticky";
                var menuTarget = document.createElement("div");
                menuTarget.className = "grid overflow-x-auto ai-center px12 py4 pb0", this.pluginContainer.appendChild(menuTarget);
                this.options.menuParentContainer = function() {
                    return menuTarget;
                };
                var pluginTarget = document.createElement("div");
                this.pluginContainer.appendChild(pluginTarget);
                var container, observer;
                this.options.pluginParentContainer = function() {
                    return pluginTarget;
                }, this.innerTarget.appendChild(this.pluginContainer), this.createEditorSwitcher(this.options.defaultView, menuTarget), 
                this.pluginContainer.addEventListener("mousedown", (function(e) {
                    e.preventDefault();
                })), container = this.innerTarget, observer = new IntersectionObserver((function(entries) {
                    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                        var entry = entries_1[_i], stuck = !entry.isIntersecting, target = entry.target.nextElementSibling, e = new CustomEvent("sticky-change", {
                            detail: {
                                stuck: stuck,
                                target: target
                            }
                        });
                        document.dispatchEvent(e);
                    }
                }), {
                    threshold: [ 0 ],
                    root: container
                }), container.querySelectorAll(".js-sticky").forEach((function(el) {
                    var sentinel = document.createElement("div");
                    sentinel.className = "js-sticky-sentinel", el.parentNode.insertBefore(sentinel, el), 
                    observer.observe(sentinel);
                })), document.addEventListener("sticky-change", (function(e) {
                    var target = e.detail.target;
                    target.classList.contains("js-plugin-container") && target.classList.toggle("is-stuck", e.detail.stuck);
                }));
            }, StacksEditor.prototype.setBackingView = function(type, content) {
                var _a, _this = this, readonly = this.readonly;
                if (this.backingView && (content = content || this.backingView.content, this.backingView.destroy()), 
                (_a = this.innerTarget.classList).add.apply(_a, this.options.targetClassList), type === EditorType.RichText) this.backingView = new editor_RichTextEditor(this.innerTarget, content, deepMerge(this.options, this.options.richTextOptions)); else {
                    if (type !== EditorType.Commonmark) throw "Unable to set editor to unknown type: " + EditorType[type];
                    this.backingView = new editor_CommonmarkEditor(this.innerTarget, content, deepMerge(this.options, this.options.commonmarkOptions));
                }
                this.backingView.editorView.props.handleDOMEvents = {
                    focus: function() {
                        return _this.innerTarget.classList.add("bs-ring", "bc-blue-300"), !1;
                    },
                    blur: function() {
                        return _this.innerTarget.classList.remove("bs-ring", "bc-blue-300"), !1;
                    }
                }, readonly ? this.disable() : this.enable();
            }, StacksEditor.prototype.createEditorSwitcher = function(defaultItem, menuTarget) {
                var checkedProp = defaultItem === EditorType.Commonmark ? "checked" : "", html = '<label class="grid--cell fs-caption mr4 sm:d-none" for="js-editor-toggle-' + this.internalId + '">Markdown</label>\n<label class="grid--cell mr4 d-none sm:d-block" for="js-editor-toggle-' + this.internalId + '">\n    <span class="icon-bg iconMarkdown"></span>\n</label>\n<div class="grid--cell s-editor-toggle" title="Toggle Markdown editing" data-controller="s-tooltip">\n    <input class="js-editor-toggle-state" id="js-editor-toggle-' + this.internalId + '" type="checkbox" ' + checkedProp + '/>\n    <label class="js-editor-toggle-label" for="js-editor-toggle-' + this.internalId + '"></label>\n</div>', container = document.createElement("div");
                container.className = "grid--cell grid ai-center ml24 fc-medium", container.innerHTML = html, 
                container.querySelector("#js-editor-toggle-" + this.internalId).addEventListener("change", this.editorSwitcherChangeHandler.bind(this)), 
                menuTarget.appendChild(container);
            }, StacksEditor.prototype.prefixEventName = function(eventName) {
                return "StacksEditor:" + eventName;
            }, StacksEditor.prototype.editorSwitcherChangeHandler = function(e) {
                e.stopPropagation(), e.preventDefault();
                var type = this.currentViewType === EditorType.Commonmark ? EditorType.RichText : EditorType.Commonmark;
                this.setView(type), this.target.querySelector("#js-editor-toggle-" + this.internalId).checked = type === EditorType.Commonmark;
                var event = new CustomEvent(this.prefixEventName("view-change"), {
                    detail: {
                        editorType: type
                    }
                });
                this.target.dispatchEvent(event), this.focus();
            }, StacksEditor.READONLY_CLASSES = [ "s-input__readonly" ], StacksEditor;
        }();
    } ]);
}));