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
        if(!lists) return null
        let heap = new MinPriorityQueue((x) => x.val)
        for(let list of lists){
            if(list){
                heap.enqueue(list)
            }

        }
        let newList = new ListNode()
        let dummy = newList
        while(heap.size() > 0){
            let node = heap.dequeue()
            newList.next = node
            newList = node
            node = node.next
            if(node){
                heap.enqueue(node)
            }
        }

        return dummy.next
    }
}
