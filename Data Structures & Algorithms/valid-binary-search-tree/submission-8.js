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
        let arr = []
        function dfs(node){
            if(!node) return null
            dfs(node.left)
            arr.push(node.val)
            dfs(node.right)
        }
        dfs(root)
        console.log(arr)
        for(let i = 1; i < arr.length; i++){
            if(arr[i] <= arr[i - 1]){
                return false
            }
        }
        return true
    }
}
