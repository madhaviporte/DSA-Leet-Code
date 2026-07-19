//print the sum of all even & odd numbers in a rang saparatly

let prompt = require('prompt-sync')()
let a = Number(prompt('Enter a first number'))
let b = Number(prompt('Enter a second number'))
let evenSum = 0 , oddSum=0
    if(a>b){
        let temp = a;
        a = b;
        b = temp;
    }
    for(let i=a; i<=b; i++){
          if(i%2==0){
            evenSum +=i;
          }
          else{
            oddSum += i;
          }
    }
    console.log("even sum = "+ evenSum);
    console.log("odd sum ="+ oddSum);
    
    
