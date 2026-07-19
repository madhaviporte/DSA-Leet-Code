/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
class Solution {
    maxOfSubarrays(arr, k) {
        // code here
         let dq = [];      // stores indices
        let ans = [];

        for (let i = 0; i < arr.length; i++) {

            // Remove indices out of current window
            while (dq.length && dq[0] <= i - k) {
                dq.shift();
            }

            // Remove smaller elements
            while (dq.length && arr[dq[dq.length - 1]] <= arr[i]) {
                dq.pop();
            }

            dq.push(i);

            // Window formed
            if (i >= k - 1) {
                ans.push(arr[dq[0]]);
            }
        }

        return ans;
    }
}