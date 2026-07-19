/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    missingNum(arr) {
        // code here
         let n = arr.length + 1;

        let totalSum = (n * (n + 1)) / 2;
        let arrSum = 0;

        for (let num of arr) {
            arrSum += num;
        }

        return totalSum - arrSum;
    }
}