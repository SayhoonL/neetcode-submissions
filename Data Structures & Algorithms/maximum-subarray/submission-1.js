class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let res = nums[0]
        let total = res
        for(let i = 1; i < nums.length; i++){
            res = Math.max(nums[i], nums[i] + res)
            total = Math.max(total,res)
        }   
        return total
    }
}
