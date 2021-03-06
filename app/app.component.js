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
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'emp-app',
        template: "\n    <ul class=\"menubar\">\n    <li> <a routerLink=\"/employeeHome\" routerLinkActive=\"active\">Home</a></li>\n    <li> <a routerLink=\"/employeeList\" routerLinkActive=\"active\">Employees</a></li>\n    <li><a routerLink=\"/employee/h\" routerLinkActive=\"active\">New employee</a></li>\n    <li><a routerLink=\"/pagination\" routerLinkActive=\"active\">Pagination Sample</a></li>\n    </ul>\n     <router-outlet></router-outlet>\n    ",
        styleUrls: ['app.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map