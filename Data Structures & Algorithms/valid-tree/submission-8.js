class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(n !== edges.length + 1) return false
        let graph = Array.from({length :n}, () => [])
        for(let[parent, child] of edges){
            graph[parent].push(child)
            graph[child].push(parent)
        }
        let set = new Set()
        set.add(0)
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
