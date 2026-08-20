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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!root || !subRoot) return false
        if(root.val === subRoot.val){
            if(check(root,subRoot)){
                return true
            }
        }
        function check (p,q){
            if(!p && !q) return true
            if(!p || !q) return false
            if(p.val !== q.val) return false
            return check(p.left,q.left) && check(p.right,q.right)
        }

        return this.isSubtree(root.left,subRoot) || this.isSubtree(root.right,subRoot)
    }
}
