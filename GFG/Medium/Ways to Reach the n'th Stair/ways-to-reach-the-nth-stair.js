class Solution {
    countWays(n) {
        // code here
        const MOD = 1000000007;

        if (n <= 1) return 1;

        let prev2 = 1; // ways(0)
        let prev1 = 1; // ways(1)

        for (let i = 2; i <= n; i++) {
            let curr = (prev1 + prev2) % MOD;
            prev2 = prev1;
            prev1 = curr;
        }

        return prev1;
    }
}