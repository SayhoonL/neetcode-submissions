class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let parent = Array.from({length : edges.length + 1}, (_,i) => i)

        function find (node){
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
                return [a,b]
            }
        }
    }
}
