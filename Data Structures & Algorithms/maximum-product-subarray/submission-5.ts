class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        let min = nums[0]
        let max = nums[0]
        let result = nums[0]
        for(let i = 1; i < nums.length; i++){
            let prevMin = min
            let prevMax = max
            min = Math.min(nums[i], prevMin * nums[i], prevMax * nums[i])
            max = Math.max(nums[i], prevMax * nums[i], prevMin * nums[i])

            result = Math.max(max,result)
        }


        return result
    }
}
