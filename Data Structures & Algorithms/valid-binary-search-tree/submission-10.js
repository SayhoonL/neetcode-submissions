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
     * @return {boolean}
     */
    isValidBST(root) {
        let pre = -Infinity
        let flag = true
        function dfs(node){
            if(!node) return true
            dfs(node.left)
            if(node.val <= pre) flag = false
            pre = node.val
            dfs(node.right)

        }
        dfs(root)
        return flag
    }
}
