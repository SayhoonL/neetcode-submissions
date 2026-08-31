class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(n !== edges.length + 1) return false
        if(n === 1 && edges.length === 0)  return true
        let graph = Array.from({length :n}, () => [])
        for(let[parent, child] of edges){
            graph[parent].push(child)
            graph[child].push(parent)
        }
        let set = new Set()
        function dfs(node){
            for(let item of graph[node]){
                if(set.has(item)){
                    continue
                }
                set.add(item)
                dfs(item)
            }
        }

        dfs(0)
        return set.size === n
    }
}
