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
var state_service_1 = require("../service/state.service");
var employee_service_1 = require("../service/employee.service");
var http_1 = require("@angular/http");
var PagingTable = (function () {
    function PagingTable(stateService, employeeService, http) {
        this.stateService = stateService;
        this.employeeService = employeeService;
        this.http = http;
        this.heroesUrl = 'http://localhost:8080/employee/findAll';
        this.itemsPerpage = 10;
        this.totalPages = 0;
        this.totalRecords = 0;
        this.sortDir = "asc";
        this.sortBy = "na";
        this.pages = [];
        this.tableHeadders = [];
        this.currentPage = 0;
        this.startPageIndex = 1;
        this.pageStart = 0;
        this.pageEnd = 0;
        this.currentIndex = 1;
        this.titiles = [{ name: 'Id' }, { name: 'Name' }, { name: 'Email' }, { name: 'Mobile' }];
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.setPage = function () {
            var pages = [];
            if (this.startPageIndex == 1 || this.totalPages - this.startPageIndex >= 4) {
                if (this.startPageIndex + 5 <= this.totalPages + 1) {
                    for (var i = this.startPageIndex; i < this.startPageIndex + 5; i++) {
                        if (i < this.totalPages + 1) {
                            pages.push(i);
                        }
                    }
                }
                else {
                    for (var i = this.startPageIndex; i < this.totalPages + 1; i++) {
                        if (i < this.totalPages + 1) {
                            pages.push(i);
                        }
                    }
                }
                this.pages = pages;
            }
        };
        this.valueChanged = function () {
            this.firstPage();
        };
    }
    PagingTable.prototype.getEmployees = function () {
        // this.employeeService.findAllEmployees().then(employees => this.employees=employees);
        this.getHeroes();
    };
    PagingTable.prototype.getHeroes = function () {
        var _this = this;
        this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) {
            console.log("Hereeee...." + response);
            _this.employees = response.json();
            _this.setPage();
        })
            .catch(this.handleError);
    };
    PagingTable.prototype.ngOnInit = function () {
        var _this = this;
        this.stateService.getAll().subscribe(function (states) {
            _this.states = states;
            _this.setPage();
        }, function (error) { return _this.errorMsg = error; });
        // this.getHeroes();
        this.getEmpForPage();
    };
    PagingTable.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    PagingTable.prototype.getEmpForPage = function () {
        var _this = this;
        var pageUrl = 'http://localhost:8080/employee/findForPage/' + this.currentPage + '/' + this.itemsPerpage + '/' + this.sortDir + '/' + this.sortBy;
        this.http.get(pageUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.log("Hereeee...." + response);
            _this.pageResult = response.json();
            console.log(_this.pageResult.reultList);
            _this.employees = _this.pageResult.reultList;
            console.log(_this.pageResult.totalPages);
            _this.totalPages = _this.pageResult.totalPages;
            _this.totalRecords = _this.pageResult.totalRecords;
            _this.setPage();
            _this.setPageDetails();
        }).catch(this.handleError);
    };
    PagingTable.prototype.nextPage = function () {
        if (this.currentPage < this.totalPages - 1) {
            this.startPageIndex = this.startPageIndex + 1;
            this.currentIndex = this.currentPage + 2;
            this.currentPage = this.currentPage + 1;
            this.getEmpForPage();
        }
    };
    PagingTable.prototype.previousPage = function () {
        if (this.currentPage > 0) {
            if (this.startPageIndex > 1) {
                this.startPageIndex = this.startPageIndex - 1;
            }
            this.currentIndex = this.currentPage;
            this.currentPage = this.currentPage - 1;
            this.getEmpForPage();
        }
    };
    PagingTable.prototype.movecurrentPage = function (page) {
        this.currentPage = page - 1;
        this.getEmpForPage();
        this.currentIndex = this.currentPage + 1;
    };
    PagingTable.prototype.firstPage = function () {
        this.currentPage = 0;
        this.startPageIndex = 1;
        this.getEmpForPage();
        this.currentIndex = 1;
    };
    PagingTable.prototype.lastPage = function () {
        this.currentPage = this.totalPages - 1;
        if (this.totalPages - 4 > 0) {
            this.startPageIndex = this.totalPages - 4;
        }
        this.getEmpForPage();
        this.currentIndex = this.totalPages;
    };
    PagingTable.prototype.setPageDetails = function () {
        this.pageStart = this.currentPage * this.itemsPerpage + 1;
        this.pageEnd = this.currentPage * this.itemsPerpage + +this.itemsPerpage;
        if (this.pageEnd > this.totalRecords) {
            this.pageEnd = this.totalRecords;
        }
    };
    PagingTable.prototype.sortColumn = function (sortBy) {
        this.sortDir = this.sortDir == 'asc' ? 'desc' : 'asc';
        this.sortBy = sortBy.toLowerCase();
        this.firstPage();
    };
    return PagingTable;
}());
PagingTable = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'page-view',
        templateUrl: 'paging-table.component.html',
        styleUrls: ['paging-table.component.css']
    }),
    __metadata("design:paramtypes", [state_service_1.StateService, employee_service_1.EmployeeService, http_1.Http])
], PagingTable);
exports.PagingTable = PagingTable;
//# sourceMappingURL=paging-table.component.js.map