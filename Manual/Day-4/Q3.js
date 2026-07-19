//Accept name and age form the user.Check if the user is valid voter or not

let prompt = require('prompt-sync')();
let n = Number(prompt("Enter your age"))
if(n>18){
    console.log("You can vote");
}
else if(n>=18){
    console.log("yes vote");
    
}
else{
    console.log("You cant vote");
    
}