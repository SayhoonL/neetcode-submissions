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
        let map = new Map()
        map.set(node, new Node(node.val))
        let queue = [node]
        let index = 0
        while(queue.length > index){
            let curr = queue[index++]
            for(let neighbor of curr.neighbors){
                if(!map.has(neighbor)){
                    queue.push(neighbor)
                    map.set(neighbor, new Node(neighbor.val))
                }
                map.get(curr).neighbors.push(map.get(neighbor))
            }
        }
        return map.get(node)
    }
}
