class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length;
        int buy1 = -prices[0];
        int shell1 = 0;
        int buy2 = -prices[0];
        int shell2 = 0;
        for(int i=0; i<n; i++){
            buy1 = Math.max(buy1,-prices[i]);
            shell1 = Math.max(shell1, buy1+prices[i]);

            buy2 = Math.max(buy2,shell1-prices[i]);
            shell2 = Math.max(shell2,buy2+prices[i]);
        }
        return shell2;
    }
}