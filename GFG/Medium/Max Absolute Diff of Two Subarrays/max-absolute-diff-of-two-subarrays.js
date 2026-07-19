class Solution {
    maxDiffSubArrays(arr) {
        // code here
        const n = arr.length;

        let leftMax = new Array(n);
        let rightMax = new Array(n);
        let leftMin = new Array(n);
        let rightMin = new Array(n);

        // Maximum subarray from left
        let curr = arr[0];
        leftMax[0] = arr[0];

        for (let i = 1; i < n; i++) {
            curr = Math.max(arr[i], curr + arr[i]);
            leftMax[i] = Math.max(leftMax[i - 1], curr);
        }

        // Maximum subarray from right
        curr = arr[n - 1];
        rightMax[n - 1] = arr[n - 1];

        for (let i = n - 2; i >= 0; i--) {
            curr = Math.max(arr[i], curr + arr[i]);
            rightMax[i] = Math.max(rightMax[i + 1], curr);
        }

        // Minimum subarray from left
        curr = arr[0];
        leftMin[0] = arr[0];

        for (let i = 1; i < n; i++) {
            curr = Math.min(arr[i], curr + arr[i]);
            leftMin[i] = Math.min(leftMin[i - 1], curr);
        }

        // Minimum subarray from right
        curr = arr[n - 1];
        rightMin[n - 1] = arr[n - 1];

        for (let i = n - 2; i >= 0; i--) {
            curr = Math.min(arr[i], curr + arr[i]);
            rightMin[i] = Math.min(rightMin[i + 1], curr);
        }

        let ans = 0;

        for (let i = 0; i < n - 1; i++) {
            ans = Math.max(ans, Math.abs(leftMax[i] - rightMin[i + 1]));
            ans = Math.max(ans, Math.abs(leftMin[i] - rightMax[i + 1]));
        }

        return ans;
    }
}