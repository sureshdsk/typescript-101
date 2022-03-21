// type alias
type ID = number
type UserTag = string

interface IUser {
    id: ID;
    name: string;
    age?: number;
    bio?: string | null;  // union : value can be a string or null
    getMessage(): string;
    tag?: UserTag[]
}

const user1: IUser = {
    id: 1,
    name: "Suresh",
    age: 30,
    getMessage() {
        return `Hello, ${this.name}!`
    },
    tag: ["dev", "blogger"]
}
const user2: IUser = {
    id: 2,
    name: "Kumar",
    getMessage() {
        return `Hola, ${this.name}!`
    }
}

console.log(user1.getMessage())
console.log(user2.getMessage())