"use strict";
var Employee = (function () {
    function Employee(id, name, email, mobile, state, country, username, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.state = state;
        this.country = country;
        this.username = username;
        this.password = password;
    }
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map