class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int maxCnt = 0;
        int curCnt = 0;
        for(int num : nums){
              if(num==1)
              curCnt++;
              else{
                maxCnt = Math.max(maxCnt,curCnt);
                curCnt = 0;
              }
        }
        return maxCnt>curCnt ? maxCnt : curCnt;
    }
}