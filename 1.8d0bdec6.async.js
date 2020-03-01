(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/pages/index.less":
/*!******************************!*\
  !*** ./src/pages/index.less ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container___rRDCW"};

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

__webpack_require__(/*! antd/es/col/style */ "./node_modules/antd/es/col/style/index.js");

var _col = _interopRequireDefault(__webpack_require__(/*! antd/es/col */ "./node_modules/antd/es/col/index.js"));

__webpack_require__(/*! antd/es/row/style */ "./node_modules/antd/es/row/style/index.js");

var _row = _interopRequireDefault(__webpack_require__(/*! antd/es/row */ "./node_modules/antd/es/row/index.js"));

__webpack_require__(/*! antd/es/card/style */ "./node_modules/antd/es/card/style/index.js");

var _card = _interopRequireDefault(__webpack_require__(/*! antd/es/card */ "./node_modules/antd/es/card/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _index = _interopRequireDefault(__webpack_require__(/*! ./index.less */ "./src/pages/index.less"));

var Meta = _card.default.Meta;
var links = [{
  title: 'Ant Design',
  href: 'https://ant.design/components/button-cn/',
  cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*mb-WQILTlSEAAAAAAAAAAABkARQnAQ',
  description: '业界第二的UI组件库'
}, {
  title: 'UMI',
  href: 'https://umijs.org/zh/guide/router.html#%E9%85%8D%E7%BD%AE%E5%BC%8F%E8%B7%AF%E7%94%B1',
  cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*I-ygS5prYksAAAAAAAAAAABkARQnAQ',
  description: '可插拔的企业级react应用框架'
}, {
  title: 'TypeScript',
  href: 'https://www.typescriptlang.org/docs/home.html',
  cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*MaL2SYtHPuMAAAAAAAAAAABkARQnAQ',
  description: '强类型的js'
}, {
  title: 'Lodash',
  href: 'https://lodash.com/docs',
  cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*PrLWSpmWZmIAAAAAAAAAAABkARQnAQ',
  description: 'js工具库'
}, {
  title: 'Wetrial 开发者文档',
  href: 'https://wetrial.github.io/wetrial-doc',
  cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*T_HeSIJ30IIAAAAAAAAAAABkARQnAQ',
  description: '包括代码规范、页面设计规范、教程等'
}, {
  title: 'Wetrial Core',
  href: 'https://wetrial.github.io/core',
  cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*yQqmQ514NNIAAAAAAAAAAABkARQnAQ',
  description: 'Wetrial的核心类库'
}, {
  title: 'Wetrial Component',
  href: 'https://wetrial.github.io/component',
  cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*Up8ARYnOd_AAAAAAAAAAAABkARQnAQ',
  description: 'Wetrial的通用组件库'
}, {
  title: 'Wetrial Hooks',
  href: 'https://wetrial.github.io/hooks',
  cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*ZhzDQLMyYlYAAAAAAAAAAABkARQnAQ',
  description: 'Wetrial的Hooks库'
}];
var colSpan = {
  xs: {
    span: 24
  },
  sm: {
    span: 12
  },
  md: {
    span: 8
  },
  lg: {
    span: 6
  },
  xl: {
    span: 4
  },
  xxl: {
    span: 4
  }
};

function _default() {
  return _react.default.createElement("div", {
    className: _index.default.container
  }, _react.default.createElement("h2", null, "\u8D44\u6599\u94FE"), _react.default.createElement(_row.default, {
    gutter: [16, 8]
  }, links.map(item => {
    return _react.default.createElement(_col.default, Object.assign({
      key: item.href
    }, colSpan), _react.default.createElement("a", {
      href: item.href,
      target: "_blank",
      rel: "noopener noreferrer"
    }, _react.default.createElement(_card.default, {
      hoverable: true,
      cover: _react.default.createElement("img", {
        style: {
          height: 150
        },
        alt: item.title,
        src: item.cover
      })
    }, _react.default.createElement(Meta, {
      title: item.title,
      description: item.description
    }))));
  })));
}

/***/ })

}]);