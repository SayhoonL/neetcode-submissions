/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null
        let visited = new Map()
        function dfs(curr){
            let copy = new Node(curr.val)
            if(visited.has(curr)) return visited.get(curr)
            visited.set(curr,copy)
            for(let neighbor of curr.neighbors){
                copy.neighbors.push(dfs(neighbor))
            }
            return copy
        }
        return dfs(node)

    }
}
