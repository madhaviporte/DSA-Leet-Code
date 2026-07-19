/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
     let n = score.length;
    let arr = [];

    // Store score with original index
    for (let i = 0; i < n; i++) {
        arr.push([score[i], i]);
    }

    // Sort by score descending
    arr.sort((a, b) => b[0] - a[0]);

    let ans = new Array(n);

    for (let i = 0; i < n; i++) {
        let index = arr[i][1];

        if (i === 0) {
            ans[index] = "Gold Medal";
        } 
        else if (i === 1) {
            ans[index] = "Silver Medal";
        } 
        else if (i === 2) {
            ans[index] = "Bronze Medal";
        } 
        else {
            ans[index] = String(i + 1);
        }
    }

    return ans;
};