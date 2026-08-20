class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let result = []
        let sub = []
        nums.sort((a,b) => a - b)
        function dfs(i){
            if(i === nums.length){
                result.push([...sub])
                return
            }
            sub.push(nums[i])
            dfs(i + 1)
            sub.pop()
            while(nums[i] === nums[i + 1]){
                i++
            }
            dfs(i + 1)
        }
        dfs(0)
        return result
    }
}
