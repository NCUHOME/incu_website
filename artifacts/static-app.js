(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SizeType; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_image_app_store_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var assets_image_app_store_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_image_app_store_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_image_android_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var assets_image_android_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_image_android_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_styl__WEBPACK_IMPORTED_MODULE_3__);




var DownloadType;

(function (DownloadType) {
  DownloadType["android"] = "android";
  DownloadType["appStore"] = "appStore";
})(DownloadType || (DownloadType = {}));

var SizeType;

(function (SizeType) {
  SizeType["mid"] = "mid";
  SizeType["large"] = "large";
})(SizeType || (SizeType = {}));

var Download = function Download(_ref) {
  var btnType = _ref.btnType,
      url = _ref.url,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SizeType.mid : _ref$size;

  var image = function image() {
    var imageMap = {
      appStore: assets_image_app_store_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
      android: assets_image_android_svg__WEBPACK_IMPORTED_MODULE_2___default.a
    };
    return imageMap[btnType];
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: size === 'large' ? "download-container-large" : "download-container-mid",
    href: url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image()
  }));
};

/* harmony default export */ __webpack_exports__["c"] = (Download);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

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

var _createClass = function () {
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

var _requireUniversalModule = __webpack_require__(37);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(39);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(18);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(40);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(13);

var _helpers = __webpack_require__(41);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(13);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(38)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzlweCIgaGVpZ2h0PSIxN3B4IiB2aWV3Qm94PSIwIDAgMzkgMTciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+57yW57uEIDQ8L3RpdGxlPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5omL5py65aSH5Lu9LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMi4wMDAwMDAsIC02LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjMwNCw1LjI0IEwyLjMwNCwzLjYwOCBMMC42NzIsMy42MDggTDAuNjcyLDUuMjQgTDIuMzA0LDUuMjQgWiBNMi4zMDQsMTUgTDIuMzA0LDYuODg4IEwwLjY3Miw2Ljg4OCBMMC42NzIsMTUgTDIuMzA0LDE1IFogTTUuMTM0NjI0LDE1IEw1LjEzNDYyNCw4LjE1MiBMNS4xNjY2MjQsOC4xNTIgTDcuNjYyNjI0LDE1IEw5LjE5ODYyNCwxNSBMOS4xOTg2MjQsMy42MDggTDcuNTY2NjI0LDMuNjA4IEw3LjU2NjYyNCwxMC40NzIgTDcuNTM0NjI0LDEwLjQ3MiBMNS4wNzA2MjQsMy42MDggTDMuNTAyNjI0LDMuNjA4IEwzLjUwMjYyNCwxNSBMNS4xMzQ2MjQsMTUgWiBNMTMuMDg1MjQ4LDE1LjA5NiBDMTMuNDQ3OTE0NywxNS4wOTYgMTMuNzg2NTgxMywxNS4wMjQgMTQuMTAxMjQ4LDE0Ljg4IEMxNC40MTU5MTQ3LDE0LjczNiAxNC42OTA1ODEzLDE0LjU0MTMzMzMgMTQuOTI1MjQ4LDE0LjI5NiBDMTUuMTU5OTE0NywxNC4wNTA2NjY3IDE1LjM0MzkxNDcsMTMuNzcwNjY2NyAxNS40NzcyNDgsMTMuNDU2IEMxNS42MTA1ODEzLDEzLjE0MTMzMzMgMTUuNjc3MjQ4LDEyLjgwOCAxNS42NzcyNDgsMTIuNDU2IEwxNS42NzcyNDgsMTIuNDU2IEwxNS42NzcyNDgsMTEuNzUyIEwxNC4wNDUyNDgsMTEuNzUyIEwxNC4wNDUyNDgsMTIuMzEyIEMxNC4wNDUyNDgsMTIuNTM2IDE0LjAxMzI0OCwxMi43MjI2NjY3IDEzLjk0OTI0OCwxMi44NzIgQzEzLjg4NTI0OCwxMy4wMjEzMzMzIDEzLjgwNTI0OCwxMy4xMzg2NjY3IDEzLjcwOTI0OCwxMy4yMjQgQzEzLjYwMjU4MTMsMTMuMzA5MzMzMyAxMy40ODc5MTQ3LDEzLjM3MDY2NjcgMTMuMzY1MjQ4LDEzLjQwOCBDMTMuMjQyNTgxMywxMy40NDUzMzMzIDEzLjEyNzkxNDcsMTMuNDY0IDEzLjAyMTI0OCwxMy40NjQgQzEyLjY0NzkxNDcsMTMuNDY0IDEyLjM4OTI0OCwxMy4zNTIgMTIuMjQ1MjQ4LDEzLjEyOCBDMTIuMTAxMjQ4LDEyLjkwNCAxMi4wMjkyNDgsMTIuNjI2NjY2NyAxMi4wMjkyNDgsMTIuMjk2IEwxMi4wMjkyNDgsMTIuMjk2IEwxMi4wMjkyNDgsNi40NzIgQzEyLjAyOTI0OCw2LjA4OCAxMi4wOTU5MTQ3LDUuNzcwNjY2NjcgMTIuMjI5MjQ4LDUuNTIgQzEyLjM2MjU4MTMsNS4yNjkzMzMzMyAxMi42MzE5MTQ3LDUuMTQ0IDEzLjAzNzI0OCw1LjE0NCBDMTMuMzQ2NTgxMyw1LjE0NCAxMy41OTE5MTQ3LDUuMjYxMzMzMzMgMTMuNzczMjQ4LDUuNDk2IEMxMy45NTQ1ODEzLDUuNzMwNjY2NjcgMTQuMDQ1MjQ4LDYuMDA4IDE0LjA0NTI0OCw2LjMyOCBMMTQuMDQ1MjQ4LDYuMzI4IEwxNC4wNDUyNDgsNi44NzIgTDE1LjY3NzI0OCw2Ljg3MiBMMTUuNjc3MjQ4LDYuMjMyIEMxNS42NzcyNDgsNS44MzczMzMzMyAxNS42MTA1ODEzLDUuNDcyIDE1LjQ3NzI0OCw1LjEzNiBDMTUuMzQzOTE0Nyw0LjggMTUuMTU5OTE0Nyw0LjUwOTMzMzMzIDE0LjkyNTI0OCw0LjI2NCBDMTQuNDQ1MjQ4LDMuNzYyNjY2NjcgMTMuODIxMjQ4LDMuNTEyIDEzLjA1MzI0OCwzLjUxMiBDMTIuNjU4NTgxMywzLjUxMiAxMi4yOTg1ODEzLDMuNTc4NjY2NjcgMTEuOTczMjQ4LDMuNzEyIEMxMS42NDc5MTQ3LDMuODQ1MzMzMzMgMTEuMzY3OTE0Nyw0LjAyOTMzMzMzIDExLjEzMzI0OCw0LjI2NCBDMTAuODk4NTgxMyw0LjQ5ODY2NjY3IDEwLjcxNzI0OCw0Ljc3NiAxMC41ODkyNDgsNS4wOTYgQzEwLjQ2MTI0OCw1LjQxNiAxMC4zOTcyNDgsNS43NjI2NjY2NyAxMC4zOTcyNDgsNi4xMzYgTDEwLjM5NzI0OCw2LjEzNiBMMTAuMzk3MjQ4LDEyLjQwOCBDMTAuMzk3MjQ4LDEyLjkzMDY2NjcgMTAuNDc5OTE0NywxMy4zNiAxMC42NDUyNDgsMTMuNjk2IEMxMC44MTA1ODEzLDE0LjAzMiAxMS4wMjEyNDgsMTQuMzA2NjY2NyAxMS4yNzcyNDgsMTQuNTIgQzExLjUzMzI0OCwxNC43MzMzMzMzIDExLjgyMTI0OCwxNC44ODI2NjY3IDEyLjE0MTI0OCwxNC45NjggQzEyLjQ2MTI0OCwxNS4wNTMzMzMzIDEyLjc3NTkxNDcsMTUuMDk2IDEzLjA4NTI0OCwxNS4wOTYgWiBNMTkuNDY3ODcyLDE1LjA5NiBDMTkuODMwNTM4NywxNS4wOTYgMjAuMTcxODcyLDE1LjAyNjY2NjcgMjAuNDkxODcyLDE0Ljg4OCBDMjAuODExODcyLDE0Ljc0OTMzMzMgMjEuMDk0NTM4NywxNC41NTczMzMzIDIxLjMzOTg3MiwxNC4zMTIgQzIxLjU4NTIwNTMsMTQuMDY2NjY2NyAyMS43NzQ1Mzg3LDEzLjc4NjY2NjcgMjEuOTA3ODcyLDEzLjQ3MiBDMjIuMDQxMjA1MywxMy4xNTczMzMzIDIyLjEwNzg3MiwxMi44MTMzMzMzIDIyLjEwNzg3MiwxMi40NCBMMjIuMTA3ODcyLDEyLjQ0IEwyMi4xMDc4NzIsMy42MDggTDIwLjQ3NTg3MiwzLjYwOCBMMjAuNDc1ODcyLDEyLjI4IEMyMC40NzU4NzIsMTIuNjg1MzMzMyAyMC4zNzk4NzIsMTIuOTg0IDIwLjE4Nzg3MiwxMy4xNzYgQzE5Ljk5NTg3MiwxMy4zNjggMTkuNzU1ODcyLDEzLjQ2NCAxOS40Njc4NzIsMTMuNDY0IEMxOS4xNzk4NzIsMTMuNDY0IDE4LjkzOTg3MiwxMy4zNjggMTguNzQ3ODcyLDEzLjE3NiBDMTguNTU1ODcyLDEyLjk4NCAxOC40NTk4NzIsMTIuNjg1MzMzMyAxOC40NTk4NzIsMTIuMjggTDE4LjQ1OTg3MiwxMi4yOCBMMTguNDU5ODcyLDMuNjA4IEwxNi44Mjc4NzIsMy42MDggTDE2LjgyNzg3MiwxMi40NCBDMTYuODI3ODcyLDEyLjgxMzMzMzMgMTYuODk3MjA1MywxMy4xNTczMzMzIDE3LjAzNTg3MiwxMy40NzIgQzE3LjE3NDUzODcsMTMuNzg2NjY2NyAxNy4zNjY1Mzg3LDE0LjA2NjY2NjcgMTcuNjExODcyLDE0LjMxMiBDMTcuODU3MjA1MywxNC41NTczMzMzIDE4LjEzNzIwNTMsMTQuNzQ5MzMzMyAxOC40NTE4NzIsMTQuODg4IEMxOC43NjY1Mzg3LDE1LjAyNjY2NjcgMTkuMTA1MjA1MywxNS4wOTYgMTkuNDY3ODcyLDE1LjA5NiBaIiBpZD0iaU5DVSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2LjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMi43MjgsMTEgTDIuOTM4LDkuOTI5IEwzLjkxMSw5LjkyOSBMNC4xMjEsMTEgTDQuODM1LDExIEwzLjcyMiw2LjAxNiBMMy4xMjcsNi4wMTYgTDIuMDE0LDExIEwyLjcyOCwxMSBaIE0zLjc3OCw5LjI1NyBMMy4wNjQsOS4yNTcgTDMuNDE0LDcuNDUxIEwzLjQyOCw3LjQ1MSBMMy43NzgsOS4yNTcgWiBNNS44MjEzOTgsMTEgTDUuODIxMzk4LDkuMDU0IEw2LjE4NTM5OCw5LjA1NCBDNi40NTEzOTgsOS4wNTQgNi42NjYwNjQ2Nyw5LjAwODUgNi44MjkzOTgsOC45MTc1IEM2Ljk5MjczMTMzLDguODI2NSA3LjEyMzM5OCw4LjY5OTMzMzMzIDcuMjIxMzk4LDguNTM2IEM3LjMwNTM5OCw4LjQwMDY2NjY3IDcuMzYwMjMxMzMsOC4yNTYgNy4zODU4OTgsOC4xMDIgQzcuNDExNTY0NjcsNy45NDggNy40MjQzOTgsNy43NTkgNy40MjQzOTgsNy41MzUgQzcuNDI0Mzk4LDcuMjM2MzMzMzMgNy40MDEwNjQ2Nyw2Ljk5OTUgNy4zNTQzOTgsNi44MjQ1IEM3LjMwNzczMTMzLDYuNjQ5NSA3LjIyMzczMTMzLDYuNDk2NjY2NjcgNy4xMDIzOTgsNi4zNjYgQzYuOTgxMDY0NjcsNi4yMzUzMzMzMyA2Ljg0NTczMTMzLDYuMTQ0MzMzMzMgNi42OTYzOTgsNi4wOTMgQzYuNTQ3MDY0NjcsNi4wNDE2NjY2NyA2LjM3NDM5OCw2LjAxNiA2LjE3ODM5OCw2LjAxNiBMNi4xNzgzOTgsNi4wMTYgTDUuMTA3Mzk4LDYuMDE2IEw1LjEwNzM5OCwxMSBMNS44MjEzOTgsMTEgWiBNNi4xNjQzOTgsOC4zODIgTDUuODIxMzk4LDguMzgyIEw1LjgyMTM5OCw2LjY4OCBMNi4xOTIzOTgsNi42ODggQzYuMzMyMzk4LDYuNjg4IDYuNDM5NzMxMzMsNi43MDkgNi41MTQzOTgsNi43NTEgQzYuNTg5MDY0NjcsNi43OTMgNi42NDUwNjQ2Nyw2Ljg1MzY2NjY3IDYuNjgyMzk4LDYuOTMzIEM2LjcxOTczMTMzLDcuMDEyMzMzMzMgNi43NDA3MzEzMyw3LjEwNDUgNi43NDUzOTgsNy4yMDk1IEM2Ljc1MDA2NDY3LDcuMzE0NSA2Ljc1MjM5OCw3LjQyNTMzMzMzIDYuNzUyMzk4LDcuNTQyIEM2Ljc1MjM5OCw3LjY2OCA2Ljc0ODg5OCw3Ljc4MjMzMzMzIDYuNzQxODk4LDcuODg1IEM2LjczNDg5OCw3Ljk4NzY2NjY3IDYuNzEyNzMxMzMsOC4wNzQgNi42NzUzOTgsOC4xNDQgQzYuNjM4MDY0NjcsOC4yMTg2NjY2NyA2LjU3OTczMTMzLDguMjc3IDYuNTAwMzk4LDguMzE5IEM2LjQyMTA2NDY3LDguMzYxIDYuMzA5MDY0NjcsOC4zODIgNi4xNjQzOTgsOC4zODIgTDYuMTY0Mzk4LDguMzgyIFogTTguNTkyNzk2LDExIEw4LjU5Mjc5Niw5LjA1NCBMOC45NTY3OTYsOS4wNTQgQzkuMjIyNzk2LDkuMDU0IDkuNDM3NDYyNjcsOS4wMDg1IDkuNjAwNzk2LDguOTE3NSBDOS43NjQxMjkzMyw4LjgyNjUgOS44OTQ3OTYsOC42OTkzMzMzMyA5Ljk5Mjc5Niw4LjUzNiBDMTAuMDc2Nzk2LDguNDAwNjY2NjcgMTAuMTMxNjI5Myw4LjI1NiAxMC4xNTcyOTYsOC4xMDIgQzEwLjE4Mjk2MjcsNy45NDggMTAuMTk1Nzk2LDcuNzU5IDEwLjE5NTc5Niw3LjUzNSBDMTAuMTk1Nzk2LDcuMjM2MzMzMzMgMTAuMTcyNDYyNyw2Ljk5OTUgMTAuMTI1Nzk2LDYuODI0NSBDMTAuMDc5MTI5Myw2LjY0OTUgOS45OTUxMjkzMyw2LjQ5NjY2NjY3IDkuODczNzk2LDYuMzY2IEM5Ljc1MjQ2MjY3LDYuMjM1MzMzMzMgOS42MTcxMjkzMyw2LjE0NDMzMzMzIDkuNDY3Nzk2LDYuMDkzIEM5LjMxODQ2MjY3LDYuMDQxNjY2NjcgOS4xNDU3OTYsNi4wMTYgOC45NDk3OTYsNi4wMTYgTDguOTQ5Nzk2LDYuMDE2IEw3Ljg3ODc5Niw2LjAxNiBMNy44Nzg3OTYsMTEgTDguNTkyNzk2LDExIFogTTguOTM1Nzk2LDguMzgyIEw4LjU5Mjc5Niw4LjM4MiBMOC41OTI3OTYsNi42ODggTDguOTYzNzk2LDYuNjg4IEM5LjEwMzc5Niw2LjY4OCA5LjIxMTEyOTMzLDYuNzA5IDkuMjg1Nzk2LDYuNzUxIEM5LjM2MDQ2MjY3LDYuNzkzIDkuNDE2NDYyNjcsNi44NTM2NjY2NyA5LjQ1Mzc5Niw2LjkzMyBDOS40OTExMjkzMyw3LjAxMjMzMzMzIDkuNTEyMTI5MzMsNy4xMDQ1IDkuNTE2Nzk2LDcuMjA5NSBDOS41MjE0NjI2Nyw3LjMxNDUgOS41MjM3OTYsNy40MjUzMzMzMyA5LjUyMzc5Niw3LjU0MiBDOS41MjM3OTYsNy42NjggOS41MjAyOTYsNy43ODIzMzMzMyA5LjUxMzI5Niw3Ljg4NSBDOS41MDYyOTYsNy45ODc2NjY2NyA5LjQ4NDEyOTMzLDguMDc0IDkuNDQ2Nzk2LDguMTQ0IEM5LjQwOTQ2MjY3LDguMjE4NjY2NjcgOS4zNTExMjkzMyw4LjI3NyA5LjI3MTc5Niw4LjMxOSBDOS4xOTI0NjI2Nyw4LjM2MSA5LjA4MDQ2MjY3LDguMzgyIDguOTM1Nzk2LDguMzgyIEw4LjkzNTc5Niw4LjM4MiBaIiBpZD0iQVBQIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC43IiB4PSIwIiB5PSIzIiB3aWR0aD0iMTIiIGhlaWdodD0iMTEiIHJ4PSIyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/title.972f1895.svg";

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(8);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(5);

// EXTERNAL MODULE: external "@geist-ui/react"
var react_ = __webpack_require__(25);

// EXTERNAL MODULE: external "react-spring/web.cjs"
var web_cjs_ = __webpack_require__(15);

// EXTERNAL MODULE: /Users/ice/incu_website/src/assets/image/Rolling.svg
var Rolling = __webpack_require__(26);
var Rolling_default = /*#__PURE__*/__webpack_require__.n(Rolling);

// EXTERNAL MODULE: /Users/ice/incu_website/src/components/LoadingScreen/index.styl
var components_LoadingScreen = __webpack_require__(50);

// CONCATENATED MODULE: /Users/ice/incu_website/src/components/LoadingScreen/index.tsx



var tips = ['正在野区等宁王刷完 F6', '正在等待 App Store 审核', '正在等待 iOS 编译', '正在删库跑路', '正在等待期末结果', '正在学校里找共享单车', '正在信工楼找上课教室'];

var LoadingScreen_LoadingScreen = function LoadingScreen() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "loading-container"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: Rolling_default.a
  }), /*#__PURE__*/external_react_default.a.createElement("span", null, tips[Math.floor(Math.random() * tips.length)]));
};

