webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Eventos.js":
/*!*******************************!*\
  !*** ./components/Eventos.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Evento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Evento */ "./components/Evento.js");
var _jsxFileName = "/Users/joelg/Desktop/bitcoinapp/components/Eventos.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Eventos = function Eventos(props) {
  var eventos = props.eventos.eventos;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, eventos.map(function (evento) {
    return __jsx(_Evento__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: evento.venue_id,
      evento: evento,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Eventos);

/***/ })

})
//# sourceMappingURL=index.js.62a642ef006aa2cf4bee.hot-update.js.map