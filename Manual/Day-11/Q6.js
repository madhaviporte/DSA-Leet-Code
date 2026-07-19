// reverse the elements 
//with extra space

// let arr = [20,45,78,95,34]
// let temp = new Array(arr.length)

// let i = arr.length-1
// for(let j=0; j<temp.length; j++){
//     temp[j] = arr[i]
//     i--
// }
// console.log(arr);
// console.log(temp);

//without extra space
let arr = [20,45,78,95,34]
let i = 0 , j=arr.length-1

while(i<j){
    let temp = arr[i]
    arr[i]=arr[j]
    arr[j] = temp
    i++
    j--
}
console.log(arr);

