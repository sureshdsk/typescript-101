interface UserInterface {
    getFullName(): string
}

// public: by default all properties are public
// private: only accessible within class
// protected: accessible within and inherited class
// readonly: can set property value only in constructor
class User implements UserInterface {
    private firstName: string;
    private lastName: string;
    static maxAge = 100; // static props are accessible only through class ex: User.maxAge

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Admin extends User {
    private editor: string;

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }
}

const myuser1 = new User("Suresh", "Kumar")

console.log(myuser1.getFullName())
// console.log(myuser1.firstName) // error. cannot access private property

const admin1 = new Admin("Suresh", "Kumar")

console.log(admin1.getFullName())