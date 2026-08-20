class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = []
        nums.sort((a,b) => a - b)
        for(let i =0; i < nums.length; i++){
            let left = i + 1
            let right = nums.length -1
            if(i > 0 && nums[i] === nums[i - 1]){
                continue
            }
            while(left < right){
                let total = nums[i] + nums[left] + nums[right]
                if(total > 0){
                    right--
                }
                else if(total < 0){
                    left++
                }
                else{
                    result.push([nums[i],nums[left],nums[right]])
                    left++
                    right--
                    while(nums[left] === nums[left - 1] && left < right){
                        left++
                    }
                    while(nums[right] === nums[right + 1] && left < right){
                        right--
                    }
                }
            }
        }
        return result
    }
}
