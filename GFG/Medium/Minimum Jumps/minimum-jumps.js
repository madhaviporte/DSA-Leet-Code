/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    minJumps(arr) {
        // code here
        const n = arr.length;

        if (n <= 1) return 0;
        if (arr[0] === 0) return -1;

        let jumps = 1;
        let maxReach = arr[0];
        let steps = arr[0];

        for (let i = 1; i < n; i++) {
            if (i === n - 1) return jumps;

            maxReach = Math.max(maxReach, i + arr[i]);
            steps--;

            if (steps === 0) {
                jumps++;

                if (i >= maxReach) return -1;

                steps = maxReach - i;
            }
        }

        return -1;
    }
}