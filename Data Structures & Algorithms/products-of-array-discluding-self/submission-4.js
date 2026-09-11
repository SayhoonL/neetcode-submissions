class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = new Array(nums.length).fill(1)
        let prefix = 1
        for(let i = 1; i < nums.length; i++){
            arr[i] = nums[i - 1] * prefix
            prefix *= nums[i - 1]
        }
        prefix = 1
        console.log(arr)
        for(let i = nums.length - 1; i >= 0; i--){
            arr[i] *= prefix 
            prefix *= nums[i]
        }

        return arr

    }
}
