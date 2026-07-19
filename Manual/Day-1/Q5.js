//Swap two variables via 3 methods
// cont1 = 100
//cont2 = 89
//temp = cont1  :temp=100
//cont1 = cont2  :cont1=89
//cont2 = temp  :cont2=100

//method 1
// with Extra variable 
let a = 10
let b = 20

let temp = a;
a = b;
b = temp
console.log(a);
console.log(b);

//method 2
//without extra variable

// a = 10
// b= 20

// a = a+b ---> a = 30
// b = a-b ---> b = 10
// a = a-b ----> a = 20

let a1 = 10
let b1= 20
console.log(a1,b1);

a1 = a1 + b1
b1 = a1 - b1
a1 = a1 - b1
console.log(a1,b1);

//method-3
//swapping with destructuing array



let a = 10
let b = 20
console.log(a1,b1);

[a,b] = [b,a]
console.log(a,b);






