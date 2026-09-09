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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0
        let prev = new ListNode(0)
        let dummy = prev
        while(l1 || l2 || carry !== 0){
            let first = l1 === null ? 0 : l1.val
            let second = l2 === null ? 0 : l2.val
            let total = first + second + carry
            carry = Math.floor(total / 10)
            total = total % 10
            let node = new ListNode(total)
            if(l1){
                l1 = l1.next
            }
            if(l2){
                l2 = l2.next
            }
            prev.next = node
            prev = node
        }
        return dummy.next
    }
}
