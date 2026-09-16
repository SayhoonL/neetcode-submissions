class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let graph = Array.from({length : n}, () => [])
        for(let [a,b] of edges){
            graph[a].push(b)
            graph[b].push(a)
        }


        let set = new Set()
        let count = 0
        for(let i = 0; i < n; i++){
            if(!set.has(i)){
                count++
                dfs(i)
            }
        }

        function dfs(node){
            if(set.has(node)) return
            set.add(node)
            for(let nei of graph[node]){
                if(set.has(nei)) continue
                dfs(nei)
            }
        }

        return count
    }
}
