class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0]
        let first = nums.slice(1, nums.length)
        let second = nums.slice(0, nums.length - 1)

        let dp1 = new Array(first.length + 1).fill(0)
        let dp2 = new Array(first.length + 1).fill(0)
        dp1[0] = first[0]
        dp1[1] = Math.max(first[0],first[1])
        dp2[0] = second[0]
        dp2[1] = Math.max(second[0],second[1])
        for(let i = 2; i < first.length; i++){
            dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + first[i])
        }
        for(let i = 2; i < second.length; i++){
            dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + second[i])
        }
        console.log(dp1)
        console.log(dp2)
        let ans1 = dp1[first.length - 1]
        let ans2 = dp2[second.length -1]
        return Math.max(ans1,ans2)
    }
}
