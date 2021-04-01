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

/**
 * @popperjs/core v2.9.1 - MIT License
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Popper = {}));
}(this, (function (exports) { 'use strict';

  function getBoundingClientRect(element) {
    var rect = element.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      x: rect.left,
      y: rect.top
    };
  }

  function getWindow(node) {
    if (node == null) {
      return window;
    }

    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }

  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }

  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }

    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle(element),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  // Composite means it takes into account transforms as well as layout.

  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement);
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  // means it doesn't take into account transforms.

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;

    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }

    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }

    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || ( // DOM Element detected
      isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent(getParentNode(node));
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    var _element$ownerDocumen;

    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle(element).position === 'fixed') {
      return null;
    }

    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
    var currentNode = getParentNode(element);

    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function format(str) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return [].concat(args).reduce(function (p, c) {
      return p.replace(/%s/, c);
    }, str);
  }

  var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
  var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
  var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
  function validateModifiers(modifiers) {
    modifiers.forEach(function (modifier) {
      Object.keys(modifier).forEach(function (key) {
        switch (key) {
          case 'name':
            if (typeof modifier.name !== 'string') {
              console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
            }

            break;

          case 'enabled':
            if (typeof modifier.enabled !== 'boolean') {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
            }

          case 'phase':
            if (modifierPhases.indexOf(modifier.phase) < 0) {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
            }

            break;

          case 'fn':
            if (typeof modifier.fn !== 'function') {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
            }

            break;

          case 'effect':
            if (typeof modifier.effect !== 'function') {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
            }

            break;

          case 'requires':
            if (!Array.isArray(modifier.requires)) {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
            }

            break;

          case 'requiresIfExists':
            if (!Array.isArray(modifier.requiresIfExists)) {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
            }

            break;

          case 'options':
          case 'data':
            break;

          default:
            console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
              return "\"" + s + "\"";
            }).join(', ') + "; but \"" + key + "\" was provided.");
        }

        modifier.requires && modifier.requires.forEach(function (requirement) {
          if (modifiers.find(function (mod) {
            return mod.name === requirement;
          }) == null) {
            console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
          }
        });
      });
    });
  }

  function uniqueBy(arr, fn) {
    var identifiers = new Set();
    return arr.filter(function (item) {
      var identifier = fn(item);

      if (!identifiers.has(identifier)) {
        identifiers.add(identifier);
        return true;
      }
    });
  }

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
      // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
      // errors due to floating point numbers, so we need to check precision.
      // Safari returns a number <= 0, usually < -1 when pinch-zoomed
      // Feature detection fails in mobile emulation mode in Chrome.
      // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
      // 0.001
      // Fallback here: "Not Safari" userAgent

      if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  }

  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var _element$ownerDocumen;

    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;

        do {
          if (next && parent.isSameNode(next)) {
            return true;
          } // $FlowFixMe[prop-missing]: need a better way to handle this...


          next = next.parentNode || next.host;
        } while (next);
      } // Give up, the result is false


    return false;
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

    if (!isElement(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
        element = _ref.element,
        placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$placement = _options.placement,
        placement = _options$placement === void 0 ? state.placement : _options$placement,
        _options$boundary = _options.boundary,
        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
        _options$rootBoundary = _options.rootBoundary,
        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
        _options$elementConte = _options.elementContext,
        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
        _options$altBoundary = _options.altBoundary,
        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
        _options$padding = _options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var referenceElement = state.elements.reference;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(referenceElement);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }

  var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
  var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
        _generatorOptions$def = _generatorOptions.defaultModifiers,
        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
        _generatorOptions$def2 = _generatorOptions.defaultOptions,
        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(options) {
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          }); // Validate the provided modifiers so that the consumer will get warned
          // if one of the modifiers is invalid for any reason

          {
            var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
              var name = _ref.name;
              return name;
            });
            validateModifiers(modifiers);

            if (getBasePlacement(state.options.placement) === auto) {
              var flipModifier = state.orderedModifiers.find(function (_ref2) {
                var name = _ref2.name;
                return name === 'flip';
              });

              if (!flipModifier) {
                console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
              }
            }

            var _getComputedStyle = getComputedStyle(popper),
                marginTop = _getComputedStyle.marginTop,
                marginRight = _getComputedStyle.marginRight,
                marginBottom = _getComputedStyle.marginBottom,
                marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
            // cause bugs with positioning, so we'll warn the consumer


            if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
              return parseFloat(margin);
            })) {
              console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
            }
          }

          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            {
              console.error(INVALID_ELEMENT_ERROR);
            }

            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          var __debug_loops__ = 0;

          for (var index = 0; index < state.orderedModifiers.length; index++) {
            {
              __debug_loops__ += 1;

              if (__debug_loops__ > 100) {
                console.error(INFINITE_LOOP_ERROR);
                break;
              }
            }

            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
                fn = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {
        {
          console.error(INVALID_ELEMENT_ERROR);
        }

        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref3) {
          var name = _ref3.name,
              _ref3$options = _ref3.options,
              options = _ref3$options === void 0 ? {} : _ref3$options,
              effect = _ref3.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }

  var passive = {
    passive: true
  };

  function effect$2(_ref) {
    var state = _ref.state,
        instance = _ref.instance,
        options = _ref.options;
    var _options$scroll = options.scroll,
        scroll = _options$scroll === void 0 ? true : _options$scroll,
        _options$resize = options.resize,
        resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect$2,
    data: {}
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
        name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref) {
    var x = _ref.x,
        y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(round(x * dpr) / dpr) || 0,
      y: round(round(y * dpr) / dpr) || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
        popperRect = _ref2.popperRect,
        placement = _ref2.placement,
        offsets = _ref2.offsets,
        position = _ref2.position,
        gpuAcceleration = _ref2.gpuAcceleration,
        adaptive = _ref2.adaptive,
        roundOffsets = _ref2.roundOffsets;

    var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
        _ref3$x = _ref3.x,
        x = _ref3$x === void 0 ? 0 : _ref3$x,
        _ref3$y = _ref3.y,
        y = _ref3$y === void 0 ? 0 : _ref3$y;

    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);

        if (getComputedStyle(offsetParent).position !== 'static') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


      offsetParent = offsetParent;

      if (placement === top) {
        sideY = bottom; // $FlowFixMe[prop-missing]

        y -= offsetParent[heightProp] - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left) {
        sideX = right; // $FlowFixMe[prop-missing]

        x -= offsetParent[widthProp] - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref4) {
    var state = _ref4.state,
        options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
        _options$adaptive = options.adaptive,
        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
        _options$roundOffsets = options.roundOffsets,
        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

    {
      var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';

      if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
        return transitionProperty.indexOf(property) >= 0;
      })) {
        console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
      }
    }

    var commonStyles = {
      placement: getBasePlacement(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }

    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };

  // and applies them to the HTMLElements such as popper and arrow

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect$1(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }

        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$1,
    requires: ['computeStyles']
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
      placement: placement
    })) : offset,
        skidding = _ref[0],
        distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$offset = options.offset,
        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
        x = _data$state$placement.x,
        y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched];
    });
  }

  var hash = {
    start: 'end',
    end: 'start'
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched];
    });
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        placement = _options.placement,
        boundary = _options.boundary,
        rootBoundary = _options.rootBoundary,
        padding = _options.padding,
        flipVariations = _options.flipVariations,
        _options$allowedAutoP = _options.allowedAutoPlacements,
        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;

      {
        console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
      }
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;
    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        padding = options.padding,
        _options$tether = options.tether,
        tether = _options$tether === void 0 ? true : _options$tether,
        _options$tetherOffset = options.tetherOffset,
        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis || checkAltAxis) {
      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
      var max$1 = popperOffsets[mainAxis] - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
      var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

      if (checkMainAxis) {
        var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
      }

      if (checkAltAxis) {
        var _mainSide = mainAxis === 'x' ? top : left;

        var _altSide = mainAxis === 'x' ? bottom : right;

        var _offset = popperOffsets[altAxis];

        var _min = _offset + overflow[_mainSide];

        var _max = _offset - overflow[_altSide];

        var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
      }
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
        name = _ref.name,
        options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect(_ref2) {
    var state = _ref2.state,
        options = _ref2.options;
    var _options$element = options.element,
        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    {
      if (!isHTMLElement(arrowElement)) {
        console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {
      {
        console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
      }

      return;
    }

    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules


  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
        name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
  var createPopper$1 = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers$1
  }); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  exports.applyStyles = applyStyles$1;
  exports.arrow = arrow$1;
  exports.computeStyles = computeStyles$1;
  exports.createPopper = createPopper;
  exports.createPopperLite = createPopper$1;
  exports.defaultModifiers = defaultModifiers;
  exports.detectOverflow = detectOverflow;
  exports.eventListeners = eventListeners;
  exports.flip = flip$1;
  exports.hide = hide$1;
  exports.offset = offset$1;
  exports.popperGenerator = popperGenerator;
  exports.popperOffsets = popperOffsets$1;
  exports.preventOverflow = preventOverflow$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=popper.js.map


;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
            var definitions = Array.isArray(head) ? head : __spreadArray([head], rest);
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
})(Stacks || (Stacks = {}));
//# sourceMappingURL=stacks.js.map

;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
            enumerable: false,
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Stacks;
(function (Stacks) {
    var ModalController = (function (_super) {
        __extends(ModalController, _super);
        function ModalController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ModalController.prototype.connect = function () {
            this.validate();
        };
        ModalController.prototype.disconnect = function () {
            this.unbindDocumentEvents();
        };
        ;
        ModalController.prototype.toggle = function (dispatcher) {
            if (dispatcher === void 0) { dispatcher = null; }
            this._toggle(undefined, dispatcher);
        };
        ModalController.prototype.show = function (dispatcher) {
            if (dispatcher === void 0) { dispatcher = null; }
            this._toggle(true, dispatcher);
        };
        ModalController.prototype.hide = function (dispatcher) {
            if (dispatcher === void 0) { dispatcher = null; }
            this._toggle(false, dispatcher);
        };
        ModalController.prototype.validate = function () {
            var returnElementSelector = this.data.get("return-element");
            if (returnElementSelector) {
                this.returnElement = document.querySelector(returnElementSelector);
                if (!this.returnElement) {
                    throw "Unable to find element by return-element selector: " + returnElementSelector;
                }
            }
        };
        ModalController.prototype._toggle = function (show, dispatcher) {
            var _this = this;
            if (dispatcher === void 0) { dispatcher = null; }
            var toShow = show;
            var isVisible = this.modalTarget.getAttribute("aria-hidden") === "false";
            if (typeof toShow === "undefined") {
                toShow = !isVisible;
            }
            if ((toShow && isVisible) || (!toShow && !isVisible)) {
                return;
            }
            var dispatchingElement = this.getDispatcher(dispatcher);
            var triggeredEvent = this.triggerEvent(toShow ? "show" : "hide", {
                returnElement: this.returnElement,
                dispatcher: this.getDispatcher(dispatchingElement)
            });
            if (triggeredEvent.defaultPrevented) {
                return;
            }
            this.returnElement = triggeredEvent.detail.returnElement;
            this.modalTarget.setAttribute("aria-hidden", toShow ? "false" : "true");
            if (toShow) {
                this.bindDocumentEvents();
            }
            else {
                this.unbindDocumentEvents();
                this.focusReturnElement();
                this.removeModalOnHide();
            }
            var supportsTransitionEnd = this.modalTarget.ontransitionend !== undefined;
            if (supportsTransitionEnd) {
                this.modalTarget.addEventListener("transitionend", function () {
                    _this.triggerEvent(toShow ? "shown" : "hidden", {
                        dispatcher: dispatchingElement
                    });
                }, { once: true });
            }
            else {
                this.triggerEvent(toShow ? "shown" : "hidden", {
                    dispatcher: dispatchingElement
                });
            }
        };
        ModalController.prototype.focusReturnElement = function () {
            var _this = this;
            if (!this.returnElement) {
                return;
            }
            this.modalTarget.addEventListener("s-modal:hidden", function () {
                if (_this.returnElement && document.body.contains(_this.returnElement)) {
                    _this.returnElement.focus();
                }
            }, { once: true });
        };
        ModalController.prototype.removeModalOnHide = function () {
            var _this = this;
            if (this.data.get("remove-when-hidden") !== "true") {
                return;
            }
            this.modalTarget.addEventListener("s-modal:hidden", function () {
                _this.element.remove();
            }, { once: true });
        };
        ModalController.prototype.handleFocusableElements = function () {
            var _this = this;
            var allTabbables = Array.from(this.modalTarget.querySelectorAll("[href], input, select, textarea, button, [tabindex]"))
                .filter(function (el) { return el.matches(":not([disabled]):not([tabindex='-1'])"); });
            if (!allTabbables.length) {
                return;
            }
            var initialFocus = allTabbables[0];
            if (this.hasInitialFocusTarget) {
                initialFocus = this.initialFocusTarget;
            }
            this.modalTarget.addEventListener("s-modal:shown", function () {
                if (initialFocus && document.body.contains(initialFocus)) {
                    initialFocus.focus();
                }
            }, { once: true });
            var firstTabbable = allTabbables[0];
            var lastTabbable = allTabbables[allTabbables.length - 1];
            this._boundTabTrap = this._boundTabTrap || (function (e) {
                if (!_this.modalTarget.contains(e.target)) {
                    e.preventDefault();
                    firstTabbable.focus();
                }
                if (e.target == firstTabbable && e.keyCode === 9 && e.shiftKey) {
                    e.preventDefault();
                    lastTabbable.focus();
                }
                if (e.target == lastTabbable && e.keyCode === 9 && !e.shiftKey) {
                    e.preventDefault();
                    firstTabbable.focus();
                }
            });
            document.addEventListener("keydown", this._boundTabTrap);
            return initialFocus;
        };
        ModalController.prototype.bindDocumentEvents = function () {
            this._boundClickFn = this._boundClickFn || this.hideOnOutsideClick.bind(this);
            this._boundKeypressFn = this._boundKeypressFn || this.hideOnEscapePress.bind(this);
            document.addEventListener("mousedown", this._boundClickFn);
            document.addEventListener("keyup", this._boundKeypressFn);
            this.handleFocusableElements();
        };
        ModalController.prototype.unbindDocumentEvents = function () {
            document.removeEventListener("mousedown", this._boundClickFn);
            document.removeEventListener("keyup", this._boundKeypressFn);
            document.removeEventListener("keydown", this._boundTabTrap);
        };
        ModalController.prototype.hideOnOutsideClick = function (e) {
            var target = e.target;
            if (!this.modalTarget.querySelector(".s-modal--dialog").contains(target) && document.body.contains(target)) {
                this._toggle(false, e);
            }
        };
        ModalController.prototype.hideOnEscapePress = function (e) {
            if (e.which !== 27 || this.modalTarget.getAttribute("aria-hidden") === "true") {
                return;
            }
            this._toggle(false, e);
        };
        ModalController.prototype.getDispatcher = function (dispatcher) {
            if (dispatcher === void 0) { dispatcher = null; }
            if (dispatcher instanceof Event) {
                return dispatcher.target;
            }
            else if (dispatcher instanceof Element) {
                return dispatcher;
            }
            else {
                return this.element;
            }
        };
        ModalController.targets = ["modal", "initialFocus"];
        return ModalController;
    }(Stacks.StacksController));
    Stacks.ModalController = ModalController;
    function showModal(element) {
        toggleModal(element, true);
    }
    Stacks.showModal = showModal;
    function hideModal(element) {
        toggleModal(element, false);
    }
    Stacks.hideModal = hideModal;
    function toggleModal(element, show) {
        var controller = Stacks.application.getControllerForElementAndIdentifier(element, "s-modal");
        if (!controller) {
            throw "Unable to get s-modal controller from element";
        }
        show ? controller.show() : controller.hide();
    }
})(Stacks || (Stacks = {}));
Stacks.application.register("s-modal", Stacks.ModalController);
//# sourceMappingURL=s-modal.js.map

;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Stacks;
(function (Stacks) {
    var TabListController = (function (_super) {
        __extends(TabListController, _super);
        function TabListController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TabListController.prototype.connect = function () {
            _super.prototype.connect.call(this);
            this.boundSelectTab = this.selectTab.bind(this);
            this.boundHandleKeydown = this.handleKeydown.bind(this);
            for (var _i = 0, _a = this.tabTargets; _i < _a.length; _i++) {
                var tab = _a[_i];
                tab.addEventListener("click", this.boundSelectTab);
                tab.addEventListener("keydown", this.boundHandleKeydown);
            }
        };
        TabListController.prototype.disconnect = function () {
            _super.prototype.disconnect.call(this);
            for (var _i = 0, _a = this.tabTargets; _i < _a.length; _i++) {
                var tab = _a[_i];
                tab.removeEventListener("click", this.boundSelectTab);
                tab.removeEventListener("keydown", this.boundHandleKeydown);
            }
        };
        Object.defineProperty(TabListController.prototype, "tabTargets", {
            get: function () {
                return Array.from(this.element.querySelectorAll("[role=tab]"));
            },
            enumerable: false,
            configurable: true
        });
        TabListController.prototype.selectTab = function (event) {
            this.switchToTab(event.currentTarget);
        };
        TabListController.prototype.handleKeydown = function (event) {
            var _a;
            var tabElement = event.currentTarget;
            var tabs = this.tabTargets;
            var tabIndex = tabs.indexOf(tabElement);
            if (event.key === "ArrowRight") {
                tabIndex++;
            }
            else if (event.key === "ArrowLeft") {
                tabIndex--;
            }
            else {
                return;
            }
            if (tabIndex < 0) {
                tabIndex = tabs.length - 1;
            }
            if (tabIndex >= tabs.length) {
                tabIndex = 0;
            }
            tabElement = tabs[tabIndex];
            this.switchToTab(tabElement);
            (_a = this.selectedTab) === null || _a === void 0 ? void 0 : _a.focus();
        };
        TabListController.prototype.switchToTab = function (newTab) {
            var oldTab = this.selectedTab;
            if (oldTab === newTab) {
                return;
            }
            if (this.triggerEvent("select", { oldTab: oldTab, newTab: newTab }).defaultPrevented) {
                return;
            }
            this.selectedTab = newTab;
            this.triggerEvent("selected", { oldTab: oldTab, newTab: newTab });
        };
        Object.defineProperty(TabListController.prototype, "selectedTab", {
            get: function () {
                return this.tabTargets.find(function (e) { return e.getAttribute("aria-selected") === "true"; }) || null;
            },
            set: function (selectedTab) {
                for (var _i = 0, _a = this.tabTargets; _i < _a.length; _i++) {
                    var tab = _a[_i];
                    var panelId = tab.getAttribute('aria-controls');
                    var panel = panelId ? document.getElementById(panelId) : null;
                    if (tab === selectedTab) {
                        tab.classList.add('is-selected');
                        tab.setAttribute('aria-selected', 'true');
                        tab.removeAttribute('tabindex');
                        panel === null || panel === void 0 ? void 0 : panel.classList.remove('d-none');
                    }
                    else {
                        tab.classList.remove('is-selected');
                        tab.setAttribute('aria-selected', 'false');
                        tab.setAttribute('tabindex', '-1');
                        panel === null || panel === void 0 ? void 0 : panel.classList.add('d-none');
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        return TabListController;
    }(Stacks.StacksController));
    Stacks.TabListController = TabListController;
})(Stacks || (Stacks = {}));
Stacks.application.register("s-navigation-tablist", Stacks.TabListController);
//# sourceMappingURL=s-navigation-tablist.js.map

;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Stacks;
(function (Stacks) {
    var BasePopoverController = (function (_super) {
        __extends(BasePopoverController, _super);
        function BasePopoverController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(BasePopoverController.prototype, "isVisible", {
            get: function () {
                var popoverElement = this.popoverElement;
                return popoverElement ? popoverElement.classList.contains("is-visible") : false;
            },
            enumerable: false,
            configurable: true
        });
        BasePopoverController.prototype.connect = function () {
            _super.prototype.connect.call(this);
            this.validate();
            if (this.isVisible) {
                this.initializePopper();
            }
        };
        BasePopoverController.prototype.disconnect = function () {
            this.hide();
            if (this.popper) {
                this.popper.destroy();
                this.popper = null;
            }
            _super.prototype.disconnect.call(this);
        };
        BasePopoverController.prototype.toggle = function (dispatcher) {
            if (dispatcher === void 0) { dispatcher = null; }
            this.isVisible ? this.hide(dispatcher) : this.show(dispatcher);
        };
        BasePopoverController.prototype.show = function (dispatcher) {
            if (dispatcher === void 0) { dispatcher = null; }
            if (this.isVisible) {
                return;
            }
            var dispatcherElement = this.getDispatcher(dispatcher);
            if (this.triggerEvent("show", {
                dispatcher: dispatcherElement
            }).defaultPrevented) {
                return;
            }
            if (!this.popper) {
                this.initializePopper();
            }
            this.popoverElement.classList.add("is-visible");
            this.scheduleUpdate();
            this.shown(dispatcherElement);
        };
        BasePopoverController.prototype.hide = function (dispatcher) {
            if (dispatcher === void 0) { dispatcher = null; }
            if (!this.isVisible) {
                return;
            }
            var dispatcherElement = this.getDispatcher(dispatcher);
            if (this.triggerEvent("hide", {
                dispatcher: dispatcherElement
            }).defaultPrevented) {
                return;
            }
            this.popoverElement.classList.remove("is-visible");
            if (this.popper) {
                this.popper.destroy();
                this.popper = null;
            }
            this.hidden(dispatcherElement);
        };
        BasePopoverController.prototype.shown = function (dispatcher) {
            if (dispatcher === void 0) { dispatcher = null; }
            this.bindDocumentEvents();
            this.triggerEvent("shown", {
                dispatcher: dispatcher
            });
        };
        BasePopoverController.prototype.hidden = function (dispatcher) {
            if (dispatcher === void 0) { dispatcher = null; }
            this.unbindDocumentEvents();
            this.triggerEvent("hidden", {
                dispatcher: dispatcher
            });
        };
        BasePopoverController.prototype.generatePopover = function () {
            return null;
        };
        BasePopoverController.prototype.initializePopper = function () {
            this.popper = Popper.createPopper(this.referenceElement, this.popoverElement, {
                placement: this.data.get("placement") || "bottom",
                modifiers: [
                    {
                        name: "offset",
                        options: {
                            offset: [0, 10],
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: ".s-popover--arrow"
                        },
                    },
                ]
            });
        };
        BasePopoverController.prototype.validate = function () {
            var referenceSelector = this.data.get("reference-selector");
            this.referenceElement = this.element;
            if (referenceSelector) {
                this.referenceElement = this.element.querySelector(referenceSelector);
                if (!this.referenceElement) {
                    throw "Unable to find element by reference selector: " + referenceSelector;
                }
            }
            var popoverId = this.referenceElement.getAttribute(this.popoverSelectorAttribute);
            var popoverElement = null;
            if (popoverId) {
                popoverElement = document.getElementById(popoverId);
                if (!popoverElement) {
                    throw "[" + this.popoverSelectorAttribute + "=\"{POPOVER_ID}\"] required";
                }
            }
            else {
                popoverElement = this.generatePopover();
            }
            if (!popoverElement) {
                throw "unable to find or generate popover element";
            }
            this.popoverElement = popoverElement;
        };
        BasePopoverController.prototype.getDispatcher = function (dispatcher) {
            if (dispatcher === void 0) { dispatcher = null; }
            if (dispatcher instanceof Event) {
                return dispatcher.target;
            }
            else if (dispatcher instanceof Element) {
                return dispatcher;
            }
            else {
                return this.element;
            }
        };
        BasePopoverController.prototype.scheduleUpdate = function () {
            if (this.popper && this.isVisible) {
                this.popper.update();
            }
        };
        return BasePopoverController;
    }(Stacks.StacksController));
    Stacks.BasePopoverController = BasePopoverController;
    var PopoverController = (function (_super) {
        __extends(PopoverController, _super);
        function PopoverController() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.popoverSelectorAttribute = "aria-controls";
            return _this;
        }
        PopoverController.prototype.shown = function (dispatcher) {
            if (dispatcher === void 0) { dispatcher = null; }
            this.toggleOptionalClasses(true);
            _super.prototype.shown.call(this, dispatcher);
        };
        PopoverController.prototype.hidden = function (dispatcher) {
            if (dispatcher === void 0) { dispatcher = null; }
            this.toggleOptionalClasses(false);
            _super.prototype.hidden.call(this, dispatcher);
        };
        PopoverController.prototype.bindDocumentEvents = function () {
            this.boundHideOnOutsideClick = this.boundHideOnOutsideClick || this.hideOnOutsideClick.bind(this);
            this.boundHideOnEscapePress = this.boundHideOnEscapePress || this.hideOnEscapePress.bind(this);
            document.addEventListener("mousedown", this.boundHideOnOutsideClick);
            document.addEventListener("keyup", this.boundHideOnEscapePress);
        };
        PopoverController.prototype.unbindDocumentEvents = function () {
            document.removeEventListener("mousedown", this.boundHideOnOutsideClick);
            document.removeEventListener("keyup", this.boundHideOnEscapePress);
        };
        PopoverController.prototype.hideOnOutsideClick = function (e) {
            var target = e.target;
            if (!this.referenceElement.contains(target) && !this.popoverElement.contains(target) && document.body.contains(target)) {
                this.hide(e);
            }
        };
        ;
        PopoverController.prototype.hideOnEscapePress = function (e) {
            if (e.which !== 27 || !this.isVisible) {
                return;
            }
            if (this.popoverElement.contains(e.target)) {
                this.referenceElement.focus();
            }
            this.hide(e);
        };
        ;
        PopoverController.prototype.toggleOptionalClasses = function (show) {
            if (!this.data.has("toggle-class")) {
                return;
            }
            var cl = this.referenceElement.classList;
            this.data.get("toggle-class").split(/\s+/).forEach(function (cls) {
                cl.toggle(cls, show);
            });
        };
        PopoverController.targets = [];
        return PopoverController;
    }(BasePopoverController));
    Stacks.PopoverController = PopoverController;
})(Stacks || (Stacks = {}));
Stacks.application.register("s-popover", Stacks.PopoverController);
//# sourceMappingURL=s-popover.js.map

;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Stacks;
(function (Stacks) {
    var TooltipController = (function (_super) {
        __extends(TooltipController, _super);
        function TooltipController() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.popoverSelectorAttribute = "aria-describedby";
            return _this;
        }
        TooltipController.prototype.connect = function () {
            _super.prototype.connect.call(this);
            if (window.matchMedia("(hover: hover)").matches) {
                this.bindMouseEvents();
            }
        };
        TooltipController.prototype.disconnect = function () {
            this.unbindMouseEvents();
            _super.prototype.disconnect.call(this);
        };
        TooltipController.prototype.show = function (dispatcher) {
            if (dispatcher === void 0) { dispatcher = null; }
            var controller = Stacks.application.getControllerForElementAndIdentifier(this.element, "s-popover");
            if (controller && controller.isVisible) {
                return;
            }
            _super.prototype.show.call(this, dispatcher);
        };
        TooltipController.prototype.scheduleShow = function (dispatcher) {
            var _this = this;
            if (dispatcher === void 0) { dispatcher = null; }
            window.clearTimeout(this.activeTimeout);
            this.activeTimeout = window.setTimeout(function () { return _this.show(dispatcher); }, 300);
        };
        TooltipController.prototype.hide = function (dispatcher) {
            if (dispatcher === void 0) { dispatcher = null; }
            window.clearTimeout(this.activeTimeout);
            this.activeTimeout = null;
            _super.prototype.hide.call(this, dispatcher);
        };
        TooltipController.prototype.applyTitleAttributes = function () {
            var content;
            var htmlTitle = this.data.get("html-title");
            if (htmlTitle) {
                content = document.createRange().createContextualFragment(htmlTitle);
            }
            else {
                var plainTitle = this.element.getAttribute("title");
                if (plainTitle) {
                    content = document.createTextNode(plainTitle);
                }
                else {
                    return null;
                }
            }
            this.data.delete("html-title");
            this.element.removeAttribute("title");
            var popoverId = this.element.getAttribute("aria-describedby");
            if (!popoverId) {
                popoverId = TooltipController.generateId();
                this.element.setAttribute("aria-describedby", popoverId);
            }
            var popover = document.getElementById(popoverId);
            if (!popover) {
                popover = document.createElement("div");
                popover.id = popoverId;
                popover.className = "s-popover s-popover__tooltip pe-none";
                popover.setAttribute("aria-hidden", "true");
                popover.setAttribute("role", "tooltip");
                var parentNode = this.element.parentNode;
                if (parentNode) {
                    parentNode.insertBefore(popover, this.element.nextSibling);
                }
                else {
                    document.body.appendChild(popover);
                }
            }
            var arrow = popover.querySelector(".s-popover--arrow");
            popover.innerHTML = "";
            popover.appendChild(content);
            if (arrow) {
                popover.appendChild(arrow);
            }
            else {
                popover.insertAdjacentHTML("beforeend", "<div class=\"s-popover--arrow\"></div>");
            }
            this.scheduleUpdate();
            return popover;
        };
        TooltipController.prototype.bindDocumentEvents = function () {
            this.boundHideIfWithin = this.boundHideIfWithin || this.hideIfWithin.bind(this);
            document.addEventListener("s-popover:shown", this.boundHideIfWithin);
        };
        TooltipController.prototype.unbindDocumentEvents = function () {
            document.removeEventListener("s-popover:shown", this.boundHideIfWithin);
        };
        TooltipController.prototype.generatePopover = function () {
            return this.applyTitleAttributes();
        };
        TooltipController.prototype.hideIfWithin = function (event) {
            if (event.target.contains(this.referenceElement)) {
                this.hide();
            }
        };
        TooltipController.prototype.bindMouseEvents = function () {
            this.boundScheduleShow = this.boundScheduleShow || this.scheduleShow.bind(this);
            this.boundHide = this.boundHide || this.hide.bind(this);
            this.referenceElement.addEventListener("mouseover", this.boundScheduleShow);
            this.referenceElement.addEventListener("mouseout", this.boundHide);
        };
        TooltipController.prototype.unbindMouseEvents = function () {
            this.referenceElement.removeEventListener("mouseover", this.boundScheduleShow);
            this.referenceElement.removeEventListener("mouseout", this.boundHide);
        };
        TooltipController.generateId = function () {
            return "--stacks-s-tooltip-" + Math.random().toString(36).substring(2, 10);
        };
        TooltipController.targets = [];
        return TooltipController;
    }(Stacks.BasePopoverController));
    Stacks.TooltipController = TooltipController;
    function setTooltipHtml(element, html, options) {
        element.setAttribute("data-s-tooltip-html-title", html);
        element.removeAttribute("title");
        applyOptionsAndTitleAttributes(element, options);
    }
    Stacks.setTooltipHtml = setTooltipHtml;
    function setTooltipText(element, text, options) {
        element.setAttribute("title", text);
        element.removeAttribute("data-s-tooltip-html-title");
        applyOptionsAndTitleAttributes(element, options);
    }
    Stacks.setTooltipText = setTooltipText;
    function applyOptionsAndTitleAttributes(element, options) {
        if (options && options.placement) {
            element.setAttribute("data-s-tooltip-placement", options.placement);
        }
        var controller = Stacks.application.getControllerForElementAndIdentifier(element, "s-tooltip");
        if (controller) {
            controller.applyTitleAttributes();
        }
        else {
            element.setAttribute("data-controller", element.getAttribute("data-controller") + " s-tooltip");
        }
    }
})(Stacks || (Stacks = {}));
Stacks.application.register("s-tooltip", Stacks.TooltipController);
//# sourceMappingURL=s-tooltip.js.map

;

"use strict";
Stacks._initializing = false;
//# sourceMappingURL=finalize.js.map