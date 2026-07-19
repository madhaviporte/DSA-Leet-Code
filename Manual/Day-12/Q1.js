//lenear search

let prompt = require("prompt-sync")()
let arr = [12,56,32,89,15,98,34]
let t = Number(prompt("ENter search element"))
let index = -1

for(let i=0; i<arr.length; i++){
    if(arr[i]==t){
   index = i;
   break
    }
}
console.log(index ==-1?
    "not found": "founded at " + index + " index ");
