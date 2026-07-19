//right angle traingle
//right angle traingle
let prompt = require('prompt-sync')()
let n = Number(prompt("Enter a star"))

for(let i=0; i<=n; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log();   
}

/**
 * 
 * *
 * * *
 * * * *
 * * * * *
 * * * * * *
 */