let prompt = require('prompt-sync')();
let n = Number(prompt('Enter a star: '));
let spaces = 2*n -1
for(let i=1; i<=2*n-1; i++){
    let stars = i
    if(i>n) stars = 2*n - i
    //start
    for(let j=1; j<=stars; j++){
        process.stdout.write("*")
}
//space
for(let j=1; j<=spaces; j++){
    process.stdout.write(" ")
}
//star
 for(let j=1; j<=stars; j++){
        process.stdout.write("*")
}
console.log();
if(i<n) spaces -=2
else spaces +=2
}

/**
*         *
**       **
***     ***
****   ****
***** *****
****   ****
***     ***
**       **
*         *
 */