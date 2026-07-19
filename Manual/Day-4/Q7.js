//shop discount - Decription or graphics

//dis = (dis*amount)/100
let prompt = require('prompt-sync')();
let amount = Number(prompt("Enter amount"))
// let dis = (dis*amount)/100
let dis = 0;
if(amount>0 && amount<=5000){
 dis = 0;
}
else if (amount>5000 && amount<=7000){
    //   payableAmount = amount -(5*amount)/100;
    dis =5;
}
else if (amount>7000 && amount <=9000){
//  payableAmount = amount -(10*amount)/100;
 dis = 10;
}
else if (amount>9000 && amount <=10000){
//  payableAmount = amount (20*amount)/100;
dis =20
}
else if (amount>7000 && amount <=15000){
//  payableAmount = amount -(30*amount)/100;
dis = 30
}

console.log("payable amount" + (amount - (dis*amount)/100));
