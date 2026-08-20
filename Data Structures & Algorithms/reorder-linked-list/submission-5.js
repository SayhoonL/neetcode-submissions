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
            fast = fast.next.next
            slow = slow.next
        }

        let mid = slow.next
        slow.next = null
        let prev = null

        while(mid){
            let temp = mid.next
            mid.next = prev
            prev = mid
            mid = temp
        }
        let list1 = head
        
        while(prev){
            let first = list1.next
            let second = prev.next
            list1.next = prev
            prev.next = first
            list1 = first
            prev = second
        }

        return head

    }
}
