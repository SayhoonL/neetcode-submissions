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
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head
        while(fast.next && fast.next.next){
            slow = slow.next
            fast = fast.next.next
        }

        let prev = null
        let curr = slow

        while(curr){
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }

        while(head && prev){
            let temp1 = head.next
            let temp2 = prev.next
            head.next = prev
            prev.next = temp1

            prev = temp2
            head = temp1
        }

        
    }
}
