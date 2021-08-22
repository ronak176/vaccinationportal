(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+S/7":
/*!*************************************************************************!*\
  !*** ./src/app/charts/vaccination-chart/vaccination-chart.component.ts ***!
  \*************************************************************************/
/*! exports provided: VaccinationChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccinationChartComponent", function() { return VaccinationChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/employee/employee.service */ "5W1o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "LPYB");





function VaccinationChartComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.pieChartData)("labels", ctx_r0.pieChartLabels)("chartType", ctx_r0.pieChartType)("options", ctx_r0.pieChartOptions)("plugins", ctx_r0.pieChartPlugins)("legend", ctx_r0.pieChartLegend)("options", ctx_r0.options);
} }
class VaccinationChartComponent {
    constructor(service) {
        this.service = service;
        this.pieChartOptions = {
            responsive: true,
        };
        this.firstDoseCount = 0;
        this.secondDoseCount = 0;
        this.noDoseCount = 0;
        this.isDataAvailable = false;
        this.pieChartLabels = ['Both done', 'First done', 'Not Vaccinated'];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartPlugins = [];
        this.options = {
            legend: {
                position: 'bottom',
            },
        };
    }
    ngOnInit() {
        this.service.firstDoseValueChange.subscribe(res => this.firstDoseCount = res);
        this.service.secondDoseValueChange.subscribe(res => this.secondDoseCount = res);
        this.service.noDoseValueChange.subscribe(res => this.noDoseCount = res);
        setTimeout(() => this.setData(this.firstDoseCount, this.secondDoseCount, this.noDoseCount), 3000);
    }
    setData(fd, sd, nd) {
        this.pieChartData = [sd, fd, nd];
        this.isDataAvailable = true;
    }
}
VaccinationChartComponent.ɵfac = function VaccinationChartComponent_Factory(t) { return new (t || VaccinationChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"])); };
VaccinationChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VaccinationChartComponent, selectors: [["app-vaccination-chart"]], decls: 1, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "space-evenly center", "fxLayoutGap", "60px", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "space-evenly center", "fxLayoutGap", "60px"], [1, "chartContainer", 2, "display", "block"], ["baseChart", "", 3, "data", "labels", "chartType", "options", "plugins", "legend"]], template: function VaccinationChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VaccinationChartComponent_div_0_Template, 3, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataAvailable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["BaseChartDirective"]], styles: [".header[_ngcontent-%COMP%]{\r\n    font-size: 1.5em;\r\n    font-weight: 600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhY2NpbmF0aW9uLWNoYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InZhY2NpbmF0aW9uLWNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ronak singhatwadia\Documents\covid-vaccination-portal\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** canvas (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3PL+":
/*!**************************************************************************!*\
  !*** ./src/app/employee-details-page/employee-details-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: EmployeeDetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsPageComponent", function() { return EmployeeDetailsPageComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/employee/employee.service */ "5W1o");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



















function EmployeeDetailsPageComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_ng_template_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "vaccines");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Vaccination");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_span_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_span_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_mat_list_item_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Date of First Dose : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r4.employee == null ? null : ctx_r4.employee.firstDate, " ");
} }
function EmployeeDetailsPageComponent_mat_list_item_101_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "First Dose Certificate : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployeeDetailsPageComponent_mat_list_item_101_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.firstDoseCertificate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_span_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_span_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_mat_list_item_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Date of Second Dose : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r8.employee == null ? null : ctx_r8.employee.secondDate, " ");
} }
function EmployeeDetailsPageComponent_mat_list_item_114_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Second Dose Certificate : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployeeDetailsPageComponent_mat_list_item_114_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r23.secondDoseCertificate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_span_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_span_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.employee == null ? null : ctx_r11.employee.vaccine);
} }
function EmployeeDetailsPageComponent_ng_template_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "coronavirus");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Diagnosis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_span_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_span_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_mat_list_item_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Date of Diagnosis : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r15.employee == null ? null : ctx_r15.employee.dateOfDiagnosis);
} }
function EmployeeDetailsPageComponent_mat_list_item_138_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_mat_list_item_138_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_mat_list_item_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Symptoms : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, EmployeeDetailsPageComponent_mat_list_item_138_span_5_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, EmployeeDetailsPageComponent_mat_list_item_138_span_6_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r16.employee == null ? null : ctx_r16.employee.symptoms) === "yesSymptoms");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r16.employee == null ? null : ctx_r16.employee.symptoms) === "noSymptoms");
} }
function EmployeeDetailsPageComponent_mat_list_item_140_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_mat_list_item_140_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_mat_list_item_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Tested Negative : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, EmployeeDetailsPageComponent_mat_list_item_140_span_4_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, EmployeeDetailsPageComponent_mat_list_item_140_span_5_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r17.employee == null ? null : ctx_r17.employee.testedNegative) === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r17.employee == null ? null : ctx_r17.employee.testedNegative) === false);
} }
function EmployeeDetailsPageComponent_mat_list_item_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Date of Testing Negative : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.employee == null ? null : ctx_r18.employee.dateNegative);
} }
function EmployeeDetailsPageComponent_mat_list_item_144_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Negative Test Certificate :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployeeDetailsPageComponent_mat_list_item_144_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r29.negativeTestCertificate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_mat_list_item_146_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_mat_list_item_146_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeeDetailsPageComponent_mat_list_item_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Positive in Family : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, EmployeeDetailsPageComponent_mat_list_item_146_span_5_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, EmployeeDetailsPageComponent_mat_list_item_146_span_6_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r20.employee == null ? null : ctx_r20.employee.positiveFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx_r20.employee == null ? null : ctx_r20.employee.positiveFamily));
} }
class EmployeeDetailsPageComponent {
    constructor(af, breakpointObserver, route, service, firestore) {
        this.af = af;
        this.breakpointObserver = breakpointObserver;
        this.route = route;
        this.service = service;
        this.firestore = firestore;
        this.cardLayout = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ matches }) => {
            if (matches) {
                return {
                    columns: 1,
                    miniCard: { cols: 1, rows: 1 },
                    chart: { cols: 1, rows: 5 },
                    table: { cols: 1, rows: 4 },
                };
            }
            return {
                columns: 4,
                miniCard: { cols: 1, rows: 1 },
                chart: { cols: 3, rows: 3 },
                table: { cols: 1, rows: 3 },
            };
        }));
    }
    ngOnInit() {
        this.route.params.subscribe(params => this.id = params.id);
        this.firestore.collection('employees').doc(this.id).valueChanges().subscribe(res => {
            this.employee = res;
        });
    }
    getAge(dob) {
        var dateMomentObject = moment__WEBPACK_IMPORTED_MODULE_2__(dob, "DD/MM/YYYY");
        var dateObject = dateMomentObject.toDate();
        var years = moment__WEBPACK_IMPORTED_MODULE_2__().diff(dateObject, 'years', false);
        return years;
    }
    firstDoseCertificate() {
        const ref = this.af.ref(`${'/firstDoseCertificates'}/${this.employee.name}`);
        ref.getDownloadURL().subscribe(res => {
            window.open(res);
        });
    }
    secondDoseCertificate() {
        const ref = this.af.ref(`${'/secondDoseCertificates'}/${this.employee.name}`);
        ref.getDownloadURL().subscribe(res => {
            window.open(res);
        });
    }
    negativeTestCertificate() {
        const ref = this.af.ref(`${'/negativeReports'}/${this.employee.name}`);
        ref.getDownloadURL().subscribe(res => {
            window.open(res);
        });
    }
}
EmployeeDetailsPageComponent.ɵfac = function EmployeeDetailsPageComponent_Factory(t) { return new (t || EmployeeDetailsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"])); };
EmployeeDetailsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EmployeeDetailsPageComponent, selectors: [["app-employee-details-page"]], decls: 147, vars: 42, consts: [[1, "grid-container"], [1, "mat-h1"], ["rowHeight", "200px", 3, "cols"], [3, "colspan", "rowspan"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "container"], ["src", "../../../assets/employee.jpg", "alt", "", 1, "profile-image"], [1, "profile-name"], [1, "profile-role"], [1, "profile-department"], [1, "dashboard-card"], [1, "dashboard-card-content"], ["mat-align-tabs", "center"], ["mat-tab-label", ""], [4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "3px", "fxLayoutAlign", "center center"], ["mat-raised-button", "", 3, "click"]], template: function EmployeeDetailsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Employee Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "app-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Role :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Department :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-tab-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, EmployeeDetailsPageComponent_ng_template_29_Template, 6, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Employee ID : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Gender : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Age : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Mobile : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Location : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](88, EmployeeDetailsPageComponent_ng_template_88_Template, 6, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "First Dose : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, EmployeeDetailsPageComponent_span_95_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](96, EmployeeDetailsPageComponent_span_96_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](99, EmployeeDetailsPageComponent_mat_list_item_99_Template, 7, 1, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](101, EmployeeDetailsPageComponent_mat_list_item_101_Template, 10, 0, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Second Dose : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](108, EmployeeDetailsPageComponent_span_108_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](109, EmployeeDetailsPageComponent_span_109_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](112, EmployeeDetailsPageComponent_mat_list_item_112_Template, 7, 1, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](114, EmployeeDetailsPageComponent_mat_list_item_114_Template, 10, 0, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Vaccine Taken : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](121, EmployeeDetailsPageComponent_span_121_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](122, EmployeeDetailsPageComponent_span_122_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](125, EmployeeDetailsPageComponent_ng_template_125_Template, 6, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, " Diagnosed : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](132, EmployeeDetailsPageComponent_span_132_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](133, EmployeeDetailsPageComponent_span_133_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](136, EmployeeDetailsPageComponent_mat_list_item_136_Template, 8, 1, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](138, EmployeeDetailsPageComponent_mat_list_item_138_Template, 8, 2, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](140, EmployeeDetailsPageComponent_mat_list_item_140_Template, 6, 2, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](142, EmployeeDetailsPageComponent_mat_list_item_142_Template, 8, 1, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](144, EmployeeDetailsPageComponent_mat_list_item_144_Template, 10, 0, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](146, EmployeeDetailsPageComponent_mat_list_item_146_Template, 8, 2, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        let tmp_1_0 = null;
        let tmp_2_0 = null;
        let tmp_6_0 = null;
        let tmp_7_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("cols", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 32, ctx.cardLayout)) == null ? null : tmp_0_0.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 34, ctx.cardLayout)) == null ? null : tmp_1_0.table.cols)("rowspan", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 36, ctx.cardLayout)) == null ? null : tmp_2_0.table.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.employee == null ? null : ctx.employee.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.employee == null ? null : ctx.employee.role, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.employee == null ? null : ctx.employee.department, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 38, ctx.cardLayout)) == null ? null : tmp_6_0.chart.cols)("rowspan", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 40, ctx.cardLayout)) == null ? null : tmp_7_0.chart.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.employee == null ? null : ctx.employee.empid, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.employee == null ? null : ctx.employee.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.employee == null ? null : ctx.employee.gender, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getAge(ctx.employee == null ? null : ctx.employee.dob), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.employee == null ? null : ctx.employee.mobile, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.employee == null ? null : ctx.employee.location, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.firstDose) === "yesFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.firstDose) === "noFirst" || (ctx.employee == null ? null : ctx.employee.firstDose) === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.firstDose) === "yesFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.firstDose) === "yesFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.secondDose) === "yesSecond");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.secondDose) === "noSecond" || (ctx.employee == null ? null : ctx.employee.secondDose) === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.secondDose) === "yesSecond");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.secondDose) === "yesSecond");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.vaccine) === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.vaccine) !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.diagnosed) === "yesDiagnosed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.diagnosed) === "noDiagnosed" || (ctx.employee == null ? null : ctx.employee.diagnosed) === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.diagnosed) === "yesDiagnosed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.diagnosed) === "yesDiagnosed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.diagnosed) === "yesDiagnosed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.diagnosed) === "yesDiagnosed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.diagnosed) === "yesDiagnosed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.diagnosed) === "yesDiagnosed");
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTile"], _card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabLabel"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 50%;\n  margin: 0 auto 40px auto;\n  display: block;\n}\n\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: 500;\n  margin: 0 auto 20px auto;\n}\n\n.profile-role[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  padding-bottom: 5px;\n}\n\n.profile-role[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: 600;\n  padding-bottom: 25px;\n}\n\n.profile-department[_ngcontent-%COMP%] {\n  font-weight: lighter;\n}\n\n.profile-department[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  font-weight: 400;\n}\n\n.status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  font-weight: 400;\n}\n\n.vaccine-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  font-weight: 400;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  \n  margin : 16px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  min-width: 50px;\n  max-width: 900px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n\n.edit-details-bar[_ngcontent-%COMP%]{\n  background : #00adb5;\n  color : #ffffff;\n}\n\n.submit-button[_ngcontent-%COMP%]{\n  background: #00adb5;\n  color : #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLWRldGFpbHMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTs7Ozs7eUJBS3VCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUdBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQiIsImZpbGUiOiJlbXBsb3llZS1kZXRhaWxzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBib3R0b206IDE1cHg7XG59XG5cbi5tb3JlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvIDQwcHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9maWxlLW5hbWUge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDAgYXV0byAyMHB4IGF1dG87XG59XG5cbi5wcm9maWxlLXJvbGUge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLnByb2ZpbGUtcm9sZSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuXG4ucHJvZmlsZS1kZXBhcnRtZW50IHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi5wcm9maWxlLWRlcGFydG1lbnQgc3BhbntcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnN0YXR1cyBzcGFue1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udmFjY2luZS1uYW1lIHNwYW57XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5tb3JlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7ICovXG4gIG1hcmdpbiA6IDE2cHg7XG59IFxuXG5tYXQtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxudGQge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi5lZGl0LWRldGFpbHMtYmFye1xuICBiYWNrZ3JvdW5kIDogIzAwYWRiNTtcbiAgY29sb3IgOiAjZmZmZmZmO1xufVxuXG4uc3VibWl0LWJ1dHRvbntcbiAgYmFja2dyb3VuZDogIzAwYWRiNTtcbiAgY29sb3IgOiAjZmZmZmZmO1xufVxuXG5cblxuXG5cblxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ 4:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "5W1o":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/employee/employee.service.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");




class EmployeeService {
    constructor(firestore) {
        this.firestore = firestore;
        this.eligibleCount = 0;
        this.nonEligibleCount = 0;
        this.pendingResponseCount = 0;
        this.firstDoseCount = 0;
        this.secondDoseCount = 0;
        this.noDoseCount = 0;
        this.testedNegativeCount = 0;
        this.diagnosedCount = 0;
        this.eligibleValueChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.nonEligibleValueChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.pendingValueChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.firstDoseValueChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.secondDoseValueChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.noDoseValueChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.testedNegativeValueChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.diagnosedValueChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getEmployees() {
        return this.firestore.collection('employees').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    eligibleChange(eligibleCount) {
        this.eligibleCount = eligibleCount;
        this.eligibleValueChange.next(this.eligibleCount);
    }
    nonEligibleChange(nonEligibleCount) {
        this.nonEligibleCount = nonEligibleCount;
        this.nonEligibleValueChange.next(this.nonEligibleCount);
    }
    pendingChange(pendingResponseCount) {
        this.pendingResponseCount = pendingResponseCount;
        this.pendingValueChange.next(this.pendingResponseCount);
    }
    firstDoseChange(firstDoseCount) {
        this.firstDoseCount = firstDoseCount;
        this.firstDoseValueChange.next(this.firstDoseCount);
    }
    secondDoseChange(secondDoseCount) {
        this.secondDoseCount = secondDoseCount;
        this.secondDoseValueChange.next(this.secondDoseCount);
    }
    noDoseChange(noDoseCount) {
        this.noDoseCount = noDoseCount;
        this.noDoseValueChange.next(this.noDoseCount);
    }
    testedNegativeChange(testedNegativeCount) {
        this.testedNegativeCount = testedNegativeCount;
        this.testedNegativeValueChange.next(this.testedNegativeCount);
    }
    diagnosedChange(diagnosedCount) {
        this.diagnosedCount = diagnosedCount;
        this.diagnosedValueChange.next(this.diagnosedCount);
    }
    selectEmployee(item) {
        this.selectedEmployee = item;
        console.log(this.selectedEmployee);
    }
}
EmployeeService.ɵfac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"])); };
EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EmployeeService, factory: EmployeeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "9Ff2":
/*!***********************************************************************!*\
  !*** ./src/app/components/diagnosis-form/diagnosis-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: DiagnosisFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosisFormComponent", function() { return DiagnosisFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-pdf-viewer */ "IkSl");


















function DiagnosisFormComponent_mat_horizontal_stepper_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_22_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_22_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-step", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_22_ng_template_2_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "When did you contract Covid?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Choose a date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_22_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r16.diagnosisDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "mat-datepicker-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-datepicker", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_22_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r18.clickDateOfDiagnosis(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r5.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r5.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r15)("ngModel", ctx_r5.diagnosisDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r5.diagnosisDate === undefined);
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_23_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_23_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-step", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_23_ng_template_2_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Do you currently have any symptoms related to Covid?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-radio-group", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_23_Template_mat_radio_group_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r20.newDetails.symptoms = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-radio-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-radio-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_23_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r22.clickSymptoms(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r6.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r6.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r6.newDetails.symptoms);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r6.newDetails.symptoms === undefined);
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_24_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_24_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-step", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_24_ng_template_2_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Have you tested negative for Covid?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-radio-group", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_24_Template_mat_radio_group_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r24.newDetails.testedNegative = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-radio-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-radio-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_24_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r26.clickTestedNegative(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r7.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r7.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.newDetails.testedNegative);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r7.newDetails.testedNegative === undefined);
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_25_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_25_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-step", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_25_ng_template_2_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "When did you test negative for Covid?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Choose a date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_25_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r29.negativeDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "mat-datepicker-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-datepicker", null, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_25_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r31.clickDateNegative(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r8.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r8.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r28)("ngModel", ctx_r8.negativeDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r8.negativeDate === undefined);
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_26_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_26_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "File Uploaded Successfully!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_26_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-step", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_26_ng_template_2_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Please upload your negative report.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_26_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r34.upload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_26_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r36.uploadReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_26_div_13_Template, 3, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r9.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r9.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r9.uploadValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.uploadSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r9.uploadSuccess);
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_27_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_27_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-step", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_27_ng_template_2_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Is any of your family member currently Covid Positive?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-radio-group", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_27_Template_mat_radio_group_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r38.newDetails.positiveFamily = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-radio-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-radio-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_27_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r40.clickPositiveFamily(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r10.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r10.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r10.newDetails.positiveFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r10.newDetails.positiveFamily === undefined);
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_28_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_28_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-step", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_28_ng_template_2_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Where are you currently working from?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_28_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r42.newDetails.location = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_28_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r44.clickLocation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r11.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r11.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r11.newDetails.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r11.newDetails.location === undefined);
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Done");
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Once you are eligible, you have to adhere to the following guidelines. Please make sure you read them carefully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "pdf-viewer", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r13.pdfSrc)("render-text", true);
} }
function DiagnosisFormComponent_mat_horizontal_stepper_5_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-horizontal-stepper", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-step", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DiagnosisFormComponent_mat_horizontal_stepper_5_ng_template_4_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Have you contracted Covid in the last 3 months?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-radio-group", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DiagnosisFormComponent_mat_horizontal_stepper_5_Template_mat_radio_group_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r45.newDetails.diagnosed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-radio-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-radio-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DiagnosisFormComponent_mat_horizontal_stepper_5_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r47.clickDiagnosed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_22_Template, 22, 6, "mat-step", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_23_Template, 20, 4, "mat-step", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_24_Template, 20, 6, "mat-step", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_25_Template, 22, 6, "mat-step", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_26_Template, 21, 5, "mat-step", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_27_Template, 20, 6, "mat-step", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, DiagnosisFormComponent_mat_horizontal_stepper_5_mat_step_28_Template, 17, 4, "mat-step", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, DiagnosisFormComponent_mat_horizontal_stepper_5_ng_template_30_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, DiagnosisFormComponent_mat_horizontal_stepper_5_div_34_Template, 4, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DiagnosisFormComponent_mat_horizontal_stepper_5_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r46); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r48.clickSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DiagnosisFormComponent_mat_horizontal_stepper_5_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r46); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return _r3.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.newDetails.diagnosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.newDetails.diagnosed === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newDetails.diagnosed === "yesDiagnosed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newDetails.diagnosed === "yesDiagnosed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newDetails.diagnosed === "yesDiagnosed" && ctx_r0.newDetails.symptoms === "noSymptoms");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newDetails.diagnosed === "yesDiagnosed" && ctx_r0.newDetails.testedNegative);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newDetails.diagnosed === "yesDiagnosed" && ctx_r0.newDetails.testedNegative);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newDetails.diagnosed === "yesDiagnosed" && ctx_r0.newDetails.testedNegative);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newDetails.diagnosed === "yesDiagnosed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newDetails.testedNegative === true && ctx_r0.newDetails.diagnosed === "yesDiagnosed");
} }
function DiagnosisFormComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please fill out the vaccination form.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DiagnosisFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Submitted!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DiagnosisFormComponent_div_7_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r50.clickEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Edit Response");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class DiagnosisFormComponent {
    constructor(af, breakpointObserver, route, afAuth, afs) {
        this.af = af;
        this.breakpointObserver = breakpointObserver;
        this.route = route;
        this.afAuth = afAuth;
        this.afs = afs;
        this.pdfSrc = "https://cwi.edu/sites/default/files/file_contenttype/sop_returntowork_final_0.pdf";
        this.newDetails = {};
        this.firstTimeResponse = false;
        this.formSubmitted = false;
        this.uploadValid = false;
        this.uploadSuccess = false;
        this.diagnosisDate = undefined;
        this.negativeDate = undefined;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            diagnosed: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            dateOfDiagnosis: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            symptoms: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            testedNegative: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            dateNegative: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            positiveFamily: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
        });
        this.uploadSuccess = false;
    }
    ngOnInit() {
        this.uploadValid = false;
        this.uploadSuccess = false;
        this.negativeDate = undefined;
        this.diagnosisDate = undefined;
        this.afAuth.authState.subscribe((user) => {
            this.currentUserId = user.uid;
            this.afs
                .doc(`usersData/${user.uid}`)
                .valueChanges()
                .subscribe((res) => {
                this.currentUser = res;
                this.formSubmitted = this.currentUser.dFormSubmit;
                this.afs
                    .doc(`employees/${this.currentUser.name}`)
                    .valueChanges()
                    .subscribe((res) => {
                    this.currentUserDetails = res;
                    let parsed = moment__WEBPACK_IMPORTED_MODULE_1__(this.currentUserDetails.dob, "DD/MM/YYYY");
                    //console.log(moment().diff(parsed, 'years'))
                });
            });
        });
    }
    clickLocation() {
        this.newDetails.location = this.formGroup.controls['location'].value;
        //console.log(this.newDetails.location)
    }
    clickDiagnosed() {
        this.newDetails.diagnosed = this.formGroup.controls['diagnosed'].value;
        //console.log(this.newDetails.diagnosed);
    }
    clickDateOfDiagnosis() {
        const momentDate = new Date(this.formGroup.controls['dateOfDiagnosis'].value);
        const formattedDate = moment__WEBPACK_IMPORTED_MODULE_1__(momentDate).format('DD/MM/YYYY');
        this.newDetails.dateOfDiagnosis = formattedDate;
        //console.log(this.newDetails.dateOfDiagnosis);
    }
    clickSymptoms() {
        this.newDetails.symptoms = this.formGroup.controls['symptoms'].value;
        //console.log(this.newDetails.symptoms);
    }
    clickTestedNegative() {
        this.newDetails.testedNegative =
            this.formGroup.controls['testedNegative'].value;
        //console.log(this.newDetails.testedNegative);
    }
    clickDateNegative() {
        const momentDate = new Date(this.formGroup.controls['dateNegative'].value);
        const formattedDate = moment__WEBPACK_IMPORTED_MODULE_1__(momentDate).format('DD/MM/YYYY');
        this.newDetails.dateNegative = formattedDate;
        //console.log(this.newDetails.dateNegative);
    }
    clickPositiveFamily() {
        this.newDetails.positiveFamily =
            this.formGroup.controls['positiveFamily'].value;
        //console.log(this.newDetails.positiveFamily)
    }
    clickSubmit() {
        if (this.newDetails.diagnosed === 'noDiagnosed') {
            this.newDetails.dateOfDiagnosis = "";
            this.newDetails.positiveFamily = false;
            this.newDetails.symptoms = "";
            this.newDetails.testedNegative = false;
            this.newDetails.dateNegative = "";
        }
        this.afs
            .doc('employees/' + this.currentUserDetails.name)
            .update(this.newDetails);
        this.afs
            .doc('usersData/' + this.currentUserId)
            .update({ dFormSubmit: true });
    }
    clickEdit() {
        this.afs
            .doc('usersData/' + this.currentUserId)
            .update({ dFormSubmit: false });
    }
    upload($event) {
        this.path = $event.target.files[0];
        this.uploadValid = true;
    }
    uploadReport() {
        this.af.upload(`${'/negativeReports'}/${this.currentUserDetails.name}`, this.path);
        this.uploadSuccess = true;
    }
}
DiagnosisFormComponent.ɵfac = function DiagnosisFormComponent_Factory(t) { return new (t || DiagnosisFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"])); };
DiagnosisFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DiagnosisFormComponent, selectors: [["app-diagnosis-form"]], decls: 8, vars: 3, consts: [["linear", "true", "completed", "false", 4, "ngIf"], [4, "ngIf"], ["linear", "true", "completed", "false"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["required", "", "formControlName", "diagnosed", 3, "ngModel", "ngModelChange"], ["value", "yesDiagnosed"], ["value", "noDiagnosed"], ["mat-raised-button", "", "color", "warn", "matStepperPrevious", ""], ["mat-raised-button", "", "matStepperNext", "", "color", "primary", 3, "disabled", "click"], [3, "stepControl", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["matInput", "", "formControlName", "dateOfDiagnosis", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["formControlName", "symptoms", 3, "ngModel", "ngModelChange"], ["value", "yesSymptoms"], ["value", "noSymptoms"], ["formControlName", "testedNegative", 3, "ngModel", "ngModelChange"], [3, "value"], ["matInput", "", "formControlName", "dateNegative", 3, "matDatepicker", "ngModel", "ngModelChange"], ["picker2", ""], ["type", "file", "accept", "*.pdf", "id", "", 3, "change"], ["mat-raised-button", "", 3, "disabled", "click"], ["mat-raised-button", "", "matStepperNext", "", "color", "primary", 3, "disabled"], [2, "color", "lawngreen"], ["formControlName", "positiveFamily", 3, "ngModel", "ngModelChange"], ["appearance", "outline"], ["matInput", "", "placeholder", "City, State", "type", "text", "formControlName", "location", 3, "ngModel", "ngModelChange"], [3, "src", "render-text"]], template: function DiagnosisFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Diagnosis Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DiagnosisFormComponent_mat_horizontal_stepper_5_Template, 44, 12, "mat-horizontal-stepper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DiagnosisFormComponent_div_6_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DiagnosisFormComponent_div_7_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.formSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.newDetails.diagnosed === "noDiagnosed" && ctx.formSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formSubmitted);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepLabel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperNext"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__["PdfViewerComponent"]], styles: [".mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\r\n  margin-left: 16px;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  max-width: 1300px;\r\n  margin: 2em auto;\r\n  text-align: center;\r\n  height: 500px;\r\n}\r\n\r\nmat-card-content[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\npdf-viewer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  filter: drop-shadow(5px 5px 5px #fff);\r\n  height : 200px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWdub3Npcy1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBRVQsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDO0FBQ0YiLCJmaWxlIjoiZGlhZ25vc2lzLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XHJcbiAgbWFyZ2luOiAyZW0gYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5wZGYtdmlld2VyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4IDVweCAjZmZmKTtcclxuICBoZWlnaHQgOiAyMDBweFxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBkEhYVLMdStbVlMQgb8LwuI05lQmshig8",
        authDomain: "covid-portal-authentication.firebaseapp.com",
        projectId: "covid-portal-authentication",
        storageBucket: "covid-portal-authentication.appspot.com",
        messagingSenderId: "644379944979",
        appId: "1:644379944979:web:132e457b233f2f802077e6"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D8Mh":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth/auth.service */ "imvL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/employee/employee.service */ "5W1o");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");

















const _c0 = function () { return ["/nav/vform"]; };
function NavComponent_mat_nav_list_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Vaccination Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/nav/dform"]; };
function NavComponent_mat_nav_list_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Diagnosis Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/nav/dashboard"]; };
function NavComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c2));
} }
function NavComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.currentUser == null ? null : ctx_r4.currentUser.name);
} }
class NavComponent {
    constructor(breakpointObserver, authService, router, ngZone, service, firestore, afAuth) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
        this.service = service;
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
    }
    ngOnInit() {
        // this.service.getEmployees().subscribe(actionsArray => {
        //   this.list = actionsArray.map(item => 
        //     {
        //       return {
        //         id: item.payload.doc.id,
        //         ...item.payload.doc.data
        //       } as Employee;
        //     })
        //     });
        this.afAuth.authState.subscribe(user => {
            this.firestore.doc(`usersData/${user.uid}`).valueChanges().subscribe(res => {
                this.currentUser = res;
            });
        });
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 32, vars: 17, consts: [[1, "sidenav-container", 3, "hasBackdrop"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["fxLayoutAlign", "center center", 1, "menuHeader"], [4, "ngIf"], ["mat-list-item", "", "routerLinkActive", "router-link-active", 3, "routerLink", 4, "ngIf"], ["color", "primary"], ["mat-icon-button", "", 3, "click"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "flex-end center"], ["class", "displayName", 4, "ngIf"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["auth", "matMenu"], ["mat-menu-item", ""], [3, "click"], ["mat-list-item", "", "routerLinkActive", "router-link-active", 3, "routerLink"], [1, "displayName"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NavComponent_mat_nav_list_8_Template, 3, 2, "mat-nav-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NavComponent_mat_nav_list_9_Template, 3, 2, "mat-nav-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, NavComponent_a_11_Template, 2, 2, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-toolbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, NavComponent_span_19_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "person_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-menu", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_Template_span_click_29_listener() { return ctx.authService.SignOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 11, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 13, ctx.isHandset$) === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 9, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.currentUser == null ? null : ctx.currentUser.admin));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.currentUser == null ? null : ctx.currentUser.admin));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser == null ? null : ctx.currentUser.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 15, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r5);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatNavList"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background-color: #222831;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.displayName[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.mat-menu-item[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: #eeeeee;\n}\n\n.menuHeader[_ngcontent-%COMP%] {\n  color: #00adb5;\n}\n\n.notification-list-item[_ngcontent-%COMP%]{\n  color: black !important;\n}\n\n .mat-menu-panel {\n  max-width: none !important;\n}\n\n.notification-icons[_ngcontent-%COMP%]{\n  margin-right: 5px;\n}\n\n[ng\\:cloak][_ngcontent-%COMP%], [ng-cloak][_ngcontent-%COMP%], [data-ng-cloak][_ngcontent-%COMP%], [x-ng-cloak][_ngcontent-%COMP%], .ng-cloak[_ngcontent-%COMP%], .x-ng-cloak[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjgzMTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZGlzcGxheU5hbWUge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5tYXQtbWVudS1pdGVtIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSB7XG4gIGNvbG9yOiAjZWVlZWVlO1xufVxuXG4ubWVudUhlYWRlciB7XG4gIGNvbG9yOiAjMDBhZGI1O1xufVxuXG4ubm90aWZpY2F0aW9uLWxpc3QtaXRlbXtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtbWVudS1wYW5lbCB7XG4gIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubm90aWZpY2F0aW9uLWljb25ze1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuW25nXFw6Y2xvYWtdLCBbbmctY2xvYWtdLCBbZGF0YS1uZy1jbG9ha10sIFt4LW5nLWNsb2FrXSwgLm5nLWNsb2FrLCAueC1uZy1jbG9hayB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0gICBcbiJdfQ== */"] });


