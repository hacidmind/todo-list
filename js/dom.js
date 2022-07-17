// Query

// queryselector, getElement

const a = document.querySelector('#welcome');

console.log(a);

const b = document.getElementById('color')
const c = document.getElementsByClassName('article')
const d = document.getElementsByClassName('fruit')
let e = document.querySelector('.fruit')

console.log(b);
console.log(c);
console.log(d);
console.log(e);


let article = document.querySelectorAll('.article')
// let article = document.getElementsByClassName('.article')

console.log(article);

a.innerText = `We Are Manipulating Our DOM`

const container = document.querySelector('.container');
container.innerHTML = `<h3>This is an empty Tag</h3>`

const fruits = document.querySelectorAll('.fruit');
console.log(fruits);

fruits.forEach(fruit => {
    fruit.innerText += ' is a type of fruit'
})