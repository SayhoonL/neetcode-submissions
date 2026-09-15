class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        let dp = Array(amount + 1).fill(Infinity)
        dp[0] = 0
        for(let coin of coins){
            for(let i = coin; i <= amount; i++){
                if(dp[i - coin] !== Infinity){
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1)
                }
            }
        }
        return dp[amount] === Infinity ? -1 : dp[amount]
    }
}
