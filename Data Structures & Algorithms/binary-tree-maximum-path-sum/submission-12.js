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
        let res = root.val;

        function dfs(node) {
            if (!node) return -Infinity;

            let left = Math.max(dfs(node.left),0);
            let right = Math.max(dfs(node.right),0);

            res = Math.max(res, node.val + left + right);

            return Math.max(node.val, node.val + left, node.val + right);
        }

        return Math.max(dfs(root), res);
    }
}
