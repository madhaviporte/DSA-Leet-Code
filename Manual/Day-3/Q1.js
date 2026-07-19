//calculate the compaound interest

let prompt = require('prompt-sync')();
let p = prompt("Enter principle")
let r = prompt("Enter rate")
let t = prompt("Enter time")
console.log(p* Math.pow(1 + (r/100) ,t) -p);
