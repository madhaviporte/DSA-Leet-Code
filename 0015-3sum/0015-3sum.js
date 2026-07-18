/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
     nums.sort((a, b) => a - b);

    let h = [];
    let seen = new Set();

    for (let i = 0; i < nums.length - 1; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const total = nums[i] + nums[j] + nums[k];

            if (total === 0) {
                const triplet = [nums[i], nums[j], nums[k]];
                const key = `${nums[i]},${nums[j]},${nums[k]}`;

                if (!seen.has(key)) {
                    seen.add(key);
                    h.push(triplet);
                }

                j++;
                k--;
            } else if (total > 0) {
                k--;
            } else {
                j++;
            }
        }
    }

    return h;
};