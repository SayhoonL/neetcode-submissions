class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let result = []
        let subset = []
        candidates.sort((a,b) => a - b)
        function dfs (i,total,prev) {
            if(total === target){
                result.push([...subset])
                return
            }
            if(i === candidates.length || total > target){
                return
            }

            subset.push(candidates[i])
            dfs(i + 1, total + candidates[i],candidates[i])
            subset.pop()
            while(candidates[i] === candidates[i + 1]){
                i++
            }
            dfs(i + 1, total,candidates[i])

        }
        dfs(0,0,Infinity)
        return result
    }
}
