/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_bread_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/bread.jpg */ "./src/assets/bread.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Courgette&family=Poppins:wght@300&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_bread_jpg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  background: rgb(250, 250, 250);\n}\n\n#content {\n  width: 98%;\n  height: 100vh;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n  margin: 20px;\n}\n\nheader .title {\n  font-family: \"Courgette\", cursive;\n  font-size: 30px;\n  color: #ec7343;\n}\n\nheader .navBar {\n  width: 250px;\n  margin-right: 30px;\n}\n\n.navBar .tabs {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navBar .tabs .tab {\n  list-style: none;\n}\n\n.tab .btn {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  letter-spacing: 1px;\n  color: #566270;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.tab .btn:hover {\n  color: #bb5730;\n}\n\n.home {\n  width: 100%;\n  height: 81.3vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.home-bg {\n  width: 80%;\n  height: 100%;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  box-shadow: 5px 1px 10px -6px rgba(59, 59, 59, 0.75);\n}\n\n.subtitle {\n  width: 240px;\n  height: 100px;\n  position: absolute;\n  top: 110px;\n  left: 450px;\n  font-family: 'Bebas Neue', cursive;\n  font-size: 3rem;\n  font-weight: lighter;\n  text-transform: uppercase;\n  color: #e7b613;\n  text-align: center;\n}\n\n.menu {\n  width: 70%;\n  height: 81.3vh;\n  margin: 0 auto;\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 50px;\n  align-content: center;\n  justify-items: center;\n}\n\n.menu .food {\n  width: 250px;\n  height: 230px;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 5px 1px 10px -6px rgba(59, 59, 59, 0.75);\n  \n}\n\n.menu .food-image {\n  width: 150px;\n  height: 140px;\n}\n\n.menu .food-name {\n  font-family: 'Poppins', sans-serif;\n  font-size: 22px;\n  color: #566270;\n}\n\n.menu .food-price {\n  font-family: 'Bebas Neue', cursive;\n  font-size: 20px;\n  color: #ec7343;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 98%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid #e67041;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 13px;\n  letter-spacing: 1px;\n  color: #566270;\n}\n\nfooter .info {\n  width: 430px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: 18px;\n}\n\n.info .social-media {\n  cursor: pointer;\n  width: 25px;\n  height: 25px;\n  margin: 2px;\n  opacity: 80%;\n  cursor: pointer;\n}\n\n.info .social-media:hover {\n  opacity: 100%;\n}\n\n.info .title-2 {\n  font-family: \"Courgette\", cursive;\n  font-size: 16px;\n  margin-bottom: 4px;\n  color: #ec7343;\n}\n\nfooter .credits {\n  width: 230px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n\n.credits .made-by {\n  margin-right: 7px;\n}\n\n.credits .github-icon {\n  width: 20px;\n  height: 20px;\n  margin-right: 3px;\n}\n\n.credits a {\n  color: #ec7343;\n  text-decoration: none;\n}\n\n.credits a:hover {\n  color: #c76038;\n}\n\n.active {\n  border: 1px solid black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,mBAAmB;EACnB,cAAc;EACd,gBAAgB;EAChB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,mDAAqC;EACrC,sBAAsB;EACtB,2BAA2B;EAC3B,oDAAoD;AACtD;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,kCAAkC;EAClC,eAAe;EACf,oBAAoB;EACpB,yBAAyB;EACzB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,cAAc;;EAEd,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,oDAAoD;;AAEtD;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;EAC7B,kCAAkC;EAClC,eAAe;EACf,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Courgette&family=Poppins:wght@300&display=swap\");\n@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  background: rgb(250, 250, 250);\n}\n\n#content {\n  width: 98%;\n  height: 100vh;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n  margin: 20px;\n}\n\nheader .title {\n  font-family: \"Courgette\", cursive;\n  font-size: 30px;\n  color: #ec7343;\n}\n\nheader .navBar {\n  width: 250px;\n  margin-right: 30px;\n}\n\n.navBar .tabs {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navBar .tabs .tab {\n  list-style: none;\n}\n\n.tab .btn {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  letter-spacing: 1px;\n  color: #566270;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.tab .btn:hover {\n  color: #bb5730;\n}\n\n.home {\n  width: 100%;\n  height: 81.3vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.home-bg {\n  width: 80%;\n  height: 100%;\n  background: url('./assets/bread.jpg');\n  background-size: cover;\n  background-position: center;\n  box-shadow: 5px 1px 10px -6px rgba(59, 59, 59, 0.75);\n}\n\n.subtitle {\n  width: 240px;\n  height: 100px;\n  position: absolute;\n  top: 110px;\n  left: 450px;\n  font-family: 'Bebas Neue', cursive;\n  font-size: 3rem;\n  font-weight: lighter;\n  text-transform: uppercase;\n  color: #e7b613;\n  text-align: center;\n}\n\n.menu {\n  width: 70%;\n  height: 81.3vh;\n  margin: 0 auto;\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 50px;\n  align-content: center;\n  justify-items: center;\n}\n\n.menu .food {\n  width: 250px;\n  height: 230px;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 5px 1px 10px -6px rgba(59, 59, 59, 0.75);\n  \n}\n\n.menu .food-image {\n  width: 150px;\n  height: 140px;\n}\n\n.menu .food-name {\n  font-family: 'Poppins', sans-serif;\n  font-size: 22px;\n  color: #566270;\n}\n\n.menu .food-price {\n  font-family: 'Bebas Neue', cursive;\n  font-size: 20px;\n  color: #ec7343;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 98%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid #e67041;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 13px;\n  letter-spacing: 1px;\n  color: #566270;\n}\n\nfooter .info {\n  width: 430px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: 18px;\n}\n\n.info .social-media {\n  cursor: pointer;\n  width: 25px;\n  height: 25px;\n  margin: 2px;\n  opacity: 80%;\n  cursor: pointer;\n}\n\n.info .social-media:hover {\n  opacity: 100%;\n}\n\n.info .title-2 {\n  font-family: \"Courgette\", cursive;\n  font-size: 16px;\n  margin-bottom: 4px;\n  color: #ec7343;\n}\n\nfooter .credits {\n  width: 230px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n\n.credits .made-by {\n  margin-right: 7px;\n}\n\n.credits .github-icon {\n  width: 20px;\n  height: 20px;\n  margin-right: 3px;\n}\n\n.credits a {\n  color: #ec7343;\n  text-decoration: none;\n}\n\n.credits a:hover {\n  color: #c76038;\n}\n\n.active {\n  border: 1px solid black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/bread.jpg":
/*!******************************!*\
  !*** ./src/assets/bread.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8667186c04c8bd8ebf7.jpg";

/***/ }),

