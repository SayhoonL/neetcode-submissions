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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length === 1){
            return lists[0]
        }
        if(lists.length === 0){
            return null
        }
        let tempList = lists
        while(tempList.length > 1){
            let merged = []
            for(let i = 0; i < tempList.length; i = i + 2){
                let l1 = tempList[i]
                let l2 = tempList[i + 1]
                merged.push(this.merge(l1,l2))
            }
            tempList = merged
        }
        return tempList[0]

    }

    merge(list1, list2){
        let listNode = new ListNode(0)
        let dummy = listNode
        while(list1 && list2){
            if(list1.val < list2.val){
                listNode.next = list1
                list1 = list1.next
            }
            else{
                listNode.next = list2
                list2 = list2.next
            }
            listNode = listNode.next
        }
        if(list1){
            listNode.next = list1
        }
        if(list2){
            listNode.next = list2
        }
        return dummy.next
    }
}
