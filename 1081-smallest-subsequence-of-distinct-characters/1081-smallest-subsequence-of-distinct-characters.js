/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    let n = s.length
    let lastIdxOfChars = {}
    for (let i = 0; i < n; i++) lastIdxOfChars[s[i]] = i
    let stack = [] // b, c
    let visit = new Set()

    for (let i = 0; i < n; i++) {
        let c = s[i]

        if (visit.has(c)) continue

        while (stack.length && stack[stack.length - 1] > c && lastIdxOfChars[stack[stack.length - 1]] > i) {
            visit.delete(stack.pop())
        }

        stack.push(c)
        visit.add(c)
    }

    return stack.join("")
};