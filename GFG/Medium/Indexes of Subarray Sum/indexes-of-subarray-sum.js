/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[]}
 */

class Solution {
    subarraySum(arr, target) {
        // code here
         let start = 0;
        let sum = 0;

        for (let end = 0; end < arr.length; end++) {
            sum += arr[end];

            while (sum > target && start <= end) {
                sum -= arr[start];
                start++;
            }

            if (sum === target) {
                return [start + 1, end + 1]; // 1-based indexing
            }
        }

        return [-1];
    
    }
}