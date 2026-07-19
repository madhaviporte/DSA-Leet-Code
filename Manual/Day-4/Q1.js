// Accept two numbers and print the gretest between them

let prompt = require('prompt-sync')();
let number1 = Number(prompt("enter the number"))
let number2 = Number(prompt("enter the number"))

if(number1>number2){
    console.log(number1);
    }
else if (number1<number2){
    console.log(number2);
    
}
else{
    console.log("equal number");
    
}    
