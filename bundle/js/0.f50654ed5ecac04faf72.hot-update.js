webpackHotUpdate(0,{

/***/ 60:
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


/* harmony default export */ __webpack_exports__["a"] = ({
	data: function () {
		return {
			students: null
		};
	},
	mounted: function () {
		// this.fetchStudents();
	},
	methods: {
		delete_student: function (id) {
			swal({
				title: "Deleting Student",
				icon: "warning",
				text: "sure to delete?",
				buttons: [true, "Yes, Delete"]
			}).then(function (e) {
				if (e) {
					__WEBPACK_IMPORTED_MODULE_0_axios___default()({
						url: '/api/v1/student/delete/' + id,
						method: 'delete'
					}).then(function (e) {
						if (e.data.status == 'success') {
							swal('Success', 'Student has been Deleted', 'success');
							this.fetchStudents();
						} else {
							swal("Error", 'An Error Occorred', 'error');
						}
					});
				}
			});
		},
		fetchStudents: function () {
			__WEBPACK_IMPORTED_MODULE_0_axios___default()({
				method: 'get',
				url: '/api/v1/student/all'
			}).then(function (response) {
				this.students = response.data;
			}.bind(this));
		}
	}
});

/***/ })

})