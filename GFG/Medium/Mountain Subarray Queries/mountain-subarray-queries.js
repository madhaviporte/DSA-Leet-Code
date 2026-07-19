class Solution {
    processQueries(arr, queries) {
        // code here
        let n = arr.length;

        let incEnd = new Array(n);
        let decStart = new Array(n);

        // incEnd[i] = farthest index till array is non-decreasing
        incEnd[n - 1] = n - 1;
        for (let i = n - 2; i >= 0; i--) {
            if (arr[i] <= arr[i + 1])
                incEnd[i] = incEnd[i + 1];
            else
                incEnd[i] = i;
        }

        // decStart[i] = leftmost index from where array is non-increasing
        decStart[0] = 0;
        for (let i = 1; i < n; i++) {
            if (arr[i] <= arr[i - 1])
                decStart[i] = decStart[i - 1];
            else
                decStart[i] = i;
        }

        let ans = [];

        for (let [l, r] of queries) {
            if (incEnd[l] >= decStart[r])
                ans.push(true);
            else
                ans.push(false);
        }

        return ans;
    }
}