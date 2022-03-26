// console.log('Fear is the mind killer.');


// NOTE - V1

// class Person {
//   greet(){
//     console.log('Hi.');
//   }
// };

// const me = new Person();
// me.greet()


// NOTE - V2

// class Person {
//   greet(name){
//     console.log('Hi ' + name + '!');
//   }
//   jump(){
//     console.log('Wheee!')
//   }
// };

// const me = new Person();
// me.greet('Jonathan');
// me.jump();


// NOTE - V3

// class Person {
//   greet(name) {
//     console.log("Hi " + name + "!");
//   }
//   jump() {
//     console.log("Wheee!");
//   }
// }

// const me = new Person();
// me.greet("Jonathan");
// me.jump();


// NOTE - V4

// class Person {
//   constructor(hair_color, eye_color){
//     this.hair = hair_color;
//     this.eyes = eye_color;
//   }
//   setHair(hairColor){
//     this.hair = hairColor;
//   }
//   greet(name) {
//     console.log("Hi " + name + "!");
//   }
//   jump() {
//     console.log("Wheee!");
//   }
// }

// class SuperHero extends Person {
//   constructor(hair_color, eye_color){
//     super(hair_color, eye_color);
//     this.superPowers = ['flight', 'superhuman strength'];
//   }
//   fly() {
//     console.log("Up up and away!");
//   }
//   greet(name) {
//     console.log("Greetings " + name + "!");
//   }
//   jump() {
//     super.jump();
//     this.fly();
//   }
// }

// const me = new Person('red', 'brown');
// const superman = new SuperHero('red', 'brown');
// console.log(superman);


// NOTE - V5

// class Car {
//   constructor(serialNumber){
//     this.serialNumber = serialNumber;
//   }
//   drive(){
//     console.log('vroom, vroom.');
//   }
// };

// const factory = {
//   cars: [],
//   generateCar(){
//     const newCar = new Car(this.cars.length);
//     this.cars.push(newCar);
//     return newCar;
//   },
//   findCar(index){
//     return this.cars[index];
//   }
// };


// NOTE - V6

class Car {
  constructor(maker, serialNumber){
    this.maker = maker;
    this.serialNumber = serialNumber;
  }
  drive(){
    console.log('Vroom, vroom.');
  }
};

class Factory {
  constructor(company){
    this.company = company;
    this.cars = [];
  }
  generateCar(){
    const newCar = new Car(this.company, this.cars.length);
    this.cars.push(newCar);
    return newCar;
  }
  findCar(index){
    return this.cars[index];
  }
};