webpackHotUpdate(0,{

/***/ 63:
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


/* harmony default export */ __webpack_exports__["a"] = ({
	data: function () {
		return {
			students: null
		};
	},
	mounted: function () {
		__WEBPACK_IMPORTED_MODULE_0_axios___default()({
			method: 'get',
			url: '/api/v1/student/all'
		}).then(function (response) {
			this.students = response.data;
		}.bind(this));
	},
	methods: {
		delete_student: function (id) {
			swal({
				title: "Deleting Student",
				icon: "warning",
				text: "sure to delete?",
				cancel: {
					text: "Don't Delete",
					value: null,
					visible: true,
					className: "",
					closeModal: true
				},
				confirm: {
					text: "Yes, Delete",
					value: true,
					visible: true,
					className: "",
					closeModal: true
				}
			});
		}
	}
});

/***/ })

})