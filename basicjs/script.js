const x = 1;
let y = 23;
console.log(`The value of x is ${x}`);
console.log(`The value of y is ${y}`);
y = 'Balaji Nagesh Motkulwar';
console.log(`Now the value of y is ${y}`);
// x = 4;
// the above line will cause error

const t = [1, 2, 3, 4];
console.log(t);
console.log(t[1]);
console.log(`This is something different`);
t.forEach(function runThis(value) {
    console.log(value);
})
console.log(`The other way is: `);
t.forEach((val) => {
    console.log(val);
})
const newt = t.map(val => val * 2);
console.log(newt);
const newt1 = t.map(val => `<li>` + val + '<li>');
console.log(newt1);

//map method creates a new array.

let first = [1, 2, 3, 4, 5];
let second = [4, 5, 6, 7];
let third = first.concat(second);
console.log(`viewing third one`);
console.log(third);
console.log(`first one is ${first}`);
//the original array remained unchanged.
console.log(`This is for concantation`);
third.forEach(val => {
    console.log(val);
})

//concat also creates a new array.


console.log(`this is for destructuring`);
const pq = [3, 4, 5, 6, 67, 8, 4];
const [f, s, ...tr] = pq;
console.log(f);
console.log(s);
console.log(tr);

//the above one destructuring one

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const adam = new Person('Adam Ondra', 29);
adam.greet();
const balaji = new Person('Balaji Nagesh Motkulwar', 23);
balaji.greet();


//we have classes and we make constructors of it
//we have functions associated with these classes
//and we create object of the class using new keyword
//and we can call functions and methods using these objects.