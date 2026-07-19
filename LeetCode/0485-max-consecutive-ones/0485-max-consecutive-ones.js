/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
     if(nums.length==1 && nums[0]===1) return 1
let max = 0, c = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
        max = Math.max(max, c);
        c = 0;
    } else {
        c++;
    }
}

// Handle case where array ends with 1s
max = Math.max(max, c);

return max;
};