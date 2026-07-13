/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let left =0
    let maxLen = 0

    for(let right=0; right<s.length; right++){

        while(map.has(s[right])){
            map.delete(s[left])
            left++
        }
        map.set(s[right])
        maxLen = Math.max(maxLen, right-left+1)
    }
    return maxLen
};