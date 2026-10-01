class Solution {
    public String largestEven(String s) {
        int n = s.length();
        int max = -1;
        for(int i=n-1; i>=0; i--){
            if(s.charAt(i)=='2'){
                max = i;
                break;
            }
        }
        return s.substring(0,max+1);
    }
}