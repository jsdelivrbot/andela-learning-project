webpackHotUpdate(0,{

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_default_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_create_student_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_list_students_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_edit_student_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_router__ = __webpack_require__(62);








__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_6_vue_router__["a" /* default */]);

const routes = [{ path: '/home', component: __WEBPACK_IMPORTED_MODULE_1__components_default_vue__["a" /* default */] }, { path: '/', component: __WEBPACK_IMPORTED_MODULE_1__components_default_vue__["a" /* default */] }, { path: '/login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_vue__["a" /* default */] }, { path: '/student/create', component: __WEBPACK_IMPORTED_MODULE_3__components_create_student_vue__["a" /* default */] }, { path: '/student/all', component: __WEBPACK_IMPORTED_MODULE_4__components_list_students_vue__["a" /* default */] }, { path: '/student/edit/:id', component: __WEBPACK_IMPORTED_MODULE_5__components_edit_student_vue__["a" /* default */] }];

const router = new __WEBPACK_IMPORTED_MODULE_6_vue_router__["a" /* default */]({
	routes: routes
});

const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	router

}).$mount('#app');

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_edit_student_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17bbf568_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_edit_student_vue__ = __webpack_require__(65);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_edit_student_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17bbf568_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_edit_student_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/js/components/edit_student.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(1)
  hotAPI.install(__webpack_require__(3), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17bbf568", Component.options)
  } else {
    hotAPI.reload("data-v-17bbf568", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
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
	data: function () {
		current_student = this.$route.params.id;
		return {
			departments: null,
			first_name: null,
			last_name: null,
			entry: {
				name: this.full_name,
				address: null,
				department: null,
				reg_number: null
			}
		};
	},
	mounted: function () {
		__WEBPACK_IMPORTED_MODULE_0_axios___default()({
			url: '/api/v1/department/all',
			method: 'get'
		}).then(function (response) {
			this.departments = response.data.data;
		}.bind(this));
	},
	watch: {
		first_name: function (val) {
			this.entry.name = val + ' ' + this.last_name;
		},
		last_name: function (val) {
			this.entry.name = this.first_name + ' ' + val;
		}
	},
	methods: {
		submit: function () {
			__WEBPACK_IMPORTED_MODULE_0_axios___default()({
				url: '/api/v1/student/create',
				method: 'post',
				data: this.entry
			}).then(function (e) {
				if (e.data.status == 'success') {
					swal('Success', 'Record has been added', 'success');

					//Clear all textareas
					document.querySelector('textarea').value = '';

					document.querySelectorAll('input').forEach(e => {
						e.value = '';
					});
				} else {
					let errors = "";

					for (var i = 0; i < e.data.errors.length; i++) {
						errors += e.data.errors[i].msg + "\n";
					}
					console.warn(e.data);
					swal('Error', +errors, 'error');
				}
			});
		}
	}
});

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "padding-v" }, [
    _c(
      "div",
      { staticClass: "col-md-6 col-md-offset-3 padding-v" },
      [
        _c(
          "router-link",
          { staticClass: "btn btn-info", attrs: { to: "/student/all" } },
          [_vm._v("All Students")]
        ),
        _c("br"),
        _vm._v(" \n\t\t"),
        _c("div", { staticClass: "panel panel-default" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.first_name,
                      expression: "first_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Enter First Name" },
                  domProps: { value: _vm.first_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.first_name = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.last_name,
                      expression: "last_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Enter Last Name" },
                  domProps: { value: _vm.last_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.last_name = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.entry.reg_number,
                      expression: "entry.reg_number"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Reg. Number" },
                  domProps: { value: _vm.entry.reg_number },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.entry, "reg_number", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.entry.department,
                        expression: "entry.department"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.entry,
                          "department",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.departments, function(department) {
                    return _c(
                      "option",
                      { domProps: { value: department.id } },
                      [_vm._v(_vm._s(department.department_name))]
                    )
                  })
                )
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.entry.address,
                      expression: "entry.address"
                    }
                  ],
                  staticClass: "form-control one-whole",
                  attrs: { type: "text", placeholder: "Enter Address" },
                  domProps: { value: _vm.entry.address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.entry, "address", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info one-whole no-outline",
                    attrs: { type: "text" },
                    on: { click: _vm.submit }
                  },
                  [_vm._v(" Add Student ")]
                )
              ])
            ])
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h4", [_vm._v("Create Student")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(1)      .rerender("data-v-17bbf568", esExports)
  }
}

/***/ })

})