/***/ }),

/***/ "IiIU":
/*!****************************************************************************************!*\
  !*** ./src/app/components/authentication/forgot-password/forgot-password.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MyErrorStateMatcher, ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "imvL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");












function ForgotPasswordComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/login"]; };
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
class ForgotPasswordComponent {
    constructor(authService) {
        this.authService = authService;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 21, vars: 6, consts: [["fxLayoutAlign", "center center", "fxFlexFill", "", 1, "main-div"], ["fxFlex", "25%", "fxFlex.xs", "80%", "fxFlex.sm", "50%"], ["color", "primary"], ["fxLayoutAlign", "stretch", "fxLayout", "column", 1, "login-form"], [1, "header"], [1, "email-input"], ["type", "email", "matInput", "", "placeholder", "Email Id", 3, "formControl", "errorStateMatcher"], ["userEmail", "", "passwordResetEmail", ""], [4, "ngIf"], ["mat-raised-button", "", 3, "click"], [1, "redirectToLogin"], [3, "routerLink"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Recover Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Enter the email address associated with your account.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ForgotPasswordComponent_mat_error_11_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ForgotPasswordComponent_mat_error_12_Template, 4, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); return ctx.authService.ForgotPassword(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Send Reset link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Go back to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.emailFormControl)("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["FlexFillDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".main-div[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.email-input[_ngcontent-%COMP%]{\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.redirectToLogin[_ngcontent-%COMP%]{\r\n    padding-top: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kaXYgbWF0LWNhcmR7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3Jte1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZW1haWwtaW5wdXR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnJlZGlyZWN0VG9Mb2dpbntcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "McvR":
/*!****************************************************************************!*\
  !*** ./src/app/shared/services/get-covid-stats/get-covid-stats.service.ts ***!
  \****************************************************************************/
/*! exports provided: GetCovidStatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCovidStatsService", function() { return GetCovidStatsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class GetCovidStatsService {
    constructor(http) {
        this.http = http;
    }
    getCovidStats() {
        return this.http.get('https://corona.lmao.ninja/v2/countries/India?yesterday=true&strict=true&query');
    }
    getCovidNews() {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=5130c7a1bd134235a6284b89e4321ee5');
    }
    getCovidNews2() {
        return this.http.get('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json');
    }
}
GetCovidStatsService.ɵfac = function GetCovidStatsService_Factory(t) { return new (t || GetCovidStatsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetCovidStatsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetCovidStatsService, factory: GetCovidStatsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "NzTt":
/*!*************************************************!*\
  !*** ./src/app/shared/guard/auth/auth.guard.ts ***!
  \*************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "imvL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthGuard {
    constructor(afs, // Inject Firestore service
    afAuth, authService, router) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.authService = authService;
        this.router = router;
    }
    // canActivate(
    //   route: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //     this.afAuth.authState.subscribe({
    //       next : (user => {
    //         if (user) {
    //           this.userData = user;
    //           this.afs.doc(`usersData/${this.userData.uid}`).valueChanges().subscribe(res => {
    //             this.userDetails = res;
    //             if(res['admin'] === false){
    //               this.answer =true
    //             }else{
    //               this.answer = false
    //             }})
    //           } 
    //       })
    //  })
    //   return this.answer
    // }
    canActivate(next, state) {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['login']);
        }
        return true;
    }
    canActivateChild(next, state) {
        var _a;
        if (!((_a = this.authService.userDetails) === null || _a === void 0 ? void 0 : _a.admin)) {
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QOcg":
/*!***************************************************************************!*\
  !*** ./src/app/components/vaccination-form/vaccination-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: VaccinationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccinationFormComponent", function() { return VaccinationFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "imvL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-pdf-viewer */ "IkSl");





















