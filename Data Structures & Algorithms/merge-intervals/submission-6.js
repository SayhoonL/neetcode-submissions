class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b) => a[0] - b[0])
        let [currStart,currEnd] = intervals[0]
        let arr = []
        for(let i = 1; i < intervals.length; i++){
            let [start,end] = intervals[i]
            if(start <= currEnd){
                currStart = Math.min(currStart,start)
                currEnd = Math.max(currEnd,end)
            }
            else{
                arr.push([currStart,currEnd])
                currStart = start
                currEnd = end
            }
        }
        arr.push([currStart,currEnd])

        return arr
    }
}
