/**
 * @param {number[]} a
 * @returns {number[]}
 */
class Solution {
    leaders(a) {
        // code here
         let n = a.length;
        let ans = [];

        let maxRight = a[n - 1];
        ans.push(maxRight);

        for (let i = n - 2; i >= 0; i--) {
            if (a[i] >= maxRight) {
                maxRight = a[i];
                ans.push(a[i]);
            }
        }

        ans.reverse();
        return ans;
    }
}