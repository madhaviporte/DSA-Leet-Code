class Solution {
    public int majorityElement(int[] nums) {
        int count = 0;
        int condidate = 0;

        for(int num: nums){
            if(count == 0){
                condidate = num;
            }
            if(num == condidate){
                count++;
            }else{
                count--;
            }
        }    

        return condidate;    
    }
}