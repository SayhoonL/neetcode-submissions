/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let first = head
        let second = head
        while(first && second){
            first = first.next
            second = second.next
            if(second){
            second = second.next
            }

            if(first && second && first.val === second.val){
                return true
            }
        }
        return false
    }
}
