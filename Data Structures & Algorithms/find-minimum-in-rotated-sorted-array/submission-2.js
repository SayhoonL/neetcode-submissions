class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length - 1
        while(l < r){
            let m = Math.floor((r - l) / 2 + l)
            if(nums[m] < nums[r]){
                r = m
            }
            else{
                l = m + 1
            }
        }
        return nums[l]
    }
}
