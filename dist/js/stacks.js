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


;

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Popper = factory());
}(this, (function () { 'use strict';

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

return Popper;

})));
//# sourceMappingURL=popper.js.map


;

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
var Stacks;
(function (Stacks) {
    var StacksApplication = (function (_super) {
        __extends(StacksApplication, _super);
        function StacksApplication() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StacksApplication.prototype.load = function (head) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            var definitions = Array.isArray(head) ? head : [head].concat(rest);
            for (var _a = 0, definitions_1 = definitions; _a < definitions_1.length; _a++) {
                var definition = definitions_1[_a];
                var hasPrefix = /^s-/.test(definition.identifier);
                if (Stacks._initializing && !hasPrefix) {
                    throw "Stacks-created Stimulus controller names must start with \"s-\".";
                }
                if (!Stacks._initializing && hasPrefix) {
                    throw "The \"s-\" prefix on Stimulus controller names is reserved for Stacks-created controllers.";
                }
            }
            _super.prototype.load.call(this, definitions);
        };
        StacksApplication.start = function (element, schema) {
            var application = new StacksApplication(element, schema);
            application.start();
            return application;
        };
        return StacksApplication;
    }(Stimulus.Application));
    Stacks.application = StacksApplication.start();
    Stacks._initializing = true;
    var StacksController = (function (_super) {
        __extends(StacksController, _super);
        function StacksController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StacksController.prototype.getElementData = function (element, key) {
            return element.getAttribute("data-" + this.identifier + "-" + key);
        };
        ;
        StacksController.prototype.setElementData = function (element, key, value) {
            element.setAttribute("data-" + this.identifier + "-" + key, value);
        };
        ;
        StacksController.prototype.removeElementData = function (element, key) {
            element.removeAttribute("data-" + this.identifier + "-" + key);
        };
        ;
        StacksController.prototype.triggerEvent = function (eventName, detail, optionalElement) {
            var namespacedName = this.identifier + ":" + eventName;
            var event;
            try {
                event = new CustomEvent(namespacedName, { bubbles: true, cancelable: true, detail: detail });
            }
            catch (ex) {
                event = document.createEvent("CustomEvent");
                event.initCustomEvent(namespacedName, true, true, detail);
            }
            (optionalElement || this.element).dispatchEvent(event);
            return event;
        };
        ;
        return StacksController;
    }(Stimulus.Controller));
    Stacks.StacksController = StacksController;
    function createController(controllerDefinition) {
        var _a;
        var Controller = controllerDefinition.hasOwnProperty("targets")
            ? (_a = (function (_super) {
                    __extends(Controller, _super);
                    function Controller() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return Controller;
                }(StacksController)),
                _a.targets = controllerDefinition.targets,
                _a) : (function (_super) {
            __extends(Controller, _super);
            function Controller() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Controller;
        }(StacksController));
        for (var prop in controllerDefinition) {
            if (prop !== "targets" && controllerDefinition.hasOwnProperty(prop)) {
                Object.defineProperty(Controller.prototype, prop, Object.getOwnPropertyDescriptor(controllerDefinition, prop));
            }
        }
        return Controller;
    }
    Stacks.createController = createController;
    function addController(name, controller) {
        Stacks.application.register(name, createController(controller));
    }
    Stacks.addController = addController;
    function setTooltipHtml(element, html, options) {
        setTooltip(element, function (popover) { return popover.innerHTML = html; }, options);
    }
    Stacks.setTooltipHtml = setTooltipHtml;
    function setTooltipText(element, text, options) {
        setTooltip(element, function (popover) { return popover.textContent = text; }, options);
    }
    Stacks.setTooltipText = setTooltipText;
    var generatedTooltipIdNumber = 0;
    function setTooltip(element, fn, options) {
        var controllerText = element.getAttribute("data-controller") || "";
        if (!/(^|\s)s-tooltip(\s|$)/.test(controllerText)) {
            element.setAttribute("data-controller", controllerText + " s-tooltip");
        }
        var popoverId = element.getAttribute("aria-describedby");
        if (!popoverId) {
            popoverId = "--stacks-s-tooltip-" + (generatedTooltipIdNumber++);
            element.setAttribute("aria-describedby", popoverId);
        }
        if (options && options.placement) {
            element.setAttribute("data-s-tooltip-placement", options.placement);
        }
        if (options && options.classNames) {
            element.setAttribute("data-s-tooltip-class-names", options.classNames);
        }
        var popover = document.getElementById(popoverId);
        if (!popover) {
            popover = document.createElement("div");
            popover.id = popoverId;
            popover.className = "s-popover s-popover__tooltip";
            popover.setAttribute("aria-hidden", "true");
            popover.setAttribute("role", "tooltip");
            var parentNode = element.parentNode;
            if (parentNode) {
                parentNode.insertBefore(popover, element.nextSibling);
            }
            else {
                document.body.appendChild(popover);
            }
        }
        var arrow = popover.querySelector(".s-popover--arrow");
        fn(popover);
        if (arrow) {
            popover.appendChild(arrow);
        }
        else {
            popover.insertAdjacentHTML("beforeend", "<div class=\"s-popover--arrow\"></div>");
        }
    }
})(Stacks || (Stacks = {}));
//# sourceMappingURL=stacks.js.map

