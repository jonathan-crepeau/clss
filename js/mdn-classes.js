// console.log('Fear is the mind killer.');

// SECTION Class Declaration

// NOTE - Class Declarations are not hoisted, they must be defined before they can be constructed (unlike function declarations):
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// };


// SECTION Class Expressions

// NOTE Unnamed Class Expression
// let Rectangle = class {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// };

// NOTE Named Class Expression
// Rectangle = class Rectangle2 {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

// const shape = new Rectangle(4, 5);


// SECTION Constructor

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Student extends Person {
//     constructor(name, age, favColor) {
//         super(name, age);
//         this.favColor = favColor;
//     }
// }


// SECTION Static Methods & Properties

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     static displayName = "Point";
//     static distance(a, b) {
//         const dx = a.x - b.x;
//         const dy = a.y - b.y;

//         return Math.hypot(dx, dy);
//     }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);

// NOTE - All console.log's below will log 'undefined':
// console.log(p1.displayName)
// console.log(p1.distance)
// console.log(p2.displayName)
// console.log(p2.distance)

// NOTE - The two console.log's below will return values:
// console.log(Point.displayName);
// console.log(Point.distance(p1, p2));


// SECTION Static Intialization Blocks

class Person {
    static array1 = [1, 2, 3]
    construtor(age, name) {
        this.age = age;
        this.name = name;
    }
}

class Teacher extends Person {
    static {
        console.log(super.array1);
    }
}