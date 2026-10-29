class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        var profit = 0;
        var l = 0;
        var r = 1;
        while(r < prices.length){
            var b = prices[l];
            var s = prices[r];
            var p = s - b;
            if(p > 0) {
                profit = Math.max(p, profit);
            } else {
                l = r;
            }
            
            r++;
        }
        return profit;

    }
}
