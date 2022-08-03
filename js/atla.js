// console.log('Sparky sparky boom man.');

class Person {
    static abilities = ['Bender', 'Non-Bender'];
    static nations = ['Water, Earth, Fire, Air'];
    static description = 'I am a single individual alive during the time of the 100 year war.';
    constructor(name, age, nation) {
        this.name = name;
        this.age = age;
        this.nation = nation;
    }
    set myName(value) {
        this.name = value;
    }
    greeting() {
        return 'Hi!';
    }
}

const tyLee = new Person('Ty Lee', 16, 'Fire Nation');
// console.log(tyLee);

class Bender extends Person {
    static bendingRank = ['Apprentice', 'Journeyperson', 'Master', 'Adept'];
    // NOTE - MDN says that I need to use 'super' to access any properties of a super class. However, you can see below that 'this.nations' results in the same console log as 'super.nations':
    // static {
    //     console.log(this.nation);
    // }
    // static {
    //     console.log(this.description)
    // }
    static addition(val1, val2) {
        return val1 + val2;
    }
    constructor(name, age, nation, rank) {
        super(name, age, nation);
        this.rank = rank;
    }
    greeting() {
        return 'Hi! Welcome to the ' + this.nation + ' nation!';
    }
}

const katara = new Bender('Katara', 14, 'Water', Bender.bendingRank[1]);
// console.log(katara)


class WaterBender extends Bender {
    static specialities = ['Healing', 'Bloodbending', 'None'];
    constructor(name, age, nation, rank, speciality) {
        super (name, age, nation, rank);
        this.speciality = speciality;
    }
    greeting() {
        return '[ Water drips ]';
    }
}

const korra = new WaterBender('Korra', 17, 'Water', 'Master', 'Bloodbending');
// console.log(korra);