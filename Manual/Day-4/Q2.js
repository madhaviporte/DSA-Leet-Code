//Accept an integer and check whether it is an even number or add

let prompt = require('prompt-sync')();
let n = Number(prompt("enter a number"))
if(n%2===0){
    console.log("even");
    
}
else{
    console.log("odd");
    
}