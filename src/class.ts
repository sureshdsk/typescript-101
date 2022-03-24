// public: by default all properties are public
// private: only accessible within class
// protected: accessible within and inherited class
// readonly: can set property value only in constructor
class User {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


const myuser1 = new User("Suresh", "Kumar")

console.log(myuser1.getFullName())
// console.log(myuser1.firstName) // error. cannot access private property