/* harmony default export */ var src_components_LoadingScreen = (LoadingScreen_LoadingScreen);
// EXTERNAL MODULE: /Users/ice/incu_website/src/app.styl
var app = __webpack_require__(51);

// CONCATENATED MODULE: /Users/ice/incu_website/src/App.tsx








var App_App = function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(react_["GeistProvider"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Head"], null, /*#__PURE__*/external_react_default.a.createElement("title", null, "\u5357\u5927\u5BB6\u56ED")), /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement(src_components_LoadingScreen, null)
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Router"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*",
    render: function render(_ref) {
      var routePath = _ref.routePath,
          getComponentForPath = _ref.getComponentForPath;
      var element = getComponentForPath(routePath);
      return /*#__PURE__*/external_react_default.a.createElement(web_cjs_["Transition"], {
        "native": true,
        items: routePath,
        from: {
          transform: 'translateY(-100px)',
          opacity: 0
        },
        enter: {
          transform: 'translateY(0px)',
          opacity: 1
        },
        leave: {
          transform: 'translateY(-100px)',
          opacity: 0
        }
      }, function () {
        return function (props) {
          return /*#__PURE__*/external_react_default.a.createElement(web_cjs_["animated"].div, {
            style: props
          }, element);
        };
      });
    }
  }))))));
};

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App_App);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

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

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(6);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-spring/web.cjs");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("/Users/ice/incu_website/node_modules/react-static/lib/browser");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  function isMobile() {
    var userAgentInfo = navigator.userAgent;
    var agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    return agents.some(function (item) {
      return userAgentInfo.indexOf(item) > 0;
    });
  }

  return isMobile() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: './Mobile'
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: './PC'
  });
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var assets_image_m_header_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var assets_image_m_header_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_image_m_header_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_image_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var assets_image_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_image_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_image_title_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var assets_image_title_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_image_title_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53);
/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_styl__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-bar-m"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_image_logo_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "logo-m",
    draggable: "false"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner-contianer-m"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_image_m_header_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "banner-m",
    draggable: "false"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-container-m"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_image_title_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: "title-m",
    draggable: "false"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-container-m"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Download__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"], {
    btnType: components_Download__WEBPACK_IMPORTED_MODULE_1__[/* DownloadType */ "a"].android,
    size: components_Download__WEBPACK_IMPORTED_MODULE_1__[/* SizeType */ "b"].large,
    url: "https://incu-download.ncuos.com/iNCU_latest.apk"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Download__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"], {
    btnType: components_Download__WEBPACK_IMPORTED_MODULE_1__[/* DownloadType */ "a"].appStore,
    size: components_Download__WEBPACK_IMPORTED_MODULE_1__[/* SizeType */ "b"].large,
    url: "https://itunes.apple.com/us/app/%E5%8D%97%E5%A4%A7%E5%AE%B6%E5%9B%AD/id1209726561?mt=8"
  }))));
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var assets_image_header_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var assets_image_header_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_image_header_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_image_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var assets_image_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_image_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_image_title_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var assets_image_title_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_image_title_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54);
/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_styl__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_image_logo_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "logo",
    draggable: "false"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner-contianer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_image_header_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "banner",
    draggable: "false"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_image_title_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: "title",
    draggable: "false"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Download__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"], {
    btnType: components_Download__WEBPACK_IMPORTED_MODULE_1__[/* DownloadType */ "a"].android,
    url: "https://incu-download.ncuos.com/iNCU_latest.apk"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Download__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"], {
    btnType: components_Download__WEBPACK_IMPORTED_MODULE_1__[/* DownloadType */ "a"].appStore,
    url: "https://itunes.apple.com/us/app/%E5%8D%97%E5%A4%A7%E5%AE%B6%E5%9B%AD/id1209726561?mt=8"
  }))));
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(8);

