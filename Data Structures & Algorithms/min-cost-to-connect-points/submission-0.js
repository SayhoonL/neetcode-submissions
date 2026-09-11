class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        let heap = new MinPriorityQueue(x => x[0])
        let set = new Set()
        heap.enqueue([0,0])
        let total = 0
        
        while(set.size < points.length){
            let [dis,node] = heap.dequeue()
            
            if(set.has(node)) continue
            set.add(node)
            total += dis
            let [x1,y1] = points[node]
            for(let i = 0; i < points.length; i++){
                if(set.has(i)) continue
                let [x2,y2] = points[i]
                let distance = Math.abs(x1 - x2) + Math.abs(y1 - y2)
                heap.enqueue([distance,i])
            }
        }

        return total
    }
}