/***/ "./src/components/base.js":
/*!********************************!*\
  !*** ./src/components/base.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
const Header = () => {
  const header = document.createElement("header");

  const title = document.createElement("h1");
  title.textContent = "La Boulangère";
  title.classList.add("title");
  header.appendChild(title);

  const navBar = document.createElement("nav");
  navBar.classList.add("navBar");

  const tabs = document.createElement("ul");
  tabs.classList.add("tabs");
  navBar.appendChild(tabs);

  const homeTab = document.createElement("li");
  homeTab.classList.add("tab", "homeTab");
  tabs.appendChild(homeTab);

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.classList.add("btn", "homeBtn");
  homeTab.appendChild(homeBtn);

  const menuTab = document.createElement("li");
  menuTab.classList.add("tab", "menuTab");
  tabs.appendChild(menuTab);

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.classList.add("btn", "menuBtn");
  menuTab.appendChild(menuBtn);

  const contactTab = document.createElement("li");
  contactTab.classList.add("tab", "contactTab");
  tabs.appendChild(contactTab);

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.classList.add("btn", "contactBtn");
  contactTab.appendChild(contactBtn);

  header.appendChild(navBar);

  return header;
};

const Footer = () => {
  const footer = document.createElement("footer");
  const info = document.createElement("div");
  info.classList.add("info");

  const facebookIcon = document.createElement("img");
  facebookIcon.setAttribute("src", "/src/assets/facebook-icon.svg");
  facebookIcon.classList.add("social-media");
  info.appendChild(facebookIcon);

  const instagramIcon = document.createElement("img");
  instagramIcon.setAttribute("src", "/src/assets/instagram-icon.svg");
  instagramIcon.classList.add("social-media");
  info.appendChild(instagramIcon);

  const emailIcon = document.createElement("img");
  emailIcon.setAttribute("src", "/src/assets/email-icon.svg");
  emailIcon.classList.add("social-media");
  info.appendChild(emailIcon);

  const title2 = document.createElement("h2");
  title2.textContent = "La Boulangère";
  title2.classList.add("title-2");
  info.appendChild(title2);

  const rights = document.createElement("p");
  rights.textContent = "2021 © All rights reserved.";
  info.appendChild(rights);

  footer.appendChild(info);

  const credits = document.createElement("div");
  credits.classList.add("credits");

  const madeBy = document.createElement("p");
  madeBy.textContent = "Made by";
  madeBy.classList.add("made-by");
  credits.appendChild(madeBy);

  const githubIcon = document.createElement("img");
  githubIcon.setAttribute("src", "/src/assets/github.svg");
  githubIcon.classList.add("github-icon");
  credits.appendChild(githubIcon);

  const githubLink = document.createElement("a");
  githubLink.textContent = "luizgmacedo";
  githubLink.setAttribute("href", "https://github.com/luizgmacedo");
  githubLink.setAttribute("target", "_blank");
  credits.appendChild(githubLink);

  footer.appendChild(credits);

  return footer;
};




/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home)
/* harmony export */ });
const Home = () => {
    const home = document.createElement('main');
    home.classList.add('home');

    const homeBg = document.createElement('div');
    homeBg.classList.add('home-bg');
    home.appendChild(homeBg);

    const subtitle = document.createElement('h3');
    subtitle.textContent = 'Good bread for a good day';
    subtitle.classList.add('subtitle');
    home.appendChild(subtitle);

    return home;
}

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
const Menu = () => {
    const main = document.createElement('main');
    main.classList.add('menu');

    const createItem = (image, name, price) => {
        const food = document.createElement('div');
        food.classList.add('food');

        const foodImage = document.createElement('img');
        foodImage.src = image;
        foodImage.classList.add('food-image');

        const foodName = document.createElement('p');
        foodName.textContent = name;
        foodName.classList.add('food-name');

        const foodPrice = document.createElement('p');
        foodPrice.textContent = price;
        foodPrice.classList.add('food-price');

        food.appendChild(foodImage);
        food.appendChild(foodName);
        food.appendChild(foodPrice);

        main.appendChild(food);
    }
    
    const items = [
        {image: '/src/assets/baguette.png', name: 'Baguette', price: '$ 5.00'},
        {image: '/src/assets/eclair.png', name: 'Eclair', price: '$ 2.99'},
        {image: '/src/assets/muffin.png', name: 'Muffin', price: '$ 1.50'},
        {image: '/src/assets/apple-pie.png', name: 'Apple Pie', price: '$ 9.79'},
        {image: '/src/assets/angel.png', name: 'Chocolate Angel', price: '$ 4.49'},
        {image: '/src/assets/coffe.png', name: 'Coffe', price: '$ 3.79'},
    ];
    
    for (let i = 0; i < items.length; i++) {
        createItem(items[i].image, items[i].name, items[i].price);
    }

    return main;

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/base.js */ "./src/components/base.js");
/* harmony import */ var _components_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home.js */ "./src/components/home.js");
/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu.js */ "./src/components/menu.js");





