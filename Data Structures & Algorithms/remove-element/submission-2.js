class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let count = 0
        let fast = 0
        for(let i = 0; i < nums.length; i++){
            while(nums[fast] === val && fast < nums.length){
                fast++
            }
            if(fast === nums.length) return count
            let temp = nums[i]
            nums[i] = nums[fast]
            nums[fast] = temp
            fast++
            count++
        }
        return count
    }
}
