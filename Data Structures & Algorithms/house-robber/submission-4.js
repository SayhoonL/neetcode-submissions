class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        let dp = []
        dp[0] = nums[0]
        dp[1] = Math.max(nums[0], nums[1])
        if(nums.length === 1){
            return dp[0]
        }

        for(let i = 2; i < nums.length; i++){
            dp[i] = Math.max(dp[i-1] , dp[i - 2] + nums[i])
        }

        return Math.max(dp[nums.length - 1], dp[nums.length - 2])
    }
}
