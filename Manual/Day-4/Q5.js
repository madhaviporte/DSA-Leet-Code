//accept a year and check if it a leap year or not (google to find out what's leap year)

let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number"))
if(n%4==0 && n%100 !==0){
    console.log("leap year");
}
else if(n%400==0){
    console.log("Leap year");
    
}
else{
    console.log("no leap year");   
}