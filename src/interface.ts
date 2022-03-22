// type alias
type ID = number
type UserTag = string

interface IUser {
    id: ID;
    name: string;
    age?: number;
    bio?: string | null;  // union : value can be a string or null
    getMessage: () => string;
    printMessage: () => void;
    tag?: UserTag[],
    crash?: () => never; // crash function can be a infinite loop or an error
}

const user1: IUser = {
    id: 1,
    name: "Suresh",
    age: 30,
    getMessage() {
        return `Hello, ${this.name}!`
    },
    printMessage() {
        console.log(this.getMessage())
    },
    tag: ["dev", "blogger"],
}
const user2: IUser = {
    id: 2,
    name: "Kumar",
    getMessage() {
        return `Hola, ${this.name}!`
    },
    printMessage() {
        console.log(this.getMessage())
    },
    crash() {
        throw Error("crashed")
    }
}

console.log(user1.getMessage())
console.log(user2.getMessage())
user1.printMessage()
// message = user1.printMessage() // error
user2.crash()