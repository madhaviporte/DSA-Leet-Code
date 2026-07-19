/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    maxAmount(arr, k) {
        // code here
        const MOD = 1000000007n;

        let low = 0;
        let high = Math.max(...arr);

        // Find price threshold
        while (low < high) {
            let mid = Math.floor((low + high) / 2);

            let cnt = 0;
            for (let x of arr) {
                if (x > mid) cnt += (x - mid);
            }

            if (cnt > k)
                low = mid + 1;
            else
                high = mid;
        }

        let t = low;

        let ans = 0n;
        let sold = 0;

        for (let x of arr) {
            if (x > t) {
                let c = x - t;
                sold += c;

                let sum = (BigInt(x) * BigInt(x + 1) / 2n)
                        - (BigInt(t) * BigInt(t + 1) / 2n);

                ans = (ans + sum) % MOD;
            }
        }

        // Remove extra tickets sold at threshold
        ans = (ans - BigInt(sold - k) * BigInt(t)) % MOD;

        if (ans < 0) ans += MOD;

        return Number(ans);
    }
}