const content = document.querySelector("#content");

function render(item) {
  content.appendChild((0,_components_base_js__WEBPACK_IMPORTED_MODULE_1__.Header)());
  content.appendChild(item);
  content.appendChild((0,_components_base_js__WEBPACK_IMPORTED_MODULE_1__.Footer)());
}

render((0,_components_home_js__WEBPACK_IMPORTED_MODULE_2__.Home)());

window.addEventListener("click", (e) => {
  const tab = e.target;
  if (tab.classList.contains("homeBtn")) {
    content.innerHTML = "";
    render((0,_components_home_js__WEBPACK_IMPORTED_MODULE_2__.Home)());
  } else if (tab.classList.contains("menuBtn")) {
    content.innerHTML = "";
    render((0,_components_menu_js__WEBPACK_IMPORTED_MODULE_3__.Menu)());
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ087QUFDakM7QUFDL0QsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRiwrSUFBK0k7QUFDL0ksd0hBQXdIO0FBQ3hILHlDQUF5QyxzRkFBK0IsQ0FBQyw4Q0FBNkI7QUFDdEc7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLDJCQUEyQixHQUFHLFVBQVUsa0JBQWtCLDRCQUE0QixtQ0FBbUMsR0FBRyxjQUFjLGVBQWUsa0JBQWtCLEdBQUcsWUFBWSxrQkFBa0IsbUNBQW1DLHdCQUF3QixvQkFBb0IsaUJBQWlCLEdBQUcsbUJBQW1CLHdDQUF3QyxvQkFBb0IsbUJBQW1CLEdBQUcsb0JBQW9CLGlCQUFpQix1QkFBdUIsR0FBRyxtQkFBbUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsR0FBRyx3QkFBd0IscUJBQXFCLEdBQUcsZUFBZSx5Q0FBeUMsb0JBQW9CLHdCQUF3QixtQkFBbUIscUJBQXFCLGlCQUFpQixvQkFBb0IsR0FBRyxxQkFBcUIsbUJBQW1CLEdBQUcsV0FBVyxnQkFBZ0IsbUJBQW1CLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsY0FBYyxlQUFlLGlCQUFpQixnRUFBZ0UsMkJBQTJCLGdDQUFnQyx5REFBeUQsR0FBRyxlQUFlLGlCQUFpQixrQkFBa0IsdUJBQXVCLGVBQWUsZ0JBQWdCLHVDQUF1QyxvQkFBb0IseUJBQXlCLDhCQUE4QixtQkFBbUIsdUJBQXVCLEdBQUcsV0FBVyxlQUFlLG1CQUFtQixtQkFBbUIsb0JBQW9CLDBDQUEwQyxjQUFjLDBC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Q0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ2lDO0FBQ1Y7QUFDQTs7QUFFNUM7O0FBRUE7QUFDQSxzQkFBc0IsMkRBQU07QUFDNUI7QUFDQSxzQkFBc0IsMkRBQU07QUFDNUI7O0FBRUEsT0FBTyx5REFBSTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseURBQUk7QUFDZixHQUFHO0FBQ0g7QUFDQSxXQUFXLHlEQUFJO0FBQ2Y7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vYXNzZXRzL2JyZWFkLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q291cmdldHRlJmZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogOTglO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG5oZWFkZXIgLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmdldHRlXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiAjZWM3MzQzO1xcbn1cXG5cXG5oZWFkZXIgLm5hdkJhciB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5uYXZCYXIgLnRhYnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXZCYXIgLnRhYnMgLnRhYiB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFiIC5idG4ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogIzU2NjI3MDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YWIgLmJ0bjpob3ZlciB7XFxuICBjb2xvcjogI2JiNTczMDtcXG59XFxuXFxuLmhvbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgxLjN2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ob21lLWJnIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDVweCAxcHggMTBweCAtNnB4IHJnYmEoNTksIDU5LCA1OSwgMC43NSk7XFxufVxcblxcbi5zdWJ0aXRsZSB7XFxuICB3aWR0aDogMjQwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMTBweDtcXG4gIGxlZnQ6IDQ1MHB4O1xcbiAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZTdiNjEzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudSB7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiA4MS4zdmg7XFxuICBtYXJnaW46IDAgYXV0bztcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiA1MHB4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudSAuZm9vZCB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDIzMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogNXB4IDFweCAxMHB4IC02cHggcmdiYSg1OSwgNTksIDU5LCAwLjc1KTtcXG4gIFxcbn1cXG5cXG4ubWVudSAuZm9vZC1pbWFnZSB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbn1cXG5cXG4ubWVudSAuZm9vZC1uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogIzU2NjI3MDtcXG59XFxuXFxuLm1lbnUgLmZvb2QtcHJpY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjZWM3MzQzO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDk4JTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2NzA0MTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6ICM1NjYyNzA7XFxufVxcblxcbmZvb3RlciAuaW5mbyB7XFxuICB3aWR0aDogNDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xcbn1cXG5cXG4uaW5mbyAuc29jaWFsLW1lZGlhIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luOiAycHg7XFxuICBvcGFjaXR5OiA4MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbmZvIC5zb2NpYWwtbWVkaWE6aG92ZXIge1xcbiAgb3BhY2l0eTogMTAwJTtcXG59XFxuXFxuLmluZm8gLnRpdGxlLTIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyZ2V0dGVcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgY29sb3I6ICNlYzczNDM7XFxufVxcblxcbmZvb3RlciAuY3JlZGl0cyB7XFxuICB3aWR0aDogMjMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uY3JlZGl0cyAubWFkZS1ieSB7XFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXG59XFxuXFxuLmNyZWRpdHMgLmdpdGh1Yi1pY29uIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxufVxcblxcbi5jcmVkaXRzIGEge1xcbiAgY29sb3I6ICNlYzczNDM7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jcmVkaXRzIGE6aG92ZXIge1xcbiAgY29sb3I6ICNjNzYwMzg7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1EQUFxQztFQUNyQyxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGNBQWM7O0VBRWQsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvREFBb0Q7O0FBRXREOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q291cmdldHRlJmZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiA5OCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbmhlYWRlciAudGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyZ2V0dGVcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6ICNlYzczNDM7XFxufVxcblxcbmhlYWRlciAubmF2QmFyIHtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuXFxuLm5hdkJhciAudGFicyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdkJhciAudGFicyAudGFiIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi50YWIgLmJ0biB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGNvbG9yOiAjNTY2MjcwO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhYiAuYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjYmI1NzMwO1xcbn1cXG5cXG4uaG9tZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODEuM3ZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtYmcge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvYnJlYWQuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogNXB4IDFweCAxMHB4IC02cHggcmdiYSg1OSwgNTksIDU5LCAwLjc1KTtcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDExMHB4O1xcbiAgbGVmdDogNDUwcHg7XFxuICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNlN2I2MTM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZW51IHtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDgxLjN2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDUwcHg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51IC5mb29kIHtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMjMwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiA1cHggMXB4IDEwcHggLTZweCByZ2JhKDU5LCA1OSwgNTksIDAuNzUpO1xcbiAgXFxufVxcblxcbi5tZW51IC5mb29kLWltYWdlIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTQwcHg7XFxufVxcblxcbi5tZW51IC5mb29kLW5hbWUge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGNvbG9yOiAjNTY2MjcwO1xcbn1cXG5cXG4ubWVudSAuZm9vZC1wcmljZSB7XFxuICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNlYzczNDM7XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogOTglO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTY3MDQxO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogIzU2NjI3MDtcXG59XFxuXFxuZm9vdGVyIC5pbmZvIHtcXG4gIHdpZHRoOiA0MzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XFxufVxcblxcbi5pbmZvIC5zb2NpYWwtbWVkaWEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW46IDJweDtcXG4gIG9wYWNpdHk6IDgwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmluZm8gLnNvY2lhbC1tZWRpYTpob3ZlciB7XFxuICBvcGFjaXR5OiAxMDAlO1xcbn1cXG5cXG4uaW5mbyAudGl0bGUtMiB7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJnZXR0ZVxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBjb2xvcjogI2VjNzM0MztcXG59XFxuXFxuZm9vdGVyIC5jcmVkaXRzIHtcXG4gIHdpZHRoOiAyMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5jcmVkaXRzIC5tYWRlLWJ5IHtcXG4gIG1hcmdpbi1yaWdodDogN3B4O1xcbn1cXG5cXG4uY3JlZGl0cyAuZ2l0aHViLWljb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDNweDtcXG59XFxuXFxuLmNyZWRpdHMgYSB7XFxuICBjb2xvcjogI2VjNzM0MztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNyZWRpdHMgYTpob3ZlciB7XFxuICBjb2xvcjogI2M3NjAzODtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJMYSBCb3VsYW5nw6hyZVwiO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZCYXJcIik7XG5cbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdGFicy5jbGFzc0xpc3QuYWRkKFwidGFic1wiKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKHRhYnMpO1xuXG4gIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGhvbWVUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiLCBcImhvbWVUYWJcIik7XG4gIHRhYnMuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiaG9tZUJ0blwiKTtcbiAgaG9tZVRhYi5hcHBlbmRDaGlsZChob21lQnRuKTtcblxuICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIiwgXCJtZW51VGFiXCIpO1xuICB0YWJzLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51QnRuLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcIm1lbnVCdG5cIik7XG4gIG1lbnVUYWIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbiAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIsIFwiY29udGFjdFRhYlwiKTtcbiAgdGFicy5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJjb250YWN0QnRuXCIpO1xuICBjb250YWN0VGFiLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuXG4gIGNvbnN0IGZhY2Vib29rSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGZhY2Vib29rSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIvc3JjL2Fzc2V0cy9mYWNlYm9vay1pY29uLnN2Z1wiKTtcbiAgZmFjZWJvb2tJY29uLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtbWVkaWFcIik7XG4gIGluZm8uYXBwZW5kQ2hpbGQoZmFjZWJvb2tJY29uKTtcblxuICBjb25zdCBpbnN0YWdyYW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW5zdGFncmFtSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIvc3JjL2Fzc2V0cy9pbnN0YWdyYW0taWNvbi5zdmdcIik7XG4gIGluc3RhZ3JhbUljb24uY2xhc3NMaXN0LmFkZChcInNvY2lhbC1tZWRpYVwiKTtcbiAgaW5mby5hcHBlbmRDaGlsZChpbnN0YWdyYW1JY29uKTtcblxuICBjb25zdCBlbWFpbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBlbWFpbEljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiL3NyYy9hc3NldHMvZW1haWwtaWNvbi5zdmdcIik7XG4gIGVtYWlsSWNvbi5jbGFzc0xpc3QuYWRkKFwic29jaWFsLW1lZGlhXCIpO1xuICBpbmZvLmFwcGVuZENoaWxkKGVtYWlsSWNvbik7XG5cbiAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZTIudGV4dENvbnRlbnQgPSBcIkxhIEJvdWxhbmfDqHJlXCI7XG4gIHRpdGxlMi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtMlwiKTtcbiAgaW5mby5hcHBlbmRDaGlsZCh0aXRsZTIpO1xuXG4gIGNvbnN0IHJpZ2h0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICByaWdodHMudGV4dENvbnRlbnQgPSBcIjIwMjEgwqkgQWxsIHJpZ2h0cyByZXNlcnZlZC5cIjtcbiAgaW5mby5hcHBlbmRDaGlsZChyaWdodHMpO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICBjb25zdCBjcmVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3JlZGl0cy5jbGFzc0xpc3QuYWRkKFwiY3JlZGl0c1wiKTtcblxuICBjb25zdCBtYWRlQnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbWFkZUJ5LnRleHRDb250ZW50ID0gXCJNYWRlIGJ5XCI7XG4gIG1hZGVCeS5jbGFzc0xpc3QuYWRkKFwibWFkZS1ieVwiKTtcbiAgY3JlZGl0cy5hcHBlbmRDaGlsZChtYWRlQnkpO1xuXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBnaXRodWJJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9zcmMvYXNzZXRzL2dpdGh1Yi5zdmdcIik7XG4gIGdpdGh1Ykljb24uY2xhc3NMaXN0LmFkZChcImdpdGh1Yi1pY29uXCIpO1xuICBjcmVkaXRzLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZ2l0aHViTGluay50ZXh0Q29udGVudCA9IFwibHVpemdtYWNlZG9cIjtcbiAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL2x1aXpnbWFjZWRvXCIpO1xuICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgY3JlZGl0cy5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlZGl0cyk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCB7IEhlYWRlciwgRm9vdGVyIH07XG4iLCJleHBvcnQgY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuXG4gICAgY29uc3QgaG9tZUJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZUJnLmNsYXNzTGlzdC5hZGQoJ2hvbWUtYmcnKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVCZyk7XG5cbiAgICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc3VidGl0bGUudGV4dENvbnRlbnQgPSAnR29vZCBicmVhZCBmb3IgYSBnb29kIGRheSc7XG4gICAgc3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnc3VidGl0bGUnKTtcbiAgICBob21lLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcblxuICAgIHJldHVybiBob21lO1xufSIsImV4cG9ydCBjb25zdCBNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBjcmVhdGVJdGVtID0gKGltYWdlLCBuYW1lLCBwcmljZSkgPT4ge1xuICAgICAgICBjb25zdCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvb2QuY2xhc3NMaXN0LmFkZCgnZm9vZCcpO1xuXG4gICAgICAgIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBmb29kSW1hZ2Uuc3JjID0gaW1hZ2U7XG4gICAgICAgIGZvb2RJbWFnZS5jbGFzc0xpc3QuYWRkKCdmb29kLWltYWdlJyk7XG5cbiAgICAgICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGZvb2ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgZm9vZE5hbWUuY2xhc3NMaXN0LmFkZCgnZm9vZC1uYW1lJyk7XG5cbiAgICAgICAgY29uc3QgZm9vZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBmb29kUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcbiAgICAgICAgZm9vZFByaWNlLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtcHJpY2UnKTtcblxuICAgICAgICBmb29kLmFwcGVuZENoaWxkKGZvb2RJbWFnZSk7XG4gICAgICAgIGZvb2QuYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xuICAgICAgICBmb29kLmFwcGVuZENoaWxkKGZvb2RQcmljZSk7XG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChmb29kKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAgIHtpbWFnZTogJy9zcmMvYXNzZXRzL2JhZ3VldHRlLnBuZycsIG5hbWU6ICdCYWd1ZXR0ZScsIHByaWNlOiAnJCA1LjAwJ30sXG4gICAgICAgIHtpbWFnZTogJy9zcmMvYXNzZXRzL2VjbGFpci5wbmcnLCBuYW1lOiAnRWNsYWlyJywgcHJpY2U6ICckIDIuOTknfSxcbiAgICAgICAge2ltYWdlOiAnL3NyYy9hc3NldHMvbXVmZmluLnBuZycsIG5hbWU6ICdNdWZmaW4nLCBwcmljZTogJyQgMS41MCd9LFxuICAgICAgICB7aW1hZ2U6ICcvc3JjL2Fzc2V0cy9hcHBsZS1waWUucG5nJywgbmFtZTogJ0FwcGxlIFBpZScsIHByaWNlOiAnJCA5Ljc5J30sXG4gICAgICAgIHtpbWFnZTogJy9zcmMvYXNzZXRzL2FuZ2VsLnBuZycsIG5hbWU6ICdDaG9jb2xhdGUgQW5nZWwnLCBwcmljZTogJyQgNC40OSd9LFxuICAgICAgICB7aW1hZ2U6ICcvc3JjL2Fzc2V0cy9jb2ZmZS5wbmcnLCBuYW1lOiAnQ29mZmUnLCBwcmljZTogJyQgMy43OSd9LFxuICAgIF07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjcmVhdGVJdGVtKGl0ZW1zW2ldLmltYWdlLCBpdGVtc1tpXS5uYW1lLCBpdGVtc1tpXS5wcmljZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1haW47XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFzZS5qc1wiO1xuaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS5qc1wiO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudS5qc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5mdW5jdGlvbiByZW5kZXIoaXRlbSkge1xuICBjb250ZW50LmFwcGVuZENoaWxkKEhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChGb290ZXIoKSk7XG59XG5cbnJlbmRlcihIb21lKCkpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IHRhYiA9IGUudGFyZ2V0O1xuICBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucyhcImhvbWVCdG5cIikpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgcmVuZGVyKEhvbWUoKSk7XG4gIH0gZWxzZSBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnVCdG5cIikpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgcmVuZGVyKE1lbnUoKSk7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==