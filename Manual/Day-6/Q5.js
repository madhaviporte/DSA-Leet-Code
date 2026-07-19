//Sum up to n terms
let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a number'))
let sum = 0
for (let i = 1; i <= n; i++) {
    sum = sum +i 
}
    console.log("sum = "+ sum);
