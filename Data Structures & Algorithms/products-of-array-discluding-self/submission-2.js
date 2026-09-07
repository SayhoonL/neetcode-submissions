class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = []
        let arr2 = []
        let prefix = 1
        for(let i = 0; i < nums.length; i++){
            arr[i] = prefix
            prefix *= nums[i]
        }
        prefix = 1
        for(let i = nums.length - 1; i >= 0; i--){
            arr[i] *= prefix
            prefix *= nums[i]
        }

        return arr

    }
}
