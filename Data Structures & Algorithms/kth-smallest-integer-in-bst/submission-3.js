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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0
        let result = 0
        function dfs(node){
            if(!node) return false

            if(dfs(node.left)){
                return true
            }
            count++

            if(count === k){
                result = node.val
                return true
            }
            return dfs(node.right)
        } 
        dfs(root)
        return result
    }
}
