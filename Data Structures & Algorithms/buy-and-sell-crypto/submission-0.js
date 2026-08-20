class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = Infinity
        let max = 0

        for(let price of prices){
            let profit = price - min
            min = Math.min(min,price)
            max = Math.max(max, profit)
        }

        return max
    }
}
