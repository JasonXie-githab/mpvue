global.webpackJsonp([2],{

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(94);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_ref_2_index_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6b277275_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_ref_2_index_vue__ = __webpack_require__(97);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(95)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6b277275"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_index_js_ref_2_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6b277275_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_index_js_ref_2_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b277275", Component.options)
  } else {
    hotAPI.reload("data-v-6b277275", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      motto: 'Hello World'
    };
  },


  methods: {
    pullingDown: function pullingDown() {
      console.log('pullingDown');
    },
    pullingUp: function pullingUp() {
      console.log('pullingUp');
    },
    confirm: function confirm() {
      var _this = this;

      this.$confirm({
        title: '提示',
        content: '123',
        success: function success() {
          _this.$message('success');
        },
        fail: function fail() {
          _this.$message('fail');
        }
      });
    },
    prompt: function prompt() {
      var _this2 = this;

      this.$prompt({
        title: '请输入手机号',
        content: '123',
        inputPattern: /^[1][3,4,5,7,8][0-9]{9}$/,
        inputErrorMessage: '手机号不正确',
        success: function success(res) {
          _this2.$message(res.value);
        },
        fail: function fail() {
          _this2.$message('fail');
        }
      });
    },
    showLoading: function showLoading() {
      this.$showLoading();
    },
    hideLoading: function hideLoading() {
      this.$hideLoading();
    },
    openMask: function openMask() {
      var _this3 = this;

      this.$openMask({
        closeOnClickMask: true,
        beforeClose: function beforeClose() {
          _this3.$message('beforeClose');
        }
      });
    },
    success: function success() {
      this.$success();
    },
    toHome: function toHome() {
      this.$go('home', {
        id: 1
      });
    },
    redirect: function redirect() {
      this.$redirect('home');
    },
    reLaunch: function reLaunch() {
      this.$reLaunch('home');
    },
    setStorage: function setStorage() {
      this.$setStorage('test', 'testStorage');
    },
    getStorage: function getStorage() {
      this.$message(this.$getStorage('test'));
    },
    removeStorage: function removeStorage() {
      this.$removeStorage('test');
    }
  }
});

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ms-page', {
    attrs: {
      "eventid": '12',
      "mpcomid": '0'
    },
    on: {
      "pullingDown": _vm.pullingDown,
      "pullingUp": _vm.pullingUp
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "button",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("confirm")]), _vm._v(" "), _c('div', {
    staticClass: "button",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.prompt
    }
  }, [_vm._v("prompt")]), _vm._v(" "), _c('div', {
    staticClass: "button",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.showLoading
    }
  }, [_vm._v("showLoading")]), _vm._v(" "), _c('div', {
    staticClass: "button",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.hideLoading
    }
  }, [_vm._v("hideLoading")]), _vm._v(" "), _c('div', {
    staticClass: "button",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.openMask
    }
  }, [_vm._v("openMask")]), _vm._v(" "), _c('div', {
    staticClass: "button",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.success
    }
  }, [_vm._v("success")]), _vm._v(" "), _c('div', {
    staticClass: "button",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.toHome
    }
  }, [_vm._v("go to home")]), _vm._v(" "), _c('div', {
    staticClass: "button",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.redirect
    }
  }, [_vm._v("redirect to home")]), _vm._v(" "), _c('div', {
    staticClass: "button",
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.reLaunch
    }
  }, [_vm._v("reLaunch to home")]), _vm._v(" "), _c('div', {
    staticClass: "button",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": _vm.setStorage
    }
  }, [_vm._v("setStorage")]), _vm._v(" "), _c('div', {
    staticClass: "button",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.getStorage
    }
  }, [_vm._v("getStorage")]), _vm._v(" "), _c('div', {
    staticClass: "button",
    attrs: {
      "eventid": '11'
    },
    on: {
      "click": _vm.removeStorage
    }
  }, [_vm._v("removeStorage")])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b277275", esExports)
  }
}

/***/ })

},[93]);
//# sourceMappingURL=main.js.map