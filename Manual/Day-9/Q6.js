//mirror right angle traingle
let prompt = require('prompt-sync')()
let n = Number(prompt("Enter a star"))

for(let i=1; i<=n; i++){

    //inverted 
    for(let j=1; j<=n-i; j++){
        process.stdout.write("  ")
    }
    //right angle triangle
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

 */