function VaccinationFormComponent_mat_horizontal_stepper_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Can you please provide a reason why you have not taken the first dose?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VaccinationFormComponent_mat_horizontal_stepper_5_div_14_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.newDetails.firstReason = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.newDetails.firstReason);
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_23_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_23_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-step", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_23_ng_template_2_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "When did you get your first Dose?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Choose a date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_23_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.firstDateOriginal = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "mat-datepicker-toggle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "mat-datepicker", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_23_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r21.clickFirstDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r6.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r6.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r18)("ngModel", ctx_r6.firstDateOriginal);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r6.firstDateOriginal === null);
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_24_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_24_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_24_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r25.uploadFirstCertificate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_24_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "File Uploaded Successfully!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_24_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-step", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_24_ng_template_2_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Please upload your first Dose Vaccination Certificate.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_24_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r27.uploadFirst($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_24_button_10_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_24_div_12_Template, 3, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r7.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r7.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.uploadValidFirst);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.uploadSuccessFirst);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r7.uploadSuccessFirst);
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_25_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_25_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-step", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_25_ng_template_2_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Which Vaccine did you get?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Vaccine");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_25_Template_mat_select_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r30.newDetails.vaccine = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Covishield");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Covaxin");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Sputnik-V");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_25_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r32.clickVaccine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r8.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r8.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r8.newDetails.vaccine);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r8.newDetails.vaccine === "");
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_26_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_26_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Can you please provide a reason why you have not taken the Second dose and also when are you eligible for it?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_26_div_12_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r35.newDetails.secondReason = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r34.newDetails.secondReason);
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_26_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-step", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_26_ng_template_2_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Did you take your Second Dose?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-radio-group", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_26_Template_mat_radio_group_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r37.newDetails.secondDose = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-radio-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-radio-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_26_div_12_Template, 6, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_26_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r39.clickSecondDose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r9.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r9.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r9.newDetails.secondDose);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.newDetails.secondDose === "noSecond");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r9.newDetails.secondDose === "");
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_27_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_27_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-step", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_27_ng_template_2_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "When did you get your Second Dose?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Choose a date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_27_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r42.secondDateOriginal = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "mat-datepicker-toggle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "mat-datepicker", 21, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_27_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r44.clickSecondDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r10.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r10.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r41)("ngModel", ctx_r10.secondDateOriginal);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r10.secondDateOriginal === null);
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_28_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_28_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_28_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r48.uploadSecondCertificate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_28_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "File Uploaded Successfully!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_28_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-step", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_28_ng_template_2_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Please upload your Second Dose Vaccination Certificate.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_28_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r50.uploadSecond($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_28_button_10_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_28_div_12_Template, 3, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r11.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r11.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.uploadValidSecond);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.uploadSuccessSecond);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r11.uploadSuccessSecond);
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Step");
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Once you are eligible, you have to adhere to the following guidelines. Please make sure you read them carefully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "pdf-viewer", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r14.pdfSrc)("render-text", true);
} }
function VaccinationFormComponent_mat_horizontal_stepper_5_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-horizontal-stepper", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-step", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, VaccinationFormComponent_mat_horizontal_stepper_5_ng_template_4_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Did you take your first Dose?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-radio-group", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VaccinationFormComponent_mat_horizontal_stepper_5_Template_mat_radio_group_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r52.newDetails.firstDose = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-radio-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-radio-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, VaccinationFormComponent_mat_horizontal_stepper_5_div_14_Template, 6, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VaccinationFormComponent_mat_horizontal_stepper_5_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r54.clickFirstDose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_23_Template, 20, 6, "mat-step", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_24_Template, 20, 5, "mat-step", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_25_Template, 23, 4, "mat-step", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_26_Template, 21, 5, "mat-step", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_27_Template, 20, 6, "mat-step", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, VaccinationFormComponent_mat_horizontal_stepper_5_mat_step_28_Template, 20, 5, "mat-step", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-step", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, VaccinationFormComponent_mat_horizontal_stepper_5_ng_template_31_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Where are you currently working from?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VaccinationFormComponent_mat_horizontal_stepper_5_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r55.newDetails.location = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VaccinationFormComponent_mat_horizontal_stepper_5_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r56.clickLocation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, VaccinationFormComponent_mat_horizontal_stepper_5_ng_template_48_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, VaccinationFormComponent_mat_horizontal_stepper_5_div_52_Template, 4, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VaccinationFormComponent_mat_horizontal_stepper_5_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r57.clickSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VaccinationFormComponent_mat_horizontal_stepper_5_Template_button_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return _r3.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r0.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.newDetails.firstDose);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newDetails.firstDose === "noFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.newDetails.firstDose === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newDetails.firstDose === "yesFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newDetails.firstDose === "yesFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newDetails.firstDose === "yesFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newDetails.firstDose === "yesFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newDetails.secondDose === "yesSecond" && ctx_r0.newDetails.firstDose === "yesFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newDetails.secondDose === "yesSecond" && ctx_r0.newDetails.firstDose === "yesFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r0.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.newDetails.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.newDetails.location === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newDetails.secondDose === "yesSecond" && ctx_r0.newDetails.firstDose === "yesFirst");
} }
function VaccinationFormComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Thank you for your Response!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VaccinationFormComponent_div_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r59.clickEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VaccinationFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "You have already submitted the form.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VaccinationFormComponent_div_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r61.clickEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class VaccinationFormComponent {
    constructor(af, afs, afAuth, breakpointObserver, route, authService, changeDetectorRef) {
        this.af = af;
        this.afs = afs;
        this.afAuth = afAuth;
        this.breakpointObserver = breakpointObserver;
        this.route = route;
        this.authService = authService;
        this.changeDetectorRef = changeDetectorRef;
        this.isCompleted = false;
        this.pdfSrc = "https://cwi.edu/sites/default/files/file_contenttype/sop_returntowork_final_0.pdf";
        this.isLinear = false;
        this.newDetails = {};
        this.gotFirstDose = false;
        this.gotSecondDose = false;
        this.formSubmitted = false;
        this.firstTimeResponse = false;
        this.uploadValidFirst = false;
        this.uploadValidSecond = false;
        this.uploadSuccessFirst = false;
        this.uploadSuccessSecond = false;
        this.firstFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            firstDose: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            firstDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)),
            vaccine: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            secondDose: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            secondDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            firstReason: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            secondReason: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]()
        });
        this.firstTimeResponse = false;
        this.uploadSuccessFirst = false;
        this.uploadSuccessSecond = false;
    }
    ngAfterViewChecked() {
        this.changeDetectorRef.detectChanges();
    }
    ngOnInit() {
        this.uploadValidFirst = false;
        this.uploadValidSecond = false;
        this.firstDateOriginal = null;
        this.secondDateOriginal = null;
        this.afAuth.authState.subscribe((user) => {
            this.currentUserId = user.uid;
            //console.log(user.uid);
            this.afs
                .doc(`usersData/${user.uid}`)
                .valueChanges()
                .subscribe((res) => {
                this.currentUser = res;
                this.formSubmitted = this.currentUser.vFormSubmit;
                this.afs
                    .doc(`employees/${this.currentUser.name}`)
                    .valueChanges()
                    .subscribe((res) => {
                    this.currentUserDetails = res;
                    this.setNewDetails(res);
                });
            });
        });
    }
    setNewDetails(currentUserDetails) {
        this.newDetails.name = currentUserDetails.name;
        this.newDetails.gender = currentUserDetails.gender;
        this.newDetails.address = currentUserDetails.address;
        this.newDetails.mobile = currentUserDetails.mobile;
        this.newDetails.department = currentUserDetails.department;
        this.newDetails.role = currentUserDetails.role;
        this.newDetails.firstDose = currentUserDetails.firstDose;
        this.newDetails.firstDate = currentUserDetails.firstDate;
        this.newDetails.secondDose = currentUserDetails.secondDose;
        this.newDetails.secondDate = currentUserDetails.secondDate;
        this.newDetails.vaccine = currentUserDetails.vaccine;
        this.newDetails.location = currentUserDetails.location;
        this.newDetails.firstReason = currentUserDetails.firstReason;
        this.newDetails.secondReason = currentUserDetails.secondReason;
        //console.log(this.newDetails);
    }
    clickLocation() {
        this.newDetails.location = this.firstFormGroup.controls['location'].value;
        //console.log(this.newDetails.location)
    }
    clickFirstDose() {
        this.newDetails.firstDose = this.firstFormGroup.controls['firstDose'].value;
        //console.log(this.newDetails.firstDose);
        if (this.newDetails.firstDose == "yesFirst") {
            this.gotFirstDose = true;
        }
    }
    clickFirstDate() {
        this.firstDateOriginal = this.firstFormGroup.controls['firstDate'].value;
        const momentDate = new Date(this.firstFormGroup.controls['firstDate'].value);
        const formattedDate = moment__WEBPACK_IMPORTED_MODULE_1__(momentDate).format('DD/MM/YYYY');
        this.newDetails.firstDate = formattedDate;
        //console.log(this.newDetails.firstDate);
    }
    clickVaccine() {
        this.newDetails.vaccine = this.firstFormGroup.controls['vaccine'].value;
        //console.log(this.firstFormGroup.controls['vaccine'].value);
    }
    clickSecondDose() {
        this.secondDateOriginal = this.firstFormGroup.controls['secondDose'].value;
        this.newDetails.secondDose =
            this.firstFormGroup.controls['secondDose'].value;
        //console.log(this.newDetails.secondDose);
        if (this.newDetails.secondDose == "yesSecond") {
            this.gotSecondDose = true;
        }
    }
    clickSecondDate() {
        const momentDate = new Date(this.firstFormGroup.controls['secondDate'].value);
        const formattedDate = moment__WEBPACK_IMPORTED_MODULE_1__(momentDate).format('DD/MM/YYYY');
        this.newDetails.secondDate = formattedDate;
        //console.log(this.newDetails.secondDate);
    }
    clickSubmit() {
        if (this.newDetails.firstDose === 'noFirst') {
            this.newDetails.firstDate = "";
            this.newDetails.secondDate = "";
            this.newDetails.secondDose = "noSecond";
            this.newDetails.secondReason = "";
            this.newDetails.vaccine = "";
        }
        else if (this.newDetails.secondDose === 'noSecond' && this.newDetails.firstDose === 'yesFirst') {
            this.newDetails.secondDate = "";
        }
        this.afs.doc('employees/' + this.newDetails.name).update(this.newDetails);
        this.afs
            .doc('usersData/' + this.currentUserId)
            .update({ vFormSubmit: true });
        this.firstTimeResponse = true;
    }
    clickEdit() {
        this.afs
            .doc('usersData/' + this.currentUserId)
            .update({ vFormSubmit: false });
        this.firstTimeResponse = false;
    }
    uploadFirst($event) {
        this.firstPath = $event.target.files[0];
        this.uploadValidFirst = true;
    }
    uploadFirstCertificate() {
        this.af.upload(`${'/firstDoseCertificates'}/${this.currentUserDetails.name}`, this.firstPath);
        const ref = this.af.ref(`${'/firstDoseCertificates'}/${this.currentUserDetails.name}`);
        this.uploadSuccessFirst = true;
    }
    uploadSecond($event) {
        this.secondPath = $event.target.files[0];
        this.uploadValidSecond = true;
    }
    uploadSecondCertificate() {
        //console.log(this.secondPath)
        this.af.upload(`${'/secondDoseCertificates'}/${this.currentUserDetails.name}`, this.secondPath);
        this.uploadSuccessSecond = true;
    }
    downloadFirstCertificate() {
        const ref = this.af.ref(`${'/firstDoseCertificates'}/${this.currentUserDetails.name}`);
        var url;
        ref.getDownloadURL().subscribe(res => {
            url = res;
            window.open(url);
        });
    }
}
VaccinationFormComponent.ɵfac = function VaccinationFormComponent_Factory(t) { return new (t || VaccinationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
VaccinationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VaccinationFormComponent, selectors: [["app-vaccination-form"]], decls: 8, vars: 3, consts: [["linear", "true", "completed", "false", 4, "ngIf"], [4, "ngIf"], ["linear", "true", "completed", "false"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["formControlName", "firstDose", "required", "", 3, "ngModel", "ngModelChange"], ["value", "yesFirst"], ["value", "noFirst"], ["mat-raised-button", "", "matStepperPrevious", "", "color", "warn"], ["mat-raised-button", "", "matStepperNext", "", "color", "primary", 3, "disabled", "click"], [3, "stepControl", 4, "ngIf"], ["matInput", "", "placeholder", "City, State", "type", "text", "formControlName", "location", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "warn", "matStepperPrevious", ""], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["required", "", "matInput", "", "formControlName", "firstReason", 3, "ngModel", "ngModelChange"], ["name", "myDate", "matInput", "", "formControlName", "firstDate", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["required", ""], ["picker", ""], ["type", "file", "accept", "*.pdf", "id", "", 2, "margin", "1px auto", 3, "change"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 3, "disabled"], ["mat-raised-button", "", 3, "click"], [2, "color", "lawngreen"], ["formControlName", "vaccine", 3, "ngModel", "ngModelChange"], ["value", "Covishield"], ["value", "Covaxin"], ["value", "Sputnik-V"], ["formControlName", "secondDose", 3, "ngModel", "ngModelChange"], ["value", "yesSecond"], ["value", "noSecond"], ["required", "", "matInput", "", "formControlName", "secondReason", 3, "ngModel", "ngModelChange"], ["matInput", "", "formControlName", "secondDate", 3, "matDatepicker", "ngModel", "ngModelChange"], ["picker2", ""], [3, "src", "render-text"]], template: function VaccinationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Vaccination Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, VaccinationFormComponent_mat_horizontal_stepper_5_Template, 62, 16, "mat-horizontal-stepper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, VaccinationFormComponent_div_6_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, VaccinationFormComponent_div_7_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.formSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.firstTimeResponse);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formSubmitted && !ctx.firstTimeResponse);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepLabel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperNext"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__["PdfViewerComponent"]], styles: [".mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\r\n    margin-left: 16px;\r\n  }\r\n\r\n  mat-card[_ngcontent-%COMP%] {\r\n    max-width: 1500px;\r\n    margin: 2em auto;\r\n    text-align: center;\r\n    height: 500px;\r\n  }\r\n\r\n  mat-card-content[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  }\r\n\r\n  pdf-viewer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    filter: drop-shadow(5px 5px 5px #fff);\r\n    height : 200px\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhY2NpbmF0aW9uLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFNBQVM7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFFVCxnQ0FBZ0M7RUFDaEM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckM7RUFDRiIsImZpbGUiOiJ2YWNjaW5hdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG5cclxuICBwZGYtdmlld2VyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCA1cHggNXB4ICNmZmYpO1xyXG4gICAgaGVpZ2h0IDogMjAwcHhcclxuICB9Il19 */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'covid-vaccination-portal';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "YZzx":
/*!********************************************************************!*\
  !*** ./src/app/components/employee/homepage/homepage.component.ts ***!
  \********************************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "imvL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/employee/employee.service */ "5W1o");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var src_app_shared_services_get_covid_stats_get_covid_stats_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/get-covid-stats/get-covid-stats.service */ "McvR");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../card/card.component */ "mJ8H");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");






















function HomepageComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HomepageComponent_ng_template_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Forms");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HomepageComponent_span_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HomepageComponent_span_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HomepageComponent_span_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HomepageComponent_span_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HomepageComponent_span_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HomepageComponent_span_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.employee == null ? null : ctx_r7.employee.vaccine);
} }
function HomepageComponent_div_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const new_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", new_r9.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", new_r9.urlToImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", new_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", new_r9.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](new_r9.title);
} }
const _c0 = function () { return ["/employee/vform"]; };
const _c1 = function () { return ["/employee/dform"]; };
class HomepageComponent {
    constructor(af, breakpointObserver, authService, router, ngZone, service, firestore, afAuth, getStats, changeDetectorRef) {
        this.af = af;
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
        this.service = service;
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.getStats = getStats;
        this.changeDetectorRef = changeDetectorRef;
        this.casesCount = 0;
        this.recoveredCount = 0;
        this.deathsCount = 0;
        this.activeCount = 0;
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
        this.cardLayout = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ matches }) => {
            if (matches) {
                return {
                    columns: 1,
                    news: { cols: 1, rows: 5 },
                    stats: { cols: 1, rows: 4 },
                    miniCard: { cols: 1, rows: 1 },
                    chart: { cols: 1, rows: 5 },
                    table: { cols: 1, rows: 4 },
                };
            }
            return {
                columns: 5,
                news: { cols: 1, rows: 4 },
                stats: { cols: 3, rows: 2 },
                miniCard: { cols: 1, rows: 2 },
                chart: { cols: 3, rows: 2 },
                table: { cols: 1, rows: 2 },
            };
        }));
    }
    ngOnInit() {
        this.afAuth.authState.subscribe(user => {
            this.firestore.doc(`usersData/${user.uid}`).valueChanges().subscribe(res => {
                this.currentUser = res;
                this.firestore.collection('employees').doc(this.currentUser.name).valueChanges().subscribe(res => {
                    this.employee = res;
                    console.log(this.employee);
                });
            });
        });
        this.getStats.getCovidNews().subscribe((data) => {
            this.news = data.articles;
            // console.log(this.news)
        });
        this.getStats.getCovidNews2().subscribe((data) => {
            this.news2 = data.articles;
            console.log(this.news2);
        });
        this.getStats.getCovidStats().subscribe((data) => {
            this.covidStats = data;
            this.changeDetectorRef.markForCheck();
            let casesCountStop = setInterval(() => {
                this.casesCount++;
                if (this.casesCount == Math.floor(this.covidStats.cases / 100000)) {
                    clearInterval(casesCountStop);
                }
            }, 10);
            let activeCountStop = setInterval(() => {
                this.activeCount++;
                if (this.activeCount == Math.floor(this.covidStats.active / 100000)) {
                    clearInterval(activeCountStop);
                }
            }, 30);
            let recoveredCountStop = setInterval(() => {
                this.recoveredCount++;
                if (this.recoveredCount == Math.floor(this.covidStats.recovered / 100000)) {
                    clearInterval(recoveredCountStop);
                }
            }, 10);
            let deathCountStop = setInterval(() => {
                this.deathsCount++;
                if (this.deathsCount == Math.floor(this.covidStats.deaths / 100000)) {
                    clearInterval(deathCountStop);
                }
            }, 30);
        });
    }
    getAge(dob) {
        var dateMomentObject = moment__WEBPACK_IMPORTED_MODULE_1__(dob, "DD/MM/YYYY");
        var dateObject = dateMomentObject.toDate();
        var years = moment__WEBPACK_IMPORTED_MODULE_1__().diff(dateObject, 'years', false);
        return years;
    }
    firstDoseCertificate() {
        const ref = this.af.ref(`${'/firstDoseCertificates'}/${this.employee.name}`);
        ref.getDownloadURL().subscribe(res => {
            window.open(res);
        });
    }
    secondDoseCertificate() {
        const ref = this.af.ref(`${'/secondDoseCertificates'}/${this.employee.name}`);
        ref.getDownloadURL().subscribe(res => {
            window.open(res);
        });
    }
    negativeTestCertificate() {
        const ref = this.af.ref(`${'/negativeReports'}/${this.employee.name}`);
        ref.getDownloadURL().subscribe(res => {
            window.open(res);
        });
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_get_covid_stats_get_covid_stats_service__WEBPACK_IMPORTED_MODULE_10__["GetCovidStatsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 164, vars: 65, consts: [[1, "grid-container"], ["rowHeight", "200px", 3, "cols"], [3, "colspan", "rowspan"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "container"], ["src", "../../../assets/employee.jpg", "alt", "", 1, "profile-image"], [1, "profile-name"], [1, "profile-role"], [1, "profile-department"], [1, "dashboard-card"], [1, "dashboard-card-content"], ["mat-align-tabs", "center"], ["mat-tab-label", ""], ["mat-list-item", "", "routerLinkActive", "router-link-active", 2, "text-decoration", "none", "color", "cornflowerblue", 3, "routerLink"], ["fxLayout", "column", "fxLayoutGap", "3px", "fxLayoutAlign", "center center"], ["fxLayout", "column", "fxLayoutGap", "70px", "fxLayoutAlign", "space-between center"], [1, "cases"], [1, "casesData"], [1, "activeCases"], [1, "activeData"], [1, "recovered"], [1, "recoveredData"], [1, "deaths"], [1, "deathsData"], ["fxLayout", "row", "fxLayoutGap", "3px", "fxLayoutAlign", "center center"], [4, "ngIf"], [3, "cellsToScroll", "loop", "autoplay", "autoplayInterval", "margin", "arrowsTheme", "height", "cellWidth"], ["class", "carousel-cell", 4, "ngFor", "ngForOf"], [1, "carousel-cell"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["target", "_blank", 3, "href"], ["onerror", "this.src = 'https://developers.google.com/maps/documentation/maps-static/images/error-image-generic.png'", 1, "newsImage", 3, "src", "alt"], [2, "text-decoration", "none", 3, "href"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "app-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Role :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Department :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-card-content", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-tab-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, HomepageComponent_ng_template_27_Template, 6, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "EMPLOYEE ID : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "NAME : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "GENDER : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "AGE : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "MOBILE : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "LOCATION : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, HomepageComponent_ng_template_76_Template, 6, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "arrow_right_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, " Vaccination Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "arrow_right_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Diagnosis Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](88, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](89, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "app-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "INDIA COVID STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Total Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Active Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Total Recovered");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Total Deaths");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](123, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](124, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "app-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Vaccination Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "vaccines");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, " First Dose : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](140, HomepageComponent_span_140_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](141, HomepageComponent_span_141_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, " Second Dose : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](146, HomepageComponent_span_146_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](147, HomepageComponent_span_147_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, " Vaccine Taken : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](152, HomepageComponent_span_152_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](153, HomepageComponent_span_153_Template, 2, 1, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](155, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](156, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "app-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, "Latest in healthcare");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](161, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "carousel", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](163, HomepageComponent_div_163_Template, 9, 5, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        let tmp_1_0 = null;
        let tmp_2_0 = null;
        let tmp_6_0 = null;
        let tmp_7_0 = null;
        let tmp_16_0 = null;
        let tmp_17_0 = null;
        let tmp_22_0 = null;
        let tmp_23_0 = null;
        let tmp_30_0 = null;
        let tmp_31_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("cols", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 41, ctx.cardLayout)) == null ? null : tmp_0_0.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 43, ctx.cardLayout)) == null ? null : tmp_1_0.table.cols)("rowspan", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 45, ctx.cardLayout)) == null ? null : tmp_2_0.table.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.employee == null ? null : ctx.employee.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.employee == null ? null : ctx.employee.role, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.employee == null ? null : ctx.employee.department, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 47, ctx.cardLayout)) == null ? null : tmp_6_0.chart.cols)("rowspan", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 49, ctx.cardLayout)) == null ? null : tmp_7_0.chart.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.employee == null ? null : ctx.employee.empid, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.employee == null ? null : ctx.employee.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.employee == null ? null : ctx.employee.gender, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getAge(ctx.employee == null ? null : ctx.employee.dob), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.employee == null ? null : ctx.employee.mobile, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.employee == null ? null : ctx.employee.location, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](63, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](64, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", (tmp_16_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](88, 51, ctx.cardLayout)) == null ? null : tmp_16_0.news.cols)("rowspan", (tmp_17_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](89, 53, ctx.cardLayout)) == null ? null : tmp_17_0.news.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.casesCount + " L");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.activeCount + " L");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.recoveredCount + " L");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.deathsCount + " L");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", (tmp_22_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](123, 55, ctx.cardLayout)) == null ? null : tmp_22_0.miniCard.cols)("rowspan", (tmp_23_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](124, 57, ctx.cardLayout)) == null ? null : tmp_23_0.miniCard.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.firstDose) === "yesFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.firstDose) === "noFirst" || (ctx.employee == null ? null : ctx.employee.firstDose) === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.secondDose) === "yesSecond");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.secondDose) === "noSecond" || (ctx.employee == null ? null : ctx.employee.secondDose) === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.vaccine) === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.employee == null ? null : ctx.employee.vaccine) !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", (tmp_30_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](155, 59, ctx.cardLayout)) == null ? null : tmp_30_0.stats.cols)("rowspan", (tmp_31_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](156, 61, ctx.cardLayout)) == null ? null : tmp_31_0.stats.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cellsToScroll", 3)("loop", true)("autoplay", true)("autoplayInterval", 4000)("margin", 20)("arrowsTheme", "dark")("height", 250)("cellWidth", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.news2);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridTile"], _card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabLabel"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_20__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"]], styles: [".grid-container[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n  }\r\n  \r\n  .dashboard-card[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    right: 15px;\r\n    bottom: 15px;\r\n  }\r\n  \r\n  .more-button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 10px;\r\n  }\r\n  \r\n  .dashboard-card-content[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  \r\n  .profile-image[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n    height: 150px;\r\n    object-fit: cover;\r\n    border-radius: 50%;\r\n    margin: 0 auto 40px auto;\r\n    display: block;\r\n  }\r\n  \r\n  .profile-name[_ngcontent-%COMP%] {\r\n    font-size: 1.2em;\r\n    font-weight: 500;\r\n    margin: 0 auto 20px auto;\r\n  }\r\n  \r\n  .profile-role[_ngcontent-%COMP%] {\r\n    font-weight: lighter;\r\n    padding-bottom: 5px;\r\n  }\r\n  \r\n  .profile-role[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n  }\r\n  \r\n  .header[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    font-weight: 600;\r\n    padding-bottom: 25px;\r\n  }\r\n  \r\n  .profile-department[_ngcontent-%COMP%] {\r\n    font-weight: lighter;\r\n  }\r\n  \r\n  .profile-department[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-weight: 400;\r\n  }\r\n  \r\n  .status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-weight: 400;\r\n  }\r\n  \r\n  .vaccine-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-weight: 400;\r\n  }\r\n  \r\n  .more-button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 10px;\r\n  }\r\n  \r\n  .dashboard-card[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    right: 15px;\r\n    bottom: 15px;\r\n  }\r\n  \r\n  .dashboard-card-content[_ngcontent-%COMP%] {\r\n    \r\n    margin : 16px;\r\n  }\r\n  \r\n  mat-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0;\r\n  }\r\n  \r\n  .example-form[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n    min-width: 50px;\r\n    max-width: 900px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  td[_ngcontent-%COMP%] {\r\n    padding-right: 8px;\r\n  }\r\n  \r\n  .edit-details-bar[_ngcontent-%COMP%]{\r\n    background : #00adb5;\r\n    color : #ffffff;\r\n  }\r\n  \r\n  .submit-button[_ngcontent-%COMP%]{\r\n    background: #00adb5;\r\n    color : #ffffff;\r\n  }\r\n  \r\n  .casesData[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    padding-bottom: 15px;\r\n    color: blue;\r\n  }\r\n  \r\n  .activeData[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    padding-bottom: 15px;\r\n    color: brown;\r\n  }\r\n  \r\n  .recoveredData[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    padding-bottom: 15px;\r\n    color: green;\r\n  }\r\n  \r\n  .deathsData[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    padding-bottom: 15px;\r\n    color: red;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFOzs7OzsyQkFLdUI7SUFDdkIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBR0E7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUdBO0lBQ0UsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixXQUFXO0VBQ2I7O0VBR0E7SUFDRSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFlBQVk7RUFDZDs7RUFHQTtJQUNFLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixVQUFVO0VBQ1oiLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb3JlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLWltYWdlIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvIDQwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS1yb2xlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtcm9sZSBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtZGVwYXJ0bWVudCB7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtZGVwYXJ0bWVudCBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXR1cyBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgXHJcbiAgLnZhY2NpbmUtbmFtZSBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgXHJcbiAgLm1vcmUtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoOyAqL1xyXG4gICAgbWFyZ2luIDogMTZweDtcclxuICB9IFxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBcclxuICB0ZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5lZGl0LWRldGFpbHMtYmFye1xyXG4gICAgYmFja2dyb3VuZCA6ICMwMGFkYjU7XHJcbiAgICBjb2xvciA6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJtaXQtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogIzAwYWRiNTtcclxuICAgIGNvbG9yIDogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIFxyXG4gIC5jYXNlc0RhdGEge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmFjdGl2ZURhdGEge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBjb2xvcjogYnJvd247XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5yZWNvdmVyZWREYXRhIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICBcclxuICAuZGVhdGhzRGF0YSB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICAiXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav/nav.component */ "D8Mh");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _components_nav_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav/dashboard/dashboard.component */ "xd6D");
/* harmony import */ var _employee_details_page_employee_details_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employee-details-page/employee-details-page.component */ "3PL+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_authentication_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/authentication/login-page/login-page.component */ "mdTY");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _components_authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/authentication/forgot-password/forgot-password.component */ "IiIU");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/services/auth/auth.service */ "imvL");
/* harmony import */ var _charts_data_charts_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./charts/data-charts.module */ "qqKv");
/* harmony import */ var _shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/services/employee/employee.service */ "5W1o");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _components_vaccination_form_vaccination_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/vaccination-form/vaccination-form.component */ "QOcg");
/* harmony import */ var _components_diagnosis_form_diagnosis_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/diagnosis-form/diagnosis-form.component */ "9Ff2");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! mat-table-exporter */ "KUt4");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng2-pdf-viewer */ "IkSl");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/employee/employee.component */ "tKXg");
/* harmony import */ var _components_employee_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/employee/homepage/homepage.component */ "YZzx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/core */ "fXoL");














