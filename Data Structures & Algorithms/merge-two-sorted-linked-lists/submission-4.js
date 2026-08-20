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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let res = new ListNode()
        let dummy = res
        while(list1 && list2){
            if(list1.val > list2.val){
                res.next = list2
                res = res.next
                list2 = list2.next
            }
            else{
                res.next = list1
                res = res.next
                list1 = list1.next
            }
        }

        if(list1){
            res.next = list1
        }
        if(list2){
            res.next = list2
        }
        return dummy.next
    }
}
