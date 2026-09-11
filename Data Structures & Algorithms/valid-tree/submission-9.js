class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let graph = Array.from({length : n}, () => [])
        for(let [a,b] of edges){
            graph[a].push(b)
            graph[b].push(a)
        }
        let set = new Set()
        function dfs(node,prev){
            set.add(node)
            for(let neigh of graph[node]){
                if(prev === neigh) continue
                if(set.has(neigh)) return false
                if(!dfs(neigh,node)) return false
            }
            return true
        }
        if(!dfs(0,-1)) return false
        

        return set.size === n

    }
}
