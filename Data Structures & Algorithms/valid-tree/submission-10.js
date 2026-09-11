class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length !== n - 1) return false
        let graph = Array.from({length : n}, () => [])
        for(let [a,b] of edges){
            graph[a].push(b)
            graph[b].push(a)
        }
        let set = new Set()
        function dfs(node){
            set.add(node)
            for(let neigh of graph[node]){
                if(set.has(neigh)) continue
                dfs(neigh)
            }
        }
        dfs(0)
        

        return set.size === n

    }
}
