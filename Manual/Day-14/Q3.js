//Toggle each alphabate of String In - AcgDfD Output- aCGFd

let prompt = require("prompt-sync")()
let s = prompt("Enter a Sting")

let ans = ""; 
for(let i=0; i<s.length; i++){
    let ascii = s.charCodeAt(i)

    if(ascii >=65 && ascii<=97){
        //A
     ans = ans + String.fromCharCode(ascii + 32)
    }else{
     ans = ans + String.fromCharCode(ascii - 32)
    }
}
console.log(ans)


// A-65 , a-97 ascii value starting