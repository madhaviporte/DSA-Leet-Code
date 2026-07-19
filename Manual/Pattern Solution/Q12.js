let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a star'))

let space = 4*(n-1)
for(let i=1; i<=n; i++){

    //count
    for(let j=1; j<=i; j++){
        process.stdout.write(j+ " ")
    }
    //space
    for(let j=1; j<=space; j++){
        process.stdout.write(" ")
    }
    //count
    for(let j=i; j>=1; j--){
        process.stdout.write(j + " ")
    }
    console.log();
    space -= 4
}

/* 
1                     1 
1 2                 2 1 
1 2 3             3 2 1 
1 2 3 4         4 3 2 1 
1 2 3 4 5     5 4 3 2 1 
1 2 3 4 5 6 6 5 4 3 2 1 
*/