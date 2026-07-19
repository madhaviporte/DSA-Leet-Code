//write a program to determine if given number is palindrome or not. print true if it is palindrome. false otherwise
//palindrome are the number for which reverse is exectly same as the orginal one. for eg. 121

let prompt = require('prompt-sync')()
let n = Number(prompt("Enter a number"))
let original = n;
let rev = 0
while(n>0){
    let ld = n % 10
    rev = rev*10 + ld
    n = Math.floor(n/10)
}
if(original === rev){
    console.log("True");
}else{
    console.log("False");
    
}