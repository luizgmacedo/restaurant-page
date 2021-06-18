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
/* harmony import */ var _assets_contact_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/contact.jpg */ "./src/assets/contact.jpg");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Courgette&family=Poppins:wght@300&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_bread_jpg__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_contact_jpg__WEBPACK_IMPORTED_MODULE_4__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  background: rgb(250, 250, 250);\n}\n\n#content {\n  width: 98%;\n  height: 100vh;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n  margin: 20px;\n}\n\nheader .title {\n  font-family: \"Courgette\", cursive;\n  font-size: 30px;\n  color: #ec7343;\n}\n\nheader .navBar {\n  width: 250px;\n  margin-right: 30px;\n}\n\n.navBar .tabs {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navBar .tabs .tab {\n  list-style: none;\n}\n\n.tab .btn {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  letter-spacing: 1px;\n  color: #566270;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.tab .btn:hover {\n  color: #bb5730;\n}\n\n.home {\n  width: 100%;\n  height: 81.3vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.home-bg {\n  width: 80%;\n  height: 100%;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  box-shadow: 5px 1px 10px -6px rgba(59, 59, 59, 0.75);\n}\n\n.subtitle {\n  width: 240px;\n  height: 100px;\n  position: absolute;\n  top: 110px;\n  left: 450px;\n  font-family: \"Bebas Neue\", cursive;\n  font-size: 3rem;\n  font-weight: lighter;\n  text-transform: uppercase;\n  color: #e7b613;\n  text-align: center;\n}\n\n.menu {\n  width: 70%;\n  height: 81.3vh;\n  margin: 0 auto;\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 50px;\n  align-content: center;\n  justify-items: center;\n}\n\n.menu .food {\n  width: 250px;\n  height: 230px;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 5px 1px 10px -6px rgba(59, 59, 59, 0.75);\n}\n\n.menu .food-image {\n  width: 150px;\n  height: 140px;\n}\n\n.menu .food-name {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 22px;\n  color: #566270;\n}\n\n.menu .food-price {\n  font-family: \"Bebas Neue\", cursive;\n  font-size: 20px;\n  color: #ec7343;\n}\n\n.contact {\n  width: 85%;\n  height: 81.3vh;\n  display: flex;\n  background-color: #f8f7f7;\n  box-shadow: 5px 1px 10px -6px rgba(59, 59, 59, 0.75);\n}\n\n.contact .contact-img {\n  width: 40%;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n.contact .contact-info {\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  justify-content: center;\n}\n\n.contact-info .contact-title {\n  width: 20rem;\n  padding: 10px;\n  color: #ec7343;\n  font-family: \"Courgette\", cursive;\n  font-size: 27px;\n}\n\n.contact-info p {\n  width: 20rem;\n  padding: 5px;\n  color: #566270;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 98%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid #e67041;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 13px;\n  letter-spacing: 1px;\n  color: #566270;\n}\n\nfooter .info {\n  width: 430px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: 18px;\n}\n\n.info .social-media {\n  cursor: pointer;\n  width: 25px;\n  height: 25px;\n  margin: 2px;\n  opacity: 80%;\n  cursor: pointer;\n}\n\n.info .social-media:hover {\n  opacity: 100%;\n}\n\n.info .title-2 {\n  font-family: \"Courgette\", cursive;\n  font-size: 16px;\n  margin-bottom: 4px;\n  color: #ec7343;\n}\n\nfooter .credits {\n  width: 230px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n\n.credits .made-by {\n  margin-right: 7px;\n}\n\n.credits .github-icon {\n  width: 20px;\n  height: 20px;\n  margin-right: 3px;\n}\n\n.credits a {\n  color: #ec7343;\n  text-decoration: none;\n}\n\n.credits a:hover {\n  color: #c76038;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,mBAAmB;EACnB,cAAc;EACd,gBAAgB;EAChB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,mDAAqC;EACrC,sBAAsB;EACtB,2BAA2B;EAC3B,oDAAoD;AACtD;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,kCAAkC;EAClC,eAAe;EACf,oBAAoB;EACpB,yBAAyB;EACzB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,cAAc;;EAEd,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,oDAAoD;AACtD;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,aAAa;EACb,yBAAyB;EACzB,oDAAoD;AACtD;;AAEA;EACE,UAAU;EACV,mDAAuC;EACvC,2BAA2B;EAC3B,4BAA4B;EAC5B,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;;EAEtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;EAC7B,kCAAkC;EAClC,eAAe;EACf,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Courgette&family=Poppins:wght@300&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  background: rgb(250, 250, 250);\n}\n\n#content {\n  width: 98%;\n  height: 100vh;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n  margin: 20px;\n}\n\nheader .title {\n  font-family: \"Courgette\", cursive;\n  font-size: 30px;\n  color: #ec7343;\n}\n\nheader .navBar {\n  width: 250px;\n  margin-right: 30px;\n}\n\n.navBar .tabs {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navBar .tabs .tab {\n  list-style: none;\n}\n\n.tab .btn {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  letter-spacing: 1px;\n  color: #566270;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.tab .btn:hover {\n  color: #bb5730;\n}\n\n.home {\n  width: 100%;\n  height: 81.3vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.home-bg {\n  width: 80%;\n  height: 100%;\n  background: url(\"./assets/bread.jpg\");\n  background-size: cover;\n  background-position: center;\n  box-shadow: 5px 1px 10px -6px rgba(59, 59, 59, 0.75);\n}\n\n.subtitle {\n  width: 240px;\n  height: 100px;\n  position: absolute;\n  top: 110px;\n  left: 450px;\n  font-family: \"Bebas Neue\", cursive;\n  font-size: 3rem;\n  font-weight: lighter;\n  text-transform: uppercase;\n  color: #e7b613;\n  text-align: center;\n}\n\n.menu {\n  width: 70%;\n  height: 81.3vh;\n  margin: 0 auto;\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 50px;\n  align-content: center;\n  justify-items: center;\n}\n\n.menu .food {\n  width: 250px;\n  height: 230px;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 5px 1px 10px -6px rgba(59, 59, 59, 0.75);\n}\n\n.menu .food-image {\n  width: 150px;\n  height: 140px;\n}\n\n.menu .food-name {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 22px;\n  color: #566270;\n}\n\n.menu .food-price {\n  font-family: \"Bebas Neue\", cursive;\n  font-size: 20px;\n  color: #ec7343;\n}\n\n.contact {\n  width: 85%;\n  height: 81.3vh;\n  display: flex;\n  background-color: #f8f7f7;\n  box-shadow: 5px 1px 10px -6px rgba(59, 59, 59, 0.75);\n}\n\n.contact .contact-img {\n  width: 40%;\n  background: url(\"./assets/contact.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n.contact .contact-info {\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  justify-content: center;\n}\n\n.contact-info .contact-title {\n  width: 20rem;\n  padding: 10px;\n  color: #ec7343;\n  font-family: \"Courgette\", cursive;\n  font-size: 27px;\n}\n\n.contact-info p {\n  width: 20rem;\n  padding: 5px;\n  color: #566270;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 98%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid #e67041;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 13px;\n  letter-spacing: 1px;\n  color: #566270;\n}\n\nfooter .info {\n  width: 430px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: 18px;\n}\n\n.info .social-media {\n  cursor: pointer;\n  width: 25px;\n  height: 25px;\n  margin: 2px;\n  opacity: 80%;\n  cursor: pointer;\n}\n\n.info .social-media:hover {\n  opacity: 100%;\n}\n\n.info .title-2 {\n  font-family: \"Courgette\", cursive;\n  font-size: 16px;\n  margin-bottom: 4px;\n  color: #ec7343;\n}\n\nfooter .credits {\n  width: 230px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n\n.credits .made-by {\n  margin-right: 7px;\n}\n\n.credits .github-icon {\n  width: 20px;\n  height: 20px;\n  margin-right: 3px;\n}\n\n.credits a {\n  color: #ec7343;\n  text-decoration: none;\n}\n\n.credits a:hover {\n  color: #c76038;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/contact.jpg":
/*!********************************!*\
  !*** ./src/assets/contact.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6be9486f85fab424d5e.jpg";

/***/ }),

