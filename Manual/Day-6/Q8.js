//print all the factors of number

let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a number'))


// <-------first method ----->
// for(let i=0; i<=n; i++){
//     if(n%i==0){
//         process.stdout.write(i+" ");
//     }

// }

//  <---------second method ---------->

for(let i=0; i<=n/2; i++){
    if(n%i==0) process.stdout.write(i+" ")
}
console.log(n);
