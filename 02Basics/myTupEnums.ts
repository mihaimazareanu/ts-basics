//const user: (string | number)[] = ["mm", 1]
let user: [string, number, boolean]

user = ["hc", 131, true]
// user = [131, true, "hc"] will result in an error, in tupals the order of the types must be respected as well

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "test@test.com"]

newUser[1] = "hc.com" //This will replace "test@test.com", although it is a constant; this is not good behavior for tupals

//newUser.push(true) This used to be allowed, but it seems that it has been fixed now

export {}