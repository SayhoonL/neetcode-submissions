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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let track = head
        let count = 0
        while(track){
            track = track.next
            count++
        }   
        let node = new ListNode()
        let dummy = node
        let count2 = count - n
        while(count2 > 0 && head){
            node.next = head
            head = head.next
            node = node.next
            count2--
        }
        node.next = head.next

        return dummy.next
    }
}
