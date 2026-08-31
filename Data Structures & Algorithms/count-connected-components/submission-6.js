class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let graph = Array.from({length : n}, () => [])
        let count = 0
        for(let [child,parent] of edges){
            graph[child].push(parent)
            graph[parent].push(child)
        }
        let set = new Set()
        function dfs(node){
            set.add(node)
            for(let neighbor of graph[node]){
                if(set.has(neighbor)){
                    continue
                }
                dfs(neighbor)
            }
        }
        for(let i = 0; i < graph.length; i++){
            if(!set.has(i)){
                dfs(i)
                count++
            }
        }

        return count


    }
}
