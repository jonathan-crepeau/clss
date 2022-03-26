// console.log('Fear is the mind killer.');

// SECTION 1. Create a class for a person:

class Person {
  constructor(name){
    this.name = name;
    this.arms = 2;
    this.legs = 2;
  }
  greeting(){
    console.log(`Hello, my name is ${this.name}.`)
  }
  existentialCrisis(){
    console.log('aaaaaAaAAaAHHHHH!!!');
  }
};


// SECTION 2. Create a class for a pet:

class Pet {
  constructor(type, name, color){
    this.type = type;
    this.name = name;
    this.color = color;
  }
  greeting(){
    console.log(`${this.name}, a ${this.type}, makes a noise.`);
  }
};


// SECTION 3. Create a class for a boat

class Boat {
  constructor(name, material, length){
    this.name = name;
    this.material = material;
    this.length = length;
  }
  captainSpeak(){
    console.log('Arrrr there matey!');
  }
  lengthOfBoat(){
    console.log(`My boat, the ${this.name}, is ${this.length} feet long.`);
  }
};

// let jenny = new Boat('Jenny', 'wood', '30');


// SECTION 4. Create a class for an artist:

class Artist extends Person {
  constructor(name, medium) {
    super(name);
    this.medium = medium;
  }
  speakJoy(){
    console.log(`I absolutely cannot get enough of working with ${this.medium}!`);
  }
  greeting(){
    console.log(`Why yes, it's me -- ${this.name}, the famous artist.`)
  }
};

const davinci = new Artist('DaVinci', 'oils');
// console.log(davinci.greeting());
// console.log(davinci.legs);


// SECTION 5. Create a class for a computer:

class Computer {
  constructor(type){
    this.type = type;
  }
  greeting(){
    console.log('Boop boop beep boop.');
  }
};

// let macbook = new Computer('laptop');


// SECTION 6. Create a class for a robot:

class Robot {
  constructor(name) {
    this.material = 'shiny';
    this.name = name;
  }
  greeting(){
    console.log(`Beep beep boop beep, I'm a ${this.material} robot.`);
  }
  introduction(){
    console.log(`It's me, ${this.name}, your friendly neighborhood robot!`);
  }
};

// const cheetor = new Robot('Cheetor');
// console.log(cheetor.greeting());
// console.log(cheetor.introduction());


// SECTION 7. Create a class for a dog:

class Dog extends Pet {
  constructor(type, name, color){
    super(type, name, color);
  }
  greeting(){
    console.log(`${this.name} barked.`);
  }
}

let tess = new Dog('dog', 'Tess', 'tricolor');
// console.log(tess.greeting());


// SECTION 8. Create a clas for a painter:

class Painter extends Artist {
  constructor(name, medium){
    super(name, medium);
    this.profession = "Painter";
  }
  freakout(){
    super.existentialCrisis();
    console.log('*Cuts off ear*')
  }
}

let vanGogh = new Painter('Van Gogh', 'oils');
// console.log(vanGogh.freakout());


// SECTION 9. Create a clas for a car:

class Car extends Robot {
  constructor(name, maker){
    super(name);
    this.maker = maker;
    this.type = 'car';
  }
  greeting(){
    console.log(`Vroom, vroom bitch, I'm a ${this.type}.`)
  }
}

const bmw = new Car('Milo', 'BMW');
// console.log(bmw.greeting());


// SECTION 10. Create a class for a baby:

class Baby extends Person {
  constructor(name, yell){
    super(name);
    this.yell = yell;
  }
  sayYell(){
    console.log(this.yell);
  }
  changeYell(yell){
    this.yell = yell;
  }
};

const jonathan = new Baby('Jonathan', 'Waaah!');
// console.log(jonathan.sayYell());


// SECTION Create a factory for one of the above classes:

class Factory {
  constructor(){
    this.kids = [];
  }
  generateBaby(name, yell){
    const newBaby = new Baby(name, yell);
    this.kids.push(newBaby);
    return newBaby;
  }
}

const babyFactory = new Factory();
babyFactory.generateBaby('Jonathan', 'Gah gah goo goo');
babyFactory.generateBaby('Jeremy', 'WAAAH');
console.log(babyFactory)