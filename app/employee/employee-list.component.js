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
var employee_service_1 = require("../service/employee.service");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        this.employee = {};
        this.editmode = false;
        this.password = '';
        this.countries = ['India', 'America',
            'UAE', 'UK'];
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    EmployeeListComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeeService.getEmployees().then(function (employees) { return _this.employees = employees; });
    };
    EmployeeListComponent.prototype.onSelect = function (employee) {
        // this.employee=employee;
        // this.editmode=true;
        // this.password=employee.password;
        this.router.navigate(['/employee', employee.id]);
    };
    EmployeeListComponent.prototype.deleteEmployee = function (employee) {
        var _this = this;
        this.employeeService.delete(employee.id).then(function () {
            _this.employees = _this.employees.filter(function (h) { return h !== employee; });
        });
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'employee-list',
        templateUrl: 'employee-list.component.html',
        styleUrls: ['employee-list.component.css', 'employee.component.css']
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.Router])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map