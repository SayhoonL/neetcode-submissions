/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let queue = [root]
        let i = 0
        let res = []
        while(queue.length > i){
            let node = queue[i++]
            if(node){
                res.push(String(node.val))
                queue.push(node.left)
                queue.push(node.right)
            }
            else{
                res.push("null")
            }
        }
        return res.join(",")
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let list = data.split(",")
        let i = 1
        let q = 0
        if(list[0] === "null") return null
        let root = new TreeNode(Number(list[0]))
        let queue = [root]
        while(queue.length > q && i < list.length){
            let node = queue[q++]
            if(list[i] !== "null"){
                node.left = new TreeNode(Number(list[i]))
                queue.push(node.left) 
            }
            i++
            if(list[i]!== "null"){
                node.right = new TreeNode(Number(list[i]))
                queue.push(node.right)
            }
            i++
        }

        return root
    }
}
