class Solution {
    public void moveZeroes(int[] nums) {
        int n = nums.length;
        if(nums==null || n==0) {
            return;
        }

        int cur = 0;

        for(int i=0; i<n; ++i){
            if(nums[i] !=0){
                int temp = nums[cur];
                nums[cur++] = nums[i];
                nums[i] = temp;
            }
        }
        
    }
}