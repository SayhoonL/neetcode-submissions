class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b)
        let result = []
        for(let i = 0; i < nums.length; i++){
            let left = i + 1
            let right = nums.length - 1
            if(i >= 1 && nums[i] === nums[i - 1]) continue
            while(left < right){
                if(nums[left] + nums[right] + nums[i] > 0){
                    right--
                }
                else if(nums[left] + nums[right] + nums[i] < 0){
                    left++
                }
                else{
                    result.push([nums[i],nums[left],nums[right]])
                    left++
                    right--
                    while(left < right && nums[left] === nums[left - 1]){
                        left++
                    }
                    while(left < right && nums[right] === nums[right + 1]){
                        right++
                    }
                }
            }
        }
        return result
    }
}
