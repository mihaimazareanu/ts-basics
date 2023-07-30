"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Mihai",
    email: "test@test.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Mihai", isPaid: false, email: "test@test.com" };
createUser(newUser);
function createCourse() {
    return { name: "React.js", price: 399 };
}
