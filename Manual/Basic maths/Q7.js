// GCD|HCF

let prompt = require('prompt-sync')()
let n1 = Number(prompt("Enter a 1 number"))
let n2 = Number(prompt("Enter a 2 number"))
let gcd = 1
for(let i=1; i<=n1; i++){
    if(n1%i===0 && n2%i===0)
        gcd = i
}
console.log(gcd);
