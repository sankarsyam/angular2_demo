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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
var employee_service_1 = require("../service/employee.service");
var state_service_1 = require("../service/state.service");
var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService, route, location, stateService) {
        this.employeeService = employeeService;
        this.route = route;
        this.location = location;
        this.stateService = stateService;
        this.editmode = false;
        this.stateSelected = true;
        this.countries = ['India', 'America',
            'UAE', 'UK'];
        this.employee = {};
        this.submitted = false;
        this.password = '';
        this.searchTerms = new Subject_1.Subject();
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log('id received==' + params['id']);
            _this.empId = params['id'];
        });
        if (!isNaN(+this.empId)) {
            console.log('Inside numer , Id =' + this.empId);
            this.employeeService.getEmployee(+this.empId)
                .then(function (employee) {
                _this.employee = employee,
                    _this.password = employee.password;
            });
            this.editmode = true;
        }
        else {
            console.log('Inside  string , Id =' + this.empId);
            this.employee = {};
            this.editmode = false;
        }
        this.setSerach();
    };
    EmployeeComponent.prototype.setSerach = function () {
        var _this = this;
        this.states = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.stateService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    // Push a search term into the observable stream.
    EmployeeComponent.prototype.search = function (term) {
        this.stateSelected = false;
        this.searchTerms.next(term);
    };
    EmployeeComponent.prototype.selectState = function (state) {
        this.employee.state = state;
        this.stateSelected = true;
    };
    EmployeeComponent.prototype.onSubmit = function () { this.submitted = true; };
    EmployeeComponent.prototype.newEmployee = function (employee) {
        var _this = this;
        if (!employee || !employee.name || !employee.email || !employee.mobile || !employee.state) {
            this.errormessage = "Please fill all mandatory fields";
            return;
        }
        if (this.validateEmp(employee)) {
            this.employeeService.create(employee)
                .then(function (employee) {
                _this.employee = {};
                _this.password = '';
            });
        }
    };
    EmployeeComponent.prototype.clearFields = function () {
        this.employee = {};
        this.password = null;
        this.errormessage = null;
    };
    EmployeeComponent.prototype.goBack = function () {
        this.editmode = false;
        this.employee = {};
        this.location.back();
    };
    EmployeeComponent.prototype.editEmployee = function (employee) {
        var _this = this;
        if (!employee || !employee.name || !employee.email || !employee.mobile || !employee.state) {
            this.errormessage = "Please fill all mandatory fields";
            return;
        }
        if (this.validateEmp(employee)) {
            this.employeeService.update(employee)
                .then(function () { return _this.goBack(); });
        }
    };
    EmployeeComponent.prototype.validateEmp = function (employee) {
        if (employee.password != this.password) {
            this.errormessage = "Both  password should be same";
            return false;
        }
        return true;
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'emp-curd',
        templateUrl: 'employee.component.html',
        styleUrls: ['employee.component.css']
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        router_1.ActivatedRoute,
        common_1.Location,
        state_service_1.StateService])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map