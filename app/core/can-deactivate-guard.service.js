"use strict";
var Observable_1 = require("rxjs/Observable");
var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        // run the function for canDeactivate and if its a promise or a boolean we handle it either way
        // return true;
        // if (component.canDeactivate) {
        //   let deactivate = component.canDeactivate();
        //   return this.toObservable(deactivate);
        // } else {
        //   return true;
        // }
        return component.canDeactivate ?
            this.toObservable(component.canDeactivate()) : true;
    };
    CanDeactivateGuard.prototype.toObservable = function (deactivate) {
        var p = Promise.resolve(deactivate);
        var o = Observable_1.Observable.fromPromise(p);
        return o;
    };
    return CanDeactivateGuard;
}());
exports.CanDeactivateGuard = CanDeactivateGuard;
/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/ 
//# sourceMappingURL=can-deactivate-guard.service.js.map