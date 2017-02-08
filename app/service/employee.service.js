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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
        this.employeeUrl = 'app/employees';
        this.createEmpUrl = 'http://localhost:8080/employee/create';
        this.heroesUrl = 'http://localhost:8080/employee/findAll';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this.employeeUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    EmployeeService.prototype.create = function (employee) {
        return this.http
            .post(this.createEmpUrl, employee, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.update = function (employee) {
        var url = this.employeeUrl + "/" + employee.id;
        return this.http
            .put(url, JSON.stringify(employee), { headers: this.headers })
            .toPromise()
            .then(function () { return employee; })
            .catch(this.handleError);
    };
    EmployeeService.prototype.delete = function (id) {
        console.log('id received' + id);
        var url = this.employeeUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.getEmployees()
            .then(function (employees) { return employees.find(function (employee) { return employee.id === id; }); });
    };
    EmployeeService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    EmployeeService.prototype.findAllEmployees = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) {
            console.log(response);
            response.json().data;
        })
            .catch(this.handleError);
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map