// find the min and second min from the array elements

let arr = [10,50,49,39,19,100]
let min = arr[0]
let sMin = arr[1]

for(let i=2; i<arr.length; i++){
    if(arr[i]<min){
        sMin = min 
        min = arr[i]
    }
    else if(arr[i]<sMin && arr[i] !=min){
        sMin = arr[i]
    }
}
console.log(min);
console.log(sMin);

