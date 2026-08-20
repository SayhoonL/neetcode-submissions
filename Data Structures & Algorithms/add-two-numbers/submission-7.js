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
        let node = new ListNode()
        let result = node
        while(l1 && l2){
            let total = l1.val + l2.val + carry
            if(total > 9){
                total = total % 10
                carry = 1
            }
            else{
                carry = 0
            }
            let temp = new ListNode(total)
            node.next = temp
            node = node.next
            l1 = l1.next
            l2 = l2.next
        }
        while(l1){
            let total = l1.val + carry
            if(total > 9){
                total = total % 10
                carry = 1
            }
            else{
                carry = 0
            }
            let temp = new ListNode(total)
            node.next = temp
            node = node.next
            l1 = l1.next 
        }
        while(l2){
            let total = l2.val + carry
            if(total > 9){
                total = total % 10
                carry = 1
            }
            else{
                carry = 0
            }
            let temp = new ListNode(total)
            node.next = temp
            node = node.next
            l2 = l2.next 
        }
        if(carry === 1){
            node.next = new ListNode(1)
        }
        return result.next


    }
}
