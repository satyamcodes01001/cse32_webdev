// Output
console.log("Hello JavaScript");

// Variables
var name = "Satyam";
let age = 19;
const country = "India";

console.log(name);
console.log(age);
console.log(country);

// Data Types
let city = "Ghaziabad";
let marks = 90;
let isStudent = true;
let x = null;
let y;

console.log(typeof city);
console.log(typeof marks);
console.log(typeof isStudent);
console.log(x);
console.log(y);

// Operators
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log(a > b);
console.log(a < b);
console.log(a == b);
console.log(a != b);

// If Else
let num = 20;

if(num % 2 == 0){
    console.log("Even");
}
else{
    console.log("Odd");
}

// Else If
let score = 82;

if(score >= 90){
    console.log("Grade A");
}
else if(score >= 75){
    console.log("Grade B");
}
else{
    console.log("Grade C");
}

// Function
function add(x, y){
    return x + y;
}

console.log(add(10, 20));

// Arrow Function
const square = (n) => {
    return n * n;
};

console.log(square(5));

// Strings
let str = "JavaScript";

console.log(str);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Arrays
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log(fruits[0]);

fruits.push("Orange");
console.log(fruits);

fruits.pop();
console.log(fruits);

// Objects
const student = {
    name: "Satyam",
    age: 19,
    branch: "CSE"
};

console.log(student);
console.log(student.name);
console.log(student.age);

student.age = 20;
student.city = "Ghaziabad";

console.log(student);

delete student.city;

console.log(student);

// Array of Objects
let students = [
    {
        name: "Satyam",
        age: 19
    },
    {
        name: "Rahul",
        age: 20
    }
];

console.log(students[0].name);
console.log(students[1].age);