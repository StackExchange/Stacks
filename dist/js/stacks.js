/*
Stimulus 1.1.1
Copyright © 2019 Basecamp, LLC
 */
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define([ "exports" ], factory) : factory(global.Stimulus = {});
})(this, function(exports) {
  "use strict";
  var EventListener = function() {
    function EventListener(eventTarget, eventName) {
      this.eventTarget = eventTarget;
      this.eventName = eventName;
      this.unorderedBindings = new Set();
    }
    EventListener.prototype.connect = function() {
      this.eventTarget.addEventListener(this.eventName, this, false);
    };
    EventListener.prototype.disconnect = function() {
      this.eventTarget.removeEventListener(this.eventName, this, false);
    };
    EventListener.prototype.bindingConnected = function(binding) {
      this.unorderedBindings.add(binding);
    };
    EventListener.prototype.bindingDisconnected = function(binding) {
      this.unorderedBindings.delete(binding);
    };
    EventListener.prototype.handleEvent = function(event) {
      var extendedEvent = extendEvent(event);
      for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
        var binding = _a[_i];
        if (extendedEvent.immediatePropagationStopped) {
          break;
        } else {
          binding.handleEvent(extendedEvent);
        }
      }
    };
    Object.defineProperty(EventListener.prototype, "bindings", {
      get: function() {
        return Array.from(this.unorderedBindings).sort(function(left, right) {
          var leftIndex = left.index, rightIndex = right.index;
          return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
        });
      },
      enumerable: true,
      configurable: true
    });
    return EventListener;
  }();
  function extendEvent(event) {
    if ("immediatePropagationStopped" in event) {
      return event;
    } else {
      var stopImmediatePropagation_1 = event.stopImmediatePropagation;
      return Object.assign(event, {
        immediatePropagationStopped: false,
        stopImmediatePropagation: function() {
          this.immediatePropagationStopped = true;
          stopImmediatePropagation_1.call(this);
        }
      });
    }
  }
  var Dispatcher = function() {
    function Dispatcher(application) {
      this.application = application;
      this.eventListenerMaps = new Map();
      this.started = false;
    }
    Dispatcher.prototype.start = function() {
      if (!this.started) {
        this.started = true;
        this.eventListeners.forEach(function(eventListener) {
          return eventListener.connect();
        });
      }
    };
    Dispatcher.prototype.stop = function() {
      if (this.started) {
        this.started = false;
        this.eventListeners.forEach(function(eventListener) {
          return eventListener.disconnect();
        });
      }
    };
    Object.defineProperty(Dispatcher.prototype, "eventListeners", {
      get: function() {
        return Array.from(this.eventListenerMaps.values()).reduce(function(listeners, map) {
          return listeners.concat(Array.from(map.values()));
        }, []);
      },
      enumerable: true,
      configurable: true
    });
    Dispatcher.prototype.bindingConnected = function(binding) {
      this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    };
    Dispatcher.prototype.bindingDisconnected = function(binding) {
      this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
    };
    Dispatcher.prototype.handleError = function(error, message, detail) {
      if (detail === void 0) {
        detail = {};
      }
      this.application.handleError(error, "Error " + message, detail);
    };
    Dispatcher.prototype.fetchEventListenerForBinding = function(binding) {
      var eventTarget = binding.eventTarget, eventName = binding.eventName;
      return this.fetchEventListener(eventTarget, eventName);
    };
    Dispatcher.prototype.fetchEventListener = function(eventTarget, eventName) {
      var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      var eventListener = eventListenerMap.get(eventName);
      if (!eventListener) {
        eventListener = this.createEventListener(eventTarget, eventName);
        eventListenerMap.set(eventName, eventListener);
      }
      return eventListener;
    };
    Dispatcher.prototype.createEventListener = function(eventTarget, eventName) {
      var eventListener = new EventListener(eventTarget, eventName);
      if (this.started) {
        eventListener.connect();
      }
      return eventListener;
    };
    Dispatcher.prototype.fetchEventListenerMapForEventTarget = function(eventTarget) {
      var eventListenerMap = this.eventListenerMaps.get(eventTarget);
      if (!eventListenerMap) {
        eventListenerMap = new Map();
        this.eventListenerMaps.set(eventTarget, eventListenerMap);
      }
      return eventListenerMap;
    };
    return Dispatcher;
  }();
  var descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#(.+))?$/;
  function parseDescriptorString(descriptorString) {
    var source = descriptorString.trim();
    var matches = source.match(descriptorPattern) || [];
    return {
      eventTarget: parseEventTarget(matches[4]),
      eventName: matches[2],
      identifier: matches[5],
      methodName: matches[7]
    };
  }
  function parseEventTarget(eventTargetName) {
    if (eventTargetName == "window") {
      return window;
    } else if (eventTargetName == "document") {
      return document;
    }
  }
  function stringifyEventTarget(eventTarget) {
    if (eventTarget == window) {
      return "window";
    } else if (eventTarget == document) {
      return "document";
    }
  }
  var Action = function() {
    function Action(element, index, descriptor) {
      this.element = element;
      this.index = index;
      this.eventTarget = descriptor.eventTarget || element;
      this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
      this.identifier = descriptor.identifier || error("missing identifier");
      this.methodName = descriptor.methodName || error("missing method name");
    }
    Action.forToken = function(token) {
      return new this(token.element, token.index, parseDescriptorString(token.content));
    };
    Action.prototype.toString = function() {
      var eventNameSuffix = this.eventTargetName ? "@" + this.eventTargetName : "";
      return "" + this.eventName + eventNameSuffix + "->" + this.identifier + "#" + this.methodName;
    };
    Object.defineProperty(Action.prototype, "eventTargetName", {
      get: function() {
        return stringifyEventTarget(this.eventTarget);
      },
      enumerable: true,
      configurable: true
    });
    return Action;
  }();
  var defaultEventNames = {
    a: function(e) {
      return "click";
    },
    button: function(e) {
      return "click";
    },
    form: function(e) {
      return "submit";
    },
    input: function(e) {
      return e.getAttribute("type") == "submit" ? "click" : "change";
    },
    select: function(e) {
      return "change";
    },
    textarea: function(e) {
      return "change";
    }
  };
  function getDefaultEventNameForElement(element) {
    var tagName = element.tagName.toLowerCase();
    if (tagName in defaultEventNames) {
      return defaultEventNames[tagName](element);
    }
  }
  function error(message) {
    throw new Error(message);
  }
  var Binding = function() {
    function Binding(context, action) {
      this.context = context;
      this.action = action;
    }
    Object.defineProperty(Binding.prototype, "index", {
      get: function() {
        return this.action.index;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Binding.prototype, "eventTarget", {
      get: function() {
        return this.action.eventTarget;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Binding.prototype, "identifier", {
      get: function() {
        return this.context.identifier;
      },
      enumerable: true,
      configurable: true
    });
    Binding.prototype.handleEvent = function(event) {
      if (this.willBeInvokedByEvent(event)) {
        this.invokeWithEvent(event);
      }
    };
    Object.defineProperty(Binding.prototype, "eventName", {
      get: function() {
        return this.action.eventName;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Binding.prototype, "method", {
      get: function() {
        var method = this.controller[this.methodName];
        if (typeof method == "function") {
          return method;
        }
        throw new Error('Action "' + this.action + '" references undefined method "' + this.methodName + '"');
      },
      enumerable: true,
      configurable: true
    });
    Binding.prototype.invokeWithEvent = function(event) {
      try {
        this.method.call(this.controller, event);
      } catch (error) {
        var _a = this, identifier = _a.identifier, controller = _a.controller, element = _a.element, index = _a.index;
        var detail = {
          identifier: identifier,
          controller: controller,
          element: element,
          index: index,
          event: event
        };
        this.context.handleError(error, 'invoking action "' + this.action + '"', detail);
      }
    };
    Binding.prototype.willBeInvokedByEvent = function(event) {
      var eventTarget = event.target;
      if (this.element === eventTarget) {
        return true;
      } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
        return this.scope.containsElement(eventTarget);
      } else {
        return true;
      }
    };
    Object.defineProperty(Binding.prototype, "controller", {
      get: function() {
        return this.context.controller;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Binding.prototype, "methodName", {
      get: function() {
        return this.action.methodName;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Binding.prototype, "element", {
      get: function() {
        return this.scope.element;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Binding.prototype, "scope", {
      get: function() {
        return this.context.scope;
      },
      enumerable: true,
      configurable: true
    });
    return Binding;
  }();
  var ElementObserver = function() {
    function ElementObserver(element, delegate) {
      var _this = this;
      this.element = element;
      this.started = false;
      this.delegate = delegate;
      this.elements = new Set();
      this.mutationObserver = new MutationObserver(function(mutations) {
        return _this.processMutations(mutations);
      });
    }
    ElementObserver.prototype.start = function() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, {
          attributes: true,
          childList: true,
          subtree: true
        });
        this.refresh();
      }
    };
    ElementObserver.prototype.stop = function() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    };
    ElementObserver.prototype.refresh = function() {
      if (this.started) {
        var matches = new Set(this.matchElementsInTree());
        for (var _i = 0, _a = Array.from(this.elements); _i < _a.length; _i++) {
          var element = _a[_i];
          if (!matches.has(element)) {
            this.removeElement(element);
          }
        }
        for (var _b = 0, _c = Array.from(matches); _b < _c.length; _b++) {
          var element = _c[_b];
          this.addElement(element);
        }
      }
    };
    ElementObserver.prototype.processMutations = function(mutations) {
      if (this.started) {
        for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
          var mutation = mutations_1[_i];
          this.processMutation(mutation);
        }
      }
    };
    ElementObserver.prototype.processMutation = function(mutation) {
      if (mutation.type == "attributes") {
        this.processAttributeChange(mutation.target, mutation.attributeName);
      } else if (mutation.type == "childList") {
        this.processRemovedNodes(mutation.removedNodes);
        this.processAddedNodes(mutation.addedNodes);
      }
    };
    ElementObserver.prototype.processAttributeChange = function(node, attributeName) {
      var element = node;
      if (this.elements.has(element)) {
        if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
          this.delegate.elementAttributeChanged(element, attributeName);
        } else {
          this.removeElement(element);
        }
      } else if (this.matchElement(element)) {
        this.addElement(element);
      }
    };
    ElementObserver.prototype.processRemovedNodes = function(nodes) {
      for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
        var node = _a[_i];
        var element = this.elementFromNode(node);
        if (element) {
          this.processTree(element, this.removeElement);
        }
      }
    };
    ElementObserver.prototype.processAddedNodes = function(nodes) {
      for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
        var node = _a[_i];
        var element = this.elementFromNode(node);
        if (element && this.elementIsActive(element)) {
          this.processTree(element, this.addElement);
        }
      }
    };
    ElementObserver.prototype.matchElement = function(element) {
      return this.delegate.matchElement(element);
    };
    ElementObserver.prototype.matchElementsInTree = function(tree) {
      if (tree === void 0) {
        tree = this.element;
      }
      return this.delegate.matchElementsInTree(tree);
    };
    ElementObserver.prototype.processTree = function(tree, processor) {
      for (var _i = 0, _a = this.matchElementsInTree(tree); _i < _a.length; _i++) {
        var element = _a[_i];
        processor.call(this, element);
      }
    };
    ElementObserver.prototype.elementFromNode = function(node) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        return node;
      }
    };
    ElementObserver.prototype.elementIsActive = function(element) {
      if (element.isConnected != this.element.isConnected) {
        return false;
      } else {
        return this.element.contains(element);
      }
    };
    ElementObserver.prototype.addElement = function(element) {
      if (!this.elements.has(element)) {
        if (this.elementIsActive(element)) {
          this.elements.add(element);
          if (this.delegate.elementMatched) {
            this.delegate.elementMatched(element);
          }
        }
      }
    };
    ElementObserver.prototype.removeElement = function(element) {
      if (this.elements.has(element)) {
        this.elements.delete(element);
        if (this.delegate.elementUnmatched) {
          this.delegate.elementUnmatched(element);
        }
      }
    };
    return ElementObserver;
  }();
  var AttributeObserver = function() {
    function AttributeObserver(element, attributeName, delegate) {
      this.attributeName = attributeName;
      this.delegate = delegate;
      this.elementObserver = new ElementObserver(element, this);
    }
    Object.defineProperty(AttributeObserver.prototype, "element", {
      get: function() {
        return this.elementObserver.element;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(AttributeObserver.prototype, "selector", {
      get: function() {
        return "[" + this.attributeName + "]";
      },
      enumerable: true,
      configurable: true
    });
    AttributeObserver.prototype.start = function() {
      this.elementObserver.start();
    };
    AttributeObserver.prototype.stop = function() {
      this.elementObserver.stop();
    };
    AttributeObserver.prototype.refresh = function() {
      this.elementObserver.refresh();
    };
    Object.defineProperty(AttributeObserver.prototype, "started", {
      get: function() {
        return this.elementObserver.started;
      },
      enumerable: true,
      configurable: true
    });
    AttributeObserver.prototype.matchElement = function(element) {
      return element.hasAttribute(this.attributeName);
    };
    AttributeObserver.prototype.matchElementsInTree = function(tree) {
      var match = this.matchElement(tree) ? [ tree ] : [];
      var matches = Array.from(tree.querySelectorAll(this.selector));
      return match.concat(matches);
    };
    AttributeObserver.prototype.elementMatched = function(element) {
      if (this.delegate.elementMatchedAttribute) {
        this.delegate.elementMatchedAttribute(element, this.attributeName);
      }
    };
    AttributeObserver.prototype.elementUnmatched = function(element) {
      if (this.delegate.elementUnmatchedAttribute) {
        this.delegate.elementUnmatchedAttribute(element, this.attributeName);
      }
    };
    AttributeObserver.prototype.elementAttributeChanged = function(element, attributeName) {
      if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
        this.delegate.elementAttributeValueChanged(element, attributeName);
      }
    };
    return AttributeObserver;
  }();
  function add(map, key, value) {
    fetch(map, key).add(value);
  }
  function del(map, key, value) {
    fetch(map, key).delete(value);
    prune(map, key);
  }
  function fetch(map, key) {
    var values = map.get(key);
    if (!values) {
      values = new Set();
      map.set(key, values);
    }
    return values;
  }
  function prune(map, key) {
    var values = map.get(key);
    if (values != null && values.size == 0) {
      map.delete(key);
    }
  }
  var Multimap = function() {
    function Multimap() {
      this.valuesByKey = new Map();
    }
    Object.defineProperty(Multimap.prototype, "values", {
      get: function() {
        var sets = Array.from(this.valuesByKey.values());
        return sets.reduce(function(values, set) {
          return values.concat(Array.from(set));
        }, []);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Multimap.prototype, "size", {
      get: function() {
        var sets = Array.from(this.valuesByKey.values());
        return sets.reduce(function(size, set) {
          return size + set.size;
        }, 0);
      },
      enumerable: true,
      configurable: true
    });
    Multimap.prototype.add = function(key, value) {
      add(this.valuesByKey, key, value);
    };
    Multimap.prototype.delete = function(key, value) {
      del(this.valuesByKey, key, value);
    };
    Multimap.prototype.has = function(key, value) {
      var values = this.valuesByKey.get(key);
      return values != null && values.has(value);
    };
    Multimap.prototype.hasKey = function(key) {
      return this.valuesByKey.has(key);
    };
    Multimap.prototype.hasValue = function(value) {
      var sets = Array.from(this.valuesByKey.values());
      return sets.some(function(set) {
        return set.has(value);
      });
    };
    Multimap.prototype.getValuesForKey = function(key) {
      var values = this.valuesByKey.get(key);
      return values ? Array.from(values) : [];
    };
    Multimap.prototype.getKeysForValue = function(value) {
      return Array.from(this.valuesByKey).filter(function(_a) {
        var key = _a[0], values = _a[1];
        return values.has(value);
      }).map(function(_a) {
        var key = _a[0], values = _a[1];
        return key;
      });
    };
    return Multimap;
  }();
  var __extends = undefined && undefined.__extends || function() {
    var extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var IndexedMultimap = function(_super) {
    __extends(IndexedMultimap, _super);
    function IndexedMultimap() {
      var _this = _super.call(this) || this;
      _this.keysByValue = new Map();
      return _this;
    }
    Object.defineProperty(IndexedMultimap.prototype, "values", {
      get: function() {
        return Array.from(this.keysByValue.keys());
      },
      enumerable: true,
      configurable: true
    });
    IndexedMultimap.prototype.add = function(key, value) {
      _super.prototype.add.call(this, key, value);
      add(this.keysByValue, value, key);
    };
    IndexedMultimap.prototype.delete = function(key, value) {
      _super.prototype.delete.call(this, key, value);
      del(this.keysByValue, value, key);
    };
    IndexedMultimap.prototype.hasValue = function(value) {
      return this.keysByValue.has(value);
    };
    IndexedMultimap.prototype.getKeysForValue = function(value) {
      var set = this.keysByValue.get(value);
      return set ? Array.from(set) : [];
    };
    return IndexedMultimap;
  }(Multimap);
  var TokenListObserver = function() {
    function TokenListObserver(element, attributeName, delegate) {
      this.attributeObserver = new AttributeObserver(element, attributeName, this);
      this.delegate = delegate;
      this.tokensByElement = new Multimap();
    }
    Object.defineProperty(TokenListObserver.prototype, "started", {
      get: function() {
        return this.attributeObserver.started;
      },
      enumerable: true,
      configurable: true
    });
    TokenListObserver.prototype.start = function() {
      this.attributeObserver.start();
    };
    TokenListObserver.prototype.stop = function() {
      this.attributeObserver.stop();
    };
    TokenListObserver.prototype.refresh = function() {
      this.attributeObserver.refresh();
    };
    Object.defineProperty(TokenListObserver.prototype, "element", {
      get: function() {
        return this.attributeObserver.element;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TokenListObserver.prototype, "attributeName", {
      get: function() {
        return this.attributeObserver.attributeName;
      },
      enumerable: true,
      configurable: true
    });
    TokenListObserver.prototype.elementMatchedAttribute = function(element) {
      this.tokensMatched(this.readTokensForElement(element));
    };
    TokenListObserver.prototype.elementAttributeValueChanged = function(element) {
      var _a = this.refreshTokensForElement(element), unmatchedTokens = _a[0], matchedTokens = _a[1];
      this.tokensUnmatched(unmatchedTokens);
      this.tokensMatched(matchedTokens);
    };
    TokenListObserver.prototype.elementUnmatchedAttribute = function(element) {
      this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    };
    TokenListObserver.prototype.tokensMatched = function(tokens) {
      var _this = this;
      tokens.forEach(function(token) {
        return _this.tokenMatched(token);
      });
    };
    TokenListObserver.prototype.tokensUnmatched = function(tokens) {
      var _this = this;
      tokens.forEach(function(token) {
        return _this.tokenUnmatched(token);
      });
    };
    TokenListObserver.prototype.tokenMatched = function(token) {
      this.delegate.tokenMatched(token);
      this.tokensByElement.add(token.element, token);
    };
    TokenListObserver.prototype.tokenUnmatched = function(token) {
      this.delegate.tokenUnmatched(token);
      this.tokensByElement.delete(token.element, token);
    };
    TokenListObserver.prototype.refreshTokensForElement = function(element) {
      var previousTokens = this.tokensByElement.getValuesForKey(element);
      var currentTokens = this.readTokensForElement(element);
      var firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(function(_a) {
        var previousToken = _a[0], currentToken = _a[1];
        return !tokensAreEqual(previousToken, currentToken);
      });
      if (firstDifferingIndex == -1) {
        return [ [], [] ];
      } else {
        return [ previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex) ];
      }
    };
    TokenListObserver.prototype.readTokensForElement = function(element) {
      var attributeName = this.attributeName;
      var tokenString = element.getAttribute(attributeName) || "";
      return parseTokenString(tokenString, element, attributeName);
    };
    return TokenListObserver;
  }();
  function parseTokenString(tokenString, element, attributeName) {
    return tokenString.trim().split(/\s+/).filter(function(content) {
      return content.length;
    }).map(function(content, index) {
      return {
        element: element,
        attributeName: attributeName,
        content: content,
        index: index
      };
    });
  }
  function zip(left, right) {
    var length = Math.max(left.length, right.length);
    return Array.from({
      length: length
    }, function(_, index) {
      return [ left[index], right[index] ];
    });
  }
  function tokensAreEqual(left, right) {
    return left && right && left.index == right.index && left.content == right.content;
  }
  var ValueListObserver = function() {
    function ValueListObserver(element, attributeName, delegate) {
      this.tokenListObserver = new TokenListObserver(element, attributeName, this);
      this.delegate = delegate;
      this.parseResultsByToken = new WeakMap();
      this.valuesByTokenByElement = new WeakMap();
    }
    Object.defineProperty(ValueListObserver.prototype, "started", {
      get: function() {
        return this.tokenListObserver.started;
      },
      enumerable: true,
      configurable: true
    });
    ValueListObserver.prototype.start = function() {
      this.tokenListObserver.start();
    };
    ValueListObserver.prototype.stop = function() {
      this.tokenListObserver.stop();
    };
    ValueListObserver.prototype.refresh = function() {
      this.tokenListObserver.refresh();
    };
    Object.defineProperty(ValueListObserver.prototype, "element", {
      get: function() {
        return this.tokenListObserver.element;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ValueListObserver.prototype, "attributeName", {
      get: function() {
        return this.tokenListObserver.attributeName;
      },
      enumerable: true,
      configurable: true
    });
    ValueListObserver.prototype.tokenMatched = function(token) {
      var element = token.element;
      var value = this.fetchParseResultForToken(token).value;
      if (value) {
        this.fetchValuesByTokenForElement(element).set(token, value);
        this.delegate.elementMatchedValue(element, value);
      }
    };
    ValueListObserver.prototype.tokenUnmatched = function(token) {
      var element = token.element;
      var value = this.fetchParseResultForToken(token).value;
      if (value) {
        this.fetchValuesByTokenForElement(element).delete(token);
        this.delegate.elementUnmatchedValue(element, value);
      }
    };
    ValueListObserver.prototype.fetchParseResultForToken = function(token) {
      var parseResult = this.parseResultsByToken.get(token);
      if (!parseResult) {
        parseResult = this.parseToken(token);
        this.parseResultsByToken.set(token, parseResult);
      }
      return parseResult;
    };
    ValueListObserver.prototype.fetchValuesByTokenForElement = function(element) {
      var valuesByToken = this.valuesByTokenByElement.get(element);
      if (!valuesByToken) {
        valuesByToken = new Map();
        this.valuesByTokenByElement.set(element, valuesByToken);
      }
      return valuesByToken;
    };
    ValueListObserver.prototype.parseToken = function(token) {
      try {
        var value = this.delegate.parseValueForToken(token);
        return {
          value: value
        };
      } catch (error) {
        return {
          error: error
        };
      }
    };
    return ValueListObserver;
  }();
  var BindingObserver = function() {
    function BindingObserver(context, delegate) {
      this.context = context;
      this.delegate = delegate;
      this.bindingsByAction = new Map();
    }
    BindingObserver.prototype.start = function() {
      if (!this.valueListObserver) {
        this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
        this.valueListObserver.start();
      }
    };
    BindingObserver.prototype.stop = function() {
      if (this.valueListObserver) {
        this.valueListObserver.stop();
        delete this.valueListObserver;
        this.disconnectAllActions();
      }
    };
    Object.defineProperty(BindingObserver.prototype, "element", {
      get: function() {
        return this.context.element;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BindingObserver.prototype, "identifier", {
      get: function() {
        return this.context.identifier;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BindingObserver.prototype, "actionAttribute", {
      get: function() {
        return this.schema.actionAttribute;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BindingObserver.prototype, "schema", {
      get: function() {
        return this.context.schema;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BindingObserver.prototype, "bindings", {
      get: function() {
        return Array.from(this.bindingsByAction.values());
      },
      enumerable: true,
      configurable: true
    });
    BindingObserver.prototype.connectAction = function(action) {
      var binding = new Binding(this.context, action);
      this.bindingsByAction.set(action, binding);
      this.delegate.bindingConnected(binding);
    };
    BindingObserver.prototype.disconnectAction = function(action) {
      var binding = this.bindingsByAction.get(action);
      if (binding) {
        this.bindingsByAction.delete(action);
        this.delegate.bindingDisconnected(binding);
      }
    };
    BindingObserver.prototype.disconnectAllActions = function() {
      var _this = this;
      this.bindings.forEach(function(binding) {
        return _this.delegate.bindingDisconnected(binding);
      });
      this.bindingsByAction.clear();
    };
    BindingObserver.prototype.parseValueForToken = function(token) {
      var action = Action.forToken(token);
      if (action.identifier == this.identifier) {
        return action;
      }
    };
    BindingObserver.prototype.elementMatchedValue = function(element, action) {
      this.connectAction(action);
    };
    BindingObserver.prototype.elementUnmatchedValue = function(element, action) {
      this.disconnectAction(action);
    };
    return BindingObserver;
  }();
  var Context = function() {
    function Context(module, scope) {
      this.module = module;
      this.scope = scope;
      this.controller = new module.controllerConstructor(this);
      this.bindingObserver = new BindingObserver(this, this.dispatcher);
      try {
        this.controller.initialize();
      } catch (error) {
        this.handleError(error, "initializing controller");
      }
    }
    Context.prototype.connect = function() {
      this.bindingObserver.start();
      try {
        this.controller.connect();
      } catch (error) {
        this.handleError(error, "connecting controller");
      }
    };
    Context.prototype.disconnect = function() {
      try {
        this.controller.disconnect();
      } catch (error) {
        this.handleError(error, "disconnecting controller");
      }
      this.bindingObserver.stop();
    };
    Object.defineProperty(Context.prototype, "application", {
      get: function() {
        return this.module.application;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Context.prototype, "identifier", {
      get: function() {
        return this.module.identifier;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Context.prototype, "schema", {
      get: function() {
        return this.application.schema;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Context.prototype, "dispatcher", {
      get: function() {
        return this.application.dispatcher;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Context.prototype, "element", {
      get: function() {
        return this.scope.element;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Context.prototype, "parentElement", {
      get: function() {
        return this.element.parentElement;
      },
      enumerable: true,
      configurable: true
    });
    Context.prototype.handleError = function(error, message, detail) {
      if (detail === void 0) {
        detail = {};
      }
      var _a = this, identifier = _a.identifier, controller = _a.controller, element = _a.element;
      detail = Object.assign({
        identifier: identifier,
        controller: controller,
        element: element
      }, detail);
      this.application.handleError(error, "Error " + message, detail);
    };
    return Context;
  }();
  var __extends$1 = undefined && undefined.__extends || function() {
    var extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  function blessDefinition(definition) {
    return {
      identifier: definition.identifier,
      controllerConstructor: blessControllerConstructor(definition.controllerConstructor)
    };
  }
  function blessControllerConstructor(controllerConstructor) {
    var constructor = extend(controllerConstructor);
    constructor.bless();
    return constructor;
  }
  var extend = function() {
    function extendWithReflect(constructor) {
      function Controller() {
        var _newTarget = this && this instanceof Controller ? this.constructor : void 0;
        return Reflect.construct(constructor, arguments, _newTarget);
      }
      Controller.prototype = Object.create(constructor.prototype, {
        constructor: {
          value: Controller
        }
      });
      Reflect.setPrototypeOf(Controller, constructor);
      return Controller;
    }
    function testReflectExtension() {
      var a = function() {
        this.a.call(this);
      };
      var b = extendWithReflect(a);
      b.prototype.a = function() {};
      return new b();
    }
    try {
      testReflectExtension();
      return extendWithReflect;
    } catch (error) {
      return function(constructor) {
        return function(_super) {
          __extends$1(Controller, _super);
          function Controller() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          return Controller;
        }(constructor);
      };
    }
  }();
  var Module = function() {
    function Module(application, definition) {
      this.application = application;
      this.definition = blessDefinition(definition);
      this.contextsByScope = new WeakMap();
      this.connectedContexts = new Set();
    }
    Object.defineProperty(Module.prototype, "identifier", {
      get: function() {
        return this.definition.identifier;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Module.prototype, "controllerConstructor", {
      get: function() {
        return this.definition.controllerConstructor;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Module.prototype, "contexts", {
      get: function() {
        return Array.from(this.connectedContexts);
      },
      enumerable: true,
      configurable: true
    });
    Module.prototype.connectContextForScope = function(scope) {
      var context = this.fetchContextForScope(scope);
      this.connectedContexts.add(context);
      context.connect();
    };
    Module.prototype.disconnectContextForScope = function(scope) {
      var context = this.contextsByScope.get(scope);
      if (context) {
        this.connectedContexts.delete(context);
        context.disconnect();
      }
    };
    Module.prototype.fetchContextForScope = function(scope) {
      var context = this.contextsByScope.get(scope);
      if (!context) {
        context = new Context(this, scope);
        this.contextsByScope.set(scope, context);
      }
      return context;
    };
    return Module;
  }();
  var DataMap = function() {
    function DataMap(scope) {
      this.scope = scope;
    }
    Object.defineProperty(DataMap.prototype, "element", {
      get: function() {
        return this.scope.element;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DataMap.prototype, "identifier", {
      get: function() {
        return this.scope.identifier;
      },
      enumerable: true,
      configurable: true
    });
    DataMap.prototype.get = function(key) {
      key = this.getFormattedKey(key);
      return this.element.getAttribute(key);
    };
    DataMap.prototype.set = function(key, value) {
      key = this.getFormattedKey(key);
      this.element.setAttribute(key, value);
      return this.get(key);
    };
    DataMap.prototype.has = function(key) {
      key = this.getFormattedKey(key);
      return this.element.hasAttribute(key);
    };
    DataMap.prototype.delete = function(key) {
      if (this.has(key)) {
        key = this.getFormattedKey(key);
        this.element.removeAttribute(key);
        return true;
      } else {
        return false;
      }
    };
    DataMap.prototype.getFormattedKey = function(key) {
      return "data-" + this.identifier + "-" + dasherize(key);
    };
    return DataMap;
  }();
  function dasherize(value) {
    return value.replace(/([A-Z])/g, function(_, char) {
      return "-" + char.toLowerCase();
    });
  }
  function attributeValueContainsToken(attributeName, token) {
    return "[" + attributeName + '~="' + token + '"]';
  }
  var TargetSet = function() {
    function TargetSet(scope) {
      this.scope = scope;
    }
    Object.defineProperty(TargetSet.prototype, "element", {
      get: function() {
        return this.scope.element;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TargetSet.prototype, "identifier", {
      get: function() {
        return this.scope.identifier;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TargetSet.prototype, "schema", {
      get: function() {
        return this.scope.schema;
      },
      enumerable: true,
      configurable: true
    });
    TargetSet.prototype.has = function(targetName) {
      return this.find(targetName) != null;
    };
    TargetSet.prototype.find = function() {
      var targetNames = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        targetNames[_i] = arguments[_i];
      }
      var selector = this.getSelectorForTargetNames(targetNames);
      return this.scope.findElement(selector);
    };
    TargetSet.prototype.findAll = function() {
      var targetNames = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        targetNames[_i] = arguments[_i];
      }
      var selector = this.getSelectorForTargetNames(targetNames);
      return this.scope.findAllElements(selector);
    };
    TargetSet.prototype.getSelectorForTargetNames = function(targetNames) {
      var _this = this;
      return targetNames.map(function(targetName) {
        return _this.getSelectorForTargetName(targetName);
      }).join(", ");
    };
    TargetSet.prototype.getSelectorForTargetName = function(targetName) {
      var targetDescriptor = this.identifier + "." + targetName;
      return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    };
    return TargetSet;
  }();
  var Scope = function() {
    function Scope(schema, identifier, element) {
      this.schema = schema;
      this.identifier = identifier;
      this.element = element;
      this.targets = new TargetSet(this);
      this.data = new DataMap(this);
    }
    Scope.prototype.findElement = function(selector) {
      return this.findAllElements(selector)[0];
    };
    Scope.prototype.findAllElements = function(selector) {
      var head = this.element.matches(selector) ? [ this.element ] : [];
      var tail = this.filterElements(Array.from(this.element.querySelectorAll(selector)));
      return head.concat(tail);
    };
    Scope.prototype.filterElements = function(elements) {
      var _this = this;
      return elements.filter(function(element) {
        return _this.containsElement(element);
      });
    };
    Scope.prototype.containsElement = function(element) {
      return element.closest(this.controllerSelector) === this.element;
    };
    Object.defineProperty(Scope.prototype, "controllerSelector", {
      get: function() {
        return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
      },
      enumerable: true,
      configurable: true
    });
    return Scope;
  }();
  var ScopeObserver = function() {
    function ScopeObserver(element, schema, delegate) {
      this.element = element;
      this.schema = schema;
      this.delegate = delegate;
      this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
      this.scopesByIdentifierByElement = new WeakMap();
      this.scopeReferenceCounts = new WeakMap();
    }
    ScopeObserver.prototype.start = function() {
      this.valueListObserver.start();
    };
    ScopeObserver.prototype.stop = function() {
      this.valueListObserver.stop();
    };
    Object.defineProperty(ScopeObserver.prototype, "controllerAttribute", {
      get: function() {
        return this.schema.controllerAttribute;
      },
      enumerable: true,
      configurable: true
    });
    ScopeObserver.prototype.parseValueForToken = function(token) {
      var element = token.element, identifier = token.content;
      var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
      var scope = scopesByIdentifier.get(identifier);
      if (!scope) {
        scope = new Scope(this.schema, identifier, element);
        scopesByIdentifier.set(identifier, scope);
      }
      return scope;
    };
    ScopeObserver.prototype.elementMatchedValue = function(element, value) {
      var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
      this.scopeReferenceCounts.set(value, referenceCount);
      if (referenceCount == 1) {
        this.delegate.scopeConnected(value);
      }
    };
    ScopeObserver.prototype.elementUnmatchedValue = function(element, value) {
      var referenceCount = this.scopeReferenceCounts.get(value);
      if (referenceCount) {
        this.scopeReferenceCounts.set(value, referenceCount - 1);
        if (referenceCount == 1) {
          this.delegate.scopeDisconnected(value);
        }
      }
    };
    ScopeObserver.prototype.fetchScopesByIdentifierForElement = function(element) {
      var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
      if (!scopesByIdentifier) {
        scopesByIdentifier = new Map();
        this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
      }
      return scopesByIdentifier;
    };
    return ScopeObserver;
  }();
  var Router = function() {
    function Router(application) {
      this.application = application;
      this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
      this.scopesByIdentifier = new Multimap();
      this.modulesByIdentifier = new Map();
    }
    Object.defineProperty(Router.prototype, "element", {
      get: function() {
        return this.application.element;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Router.prototype, "schema", {
      get: function() {
        return this.application.schema;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Router.prototype, "controllerAttribute", {
      get: function() {
        return this.schema.controllerAttribute;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Router.prototype, "modules", {
      get: function() {
        return Array.from(this.modulesByIdentifier.values());
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Router.prototype, "contexts", {
      get: function() {
        return this.modules.reduce(function(contexts, module) {
          return contexts.concat(module.contexts);
        }, []);
      },
      enumerable: true,
      configurable: true
    });
    Router.prototype.start = function() {
      this.scopeObserver.start();
    };
    Router.prototype.stop = function() {
      this.scopeObserver.stop();
    };
    Router.prototype.loadDefinition = function(definition) {
      this.unloadIdentifier(definition.identifier);
      var module = new Module(this.application, definition);
      this.connectModule(module);
    };
    Router.prototype.unloadIdentifier = function(identifier) {
      var module = this.modulesByIdentifier.get(identifier);
      if (module) {
        this.disconnectModule(module);
      }
    };
    Router.prototype.getContextForElementAndIdentifier = function(element, identifier) {
      var module = this.modulesByIdentifier.get(identifier);
      if (module) {
        return module.contexts.find(function(context) {
          return context.element == element;
        });
      }
    };
    Router.prototype.handleError = function(error, message, detail) {
      this.application.handleError(error, message, detail);
    };
    Router.prototype.scopeConnected = function(scope) {
      this.scopesByIdentifier.add(scope.identifier, scope);
      var module = this.modulesByIdentifier.get(scope.identifier);
      if (module) {
        module.connectContextForScope(scope);
      }
    };
    Router.prototype.scopeDisconnected = function(scope) {
      this.scopesByIdentifier.delete(scope.identifier, scope);
      var module = this.modulesByIdentifier.get(scope.identifier);
      if (module) {
        module.disconnectContextForScope(scope);
      }
    };
    Router.prototype.connectModule = function(module) {
      this.modulesByIdentifier.set(module.identifier, module);
      var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach(function(scope) {
        return module.connectContextForScope(scope);
      });
    };
    Router.prototype.disconnectModule = function(module) {
      this.modulesByIdentifier.delete(module.identifier);
      var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach(function(scope) {
        return module.disconnectContextForScope(scope);
      });
    };
    return Router;
  }();
  var defaultSchema = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target"
  };
  var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : new P(function(resolve) {
          resolve(result.value);
        }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
      label: 0,
      sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    }, f, y, t, g;
    return g = {
      next: verb(0),
      throw: verb(1),
      return: verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([ n, v ]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
        if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [ 0, t.value ];
        switch (op[0]) {
         case 0:
         case 1:
          t = op;
          break;

         case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

         case 5:
          _.label++;
          y = op[1];
          op = [ 0 ];
          continue;

         case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;

         default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [ 6, e ];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  };
  var Application = function() {
    function Application(element, schema) {
      if (element === void 0) {
        element = document.documentElement;
      }
      if (schema === void 0) {
        schema = defaultSchema;
      }
      this.element = element;
      this.schema = schema;
      this.dispatcher = new Dispatcher(this);
      this.router = new Router(this);
    }
    Application.start = function(element, schema) {
      var application = new Application(element, schema);
      application.start();
      return application;
    };
    Application.prototype.start = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
           case 0:
            return [ 4, domReady() ];

           case 1:
            _a.sent();
            this.router.start();
            this.dispatcher.start();
            return [ 2 ];
          }
        });
      });
    };
    Application.prototype.stop = function() {
      this.router.stop();
      this.dispatcher.stop();
    };
    Application.prototype.register = function(identifier, controllerConstructor) {
      this.load({
        identifier: identifier,
        controllerConstructor: controllerConstructor
      });
    };
    Application.prototype.load = function(head) {
      var _this = this;
      var rest = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
      }
      var definitions = Array.isArray(head) ? head : [ head ].concat(rest);
      definitions.forEach(function(definition) {
        return _this.router.loadDefinition(definition);
      });
    };
    Application.prototype.unload = function(head) {
      var _this = this;
      var rest = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
      }
      var identifiers = Array.isArray(head) ? head : [ head ].concat(rest);
      identifiers.forEach(function(identifier) {
        return _this.router.unloadIdentifier(identifier);
      });
    };
    Object.defineProperty(Application.prototype, "controllers", {
      get: function() {
        return this.router.contexts.map(function(context) {
          return context.controller;
        });
      },
      enumerable: true,
      configurable: true
    });
    Application.prototype.getControllerForElementAndIdentifier = function(element, identifier) {
      var context = this.router.getContextForElementAndIdentifier(element, identifier);
      return context ? context.controller : null;
    };
    Application.prototype.handleError = function(error, message, detail) {
      console.error("%s\n\n%o\n\n%o", message, error, detail);
    };
    return Application;
  }();
  function domReady() {
    return new Promise(function(resolve) {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  }
  function defineTargetProperties(constructor) {
    var prototype = constructor.prototype;
    var targetNames = getTargetNamesForConstructor(constructor);
    targetNames.forEach(function(name) {
      var _a;
      return defineLinkedProperties(prototype, (_a = {}, _a[name + "Target"] = {
        get: function() {
          var target = this.targets.find(name);
          if (target) {
            return target;
          } else {
            throw new Error('Missing target element "' + this.identifier + "." + name + '"');
          }
        }
      }, _a[name + "Targets"] = {
        get: function() {
          return this.targets.findAll(name);
        }
      }, _a["has" + capitalize(name) + "Target"] = {
        get: function() {
          return this.targets.has(name);
        }
      }, _a));
    });
  }
  function getTargetNamesForConstructor(constructor) {
    var ancestors = getAncestorsForConstructor(constructor);
    return Array.from(ancestors.reduce(function(targetNames, constructor) {
      getOwnTargetNamesForConstructor(constructor).forEach(function(name) {
        return targetNames.add(name);
      });
      return targetNames;
    }, new Set()));
  }
  function getAncestorsForConstructor(constructor) {
    var ancestors = [];
    while (constructor) {
      ancestors.push(constructor);
      constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors;
  }
  function getOwnTargetNamesForConstructor(constructor) {
    var definition = constructor["targets"];
    return Array.isArray(definition) ? definition : [];
  }
  function defineLinkedProperties(object, properties) {
    Object.keys(properties).forEach(function(name) {
      if (!(name in object)) {
        var descriptor = properties[name];
        Object.defineProperty(object, name, descriptor);
      }
    });
  }
  function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  var Controller = function() {
    function Controller(context) {
      this.context = context;
    }
    Controller.bless = function() {
      defineTargetProperties(this);
    };
    Object.defineProperty(Controller.prototype, "application", {
      get: function() {
        return this.context.application;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Controller.prototype, "scope", {
      get: function() {
        return this.context.scope;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Controller.prototype, "element", {
      get: function() {
        return this.scope.element;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Controller.prototype, "identifier", {
      get: function() {
        return this.scope.identifier;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Controller.prototype, "targets", {
      get: function() {
        return this.scope.targets;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Controller.prototype, "data", {
      get: function() {
        return this.scope.data;
      },
      enumerable: true,
      configurable: true
    });
    Controller.prototype.initialize = function() {};
    Controller.prototype.connect = function() {};
    Controller.prototype.disconnect = function() {};
    Controller.targets = [];
    return Controller;
  }();
  exports.Application = Application;
  exports.Context = Context;
  exports.Controller = Controller;
  exports.defaultSchema = defaultSchema;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});
