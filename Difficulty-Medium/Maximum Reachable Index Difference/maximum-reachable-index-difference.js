/**
 * @param {String} s
 * @return {number}
 */

class Solution {
    maxIndexDifference(s) {
        // code here
         let n = s.length;

        let dp = new Array(n);
        let best = new Array(26).fill(-1);

        for (let i = n - 1; i >= 0; i--) {
            let ch = s.charCodeAt(i) - 97;

            if (ch === 25) {
                dp[i] = i; // z
            } else {
                let nxt = best[ch + 1];

                if (nxt === -1) {
                    dp[i] = i;
                } else {
                    dp[i] = nxt;
                }
            }

            best[ch] = Math.max(best[ch], dp[i]);
        }

        let ans = -1;

        for (let i = 0; i < n; i++) {
            if (s[i] === 'a') {
                ans = Math.max(ans, dp[i] - i);
            }
        }

        return ans;
    }
}