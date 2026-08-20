class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = []
        let total = 1
        for(let i = 0; i < nums.length; i++){
            arr[i] = total
            total *= nums[i]

        }
        total = 1
        for(let i = nums.length - 1; i >= 0; i--){
            arr[i] = total * arr[i]
            total = total * nums[i]
        }
        return arr
    }
}
