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

/***/ "./src/assets/angel.png":
/*!******************************!*\
  !*** ./src/assets/angel.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "287ffc3f89cac0716f99.png";

/***/ }),

/***/ "./src/assets/apple-pie.png":
/*!**********************************!*\
  !*** ./src/assets/apple-pie.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "105d941fd710a2aec523.png";

/***/ }),

/***/ "./src/assets/baguette.png":
/*!*********************************!*\
  !*** ./src/assets/baguette.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cab2b2c7b01d8b428bb.png";

/***/ }),

/***/ "./src/assets/bread.jpg":
/*!******************************!*\
  !*** ./src/assets/bread.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8667186c04c8bd8ebf7.jpg";

/***/ }),

/***/ "./src/assets/coffe.png":
/*!******************************!*\
  !*** ./src/assets/coffe.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cac5f9c966cc947710f8.png";

/***/ }),

/***/ "./src/assets/contact.jpg":
/*!********************************!*\
  !*** ./src/assets/contact.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6be9486f85fab424d5e.jpg";

/***/ }),

/***/ "./src/assets/eclair.png":
/*!*******************************!*\
  !*** ./src/assets/eclair.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4daffb855e44f1ea693.png";

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

/***/ "./src/assets/github.svg":
/*!*******************************!*\
  !*** ./src/assets/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a1b0f812110ebfae7796.svg";

/***/ }),

/***/ "./src/assets/instagram-icon.svg":
/*!***************************************!*\
  !*** ./src/assets/instagram-icon.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c95bd1766fdf415445fb.svg";

/***/ }),

/***/ "./src/assets/muffin.png":
/*!*******************************!*\
  !*** ./src/assets/muffin.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ca1c885b9f9c1e368b6.png";

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
/* harmony import */ var _src_assets_facebook_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/assets/facebook-icon.svg */ "./src/assets/facebook-icon.svg");
/* harmony import */ var _src_assets_instagram_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/assets/instagram-icon.svg */ "./src/assets/instagram-icon.svg");
/* harmony import */ var _src_assets_email_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/assets/email-icon.svg */ "./src/assets/email-icon.svg");
/* harmony import */ var _src_assets_github_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/assets/github.svg */ "./src/assets/github.svg");





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
  facebookIcon.setAttribute("src", _src_assets_facebook_icon_svg__WEBPACK_IMPORTED_MODULE_0__);
  facebookIcon.classList.add("social-media");
  info.appendChild(facebookIcon);

  const instagramIcon = document.createElement("img");
  instagramIcon.setAttribute("src", _src_assets_instagram_icon_svg__WEBPACK_IMPORTED_MODULE_1__);
  instagramIcon.classList.add("social-media");
  info.appendChild(instagramIcon);

  const emailIcon = document.createElement("img");
  emailIcon.setAttribute("src", _src_assets_email_icon_svg__WEBPACK_IMPORTED_MODULE_2__);
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
  githubIcon.setAttribute("src", _src_assets_github_svg__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var _src_assets_baguette_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/assets/baguette.png */ "./src/assets/baguette.png");
