"use strict";
/* class User {
    public email: string // everything not marked will be public
    private name: string //the JS equivalent of private is #
    readonly city: string = "Hamburg"
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
    }
} */
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1; //private _courseCount = 1 will not be extended in the new class SubUser, as it is not accessible outside the class User
        this.city = "Hamburg";
    }
    deleteToken() {
        console.log("Token deleted.");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("The course number should be greater than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const mihai = new User("test@test.com", "Mihai");
