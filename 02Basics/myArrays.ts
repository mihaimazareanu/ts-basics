const superheroes: string[] = []
//const heroPowers: number[] = []
const heroPowers: Array<number> = []

type User = {
    name: string;
    isActive: boolean;
}

const allUsers: User[] = []

const MLModels: number[][] = [
    [255, 255, 255],
    //["sadasd"] this will result in an error, it must be an array of numbers
    //"" this will result in an error too, it must be an array of number arrays
]

superheroes.push("Spiderman")
heroPowers.push(2)

allUsers.push({name: "Mihai", isActive: false})