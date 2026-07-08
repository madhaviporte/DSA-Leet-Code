/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     let arr = nums.map((value, index) =>({
        value,
        index
    }));
    arr.sort((a,b) => a.value - b.value)

     let left = 0
     let right = arr.length-1
   
   while(left<right){
    let sum = arr[left].value + arr[right].value
    if(sum === target){
        return [arr[left].index, arr[right].index]
    }else if (sum<target){
 left++
    }
    else{
        right--
    }
   }
    return []
};