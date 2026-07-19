//isbn number

let prompt = require('prompt-sync')()
let n = Number(prompt("Enter a number"))
let copy = n , count =0
while(n>0){
     count++
     n = Math.floor(n/10)
}

if(count != 10) 
console.log("Invalid ISBN");
else{
    let ans = 0
    while(copy>0){
        let dig = copy%10
        ans = ans + (dig*count)
        count--
        copy = Math.floor(copy/10)
    }
    console.log(ans%11==0? "Valid isbbn": "invalid isbn");
    
}

