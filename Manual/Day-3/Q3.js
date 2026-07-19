//Area of Triangle by heron's formula
// formula root of s*(s-a)*(s-b)*(s-c)

let prompt = require('prompt-sync')();
let s = prompt("Enter a semicircle");
let a = prompt("first side")
let b = prompt("second side")
let c = prompt("third side")

console.log(s*(s-a)*(s-b)*(s-c));