/* harmony import */ var _src_assets_eclair_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/assets/eclair.png */ "./src/assets/eclair.png");
/* harmony import */ var _src_assets_muffin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/assets/muffin.png */ "./src/assets/muffin.png");
/* harmony import */ var _src_assets_apple_pie_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/assets/apple-pie.png */ "./src/assets/apple-pie.png");
/* harmony import */ var _src_assets_angel_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/assets/angel.png */ "./src/assets/angel.png");
/* harmony import */ var _src_assets_coffe_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/assets/coffe.png */ "./src/assets/coffe.png");







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
    { image: _src_assets_baguette_png__WEBPACK_IMPORTED_MODULE_0__, name: "Baguette", price: "$ 5.00" },
    { image: _src_assets_eclair_png__WEBPACK_IMPORTED_MODULE_1__, name: "Eclair", price: "$ 2.99" },
    { image: _src_assets_muffin_png__WEBPACK_IMPORTED_MODULE_2__, name: "Muffin", price: "$ 1.50" },
    { image: _src_assets_apple_pie_png__WEBPACK_IMPORTED_MODULE_3__, name: "Apple Pie", price: "$ 9.79" },
    {
      image: _src_assets_angel_png__WEBPACK_IMPORTED_MODULE_4__,
      name: "Chocolate Angel",
      price: "$ 4.49",
    },
    { image: _src_assets_coffe_png__WEBPACK_IMPORTED_MODULE_5__, name: "Coffe", price: "$ 3.79" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ087QUFDakM7QUFDRTtBQUNqRSw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLCtJQUErSTtBQUMvSSx3SEFBd0g7QUFDeEgseUNBQXlDLHNGQUErQixDQUFDLDhDQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsZ0RBQTZCO0FBQ3RHO0FBQ0EsNkNBQTZDLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxVQUFVLGtCQUFrQiw0QkFBNEIsbUNBQW1DLEdBQUcsY0FBYyxlQUFlLGtCQUFrQixHQUFHLFlBQVksa0JBQWtCLG1DQUFtQyx3QkFBd0Isb0JBQW9CLGlCQUFpQixHQUFHLG1CQUFtQix3Q0FBd0Msb0JBQW9CLG1CQUFtQixHQUFHLG9CQUFvQixpQkFBaUIsdUJBQXVCLEdBQUcsbUJBQW1CLGtCQUFrQixtQ0FBbUMsd0JBQXdCLEdBQUcsd0JBQXdCLHFCQUFxQixHQUFHLGVBQWUseUNBQXlDLG9CQUFvQix3QkFBd0IsbUJBQW1CLHFCQUFxQixpQkFBaUIsb0JBQW9CLEdBQUcscUJBQXFCLG1CQUFtQixHQUFHLFdBQVcsZ0JBQWdCLG1CQUFtQixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLGNBQWMsZUFBZSxpQkFBaUIsZ0VBQWdFLDJCQUEyQixnQ0FBZ0MseURBQXlELEdBQUcsZUFBZSxpQkFBaUIsa0JBQWtCLHVCQUF1QixlQUFlLGdCQUFnQix5Q0FBeUMsb0JBQW9CLHlCQUF5Qiw4QkFBOEIsbUJBQW1CLHVCQUF1QixHQUFHLFdBQVcsZUFBZSxtQkFBbUIsbUJBQW1CLG9CQUFvQiwwQ0FBMEMsY0FBYywwQkFBMEIsMEJBQTBCLEdBQUcsaUJBQWlCLGlCQUFpQixrQkFBa0Isd0JBQXdCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0Qix5REFBeUQsR0FBRyx1QkFBdUIsaUJBQWlCLGtCQUFrQixHQUFHLHNCQUFzQix5Q0FBeUMsb0JBQW9CLG1CQUFtQixHQUFHLHVCQUF1Qix5Q0FBeUMsb0JBQW9CLG1CQUFtQixHQUFHLGNBQWMsZUFBZSxtQkFBbUIsa0JBQWtCLDhCQUE4Qix5REFBeUQsR0FBRywyQkFBMkIsZUFBZSxnRUFBZ0UsZ0NBQWdDLGlDQUFpQywwQkFBMEIsR0FBRyw0QkFBNEIsZUFBZSxrQkFBa0IsMkJBQTJCLDBCQUEwQiw0QkFBNEIsR0FBRyxrQ0FBa0MsaUJBQWlCLGtCQUFrQixtQkFBbUIsd0NBQXdDLG9CQUFvQixHQUFHLHFCQUFxQixpQkFBaUIsaUJBQWlCLG1CQUFtQix5Q0FBeUMsb0JBQW9CLEdBQUcsWUFBWSx1QkFBdUIsY0FBYyxlQUFlLGlCQUFpQixrQkFBa0IsbUNBQW1DLGtDQUFrQyx5Q0FBeUMsb0JBQW9CLHdCQUF3QixtQkFBbUIsR0FBRyxrQkFBa0IsaUJBQWlCLGtCQUFrQix3QkFBd0IsbUNBQW1DLHNCQUFzQixHQUFHLHlCQUF5QixvQkFBb0IsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLG9CQUFvQixHQUFHLCtCQUErQixrQkFBa0IsR0FBRyxvQkFBb0Isd0NBQXdDLG9CQUFvQix1QkFBdUIsbUJBQW1CLEdBQUcscUJBQXFCLGlCQUFpQixrQkFBa0Isd0JBQXdCLDRCQUE0QixvQkFBb0IsR0FBRyx1QkFBdUIsc0JBQXNCLEdBQUcsMkJBQTJCLGdCQUFnQixpQkFBaUIsc0JBQXNCLEdBQUcsZ0JBQWdCLG1CQUFtQiwwQkFBMEIsR0FBRyxzQkFBc0IsbUJBQW1CLEdBQUcsU0FBUyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFB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V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNpQztBQUNWO0FBQ0E7QUFDTTs7QUFFbEQ7O0FBRUE7QUFDQSxzQkFBc0IsMkRBQU07QUFDNUI7QUFDQSxzQkFBc0IsMkRBQU07QUFDNUI7O0FBRUEsT0FBTyx5REFBSTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseURBQUk7QUFDZixHQUFHO0FBQ0g7QUFDQSxXQUFXLHlEQUFJO0FBQ2YsR0FBRztBQUNIO0FBQ0EsV0FBVywrREFBTztBQUNsQjtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9hc3NldHMvYnJlYWQuanBnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4vYXNzZXRzL2NvbnRhY3QuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3VyZ2V0dGUmZmFtaWx5PVBvcHBpbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmViYXMrTmV1ZSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogOTglO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG5oZWFkZXIgLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmdldHRlXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiAjZWM3MzQzO1xcbn1cXG5cXG5oZWFkZXIgLm5hdkJhciB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5uYXZCYXIgLnRhYnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXZCYXIgLnRhYnMgLnRhYiB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFiIC5idG4ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogIzU2NjI3MDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YWIgLmJ0bjpob3ZlciB7XFxuICBjb2xvcjogI2JiNTczMDtcXG59XFxuXFxuLmhvbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgxLjN2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ob21lLWJnIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDVweCAxcHggMTBweCAtNnB4IHJnYmEoNTksIDU5LCA1OSwgMC43NSk7XFxufVxcblxcbi5zdWJ0aXRsZSB7XFxuICB3aWR0aDogMjQwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMTBweDtcXG4gIGxlZnQ6IDQ1MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZWJhcyBOZXVlXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZTdiNjEzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudSB7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiA4MS4zdmg7XFxuICBtYXJnaW46IDAgYXV0bztcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiA1MHB4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudSAuZm9vZCB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDIzMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogNXB4IDFweCAxMHB4IC02cHggcmdiYSg1OSwgNTksIDU5LCAwLjc1KTtcXG59XFxuXFxuLm1lbnUgLmZvb2QtaW1hZ2Uge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNDBweDtcXG59XFxuXFxuLm1lbnUgLmZvb2QtbmFtZSB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgY29sb3I6ICM1NjYyNzA7XFxufVxcblxcbi5tZW51IC5mb29kLXByaWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmViYXMgTmV1ZVxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogI2VjNzM0MztcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogODEuM3ZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY3Zjc7XFxuICBib3gtc2hhZG93OiA1cHggMXB4IDEwcHggLTZweCByZ2JhKDU5LCA1OSwgNTksIDAuNzUpO1xcbn1cXG5cXG4uY29udGFjdCAuY29udGFjdC1pbWcge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4uY29udGFjdCAuY29udGFjdC1pbmZvIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyAuY29udGFjdC10aXRsZSB7XFxuICB3aWR0aDogMjByZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICNlYzczNDM7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJnZXR0ZVxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDI3cHg7XFxufVxcblxcbi5jb250YWN0LWluZm8gcCB7XFxuICB3aWR0aDogMjByZW07XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjb2xvcjogIzU2NjI3MDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogOTglO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTY3MDQxO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogIzU2NjI3MDtcXG59XFxuXFxuZm9vdGVyIC5pbmZvIHtcXG4gIHdpZHRoOiA0MzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XFxufVxcblxcbi5pbmZvIC5zb2NpYWwtbWVkaWEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW46IDJweDtcXG4gIG9wYWNpdHk6IDgwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmluZm8gLnNvY2lhbC1tZWRpYTpob3ZlciB7XFxuICBvcGFjaXR5OiAxMDAlO1xcbn1cXG5cXG4uaW5mbyAudGl0bGUtMiB7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJnZXR0ZVxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBjb2xvcjogI2VjNzM0MztcXG59XFxuXFxuZm9vdGVyIC5jcmVkaXRzIHtcXG4gIHdpZHRoOiAyMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5jcmVkaXRzIC5tYWRlLWJ5IHtcXG4gIG1hcmdpbi1yaWdodDogN3B4O1xcbn1cXG5cXG4uY3JlZGl0cyAuZ2l0aHViLWljb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDNweDtcXG59XFxuXFxuLmNyZWRpdHMgYSB7XFxuICBjb2xvcjogI2VjNzM0MztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNyZWRpdHMgYTpob3ZlciB7XFxuICBjb2xvcjogI2M3NjAzODtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osbURBQXFDO0VBQ3JDLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsY0FBYzs7RUFFZCxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1EQUF1QztFQUN2QywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q291cmdldHRlJmZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiA5OCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbmhlYWRlciAudGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyZ2V0dGVcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6ICNlYzczNDM7XFxufVxcblxcbmhlYWRlciAubmF2QmFyIHtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuXFxuLm5hdkJhciAudGFicyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdkJhciAudGFicyAudGFiIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi50YWIgLmJ0biB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGNvbG9yOiAjNTY2MjcwO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhYiAuYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjYmI1NzMwO1xcbn1cXG5cXG4uaG9tZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODEuM3ZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtYmcge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvYnJlYWQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogNXB4IDFweCAxMHB4IC02cHggcmdiYSg1OSwgNTksIDU5LCAwLjc1KTtcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDExMHB4O1xcbiAgbGVmdDogNDUwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkJlYmFzIE5ldWVcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNlN2I2MTM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZW51IHtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDgxLjN2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDUwcHg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51IC5mb29kIHtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMjMwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiA1cHggMXB4IDEwcHggLTZweCByZ2JhKDU5LCA1OSwgNTksIDAuNzUpO1xcbn1cXG5cXG4ubWVudSAuZm9vZC1pbWFnZSB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbn1cXG5cXG4ubWVudSAuZm9vZC1uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogIzU2NjI3MDtcXG59XFxuXFxuLm1lbnUgLmZvb2QtcHJpY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZWJhcyBOZXVlXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjZWM3MzQzO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiA4MS4zdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjdmNztcXG4gIGJveC1zaGFkb3c6IDVweCAxcHggMTBweCAtNnB4IHJnYmEoNTksIDU5LCA1OSwgMC43NSk7XFxufVxcblxcbi5jb250YWN0IC5jb250YWN0LWltZyB7XFxuICB3aWR0aDogNDAlO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9jb250YWN0LmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLmNvbnRhY3QgLmNvbnRhY3QtaW5mbyB7XFxuICB3aWR0aDogNzAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWluZm8gLmNvbnRhY3QtdGl0bGUge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiAjZWM3MzQzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyZ2V0dGVcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAyN3B4O1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHAge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY29sb3I6ICM1NjYyNzA7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDk4JTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2NzA0MTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6ICM1NjYyNzA7XFxufVxcblxcbmZvb3RlciAuaW5mbyB7XFxuICB3aWR0aDogNDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xcbn1cXG5cXG4uaW5mbyAuc29jaWFsLW1lZGlhIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luOiAycHg7XFxuICBvcGFjaXR5OiA4MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbmZvIC5zb2NpYWwtbWVkaWE6aG92ZXIge1xcbiAgb3BhY2l0eTogMTAwJTtcXG59XFxuXFxuLmluZm8gLnRpdGxlLTIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyZ2V0dGVcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgY29sb3I6ICNlYzczNDM7XFxufVxcblxcbmZvb3RlciAuY3JlZGl0cyB7XFxuICB3aWR0aDogMjMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uY3JlZGl0cyAubWFkZS1ieSB7XFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXG59XFxuXFxuLmNyZWRpdHMgLmdpdGh1Yi1pY29uIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxufVxcblxcbi5jcmVkaXRzIGEge1xcbiAgY29sb3I6ICNlYzczNDM7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jcmVkaXRzIGE6aG92ZXIge1xcbiAgY29sb3I6ICNjNzYwMzg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IGZhY2Vib29rIGZyb20gJy9zcmMvYXNzZXRzL2ZhY2Vib29rLWljb24uc3ZnJztcbmltcG9ydCBpbnN0YWdyYW0gZnJvbSAnL3NyYy9hc3NldHMvaW5zdGFncmFtLWljb24uc3ZnJztcbmltcG9ydCBlbWFpbCBmcm9tICcvc3JjL2Fzc2V0cy9lbWFpbC1pY29uLnN2Zyc7XG5pbXBvcnQgZ2l0aHViIGZyb20gJy9zcmMvYXNzZXRzL2dpdGh1Yi5zdmcnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJMYSBCb3VsYW5nw6hyZVwiO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZCYXJcIik7XG5cbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdGFicy5jbGFzc0xpc3QuYWRkKFwidGFic1wiKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKHRhYnMpO1xuXG4gIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGhvbWVUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiLCBcImhvbWVUYWJcIik7XG4gIHRhYnMuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiaG9tZUJ0blwiKTtcbiAgaG9tZVRhYi5hcHBlbmRDaGlsZChob21lQnRuKTtcblxuICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIiwgXCJtZW51VGFiXCIpO1xuICB0YWJzLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51QnRuLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcIm1lbnVCdG5cIik7XG4gIG1lbnVUYWIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbiAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIsIFwiY29udGFjdFRhYlwiKTtcbiAgdGFicy5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJjb250YWN0QnRuXCIpO1xuICBjb250YWN0VGFiLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuXG4gIGNvbnN0IGZhY2Vib29rSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGZhY2Vib29rSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZmFjZWJvb2spO1xuICBmYWNlYm9va0ljb24uY2xhc3NMaXN0LmFkZChcInNvY2lhbC1tZWRpYVwiKTtcbiAgaW5mby5hcHBlbmRDaGlsZChmYWNlYm9va0ljb24pO1xuXG4gIGNvbnN0IGluc3RhZ3JhbUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbnN0YWdyYW1JY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbnN0YWdyYW0pO1xuICBpbnN0YWdyYW1JY29uLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtbWVkaWFcIik7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5zdGFncmFtSWNvbik7XG5cbiAgY29uc3QgZW1haWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZW1haWxJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBlbWFpbCk7XG4gIGVtYWlsSWNvbi5jbGFzc0xpc3QuYWRkKFwic29jaWFsLW1lZGlhXCIpO1xuICBpbmZvLmFwcGVuZENoaWxkKGVtYWlsSWNvbik7XG5cbiAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZTIudGV4dENvbnRlbnQgPSBcIkxhIEJvdWxhbmfDqHJlXCI7XG4gIHRpdGxlMi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtMlwiKTtcbiAgaW5mby5hcHBlbmRDaGlsZCh0aXRsZTIpO1xuXG4gIGNvbnN0IHJpZ2h0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICByaWdodHMudGV4dENvbnRlbnQgPSBcIjIwMjEgwqkgQWxsIHJpZ2h0cyByZXNlcnZlZC5cIjtcbiAgaW5mby5hcHBlbmRDaGlsZChyaWdodHMpO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICBjb25zdCBjcmVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3JlZGl0cy5jbGFzc0xpc3QuYWRkKFwiY3JlZGl0c1wiKTtcblxuICBjb25zdCBtYWRlQnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbWFkZUJ5LnRleHRDb250ZW50ID0gXCJNYWRlIGJ5XCI7XG4gIG1hZGVCeS5jbGFzc0xpc3QuYWRkKFwibWFkZS1ieVwiKTtcbiAgY3JlZGl0cy5hcHBlbmRDaGlsZChtYWRlQnkpO1xuXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBnaXRodWJJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBnaXRodWIpO1xuICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoXCJnaXRodWItaWNvblwiKTtcbiAgY3JlZGl0cy5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcblxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1YkxpbmsudGV4dENvbnRlbnQgPSBcImx1aXpnbWFjZWRvXCI7XG4gIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9sdWl6Z21hY2Vkb1wiKTtcbiAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gIGNyZWRpdHMuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWRpdHMpO1xuXG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgeyBIZWFkZXIsIEZvb3RlciB9O1xuIiwiZXhwb3J0IGNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcblxuICBjb25zdCBjb250YWN0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29udGFjdEltZy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pbWdcIik7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEltZyk7XG5cbiAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pbmZvXCIpO1xuXG4gIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gXCJMYSBCb3VsYW5nw6hyZVwiO1xuICBjb250YWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtdGl0bGVcIik7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG5cbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCJTb3V0aCBNZWxib3VybmUgNTUzMiBBdXN0cmFsaWFcIjtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGhvbmUudGV4dENvbnRlbnQgPSBcIlBob25lOiArNjEgNSA1NTU1IDEyMzRcIjtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQocGhvbmUpO1xuXG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVtYWlsLnRleHRDb250ZW50ID0gXCJFbWFpbDogbGFib3VsYW5nZXJlQHRvcC5jb21cIjtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xuXG4gIHJldHVybiBjb250YWN0O1xufTtcbiIsImV4cG9ydCBjb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbiAgY29uc3QgaG9tZUJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZUJnLmNsYXNzTGlzdC5hZGQoXCJob21lLWJnXCIpO1xuICBob21lLmFwcGVuZENoaWxkKGhvbWVCZyk7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gXCJHb29kIGJyZWFkIGZvciBhIGdvb2QgZGF5XCI7XG4gIHN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzdWJ0aXRsZVwiKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG5cbiAgcmV0dXJuIGhvbWU7XG59O1xuIiwiaW1wb3J0IGJhZ3VldHRlIGZyb20gJy9zcmMvYXNzZXRzL2JhZ3VldHRlLnBuZyc7XG5pbXBvcnQgZWNsYWlyIGZyb20gJy9zcmMvYXNzZXRzL2VjbGFpci5wbmcnO1xuaW1wb3J0IG11ZmZpbiBmcm9tICcvc3JjL2Fzc2V0cy9tdWZmaW4ucG5nJztcbmltcG9ydCBhcHBsZVBpZSBmcm9tICcvc3JjL2Fzc2V0cy9hcHBsZS1waWUucG5nJztcbmltcG9ydCBhbmdlbCBmcm9tICcvc3JjL2Fzc2V0cy9hbmdlbC5wbmcnO1xuaW1wb3J0IGNvZmZlIGZyb20gJy9zcmMvYXNzZXRzL2NvZmZlLnBuZyc7XG5cbmV4cG9ydCBjb25zdCBNZW51ID0gKCkgPT4ge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgY29uc3QgY3JlYXRlSXRlbSA9IChpbWFnZSwgbmFtZSwgcHJpY2UpID0+IHtcbiAgICBjb25zdCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb29kLmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpO1xuXG4gICAgY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBmb29kSW1hZ2Uuc3JjID0gaW1hZ2U7XG4gICAgZm9vZEltYWdlLmNsYXNzTGlzdC5hZGQoXCJmb29kLWltYWdlXCIpO1xuXG4gICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb29kTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgZm9vZE5hbWUuY2xhc3NMaXN0LmFkZChcImZvb2QtbmFtZVwiKTtcblxuICAgIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZvb2RQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuICAgIGZvb2RQcmljZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1wcmljZVwiKTtcblxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoZm9vZEltYWdlKTtcbiAgICBmb29kLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgICBmb29kLmFwcGVuZENoaWxkKGZvb2RQcmljZSk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKGZvb2QpO1xuICB9O1xuXG4gIGNvbnN0IGl0ZW1zID0gW1xuICAgIHsgaW1hZ2U6IGJhZ3VldHRlLCBuYW1lOiBcIkJhZ3VldHRlXCIsIHByaWNlOiBcIiQgNS4wMFwiIH0sXG4gICAgeyBpbWFnZTogZWNsYWlyLCBuYW1lOiBcIkVjbGFpclwiLCBwcmljZTogXCIkIDIuOTlcIiB9LFxuICAgIHsgaW1hZ2U6IG11ZmZpbiwgbmFtZTogXCJNdWZmaW5cIiwgcHJpY2U6IFwiJCAxLjUwXCIgfSxcbiAgICB7IGltYWdlOiBhcHBsZVBpZSwgbmFtZTogXCJBcHBsZSBQaWVcIiwgcHJpY2U6IFwiJCA5Ljc5XCIgfSxcbiAgICB7XG4gICAgICBpbWFnZTogYW5nZWwsXG4gICAgICBuYW1lOiBcIkNob2NvbGF0ZSBBbmdlbFwiLFxuICAgICAgcHJpY2U6IFwiJCA0LjQ5XCIsXG4gICAgfSxcbiAgICB7IGltYWdlOiBjb2ZmZSwgbmFtZTogXCJDb2ZmZVwiLCBwcmljZTogXCIkIDMuNzlcIiB9LFxuICBdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBjcmVhdGVJdGVtKGl0ZW1zW2ldLmltYWdlLCBpdGVtc1tpXS5uYW1lLCBpdGVtc1tpXS5wcmljZSk7XG4gIH1cblxuICByZXR1cm4gbWVudTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFzZS5qc1wiO1xuaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS5qc1wiO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudS5qc1wiO1xuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY29udGFjdC5qc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5mdW5jdGlvbiByZW5kZXIoaXRlbSkge1xuICBjb250ZW50LmFwcGVuZENoaWxkKEhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChGb290ZXIoKSk7XG59XG5cbnJlbmRlcihIb21lKCkpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IHRhYiA9IGUudGFyZ2V0O1xuICBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucyhcImhvbWVCdG5cIikpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgcmVuZGVyKEhvbWUoKSk7XG4gIH0gZWxzZSBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnVCdG5cIikpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgcmVuZGVyKE1lbnUoKSk7XG4gIH0gZWxzZSBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucyhcImNvbnRhY3RCdG5cIikpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgcmVuZGVyKENvbnRhY3QoKSk7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==