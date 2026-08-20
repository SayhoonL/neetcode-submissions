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
    diameterOfBinaryTree(root) {
        let diameter = 0
        const dfs = (node) => {
            if(node === null) return 0
            diameter = Math.max(diameter, dfs(node.left) + dfs(node.right))
            return 1 + Math.max(dfs(node.left) , dfs(node.right))
        }
        dfs(root)
        return diameter
    }
}
