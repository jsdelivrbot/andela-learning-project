webpackHotUpdate(0,{

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(41);
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



/* harmony default export */ __webpack_exports__["a"] = ({
	data: function () {
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
			this.entry.name = val + ' ' + this.lastName;
		},
		last_name: function (val) {
			this.entry.name = this.firstName + ' ' + val;
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
					swal('success');
				} else {
					let errors = "";

					for (var i = 0; i < e.data.errors.length; i++) {
						errors += e.data.errors[i].msg + "\n";
					}
					console.warn(e.data);
					swal(errors);
				}
			});
		}
	}
});

/***/ })

})