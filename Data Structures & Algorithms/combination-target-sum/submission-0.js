class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = []
        function backTrack(start,path,total){
            if(total > target) return
            if(total === target){
                res.push([...path])
            }
            for(let i = start; i < nums.length; i++){
                path.push(nums[i])
                backTrack(i,path,total + nums[i])
                path.pop()
            }
        }
        backTrack(0,[],0)

        return res
    }
}