;

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
    var RADIO_OFF_EVENT = "s-expandable-control:radio-off";
    function globalChangeListener(e) {
        var target = e.target;
        if (!(target instanceof HTMLInputElement) || target.nodeName !== "INPUT" || target.type !== "radio") {
            return;
        }
        document.querySelectorAll('input[type="radio"][name="' + target.name + '"]')
            .forEach(function (other) {
            if (other === e.target) {
                return;
            }
            var customEvent;
            try {
                customEvent = new Event(RADIO_OFF_EVENT);
            }
            catch (ex) {
                customEvent = document.createEvent("Event");
                customEvent.initEvent(RADIO_OFF_EVENT, true, true);
            }
            other.dispatchEvent(customEvent);
        });
    }
    var refCount = 0;
    function globalChangeListenerRequired(required) {
        if (required) {
            refCount++;
            if (refCount === 1) {
                document.body.addEventListener("change", globalChangeListener);
            }
        }
        else {
            refCount--;
            if (refCount === 0) {
                document.body.removeEventListener("change", globalChangeListener);
            }
        }
    }
    Stacks.application.register("s-expandable-control", (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.initialize = function () {
            if (this.element.nodeName === "INPUT" && ["radio", "checkbox"].indexOf(this.element.type) >= 0) {
                this.isCollapsed = this._isCollapsedForCheckable;
                this.events = ["change", RADIO_OFF_EVENT];
                this.isCheckable = true;
                this.isRadio = this.element.type === "radio";
            }
            else {
                this.isCollapsed = this._isCollapsedForClickable;
                this.events = ["click", "keydown"];
            }
            this.listener = this.listener.bind(this);
        };
        ;
        class_1.prototype._isCollapsedForClickable = function () {
            var cc = this.controlledCollapsible;
            return cc ? !cc.classList.contains("is-expanded") : this.element.getAttribute("aria-expanded") === "false";
        };
        ;
        class_1.prototype._isCollapsedForCheckable = function () {
            return !this.element.checked;
        };
        ;
        Object.defineProperty(class_1.prototype, "controlledCollapsible", {
            get: function () {
                var attr = this.element.getAttribute("aria-controls");
                if (!attr) {
                    throw "couldn't find controls";
                }
                var result = document.getElementById(attr);
                if (!result) {
                    throw "couldn't find controls";
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        ;
        class_1.prototype._dispatchShowHideEvent = function (isShow) {
            this.triggerEvent(isShow ? "show" : "hide");
        };
        ;
        class_1.prototype._toggleClass = function (doAdd) {
            if (!this.data.has("toggle-class")) {
                return;
            }
            var cl = this.element.classList;
            var toggleClass = this.data.get("toggle-class");
            if (!toggleClass) {
                throw "couldn't find toggle class";
            }
            toggleClass.split(/\s+/).forEach(function (cls) {
                cl.toggle(cls, !!doAdd);
            });
        };
        ;
        class_1.prototype.listener = function (e) {
            var newCollapsed;
            if (this.isCheckable) {
                newCollapsed = !this.element.checked;
            }
            else {
                if (e.type == "keydown" && (e instanceof KeyboardEvent && e.keyCode != 13 && e.keyCode != 32)) {
                    return;
                }
                if (e.target !== e.currentTarget && ["A", "BUTTON"].indexOf(e.target.nodeName) >= 0) {
                    return;
                }
                newCollapsed = this.element.getAttribute("aria-expanded") === "true";
                e.preventDefault();
                if (e.type === "click") {
                    this.element.blur();
                }
            }
            this.element.setAttribute("aria-expanded", newCollapsed ? "false" : "true");
            this.controlledCollapsible.classList.toggle("is-expanded", !newCollapsed);
            this._dispatchShowHideEvent(!newCollapsed);
            this._toggleClass(!newCollapsed);
        };
        ;
        class_1.prototype.connect = function () {
            var _this = this;
            this.events.forEach(function (e) {
                _this.element.addEventListener(e, _this.listener);
            }, this);
            if (this.isRadio) {
                globalChangeListenerRequired(true);
            }
            this.element.setAttribute("aria-expanded", this.isCollapsed() ? "false" : "true");
            if (this.isCheckable) {
                var cc = this.controlledCollapsible;
                if (cc) {
                    var expected = !this.isCollapsed();
                    var actual = cc.classList.contains("is-expanded");
                    if (expected !== actual) {
                        cc.classList.toggle("is-expanded", expected);
                        this._dispatchShowHideEvent(expected);
                        this._toggleClass(expected);
                    }
                }
            }
        };
        ;
        class_1.prototype.disconnect = function () {
            var _this = this;
            this.events.forEach(function (e) {
                _this.element.removeEventListener(e, _this.listener);
            }, this);
            if (this.isRadio) {
                globalChangeListenerRequired(false);
            }
        };
        ;
        return class_1;
    }(Stacks.StacksController)));
})();
//# sourceMappingURL=s-expandable-control.js.map

;

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
    "use strict";
    var _a;
    Stacks.application.register("s-popover", (_a = (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.connect = function () {
                var referenceSelector = this.data.get("reference-selector");
                this.referenceElement = referenceSelector && this.element.querySelector(referenceSelector) || this.element;
                var popoverId = this.referenceElement.getAttribute("aria-controls");
                if (!popoverId) {
                    throw "[aria-controls=\"{POPOVER_ID}\"] required";
                }
                var element = document.getElementById(popoverId);
                if (!element) {
                    throw "element with popover id not found";
                }
                this.popoverElement = element;
                var isVisibleByDefault = this.popoverElement.classList.contains("is-visible");
                this.popper = new Popper(this.referenceElement, this.popoverElement, {
                    placement: this.data.get("placement") || "bottom",
                    eventsEnabled: isVisibleByDefault
                });
                this._toggleOptionalClasses(isVisibleByDefault);
            };
            ;
            class_1.prototype.disconnect = function () {
                this.popper.destroy();
                this._unbindDocumentEvents();
            };
            ;
            class_1.prototype.toggle = function () {
                this._toggle();
            };
            ;
            class_1.prototype.show = function () {
                this._toggle(true);
            };
            ;
            class_1.prototype.hide = function () {
                this._toggle(false);
            };
            ;
            class_1.prototype._toggle = function (show) {
                var toShow = show;
                if (typeof toShow === "undefined") {
                    toShow = !this.popoverElement.classList.contains("is-visible");
                }
                this.triggerEvent(toShow ? "show" : "hide");
                this.popper.update();
                this.popoverElement.classList.toggle("is-visible", show);
                this._toggleOptionalClasses(show);
                if (this.popoverElement.classList.contains("is-visible")) {
                    this._bindDocumentEvents();
                }
                else {
                    this._unbindDocumentEvents();
                }
                this.triggerEvent(toShow ? "shown" : "hidden");
            };
            ;
            class_1.prototype._bindDocumentEvents = function () {
                this._boundClickFn = this._boundClickFn || this._hideOnOutsideClick.bind(this);
                this._boundKeypressFn = this._boundKeypressFn || this._hideOnEscapePress.bind(this);
                document.addEventListener("click", this._boundClickFn);
                document.addEventListener("keyup", this._boundKeypressFn);
                this.popper.enableEventListeners();
            };
            ;
            class_1.prototype._unbindDocumentEvents = function () {
                document.removeEventListener("click", this._boundClickFn);
                document.removeEventListener("keyup", this._boundKeypressFn);
                this.popper.disableEventListeners();
            };
            ;
            class_1.prototype._hideOnOutsideClick = function (e) {
                var target = e.target;
                if (!this.referenceElement.contains(target) && !this.popoverElement.contains(target)) {
                    this.hide();
                }
            };
            ;
            class_1.prototype._hideOnEscapePress = function (e) {
                if (e.which !== 27 || !this.popoverElement.classList.contains("is-visible")) {
                    return;
                }
                if (this.popoverElement.contains(e.target)) {
                    this.referenceElement.focus();
                }
                this.hide();
            };
            ;
            class_1.prototype._toggleOptionalClasses = function (show) {
                if (!this.data.has("toggle-class")) {
                    return;
                }
                var cl = this.referenceElement.classList;
                this.data.get("toggle-class").split(/\s+/).forEach(function (cls) {
                    cl.toggle(cls, show);
                });
            };
            return class_1;
        }(Stacks.StacksController)),
        _a.targets = [],
        _a));
})();
//# sourceMappingURL=s-popover.js.map

