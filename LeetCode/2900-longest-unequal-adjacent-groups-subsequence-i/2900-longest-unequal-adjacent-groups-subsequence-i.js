/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    
    let arr = [];
    let x = groups[0];
    arr.push(words[0]);
    for(let i = 1 ; i< groups.length;i++){
        if(groups[i]!=x){
            arr.push(words[i])
            x= groups[i];
        }       
    }
    return arr;
};