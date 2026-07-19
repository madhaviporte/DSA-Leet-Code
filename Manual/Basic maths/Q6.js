//find a prime number
let prompt = require('prompt-sync')()
let n = Number(prompt("Enter a number"))

let count = 0
for(let i=0; i<=n; i++){
    if(n%i===0)
        count++
}
if(count === 2){
    console.log("prime number");
    
}else console.log(("Not a prime number"));
