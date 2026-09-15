class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        intervals.sort((a,b) => a[0] - b[0])
        let heap = new MinPriorityQueue(a => a[0])
        let sortedQueries = queries.map((query,i) => [query,i]).sort((a,b) => a[0] - b[0])
        let map = new Map()
        let i = 0
        for(let [query,index] of sortedQueries){
            while(i < intervals.length && intervals[i][0] <= query){
                let [start,end] = intervals[i]
                let length = end - start + 1
                heap.enqueue([length,end])
                i++
            }

            while(heap.size() > 0 && heap.front()[1] < query){
                heap.dequeue()
            }

            if(heap.size() === 0){
                map.set(index,-1)
            }
            else{
                let [len,i] = heap.front()
                map.set(index,len)
            }

        }

        let result = []

        for(let j = 0; j < queries.length; j++){
            result.push(map.get(j))
        }

        return result
    }
}