;

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
    Stacks.application.register("s-table", (_a = (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.setCurrentSort = function (headElem, direction) {
                if (["asc", "desc", "none"].indexOf(direction) < 0) {
                    throw "direction must be one of asc, desc, or none";
                }
                var controller = this;
                this.columnTargets.forEach(function (target) {
                    var isCurrrent = target === headElem;
                    target.classList.toggle("is-sorted", isCurrrent && direction !== "none");
                    target.querySelectorAll(".js-sorting-indicator").forEach(function (icon) {
                        var visible = isCurrrent ? direction : "none";
                        icon.classList.toggle("d-none", !icon.classList.contains("js-sorting-indicator-" + visible));
                    });
                    if (!isCurrrent || direction === "none") {
                        controller.removeElementData(target, "sort-direction");
                    }
                    else {
                        controller.setElementData(target, "sort-direction", direction);
                    }
                });
            };
            ;
            class_1.prototype.sort = function (evt) {
                var controller = this;
                var colHead = evt.currentTarget;
                if (!(colHead instanceof HTMLTableCellElement)) {
                    throw "invalid event target";
                }
                var table = this.element;
                var tbody = table.tBodies[0];
                var colno = getCellSlot(colHead);
                if (colno < 0) {
                    return;
                }
                var slotIndex = buildIndex(tbody);
                var direction = this.getElementData(colHead, "sort-direction") === "asc" ? -1 : 1;
                var rows = Array.from(table.tBodies[0].rows);
                var anyNonInt = false;
                var data = [];
                var firstBottomRow;
                rows.forEach(function (row, index) {
                    var force = controller.getElementData(row, "sort-to");
                    if (force === "top") {
                        return;
                    }
                    else if (force === "bottom") {
                        if (!firstBottomRow) {
                            firstBottomRow = row;
                        }
                        return;
                    }
                    var cell = slotIndex[index][colno];
                    if (!cell) {
                        data.push(["", index]);
                        return;
                    }
                    var explicit = controller.getElementData(cell, "sort-val");
                    var d = typeof explicit === "string" ? explicit : cell.textContent.trim();
                    if ((d !== "") && (parseInt(d, 10) + "" !== d)) {
                        anyNonInt = true;
                    }
                    data.push([d, index]);
                });
                if (!anyNonInt) {
                    data.forEach(function (tuple) {
                        tuple[0] = tuple[0] === "" ? Number.MIN_VALUE : parseInt(tuple[0], 10);
                    });
                }
                data.sort(function (a, b) {
                    if (a[0] > b[0]) {
                        return 1 * direction;
                    }
                    else if (a[0] < b[0]) {
                        return -1 * direction;
                    }
                    else {
                        return a[1] > b[1] ? 1 : -1;
                    }
                });
                data.forEach(function (tup) {
                    var row = rows[tup[1]];
                    row.parentElement.removeChild(row);
                    if (firstBottomRow) {
                        tbody.insertBefore(row, firstBottomRow);
                    }
                    else {
                        tbody.appendChild(row);
                    }
                });
                this.setCurrentSort(colHead, direction === 1 ? "asc" : "desc");
            };
            return class_1;
        }(Stacks.StacksController)),
        _a.targets = ["column"],
        _a));
    function buildIndex(section) {
        var result = buildIndexOrGetCellSlot(section);
        if (!(result instanceof Array)) {
            throw "shouldn't happen";
        }
        return result;
    }
    function getCellSlot(cell) {
        if (!(cell.parentElement && cell.parentElement.parentElement instanceof HTMLTableSectionElement)) {
            throw "invalid table";
        }
        var result = buildIndexOrGetCellSlot(cell.parentElement.parentElement, cell);
        if (typeof result !== "number") {
            throw "shouldn't happen";
        }
        return result;
    }
    function buildIndexOrGetCellSlot(section, findCell) {
        var index = [];
        var curRow = section.children[0];
        var growing = [];
        var growingRowsLeft = [];
        while (curRow || growingRowsLeft.some(function (e) { return e !== 0; })) {
            var curIndexRow = [];
            index.push(curIndexRow);
            var curSlot = 0;
            if (curRow) {
                for (var curCellInd = 0; curCellInd < curRow.children.length; curCellInd++) {
                    while (growingRowsLeft[curSlot]) {
                        growingRowsLeft[curSlot]--;
                        curIndexRow[curSlot] = growing[curSlot];
                        curSlot++;
                    }
                    var cell = curRow.children[curCellInd];
                    if (!(cell instanceof HTMLTableCellElement)) {
                        throw "invalid table";
                    }
                    if (getComputedStyle(cell).display === "none") {
                        continue;
                    }
                    if (cell === findCell) {
                        return curSlot;
                    }
                    var nextFreeSlot = curSlot + cell.colSpan;
                    for (; curSlot < nextFreeSlot; curSlot++) {
                        growingRowsLeft[curSlot] = cell.rowSpan - 1;
                        growing[curSlot] = cell;
                        curIndexRow[curSlot] = cell;
                    }
                }
            }
            while (curSlot < growing.length) {
                if (growingRowsLeft[curSlot]) {
                    growingRowsLeft[curSlot]--;
                    curIndexRow[curSlot] = growing[curSlot];
                }
                curSlot++;
            }
            if (curRow) {
                curRow = curRow.nextElementSibling;
            }
        }
        return findCell ? -1 : index;
    }
})();
//# sourceMappingURL=s-table.js.map

