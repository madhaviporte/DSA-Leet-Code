class Solution {
    public int countCommas(int n) {
        int com = 0;
        for(int i=0; i<=n; ++i){
            if(i>999){
                com+=1;
            }
        }
        return com;
    }
}