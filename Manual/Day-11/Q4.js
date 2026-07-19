// find the min value of the array elements

let arr = [10,49,32,60,55,100]
let min = arr[0]

for(let i=1; i<arr.length; i++){
    if(arr[i]<min){
        min = arr[i]
    }
}
console.log(min);
