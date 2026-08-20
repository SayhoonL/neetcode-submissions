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
        let heap = new MinPriorityQueue(x => x.val)

        for(let list of lists){
            if(list){
                heap.enqueue(list)
            }
        }
        let dummy = new ListNode()
        let curr = dummy

        while(heap.size() > 0){
            let node = heap.dequeue()
            curr.next = node
            curr = curr.next
            if(node.next){
                node = node.next
                heap.enqueue(node)
            }
        }

        return dummy.next

    }
}
