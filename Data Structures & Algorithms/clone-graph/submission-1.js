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
        if(!node) return node
        let map = new Map()
        let queue = [node]
        map.set(node,new Node(node.val))
        while(queue.length > 0){
            let oldNode = queue.pop()
            for(let item of oldNode.neighbors){
                if(!map.has(item)){
                    queue.push(item)
                    let newNeighbor = new Node(item.val)
                    map.set(item, newNeighbor)
                }
                map.get(oldNode).neighbors.push(map.get(item))
            }
        }


        return map.get(node)
    }
}
