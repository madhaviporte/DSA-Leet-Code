// Take an array of strings words and string Prefix. Print the number of string in words that contin pref an a prefix. ex- input:words = ["pay", "attention", "practice", "attend"], pref = "at"
// Output=2

let prompt = require("prompt-sync")()
let words = ["pay", "attention", "practice", "attend"]
let pref = "at"
let count = 0;

for(let i=0; i<words.length; i++){
    if(words[i].startsWith(pref))count++
}

console.log(count);


