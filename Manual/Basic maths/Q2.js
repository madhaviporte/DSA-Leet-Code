//Write a program to generate the reverse of given number N. Print the correspoonding reverse number Note:if A number has trailing zeros then ites reverse will not incluude them for eg. rever of 10400 will be 401 indeat of 00401.

let prompt = require('prompt-sync')()
let n = Number(prompt("Enter a number"))

let rev = 0
while(n>0){
    let ld = n%10;
    rev = rev*10 + ld
    n = Math.floor(n/10)
}
console.log(rev);
