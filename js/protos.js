
// SECTION Adding Property To Constructor Function
function Person(name, age){
    this.name = name;
    this.age = age;
}

const bob = new Person('Bob', 43);
const laura = new Person('Laura', 23);

// NOTE - To start, the default 'prototype' property of a constructor function is/points to an object. By default, the only property on said object is a "constructor" property that points back at the function itself.
// NOTE - This next step adds a second property to the constructor function's "prototype" property object:
Person.prototype.gender = 'non-binary';

// NOTE - We can only see the gender property if we log the constructor function's prototype property. You'll see that when we log the constructor function itself immediately below that, the gender property does not appear.
// console.log(Person.prototype);
// console.log(Person);

// NOTE - The two object instances do not have a gender property, so they inherit it rom the prototype property of the Person constructor function:
// console.log(bob.gender)
// console.log(laura.gender)

// console.log(Object.getPrototypeOf(laura));

// let object = bob;
// do {
//     object = Object.getPrototypeOf(object);
//     console.log(object);
// } while (object)

// NOTE - Any methods added to the Person constructor function prototype also get inherited by any object instances:
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}!`);
}
// console.log(bob.greet());
// console.log(laura.greet())

Person.prototype.color = 'brown';
// console.log(Person.prototype);
const jonathan = new Person('Jonathan', 34)
// Person.prototype = { color: 'pink' }
// Person.prototype.color = 'pink';
// console.log(jonathan.color)



// SECTION Prototype Inheritence (Recipe Example)
// NOTE - source: https://docs.google.com/document/d/16JEhU3v21kVtDJp3C6qpUuaKAieQEORLTlQkog-437Q/edit

const myObj = {
    a: 1,
    b: 2,
    __proto__: {
        b: 3,
        c: 4,
    }
};

// Inheriting Method

const parent = {
    value: 2,
    method() {
        return this.value + 1;
    }
}

// console.log(parent.method())

const child = { __proto__: parent };
// console.log(child.method())



// SECTION Mutating Constructor Function's Prototype:

// function Box(value){
//     this.value = value;
// }

// const firstBox = new Box(1);

// Box.prototype = function Box(value) {
//     this.value = value;
// }

// const secondBox = new Box(2);

// if (Object.getPrototypeOf(firstBox) !== Object.getPrototypeOf(secondBox)) {
//     console.log('Non-matching prototypes.');
// } else {
//     console.log('Prototypes match!')
// }

// console.log(Object.getPrototypeOf(firstBox));
// console.log(Object.getPrototypeOf(secondBox));


// SECTION Building Longer Inheritance Chains

function Citizen(name) {
    this.name = name;
}

const citizenPrototype = {
    greet() {
        return `Hello, my name is ${this.name}!`;
    },
    shout(){
        return 'Woowee!!';
    }
}

function Teacher(name, age){
    this.name = name;
    this.age = age
}

Object.setPrototypeOf(Citizen.prototype, citizenPrototype);

Object.setPrototypeOf(Teacher.prototype, Citizen.prototype);

const lucy = new Citizen('Lucy');
// console.log(lucy.greet())
// console.log(lucy.shout())

const melrose = new Teacher('Melrose', 34);
// console.log(melrose.greet());
// console.log(melrose.shout())

Teacher.prototype.greet = function() {
    return `My name is ${this.name} and I am a teacher at this school.`;
}
Teacher.prototype.sayAge = function() {
    return `I am ${this.age} years old`;
}

// console.log(melrose.sayAge())

// console.log(Object.getPrototypeOf(Teacher.prototype))
// console.log(Object.getPrototypeOf(Citizen.prototype))
// console.log(Object.getPrototypeOf(melrose))
// console.log(melrose.greet())
// console.log(lucy.greet())
// console.log('===========================')

// let object = melrose;
// do {
//     object = Object.getPrototypeOf(object);
//     console.log(object);
// } while (object);


// SECTION Another Example

function Human(name){
    this.name = name;
}

// NOTE - You can see that logging 'Human' is the same as logging 'Human.prototype.constructor' because the constructor points back to the constructor function itself.
// console.log(Human);
// console.log(Human.prototype);
// console.log(Human.prototype.constructor)

// NOTE - This logs the anonymous prototype object of the next object up the prototype chain -- 'Object()' in this case.
// console.log(Object.getPrototypeOf(Human.prototype));

// NOTE - After adding a new method to the Human.prototype's anonymous object, you can check with a log of 'Human.prototype':
Human.prototype.greet = function(){
    return `Hello, my name is ${this.name}.`;
}
// console.log(Human.prototype);

Human.prototype.yell = function() {
    return 'AHHHHHH real monsters!'
}

const penny = new Human('Penny');
// NOTE - The next two logs show the prototype object of the newly-created object instance, 'penny'. It's the same as the 'console.log(Human.prototype)' above, as Human is the constructor function used to create 'penny'.
// console.log(Object.getPrototypeOf(penny));
// console.log(penny.__proto__); // deprecated


// SECTION Building Larger Prototype Chain

function Adult(name) {
    this.name = name;
}

Adult.prototype.job = function(){
    return `Working 9 to 5, just to try and make a living!`;
}

const auntZelda = new Adult('Zelda');
const auntHilda = new Adult('Hilda');

Object.setPrototypeOf(Adult.prototype, Human.prototype);

console.log(auntZelda.__proto__);
// console.log(Object.getPrototypeOf(auntZelda));
// console.log(auntZelda);
// console.log(auntZelda.job())
// console.log(auntZelda.greet())
// console.log(auntZelda.yell())



// SECTION Extend Prototype Chain even further

function Child(name) {
    this.name = name;
}

// console.log(Human.prototype);
// console.log(Child.prototype)

// NOTE - Setting new prototype:
// Object.setPrototypeOf(Child.prototype, Human.prototype);

Child.prototype.giggle = function() {
    return 'hehehehehehe.'
}
const littleGirl = new Child('Kandi Muse');
const littleBoy = new Child('Aang');
// console.log(penny.greet())

// NOTE - Success! littleGirl logs greet() function from Human.prototype:
Object.setPrototypeOf(Child.prototype, Adult.prototype);
// console.log(littleGirl.greet())
// console.log(littleGirl.yell())

// NOTE Little girl prototype anonymous object seems to be a copy/clone(?) of the Human.prototype object that is a separate object. Any Child instance still has a Child constructor property, and any new methods/properties added to the Child.prototype. Lastly, Child instances get access up the prototype chain, but any Human instances cannot access properties/methods on Child.prototype (all of this, despite that the returned Child.prototype anon object is titled(?)/named 'Human):
// console.log(Object.getPrototypeOf(littleGirl));
console.log(littleGirl.__proto__)
// console.log(Human.prototype);

// console.log(littleGirl.giggle())
// console.log(littleBoy.giggle())
// console.log(littleGirl.job())

// NOTE - Check, new Human instance cannot access Child.prototype properties or methods:
const bobert = new Human('bobert');







// SECTION Array Prototypes

// const array1 = [1, 2, 3];
// console.log(Object.getPrototypeOf(array1));

// let object = array1;
// do {
//     object = Object.getPrototypeOf(object);
//     console.log(typeof object)
//     console.log(object);
// } while (object)