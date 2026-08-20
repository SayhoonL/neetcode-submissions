class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = []
        function backTrack(start,path){
            res.push([...path])
            for(let i = start; i < nums.length; i++){
                path.push(nums[i])
                backTrack(i+1,path)
                path.pop()
            }
        }
        backTrack(0,[])
        return res
    }
}
