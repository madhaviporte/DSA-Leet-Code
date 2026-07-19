/**
 * @param {number} n
 * @param {number} sum
 * @return {number}
 */

class Solution {
    countWays(n, sum) {
        // code here
        if (sum > 9 * n) return -1;

        const dp = Array.from({ length: n + 1 }, () =>
            Array(sum + 1).fill(-1)
        );

        function solve(pos, remSum) {
            if (pos === n) {
                return remSum === 0 ? 1 : 0;
            }

            if (dp[pos][remSum] !== -1) {
                return dp[pos][remSum];
            }

            let ans = 0;

            for (let digit = 0; digit <= 9; digit++) {
                if (digit <= remSum) {
                    ans += solve(pos + 1, remSum - digit);
                }
            }

            dp[pos][remSum] = ans;
            return ans;
        }

        let ans = 0;

        // First digit can't be 0
        for (let first = 1; first <= 9; first++) {
            if (first <= sum) {
                ans += solve(1, sum - first);
            }
        }

        return ans === 0 ? -1 : ans;
    }
};