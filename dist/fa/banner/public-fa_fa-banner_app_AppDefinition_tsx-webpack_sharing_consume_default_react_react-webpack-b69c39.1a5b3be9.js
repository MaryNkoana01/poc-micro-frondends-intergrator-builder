"use strict";
(self["webpackChunkmenu"] = self["webpackChunkmenu"] || []).push([["public-fa_fa-banner_app_AppDefinition_tsx-webpack_sharing_consume_default_react_react-webpack-b69c39"],{

/***/ "./public-fa/fa-banner/app/App.tsx":
/*!*****************************************!*\
  !*** ./public-fa/fa-banner/app/App.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?e042");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _mtnkente_paragon_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mtnkente/paragon-foundation */ "./node_modules/@mtnkente/paragon-foundation/dist/index.esm.js");
/* harmony import */ var _mtnkente_paragon_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mtnkente/paragon-buttons */ "./node_modules/@mtnkente/paragon-buttons/dist/index.esm.js");




const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
    theme: (0,_mtnkente_paragon_foundation__WEBPACK_IMPORTED_MODULE_1__.designTokens)(_mtnkente_paragon_foundation__WEBPACK_IMPORTED_MODULE_1__.Platform.MOMO)[_mtnkente_paragon_foundation__WEBPACK_IMPORTED_MODULE_1__.Variant.LIGHT]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mtnkente_paragon_buttons__WEBPACK_IMPORTED_MODULE_2__.StandardButton, {
    $variant: "primary",
    label: "Click me"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mtnkente_paragon_foundation__WEBPACK_IMPORTED_MODULE_1__.MTNBrighterSans, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mtnkente_paragon_foundation__WEBPACK_IMPORTED_MODULE_1__.WorkSans, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mtnkente_paragon_foundation__WEBPACK_IMPORTED_MODULE_1__.Reset, null)));
};

/***/ }),

/***/ "./public-fa/fa-banner/app/AppDefinition.tsx":
/*!***************************************************!*\
  !*** ./public-fa/fa-banner/app/AppDefinition.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?e042");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_feature_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/feature-app-service */ "./public-fa/fa-banner/app/services/feature-app-service.tsx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./public-fa/fa-banner/app/App.tsx");
// DO not chnage anything (rename)




const FeatureHubAppDefinition = {
  dependencies: {
    featureServices: {
      'test:hello-world-service': '1.0.0'
    }
  },
  ownFeatureServiceDefinitions: [_services_feature_app_service__WEBPACK_IMPORTED_MODULE_1__.helloWorldServiceDefinition],
  create: _ref => {
    let {
      featureServices
    } = _ref;
    const helloService = featureServices['test:hello-world-service'];
    return {
      render: () => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__.App, null);
      }
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureHubAppDefinition);

/***/ }),

/***/ "./public-fa/fa-banner/app/services/feature-app-service.tsx":
/*!******************************************************************!*\
  !*** ./public-fa/fa-banner/app/services/feature-app-service.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   helloWorldServiceDefinition: () => (/* binding */ helloWorldServiceDefinition)
/* harmony export */ });
const helloWorldServiceDefinition = {
  id: 'test:hello-world-service',
  create: () => {
    return {
      '1.0.0': () => ({
        featureService: {
          get name() {
            return 'Hello World from Service';
          }
        }
      })
    };
  }
};

/***/ })

}]);