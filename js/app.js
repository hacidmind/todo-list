/*
var name = "Hope";

let id = 'USA/123';

const ids = 'NGN234';

console.log(name);

console.log(id);
console.log(ids);

let sentence = 'My name is ' + name + ' and my ID is ' + id;
console.log(sentence);

// DATATYPES: string, number, boolean, null, undefined, object

let number = 76;
const number2 = 82;
console.log(number);

number = 69;

console.log(number);

let solution = 'The solution is: ' + (number + number2)

console.log(solution);


console.log(number2);


console.log(number < number2);

let yourName = null;

console.log(yourName);

let heroName;

console.log(heroName);


let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZdtfgui";
console.log(txt.length);

console.log(name.toUpperCase());
console.log(sentence.toUpperCase());

yourName = 'BOLUWATIFE';
let newVarYourName = yourName.toLowerCase();
console.log(newVarYourName);

let k = txt.indexOf('K')
console.log(k);


heroName = "InvincibleSuperman";

console.log(heroName.slice(10, 18));

// let char = prompt("Compose a tweet? ")
// let charLength = char.slice(0, 10)

// console.log(charLength);


// Read Up on Math operators (incrementals and decrements)
// Read Up on Logical operators
// Read Up on Comparison operators
// Read Up on Template Literals
// State the 3 types of conditional statements we have

let a = 4;
let b = 7;
let soln = a + b;
console.log(soln);

a++
console.log(a);

a += 5;
console.log(a);

console.log(a < 11 && b < 16);

let incredible = 'incredible'

let person = `${yourName.toLowerCase()} is an ${incredible} woman`

console.log(person);

let person1 = yourName + " is an " + incredible + " woman";

console.log(person1);


if (yourName === "BOLUWATIFe") {
    console.log(`Boluwatife is a developer`);
} else {
    console.log('Boluwatife is not a dev');
}


let names = prompt('What is your name? ')
let age = prompt('What is your age? ')

if (age > 21) {
    alert('Your are legal to drive a car')
} else if (age > 16 && age <20) {
    alert('You need a learners permit')
} else {
    alert('Your are not eligible to drive')
}

*/

/*

let colors = ['red', "black", "yellow", 001, true]

console.log(colors);
console.log(colors.length);

console.log(colors[2]);

// push, pop
let removedColor = colors.pop();

console.log(colors);

let newColor = colors.push('Orange')
console.log(colors);

let cars = ["mercedes", "audi", "bmw", "toyota", "honda", "mazda", "ford", "gm"];


let carNam = prompt("What car are your driving? ")
let carName = carNam.toLowerCase()
// console.log(carName);
if (cars.includes(carName)) {
    alert(`${carName} is in your garage`)
} else {
    alert(`The ${carName} is at the mechanic`)
}
*/

// Read up On Loops

// For loop, For/in loop, for/of loop, while loop, do while loop

// For loop repeats until a specified condition is met

// for (let index = 6; index <= 10; index++) {
//     console.log(`In loop: ${index}`);
// }

// let cars = ["mercedes", "audi", "bmw", "toyota", "honda", "mazda", "ford", "gm"];

// for (let index = 0; index < cars.length; index++) {
   
//     console.log(`The car is: ${cars[index]}`);
// }


// Function: a function is a way to repeat task after invoking it

/*
function fan() {
    console.log('Turn on the fan');
}

fan()

// let myName = prompt('What is your name ? ')

// function turnOnFan() {
//     // console.log(`${myName} turn on the fan`);
//     alert(`${myName} turn on the fan`);
// }

// turnOnFan()

// let myName = prompt('What is your name ? ')

// let car = prompt("What is the brand of your car? ")

// function motor() {
//     return `${myName} is driving a ${car}`
// }

// console.log(motor());

function add(a, b) {
    return a + b
}

console.log(add(16, 26));


// let x = prompt('Number 1')
// let y = prompt('Number 2')

// function minus(a, b) {
//     return a - b
// }

// console.log(minus(x, y));

// Function Expressions

const light = function () {
    return 'Turn on the light'
}

console.log(light());


// let x = prompt('Number 1')
// let y = prompt('Number 2')

// let minus = function (a, b) {
//     return a - b
// }

// console.log(minus(x, y));

// let minus = (a, b) => {
//     return a - b
// }

// console.log(minus(x, y));


// let times = (a, b) => a * b

// console.log(times(x, y));

let rec = () => {
    let l = prompt('What is the length')
    let b = prompt('What is the breadth')

    return l * b
}

alert(`The area of the rectangle is ${rec()}`);
*/

// Object

let person = {
    name: 'Bola Niyi',
    age: 30,
    gender: 'female',
    email: "bola@email.com",
    lang: ['JavaScript', 'Python', 'Dart'],
    job: "web developer",
    wfh() {
        return `Bola is working from home`
    },
    office() {
        return `${this.name} is a ${this.job}`
    }
}


console.log(person);
console.log(person.email);

console.log(person.wfh());
console.log(person.office());


// Filter
// Map
// forEach

const gadgets = [
    {name: "VR", price: 800},
    {name: "PS5", price: 600},
    {name: "IPhone 13", price: 900},
    {name: "PC", price: 1500},
    {name: "PS4", price: 350},
    {name: "TV", price: 1000}
];

// filter
let newGadgets = gadgets.filter((item) => {
    return item.price >= 500
})

console.log(newGadgets);

// Map
let mapGadgets = gadgets.map((item) => {
    return item.name
})

console.log(mapGadgets);

gadgets.forEach((item) => {
    console.log(item.name);
})