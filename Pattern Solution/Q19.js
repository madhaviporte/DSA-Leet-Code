let prompt = require('prompt-sync')();
let n = Number(prompt('Enter a star: '));

// Upper Half
for (let i = 0; i < n; i++) {

    // Left Stars
    for (let j = 0; j < n - i; j++) {
        process.stdout.write("*");
    }

    // Spaces
    for (let j = 0; j < 2 * i; j++) {
        process.stdout.write(" ");
    }

    // Right Stars
    for (let j = 0; j < n - i; j++) {
        process.stdout.write("*");
    }

    console.log();
}

// Lower Half
for (let i = 1; i <= n; i++) {

    // Left Stars
    for (let j = 0; j < i; j++) {
        process.stdout.write("*");
    }

    // Spaces
    for (let j = 0; j < 2 * (n - i); j++) {
        process.stdout.write(" ");
    }

    // Right Stars
    for (let j = 0; j < i; j++) {
        process.stdout.write("*");
    }

    console.log();
}

/**
********
***  ***
**    **
*      *
*      *
**    **
***  ***
********
 */

//method two 
let iniS = 0
for(let i=0; i<n; i++){
    //star
    for(let j=0; j<n-i; j++){
        process.stdout.write("*")
    }
    //space
    for(let j=0; j<iniS; j++){
        process.stdout.write(" ")
    }
    //star
    for(let j=0; j<n-i; j++){
        process.stdout.write("*")
    }
    iniS +=2
    console.log();
}
iniS = 2 * n - 2;
for(let i=0; i<n; i++){
    //star
    for(let j=0; j<=i; j++){
        process.stdout.write("*")
    }
    //space
    for(let j=0; j<iniS; j++){
        process.stdout.write(" ")
    }
    //star
    for(let j=0; j<=i; j++){
        process.stdout.write("*")
    }
    iniS -=2
    console.log();
}