//factorial of a nuumber

let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a number'))
let fac = 1
for(let i=1; i<=n; i++){
    fac = fac * i
}
console.log("fac = "+ fac);
