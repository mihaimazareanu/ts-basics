let score: number | string | boolean = 33

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let mihai: User | Admin = {name: "Mihai", id: 123}

mihai = {username: "mihai", id: 123}

function getDbId(id: number | string) {
    console.log(`DB id is: ${id}`)
}

getDbId(3)
getDbId("3")

/* function getDbId(id: number | string) {
    id.toLowerCase This will result in an error, as TS knows that the parameter could be a number, not only a string and doesn't allow methods that are not valid for both types, number and string
} */

//Arrays

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string |number)[] = [1, 2, 3, "4"]
const data4: Array<string | number> = [1, 2, 3, "4"]

/* let pi: 3.14 = 3.14
pi = 3.145 // This is not a useful application */

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "window"
//seatAllotment = "crew" This results in an error