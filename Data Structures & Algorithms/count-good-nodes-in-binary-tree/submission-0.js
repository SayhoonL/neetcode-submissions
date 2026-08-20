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
     * @return {number}
     */
    goodNodes(root) {
        if(!root){
            return 0
        }
        let count = 1
        function dfs(node,val){
            if(!node){
                return
            }
            if(node.val >= val){
                count++
                val = node.val
            }
            dfs(node.left, val)
            dfs(node.right,val)
        }
        dfs(root.left,root.val)
        dfs(root.right,root.val)

        return count
    }
}
