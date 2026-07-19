//using switch(check consonant or vowel using switch)



let prompt = require('prompt-sync')()
let s = prompt("Enter a string")

// switch(day){
//     case 1:{
//         console.log("monday");
//         break
//     }
//     case 2:{
//         console.log("Tuesday");
//         break
//     }
//     case 3:{
//         console.log("wednesday");
//         break
//     }
//     case 4:{
//         console.log("thursday");
//         break
//     }
//     default: console.log("kuchh bbhi nahi");
    
// }

let consonant = 0 , vowel = 0;
for(let i=0; i<s.length;i++){
    let ch = s.charAt(i);
    switch(ch){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u': vowel++;
            break
            default : consonant++
    }
}
console.log("consonant" + consonant);
console.log("vowel"+vowel);

