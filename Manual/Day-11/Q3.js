//Second max element from array

let arr = [50,20,68,56,100,98,100]
let max = Math.max(arr[0],arr[1])
let sMax = Math.min(arr[0], arr[1])

for(let i=2; i<arr.length; i++){

    if(arr[i]>max){
        sMax = max 
        max = arr[i]
        
    }
    else if(arr[i]>sMax && arr[i] !=max){
        sMax = arr[i]
    }
    
}
console.log(max);
console.log(sMax);
