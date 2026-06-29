let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a star'))

for(let i=0; i<=n; i++){
    for(let j=0; j<=i; j++){
 process.stdout.write(String.fromCharCode(65 + j) + " ")
    }
    console.log();
}

/* 
A 
A B 
A B C 
A B C D 
A B C D E 
A B C D E F 
*/