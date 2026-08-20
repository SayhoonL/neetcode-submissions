class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let arr = Array.from({length : n}, () => [])
        for(let edge of edges){
            let [a,b] = edge
            arr[a].push(b)
            arr[b].push(a)
        }
        let count = 0
        let set = new Set()
        function dfs(node){
            if(set.has(node)) return
            set.add(node)
            for(let neighbor of arr[node]){
                dfs(neighbor)
            }
        }
        for(let i = 0; i < n; i++){
            if(!set.has(i)){
                count++
                dfs(i)
            }
        }
        return count

    }
}
