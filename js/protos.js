// console.log('Hello there!')

// SECTION - One object, one function:

const crepeauPrototype = {
    greet() {
        return 'Hello, my name is ' + this.firstName + ' Crepeau.';
    }
}

function Crepeau(firstName) {
    this.firstName = firstName;
}

Object.setPrototypeOf(Crepeau.prototype, crepeauPrototype);
// Object.assign(Crepeau.prototype, crepeauPrototype)

const michele = new Crepeau('Michele');
console.log(michele.greet());

crepeauPrototype.jump = function() {return 'I am jumping!'};

console.log(michele.jump())



// SECTION - Two Functions