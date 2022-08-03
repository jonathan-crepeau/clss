// console.log('Fear is the mind killer.');

// ANCHOR  - (sei-7, 'classes') - FACTORY OBJECT:

// NOTE - Sometimes we need to have a factory object that will generate other objects. 
// NOTE - The purpose of the factory object is to control the creation process in some way.
// NOTE - It is a sole object that exists throughout the program that performs a set of functions.
// NOTE - It can also be called a "singleton".

// console.log("Fear is the mind killer.");



// SECTION - Factory Object as a regular JS object:
class Car {
    constructor(name, serialNumber) {
        this.name = name;
        this.serialNumber = serialNumber;
    }
    drive() {
        return 'Vroom vroom.';
    }
    get carName() {
        return this.name;
    }
    set carName(value) {
        this.name = value;
    }
}

// const firstCar = new Car('Junebug', 10);
// console.log(firstCar);

const factory = {
    cars: [],
    generateCar() {
        const newVehicle = new Car('Car' + this.cars.length, Math.floor(Math.random() * (10 - 1) + 1));
        this.cars.push(newVehicle);
        return newVehicle;
    },
    findCar(index) {
        return this.cars[index];
    },
}

for (let a = 0; a < 3; a++) {
    factory.generateCar();
}

// const freshCar = factory.cars[0];
// console.log(freshCar);
// factory.cars.splice(0, 1);
// console.log(factory.cars);



// SECTION - Factory Object as an instantiation of a class:

class Vehicle {
    constructor(maker, serialNumber) {
        this.maker = maker;
        this.serialNumber = serialNumber;
    }
    drive() {
        console.log('Vroom vroom');
    }
}

class Factory {
    cars = [];
    constructor (company) {
        this.company = company;
    }
    generateCar() {
        const newCar = new Vehicle(this.company, Math.floor(Math.random() * (20 - 0) + 0));
        this.cars.push(newCar);
        return newCar;
    }
    findCar(index) {
        return this.cars[index];
    }
}

const toyota = new Factory('toyota');
const bmw = new Factory('bmw');


toyota.generateCar();
bmw.generateCar();

// console.log(toyota);
// console.log(bmw);

// console.log(bmw.findCar(0));
// console.log(toyota.findCar(0));
