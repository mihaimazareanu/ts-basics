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
    protected _courseCount = 1 //private _courseCount = 1 will not be extended in the new class SubUser, as it is not accessible outside the class User
    readonly city: string = "Hamburg"
    constructor(public email: string, public name: string) {
    }

    private deleteToken() {
        console.log("Token deleted.")
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) { //setters don't need any return type
        if (courseNum <= 1) {
            throw new Error("The course number should be greater than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const mihai = new User("test@test.com", "Mihai")