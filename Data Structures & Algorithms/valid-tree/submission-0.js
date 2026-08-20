class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false
        let graph = Array.from({length : n}, () => [])
        for(let [first,second] of edges){
            graph[first].push(second)
            graph[second].push(first)
        }
        let visited = new Set()
        function dfs (node){
            if(visited.has(node)) return
            visited.add(node)
            for(let nodes of graph[node]){
                dfs(nodes)
            }
        }
        dfs(0)

        return visited.size === n

    }
}
