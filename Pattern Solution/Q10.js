let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a star'))

for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write("*")
    }
    console.log();   
}
for(let i=1; i<n; i++){
    for(let j=1; j<=n-i; j++){
        process.stdout.write("*")
    }
    console.log();
    // ites give inverted angle triangle
}

// second method 
for(let i=1; i<=2*n-1; i++){
    let stars = i;
    if(i>n) stars = 2*n-i;
    for(let j=1; j<=stars; j++){
        process.stdout.write("*")
    }
    console.log();
    
}

/*
* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * 
* * * * 
* * * 
* * 
* 
*/