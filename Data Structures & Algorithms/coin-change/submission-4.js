class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = new Array(amount + 1).fill(Infinity)
        dp[0] = 0
        for(let coin of coins){
            for(let i = coin; i <= amount; i++){
                dp[i] = Math.min(dp[i - coin] + 1, dp[i])
            }
        }
        return dp[amount] === Infinity ? -1 : dp[amount]
    }
}
