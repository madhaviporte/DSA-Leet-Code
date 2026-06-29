let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a star'))

for(let i=1; i<=n; i++){
    for(let j=1; j<=n-i; j++){
        process.stdout.write(j + " ")
    }
    console.log();
}

/* 
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 
*/