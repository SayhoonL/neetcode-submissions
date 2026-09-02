class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let max = []
        let min = []
        let result = nums[0]
        max[0] = nums[0]
        min[0] = nums[0]
        for(let i = 1; i < nums.length; i++){
            max[i] = Math.max(nums[i], max[i - 1] * nums[i], min[i - 1] * nums[i])
            min[i] = Math.min(nums[i], min[i - 1] * nums[i], max[i - 1] * nums[i])
            result = Math.max(max[i], result)
        }

        return result
    }
}
