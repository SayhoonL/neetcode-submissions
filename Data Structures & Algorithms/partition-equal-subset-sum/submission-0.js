class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let total = 0
        for(let num of nums){
            total += num
        }
        if(total % 2 === 1){
            return false
        }
        let target = total / 2
        let dp = new Array(target + 1).fill(false)
        dp[0] = true
        for(let num of nums){
            for(let j = target; j > 0; j--){
                if(dp[j - num]){
                    dp[j] = true
                }
            }
        }

        return dp[target]

    }
}
