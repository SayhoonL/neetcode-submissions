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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root){
            return []
        }
        let queue = [root]
        let result = [root.val]
        let i = 0
        while(i < queue.length){
            let size = queue.length
            let arr = []
            while(i < size){
                let node = queue[i]
                i++
                if(node.left){
                    arr.push(node.left.val);
                    queue.push(node.left)
                } 
                if(node.right){
                    arr.push(node.right.val); 
                    queue.push(node.right)
                }
            }
            if(arr.length !== 0)  result.push(arr[arr.length - 1])
        }
        return result
    }
}