var _router = __webpack_require__(5);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@geist-ui/react");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZzsgYW5pbWF0aW9uLWRlbGF5OiAwczsiIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSIyMDBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGU0ZGFlIiBzdHJva2Utd2lkdGg9IjUiIHI9IjQyIiBzdHJva2UtZGFzaGFycmF5PSIxOTcuOTIwMzM3MTc2MTU2OTggNjcuOTczNDQ1NzI1Mzg1NjYiIHN0eWxlPSJhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZzsgYW5pbWF0aW9uLWRlbGF5OiAwczsiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgc3R5bGU9ImFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nOyBhbmltYXRpb24tZGVsYXk6IDBzOyI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2NpcmNsZT4KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgNTIgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+57yW57uEIDc8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciBpZD0iZmlsdGVyLTEiPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC44NDcwMDAgMCAwIDAgMCAwLjg0NzAwMCAwIDAgMCAwIDAuODQ3MDAwIDAgMCAwIDEuMDAwMDAwIDAiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaJi+acuuWkh+S7vS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTgwLjAwMDAwMCwgLTE0NS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODEuMDAwMDAwLCAxMjYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2i5aSH5Lu9LTIiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjUiIHg9IjAiIHk9IjAiIHdpZHRoPSI1MCIgaGVpZ2h0PSIxNCIgcng9IjQiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUuNjI1LDkgTDE1Ljk1LDguMTA1IEwxNy40NDUsOC4xMDUgTDE3Ljc3LDkgTDE4LjM5NSw5IEwxNy4wMyw1LjQzIEwxNi4zNjUsNS40MyBMMTUsOSBMMTUuNjI1LDkgWiBNMTcuMjcsNy42MjUgTDE2LjEyNSw3LjYyNSBMMTYuNjksNi4wNiBMMTYuNzEsNi4wNiBMMTcuMjcsNy42MjUgWiBNMTkuMjQ4MDMxNSw5Ljk5IEwxOS4yNDgwMzE1LDguNjQ1IEMxOS40NTgwMzE1LDguOTI1IDE5LjcxODAzMTUsOS4wNyAyMC4wMTgwMzE1LDkuMDcgQzIwLjM4ODAzMTUsOS4wNyAyMC42ODMwMzE1LDguOTM1IDIwLjg5MzAzMTUsOC42NjUgQzIxLjA4ODAzMTUsOC40MTUgMjEuMTg4MDMxNSw4LjEgMjEuMTg4MDMxNSw3LjcyIEMyMS4xODgwMzE1LDcuMzIgMjEuMDg4MDMxNSw3IDIwLjg4ODAzMTUsNi43NSBDMjAuNjY4MDMxNSw2LjQ4IDIwLjM2ODAzMTUsNi4zNDUgMTkuOTg4MDMxNSw2LjM0NSBDMTkuNjQ4MDMxNSw2LjM0NSAxOS4zODgwMzE1LDYuNDYgMTkuMjA4MDMxNSw2LjY5IEwxOS4yMDgwMzE1LDYuNDE1IEwxOC42NzgwMzE1LDYuNDE1IEwxOC42NzgwMzE1LDkuOTkgTDE5LjI0ODAzMTUsOS45OSBaIE0xOS44ODMwMzE1LDguNjEgQzE5LjY5ODAzMTUsOC42MSAxOS41NDgwMzE1LDguNTM1IDE5LjQyODAzMTUsOC4zODUgQzE5LjI5MzAzMTUsOC4yMiAxOS4yMjgwMzE1LDggMTkuMjI4MDMxNSw3LjczIEwxOS4yMjgwMzE1LDcuNjkgQzE5LjIyODAzMTUsNy40MyAxOS4yNzgwMzE1LDcuMjI1IDE5LjM4ODAzMTUsNy4wNyBDMTkuNTA4MDMxNSw2Ljg5IDE5LjY3ODAzMTUsNi44MDUgMTkuOTAzMDMxNSw2LjgwNSBDMjAuMTUzMDMxNSw2LjgwNSAyMC4zMzgwMzE1LDYuODk1IDIwLjQ1ODAzMTUsNy4wNzUgQzIwLjU1MzAzMTUsNy4yMjUgMjAuNjAzMDMxNSw3LjQ0IDIwLjYwMzAzMTUsNy43MiBDMjAuNjAzMDMxNSw4IDIwLjU0ODAzMTUsOC4yMTUgMjAuNDQzMDMxNSw4LjM2NSBDMjAuMzIzMDMxNSw4LjUyNSAyMC4xMzMwMzE1LDguNjEgMTkuODgzMDMxNSw4LjYxIFogTTIyLjI0MTA2MzEsOS45OSBMMjIuMjQxMDYzMSw4LjY0NSBDMjIuNDUxMDYzMSw4LjkyNSAyMi43MTEwNjMxLDkuMDcgMjMuMDExMDYzMSw5LjA3IEMyMy4zODEwNjMxLDkuMDcgMjMuNjc2MDYzMSw4LjkzNSAyMy44ODYwNjMxLDguNjY1IEMyNC4wODEwNjMxLDguNDE1IDI0LjE4MTA2MzEsOC4xIDI0LjE4MTA2MzEsNy43MiBDMjQuMTgxMDYzMSw3LjMyIDI0LjA4MTA2MzEsNyAyMy44ODEwNjMxLDYuNzUgQzIzLjY2MTA2MzEsNi40OCAyMy4zNjEwNjMxLDYuMzQ1IDIyLjk4MTA2MzEsNi4zNDUgQzIyLjY0MTA2MzEsNi4zNDUgMjIuMzgxMDYzMSw2LjQ2IDIyLjIwMTA2MzEsNi42OSBMMjIuMjAxMDYzMSw2LjQxNSBMMjEuNjcxMDYzMSw2LjQxNSBMMjEuNjcxMDYzMSw5Ljk5IEwyMi4yNDEwNjMxLDkuOTkgWiBNMjIuODc2MDYzMSw4LjYxIEMyMi42OTEwNjMxLDguNjEgMjIuNTQxMDYzMSw4LjUzNSAyMi40MjEwNjMxLDguMzg1IEMyMi4yODYwNjMxLDguMjIgMjIuMjIxMDYzMSw4IDIyLjIyMTA2MzEsNy43MyBMMjIuMjIxMDYzMSw3LjY5IEMyMi4yMjEwNjMxLDcuNDMgMjIuMjcxMDYzMSw3LjIyNSAyMi4zODEwNjMxLDcuMDcgQzIyLjUwMTA2MzEsNi44OSAyMi42NzEwNjMxLDYuODA1IDIyLjg5NjA2MzEsNi44MDUgQzIzLjE0NjA2MzEsNi44MDUgMjMuMzMxMDYzMSw2Ljg5NSAyMy40NTEwNjMxLDcuMDc1IEMyMy41NDYwNjMxLDcuMjI1IDIzLjU5NjA2MzEsNy40NCAyMy41OTYwNjMxLDcuNzIgQzIzLjU5NjA2MzEsOCAyMy41NDEwNjMxLDguMjE1IDIzLjQzNjA2MzEsOC4zNjUgQzIzLjMxNjA2MzEsOC41MjUgMjMuMTI2MDYzMSw4LjYxIDIyLjg3NjA2MzEsOC42MSBaIE0yNy42ODIxMjYyLDkuMDcgQzI4LjEzNzEyNjIsOS4wNyAyOC40OTIxMjYyLDguOTc1IDI4Ljc0MjEyNjIsOC43OTUgQzI4Ljk5MjEyNjIsOC42MSAyOS4xMTcxMjYyLDguMzU1IDI5LjExNzEyNjIsOC4wMzUgQzI5LjExNzEyNjIsNy43MDUgMjguOTYyMTI2Miw3LjQ1IDI4LjY1MjEyNjIsNy4yNjUgQzI4LjUxMjEyNjIsNy4xODUgMjguMjAyMTI2Miw3LjA2NSAyNy43MTcxMjYyLDYuOTE1IEMyNy4zODcxMjYyLDYuODEgMjcuMTgyMTI2Miw2LjczNSAyNy4xMDcxMjYyLDYuNjk1IEMyNi45MzcxMjYyLDYuNjA1IDI2Ljg1NzEyNjIsNi40OCAyNi44NTcxMjYyLDYuMzMgQzI2Ljg1NzEyNjIsNi4xNiAyNi45MjcxMjYyLDYuMDM1IDI3LjA3NzEyNjIsNS45NiBDMjcuMTk3MTI2Miw1Ljg5NSAyNy4zNjcxMjYyLDUuODY1IDI3LjU5MjEyNjIsNS44NjUgQzI3Ljg1MjEyNjIsNS44NjUgMjguMDUyMTI2Miw1LjkxIDI4LjE4MjEyNjIsNi4wMSBDMjguMzEyMTI2Miw2LjEwNSAyOC40MDcxMjYyLDYuMjY1IDI4LjQ1NzEyNjIsNi40ODUgTDI5LjAzNzEyNjIsNi40ODUgQzI5LjAwMjEyNjIsNi4wOTUgMjguODU3MTI2Miw1LjgwNSAyOC42MDcxMjYyLDUuNjIgQzI4LjM3MjEyNjIsNS40NDUgMjguMDQyMTI2Miw1LjM2IDI3LjYyMjEyNjIsNS4zNiBDMjcuMjM3MTI2Miw1LjM2IDI2LjkyMjEyNjIsNS40NDUgMjYuNjcyMTI2Miw1LjYyIEMyNi40MDIxMjYyLDUuOCAyNi4yNzIxMjYyLDYuMDUgMjYuMjcyMTI2Miw2LjM2NSBDMjYuMjcyMTI2Miw2LjY4IDI2LjQwNzEyNjIsNi45MiAyNi42ODIxMjYyLDcuMDg1IEMyNi43ODcxMjYyLDcuMTQ1IDI3LjA2MjEyNjIsNy4yNDUgMjcuNTAyMTI2Miw3LjM4NSBDMjcuODk3MTI2Miw3LjUwNSAyOC4xMjcxMjYyLDcuNTg1IDI4LjE5NzEyNjIsNy42MiBDMjguNDE3MTI2Miw3LjczIDI4LjUzMjEyNjIsNy44OCAyOC41MzIxMjYyLDguMDcgQzI4LjUzMjEyNjIsOC4yMiAyOC40NTIxMjYyLDguMzM1IDI4LjMwMjEyNjIsOC40MjUgQzI4LjE1MjEyNjIsOC41MSAyNy45NDIxMjYyLDguNTU1IDI3LjY4MjEyNjIsOC41NTUgQzI3LjM4NzEyNjIsOC41NTUgMjcuMTcyMTI2Miw4LjUgMjcuMDMyMTI2Miw4LjQgQzI2Ljg3NzEyNjIsOC4yODUgMjYuNzgyMTI2Miw4LjA5IDI2Ljc0MjEyNjIsNy44MiBMMjYuMTYyMTI2Miw3LjgyIEMyNi4xODcxMjYyLDguMjc1IDI2LjM1MjEyNjIsOC42MDUgMjYuNjUyMTI2Miw4LjgxNSBDMjYuODk3MTI2Miw4Ljk4NSAyNy4yNDIxMjYyLDkuMDcgMjcuNjgyMTI2Miw5LjA3IFogTTMwLjg3MDE1NzcsOSBMMzAuODcwMTU3Nyw4LjUzIEwzMC41MzAxNTc3LDguNTMgQzMwLjQ3MDE1NzcsOC41MyAzMC40MzAxNTc3LDguNTE1IDMwLjQwMDE1NzcsOC40ODUgQzMwLjM3MDE1NzcsOC40NSAzMC4zNjAxNTc3LDguNDA1IDMwLjM2MDE1NzcsOC4zNDUgTDMwLjM2MDE1NzcsNi44ODUgTDMwLjkzNTE1NzcsNi44ODUgTDMwLjkzNTE1NzcsNi40MTUgTDMwLjM2MDE1NzcsNi40MTUgTDMwLjM2MDE1NzcsNS41OCBMMjkuNzkwMTU3Nyw1LjgxNSBMMjkuNzkwMTU3Nyw2LjQxNSBMMjkuMzI1MTU3Nyw2LjQxNSBMMjkuMzI1MTU3Nyw2Ljg4NSBMMjkuNzkwMTU3Nyw2Ljg4NSBMMjkuNzkwMTU3Nyw4LjM0NSBDMjkuNzkwMTU3Nyw4LjU1NSAyOS44NDAxNTc3LDguNzEgMjkuOTQwMTU3Nyw4LjgyIEMzMC4wNDUxNTc3LDguOTQgMzAuMjEwMTU3Nyw5IDMwLjQzNTE1NzcsOSBMMzAuODcwMTU3Nyw5IFogTTMyLjU0MzE4OTIsOS4wNyBDMzIuOTMzMTg5Miw5LjA3IDMzLjI1MzE4OTIsOC45NCAzMy40OTMxODkyLDguNjggQzMzLjcyMzE4OTIsOC40MyAzMy44NDMxODkyLDguMTA1IDMzLjg0MzE4OTIsNy43MSBDMzMuODQzMTg5Miw3LjMxIDMzLjcyMzE4OTIsNi45ODUgMzMuNDg4MTg5Miw2LjczIEMzMy4yNDgxODkyLDYuNDcgMzIuOTMzMTg5Miw2LjM0NSAzMi41NDMxODkyLDYuMzQ1IEMzMi4xNDgxODkyLDYuMzQ1IDMxLjgzMzE4OTIsNi40NyAzMS41OTgxODkyLDYuNzMgQzMxLjM1ODE4OTIsNi45ODUgMzEuMjQzMTg5Miw3LjMxIDMxLjI0MzE4OTIsNy43MSBDMzEuMjQzMTg5Miw4LjEwNSAzMS4zNTgxODkyLDguNDMgMzEuNTkzMTg5Miw4LjY4IEMzMS44MzMxODkyLDguOTQgMzIuMTQ4MTg5Miw5LjA3IDMyLjU0MzE4OTIsOS4wNyBaIE0zMi41NDMxODkyLDguNjA1IEMzMi4zMDMxODkyLDguNjA1IDMyLjEyMzE4OTIsOC41MSAzMS45OTMxODkyLDguMzI1IEMzMS44ODMxODkyLDguMTY1IDMxLjgyODE4OTIsNy45NiAzMS44MjgxODkyLDcuNzEgQzMxLjgyODE4OTIsNy40NiAzMS44ODMxODkyLDcuMjUgMzEuOTkzMTg5Miw3LjA5IEMzMi4xMjMxODkyLDYuOSAzMi4zMDMxODkyLDYuODEgMzIuNTQzMTg5Miw2LjgxIEMzMi43NzgxODkyLDYuODEgMzIuOTYzMTg5Miw2LjkgMzMuMDkzMTg5Miw3LjA5IEMzMy4yMDMxODkyLDcuMjUgMzMuMjYzMTg5Miw3LjQ2IDMzLjI2MzE4OTIsNy43MSBDMzMuMjYzMTg5Miw3Ljk1NSAzMy4yMDMxODkyLDguMTYgMzMuMDkzMTg5Miw4LjMyNSBDMzIuOTYzMTg5Miw4LjUxIDMyLjc3ODE4OTIsOC42MDUgMzIuNTQzMTg5Miw4LjYwNSBaIE0zNC44OTEyMjA4LDkgTDM0Ljg5MTIyMDgsNy42MyBDMzQuODkxMjIwOCw3LjQxIDM0Ljk1NjIyMDgsNy4yMzUgMzUuMDk2MjIwOCw3LjEgQzM1LjIxNjIyMDgsNi45OCAzNS4zNTEyMjA4LDYuOTI1IDM1LjUwMTIyMDgsNi45MjUgQzM1LjYyMTIyMDgsNi45MjUgMzUuNzQxMjIwOCw2Ljk0IDM1Ljg3MTIyMDgsNi45OCBMMzUuODcxMjIwOCw2LjQxIEMzNS43ODEyMjA4LDYuMzY1IDM1LjY3MTIyMDgsNi4zNDUgMzUuNTQ2MjIwOCw2LjM0NSBDMzUuMzg2MjIwOCw2LjM0NSAzNS4yNTEyMjA4LDYuMzkgMzUuMTM2MjIwOCw2LjQ4NSBDMzUuMDQxMjIwOCw2LjU1NSAzNC45NjEyMjA4LDYuNjU1IDM0Ljg5MTIyMDgsNi43ODUgTDM0Ljg5MTIyMDgsNi40MTUgTDM0LjMyNjIyMDgsNi40MTUgTDM0LjMyNjIyMDgsOSBMMzQuODkxMjIwOCw5IFogTTM3LjMwNDI1MjMsOS4wNyBDMzcuNjQ5MjUyMyw5LjA3IDM3LjkzNDI1MjMsOC45NyAzOC4xNjQyNTIzLDguNzc1IEMzOC4zNDQyNTIzLDguNjE1IDM4LjQ2NDI1MjMsOC40MSAzOC41MjQyNTIzLDguMTcgTDM3Ljk1NDI1MjMsOC4xNyBDMzcuODg0MjUyMyw4LjMxNSAzNy44MDkyNTIzLDguNDIgMzcuNzI0MjUyMyw4LjQ4NSBDMzcuNjE0MjUyMyw4LjU2NSAzNy40NzQyNTIzLDguNjA1IDM3LjI5OTI1MjMsOC42MDUgQzM3LjA5NDI1MjMsOC42MDUgMzYuOTM0MjUyMyw4LjU0IDM2LjgyNDI1MjMsOC40MTUgQzM2LjcxNDI1MjMsOC4yOSAzNi42NDkyNTIzLDguMTA1IDM2LjYyOTI1MjMsNy44NjUgTDM4LjU2NDI1MjMsNy44NjUgQzM4LjU2NDI1MjMsNy40IDM4LjQ1OTI1MjMsNy4wMzUgMzguMjU0MjUyMyw2Ljc3NSBDMzguMDI5MjUyMyw2LjQ4NSAzNy43MDQyNTIzLDYuMzQ1IDM3LjI3OTI1MjMsNi4zNDUgQzM2Ljg5NDI1MjMsNi4zNDUgMzYuNTg5MjUyMyw2LjQ3NSAzNi4zNjkyNTIzLDYuNzQgQzM2LjEzOTI1MjMsNyAzNi4wMjkyNTIzLDcuMzIgMzYuMDI5MjUyMyw3LjcwNSBDMzYuMDI5MjUyMyw4LjEzNSAzNi4xNDkyNTIzLDguNDcgMzYuMzg5MjUyMyw4LjcxNSBDMzYuNjE0MjUyMyw4Ljk1IDM2LjkxOTI1MjMsOS4wNyAzNy4zMDQyNTIzLDkuMDcgWiBNMzcuOTY5MjUyMyw3LjQzNSBMMzYuNjM5MjUyMyw3LjQzNSBDMzYuNjc0MjUyMyw3LjIzIDM2Ljc0NDI1MjMsNy4wNzUgMzYuODQ5MjUyMyw2Ljk3IEMzNi45NTkyNTIzLDYuODYgMzcuMTA0MjUyMyw2LjgxIDM3LjI5NDI1MjMsNi44MSBDMzcuNjk0MjUyMyw2LjgxIDM3LjkxOTI1MjMsNy4wMTUgMzcuOTY5MjUyMyw3LjQzNSBaIiBpZD0iQXBwU3RvcmUiIGZpbGw9IiNFRkYxRjQiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXItMSkiIGlkPSJhcHBsZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDAwMDAwLCAyLjUwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwIiB4PSIyIiB5PSIwIiB3aWR0aD0iOCIgaGVpZ2h0PSI4Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS4xNzA4ODM3MSw0Ljc2Nzk2MjQ0IEM1LjE3MDg4MzcxLDMuNzk1OTMxMDggNi4wMDQ5MTAwMiwzLjM4OTkwMjIyIDYuMDA0OTEwMDIsMy4zODk5MDIyMiBDNi4wMDQ5MTAwMiwzLjM4OTkwMjIyIDUuNDY3ODMzMzMsMi42NjIwOTg0NSA0LjY3MTcyNjUxLDIuNjYyMDk4NDUgQzQuMDAwNzI0ODYsMi42NjIwOTg0NSAzLjc1MzM2NTM5LDIuOTcyMDQxNDEgMy4yMzQ5NTY4OCwyLjk3MjA0MTQxIEMyLjcyMDMzMDYsMi45NzIwNDE0MSAyLjQzNTA1OTc0LDIuNjYyMDk4NDUgMS44MDk1NTAxMywyLjY2MjA5ODQ1IEMxLjAxMzQ1MTQyLDIuNjYyMDk4NDUgMCwzLjQxOTMxMTI0IDAsNC43NjMzMjE4MyBDMCw2LjU2ODQ2ODQ0IDEuMjg4OTM4Nyw4LjExMTExMTExIDIuMDAyODg5MzIsOC4xMTExMTExMSBDMi4zMzAxNTM0Nyw4LjExMTExMTExIDIuNzE2MzUzOTksNy44MDk5MDEwNiAzLjI2MDIxNzY0LDcuODA5ODUzMzggQzMuNzkxMDA5NTEsNy44MDk3NzM5MiA0LjExOTQ5NjYxLDguMTEwODk2NTYgNC40NzgzODczMyw4LjExMDg5NjU2IEM0LjgwNDQxMjMzLDguMTEwODk2NTYgNS4xMDM4ODg4Myw3Ljk0NzAwNTQzIDUuNTc3NzY5MDcsNy4zMzcwMDQ2MiBDNi4wNTE2MzMxMSw2LjcyNzAxOTcgNi4yMjIyMjIyMiw2LjIwMjEwNzE5IDYuMjIyMjIyMjIsNi4yMDIxMDcxOSBDNi4xMTEwMTQ5NCw2LjE2MjQwNzc5IDUuMTcwODgzNzEsNS43Mzk5Njk5NiA1LjE3MDg4MzcxLDQuNzY3OTYyNDQgWiBNNC41MjcwNzAzOCwxLjE0NjU2ODM0IEM0LjUyNzA3MDM4LDEuMDk3MTQyNzQgNC41MjQ0MzgyMSwxLjA0ODMyMTA3IDQuNTE5OTM1MTcsMSBDMy42NzU3Njg5MiwxLjA1MjIyMjY3IDMuMDA3NDg4NTMsMS43NDAwODg2NSAzLjAwNzQ4ODUzLDIuNTgxNTMxNTYgQzMuMDA3NDg4NTMsMi42MzA5NTcxNSAzLjAxMDEyODgsMi42Nzk4MDI2NyAzLjAxNDYzMTg1LDIuNzI4MDY4MTEgQzMuODU4Nzk4MDksMi42NzU4ODUxNyA0LjUyNzA3MDM4LDEuOTg3OTg3NCA0LjUyNzA3MDM4LDEuMTQ2NTY4MzQgWiIgaWQ9IuW9oueKtiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/android.dc65257f.svg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/m-header.0d517509.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/header.299a5cd4.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
__webpack_require__(34);
module.exports = __webpack_require__(42);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(33)["default"];

