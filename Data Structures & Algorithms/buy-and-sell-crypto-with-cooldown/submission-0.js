class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let hold = -prices[0]
        let rest = 0
        let sold = 0

        for(let i = 1; i < prices.length; i++){
            let prevHold = hold
            let prevRest = rest
            let prevSold = sold

            hold = Math.max(prevHold, prevRest - prices[i])

            rest = Math.max(prevRest, prevSold)

            sold = prevHold + prices[i]

        }

        return Math.max(rest,sold)
    }
}
