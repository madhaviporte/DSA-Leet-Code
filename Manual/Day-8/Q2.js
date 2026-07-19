// sasta calculator

let prompt = require('prompt-sync')()
let n
do{
    console.log("Enter 1 for addition");
    console.log("Enter 2 for subtraction");
    console.log("Enter 3 for multiplication");
    console.log("Enter 4 for division");
    
    
    n = Number(prompt("Enter a number"))
    switch(n){
        case 1 : {
            let a = Number(prompt("Enter first number"))
            let b = Number(prompt("Enter second number"))
            console.log("addition = " + (a+b));
            break
        }
        case 2 : {
            let a = Number(prompt("Enter first number"))
            let b = Number(prompt("Enter second number"))
            console.log("subtraction = " + (a-b));
            break
        }
        case 3 : {
            let a = Number(prompt("Enter first number"))
            let b = Number(prompt("Enter second number"))
            console.log("multiplication = " + (a*b));
            break
        }
        case 4 : {
            let a = Number(prompt("Enter first number"))
            let b = Number(prompt("Enter second number"))
            console.log("division = " + (a/b));
            break
        }
        default: console.log("Invalid number");
        
    }
    n = Number(prompt("Enter 10 for recontinue programs"))
    
}
while(n==1);