var _require = __webpack_require__(16),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-typescript",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-stylus",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(16),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(35),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);










Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404.tsx */).then(__webpack_require__.bind(null, 19))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404.tsx";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.tsx';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index.tsx */).then(__webpack_require__.bind(null, 20))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index.tsx";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/index.tsx';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/Mobile/index.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/Mobile/index.tsx */).then(__webpack_require__.bind(null, 21))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/Mobile/index.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/Mobile/index.tsx";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/Mobile/index.tsx';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/PC/index.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/PC/index.tsx */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/PC/index.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/PC/index.tsx";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/PC/index.tsx'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.tsx': t_0,
  '__react_static_root__/src/pages/index.tsx': t_1,
  '__react_static_root__/src/pages/Mobile/index.tsx': t_2,
  '__react_static_root__/src/pages/PC/index.tsx': t_3
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.tsx";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

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

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(13);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 6,
	"./": 6,
	"./index": 6,
	"./index.js": 6
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 38;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(18);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(43);

var _interopRequireDefault = __webpack_require__(44);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(45));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(46));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(47);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(48)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("/Users/ice/incu_website/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(49)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// Module
exports.push([module.i, ".loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #14142b;\n}\n.loading-container span {\n  color: #ddd;\n  font-size: 16px;\n  margin-top: 15px;\n  letter-spacing: 1px;\n  font-family: Helvetica, Arial, sans-serif;\n}\n.loading-container img {\n  width: 10vw;\n}\n", ""]);



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// Module
exports.push([module.i, "body {\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n}\na {\n  text-decoration: none;\n  color: #108db8;\n  font-weight: bold;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\nimg {\n  max-width: 100%;\n}\nnav {\n  width: 100%;\n  background: #108db8;\n}\nnav a {\n  color: #fff;\n  padding: 1rem;\n  display: inline-block;\n}\n.content {\n  background: #14142b;\n}\n", ""]);



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// Module
exports.push([module.i, ".download-container-large {\n  margin-bottom: 16px;\n}\n.download-container-large img {\n  width: 40vw;\n}\n.download-container-mid {\n  margin-right: 24px;\n}\n.download-container-mid img {\n  width: 14vw;\n}\n", ""]);



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// Module
exports.push([module.i, ".header-bar-m {\n  display: flex;\n  justify-content: flex-start;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 43px;\n  background: linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0));\n  padding: 0 16px 0 16px;\n  z-index: 4;\n}\n.banner-contianer-m .banner-m {\n  width: 100%;\n}\n.logo-m {\n  padding: 16px 0 16px 0;\n  width: 76px;\n  height: 34px;\n}\n.title-container-m {\n  display: flex;\n  width: 100%;\n  margin-top: 20px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.title-container-m .title-m {\n  width: 60vw;\n}\n.btn-container-m {\n  display: flex;\n  flex-direction: column;\n  margin-top: 36px;\n}\n", ""]);



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// Module
exports.push([module.i, ".header-bar {\n  display: flex;\n  justify-content: flex-start;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 86px;\n  background: linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0));\n  padding: 0 36px 0 36px;\n  z-index: 4;\n}\n.banner-contianer {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.banner-contianer .banner {\n  width: 100%;\n}\n.logo {\n  padding: 16px 0 16px 0;\n  width: 114px;\n  height: 51px;\n}\n.title-container {\n  margin: 10px;\n  position: absolute;\n  top: 22vh;\n  display: flex;\n  left: 57vw;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.title-container .title {\n  width: 32vw;\n}\n.btn-container {\n  display: flex;\n  margin-top: 36px;\n}\n", ""]);



/***/ })
/******/ ]);
});