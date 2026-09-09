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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode(0,head)
        let groupPrev = dummy

        while(true){
            let kth = groupPrev
            for(let i = 0; i < k; i++){
                kth = kth.next
                if(!kth){
                    return dummy.next
                }
            }

            let groupEnd = kth.next
            let groupStart = groupPrev.next

            let curr = groupStart
            let prev = groupEnd
            while(curr !== groupEnd){
                let temp = curr.next
                curr.next = prev
                prev = curr
                curr = temp
            }

            groupPrev.next = kth
            groupPrev = groupStart
        }
    }
}
