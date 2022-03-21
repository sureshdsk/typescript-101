interface IUser {
    name: string
    age?: number
    getMessage(): string
}

const user1: IUser = {
    name: "Suresh",
    age: 30,
    getMessage() {
        return `Hello, ${this.name}!`
    }
}
const user2: IUser = {
    name: "Kumar",
    getMessage() {
        return `Hola, ${this.name}!`
    }
}

console.log(user1.getMessage())
console.log(user2.getMessage())