// import { EmployeeProfileCardComponent } from './employee-details-page/employee-profile-card/employee-profile-card.component';
// import { EmployeeVaccinationCardComponent } from './employee-details-page/employee-vaccination-card/employee-vaccination-card.component';









// import { EmployeesListComponent } from './components/employees-list/employees-list.component';
// import { DetailsFormComponent } from './employee-details-page/details-form/details-form.component';













// import { CarouselModule } from 'ngx-owl-carousel-o';




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdefineInjector"]({ providers: [_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"], _shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_22__["EmployeeService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_10__["ChartsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestoreModule"],
            _charts_data_charts_module__WEBPACK_IMPORTED_MODULE_21__["DataChartsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"],
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_30__["MatTableExporterModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_31__["PdfViewerModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_36__["MDBBootstrapModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_36__["CarouselModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_36__["WavesModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientModule"],
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_37__["IvyCarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"],
        _components_nav_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
        _employee_details_page_employee_details_page_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeDetailsPageComponent"],
        // EmployeeProfileCardComponent,
        // EmployeeVaccinationCardComponent,
        _components_authentication_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__["LoginPageComponent"],
        _components_authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__["ForgotPasswordComponent"],
        // EmployeesListComponent,
        // DetailsFormComponent,
        _components_vaccination_form_vaccination_form_component__WEBPACK_IMPORTED_MODULE_28__["VaccinationFormComponent"],
        _components_diagnosis_form_diagnosis_form_component__WEBPACK_IMPORTED_MODULE_29__["DiagnosisFormComponent"],
        _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_32__["AdminComponent"],
        _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_33__["EmployeeComponent"],
        _components_employee_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_34__["HomepageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_10__["ChartsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestoreModule"],
        _charts_data_charts_module__WEBPACK_IMPORTED_MODULE_21__["DataChartsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"],
        mat_table_exporter__WEBPACK_IMPORTED_MODULE_30__["MatTableExporterModule"],
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_31__["PdfViewerModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_36__["MDBBootstrapModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_36__["CarouselModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_36__["WavesModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientModule"],
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_37__["IvyCarouselModule"]] }); })();


/***/ }),

/***/ "ZWHW":
/*!*********************************************************************!*\
  !*** ./src/app/charts/diagnosis-chart/diagnosis-chart.component.ts ***!
  \*********************************************************************/
/*! exports provided: DiagnosisChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosisChartComponent", function() { return DiagnosisChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/employee/employee.service */ "5W1o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "LPYB");





function DiagnosisChartComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.doughnutChartData)("labels", ctx_r0.doughnutChartLabels)("chartType", ctx_r0.doughnutChartType)("legend", true)("options", ctx_r0.options);
} }
class DiagnosisChartComponent {
    constructor(service) {
        this.service = service;
        this.testedNegativeCount = 0;
        this.diagnosedCount = 0;
        this.isDataAvailable = false;
        // Doughnut
        this.doughnutChartLabels = [
            'Currently diagnosed',
            'Antibodies Present',
        ];
        this.doughnutChartType = 'doughnut';
        this.options = {
            legend: {
                position: 'bottom',
            },
            layout: {
                padding: '20px',
            },
        };
    }
    ngOnInit() {
        this.service.testedNegativeValueChange.subscribe(res => {
            this.testedNegativeCount = res;
            //console.log(res)
        });
        this.service.diagnosedValueChange.subscribe(res => this.diagnosedCount = res);
        setTimeout(() => this.setData(this.testedNegativeCount, this.diagnosedCount), 3000);
    }
    setData(tnc, dc) {
        this.doughnutChartData = [dc, tnc];
        this.isDataAvailable = true;
    }
}
DiagnosisChartComponent.ɵfac = function DiagnosisChartComponent_Factory(t) { return new (t || DiagnosisChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"])); };
DiagnosisChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiagnosisChartComponent, selectors: [["app-diagnosis-chart"]], decls: 1, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "space-evenly center", "fxLayoutGap", "60px", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "space-evenly center", "fxLayoutGap", "60px"], [1, "chartContainer", 2, "display", "block"], ["baseChart", "", 3, "data", "labels", "chartType", "legend", "options"]], template: function DiagnosisChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DiagnosisChartComponent_div_0_Template, 3, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataAvailable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["BaseChartDirective"]], styles: [".header[_ngcontent-%COMP%]{\r\n    font-size: 1.5em;\r\n    font-weight: 600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWdub3Npcy1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJkaWFnbm9zaXMtY2hhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "cCTE":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "imvL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/employee/employee.service */ "5W1o");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");

















