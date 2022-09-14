
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
console.log(Person.prototype);
const jonathan = new Person('Jonathan', 34)
// Person.prototype = { color: 'pink' }
// Person.prototype.color = 'pink';
console.log(jonathan.color)