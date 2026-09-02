class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let dp = new Array(s.length + 1).fill(0)
        dp[0] = 1
        if(s[0] !== "0"){
            dp[1] = 1
        }
        for(let i = 2; i <= s.length; i++){
            if(s[i - 1] !== "0"){
                dp[i] += dp[i - 1]
            }
            let twoDigits = Number(s[i - 2] + s[i - 1])
            if(twoDigits >= 10 && twoDigits <= 26){
                dp[i] += dp[i-2]
            }
        }

        return dp[s.length]

        
    }
}
