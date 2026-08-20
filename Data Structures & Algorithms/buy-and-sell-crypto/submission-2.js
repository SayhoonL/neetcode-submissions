class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0]
        let maxProfit = 0
        for(let price of prices){
            let profit = price - buy
            buy = Math.min(buy, price)
            maxProfit = Math.max(profit, maxProfit)
        }
        return maxProfit
    }
}