/***/ "./src/assets/email-icon.svg":
/*!***********************************!*\
  !*** ./src/assets/email-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "966f66e6b52cb83a8933.svg";

/***/ }),

/***/ "./src/assets/facebook-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/facebook-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0364cdd32d2f392320e9.svg";

/***/ }),

/***/ "./src/assets/instagram-icon.svg":
/*!***************************************!*\
  !*** ./src/assets/instagram-icon.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c95bd1766fdf415445fb.svg";

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
/* harmony import */ var _assets_facebook_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/facebook-icon.svg */ "./src/assets/facebook-icon.svg");
/* harmony import */ var _assets_instagram_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/instagram-icon.svg */ "./src/assets/instagram-icon.svg");
/* harmony import */ var _assets_email_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/email-icon.svg */ "./src/assets/email-icon.svg");




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
  facebookIcon.setAttribute("src", `${/* non-default import from non-esm module */undefined}`);
  facebookIcon.classList.add("social-media");
  info.appendChild(facebookIcon);

  const instagramIcon = document.createElement("img");
  instagramIcon.setAttribute("src", /* non-default import from non-esm module */undefined);
  instagramIcon.classList.add("social-media");
  info.appendChild(instagramIcon);

  const emailIcon = document.createElement("img");
  emailIcon.setAttribute("src", /* non-default import from non-esm module */undefined);
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

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contact": () => (/* binding */ Contact)
/* harmony export */ });
const Contact = () => {
  const contact = document.createElement("main");
  contact.classList.add("contact");

  const contactImg = document.createElement("img");
  contactImg.classList.add("contact-img");
  contact.appendChild(contactImg);

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "La Boulangère";
  contactTitle.classList.add("contact-title");
  contactInfo.appendChild(contactTitle);

  const address = document.createElement("p");
  address.textContent = "South Melbourne 5532 Australia";
  contactInfo.appendChild(address);

  const phone = document.createElement("p");
  phone.textContent = "Phone: +61 5 5555 1234";
  contactInfo.appendChild(phone);

  const email = document.createElement("p");
  email.textContent = "Email: laboulangere@top.com";
  contactInfo.appendChild(email);

  contact.appendChild(contactInfo);

  return contact;
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
  const home = document.createElement("main");
  home.classList.add("home");

  const homeBg = document.createElement("div");
  homeBg.classList.add("home-bg");
  home.appendChild(homeBg);

  const subtitle = document.createElement("h3");
  subtitle.textContent = "Good bread for a good day";
  subtitle.classList.add("subtitle");
  home.appendChild(subtitle);

  return home;
};


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
  const menu = document.createElement("main");
  menu.classList.add("menu");

  const createItem = (image, name, price) => {
    const food = document.createElement("div");
    food.classList.add("food");

    const foodImage = document.createElement("img");
    foodImage.src = image;
    foodImage.classList.add("food-image");

    const foodName = document.createElement("p");
    foodName.textContent = name;
    foodName.classList.add("food-name");

    const foodPrice = document.createElement("p");
    foodPrice.textContent = price;
    foodPrice.classList.add("food-price");

    food.appendChild(foodImage);
    food.appendChild(foodName);
    food.appendChild(foodPrice);

    menu.appendChild(food);
  };

  const items = [
    { image: "./src/assets/baguette.png", name: "Baguette", price: "$ 5.00" },
    { image: "./src/assets/eclair.png", name: "Eclair", price: "$ 2.99" },
    { image: "./src/assets/muffin.png", name: "Muffin", price: "$ 1.50" },
    { image: "./src/assets/apple-pie.png", name: "Apple Pie", price: "$ 9.79" },
    {
      image: "./src/assets/angel.png",
      name: "Chocolate Angel",
      price: "$ 4.49",
    },
    { image: "./src/assets/coffe.png", name: "Coffe", price: "$ 3.79" },
  ];

  for (let i = 0; i < items.length; i++) {
    createItem(items[i].image, items[i].name, items[i].price);
  }

  return menu;
};


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
/* harmony import */ var _components_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact.js */ "./src/components/contact.js");






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
  } else if (tab.classList.contains("contactBtn")) {
    content.innerHTML = "";
    render((0,_components_contact_js__WEBPACK_IMPORTED_MODULE_4__.Contact)());
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ087QUFDakM7QUFDRTtBQUNqRSw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLCtJQUErSTtBQUMvSSx3SEFBd0g7QUFDeEgseUNBQXlDLHNGQUErQixDQUFDLDhDQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsZ0RBQTZCO0FBQ3RHO0FBQ0EsNkNBQTZDLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxVQUFVLGtCQUFrQiw0QkFBNEIsbUNBQW1DLEdBQUcsY0FBYyxlQUFlLGtCQUFrQixHQUFHLFlBQVksa0JBQWtCLG1DQUFtQyx3QkFBd0Isb0JBQW9CLGlCQUFpQixHQUFHLG1CQUFtQix3Q0FBd0Msb0JBQW9CLG1CQUFtQixHQUFHLG9CQUFvQixpQkFBaUIsdUJBQXVCLEdBQUcsbUJBQW1CLGtCQUFrQixtQ0FBbUMsd0JBQXdCLEdBQUcsd0JBQXdCLHFCQUFxQixHQUFHLGVBQWUseUNBQXlDLG9CQUFvQix3QkFBd0IsbUJBQW1CLHFCQUFxQixpQkFBaUIsb0JBQW9CLEdBQUcscUJBQXFCLG1CQUFtQixHQUFHLFdBQVcsZ0JBQWdCLG1CQUFtQixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLGNBQWMsZUFBZSxpQkFBaUIsZ0VBQWdFLDJCQUEyQixnQ0FBZ0MseURBQXlELEdBQUcsZUFBZSxpQkFBaUIsa0JBQWtCLHVCQUF1QixlQUFlLGdCQUFnQix5Q0FBeUMsb0JBQW9CLHlCQUF5Qiw4QkFBOEIsbUJBQW1CLHVCQUF1QixHQUFHLFdBQVcsZUFBZSxtQkFBbUIsbUJBQW1CLG9CQUFvQiwwQ0FBMEMsY0FBYywwQkFBMEIsMEJBQTBCLEdBQUcsaUJBQWlCLGlCQUFpQixrQkFBa0Isd0JBQXdCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0Qix5REFBeUQsR0FBRyx1QkFBdUIsaUJBQWlCLGtCQUFrQixHQUFHLHNCQUFzQix5Q0FBeUMsb0JBQW9CLG1CQUFtQixHQUFHLHVCQUF1Qix5Q0FBeUMsb0JBQW9CLG1CQUFtQixHQUFHLGNBQWMsZUFBZSxtQkFBbUIsa0JBQWtCLDhCQUE4Qix5REFBeUQsR0FBRywyQkFBMkIsZUFBZSxnRUFBZ0UsZ0NBQWdDLGlDQUFpQywwQkFBMEIsR0FBRyw0QkFBNEIsZUFBZSxrQkFBa0IsMkJBQTJCLDBCQUEwQiw0QkFBNEIsR0FBRyxrQ0FBa0MsaUJBQWlCLGtCQUFrQixtQkFBbUIsd0NBQXdDLG9CQUFvQixHQUFHLHFCQUFxQixpQkFBaUIsaUJBQWlCLG1CQUFtQix5Q0FBeUMsb0JBQW9CLEdBQUcsWUFBWSx1QkFBdUIsY0FBYyxlQUFlLGlCQUFpQixrQkFBa0IsbUNBQW1DLGtDQUFrQyx5Q0FBeUMsb0JBQW9CLHdCQUF3QixtQkFBbUIsR0FBRyxrQkFBa0IsaUJBQWlCLGtCQUFrQix3QkFBd0IsbUNBQW1DLHNCQUFzQixHQUFHLHlCQUF5QixvQkFBb0IsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLG9CQUFvQixHQUFHLCtCQUErQixrQkFBa0IsR0FBRyxvQkFBb0Isd0NBQXdDLG9CQUFvQix1QkFBdUIsbUJBQW1CLEdBQUcscUJBQXFCLGlCQUFpQixrQkFBa0Isd0JBQXdCLDRCQUE0QixvQkFBb0IsR0FBRyx1QkFBdUIsc0JBQXNCLEdBQUcsMkJBQTJCLGdCQUFnQixpQkFBaUIsc0JBQXNCLEdBQUcsZ0JBQWdCLG1CQUFtQiwwQkFBMEIsR0FBRyxzQkFBc0IsbUJBQW1CLEdBQUcsU0FBUyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDaUM7QUFDVjtBQUNBO0FBQ007O0FBRWxEOztBQUVBO0FBQ0Esc0JBQXNCLDJEQUFNO0FBQzVCO0FBQ0Esc0JBQXNCLDJEQUFNO0FBQzVCOztBQUVBLE9BQU8seURBQUk7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlEQUFJO0FBQ2YsR0FBRztBQUNIO0FBQ0EsV0FBVyx5REFBSTtBQUNmLEdBQUc7QUFDSDtBQUNBLFdBQVcsK0RBQU87QUFDbEI7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vYXNzZXRzL2JyZWFkLmpwZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuL2Fzc2V0cy9jb250YWN0LmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q291cmdldHRlJmZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgd2lkdGg6IDk4JTtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuaGVhZGVyIC50aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJnZXR0ZVxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogI2VjNzM0MztcXG59XFxuXFxuaGVhZGVyIC5uYXZCYXIge1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ubmF2QmFyIC50YWJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2QmFyIC50YWJzIC50YWIge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRhYiAuYnRuIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6ICM1NjYyNzA7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFiIC5idG46aG92ZXIge1xcbiAgY29sb3I6ICNiYjU3MzA7XFxufVxcblxcbi5ob21lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MS4zdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1iZyB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiA1cHggMXB4IDEwcHggLTZweCByZ2JhKDU5LCA1OSwgNTksIDAuNzUpO1xcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgd2lkdGg6IDI0MHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTEwcHg7XFxuICBsZWZ0OiA0NTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmViYXMgTmV1ZVxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2U3YjYxMztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogODEuM3ZoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogNTBweDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUgLmZvb2Qge1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAyMzBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDVweCAxcHggMTBweCAtNnB4IHJnYmEoNTksIDU5LCA1OSwgMC43NSk7XFxufVxcblxcbi5tZW51IC5mb29kLWltYWdlIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTQwcHg7XFxufVxcblxcbi5tZW51IC5mb29kLW5hbWUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGNvbG9yOiAjNTY2MjcwO1xcbn1cXG5cXG4ubWVudSAuZm9vZC1wcmljZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlYmFzIE5ldWVcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNlYzczNDM7XFxufVxcblxcbi5jb250YWN0IHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDgxLjN2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmN2Y3O1xcbiAgYm94LXNoYWRvdzogNXB4IDFweCAxMHB4IC02cHggcmdiYSg1OSwgNTksIDU5LCAwLjc1KTtcXG59XFxuXFxuLmNvbnRhY3QgLmNvbnRhY3QtaW1nIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLmNvbnRhY3QgLmNvbnRhY3QtaW5mbyB7XFxuICB3aWR0aDogNzAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWluZm8gLmNvbnRhY3QtdGl0bGUge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiAjZWM3MzQzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyZ2V0dGVcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAyN3B4O1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHAge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY29sb3I6ICM1NjYyNzA7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDk4JTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2NzA0MTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6ICM1NjYyNzA7XFxufVxcblxcbmZvb3RlciAuaW5mbyB7XFxuICB3aWR0aDogNDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xcbn1cXG5cXG4uaW5mbyAuc29jaWFsLW1lZGlhIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luOiAycHg7XFxuICBvcGFjaXR5OiA4MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbmZvIC5zb2NpYWwtbWVkaWE6aG92ZXIge1xcbiAgb3BhY2l0eTogMTAwJTtcXG59XFxuXFxuLmluZm8gLnRpdGxlLTIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyZ2V0dGVcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgY29sb3I6ICNlYzczNDM7XFxufVxcblxcbmZvb3RlciAuY3JlZGl0cyB7XFxuICB3aWR0aDogMjMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uY3JlZGl0cyAubWFkZS1ieSB7XFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXG59XFxuXFxuLmNyZWRpdHMgLmdpdGh1Yi1pY29uIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxufVxcblxcbi5jcmVkaXRzIGEge1xcbiAgY29sb3I6ICNlYzczNDM7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jcmVkaXRzIGE6aG92ZXIge1xcbiAgY29sb3I6ICNjNzYwMzg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1EQUFxQztFQUNyQyxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGNBQWM7O0VBRWQsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLFVBQVU7RUFDVixtREFBdUM7RUFDdkMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGlDQUFpQztFQUNqQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvdXJnZXR0ZSZmYW1pbHk9UG9wcGluczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogOTglO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG5oZWFkZXIgLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmdldHRlXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiAjZWM3MzQzO1xcbn1cXG5cXG5oZWFkZXIgLm5hdkJhciB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5uYXZCYXIgLnRhYnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXZCYXIgLnRhYnMgLnRhYiB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFiIC5idG4ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogIzU2NjI3MDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YWIgLmJ0bjpob3ZlciB7XFxuICBjb2xvcjogI2JiNTczMDtcXG59XFxuXFxuLmhvbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgxLjN2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ob21lLWJnIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL2JyZWFkLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDVweCAxcHggMTBweCAtNnB4IHJnYmEoNTksIDU5LCA1OSwgMC43NSk7XFxufVxcblxcbi5zdWJ0aXRsZSB7XFxuICB3aWR0aDogMjQwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMTBweDtcXG4gIGxlZnQ6IDQ1MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZWJhcyBOZXVlXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZTdiNjEzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudSB7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiA4MS4zdmg7XFxuICBtYXJnaW46IDAgYXV0bztcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiA1MHB4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudSAuZm9vZCB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDIzMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogNXB4IDFweCAxMHB4IC02cHggcmdiYSg1OSwgNTksIDU5LCAwLjc1KTtcXG59XFxuXFxuLm1lbnUgLmZvb2QtaW1hZ2Uge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNDBweDtcXG59XFxuXFxuLm1lbnUgLmZvb2QtbmFtZSB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgY29sb3I6ICM1NjYyNzA7XFxufVxcblxcbi5tZW51IC5mb29kLXByaWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmViYXMgTmV1ZVxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogI2VjNzM0MztcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogODEuM3ZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY3Zjc7XFxuICBib3gtc2hhZG93OiA1cHggMXB4IDEwcHggLTZweCByZ2JhKDU5LCA1OSwgNTksIDAuNzUpO1xcbn1cXG5cXG4uY29udGFjdCAuY29udGFjdC1pbWcge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvY29udGFjdC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbi5jb250YWN0IC5jb250YWN0LWluZm8ge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIC5jb250YWN0LXRpdGxlIHtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogI2VjNzM0MztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmdldHRlXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMjdweDtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyBwIHtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGNvbG9yOiAjNTY2MjcwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiA5OCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNjcwNDE7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGNvbG9yOiAjNTY2MjcwO1xcbn1cXG5cXG5mb290ZXIgLmluZm8ge1xcbiAgd2lkdGg6IDQzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tbGVmdDogMThweDtcXG59XFxuXFxuLmluZm8gLnNvY2lhbC1tZWRpYSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbjogMnB4O1xcbiAgb3BhY2l0eTogODAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5mbyAuc29jaWFsLW1lZGlhOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDEwMCU7XFxufVxcblxcbi5pbmZvIC50aXRsZS0yIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmdldHRlXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIGNvbG9yOiAjZWM3MzQzO1xcbn1cXG5cXG5mb290ZXIgLmNyZWRpdHMge1xcbiAgd2lkdGg6IDIzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLmNyZWRpdHMgLm1hZGUtYnkge1xcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxufVxcblxcbi5jcmVkaXRzIC5naXRodWItaWNvbiB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogM3B4O1xcbn1cXG5cXG4uY3JlZGl0cyBhIHtcXG4gIGNvbG9yOiAjZWM3MzQzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY3JlZGl0cyBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjYzc2MDM4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7ZmFjZWJvb2t9IGZyb20gJy4uL2Fzc2V0cy9mYWNlYm9vay1pY29uLnN2Zyc7XG5pbXBvcnQge2luc3RhZ3JhbX0gZnJvbSAnLi4vYXNzZXRzL2luc3RhZ3JhbS1pY29uLnN2Zyc7XG5pbXBvcnQge2VtYWlsfSBmcm9tICcuLi9hc3NldHMvZW1haWwtaWNvbi5zdmcnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJMYSBCb3VsYW5nw6hyZVwiO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZCYXJcIik7XG5cbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdGFicy5jbGFzc0xpc3QuYWRkKFwidGFic1wiKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKHRhYnMpO1xuXG4gIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGhvbWVUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiLCBcImhvbWVUYWJcIik7XG4gIHRhYnMuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiaG9tZUJ0blwiKTtcbiAgaG9tZVRhYi5hcHBlbmRDaGlsZChob21lQnRuKTtcblxuICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIiwgXCJtZW51VGFiXCIpO1xuICB0YWJzLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51QnRuLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcIm1lbnVCdG5cIik7XG4gIG1lbnVUYWIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbiAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIsIFwiY29udGFjdFRhYlwiKTtcbiAgdGFicy5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJjb250YWN0QnRuXCIpO1xuICBjb250YWN0VGFiLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuXG4gIGNvbnN0IGZhY2Vib29rSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGZhY2Vib29rSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYCR7ZmFjZWJvb2t9YCk7XG4gIGZhY2Vib29rSWNvbi5jbGFzc0xpc3QuYWRkKFwic29jaWFsLW1lZGlhXCIpO1xuICBpbmZvLmFwcGVuZENoaWxkKGZhY2Vib29rSWNvbik7XG5cbiAgY29uc3QgaW5zdGFncmFtSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGluc3RhZ3JhbUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGluc3RhZ3JhbSk7XG4gIGluc3RhZ3JhbUljb24uY2xhc3NMaXN0LmFkZChcInNvY2lhbC1tZWRpYVwiKTtcbiAgaW5mby5hcHBlbmRDaGlsZChpbnN0YWdyYW1JY29uKTtcblxuICBjb25zdCBlbWFpbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBlbWFpbEljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGVtYWlsKTtcbiAgZW1haWxJY29uLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtbWVkaWFcIik7XG4gIGluZm8uYXBwZW5kQ2hpbGQoZW1haWxJY29uKTtcblxuICBjb25zdCB0aXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRpdGxlMi50ZXh0Q29udGVudCA9IFwiTGEgQm91bGFuZ8OocmVcIjtcbiAgdGl0bGUyLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS0yXCIpO1xuICBpbmZvLmFwcGVuZENoaWxkKHRpdGxlMik7XG5cbiAgY29uc3QgcmlnaHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJpZ2h0cy50ZXh0Q29udGVudCA9IFwiMjAyMSDCqSBBbGwgcmlnaHRzIHJlc2VydmVkLlwiO1xuICBpbmZvLmFwcGVuZENoaWxkKHJpZ2h0cyk7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gIGNvbnN0IGNyZWRpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjcmVkaXRzLmNsYXNzTGlzdC5hZGQoXCJjcmVkaXRzXCIpO1xuXG4gIGNvbnN0IG1hZGVCeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtYWRlQnkudGV4dENvbnRlbnQgPSBcIk1hZGUgYnlcIjtcbiAgbWFkZUJ5LmNsYXNzTGlzdC5hZGQoXCJtYWRlLWJ5XCIpO1xuICBjcmVkaXRzLmFwcGVuZENoaWxkKG1hZGVCeSk7XG5cbiAgY29uc3QgZ2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGdpdGh1Ykljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiL3NyYy9hc3NldHMvZ2l0aHViLnN2Z1wiKTtcbiAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKFwiZ2l0aHViLWljb25cIik7XG4gIGNyZWRpdHMuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBnaXRodWJMaW5rLnRleHRDb250ZW50ID0gXCJsdWl6Z21hY2Vkb1wiO1xuICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vbHVpemdtYWNlZG9cIik7XG4gIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICBjcmVkaXRzLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjcmVkaXRzKTtcblxuICByZXR1cm4gZm9vdGVyO1xufTtcblxuZXhwb3J0IHsgSGVhZGVyLCBGb290ZXIgfTtcbiIsImV4cG9ydCBjb25zdCBDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG5cbiAgY29uc3QgY29udGFjdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnRhY3RJbWcuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW1nXCIpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RJbWcpO1xuXG4gIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW5mb1wiKTtcblxuICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiTGEgQm91bGFuZ8OocmVcIjtcbiAgY29udGFjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXRpdGxlXCIpO1xuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiU291dGggTWVsYm91cm5lIDU1MzIgQXVzdHJhbGlhXCI7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBob25lLnRleHRDb250ZW50ID0gXCJQaG9uZTogKzYxIDUgNTU1NSAxMjM0XCI7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKHBob25lKTtcblxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBlbWFpbC50ZXh0Q29udGVudCA9IFwiRW1haWw6IGxhYm91bGFuZ2VyZUB0b3AuY29tXCI7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcblxuICByZXR1cm4gY29udGFjdDtcbn07XG4iLCJleHBvcnQgY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuXG4gIGNvbnN0IGhvbWVCZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVCZy5jbGFzc0xpc3QuYWRkKFwiaG9tZS1iZ1wiKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lQmcpO1xuXG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiR29vZCBicmVhZCBmb3IgYSBnb29kIGRheVwiO1xuICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKFwic3VidGl0bGVcIik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXG4gIHJldHVybiBob21lO1xufTtcbiIsImV4cG9ydCBjb25zdCBNZW51ID0gKCkgPT4ge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgY29uc3QgY3JlYXRlSXRlbSA9IChpbWFnZSwgbmFtZSwgcHJpY2UpID0+IHtcbiAgICBjb25zdCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb29kLmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpO1xuXG4gICAgY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBmb29kSW1hZ2Uuc3JjID0gaW1hZ2U7XG4gICAgZm9vZEltYWdlLmNsYXNzTGlzdC5hZGQoXCJmb29kLWltYWdlXCIpO1xuXG4gICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb29kTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgZm9vZE5hbWUuY2xhc3NMaXN0LmFkZChcImZvb2QtbmFtZVwiKTtcblxuICAgIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZvb2RQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuICAgIGZvb2RQcmljZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1wcmljZVwiKTtcblxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoZm9vZEltYWdlKTtcbiAgICBmb29kLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgICBmb29kLmFwcGVuZENoaWxkKGZvb2RQcmljZSk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKGZvb2QpO1xuICB9O1xuXG4gIGNvbnN0IGl0ZW1zID0gW1xuICAgIHsgaW1hZ2U6IFwiLi9zcmMvYXNzZXRzL2JhZ3VldHRlLnBuZ1wiLCBuYW1lOiBcIkJhZ3VldHRlXCIsIHByaWNlOiBcIiQgNS4wMFwiIH0sXG4gICAgeyBpbWFnZTogXCIuL3NyYy9hc3NldHMvZWNsYWlyLnBuZ1wiLCBuYW1lOiBcIkVjbGFpclwiLCBwcmljZTogXCIkIDIuOTlcIiB9LFxuICAgIHsgaW1hZ2U6IFwiLi9zcmMvYXNzZXRzL211ZmZpbi5wbmdcIiwgbmFtZTogXCJNdWZmaW5cIiwgcHJpY2U6IFwiJCAxLjUwXCIgfSxcbiAgICB7IGltYWdlOiBcIi4vc3JjL2Fzc2V0cy9hcHBsZS1waWUucG5nXCIsIG5hbWU6IFwiQXBwbGUgUGllXCIsIHByaWNlOiBcIiQgOS43OVwiIH0sXG4gICAge1xuICAgICAgaW1hZ2U6IFwiLi9zcmMvYXNzZXRzL2FuZ2VsLnBuZ1wiLFxuICAgICAgbmFtZTogXCJDaG9jb2xhdGUgQW5nZWxcIixcbiAgICAgIHByaWNlOiBcIiQgNC40OVwiLFxuICAgIH0sXG4gICAgeyBpbWFnZTogXCIuL3NyYy9hc3NldHMvY29mZmUucG5nXCIsIG5hbWU6IFwiQ29mZmVcIiwgcHJpY2U6IFwiJCAzLjc5XCIgfSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgY3JlYXRlSXRlbShpdGVtc1tpXS5pbWFnZSwgaXRlbXNbaV0ubmFtZSwgaXRlbXNbaV0ucHJpY2UpO1xuICB9XG5cbiAgcmV0dXJuIG1lbnU7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgSGVhZGVyLCBGb290ZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Jhc2UuanNcIjtcbmltcG9ydCB7IEhvbWUgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUuanNcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnUuanNcIjtcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NvbnRhY3QuanNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuZnVuY3Rpb24gcmVuZGVyKGl0ZW0pIHtcbiAgY29udGVudC5hcHBlbmRDaGlsZChIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRm9vdGVyKCkpO1xufVxuXG5yZW5kZXIoSG9tZSgpKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zdCB0YWIgPSBlLnRhcmdldDtcbiAgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoXCJob21lQnRuXCIpKSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHJlbmRlcihIb21lKCkpO1xuICB9IGVsc2UgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51QnRuXCIpKSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHJlbmRlcihNZW51KCkpO1xuICB9IGVsc2UgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoXCJjb250YWN0QnRuXCIpKSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHJlbmRlcihDb250YWN0KCkpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=