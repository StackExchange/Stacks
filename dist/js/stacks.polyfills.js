(function () {
    'use strict';

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var _global = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math
      ? window : typeof self != 'undefined' && self.Math == Math ? self
      // eslint-disable-next-line no-new-func
      : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
    });

    var _core = createCommonjsModule(function (module) {
    var core = module.exports = { version: '2.6.2' };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
    });

    var _core_1 = _core.version;

    var _isObject = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };

    var _anObject = function (it) {
      if (!_isObject(it)) throw TypeError(it + ' is not an object!');
      return it;
    };

    var _fails = function (exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };

    // Thank's IE8 for his funny defineProperty
    var _descriptors = !_fails(function () {
      return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
    });

    var document$1 = _global.document;
    // typeof document.createElement is 'object' in old IE
    var is = _isObject(document$1) && _isObject(document$1.createElement);
    var _domCreate = function (it) {
      return is ? document$1.createElement(it) : {};
    };

    var _ie8DomDefine = !_descriptors && !_fails(function () {
      return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
    });

    // 7.1.1 ToPrimitive(input [, PreferredType])

    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    var _toPrimitive = function (it, S) {
      if (!_isObject(it)) return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
      if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
      if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };

    var dP = Object.defineProperty;

    var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      _anObject(O);
      P = _toPrimitive(P, true);
      _anObject(Attributes);
      if (_ie8DomDefine) try {
        return dP(O, P, Attributes);
      } catch (e) { /* empty */ }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };

    var _objectDp = {
    	f: f
    };

    var _propertyDesc = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };

    var _hide = _descriptors ? function (object, key, value) {
      return _objectDp.f(object, key, _propertyDesc(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };

    var hasOwnProperty = {}.hasOwnProperty;
    var _has = function (it, key) {
      return hasOwnProperty.call(it, key);
    };

    var id = 0;
    var px = Math.random();
    var _uid = function (key) {
      return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };

    var _redefine = createCommonjsModule(function (module) {
    var SRC = _uid('src');
    var TO_STRING = 'toString';
    var $toString = Function[TO_STRING];
    var TPL = ('' + $toString).split(TO_STRING);

    _core.inspectSource = function (it) {
      return $toString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
      if (O === _global) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];
        _hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        _hide(O, key, val);
      }
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || $toString.call(this);
    });
    });

    var _aFunction = function (it) {
      if (typeof it != 'function') throw TypeError(it + ' is not a function!');
      return it;
    };

    // optional / simple context binding

    var _ctx = function (fn, that, length) {
      _aFunction(fn);
      if (that === undefined) return fn;
      switch (length) {
        case 1: return function (a) {
          return fn.call(that, a);
        };
        case 2: return function (a, b) {
          return fn.call(that, a, b);
        };
        case 3: return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
      }
      return function (/* ...args */) {
        return fn.apply(that, arguments);
      };
    };

    var PROTOTYPE = 'prototype';

    var $export = function (type, name, source) {
      var IS_FORCED = type & $export.F;
      var IS_GLOBAL = type & $export.G;
      var IS_STATIC = type & $export.S;
      var IS_PROTO = type & $export.P;
      var IS_BIND = type & $export.B;
      var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
      var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
      var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
      var key, own, out, exp;
      if (IS_GLOBAL) source = name;
      for (key in source) {
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined;
        // export native or passed
        out = (own ? target : source)[key];
        // bind timers to global for call from export context
        exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
        // extend global
        if (target) _redefine(target, key, out, type & $export.U);
        // export
        if (exports[key] != out) _hide(exports, key, exp);
        if (IS_PROTO && expProto[key] != out) expProto[key] = out;
      }
    };
    _global.core = _core;
    // type bitmap
    $export.F = 1;   // forced
    $export.G = 2;   // global
    $export.S = 4;   // static
    $export.P = 8;   // proto
    $export.B = 16;  // bind
    $export.W = 32;  // wrap
    $export.U = 64;  // safe
    $export.R = 128; // real proto method for `library`
    var _export = $export;

    var toString = {}.toString;

    var _cof = function (it) {
      return toString.call(it).slice(8, -1);
    };

    // fallback for non-array-like ES3 and non-enumerable old V8 strings

    // eslint-disable-next-line no-prototype-builtins
    var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
      return _cof(it) == 'String' ? it.split('') : Object(it);
    };

    // 7.2.1 RequireObjectCoercible(argument)
    var _defined = function (it) {
      if (it == undefined) throw TypeError("Can't call method on  " + it);
      return it;
    };

    // 7.1.13 ToObject(argument)

    var _toObject = function (it) {
      return Object(_defined(it));
    };

    // 7.1.4 ToInteger
    var ceil = Math.ceil;
    var floor = Math.floor;
    var _toInteger = function (it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };

    // 7.1.15 ToLength

    var min = Math.min;
    var _toLength = function (it) {
      return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
    };

    // 7.2.2 IsArray(argument)

    var _isArray = Array.isArray || function isArray(arg) {
      return _cof(arg) == 'Array';
    };

    var _library = false;

    var _shared = createCommonjsModule(function (module) {
    var SHARED = '__core-js_shared__';
    var store = _global[SHARED] || (_global[SHARED] = {});

    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: _core.version,
      mode: _library ? 'pure' : 'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
    });
    });

    var _wks = createCommonjsModule(function (module) {
    var store = _shared('wks');

    var Symbol = _global.Symbol;
    var USE_SYMBOL = typeof Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] =
        USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
    };

    $exports.store = store;
    });

    var SPECIES = _wks('species');

    var _arraySpeciesConstructor = function (original) {
      var C;
      if (_isArray(original)) {
        C = original.constructor;
        // cross-realm fallback
        if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
        if (_isObject(C)) {
          C = C[SPECIES];
          if (C === null) C = undefined;
        }
      } return C === undefined ? Array : C;
    };

    // 9.4.2.3 ArraySpeciesCreate(originalArray, length)


    var _arraySpeciesCreate = function (original, length) {
      return new (_arraySpeciesConstructor(original))(length);
    };

    // 0 -> Array#forEach
    // 1 -> Array#map
    // 2 -> Array#filter
    // 3 -> Array#some
    // 4 -> Array#every
    // 5 -> Array#find
    // 6 -> Array#findIndex





    var _arrayMethods = function (TYPE, $create) {
      var IS_MAP = TYPE == 1;
      var IS_FILTER = TYPE == 2;
      var IS_SOME = TYPE == 3;
      var IS_EVERY = TYPE == 4;
      var IS_FIND_INDEX = TYPE == 6;
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
      var create = $create || _arraySpeciesCreate;
      return function ($this, callbackfn, that) {
        var O = _toObject($this);
        var self = _iobject(O);
        var f = _ctx(callbackfn, that, 3);
        var length = _toLength(self.length);
        var index = 0;
        var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
        var val, res;
        for (;length > index; index++) if (NO_HOLES || index in self) {
          val = self[index];
          res = f(val, index, O);
          if (TYPE) {
            if (IS_MAP) result[index] = res;   // map
            else if (res) switch (TYPE) {
              case 3: return true;             // some
              case 5: return val;              // find
              case 6: return index;            // findIndex
              case 2: result.push(val);        // filter
            } else if (IS_EVERY) return false; // every
          }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
      };
    };

    // 22.1.3.31 Array.prototype[@@unscopables]
    var UNSCOPABLES = _wks('unscopables');
    var ArrayProto = Array.prototype;
    if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
    var _addToUnscopables = function (key) {
      ArrayProto[UNSCOPABLES][key] = true;
    };

    // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

    var $find = _arrayMethods(5);
    var KEY = 'find';
    var forced = true;
    // Shouldn't skip holes
    if (KEY in []) Array(1)[KEY](function () { forced = false; });
    _export(_export.P + _export.F * forced, 'Array', {
      find: function find(callbackfn /* , that = undefined */) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    _addToUnscopables(KEY);

    var find = _core.Array.find;

    // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

    var $find$1 = _arrayMethods(6);
    var KEY$1 = 'findIndex';
    var forced$1 = true;
    // Shouldn't skip holes
    if (KEY$1 in []) Array(1)[KEY$1](function () { forced$1 = false; });
    _export(_export.P + _export.F * forced$1, 'Array', {
      findIndex: function findIndex(callbackfn /* , that = undefined */) {
        return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    _addToUnscopables(KEY$1);

    var findIndex = _core.Array.findIndex;

    // true  -> String#at
    // false -> String#codePointAt
    var _stringAt = function (TO_STRING) {
      return function (that, pos) {
        var s = String(_defined(that));
        var i = _toInteger(pos);
        var l = s.length;
        var a, b;
        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
        a = s.charCodeAt(i);
        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
          ? TO_STRING ? s.charAt(i) : a
          : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
      };
    };

    var _iterators = {};

    // to indexed object, toObject with fallback for non-array-like ES3 strings


    var _toIobject = function (it) {
      return _iobject(_defined(it));
    };

    var max = Math.max;
    var min$1 = Math.min;
    var _toAbsoluteIndex = function (index, length) {
      index = _toInteger(index);
      return index < 0 ? max(index + length, 0) : min$1(index, length);
    };

    // false -> Array#indexOf
    // true  -> Array#includes



    var _arrayIncludes = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = _toIobject($this);
        var length = _toLength(O.length);
        var index = _toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare
        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++];
          // eslint-disable-next-line no-self-compare
          if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
          if (O[index] === el) return IS_INCLUDES || index || 0;
        } return !IS_INCLUDES && -1;
      };
    };

    var shared = _shared('keys');

    var _sharedKey = function (key) {
      return shared[key] || (shared[key] = _uid(key));
    };

    var arrayIndexOf = _arrayIncludes(false);
    var IE_PROTO = _sharedKey('IE_PROTO');

    var _objectKeysInternal = function (object, names) {
      var O = _toIobject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
      // Don't enum bug & hidden keys
      while (names.length > i) if (_has(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key);
      }
      return result;
    };

    // IE 8- don't enum bug keys
    var _enumBugKeys = (
      'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
    ).split(',');

    // 19.1.2.14 / 15.2.3.14 Object.keys(O)



    var _objectKeys = Object.keys || function keys(O) {
      return _objectKeysInternal(O, _enumBugKeys);
    };

    var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
      _anObject(O);
      var keys = _objectKeys(Properties);
      var length = keys.length;
      var i = 0;
      var P;
      while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
      return O;
    };

    var document$2 = _global.document;
    var _html = document$2 && document$2.documentElement;

    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



    var IE_PROTO$1 = _sharedKey('IE_PROTO');
    var Empty = function () { /* empty */ };
    var PROTOTYPE$1 = 'prototype';

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    var createDict = function () {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = _domCreate('iframe');
      var i = _enumBugKeys.length;
      var lt = '<';
      var gt = '>';
      var iframeDocument;
      iframe.style.display = 'none';
      _html.appendChild(iframe);
      iframe.src = 'javascript:'; // eslint-disable-line no-script-url
      // createDict = iframe.contentWindow.Object;
      // html.removeChild(iframe);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
      iframeDocument.close();
      createDict = iframeDocument.F;
      while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
      return createDict();
    };

    var _objectCreate = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        Empty[PROTOTYPE$1] = _anObject(O);
        result = new Empty();
        Empty[PROTOTYPE$1] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO$1] = O;
      } else result = createDict();
      return Properties === undefined ? result : _objectDps(result, Properties);
    };

    var def = _objectDp.f;

    var TAG = _wks('toStringTag');

    var _setToStringTag = function (it, tag, stat) {
      if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
    };

    var IteratorPrototype = {};

    // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    _hide(IteratorPrototype, _wks('iterator'), function () { return this; });

    var _iterCreate = function (Constructor, NAME, next) {
      Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
      _setToStringTag(Constructor, NAME + ' Iterator');
    };

    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


    var IE_PROTO$2 = _sharedKey('IE_PROTO');
    var ObjectProto = Object.prototype;

    var _objectGpo = Object.getPrototypeOf || function (O) {
      O = _toObject(O);
      if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      } return O instanceof Object ? ObjectProto : null;
    };

    var ITERATOR = _wks('iterator');
    var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
    var FF_ITERATOR = '@@iterator';
    var KEYS = 'keys';
    var VALUES = 'values';

    var returnThis = function () { return this; };

    var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
      _iterCreate(Constructor, NAME, next);
      var getMethod = function (kind) {
        if (!BUGGY && kind in proto) return proto[kind];
        switch (kind) {
          case KEYS: return function keys() { return new Constructor(this, kind); };
          case VALUES: return function values() { return new Constructor(this, kind); };
        } return function entries() { return new Constructor(this, kind); };
      };
      var TAG = NAME + ' Iterator';
      var DEF_VALUES = DEFAULT == VALUES;
      var VALUES_BUG = false;
      var proto = Base.prototype;
      var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
      var $default = $native || getMethod(DEFAULT);
      var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
      var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
      var methods, key, IteratorPrototype;
      // Fix native
      if ($anyNative) {
        IteratorPrototype = _objectGpo($anyNative.call(new Base()));
        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
          // Set @@toStringTag to native iterators
          _setToStringTag(IteratorPrototype, TAG, true);
          // fix for some old engines
          if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
        }
      }
      // fix Array#{values, @@iterator}.name in V8 / FF
      if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() { return $native.call(this); };
      }
      // Define iterator
      if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
        _hide(proto, ITERATOR, $default);
      }
      // Plug for library
      _iterators[NAME] = $default;
      _iterators[TAG] = returnThis;
      if (DEFAULT) {
        methods = {
          values: DEF_VALUES ? $default : getMethod(VALUES),
          keys: IS_SET ? $default : getMethod(KEYS),
          entries: $entries
        };
        if (FORCED) for (key in methods) {
          if (!(key in proto)) _redefine(proto, key, methods[key]);
        } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }
      return methods;
    };

    var $at = _stringAt(true);

    // 21.1.3.27 String.prototype[@@iterator]()
    _iterDefine(String, 'String', function (iterated) {
      this._t = String(iterated); // target
      this._i = 0;                // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
    }, function () {
      var O = this._t;
      var index = this._i;
      var point;
      if (index >= O.length) return { value: undefined, done: true };
      point = $at(O, index);
      this._i += point.length;
      return { value: point, done: false };
    });

    // call something on iterator step with safe closing on error

    var _iterCall = function (iterator, fn, value, entries) {
      try {
        return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
      // 7.4.6 IteratorClose(iterator, completion)
      } catch (e) {
        var ret = iterator['return'];
        if (ret !== undefined) _anObject(ret.call(iterator));
        throw e;
      }
    };

    // check on default Array iterator

    var ITERATOR$1 = _wks('iterator');
    var ArrayProto$1 = Array.prototype;

    var _isArrayIter = function (it) {
      return it !== undefined && (_iterators.Array === it || ArrayProto$1[ITERATOR$1] === it);
    };

    var _createProperty = function (object, index, value) {
      if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
      else object[index] = value;
    };

    // getting tag from 19.1.3.6 Object.prototype.toString()

    var TAG$1 = _wks('toStringTag');
    // ES3 wrong here
    var ARG = _cof(function () { return arguments; }()) == 'Arguments';

    // fallback for IE11 Script Access Denied error
    var tryGet = function (it, key) {
      try {
        return it[key];
      } catch (e) { /* empty */ }
    };

    var _classof = function (it) {
      var O, T, B;
      return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
        : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
        // builtinTag case
        : ARG ? _cof(O)
        // ES3 arguments fallback
        : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };

    var ITERATOR$2 = _wks('iterator');

    var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
      if (it != undefined) return it[ITERATOR$2]
        || it['@@iterator']
        || _iterators[_classof(it)];
    };

    var ITERATOR$3 = _wks('iterator');
    var SAFE_CLOSING = false;

    try {
      var riter = [7][ITERATOR$3]();
      riter['return'] = function () { SAFE_CLOSING = true; };
      // eslint-disable-next-line no-throw-literal
      
    } catch (e) { /* empty */ }

    var _iterDetect = function (exec, skipClosing) {
      if (!skipClosing && !SAFE_CLOSING) return false;
      var safe = false;
      try {
        var arr = [7];
        var iter = arr[ITERATOR$3]();
        iter.next = function () { return { done: safe = true }; };
        arr[ITERATOR$3] = function () { return iter; };
        exec(arr);
      } catch (e) { /* empty */ }
      return safe;
    };

    _export(_export.S + _export.F * !_iterDetect(function (iter) {  }), 'Array', {
      // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
      from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
        var O = _toObject(arrayLike);
        var C = typeof this == 'function' ? this : Array;
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var index = 0;
        var iterFn = core_getIteratorMethod(O);
        var length, result, step, iterator;
        if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
        // if object isn't iterable or it's array with default iterator - use simple case
        if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
          for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
            _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
          }
        } else {
          length = _toLength(O.length);
          for (result = new C(length); length > index; index++) {
            _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
          }
        }
        result.length = index;
        return result;
      }
    });

    var from = _core.Array.from;

    // 19.1.3.6 Object.prototype.toString()

    var test = {};
    test[_wks('toStringTag')] = 'z';
    if (test + '' != '[object z]') {
      _redefine(Object.prototype, 'toString', function toString() {
        return '[object ' + _classof(this) + ']';
      }, true);
    }

    var _iterStep = function (done, value) {
      return { value: value, done: !!done };
    };

    // 22.1.3.4 Array.prototype.entries()
    // 22.1.3.13 Array.prototype.keys()
    // 22.1.3.29 Array.prototype.values()
    // 22.1.3.30 Array.prototype[@@iterator]()
    var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
      this._t = _toIobject(iterated); // target
      this._i = 0;                   // next index
      this._k = kind;                // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
    }, function () {
      var O = this._t;
      var kind = this._k;
      var index = this._i++;
      if (!O || index >= O.length) {
        this._t = undefined;
        return _iterStep(1);
      }
      if (kind == 'keys') return _iterStep(0, index);
      if (kind == 'values') return _iterStep(0, O[index]);
      return _iterStep(0, [index, O[index]]);
    }, 'values');

    // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
    _iterators.Arguments = _iterators.Array;

    _addToUnscopables('keys');
    _addToUnscopables('values');
    _addToUnscopables('entries');

    var ITERATOR$4 = _wks('iterator');
    var TO_STRING_TAG = _wks('toStringTag');
    var ArrayValues = _iterators.Array;

    var DOMIterables = {
      CSSRuleList: true, // TODO: Not spec compliant, should be false.
      CSSStyleDeclaration: false,
      CSSValueList: false,
      ClientRectList: false,
      DOMRectList: false,
      DOMStringList: false,
      DOMTokenList: true,
      DataTransferItemList: false,
      FileList: false,
      HTMLAllCollection: false,
      HTMLCollection: false,
      HTMLFormElement: false,
      HTMLSelectElement: false,
      MediaList: true, // TODO: Not spec compliant, should be false.
      MimeTypeArray: false,
      NamedNodeMap: false,
      NodeList: true,
      PaintRequestList: false,
      Plugin: false,
      PluginArray: false,
      SVGLengthList: false,
      SVGNumberList: false,
      SVGPathSegList: false,
      SVGPointList: false,
      SVGStringList: false,
      SVGTransformList: false,
      SourceBufferList: false,
      StyleSheetList: true, // TODO: Not spec compliant, should be false.
      TextTrackCueList: false,
      TextTrackList: false,
      TouchList: false
    };

    for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
      var NAME = collections[i];
      var explicit = DOMIterables[NAME];
      var Collection = _global[NAME];
      var proto = Collection && Collection.prototype;
      var key;
      if (proto) {
        if (!proto[ITERATOR$4]) _hide(proto, ITERATOR$4, ArrayValues);
        if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
        _iterators[NAME] = ArrayValues;
        if (explicit) for (key in es6_array_iterator) if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
      }
    }

    var _redefineAll = function (target, src, safe) {
      for (var key in src) _redefine(target, key, src[key], safe);
      return target;
    };

    var _anInstance = function (it, Constructor, name, forbiddenField) {
      if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
        throw TypeError(name + ': incorrect invocation!');
      } return it;
    };

    var _forOf = createCommonjsModule(function (module) {
    var BREAK = {};
    var RETURN = {};
    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
      var f = _ctx(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
      // fast case for arrays with default iterator
      if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
        result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = _iterCall(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };
    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
    });

    var SPECIES$1 = _wks('species');

    var _setSpecies = function (KEY) {
      var C = _global[KEY];
      if (_descriptors && C && !C[SPECIES$1]) _objectDp.f(C, SPECIES$1, {
        configurable: true,
        get: function () { return this; }
      });
    };

    var _meta = createCommonjsModule(function (module) {
    var META = _uid('meta');


    var setDesc = _objectDp.f;
    var id = 0;
    var isExtensible = Object.isExtensible || function () {
      return true;
    };
    var FREEZE = !_fails(function () {
      return isExtensible(Object.preventExtensions({}));
    });
    var setMeta = function (it) {
      setDesc(it, META, { value: {
        i: 'O' + ++id, // object ID
        w: {}          // weak collections IDs
      } });
    };
    var fastKey = function (it, create) {
      // return primitive with prefix
      if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
      if (!_has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F';
        // not necessary to add metadata
        if (!create) return 'E';
        // add missing metadata
        setMeta(it);
      // return object ID
      } return it[META].i;
    };
    var getWeak = function (it, create) {
      if (!_has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMeta(it);
      // return hash weak collections IDs
      } return it[META].w;
    };
    // add metadata on freeze-family methods calling
    var onFreeze = function (it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
      return it;
    };
    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };
    });

    var _meta_1 = _meta.KEY;
    var _meta_2 = _meta.NEED;
    var _meta_3 = _meta.fastKey;
    var _meta_4 = _meta.getWeak;
    var _meta_5 = _meta.onFreeze;

    var _validateCollection = function (it, TYPE) {
      if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
      return it;
    };

    var dP$1 = _objectDp.f;









    var fastKey = _meta.fastKey;

    var SIZE = _descriptors ? '_s' : 'size';

    var getEntry = function (that, key) {
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return that._i[index];
      // frozen object case
      for (entry = that._f; entry; entry = entry.n) {
        if (entry.k == key) return entry;
      }
    };

    var _collectionStrong = {
      getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          _anInstance(that, C, NAME, '_i');
          that._t = NAME;         // collection type
          that._i = _objectCreate(null); // index
          that._f = undefined;    // first entry
          that._l = undefined;    // last entry
          that[SIZE] = 0;         // size
          if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
        });
        _redefineAll(C.prototype, {
          // 23.1.3.1 Map.prototype.clear()
          // 23.2.3.2 Set.prototype.clear()
          clear: function clear() {
            for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
              entry.r = true;
              if (entry.p) entry.p = entry.p.n = undefined;
              delete data[entry.i];
            }
            that._f = that._l = undefined;
            that[SIZE] = 0;
          },
          // 23.1.3.3 Map.prototype.delete(key)
          // 23.2.3.4 Set.prototype.delete(value)
          'delete': function (key) {
            var that = _validateCollection(this, NAME);
            var entry = getEntry(that, key);
            if (entry) {
              var next = entry.n;
              var prev = entry.p;
              delete that._i[entry.i];
              entry.r = true;
              if (prev) prev.n = next;
              if (next) next.p = prev;
              if (that._f == entry) that._f = next;
              if (that._l == entry) that._l = prev;
              that[SIZE]--;
            } return !!entry;
          },
          // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
          // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
          forEach: function forEach(callbackfn /* , that = undefined */) {
            _validateCollection(this, NAME);
            var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
            var entry;
            while (entry = entry ? entry.n : this._f) {
              f(entry.v, entry.k, this);
              // revert to the last existing entry
              while (entry && entry.r) entry = entry.p;
            }
          },
          // 23.1.3.7 Map.prototype.has(key)
          // 23.2.3.7 Set.prototype.has(value)
          has: function has(key) {
            return !!getEntry(_validateCollection(this, NAME), key);
          }
        });
        if (_descriptors) dP$1(C.prototype, 'size', {
          get: function () {
            return _validateCollection(this, NAME)[SIZE];
          }
        });
        return C;
      },
      def: function (that, key, value) {
        var entry = getEntry(that, key);
        var prev, index;
        // change existing entry
        if (entry) {
          entry.v = value;
        // create new entry
        } else {
          that._l = entry = {
            i: index = fastKey(key, true), // <- index
            k: key,                        // <- key
            v: value,                      // <- value
            p: prev = that._l,             // <- previous entry
            n: undefined,                  // <- next entry
            r: false                       // <- removed
          };
          if (!that._f) that._f = entry;
          if (prev) prev.n = entry;
          that[SIZE]++;
          // add to index
          if (index !== 'F') that._i[index] = entry;
        } return that;
      },
      getEntry: getEntry,
      setStrong: function (C, NAME, IS_MAP) {
        // add .keys, .values, .entries, [@@iterator]
        // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
        _iterDefine(C, NAME, function (iterated, kind) {
          this._t = _validateCollection(iterated, NAME); // target
          this._k = kind;                     // kind
          this._l = undefined;                // previous
        }, function () {
          var that = this;
          var kind = that._k;
          var entry = that._l;
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
          // get next entry
          if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
            // or finish the iteration
            that._t = undefined;
            return _iterStep(1);
          }
          // return step by kind
          if (kind == 'keys') return _iterStep(0, entry.k);
          if (kind == 'values') return _iterStep(0, entry.v);
          return _iterStep(0, [entry.k, entry.v]);
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

        // add [@@species], 23.1.2.2, 23.2.2.2
        _setSpecies(NAME);
      }
    };

    var f$1 = {}.propertyIsEnumerable;

    var _objectPie = {
    	f: f$1
    };

    var gOPD = Object.getOwnPropertyDescriptor;

    var f$2 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
      O = _toIobject(O);
      P = _toPrimitive(P, true);
      if (_ie8DomDefine) try {
        return gOPD(O, P);
      } catch (e) { /* empty */ }
      if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
    };

    var _objectGopd = {
    	f: f$2
    };

    // Works with __proto__ only. Old v8 can't work with null proto objects.
    /* eslint-disable no-proto */


    var check = function (O, proto) {
      _anObject(O);
      if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
    };
    var _setProto = {
      set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
        function (test, buggy, set) {
          try {
            set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
          } catch (e) { buggy = true; }
          return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy) O.__proto__ = proto;
            else set(O, proto);
            return O;
          };
        }({}, false) : undefined),
      check: check
    };

    var setPrototypeOf = _setProto.set;
    var _inheritIfRequired = function (that, target, C) {
      var S = target.constructor;
      var P;
      if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
        setPrototypeOf(that, P);
      } return that;
    };

    var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
      var Base = _global[NAME];
      var C = Base;
      var ADDER = IS_MAP ? 'set' : 'add';
      var proto = C && C.prototype;
      var O = {};
      var fixMethod = function (KEY) {
        var fn = proto[KEY];
        _redefine(proto, KEY,
          KEY == 'delete' ? function (a) {
            return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
          } : KEY == 'has' ? function has(a) {
            return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
          } : KEY == 'get' ? function get(a) {
            return IS_WEAK && !_isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
          } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
            : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
        );
      };
      if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
        new C().entries().next();
      }))) {
        // create collection constructor
        C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
        _redefineAll(C.prototype, methods);
        _meta.NEED = true;
      } else {
        var instance = new C();
        // early implementations not supports chaining
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
        // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
        var THROWS_ON_PRIMITIVES = _fails(function () { instance.has(1); });
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        var ACCEPT_ITERABLES = _iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
        // for early implementations -0 and +0 not the same
        var BUGGY_ZERO = !IS_WEAK && _fails(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new C();
          var index = 5;
          while (index--) $instance[ADDER](index, index);
          return !$instance.has(-0);
        });
        if (!ACCEPT_ITERABLES) {
          C = wrapper(function (target, iterable) {
            _anInstance(target, C, NAME);
            var that = _inheritIfRequired(new Base(), target, C);
            if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
            return that;
          });
          C.prototype = proto;
          proto.constructor = C;
        }
        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod('delete');
          fixMethod('has');
          IS_MAP && fixMethod('get');
        }
        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
        // weak collections should not contains .clear method
        if (IS_WEAK && proto.clear) delete proto.clear;
      }

      _setToStringTag(C, NAME);

      O[NAME] = C;
      _export(_export.G + _export.W + _export.F * (C != Base), O);

      if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

      return C;
    };

    var MAP = 'Map';

    // 23.1 Map Objects
    var es6_map = _collection(MAP, function (get) {
      return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
    }, {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
        return entry && entry.v;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return _collectionStrong.def(_validateCollection(this, MAP), key === 0 ? 0 : key, value);
      }
    }, _collectionStrong, true);

    var _arrayFromIterable = function (iter, ITERATOR) {
      var result = [];
      _forOf(iter, false, result.push, result, ITERATOR);
      return result;
    };

    // https://github.com/DavidBruant/Map-Set.prototype.toJSON


    var _collectionToJson = function (NAME) {
      return function toJSON() {
        if (_classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
        return _arrayFromIterable(this);
      };
    };

    // https://github.com/DavidBruant/Map-Set.prototype.toJSON


    _export(_export.P + _export.R, 'Map', { toJSON: _collectionToJson('Map') });

    // https://tc39.github.io/proposal-setmap-offrom/


    var _setCollectionOf = function (COLLECTION) {
      _export(_export.S, COLLECTION, { of: function of() {
        var length = arguments.length;
        var A = new Array(length);
        while (length--) A[length] = arguments[length];
        return new this(A);
      } });
    };

    // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
    _setCollectionOf('Map');

    // https://tc39.github.io/proposal-setmap-offrom/





    var _setCollectionFrom = function (COLLECTION) {
      _export(_export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
        var mapFn = arguments[1];
        var mapping, A, n, cb;
        _aFunction(this);
        mapping = mapFn !== undefined;
        if (mapping) _aFunction(mapFn);
        if (source == undefined) return new this();
        A = [];
        if (mapping) {
          n = 0;
          cb = _ctx(mapFn, arguments[2], 2);
          _forOf(source, false, function (nextItem) {
            A.push(cb(nextItem, n++));
          });
        } else {
          _forOf(source, false, A.push, A);
        }
        return new this(A);
      } });
    };

    // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
    _setCollectionFrom('Map');

    var map = _core.Map;

    var f$3 = Object.getOwnPropertySymbols;

    var _objectGops = {
    	f: f$3
    };

    // 19.1.2.1 Object.assign(target, source, ...)





    var $assign = Object.assign;

    // should work with symbols and should have deterministic property order (V8 bug)
    var _objectAssign = !$assign || _fails(function () {
      var A = {};
      var B = {};
      // eslint-disable-next-line no-undef
      var S = Symbol();
      var K = 'abcdefghijklmnopqrst';
      A[S] = 7;
      K.split('').forEach(function (k) { B[k] = k; });
      return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
    }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
      var T = _toObject(target);
      var aLen = arguments.length;
      var index = 1;
      var getSymbols = _objectGops.f;
      var isEnum = _objectPie.f;
      while (aLen > index) {
        var S = _iobject(arguments[index++]);
        var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
      } return T;
    } : $assign;

    // 19.1.3.1 Object.assign(target, source)


    _export(_export.S + _export.F, 'Object', { assign: _objectAssign });

    var assign = _core.Object.assign;

    // 7.3.20 SpeciesConstructor(O, defaultConstructor)


    var SPECIES$2 = _wks('species');
    var _speciesConstructor = function (O, D) {
      var C = _anObject(O).constructor;
      var S;
      return C === undefined || (S = _anObject(C)[SPECIES$2]) == undefined ? D : _aFunction(S);
    };

    // fast apply, http://jsperf.lnkit.com/fast-apply/5
    var _invoke = function (fn, args, that) {
      var un = that === undefined;
      switch (args.length) {
        case 0: return un ? fn()
                          : fn.call(that);
        case 1: return un ? fn(args[0])
                          : fn.call(that, args[0]);
        case 2: return un ? fn(args[0], args[1])
                          : fn.call(that, args[0], args[1]);
        case 3: return un ? fn(args[0], args[1], args[2])
                          : fn.call(that, args[0], args[1], args[2]);
        case 4: return un ? fn(args[0], args[1], args[2], args[3])
                          : fn.call(that, args[0], args[1], args[2], args[3]);
      } return fn.apply(that, args);
    };

    var process = _global.process;
    var setTask = _global.setImmediate;
    var clearTask = _global.clearImmediate;
    var MessageChannel = _global.MessageChannel;
    var Dispatch = _global.Dispatch;
    var counter = 0;
    var queue = {};
    var ONREADYSTATECHANGE = 'onreadystatechange';
    var defer;
    var channel;
    var port;
    var run = function () {
      var id = +this;
      // eslint-disable-next-line no-prototype-builtins
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listener = function (event) {
      run.call(event.data);
    };
    // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [];
        var i = 1;
        while (arguments.length > i) args.push(arguments[i++]);
        queue[++counter] = function () {
          // eslint-disable-next-line no-new-func
          _invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      // Node.js 0.8-
      if (_cof(process) == 'process') {
        defer = function (id) {
          process.nextTick(_ctx(run, id, 1));
        };
      // Sphere (JS game engine) Dispatch API
      } else if (Dispatch && Dispatch.now) {
        defer = function (id) {
          Dispatch.now(_ctx(run, id, 1));
        };
      // Browsers with MessageChannel, includes WebWorkers
      } else if (MessageChannel) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = _ctx(port.postMessage, port, 1);
      // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
      } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
        defer = function (id) {
          _global.postMessage(id + '', '*');
        };
        _global.addEventListener('message', listener, false);
      // IE8-
      } else if (ONREADYSTATECHANGE in _domCreate('script')) {
        defer = function (id) {
          _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
            _html.removeChild(this);
            run.call(id);
          };
        };
      // Rest old browsers
      } else {
        defer = function (id) {
          setTimeout(_ctx(run, id, 1), 0);
        };
      }
    }
    var _task = {
      set: setTask,
      clear: clearTask
    };

    var macrotask = _task.set;
    var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
    var process$1 = _global.process;
    var Promise = _global.Promise;
    var isNode = _cof(process$1) == 'process';

    var _microtask = function () {
      var head, last, notify;

      var flush = function () {
        var parent, fn;
        if (isNode && (parent = process$1.domain)) parent.exit();
        while (head) {
          fn = head.fn;
          head = head.next;
          try {
            fn();
          } catch (e) {
            if (head) notify();
            else last = undefined;
            throw e;
          }
        } last = undefined;
        if (parent) parent.enter();
      };

      // Node.js
      if (isNode) {
        notify = function () {
          process$1.nextTick(flush);
        };
      // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
      } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
        var toggle = true;
        var node = document.createTextNode('');
        new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
        notify = function () {
          node.data = toggle = !toggle;
        };
      // environments with maybe non-completely correct, but existent Promise
      } else if (Promise && Promise.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        var promise = Promise.resolve(undefined);
        notify = function () {
          promise.then(flush);
        };
      // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout
      } else {
        notify = function () {
          // strange IE + webpack dev server bug - use .call(global)
          macrotask.call(_global, flush);
        };
      }

      return function (fn) {
        var task = { fn: fn, next: undefined };
        if (last) last.next = task;
        if (!head) {
          head = task;
          notify();
        } last = task;
      };
    };

    // 25.4.1.5 NewPromiseCapability(C)


    function PromiseCapability(C) {
      var resolve, reject;
      this.promise = new C(function ($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = _aFunction(resolve);
      this.reject = _aFunction(reject);
    }

    var f$4 = function (C) {
      return new PromiseCapability(C);
    };

    var _newPromiseCapability = {
    	f: f$4
    };

    var _perform = function (exec) {
      try {
        return { e: false, v: exec() };
      } catch (e) {
        return { e: true, v: e };
      }
    };

    var navigator = _global.navigator;

    var _userAgent = navigator && navigator.userAgent || '';

    var _promiseResolve = function (C, x) {
      _anObject(C);
      if (_isObject(x) && x.constructor === C) return x;
      var promiseCapability = _newPromiseCapability.f(C);
      var resolve = promiseCapability.resolve;
      resolve(x);
      return promiseCapability.promise;
    };

    var task = _task.set;
    var microtask = _microtask();




    var PROMISE = 'Promise';
    var TypeError$1 = _global.TypeError;
    var process$2 = _global.process;
    var versions = process$2 && process$2.versions;
    var v8 = versions && versions.v8 || '';
    var $Promise = _global[PROMISE];
    var isNode$1 = _classof(process$2) == 'process';
    var empty = function () { /* empty */ };
    var Internal;
    var newGenericPromiseCapability;
    var OwnPromiseCapability;
    var Wrapper;
    var newPromiseCapability$1 = newGenericPromiseCapability = _newPromiseCapability.f;

    var USE_NATIVE = !!function () {
      try {
        // correct subclassing with @@species support
        var promise = $Promise.resolve(1);
        var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
          exec(empty, empty);
        };
        // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
        return (isNode$1 || typeof PromiseRejectionEvent == 'function')
          && promise.then(empty) instanceof FakePromise
          // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
          // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
          // we can't detect it synchronously, so just check versions
          && v8.indexOf('6.6') !== 0
          && _userAgent.indexOf('Chrome/66') === -1;
      } catch (e) { /* empty */ }
    }();

    // helpers
    var isThenable = function (it) {
      var then;
      return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
    };
    var notify = function (promise, isReject) {
      if (promise._n) return;
      promise._n = true;
      var chain = promise._c;
      microtask(function () {
        var value = promise._v;
        var ok = promise._s == 1;
        var i = 0;
        var run = function (reaction) {
          var handler = ok ? reaction.ok : reaction.fail;
          var resolve = reaction.resolve;
          var reject = reaction.reject;
          var domain = reaction.domain;
          var result, then, exited;
          try {
            if (handler) {
              if (!ok) {
                if (promise._h == 2) onHandleUnhandled(promise);
                promise._h = 1;
              }
              if (handler === true) result = value;
              else {
                if (domain) domain.enter();
                result = handler(value); // may throw
                if (domain) {
                  domain.exit();
                  exited = true;
                }
              }
              if (result === reaction.promise) {
                reject(TypeError$1('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else resolve(result);
            } else reject(value);
          } catch (e) {
            if (domain && !exited) domain.exit();
            reject(e);
          }
        };
        while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
        promise._c = [];
        promise._n = false;
        if (isReject && !promise._h) onUnhandled(promise);
      });
    };
    var onUnhandled = function (promise) {
      task.call(_global, function () {
        var value = promise._v;
        var unhandled = isUnhandled(promise);
        var result, handler, console;
        if (unhandled) {
          result = _perform(function () {
            if (isNode$1) {
              process$2.emit('unhandledRejection', value, promise);
            } else if (handler = _global.onunhandledrejection) {
              handler({ promise: promise, reason: value });
            } else if ((console = _global.console) && console.error) {
              console.error('Unhandled promise rejection', value);
            }
          });
          // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
          promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
        } promise._a = undefined;
        if (unhandled && result.e) throw result.v;
      });
    };
    var isUnhandled = function (promise) {
      return promise._h !== 1 && (promise._a || promise._c).length === 0;
    };
    var onHandleUnhandled = function (promise) {
      task.call(_global, function () {
        var handler;
        if (isNode$1) {
          process$2.emit('rejectionHandled', promise);
        } else if (handler = _global.onrejectionhandled) {
          handler({ promise: promise, reason: promise._v });
        }
      });
    };
    var $reject = function (value) {
      var promise = this;
      if (promise._d) return;
      promise._d = true;
      promise = promise._w || promise; // unwrap
      promise._v = value;
      promise._s = 2;
      if (!promise._a) promise._a = promise._c.slice();
      notify(promise, true);
    };
    var $resolve = function (value) {
      var promise = this;
      var then;
      if (promise._d) return;
      promise._d = true;
      promise = promise._w || promise; // unwrap
      try {
        if (promise === value) throw TypeError$1("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          microtask(function () {
            var wrapper = { _w: promise, _d: false }; // wrap
            try {
              then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          promise._v = value;
          promise._s = 1;
          notify(promise, false);
        }
      } catch (e) {
        $reject.call({ _w: promise, _d: false }, e); // wrap
      }
    };

    // constructor polyfill
    if (!USE_NATIVE) {
      // 25.4.3.1 Promise(executor)
      $Promise = function Promise(executor) {
        _anInstance(this, $Promise, PROMISE, '_h');
        _aFunction(executor);
        Internal.call(this);
        try {
          executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
        } catch (err) {
          $reject.call(this, err);
        }
      };
      // eslint-disable-next-line no-unused-vars
      Internal = function Promise(executor) {
        this._c = [];             // <- awaiting reactions
        this._a = undefined;      // <- checked in isUnhandled reactions
        this._s = 0;              // <- state
        this._d = false;          // <- done
        this._v = undefined;      // <- value
        this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
        this._n = false;          // <- notify
      };
      Internal.prototype = _redefineAll($Promise.prototype, {
        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
        then: function then(onFulfilled, onRejected) {
          var reaction = newPromiseCapability$1(_speciesConstructor(this, $Promise));
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          reaction.domain = isNode$1 ? process$2.domain : undefined;
          this._c.push(reaction);
          if (this._a) this._a.push(reaction);
          if (this._s) notify(this, false);
          return reaction.promise;
        },
        // 25.4.5.1 Promise.prototype.catch(onRejected)
        'catch': function (onRejected) {
          return this.then(undefined, onRejected);
        }
      });
      OwnPromiseCapability = function () {
        var promise = new Internal();
        this.promise = promise;
        this.resolve = _ctx($resolve, promise, 1);
        this.reject = _ctx($reject, promise, 1);
      };
      _newPromiseCapability.f = newPromiseCapability$1 = function (C) {
        return C === $Promise || C === Wrapper
          ? new OwnPromiseCapability(C)
          : newGenericPromiseCapability(C);
      };
    }

    _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Promise: $Promise });
    _setToStringTag($Promise, PROMISE);
    _setSpecies(PROMISE);
    Wrapper = _core[PROMISE];

    // statics
    _export(_export.S + _export.F * !USE_NATIVE, PROMISE, {
      // 25.4.4.5 Promise.reject(r)
      reject: function reject(r) {
        var capability = newPromiseCapability$1(this);
        var $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }
    });
    _export(_export.S + _export.F * (_library || !USE_NATIVE), PROMISE, {
      // 25.4.4.6 Promise.resolve(x)
      resolve: function resolve(x) {
        return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
      }
    });
    _export(_export.S + _export.F * !(USE_NATIVE && _iterDetect(function (iter) {
      $Promise.all(iter)['catch'](empty);
    })), PROMISE, {
      // 25.4.4.1 Promise.all(iterable)
      all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapability$1(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = _perform(function () {
          var values = [];
          var index = 0;
          var remaining = 1;
          _forOf(iterable, false, function (promise) {
            var $index = index++;
            var alreadyCalled = false;
            values.push(undefined);
            remaining++;
            C.resolve(promise).then(function (value) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              values[$index] = value;
              --remaining || resolve(values);
            }, reject);
          });
          --remaining || resolve(values);
        });
        if (result.e) reject(result.v);
        return capability.promise;
      },
      // 25.4.4.4 Promise.race(iterable)
      race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapability$1(C);
        var reject = capability.reject;
        var result = _perform(function () {
          _forOf(iterable, false, function (promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (result.e) reject(result.v);
        return capability.promise;
      }
    });

    _export(_export.P + _export.R, 'Promise', { 'finally': function (onFinally) {
      var C = _speciesConstructor(this, _core.Promise || _global.Promise);
      var isFunction = typeof onFinally == 'function';
      return this.then(
        isFunction ? function (x) {
          return _promiseResolve(C, onFinally()).then(function () { return x; });
        } : onFinally,
        isFunction ? function (e) {
          return _promiseResolve(C, onFinally()).then(function () { throw e; });
        } : onFinally
      );
    } });

    // https://github.com/tc39/proposal-promise-try




    _export(_export.S, 'Promise', { 'try': function (callbackfn) {
      var promiseCapability = _newPromiseCapability.f(this);
      var result = _perform(callbackfn);
      (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
      return promiseCapability.promise;
    } });

    var promise = _core.Promise;

    var SET = 'Set';

    // 23.2 Set Objects
    var es6_set = _collection(SET, function (get) {
      return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
    }, {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return _collectionStrong.def(_validateCollection(this, SET), value = value === 0 ? 0 : value, value);
      }
    }, _collectionStrong);

    // https://github.com/DavidBruant/Map-Set.prototype.toJSON


    _export(_export.P + _export.R, 'Set', { toJSON: _collectionToJson('Set') });

    // https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
    _setCollectionOf('Set');

    // https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
    _setCollectionFrom('Set');

    var set = _core.Set;

    // element-closest | CC0-1.0 | github.com/jonathantneal/closest

    (function (ElementProto) {
    	if (typeof ElementProto.matches !== 'function') {
    		ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
    			var element = this;
    			var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
    			var index = 0;

    			while (elements[index] && elements[index] !== element) {
    				++index;
    			}

    			return Boolean(elements[index]);
    		};
    	}

    	if (typeof ElementProto.closest !== 'function') {
    		ElementProto.closest = function closest(selector) {
    			var element = this;

    			while (element && element.nodeType === 1) {
    				if (element.matches(selector)) {
    					return element;
    				}

    				element = element.parentNode;
    			}

    			return null;
    		};
    	}
    })(window.Element.prototype);

    (function () {
      mutationObserverHasBuggyRemovedNodes(function (result) {
        if (result) patchInnerHTMLToRemoveChildNodes();
      });

      function mutationObserverHasBuggyRemovedNodes(callback) {
        if (!window.MutationObserver) {
          callback(false);
          return;
        }

        var element = document.createElement("div");
        element.innerHTML = "<div><div></div></div>";

        var observer = new MutationObserver(function (mutations) {
          observer.disconnect();
          var mutation = mutations[0];
          if (mutation && mutation.type == "childList") {
            var removedNode = mutation.removedNodes[0];
            var isBuggy = removedNode.childNodes.length == 0;
            callback(isBuggy);
          }
        });

        observer.observe(element, { childList: true, subtree: true });
        element.innerHTML = "";
      }

      function patchInnerHTMLToRemoveChildNodes() {
        var _HTMLElement = HTMLElement,
            prototype = _HTMLElement.prototype;

        var descriptor = Object.getOwnPropertyDescriptor(prototype, "innerHTML");
        if (!descriptor) return;
        var _set = descriptor.set;

        if (!_set) return;

        Object.defineProperty(prototype, "innerHTML", {
          set: function set(value) {
            while (this.lastChild) {
              this.removeChild(this.lastChild);
            }
            _set.call(this, value);
          }
        });
      }

    }());

    window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(o,t){t=t||window;for(var i=0;i<this.length;i++)o.call(t,this[i],i,this);});

    // At the time of writing, @stimulus/polyfills adds the following:
    //  - [].find
    //  - [].findIndex
    //  - Array.from
    //  - Map
    //  - Object.assign
    //  - elem.closest
    //  - the missing parts of mutation observer for IE11
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
                if (arguments.length === 1 || typeof arguments[1] === "undefined") {
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

}());
