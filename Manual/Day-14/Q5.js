// Capitalize first & last character of each word in the sentance and print the new sentance 
//ex-Hello bhai Kaise ho A
//ans-HellO BhaI KasiE HO a

let prompt = require("prompt-sync")()
let s = "hello bhai kya haal chaal";
let arr = s.split(" ");
let ans = "";

for(let i=0; i<arr.length; i++){
    let word = arr[i]
    let first = word.charAt(0).toUpperCase();
    let mid = word.substring(1, word.length-1)
    let last = word.charAt(word.length-1).toUpperCase()
    
    ans = ans + (first+mid+last)+" ";
}
console.log(ans);

/*
s = hello
s.charAt(o)
s.charAt(s.length-1)
s.substring(1 , s.length-1)
*/