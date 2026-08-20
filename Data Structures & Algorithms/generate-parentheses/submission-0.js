class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let first = 0
        let second = 0
        let result = []
        let subset = []
        function dfs(){
            if(first < second || first > n || second > n){
                return
            }
            if(subset.length === n * 2){
                result.push([...subset].join(""))
                return
            }
            subset.push("(")
            first++
            dfs()
            subset.pop()
            first--
            subset.push(")")
            second++
            dfs()
            subset.pop()
            second--
            
        }
        dfs()

        return result
    }
}
