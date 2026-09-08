// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let point = head
        let map = new Map()
        map.set(null,null)
        while(point){
            map.set(point,new Node(point.val))
            point = point.next
        }
        point = head
        while(point){
            let node = map.get(point)
            node.random = map.get(point.random)
            node.next = map.get(point.next)
            point = point.next
        }

        return map.get(head)
    }
}
