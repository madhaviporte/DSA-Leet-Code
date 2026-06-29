let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a star'))

for(let i=0; i<=n; i++){
   for(let j=0; j<=i; j++){
    process.stdout.write(String.fromCharCode(65 + i))
   }

    console.log();
    
}
/* 
A
BB
CCC
DDDD
EEEEE
*/