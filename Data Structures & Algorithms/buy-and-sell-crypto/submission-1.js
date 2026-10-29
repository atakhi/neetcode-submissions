class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        var profit = 0;
        var l = 0;
        var r = prices.length - 1;
        while(l<r){
            var maxP = l+1;
            while(maxP <= r) {
                var b = prices[l];
                var s = prices[maxP];
                var p = s - b;
                profit = Math.max(p, profit);
                maxP++;
            }
            l++;
        }
        return profit;

    }
}
