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
        let set = new Set([0])
        console.log(graph)
        function dfs(node,flag){
            if(graph[node].length === 0){
                return true
            }
            for(let neighbor of graph[node]){
                if(set.has(neighbor)){
                    continue
                }
                if(!set.has(neighbor)){
                    flag = true
                }
                set.add(neighbor)
                flag = dfs(neighbor,flag)
            }
            return flag
        }
        for(let i = 0; i < graph.length; i++){
            if(dfs(i,false)){
                set.add(i)
                console.log(i)
                count++
            }
        }

        return count


    }
}
