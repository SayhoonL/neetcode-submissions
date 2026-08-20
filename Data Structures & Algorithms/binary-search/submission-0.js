class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1
        while(right >= left){
            let mid = Math.floor((right + left) / 2)
            if(nums[mid] > target){
                right = mid
                right--
            }
            else if(nums[mid] < target){
                left = mid
                left++
            }
            else{
                return mid
            }
        }
        return -1
    }
}
