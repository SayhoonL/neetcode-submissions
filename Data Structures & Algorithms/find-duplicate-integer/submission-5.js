class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let fast = 0
        let slow = 0
        while(true){
            slow = nums[slow]
            fast = nums[nums[fast]]
            if(fast === slow){
                break
            }
        }
        slow = 0
        while(fast !== slow){
            slow = nums[slow]
            fast = nums[fast]
        }
        return slow
    }
}
