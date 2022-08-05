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


// SECTION - Class Syntax

// NOTE - Including this.sound in the constructor allows us to reassign the string for the 'sound' property in a given class instance:
class Dog {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.sound = 'woof';
    }
    speak() {
        return this.sound;
    }
}

const tess = new Dog('Tess', 'Tricolor');
console.log(tess);
console.log(tess.speak())
tess.sound = 'bark';
console.log(tess.speak());


// NOTE - Not including a 'this.sound' in the constructor means that if we try to reassign what string gets returned when we call on the speak() method, it will instead create a 'speak' property that overrides the superclass.
class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    speak() {
        return 'Meow';
    }
}

const luna = new Cat('Luna', 'black');
console.log(luna);
console.log(luna.speak())
luna.speak = 'hiss';
// console.log(luna.speak());
    // throws a type error




// SECTION - Protoype property vs. __proto__

function Fish(name) {
    this.name = name;
}

const fishPrototype = {
    greet() {
        return 'Hello, I am a ' + this.name + ' fish!';
    }
}


Object.assign(Fish.prototype, fishPrototype);
const salmon = new Fish('Salmon');

console.log(salmon);