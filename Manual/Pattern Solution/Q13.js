let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a star'))
let num = 1
for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
 process.stdout.write(num + " ")
 num = num +1
    }
    console.log();
}

/* 
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
*/