class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let res = []
        function backTrack(start,path){
            if(path.length === k){
                res.push([...path])
            }
            for(let i = start; i <= n; i++){
                path.push(i)
                backTrack(i + 1, path)
                path.pop()
            }
        }
        backTrack(1,[])
        return res
    }
}
