class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let result = 0
        for(let i = 1; i <= nums.length; i++){
            result ^= nums[i - 1]
            result ^= i
        }

        return result
    }
}
