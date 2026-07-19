/**
 * Amstrong number
 * 371 = 3*3 + 7*3 + 1*3 = 371
 * 1634 = 1*3 + 6*3 + 3*3 + 4*3 = 1634
 */

let prompt = require('prompt-sync')()
let n = Number(prompt("Enter a number"))
let original = n

let digits = n.toString().length
let sum = 0;

while(n>0){
    let ld = n%10
    sum += Math.pow(ld, digits)
    n = Math.floor(n/10)
}
if(sum=== original){
    console.log('Armstrong Number');
    
}else(
    console.log("Not an Armstrong Number")
)
