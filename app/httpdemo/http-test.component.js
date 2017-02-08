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
var http_test_service_1 = require("./http-test.service");
var HTTPTestComponent = (function () {
    function HTTPTestComponent(_httpService) {
        this._httpService = _httpService;
    }
    // onTestGet() {
    //     this._httpService.getCurrentTime().subscribe(data => this.getData =JSON.stringify(data),
    //     error => alert(error),
    //     () => console.log(this.getData.replace(",","\n").replace(",","\n"))
    //     );
    //     formatData => this.getData.replace(",","\n").replace(",","\n");
    // }
    HTTPTestComponent.prototype.onTestGet = function () {
        var _this = this;
        console.log(this.getData);
        this._httpService.getCurrentTime().subscribe(function (data) { return _this.getData = JSON.stringify(data).replace(",", "\n"); }, function (error) { return alert(error); });
    };
    HTTPTestComponent.prototype.onTestPost = function () {
        var _this = this;
        this._httpService.postData().subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("Completed"); });
    };
    return HTTPTestComponent;
}());
HTTPTestComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "http-test",
        templateUrl: 'http-test.component.html',
        providers: [http_test_service_1.HTTPTestService]
    }),
    __metadata("design:paramtypes", [http_test_service_1.HTTPTestService])
], HTTPTestComponent);
exports.HTTPTestComponent = HTTPTestComponent;
//# sourceMappingURL=http-test.component.js.map