(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/layouts/index.tsx":
/*!*******************************!*\
  !*** ./src/layouts/index.tsx ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! antd/es/menu/style */ "./node_modules/antd/es/menu/style/index.js");

var _menu = _interopRequireDefault(__webpack_require__(/*! antd/es/menu */ "./node_modules/antd/es/menu/index.js"));

__webpack_require__(/*! antd/es/layout/style */ "./node_modules/antd/es/layout/style/index.js");

var _layout = _interopRequireDefault(__webpack_require__(/*! antd/es/layout */ "./node_modules/antd/es/layout/index.js"));

var _dva = __webpack_require__(/*! dva */ "./node_modules/dva/index.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _umi = __webpack_require__(/*! umi */ "./node_modules/umi/dist/index.esm.js");

var _style3 = _interopRequireDefault(__webpack_require__(/*! ./style.less */ "./src/layouts/style.less"));

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Header = _layout.default.Header,
    Content = _layout.default.Content,
    Footer = _layout.default.Footer;
var default_1 = class extends _react.default.PureComponent {
  constructor(props) {
    super(props);
    var dispatch = props.dispatch;
    dispatch({
      type: 'base/getApps'
    });
  }

  render() {
    var _this$props = this.props,
        location = _this$props.location,
        children = _this$props.children,
        base = _this$props.base;
    var name = base.name,
        apps = base.apps;
    var selectKey = "/".concat(location.pathname.split('/')[1]);
    return _react.default.createElement(_layout.default, {
      className: _style3.default.layout
    }, _react.default.createElement(Header, {
      style: {
        zIndex: 200
      }
    }, _react.default.createElement("div", {
      className: "logo"
    }), _react.default.createElement(_menu.default, {
      theme: "dark",
      mode: "horizontal",
      defaultSelectedKeys: ['home'],
      selectedKeys: [selectKey],
      style: {
        lineHeight: '64px'
      }
    }, _react.default.createElement(_menu.default.Item, {
      key: "/"
    }, _react.default.createElement(_umi.Link, {
      to: "/"
    }, name)), apps.map(app => {
      return _react.default.createElement(_menu.default.Item, {
        key: app.base
      }, _react.default.createElement(_umi.Link, {
        to: app.base
      }, app.name));
    }))), _react.default.createElement(Content, {
      className: _style3.default.content
    }, selectKey === '/' ? children : null, apps.length ? _react.default.createElement("div", {
      id: "root-subapp-container"
    }) : null), _react.default.createElement(Footer, {
      className: _style3.default.footer
    }, "Wetrial Dev \u00A92020 Created by Wetrial"));
  }

};
default_1 = __decorate([(0, _dva.connect)((_ref) => {
  var base = _ref.base;
  return {
    base
  };
})], default_1);
var _default = default_1;
exports.default = _default;

/***/ }),

/***/ "./src/layouts/style.less":
/*!********************************!*\
  !*** ./src/layouts/style.less ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"layout":"layout___3CCE0","logo":"logo___3w77W","content":"content___3mo4D","breadcrumb":"breadcrumb___2-SCQ","footer":"footer___2_3U_"};

/***/ })

}]);