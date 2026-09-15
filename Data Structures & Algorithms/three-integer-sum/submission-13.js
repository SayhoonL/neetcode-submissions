class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = []
        nums.sort((a,b) => a - b)
        for(let i = 0; i < nums.length; i++){
            let l = i + 1
            let r = nums.length - 1
            if(i > 0 && nums[i - 1] === nums[i]) continue 
            while(l < r){
                let total = nums[i] + nums[l] + nums[r]
                if(total > 0){
                    r--
                }
                else if(total < 0){
                    l++
                }
                else{
                    result.push([nums[i], nums[l], nums[r]])
                    while(l < r && nums[l] === nums[l + 1]){
                        l++
                    }
                    while(l < r && nums[r] === nums[r - 1]){
                        r--
                    }
                    l++
                    r--
                }
            }
        }

        return result
    }
}
