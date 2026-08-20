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
        if(!head) return false
        let fast = head
        let slow = head
        if(head.next){
            fast = fast.next.next
            slow = slow.next
        }
        else{
            return false
        }

        while(slow !== null && fast!== null){
            if(slow === fast){
                return true
            }
            if(fast.next === null || fast.next.next === null){
                return false
            }
            fast = fast.next.next
            slow = slow.next
        }
        return false
    }
}