const _c0 = function () { return ["/nav/dashboard"]; };
function AdminComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function AdminComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.currentUser == null ? null : ctx_r2.currentUser.name);
} }
const _c1 = function () { return ["/admin/dashboard"]; };
class AdminComponent {
    constructor(breakpointObserver, authService, router, ngZone, service, firestore, afAuth) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
        this.service = service;
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
    }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 35, vars: 17, consts: [[1, "sidenav-container", 3, "hasBackdrop"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["fxLayoutAlign", "center center", 1, "menuHeader"], ["mat-list-item", "", "routerLinkActive", "router-link-active", 3, "routerLink", 4, "ngIf"], ["color", "primary"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["mat-icon-button", "", "routerLinkActive", "router-link-active", 3, "routerLink"], [2, "font-size", "medium"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "flex-end center"], ["class", "displayName", 4, "ngIf"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["auth", "matMenu"], ["mat-menu-item", ""], [3, "click"], ["mat-list-item", "", "routerLinkActive", "router-link-active", 3, "routerLink"], [1, "displayName"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AdminComponent_a_9_Template, 2, 2, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-toolbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Admin Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, AdminComponent_span_22_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "person_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-menu", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_32_listener() { return ctx.authService.SignOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 10, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 12, ctx.isHandset$) === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser == null ? null : ctx.currentUser.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 14, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\r\n  \r\n  .sidenav[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n  }\r\n  \r\n  .sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\r\n    background: inherit;\r\n  }\r\n  \r\n  .mat-toolbar.mat-primary[_ngcontent-%COMP%] {\r\n    background-color: #222831;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .displayName[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .mat-menu-item[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n  \r\n  .mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\r\n    color: #eeeeee;\r\n  }\r\n  \r\n  .menuHeader[_ngcontent-%COMP%] {\r\n    color: #00adb5;\r\n  }\r\n  \r\n  .notification-list-item[_ngcontent-%COMP%]{\r\n    color: black !important;\r\n  }\r\n  \r\n   .mat-menu-panel {\r\n    max-width: none !important;\r\n  }\r\n  \r\n  .notification-icons[_ngcontent-%COMP%]{\r\n    margin-right: 5px;\r\n  }\r\n  \r\n  [ng\\:cloak][_ngcontent-%COMP%], [ng-cloak][_ngcontent-%COMP%], [data-ng-cloak][_ngcontent-%COMP%], [x-ng-cloak][_ngcontent-%COMP%], .ng-cloak[_ngcontent-%COMP%], .x-ng-cloak[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUIiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyODMxO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXNwbGF5TmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtbWVudS1pdGVtIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ge1xyXG4gICAgY29sb3I6ICNlZWVlZWU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW51SGVhZGVyIHtcclxuICAgIGNvbG9yOiAjMDBhZGI1O1xyXG4gIH1cclxuICBcclxuICAubm90aWZpY2F0aW9uLWxpc3QtaXRlbXtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAubWF0LW1lbnUtcGFuZWwge1xyXG4gICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3RpZmljYXRpb24taWNvbnN7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgW25nXFw6Y2xvYWtdLCBbbmctY2xvYWtdLCBbZGF0YS1uZy1jbG9ha10sIFt4LW5nLWNsb2FrXSwgLm5nLWNsb2FrLCAueC1uZy1jbG9hayB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfSAgICJdfQ== */"] });


/***/ }),

/***/ "gmdY":
/*!***************************************************************!*\
  !*** ./src/app/charts/status-chart/status-chart.component.ts ***!
  \***************************************************************/
/*! exports provided: StatusChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusChartComponent", function() { return StatusChartComponent; });
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/employee/employee.service */ "5W1o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");







function StatusChartComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "canvas", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r0.pieChartData)("labels", ctx_r0.pieChartLabels)("chartType", ctx_r0.pieChartType)("options", ctx_r0.pieChartOptions)("plugins", ctx_r0.pieChartPlugins)("legend", ctx_r0.pieChartLegend)("options", ctx_r0.options);
} }
class StatusChartComponent {
    constructor(service) {
        this.service = service;
        this.pieChartOptions = {
            responsive: true,
        };
        this.eligibleCount = 1;
        this.nonEligibleCount = 2;
        this.pendingResponseCount = 3;
        this.pieChartLabels = ['Eligible', 'Not Eligible', 'Pending Response'];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartPlugins = [];
        this._subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.isDataAvailable = false;
        this.options = {
            legend: {
                position: 'bottom',
            },
        };
    }
    ngOnInit() {
        this.service.eligibleValueChange.subscribe(res => {
            this.eligibleCount = res;
            //console.log(this.eligibleCount)
        });
        this.service.nonEligibleValueChange.subscribe(res => {
            this.nonEligibleCount = res;
        });
        this.service.pendingValueChange.subscribe(res => {
            this.pendingResponseCount = res;
        });
        setTimeout(() => this.setData(this.eligibleCount, this.nonEligibleCount, this.pendingResponseCount), 3000);
    }
    setData(ec, nec, pc) {
        this.pieChartData = [ec, nec, pc];
        this.isDataAvailable = true;
    }
}
StatusChartComponent.ɵfac = function StatusChartComponent_Factory(t) { return new (t || StatusChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"])); };
StatusChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StatusChartComponent, selectors: [["app-status-chart"]], viewQuery: function StatusChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_0__["BaseChartDirective"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 1, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "space-evenly center", "fxLayoutGap", "60px", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "space-evenly center", "fxLayoutGap", "60px"], [1, "chartContainer", 2, "display", "block"], ["baseChart", "", 3, "data", "labels", "chartType", "options", "plugins", "legend"]], template: function StatusChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, StatusChartComponent_div_0_Template, 3, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDataAvailable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], ng2_charts__WEBPACK_IMPORTED_MODULE_0__["BaseChartDirective"]], styles: [".header[_ngcontent-%COMP%]{\r\n    font-size: 1.5em;\r\n    font-weight: 600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzdGF0dXMtY2hhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/core */ "fXoL");













































const MaterialComponents = [
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"],
    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__["MatFormFieldModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"],
    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineInjector"]({ imports: [[MaterialComponents], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]], exports: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]] }); })();


/***/ }),

/***/ "imvL":
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








class AuthService {
    constructor(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone // NgZone service to remove outside scope warning
    ) {
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.auth = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth;
        this.userDat = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(user => {
            if (user) {
                return this.afs.doc(`users/${user.uid}`).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }
        }));
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                this.afs.doc(`usersData/${this.userData.uid}`).valueChanges().subscribe(res => {
                    this.userDetails = res;
                    if (res['admin'] === true) {
                        // this.router.navigate(['/nav/dashboard']);
                        this.router.navigate(['/admin/dashboard']);
                        console.log(localStorage.getItem('user'));
                    }
                    else {
                        // this.router.navigate(['/nav']);
                        this.router.navigate(['/employee/homepage']);
                    }
                });
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    SendVerificationMail() {
        return this.afAuth.currentUser.then(u => u.sendEmailVerification())
            .then(() => {
        });
    }
    // Sign in with email/password
    SignIn(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.signInWithEmailAndPassword(email, password)
                .then((result) => {
                console.log(result.user);
                this.afs.doc(`usersData/${result.user.uid}`).valueChanges().subscribe(res => {
                    this.userDetails = res;
                    if (res['admin'] === true) {
                        // this.router.navigate(['/nav/dashboard']);
                        this.router.navigate(['/admin/dashboard']);
                        setTimeout(() => window.location.reload(), 3000);
                    }
                    else {
                        // this.router.navigate(['/nav']);
                        this.router.navigate(['/employee/homepage']);
                    }
                });
                this.SetUserData(result.user);
            }).catch((error) => {
                window.alert(error.message);
            });
        });
    }
    // Reset Forggot password
    ForgotPassword(passwordResetEmail) {
        return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
            window.alert('Password reset email sent, check your inbox.');
        }).catch((error) => {
            window.alert(error);
        });
    }
    // Returns true when user is looged in and email is verified
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.emailVerified !== false) ? true : false;
    }
    // Auth logic to run auth providers
    AuthLogin(provider) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.signInWithPopup(provider)
                .then((result) => {
                this.SetUserData(result.user);
                setTimeout(() => {
                    this.afs.doc(`usersData/${result.user.uid}`).valueChanges().subscribe(res => {
                        this.userDetails = res;
                        if (res['admin'] === true) {
                            // this.router.navigate(['/nav/dashboard']);
                            this.router.navigate(['/admin/dashboard']);
                            setTimeout(() => window.location.reload(), 3000);
                        }
                        else {
                            // this.router.navigate(['/nav']);
                            this.router.navigate(['/employee/homepage']);
                        }
                    });
                }, 5000);
            }).catch((error) => {
                window.alert(error);
            });
        });
    }
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user) {
        user.updateProfile({
            //   displayName : "Ronak"
            emailVerified: true
        });
        const userRef = this.afs.doc(`users/${user.uid}`);
        const nameRef = this.afs.doc(`usersData/${user.uid}`);
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
        };
        return userRef.set(userData, {
            merge: true
        });
    }
    // Sign out
    SignOut() {
        return this.afAuth.signOut().then(() => {
            this.userDetails = null;
            localStorage.removeItem('user');
            this.router.navigate(['login']);
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mJ8H":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");


const _c0 = ["*"];
class CardComponent {
    constructor() { }
    ngOnInit() { }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "dashboard-card"], [1, "dashboard-card-content"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]], styles: [".more-button[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.dashboard-card-content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  flex-grow: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  max-height: 100%;\r\n  justify-content: center;\r\n  align-items: stretch;\r\n  margin : 16px;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1oiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vcmUtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBtYXJnaW4gOiAxNnB4O1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "mdTY":
/*!******************************************************************************!*\
  !*** ./src/app/components/authentication/login-page/login-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: MyErrorStateMatcher, LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "imvL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















function LoginPageComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginPageComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/forgot-password"]; };
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
class LoginPageComponent {
    constructor(breakpointObserver, authService) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.clicked = false;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.cardLayout = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ matches }) => {
            if (matches) {
                return {
                    columns: 1,
                    miniCard: { cols: 1, rows: 2 },
                    chart: { cols: 1, rows: 3 },
                    table: { cols: 1, rows: 4 },
                };
            }
            return {
                columns: 2,
                miniCard: { cols: 1, rows: 2 },
                chart: { cols: 1, rows: 2 },
                table: { cols: 4, rows: 3 },
            };
        }));
    }
    ngOnInit() {
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 19, vars: 7, consts: [["fxLayoutAlign", "center center", "fxFlexFill", "", 1, "main-div"], ["fxFlex", "25%", "fxFlex.xs", "80%", "fxFlex.sm", "50%"], ["color", "primary"], ["fxLayoutAlign", "stretch", "fxLayout", "column", 1, "login-form"], [1, "email-input"], ["type", "email", "matInput", "", "placeholder", "Email Id", 3, "formControl", "errorStateMatcher"], ["userEmail", ""], [4, "ngIf"], ["type", "password", "matInput", "", "placeholder", "Password", "required", ""], ["userPassword", ""], [1, "forgot-password"], [3, "routerLink"], ["mat-raised-button", "", "type", "submit", 3, "disabled", "keyup.enter", "click"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Login Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, LoginPageComponent_mat_error_9_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, LoginPageComponent_mat_error_10_Template, 4, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function LoginPageComponent_Template_button_keyup_enter_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13); ctx.authService.SignIn(_r0.value, _r3.value); return ctx.clicked = true; })("click", function LoginPageComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13); ctx.authService.SignIn(_r0.value, _r3.value); return ctx.clicked = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.emailFormControl)("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.clicked);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexFillDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: [".main-div[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n}\r\n\r\n.forgot-password[_ngcontent-%COMP%]{\r\n    padding-bottom: 10px;\r\n    text-align: right;\r\n}\r\n\r\n.email-input[_ngcontent-%COMP%]{\r\n    padding-bottom: 10px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kaXYgbWF0LWNhcmR7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3Jte1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmZvcmdvdC1wYXNzd29yZHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5lbWFpbC1pbnB1dHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */"] });


/***/ }),

/***/ "qqKv":
/*!**********************************************!*\
  !*** ./src/app/charts/data-charts.module.ts ***!
  \**********************************************/
/*! exports provided: DataChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataChartsModule", function() { return DataChartsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _diagnosis_chart_diagnosis_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diagnosis-chart/diagnosis-chart.component */ "ZWHW");
/* harmony import */ var _status_chart_status_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status-chart/status-chart.component */ "gmdY");
/* harmony import */ var _vaccination_chart_vaccination_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaccination-chart/vaccination-chart.component */ "+S/7");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class DataChartsModule {
}
DataChartsModule.ɵfac = function DataChartsModule_Factory(t) { return new (t || DataChartsModule)(); };
DataChartsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: DataChartsModule });
DataChartsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](DataChartsModule, { declarations: [_diagnosis_chart_diagnosis_chart_component__WEBPACK_IMPORTED_MODULE_1__["DiagnosisChartComponent"],
        _status_chart_status_chart_component__WEBPACK_IMPORTED_MODULE_2__["StatusChartComponent"],
        _vaccination_chart_vaccination_chart_component__WEBPACK_IMPORTED_MODULE_3__["VaccinationChartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_diagnosis_chart_diagnosis_chart_component__WEBPACK_IMPORTED_MODULE_1__["DiagnosisChartComponent"],
        _status_chart_status_chart_component__WEBPACK_IMPORTED_MODULE_2__["StatusChartComponent"],
        _vaccination_chart_vaccination_chart_component__WEBPACK_IMPORTED_MODULE_3__["VaccinationChartComponent"]] }); })();


/***/ }),

/***/ "tKXg":
/*!***********************************************************!*\
  !*** ./src/app/components/employee/employee.component.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "imvL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/employee/employee.service */ "5W1o");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "MutI");


















