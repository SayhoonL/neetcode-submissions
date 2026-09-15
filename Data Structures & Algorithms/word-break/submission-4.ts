class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        let set = new Set(wordDict)
        let dp = new Array(s.length + 1).fill(false)
        dp[0] = true


        for(let i = 0; i < s.length; i++){
            for(let j = i + 1; j <= s.length; j++){
                if(dp[i] && set.has(s.slice(i,j))){
                    dp[j] = true
                }
            }
        }
        console.log(dp)
        return dp[s.length]
    }
}
