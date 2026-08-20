class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = []
        let subset = []
        function dfs(index, total){
            if(total === target){
                result.push([...subset])
                return
            }
            if(total > target || index === nums.length){
                return
            }
            subset.push(nums[index])
            dfs(index, total + nums[index])
            subset.pop()
            dfs(index + 1, total)
        }
        dfs(0,0)

        return result
    }
}
