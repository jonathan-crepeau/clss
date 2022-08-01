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
console.log(me);