const _c0 = function () { return ["/employee/vform"]; };
function EmployeeComponent_mat_nav_list_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Vaccination Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/employee/dform"]; };
function EmployeeComponent_mat_nav_list_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Diagnosis Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
function EmployeeComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.currentUser == null ? null : ctx_r3.currentUser.name);
} }
const _c2 = function () { return ["/employee/homepage"]; };
class EmployeeComponent {
    constructor(af, breakpointObserver, authService, router, ngZone, service, firestore, afAuth) {
        this.af = af;
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
        this.service = service;
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
        this.cardLayout = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ matches }) => {
            if (matches) {
                return {
                    columns: 1,
                    miniCard: { cols: 1, rows: 1 },
                    chart: { cols: 1, rows: 5 },
                    table: { cols: 1, rows: 4 },
                };
            }
            return {
                columns: 4,
                miniCard: { cols: 1, rows: 1 },
                chart: { cols: 3, rows: 2 },
                table: { cols: 1, rows: 2 },
            };
        }));
    }
    ngOnInit() {
        this.afAuth.authState.subscribe(user => {
            this.firestore.doc(`usersData/${user.uid}`).valueChanges().subscribe(res => {
                this.currentUser = res;
            });
        });
    }
}
EmployeeComponent.ɵfac = function EmployeeComponent_Factory(t) { return new (t || EmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"])); };
EmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EmployeeComponent, selectors: [["app-employee"]], decls: 35, vars: 18, consts: [[1, "sidenav-container", 3, "hasBackdrop"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["fxLayoutAlign", "center center", 1, "menuHeader"], [4, "ngIf"], ["color", "primary"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["mat-icon-button", "", "routerLinkActive", "router-link-active", 3, "routerLink"], [2, "font-size", "medium"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "flex-end center"], ["class", "displayName", "style", "font-size: medium;", 4, "ngIf"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["auth", "matMenu"], ["mat-menu-item", ""], [3, "click"], ["mat-list-item", "", "routerLinkActive", "router-link-active", 3, "routerLink"], [1, "displayName", 2, "font-size", "medium"]], template: function EmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EmployeeComponent_mat_nav_list_8_Template, 3, 2, "mat-nav-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EmployeeComponent_mat_nav_list_9_Template, 3, 2, "mat-nav-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-toolbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Employee Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, EmployeeComponent_span_22_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "person_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-menu", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployeeComponent_Template_span_click_32_listener() { return ctx.authService.SignOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 11, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 13, ctx.isHandset$) === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 9, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.currentUser == null ? null : ctx.currentUser.admin));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.currentUser == null ? null : ctx.currentUser.admin));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 15, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r4);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\r\n  \r\n  .sidenav[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n  }\r\n  \r\n  .sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\r\n    background: inherit;\r\n  }\r\n  \r\n  .mat-toolbar.mat-primary[_ngcontent-%COMP%] {\r\n    background-color: #022e57;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 2;\r\n  }\r\n  \r\n  .displayName[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .mat-menu-item[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n  \r\n  .mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\r\n    color: #eeeeee;\r\n  }\r\n  \r\n  .menuHeader[_ngcontent-%COMP%] {\r\n    color: #00adb5;\r\n  }\r\n  \r\n  .notification-list-item[_ngcontent-%COMP%]{\r\n    color: black !important;\r\n  }\r\n  \r\n   .mat-menu-panel {\r\n    max-width: none !important;\r\n  }\r\n  \r\n  .notification-icons[_ngcontent-%COMP%]{\r\n    margin-right: 5px;\r\n  }\r\n  \r\n  [ng\\:cloak][_ngcontent-%COMP%], [ng-cloak][_ngcontent-%COMP%], [data-ng-cloak][_ngcontent-%COMP%], [x-ng-cloak][_ngcontent-%COMP%], .ng-cloak[_ngcontent-%COMP%], .x-ng-cloak[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUIiLCJmaWxlIjoiZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyZTU3O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXNwbGF5TmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtbWVudS1pdGVtIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ge1xyXG4gICAgY29sb3I6ICNlZWVlZWU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW51SGVhZGVyIHtcclxuICAgIGNvbG9yOiAjMDBhZGI1O1xyXG4gIH1cclxuICBcclxuICAubm90aWZpY2F0aW9uLWxpc3QtaXRlbXtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAubWF0LW1lbnUtcGFuZWwge1xyXG4gICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3RpZmljYXRpb24taWNvbnN7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgW25nXFw6Y2xvYWtdLCBbbmctY2xvYWtdLCBbZGF0YS1uZy1jbG9ha10sIFt4LW5nLWNsb2FrXSwgLm5nLWNsb2FrLCAueC1uZy1jbG9hayB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfSAgICJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/authentication/forgot-password/forgot-password.component */ "IiIU");
/* harmony import */ var _components_authentication_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/authentication/login-page/login-page.component */ "mdTY");
/* harmony import */ var _components_nav_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav/dashboard/dashboard.component */ "xd6D");
/* harmony import */ var _employee_details_page_employee_details_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-details-page/employee-details-page.component */ "3PL+");
/* harmony import */ var _shared_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guard/auth/auth.guard */ "NzTt");
/* harmony import */ var _components_vaccination_form_vaccination_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/vaccination-form/vaccination-form.component */ "QOcg");
/* harmony import */ var _components_diagnosis_form_diagnosis_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/diagnosis-form/diagnosis-form.component */ "9Ff2");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/employee/employee.component */ "tKXg");
/* harmony import */ var _components_employee_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/employee/homepage/homepage.component */ "YZzx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [
    { path: '', component: _components_authentication_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"] },
    //   { path: 'nav', component: NavComponent,canActivate: [AuthGuard],
    //           children: [
    //             { path: 'vform', component: VaccinationFormComponent},
    //             { path: 'dform', component: DiagnosisFormComponent},
    //              { path: 'dashboard', component: DashboardComponent},
    //              { path: 'empdetails/:id', component: EmployeeDetailsPageComponent}
    //           ]
    // },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"], canActivate: [_shared_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            { path: 'dashboard', component: _components_nav_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
            { path: 'empdetails/:id', component: _employee_details_page_employee_details_page_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeDetailsPageComponent"] }
        ] },
    { path: 'employee', component: _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeComponent"], canActivate: [_shared_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            { path: 'homepage', component: _components_employee_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"] },
            { path: 'vform', component: _components_vaccination_form_vaccination_form_component__WEBPACK_IMPORTED_MODULE_6__["VaccinationFormComponent"] },
            { path: 'dform', component: _components_diagnosis_form_diagnosis_form_component__WEBPACK_IMPORTED_MODULE_7__["DiagnosisFormComponent"] }
        ] },
    { path: 'login', component: _components_authentication_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"] },
    { path: 'forgot-password', component: _components_authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__["ForgotPasswordComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xd6D":
/*!*****************************************************************!*\
  !*** ./src/app/components/nav/dashboard/dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/employee/employee.service */ "5W1o");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _charts_status_chart_status_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../charts/status-chart/status-chart.component */ "gmdY");
/* harmony import */ var _charts_vaccination_chart_vaccination_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../charts/vaccination-chart/vaccination-chart.component */ "+S/7");
/* harmony import */ var _charts_diagnosis_chart_diagnosis_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../charts/diagnosis-chart/diagnosis-chart.component */ "ZWHW");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! mat-table-exporter */ "KUt4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "ofXK");






























