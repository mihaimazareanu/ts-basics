/* const User = {
    name: "Mihai",
    email: "test@test.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {

}

let newUser = {name: "Mihai", isPaid: false, email: "test@test.com"}

createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: "React.js", price: 399}
} */

//Type Aliases - create own types

/* type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user: User): User {
    return {name: "", email:"", isActive: false}
}

createUser({name: "", email:"", isActive: false}) */

//READONLY and optional

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number
}

let newUser: User = {
    _id: "12345",
    name: "Mihai",
    email: "test@test.com",
    isActive: false
}

type cardNumber = {
    cardNumber: number
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {cvv: number}

newUser.email = "mihai@test.com" //This is fine, we can do this
//newUser._id = "56789" This is not possible, because _id is read only

export {}