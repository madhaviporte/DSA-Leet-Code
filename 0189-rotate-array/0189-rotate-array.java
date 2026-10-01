class Solution {
    public void rotate(int[] nums, int k) {
        int n = nums.length;
     k = k%n;
      //rorate whole element
     rev(nums,0,n-1);
     //rotate only k elements
     rev(nums,0,k-1);
     //roate rest of elemnts
     rev(nums,k,n-1);
    
    }
    public void rev(int[] nums, int start , int end){
        while(start<end){
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
}