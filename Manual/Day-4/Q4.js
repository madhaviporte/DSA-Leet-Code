// Accept three number and print the greatest among them

let prompt = require('prompt-sync')();
let n1 = Number(prompt("enter a number"))
let n2 = Number(prompt("enter a number"))
let n3 = Number(prompt("enter a number"))
if(n1>n2 && n1>n3){
    console.log(n1);
    
}
else if(n2>n1 && n2>n3){
    console.log(n2);
    
}
else if (n3>n1 && n3>n2){
    console.log(n3);
    
}
else if (n1===n2 && n2===n3){
    console.log("equal");
    
}
else{
    console.log("error");
    
}