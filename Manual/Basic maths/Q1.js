//Given the number 'n' find out and return the number of digits present in a number.

let prompt = require('prompt-sync')()
let n = Number(prompt("Enter a number"))
let cnt = 0
while(n>0){
    // let lastDigit = n%10;
    cnt += 1;
    n = n/10
}
console.log(cnt);
