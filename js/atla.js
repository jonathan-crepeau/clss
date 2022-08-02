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
console.log(tyLee);

class Bender extends Person {
    static bendingRank = ['Apprentice', 'Journeyperson', 'Master', 'Adept'];
    constructor(name, age, nation, rank) {
        super(name, age, nation);
        this.rank = rank;
    }
    greeting() {
        return 'Hi! Welcome to the ' + this.nation + ' nation!';
    }
}

const katara = new Bender('Katara', 14, 'Water', Bender.bendingRank[1]);
console.log(katara)


class WaterBender extends Bender {
    // extraabilities = [healing, etc., none]
    // constructor (name, age, nation, rank, extraAbilities)
}