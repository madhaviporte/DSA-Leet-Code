/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    find(arr) {
        // code here
         let need = 0;

        for (let i = arr.length - 1; i >= 0; i--) {
            need = Math.ceil((need + arr[i]) / 2);
        }

        return Math.max(1, need);
    }
}