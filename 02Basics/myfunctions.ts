function addTwo(num: number): number {
    //without the 2nd :number one could return "Hello" instead of num + 2 and it would crash the app
    return num + 2
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

addTwo(5);
getUpper("mihai");
signUpUser("Mihai", "test@example.com", false);
loginUser("Mihai", "test@test.com")

/* function getValue(myVal: number) {
    if (myVal > 5) {
        return true
    } 
    return "200 OK"
} */

const getHello = (s: string): string => {
    return ""
}

const heroes = ["Thor", "Spiderman", "Ironman"]

heroes.map((hero): string => {
    return `Hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg)
}

function handleError(errmsg: string): never {
    //when handling errors it is good practice to use type never, so that the functions never returns a value
    throw new Error(errmsg);
}

export {}