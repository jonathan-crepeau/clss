console.log('Fear is the mind killer.');

const personPrototype = {
    greet() {
        return `Hello, my name is ${this.name}!`;
    }
}

function Person(name) {
    this.name = name;
}

Object.assign(Person.prototype, personPrototype);

const jonathan = new Person('Jonathan');
console.log(jonathan);