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
     * @return {ListNode}
     */
    reverseList(head) {
        let curr = head
        let prev = null
        while(curr){
            let newNode = curr.next
            curr.next = prev
            prev = curr
            curr = newNode
        }
        return prev
    }
}
