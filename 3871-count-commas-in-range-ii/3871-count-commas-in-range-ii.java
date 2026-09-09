class Solution {
    public long countCommas(long n) {
        long p = 1000, comm=0;
        while(p<=n){
            comm +=n-p+1;
            p*=1000;
        }
        return comm;
    }
}