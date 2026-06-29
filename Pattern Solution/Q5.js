//inverted right angle triangle

let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a star'))

for(let i=0; i<=n; i++){
    for(let j=0; j<=n-i; j++){
        process.stdout.write("* ")
    }
    console.log();
    // ites give inverted angle triangle
}

/**
 * * * * * *
 * * * * *
 * * * * 
 * * *
 * *
 */