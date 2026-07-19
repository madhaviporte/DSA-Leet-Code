/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    findDuplicates(arr) {
        // code here
        let ans = [];

        for (let i = 0; i < arr.length; i++) {
            let index = Math.abs(arr[i]) - 1;

            if (arr[index] < 0) {
                // already visited => duplicate
                ans.push(index + 1);
            } else {
                // mark visited
                arr[index] = -arr[index];
            }
        }

        return ans;
    }
}