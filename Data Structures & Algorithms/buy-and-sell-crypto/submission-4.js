class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max_profit = 0;

        let buy=prices[0];

        for (let i=0;i<prices.length;i++){
            if (prices[i] < buy){
                buy = prices[i];
            }else{
                max_profit = Math.max(max_profit, prices[i] - buy);
            }
        }

        return max_profit;

    }
}
