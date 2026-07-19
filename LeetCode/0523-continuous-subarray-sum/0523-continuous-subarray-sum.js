/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let sum = 0
    let map = new Map()
    map.set(0,-1)
    for(let i=0; i<nums.length; i++){
        sum += nums[i]
        let rem = sum % k
        let adjRem = rem < 0 ? rem + k : rem

        if(map.has(adjRem)){
            if(i-map.get(adjRem)>1){
                return true
            }
        } else {
            map.set(adjRem,i)
        }
    } return false
};