let greetings: string = "Hello Mihai";

greetings.toUpperCase();
console.log(greetings);

//number

let userId: number = 334455;

//boolean

let isLoggedIn: boolean = false

//type inference
//it is redundant to type 
//let userId: number = 334455;
// let userId = 334455 is enough for TS to know that userId is of type number

//any

let hero: string; // let hero; TS inferes type any;

function getHero() {
    return "Thor"
}

hero = getHero();


export {}