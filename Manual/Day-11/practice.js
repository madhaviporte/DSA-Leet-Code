// let arr = [10,20,30,40]
// console.log(arr);
// arr.push(100) // inserting from last
// console.log(arr);
// arr.pop() //deleting from last 
// console.log(arr);
// arr.unshift(69) // insertion from first
// console.log(arr);
// arr.shift() // deleting from first
// console.log(arr);



// let arr = new Array(3).fill(true)
// console.log(arr);

// arr[0] = 10
// arr[1] = 20
// arr[2] = 30
// arr[3] = 40
// console.log(arr);

//let arr = [100,"hello",true,{}]
// console.log();
//multiple value store kr skte hai



// accept value from user

let prompt = require("prompt-sync")()
let n = Number(prompt("Enter size of array"))
let arr = new Array(n)

for(let i=0; i<arr.length; i++){
    arr[i] = prompt("Enter a value")
}
console.log(arr);

