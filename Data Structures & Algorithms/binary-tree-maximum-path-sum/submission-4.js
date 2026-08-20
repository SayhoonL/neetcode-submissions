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
    maxPathSum(root) {
        let res = -Infinity
        function dfs(node){
            if(!node) return -Infinity
            let left = dfs(node.left)
            let right = dfs(node.right)
            res = Math.max(res,node.val + left + right,left,right)
            return Math.max(node.val,node.val + left, node.val + right)
        }
        
        return Math.max(dfs(root),res)
    }
}
