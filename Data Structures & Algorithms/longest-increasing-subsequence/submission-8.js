class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let result = 1
        let dp = new Array(nums.length).fill(1) 
        for(let i = 1; i < nums.length; i++){
            for(let j = 0; j < i; j++){
                if(nums[i] > nums[j]){
                    dp[i] = Math.max(dp[i], dp[j] + 1)
                    result = Math.max(result, dp[i])
                }
            }
        }
        console.log(dp)
        return result
    }
}
