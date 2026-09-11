class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        let graph = Array.from({length : n + 1},() => [])
        for(let [u,v,t] of times){
            graph[u].push([v,t])
        }

        let heap = new MinPriorityQueue(x => x[0])
        heap.enqueue([0,k])
        let maxTime = 0
        let set = new Set()
        while(heap.size() > 0){
            let [dis,node] = heap.dequeue()
            if(set.has(node)) continue
            set.add(node)
            maxTime = Math.max(dis,maxTime)
            for(let [nei, time] of graph[node]){
                heap.enqueue([dis + time,nei])
            }
        }


        return set.size === n ? maxTime : -1
    }
}
