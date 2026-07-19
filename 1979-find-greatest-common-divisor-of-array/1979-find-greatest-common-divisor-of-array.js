/**
 * @param {number[]} nums
 * @return {number}
 */
 function gcd(a, b) {
    return b === 0 ? Math.abs(a) : gcd(b, a % b);
}
var findGCD = function(nums) {
    nums.sort((a, b) => a - b);

    return gcd(nums[0], nums[nums.length - 1]);
};