class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let dp = new Array(s.length).fill(0)
        if(s[0] === "0") return 0
        dp[0] = 1
        for(let i = 1; i < s.length; i++){
            if (s[i] !== "0") {
                dp[i] += dp[i - 1]
            }
            let digits = Number(s.slice(i - 1, i + 1))
            if(digits > 9 && digits <= 26){
                if(i === 1){
                    dp[i] += 1
                }
                else{
                    dp[i] += dp[i - 2]
                }

            }
        }

        return dp[s.length - 1]
    }
}
