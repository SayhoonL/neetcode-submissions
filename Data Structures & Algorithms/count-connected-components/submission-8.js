class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let graph = Array.from({length : n}, () => [])
        let count = 0
        for(let [a,b] of edges){
            graph[a].push(b)
            graph[b].push(a)
        }
        let set = new Set()
        function dfs(node){
            if(!set.has(node)) count++
            set.add(node)
            for(let nei of graph[node]){
                if(set.has(nei)) continue
                set.add(nei)
                dfs(nei)
            }
        }
        for(let i = 0; i < n; i++){
            dfs(i)
        }

        return count
    }
}
