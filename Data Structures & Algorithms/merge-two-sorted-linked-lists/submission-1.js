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
        let newList = new ListNode(0)
        let dummy = newList
        while(list1 && list2){
            if(list1.val > list2.val){
                let temp = list2.next
                newList.next = list2
                newList = newList.next
                list2 = temp
            }
            else{
                let temp = list1.next
                newList.next = list1
                newList = newList.next
                list1 = temp 
            }
        }
        if(list1){
            newList.next = list1
        }
        if(list2){
            newList.next = list2
        }

        return dummy.next
    }
}
