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

        let dummy = new ListNode(0,head)
        let result = dummy
        let point = dummy
        for(let i = 0; i < n; i++){
            point = point.next
        }
        while(point.next){
            point = point.next
            dummy = dummy.next
        }
        dummy.next = dummy.next.next 

        return result.next
    }
}
