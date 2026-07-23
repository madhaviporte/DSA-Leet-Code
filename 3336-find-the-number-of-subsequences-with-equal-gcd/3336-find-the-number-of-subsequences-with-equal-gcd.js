/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencePairCount = function(nums) {
     const MOD = 1000000007;
    const MAX = 200;

    // dp[g1][g2] = number of ways
    let dp = Array.from({ length: MAX + 1 }, () =>
        Array(MAX + 1).fill(0)
    );

    dp[0][0] = 1;

    for (let num of nums) {
        let next = dp.map(row => [...row]);

        for (let g1 = 0; g1 <= MAX; g1++) {
            for (let g2 = 0; g2 <= MAX; g2++) {
                if (dp[g1][g2] === 0) continue;

                // Put current number into first subsequence
                let ng1 = g1 === 0 ? num : gcd(g1, num);
                next[ng1][g2] =
                    (next[ng1][g2] + dp[g1][g2]) % MOD;

                // Put current number into second subsequence
                let ng2 = g2 === 0 ? num : gcd(g2, num);
                next[g1][ng2] =
                    (next[g1][ng2] + dp[g1][g2]) % MOD;
            }
        }

        dp = next;
    }

    let ans = 0;

    for (let g = 1; g <= MAX; g++) {
        ans = (ans + dp[g][g]) % MOD;
    }

    return ans;
};

function gcd(a, b) {
    while (b !== 0) {
        let t = a % b;
        a = b;
        b = t;
    }
    return a;
};