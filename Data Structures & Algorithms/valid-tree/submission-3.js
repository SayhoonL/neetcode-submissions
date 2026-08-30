class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length !== (n - 1)) return false
        let graph = Array.from({length : n}, () => [])
        let visited = new Array(n).fill(0)
        for(let [parent,node] of edges){
            graph[parent].push(node)
        }
        for(let i = 0; i < n; i++){
            for(let num of graph[i]){
                if(visited[num] === 1 && visited[i] === 1){
                    return false
                }
                visited[num] = 1
                visited[i] = num
            }
        }

        return true
    }
}
