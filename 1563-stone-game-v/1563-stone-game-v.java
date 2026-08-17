class Solution {
    int[][] f;
    public int stoneGameV(int[] stoneValue) {
        int n = stoneValue.length;
        f = new int[n][n];
        return dfs(stoneValue,0,n-1);
    }
    public int dfs(int[] stoneValue, int left, int right){
        if(left==right){
            return 0;
        }
        if(f[left][right] !=0){
            return f[left][right];
        }
        int sum = 0;
        for(int i=left; i<=right; ++i){
            sum +=stoneValue[i];
        }
        int sum1 = 0;
        for(int i=left; i<right; ++i){
            sum1 +=stoneValue[i];
            int sumr = sum - sum1;
            if(sum1<sumr){
                f[left][right] = Math.max(f[left][right], dfs(stoneValue, left,i) + sum1);
            }
            else if(sum1>sumr){
                f[left][right] = Math.max(f[left][right], dfs(stoneValue, i + 1, right) + sumr);
            }
            else{
                f[left][right] = Math.max(f[left][right], Math.max(dfs(stoneValue, left,i), dfs(stoneValue,i+1,right)) + sum1);
            }
        }
        return f[left][right];
    }
}