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
        let list2 = prev
        
        while(list2){
            let first = list1.next
            let second = list2.next
            list1.next = list2
            list2.next = first
            list1 = first
            list2 = second
        }

        return head

    }
}
