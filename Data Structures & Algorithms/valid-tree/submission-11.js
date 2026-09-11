class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let parent = Array.from({length : n}, (_,i) => i)

        function find(node){
            if(parent[node] === node){
                return node
            }
            return find(parent[node])
        }

        function union(a,b){
            let rootA = find(a)
            let rootB = find(b)

            if(rootA === rootB){
                return false
            }

            parent[rootA] = rootB
            return true
        }

        for(let [a,b] of edges){
            if(!union(a,b)){
                return false
            }
        }
        return edges.length === n - 1
    }
}
