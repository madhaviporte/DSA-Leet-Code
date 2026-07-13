/**
 * @param {number[]} b
 * @return {number}
 */

class Solution {
    minOperations(b) {
        // code here
          const MOD = 1000000007n;
        const n = b.length;

        const vis = new Array(n).fill(false);

        function gcd(a, c) {
            while (c !== 0n) {
                let t = a % c;
                a = c;
                c = t;
            }
            return a;
        }

        let lcm = 1n;

        for (let i = 0; i < n; i++) {
            if (!vis[i]) {
                let len = 0;
                let cur = i;

                while (!vis[cur]) {
                    vis[cur] = true;
                    cur = b[cur] - 1; // convert to 0-based index
                    len++;
                }

                let L = BigInt(len);
                lcm = (lcm / gcd(lcm, L)) * L;
            }
        }

        return Number(lcm % MOD);
    }
};