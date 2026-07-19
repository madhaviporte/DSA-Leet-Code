// bijli bill

//Top-down approch
let prompt = require('prompt-sync')();

let unit = Number(prompt("enter unit"))//600
let amount = 0;

// if(unit>0 && unit<=100){
// console.log(unit*4.2); //150
// }
// else if (unit >100 && unit<=200){
//  console.log((100*4.2) + (unit-100)*6);//50
 
// }
// else if (unit>200 && unit<=400){
//     console.log((100*4.2) + (100*6) +(unit-200)*8);
    
// }
// else{
//     console.log((100*4.2)+(100*6)+(200*8)+(unit-400)*13);
    
// }

//bottom-top approch

if(unit>400){
    amount = (unit-400)*13
  unit = 400
}
if(unit>200 && unit<=400){
   amount = amount+( unit -200)*8;
   unit = 200
}
if(unit>100 && unit<=200){
    amount = amount + (unit-100)*6
    unit = 100
}

amount = amount +(unit*4.2)
console.log(amount);