;

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
var TooltipController = (function (_super) {
    __extends(TooltipController, _super);
    function TooltipController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TooltipController.prototype, "popoverTarget", {
        get: function () {
            var popoverId = this.element.getAttribute("aria-describedby");
            return popoverId ? document.getElementById(popoverId) : null;
        },
        enumerable: true,
        configurable: true
    });
    TooltipController.prototype.connect = function () {
        this.bindMouseEvents();
    };
    TooltipController.prototype.disconnect = function () {
        this.toggle(false);
        if (this.popper) {
            this.popper.destroy();
            this.popper = null;
        }
        this.unbindMouseEvents();
        this.unbindDocumentEvents();
    };
    ;
    TooltipController.prototype.initializePopover = function () {
        if (this.popper) {
            return;
        }
        var popoverTarget = this.popoverTarget;
        if (!popoverTarget) {
            return;
        }
        this.popper = new Popper(this.element, popoverTarget, {
            eventsEnabled: false
        });
    };
    TooltipController.prototype.toggle = function (show) {
        if (show) {
            var visiblePopover = document.querySelector(".s-popover.is-visible");
            if (visiblePopover && visiblePopover.id) {
                var control = document.querySelector("[aria-controls=" + visiblePopover.id + "]");
                if (control && control.hasAttribute("data-controller") && /(^|\s)s-popover(\s|$)/.test(control.getAttribute("data-controller"))) {
                    return;
                }
            }
        }
        var srcEvent = this.triggerEvent(show ? "show" : "hide");
        if (srcEvent.defaultPrevented) {
            return;
        }
        if (show && this.popoverTarget === null) {
            var title = this.element.getAttribute('title');
            if (title) {
                Stacks.setTooltipText(this.element, title);
                this.element.removeAttribute('title');
            }
            else {
                throw "No popover set.  Element must have [aria-describedby=\"{POPOVER_ID}\"] pointing to an actual element.";
            }
        }
        this.initializePopover();
        var cl = this.popoverTarget.classList;
        if (this.data.has("class-names")) {
            this.data.get("class-names").split(/\s+/).forEach(function (cls) { return cl.add(cls); });
        }
        this.popper.options.placement = this.data.get("placement") || "bottom";
        this.popper.update();
        cl.toggle("is-visible", show);
        if (show) {
            this.bindDocumentEvents();
        }
        else {
            this.unbindDocumentEvents();
        }
        this.triggerEvent(show ? "shown" : "hidden");
    };
    ;
    TooltipController.prototype.createEventBindings = function () {
        var _this = this;
        this.boundShow = this.boundShow || (function () { return _this.toggle(true); });
        this.boundHide = this.boundHide || (function () { return _this.toggle(false); });
    };
    TooltipController.prototype.bindMouseEvents = function () {
        this.createEventBindings();
        this.unbindMouseEvents();
        this.element.addEventListener("mouseover", this.boundShow);
        this.element.addEventListener("mouseout", this.boundHide);
    };
    TooltipController.prototype.unbindMouseEvents = function () {
        this.createEventBindings();
        this.element.removeEventListener("mouseover", this.boundShow);
        this.element.removeEventListener("mouseout", this.boundHide);
    };
    TooltipController.prototype.bindDocumentEvents = function () {
        document.addEventListener("s-popover:shown", this.boundHide);
        if (this.popper) {
            this.popper.enableEventListeners();
        }
    };
    TooltipController.prototype.unbindDocumentEvents = function () {
        document.removeEventListener("s-popover:shown", this.boundHide);
        if (this.popper) {
            this.popper.disableEventListeners();
        }
    };
    TooltipController.targets = [];
    return TooltipController;
}(Stacks.StacksController));
Stacks.application.register("s-tooltip", TooltipController);
//# sourceMappingURL=s-tooltip.js.map

;

"use strict";
Stacks._initializing = false;
//# sourceMappingURL=finalize.js.map