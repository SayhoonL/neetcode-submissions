class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let dp = Array.from({length : m}, () => {return new Array(n).fill(Infinity)})
        dp[0][0] = 1
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(i === 0 && j === 0) continue
                if(j === 0){
                    dp[i][j] = dp[i - 1][j]
                }
                else if(i === 0){
                    dp[i][j] = dp[i][j - 1]
                }
                else{
                    dp[i][j] = dp[i - 1][j] + dp[i][j-1]
                }
            }
        }
        console.log(dp)
        return dp[m - 1][n - 1]
    }   
}