function DashboardComponent_mat_header_cell_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", employee_r50.empid, " ");
} }
function DashboardComponent_mat_header_cell_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", employee_r51.name, "");
} }
function DashboardComponent_mat_header_cell_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Age:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r52 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r8.getAge(employee_r52.dob), "");
} }
function DashboardComponent_mat_header_cell_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_127_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](employee_r53.location);
} }
function DashboardComponent_mat_cell_127_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Location:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DashboardComponent_mat_cell_127_div_3_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DashboardComponent_mat_cell_127_div_4_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r53.location !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r53.location === "");
} }
function DashboardComponent_mat_header_cell_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Department:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", employee_r57.department, "");
} }
function DashboardComponent_mat_header_cell_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "First Dose");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_133_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_133_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "First Dose:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DashboardComponent_mat_cell_133_span_3_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DashboardComponent_mat_cell_133_span_4_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r58.firstDose == "yesFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r58.firstDose == "noFirst" || employee_r58.firstDose === "");
} }
function DashboardComponent_mat_header_cell_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Second Dose");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_136_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_136_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Second Dose:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DashboardComponent_mat_cell_136_span_3_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DashboardComponent_mat_cell_136_span_4_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r61.secondDose == "yesSecond");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r61.secondDose == "noSecond" || employee_r61.secondDose === "");
} }
function DashboardComponent_mat_header_cell_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Diagnosed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_139_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_139_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Diagnosed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DashboardComponent_mat_cell_139_span_3_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DashboardComponent_mat_cell_139_span_4_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r64.diagnosed == "yesDiagnosed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r64.diagnosed == "noDiagnosed" || employee_r64.diagnosed == "");
} }
function DashboardComponent_mat_header_cell_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Eligibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_142_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r68.getEligibleIn(employee_r67));
} }
function DashboardComponent_mat_cell_142_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Pending Response");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_142_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Not Negative");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Eligibility:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DashboardComponent_mat_cell_142_div_3_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DashboardComponent_mat_cell_142_div_4_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, DashboardComponent_mat_cell_142_div_5_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r67.secondDose !== "" || employee_r67.diagnosed !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r67.secondDose === "" && employee_r67.diagnosed === "" || employee_r67.secondDose === "" && employee_r67.diagnosed === "noDiagnosed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r67.diagnosed == "yesDiagnosed" && employee_r67.testedNegative == false);
} }
function DashboardComponent_mat_header_cell_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_145_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Pending Response");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_145_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](employee_r72.firstReason);
} }
function DashboardComponent_mat_cell_145_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](employee_r72.secondReason);
} }
function DashboardComponent_mat_cell_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Reason:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DashboardComponent_mat_cell_145_div_3_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DashboardComponent_mat_cell_145_div_4_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, DashboardComponent_mat_cell_145_div_5_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r72.firstReason === "" && employee_r72.secondReason === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r72.firstReason !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r72.secondReason !== "");
} }
function DashboardComponent_mat_header_row_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-header-row");
} }
function DashboardComponent_mat_row_147_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_mat_row_147_Template_mat_row_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r80); const row_r78 = ctx.$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r79.onClick($event, row_r78); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_tr_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No results found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_header_cell_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", employee_r81.empid, " ");
} }
function DashboardComponent_mat_header_cell_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", employee_r82.name, "");
} }
function DashboardComponent_mat_header_cell_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r83 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r32.getAge(employee_r83.dob), "");
} }
function DashboardComponent_mat_header_cell_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_164_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](employee_r84.location);
} }
function DashboardComponent_mat_cell_164_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DashboardComponent_mat_cell_164_div_1_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DashboardComponent_mat_cell_164_div_2_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r84.location !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r84.location === "");
} }
function DashboardComponent_mat_header_cell_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", employee_r88.department, "");
} }
function DashboardComponent_mat_header_cell_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "First Dose");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_170_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_170_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DashboardComponent_mat_cell_170_span_1_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DashboardComponent_mat_cell_170_span_2_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r89.firstDose == "yesFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r89.firstDose == "noFirst" || employee_r89.firstDose === "");
} }
function DashboardComponent_mat_header_cell_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Second Dose");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_173_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_173_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DashboardComponent_mat_cell_173_span_1_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DashboardComponent_mat_cell_173_span_2_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r92.secondDose == "yesSecond");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r92.secondDose == "noSecond" || employee_r92.secondDose === "");
} }
function DashboardComponent_mat_header_cell_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Diagnosed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_176_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_176_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DashboardComponent_mat_cell_176_span_1_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DashboardComponent_mat_cell_176_span_2_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r95.diagnosed == "yesDiagnosed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r95.diagnosed == "noDiagnosed" || employee_r95.diagnosed == "");
} }
function DashboardComponent_mat_header_cell_178_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Eligibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_179_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r99.getEligibleIn(employee_r98));
} }
function DashboardComponent_mat_cell_179_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Pending Response");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_179_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Not Negative");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DashboardComponent_mat_cell_179_div_1_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DashboardComponent_mat_cell_179_div_2_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DashboardComponent_mat_cell_179_div_3_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r98 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r98.secondDose !== "" || employee_r98.diagnosed !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r98.secondDose === "" && employee_r98.diagnosed === "" || employee_r98.secondDose === "" && employee_r98.diagnosed === "noDiagnosed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r98.diagnosed == "yesDiagnosed" && employee_r98.testedNegative == false);
} }
function DashboardComponent_mat_header_cell_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_182_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_cell_182_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](employee_r103.firstReason);
} }
function DashboardComponent_mat_cell_182_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](employee_r103.secondReason);
} }
function DashboardComponent_mat_cell_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DashboardComponent_mat_cell_182_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DashboardComponent_mat_cell_182_div_2_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DashboardComponent_mat_cell_182_div_3_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r103.firstReason === "" && employee_r103.secondReason === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r103.firstReason !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employee_r103.secondReason !== "");
} }
function DashboardComponent_mat_header_row_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-header-row");
} }
function DashboardComponent_mat_row_184_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_mat_row_184_Template_mat_row_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r111); const row_r109 = ctx.$implicit; const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r110.onClick($event, row_r109); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_tr_185_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No results found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 20]; };
class DashboardComponent {
    constructor(afs, breakpointObserver, service, router, ngZone, firestore) {
        this.afs = afs;
        this.breakpointObserver = breakpointObserver;
        this.service = service;
        this.router = router;
        this.ngZone = ngZone;
        this.firestore = firestore;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumns = ['empid', 'name', 'age', 'location', 'department', 'firstDose', 'secondDose', 'diagnosed', 'eligible'];
        this.displayedColumns2 = ['empid', 'name', 'age', 'location', 'department', 'firstDose', 'secondDose', 'diagnosed', 'eligible', 'reason'];
        this.ageFilter = null;
        this.eligibleCount = 0;
        this.nonEligibleCount = 0;
        this.pendingResponseCount = 0;
        this.firstDoseCount = 0;
        this.secondDoseCount = 0;
        this.noDoseCount = 0;
        this.testedNegativeCount = 0;
        this.diagnosedCount = 0;
        this.cardLayout = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ matches }) => {
            if (matches) {
                return {
                    columns: 1,
                    miniCard: { cols: 1, rows: 2 },
                    chart: { cols: 1, rows: 3 },
                    table: { cols: 1, rows: 4 },
                };
            }
            return {
                columns: 3,
                miniCard: { cols: 1, rows: 2 },
                chart: { cols: 2, rows: 3 },
                table: { cols: 3, rows: 3 },
            };
        }));
    }
    ngOnInit() {
        this.dataSource.filterPredicate = this.filterObject;
        this.service.getEmployees().subscribe(data => {
            this.list = data;
            // console.log(this.list);
            this.list.forEach(element => {
                var answer;
                answer = this.getEligibleIn(element);
                if (answer === 'Eligible') {
                    this.eligibleCount++;
                }
                else if (answer === undefined) {
                    this.pendingResponseCount++;
                }
                else {
                    this.nonEligibleCount++;
                }
                if (element.secondDose === 'yesSecond') {
                    this.secondDoseCount++;
                }
                else if (element.firstDose === 'yesFirst' && element.secondDose === 'noSecond') {
                    this.firstDoseCount++;
                }
                else {
                    this.noDoseCount++;
                }
                if (element.testedNegative === true) {
                    this.testedNegativeCount++;
                }
                else if (element.diagnosed === 'yesDiagnosed' && element.testedNegative === false) {
                    this.diagnosedCount++;
                }
            });
            this.service.diagnosedChange(this.diagnosedCount);
            this.service.testedNegativeChange(this.testedNegativeCount);
            this.service.firstDoseChange(this.firstDoseCount);
            this.service.secondDoseChange(this.secondDoseCount);
            this.service.noDoseChange(this.noDoseCount);
            this.service.eligibleChange(this.eligibleCount);
            this.service.nonEligibleChange(this.nonEligibleCount);
            this.service.pendingChange(this.pendingResponseCount);
            this.dataSource.data = this.list;
            this.dataSource.paginator = this.paginator;
            this.dataSource2.data = this.list;
            this.dataSource2.paginator = this.paginator;
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    customFilter() {
        let address = this.dataSource[0];
        let firstDose = "";
        let secondDose = "";
        let department = "";
        let answer = "";
        let diagnosed = "";
        // console.log(answer)
        //department
        if (this.departmentFilter === "1") {
            department = "admin";
            answer = answer + department;
        }
        else if (this.departmentFilter === "2") {
            department = "hr";
            answer = answer + department;
        }
        else if (this.departmentFilter === "3") {
            department = "security";
            answer = answer + department;
        }
        else if (this.departmentFilter === "4") {
            department = "development";
            answer = answer + department;
        }
        else if (this.departmentFilter === "5") {
            department = "accounts";
            answer = answer + department;
        }
        if (this.vaccinationFilter === "1") {
            firstDose = "yesFirst";
            answer = answer + " " + firstDose;
        }
        else if (this.vaccinationFilter === "2") {
            secondDose = "yesSecond";
            answer = answer + " " + secondDose;
        }
        if (this.diagnosisFilter === "1") {
            diagnosed = "yesDiagnosed";
            answer = answer + " " + diagnosed;
        }
        else if (this.diagnosisFilter === "2") {
            diagnosed = "noDiagnosed";
            answer = answer + " " + diagnosed;
        }
        this.dataSource.filter = answer;
    }
    getAge(dob) {
        var dateMomentObject = moment__WEBPACK_IMPORTED_MODULE_4__(dob, "DD/MM/YYYY");
        var dateObject = dateMomentObject.toDate();
        var years = moment__WEBPACK_IMPORTED_MODULE_4__().diff(dateObject, 'years', false);
        return years;
    }
    getEligibleIn(employee) {
        var eligibility;
        if (employee.secondDose === "noSecond" && employee.testedNegative === false) {
            eligibility = 'Not Eligible';
            return 'Not Eligible';
        }
        else {
            if (employee.secondDose === "yesSecond" && employee.testedNegative === false) {
                var secondDateMomentObject = moment__WEBPACK_IMPORTED_MODULE_4__(employee.secondDate, "DD/MM/YYYY");
                var secondDateObject = secondDateMomentObject.toDate();
                var secondDateDays = moment__WEBPACK_IMPORTED_MODULE_4__().diff(secondDateObject, 'days', false);
                if (secondDateDays >= 15) {
                    eligibility = 'Eligible';
                    return "Eligible";
                }
                else {
                    eligibility = "Eligible in " + (15 - secondDateDays) + " days.";
                    return "Eligible in " + (15 - secondDateDays) + " days.";
                }
            }
            else if (employee.secondDose === "noSecond" && employee.testedNegative === true) {
                var dateNegativeMomentObject = moment__WEBPACK_IMPORTED_MODULE_4__(employee.dateNegative, "DD/MM/YYYY");
                var dateNegativeObject = dateNegativeMomentObject.toDate();
                var testedNegativeDays = moment__WEBPACK_IMPORTED_MODULE_4__().diff(dateNegativeObject, 'days', false);
                if (testedNegativeDays >= 15 && testedNegativeDays <= 90) {
                    eligibility = 'Eligible';
                    return "Eligible";
                }
                else if (testedNegativeDays < 15) {
                    eligibility = "Eligible in " + (15 - testedNegativeDays) + " days";
                    return "Eligible in " + (15 - testedNegativeDays) + " days";
                }
                else if (testedNegativeDays > 90) {
                    eligibility = 'Not Eligible';
                    return 'Not Eligible';
                }
            }
            else {
                var dateNegativeMomentObject = moment__WEBPACK_IMPORTED_MODULE_4__(employee.dateNegative, "DD/MM/YYYY");
                var dateNegativeObject = dateNegativeMomentObject.toDate();
                var testedNegativeDays = moment__WEBPACK_IMPORTED_MODULE_4__().diff(dateNegativeObject, 'days', false);
                if (testedNegativeDays >= 15 && testedNegativeDays <= 90) {
                    eligibility = 'Eligible';
                    return "Eligible";
                }
                else if (testedNegativeDays < 15) {
                    eligibility = "Eligible in " + (15 - testedNegativeDays) + " days";
                    return "Eligible in " + (15 - testedNegativeDays) + " days";
                }
            }
        }
        // console.log(this.eligibileCount)
        // this.afs.doc(`employees/${employee.name}`)?.update({eligibilty: this.eligibilty})
    }
    filterObject(obj, filter) {
        var data = "";
        var answer = [];
        let finalAnswer = true;
        JSON.parse(JSON.stringify(obj), (key, val) => {
            if (typeof val !== "object")
                data = data + val.toString();
        });
        data = data.toLowerCase();
        filter.split(' ').forEach(element => {
            if (data.includes(element.toLowerCase()) === false) {
                answer.push(false);
            }
            else {
                answer.push(true);
            }
        });
        answer.forEach(element => {
            if (element === false) {
                finalAnswer = false;
            }
        });
        return finalAnswer;
    }
    clearFilter() {
        this.dataSource.filter = 'xxx';
        this.departmentFilter = "";
        this.vaccinationFilter = "";
        this.diagnosisFilter = "";
    }
    onClick(event, item) {
        this.router.navigate(['/admin/empdetails', item.id]);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 187, vars: 41, consts: [[1, "grid-container"], ["rowHeight", "200px", 3, "cols"], [3, "colspan", "rowspan"], [1, "dashboard-card"], [1, "chart-bar"], [1, "dashboard-card-content"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["appearance", "standard", 1, "employee-search"], ["matInput", "", 3, "keyup"], ["input", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["mat-icon-button", "", 3, "click"], ["filters", "matMenu"], [3, "click"], ["appearance", "fill"], [3, "ngModel", "ngModelChange"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", ""], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "example-container", "mat-elevation-z8"], ["aria-label", "Elements", 3, "dataSource"], ["table", ""], ["matColumnDef", "empid"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "age"], ["matColumnDef", "location"], ["matColumnDef", "department"], ["style", "text-transform: capitalize;", 4, "matCellDef"], ["matColumnDef", "firstDose"], ["matColumnDef", "secondDose"], ["matColumnDef", "diagnosed"], ["matColumnDef", "eligible"], ["matColumnDef", "reason"], [4, "matHeaderRowDef"], [3, "click", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [1, "example-container", "mat-elevation-z8", 2, "display", "none"], ["matTableExporter", "", "aria-label", "Elements", 3, "dataSource"], ["exporter", "matTableExporter"], [1, "header-cell"], [1, "mobile-label"], [4, "ngIf"], [2, "text-transform", "capitalize"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "app-status-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "VACCINATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "app-vaccination-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "DIAGNOSIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "app-diagnosis-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function DashboardComponent_Template_input_keyup_40_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "filter_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r112); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](152); return _r26.exportTable("csv", { fileName: "report" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-menu", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-accordion", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_Template_mat_accordion_click_52_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, " Filter by department ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "apartment");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_mat_select_ngModelChange_62_listener($event) { return ctx.departmentFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "HR");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, " Filter by Vaccination ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "vaccines");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Vaccination");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_mat_select_ngModelChange_84_listener($event) { return ctx.vaccinationFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "First Dose");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Second Dose");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, " Filter by Diagnosis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "coronavirus");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "Diagnosis");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_mat_select_ngModelChange_100_listener($event) { return ctx.diagnosisFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Diagnosed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Not Diagnosed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_109_listener() { return ctx.customFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_111_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "mat-table", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](116, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](117, DashboardComponent_mat_header_cell_117_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](118, DashboardComponent_mat_cell_118_Template, 4, 1, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](119, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](120, DashboardComponent_mat_header_cell_120_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](121, DashboardComponent_mat_cell_121_Template, 4, 1, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](122, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](123, DashboardComponent_mat_header_cell_123_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](124, DashboardComponent_mat_cell_124_Template, 4, 1, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](125, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](126, DashboardComponent_mat_header_cell_126_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](127, DashboardComponent_mat_cell_127_Template, 5, 2, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](128, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](129, DashboardComponent_mat_header_cell_129_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](130, DashboardComponent_mat_cell_130_Template, 4, 1, "mat-cell", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](131, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](132, DashboardComponent_mat_header_cell_132_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](133, DashboardComponent_mat_cell_133_Template, 5, 2, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](134, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](135, DashboardComponent_mat_header_cell_135_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](136, DashboardComponent_mat_cell_136_Template, 5, 2, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](137, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](138, DashboardComponent_mat_header_cell_138_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](139, DashboardComponent_mat_cell_139_Template, 5, 2, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](140, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](141, DashboardComponent_mat_header_cell_141_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](142, DashboardComponent_mat_cell_142_Template, 6, 3, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](143, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](144, DashboardComponent_mat_header_cell_144_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](145, DashboardComponent_mat_cell_145_Template, 6, 3, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](146, DashboardComponent_mat_header_row_146_Template, 1, 0, "mat-header-row", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](147, DashboardComponent_mat_row_147_Template, 1, 0, "mat-row", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](148, DashboardComponent_tr_148_Template, 3, 0, "tr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](149, "mat-paginator", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "mat-table", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](153, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](154, DashboardComponent_mat_header_cell_154_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](155, DashboardComponent_mat_cell_155_Template, 2, 1, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](156, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](157, DashboardComponent_mat_header_cell_157_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](158, DashboardComponent_mat_cell_158_Template, 2, 1, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](159, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](160, DashboardComponent_mat_header_cell_160_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](161, DashboardComponent_mat_cell_161_Template, 2, 1, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](162, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](163, DashboardComponent_mat_header_cell_163_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](164, DashboardComponent_mat_cell_164_Template, 3, 2, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](165, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](166, DashboardComponent_mat_header_cell_166_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](167, DashboardComponent_mat_cell_167_Template, 2, 1, "mat-cell", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](168, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](169, DashboardComponent_mat_header_cell_169_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](170, DashboardComponent_mat_cell_170_Template, 3, 2, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](171, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](172, DashboardComponent_mat_header_cell_172_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](173, DashboardComponent_mat_cell_173_Template, 3, 2, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](174, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](175, DashboardComponent_mat_header_cell_175_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](176, DashboardComponent_mat_cell_176_Template, 3, 2, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](177, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](178, DashboardComponent_mat_header_cell_178_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](179, DashboardComponent_mat_cell_179_Template, 4, 3, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](180, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](181, DashboardComponent_mat_header_cell_181_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](182, DashboardComponent_mat_cell_182_Template, 4, 3, "mat-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](183, DashboardComponent_mat_header_row_183_Template, 1, 0, "mat-header-row", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](184, DashboardComponent_mat_row_184_Template, 1, 0, "mat-row", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](185, DashboardComponent_tr_185_Template, 3, 0, "tr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](186, "mat-paginator", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](51);
        let tmp_0_0 = null;
        let tmp_1_0 = null;
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        let tmp_7_0 = null;
        let tmp_8_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("cols", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 21, ctx.cardLayout)) == null ? null : tmp_0_0.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colspan", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 23, ctx.cardLayout)) == null ? null : tmp_1_0.miniCard.cols)("rowspan", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 25, ctx.cardLayout)) == null ? null : tmp_2_0.miniCard.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colspan", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 27, ctx.cardLayout)) == null ? null : tmp_3_0.miniCard.cols)("rowspan", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 29, ctx.cardLayout)) == null ? null : tmp_4_0.miniCard.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colspan", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 31, ctx.cardLayout)) == null ? null : tmp_5_0.miniCard.cols)("rowspan", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 33, ctx.cardLayout)) == null ? null : tmp_6_0.miniCard.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colspan", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 35, ctx.cardLayout)) == null ? null : tmp_7_0.table.cols)("rowspan", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 37, ctx.cardLayout)) == null ? null : tmp_8_0.table.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.departmentFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.vaccinationFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.diagnosisFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](39, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](40, _c0));
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _charts_status_chart_status_chart_component__WEBPACK_IMPORTED_MODULE_12__["StatusChartComponent"], _charts_vaccination_chart_vaccination_chart_component__WEBPACK_IMPORTED_MODULE_13__["VaccinationChartComponent"], _charts_diagnosis_chart_diagnosis_chart_component__WEBPACK_IMPORTED_MODULE_14__["DiagnosisChartComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenu"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanelTitle"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_25__["MatTableExporterDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_26__["AsyncPipe"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-height: 100%;\n  justify-content: center;\n  align-items: stretch;\n  margin : 16px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n\n.chart-bar[_ngcontent-%COMP%]{\n  background: #3d84b8;\n  color: white;\n}\n\n.notification-bar[_ngcontent-%COMP%]{\n  background: #4aa96c;\n  color: white;\n}\n\n.stats-table-bar[_ngcontent-%COMP%]{\n  background: #ac66cc;\n  color: white;\n}\n\n.full-width-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  .mat-sort-header-container {\n  display:flex;\n  justify-content:center;\n}\n\na[_ngcontent-%COMP%]{\n  text-decoration: none;\n  color: rgba(0,0,0,.87);\n}\n\n.header[_ngcontent-%COMP%]{\n  padding-bottom: 50px;\n  font-size: 1.5em;\n  font-weight: 600;\n}\n\n.employee-search[_ngcontent-%COMP%]{\n  width : 30%;\n}\n\n .mat-menu-panel {\n  max-width: none !important;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]{\n  margin : 10px;\n}\n\nmat-icon[_ngcontent-%COMP%]{\n  margin-right: 5px;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]{\n  margin-bottom: 5px;\n}\n\nbutton[_ngcontent-%COMP%]{\n  margin-right: 5px;\n}\n\ntr[_ngcontent-%COMP%]{\n  cursor : pointer;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mobile-label[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media(max-width: 600px) {\n  .mobile-label[_ngcontent-%COMP%] {\n    width: 80px;\n    display: inline-block;\n        font-weight: bold;\n  }\n\n  .mat-header-row[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mat-row[_ngcontent-%COMP%] { \n    flex-direction: column;\n    align-items: start;\n    padding: 8px 24px;\n  }\n}\n\n.header-cell[_ngcontent-%COMP%]{\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQztFQUNDLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gscUJBQXFCO1FBQ2pCLGlCQUFpQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xufVxuXG4ubW9yZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb3JlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBtYXJnaW4gOiAxNnB4O1xufVxuXG5tYXQtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jaGFydC1iYXJ7XG4gIGJhY2tncm91bmQ6ICMzZDg0Yjg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5vdGlmaWNhdGlvbi1iYXJ7XG4gIGJhY2tncm91bmQ6ICM0YWE5NmM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0YXRzLXRhYmxlLWJhcntcbiAgYmFja2dyb3VuZDogI2FjNjZjYztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZnVsbC13aWR0aC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4gOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xufVxuXG5he1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC44Nyk7XG59XG5cbi5oZWFkZXJ7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZW1wbG95ZWUtc2VhcmNoe1xuICB3aWR0aCA6IDMwJTtcbn1cblxuOjpuZy1kZWVwLm1hdC1tZW51LXBhbmVsIHtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVse1xuICBtYXJnaW4gOiAxMHB4O1xufVxuXG5tYXQtaWNvbntcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVse1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmJ1dHRvbntcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbnRye1xuICBjdXJzb3IgOiBwb2ludGVyO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLm1vYmlsZS1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2JpbGUtbGFiZWwge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAubWF0LWhlYWRlci1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWF0LXJvdyB7IFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICB9XG59XG5cbi5oZWFkZXItY2VsbHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuXG5cblxuXG5cblxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map