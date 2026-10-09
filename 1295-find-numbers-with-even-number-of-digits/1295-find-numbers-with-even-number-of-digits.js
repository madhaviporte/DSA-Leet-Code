/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let n = nums.length;
    let count = 0;
    for(let i=0; i<n; i++){
        let digit = nums[i].toString().length;

        if(digit%2===0){
            count++;
        }
    }
    return count;
};