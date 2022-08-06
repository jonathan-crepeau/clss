// let rabbit = {};
// rabbit.speak = function(line) {
//   console.log(`The rabbit says '${line}'`);
// };

// rabbit.speak("I'm alive.");
// // → The rabbit says 'I'm alive.'

function speak(lineOfDialogue) {
    console.log(`The ${this.type} rabbit says '${lineOfDialogue}'.`);
}

let whiteRabbit = { type: 'white', speak };
let hungryRabbit = { type: 'hungry', speak };

// NOTE - You can think of 'this' as an extra parameter that is passed in a diffent way:
// whiteRabbit.speak('goody goody gum drops');

// NOTE - To pass 'this' explicily, you can use a function's call() method, which takes the 'this' value as its first argument and treats futher arguments as normal parameters:
// speak.call(whiteRabbit, 'burp');



// SECTION - Lexical Scope

// NOTE - 'normal function' 
function myFunction() {
    console.log('normal function');
    console.log(this);
}

// NOTE - arrow function:
const arrowFunction = () => {
    console.log('arrow function:');
    console.log(this);
}

// myFunction();
// arrowFunction();

// const givenObject = {
//     myMethod: function() {
//         this.arrowFunction = () => {console.log(this)};
//     },
// };

// givenObject.myMethod();
// givenObject.arrowFunction();

// NOTE - Example from: https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc

const myObject = {
    myArrowFunction: null,
    myMethod: function () {
      this.myArrowFunction = () => { console.log(this) };
    }
  };

  myObject.myMethod();
  myObject.myArrowFunction();