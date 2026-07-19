/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let max = [m, n];
    for(let i=0; i<ops.length; i++){
        const [x, y] = ops[i]
        if(x < max[0]) max[0] = x
        if(y < max[1]) max[1] = y
    }
    return max[0]*max[1]
};