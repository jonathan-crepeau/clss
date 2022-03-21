// console.log('Fear is the mind killer.');

// SECTION #1

class Person {
  static eyeColors() {
    return ["blue", "green", "brown"];
  }
  constructor(name, age, eyes, hair) {
    this.arms = 2;
    this.legs = 2;
    this.eyes = eyes;
    this.hair = hair;
    this.age = age;
    this.name = name;
  }
  setHair(hairColor) {
    this.hair = hairColor;
  }
  greet(otherPerson) {
    console.log("hi there " + otherPerson + "!");
  }
  cat() {
    console.log("Her name is Luna!");
  }
};

const me = new Person('Jonathan', 33, 'brown', 'brown');

class SuperHero extends Person {
  chat() {
    console.log('Hi there, I\'m Jonathan');
    super.cat();
  }
}

const superman = new SuperHero('Clark Kent', 1000, 'blue', 'black', Person.eyeColors()[0])



// SECTION #2

// class Person {
//   static eyeColors(){
//     return ['blue', 'green', 'brown']
//   }
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
// }

// const me = new Person('Jonathan', 33, Person.eyeColors()[0])



// SECTION #3. Create A Factory

// class Car {
//   constructor(serialNumber){
//     this.serialNumber = serialNumber;
//   }
//   drive(){
//     console.log('Vroom vroom');
//   }
// }

// const factory = {
//   cars: [],
//   generateCar(){
//     const newCar = new Car(this.cars.length);
//     this.cars.push(newCar);
//     return newCar;
//   },
//   findCar(index){
//     return this.cars[index];
//   },
// }

class Car {
  constructor(maker, serialNumber){
    this.maker = maker;
    this.serialNumber = serialNumber;
  }
  drive(){
    console.log('Vroom vroom');
  }
}

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
}