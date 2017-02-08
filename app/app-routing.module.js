"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employee_list_component_1 = require("./employee/employee-list.component");
var employee_component_1 = require("./employee/employee.component");
var employee_home_component_1 = require("./employee/employee-home.component");
var http_test_component_1 = require("./httpdemo/http-test.component");
var paging_table_component_1 = require("./pagination/paging-table.component");
var routes = [
    { path: '', redirectTo: '/employeeHome', pathMatch: 'full' },
    { path: 'employeeHome', component: employee_home_component_1.EmployeeHome },
    { path: 'employeeList', component: employee_list_component_1.EmployeeListComponent },
    { path: 'employee/:id', component: employee_component_1.EmployeeComponent },
    { path: 'getResponse', component: http_test_component_1.HTTPTestComponent },
    { path: 'pagination', component: paging_table_component_1.PagingTable }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map