// console.log('Fear is the mind killer.')

class Person {
    constructor(name, age, eyes, hair) {
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
    }
    // NOTE - You can use 'age' once again with this method, but probably it's best to use a different keyword then 'age' as it was used in the original constructor.
    setAge(age) {
        this.age = age;
    }
    greet(otherPerson) {
        console.log('Hi ' + otherPerson + '!');
    }
    jump() {
        console.log('Weeeee!');
    }
}

const me = new Person('Jonathan', 34, 'brown', 'brown');
// console.log(me);

// SECTION - Class Declaration to extend Person class.
// Class declarations !MUST! include a name. To remove 'SuperHero' below would throw a syntax error in the console.
class SuperHero extends Person {
    constructor(name, age, eyes, hair) {
        super(name, age, eyes, hair);
        this.superPowers = ['flight', 'superhuman strength', 'x-ray vision'];
    }
    speak() {
        return this.name;
    }
    fly() {
        console.log('Up, up and away!');
    }
    greet(otherPerson) {
        console.log('Greetings ' + otherPerson);
    }
    jump() {
        super.jump();
        this.fly();
    }
}

const superman = new SuperHero('Clark Kent', 30, 'blue', 'black');
// console.log(superman);

// SECTION - Class Expression to extend Person class.
// In this case, the class expressino omits a class name. 'supervillian.name ==> supervillian' in the console.
const supervillian = class extends Person {
    myName() {
        return this.name;
    }
    greet(){
        console.log('Greeetings, mere mortals.');
    }
}

const ursula = new supervillian('Ursula', 1000, 'black', 'white');
// console.log(ursula);

// const dracula = new supervillian('Dracula', 1000000, 'black', 'black');



// SECTION - Getters & Setters

class Civilian {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet() {
        return 'Hello there!';
    }
    scream() {
        return 'AHHHHHHHHH!';
    }
    // NOTE protagonist.fullName:
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    // NOTE protagonist.fullName = 'Lord Voldemort':
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
    set assignAge(value) {
        this.age = value;
    }
}

const protagonist = new Civilian('Peter', 'Jackson');
console.log(protagonist);
