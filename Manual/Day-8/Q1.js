let prompt = require('prompt-sync')();
let computer = Math.floor((Math.random()*100)+1)
let user;

do{

    user = Number(prompt("enter a number between 1 to 100"))
    if(user>computer) console.log("to large");
    else if(user<computer) console.log("too small");
    else if (user == computer) {console.log("congratulation you guuss the number correctlly");
    }
    else console.log("Invalid Number");
    
    
}while(user !== computer)