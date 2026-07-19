//write a program to calculate the area of a circle,rectangle,and triangle using a switch statement
let prompt= require('prompt-sync')();
console.log("Enter 1 for area of ractangle");
console.log("Enter 2 for area of sqaure");
console.log("Enter 3 for area of traiangle");
let n = prompt()

switch(n){
    case 1:{
        let len = Number(prompt("Enter length"))
        let breadth = Number(prompt("Enter breadth"))
        console.log(len*breadth);
        break
    }
    case 2:{
        let side = Number(prompt("Enter side"))
        console.log(side*side);
        break
        
    }
    case 3:{
        let height = Number(prompt("Enter height"))
        let base = Number(prompt("Enter base"))
        console.log((height*base)/2);
        break
        
    }
    default:
        console.log("Invalid Number");
        
}
