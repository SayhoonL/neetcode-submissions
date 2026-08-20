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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let queue = []
        let i = 0
        if(!root){
            return []
        }
        queue.push(root)
        let result = []

        while(i < queue.length){
            let size = queue.length
            let arr = []
            while(i < size){
                let node = queue[i]
                arr.push(node.val)
                i++
                if(node){
                    if(node.left){
                        queue.push(node.left)
                    }
                    if(node.right){
                        queue.push(node.right)
                    }
                }
            }
            result.push(arr)
        }

        return result
    }
}
