//print all the factors of a number

let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a number'))


// for(let i=1; i<=n; i++){
//       if(n%i==0) count++;     
// }
// if(count==2) console.log("prime number");
// else console.log("not prime number");

//<-----------------second method----------------->

// if(n<=1) console.log("not prime");
// else{
//     let count =0;
//     for(let i=2; i<=n/2; i++){
//     if(n%i==0) count++
// }
// if(count==0) console.log("prime number");
// else console.log("not prime number");
// }

//<----------------third method------------------->
  
if(n<=1) console.log("not prime");
else if(n===2) console.log("prime");
else if(n%2===0) console.log("not prime");
else{
    let isPrime = true;
    for(let i=3; i<=Math.floor(Math.sqrt(n)); i+=2){
        if(n%1===0){
            isPrime = false;
            break;
        }
    }
    console.log(isPrime?"prime":"not Prime");
    
}









