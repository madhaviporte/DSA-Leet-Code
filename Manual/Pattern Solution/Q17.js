let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a star'))

for(let i=0; i<n; i++){
    
    //space
 for(let j=0; j<n-i-1; j++){
    process.stdout.write(" ")
    }
    //fromCharCode
    for(let j=0; j<=i; j++){
        process.stdout.write(String.fromCharCode(65 + j)+ "")
    }
    //space decrecing letter
    for(let j=i-1; j>=0; j--){
        process.stdout.write(String.fromCharCode(65 + j) + "")
    }
    console.log();
    
}

/* 
    A
   ABA
  ABCBA
 ABCDCBA
ABCDEDCBA
*/