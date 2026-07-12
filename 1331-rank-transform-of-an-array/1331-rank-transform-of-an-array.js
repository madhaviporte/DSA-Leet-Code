/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const ranksMap = {}

const sortedArray = arr.toSorted((a, b) => a - b)

let rankPointer = 1
sortedArray.forEach(num => {
    if (ranksMap[num]) return
    ranksMap[num] = rankPointer
    rankPointer ++
})

const results = arr.map(num => ranksMap[num])

return results
};