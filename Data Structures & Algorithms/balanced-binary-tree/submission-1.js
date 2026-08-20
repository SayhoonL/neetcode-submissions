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
    isBalanced(root) {
        let flag = true
        const dfs = (node) => {
            if(node === null) return 0
            let left = dfs(node.left)
            let right = dfs(node.right)
            if(right - left > 1 || left - right > 1) flag = false

            return 1 + Math.max(dfs(node.left), dfs(node.right))
        }
        dfs(root)
        return flag
    }
}
