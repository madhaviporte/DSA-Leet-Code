class Solution {
    public int maxSubArray(int[] nums) {
        int n = nums.length;
        int maxSum = nums[0];
        int maxCurr = nums[0];
        for(int i=1; i<n; i++){
            maxCurr = Math.max(nums[i],maxCurr+nums[i]);
            maxSum = Math.max(maxSum,maxCurr);
        }
        return maxSum;
    }
}