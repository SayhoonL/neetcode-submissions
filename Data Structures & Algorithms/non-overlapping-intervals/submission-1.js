class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b) => a[0] - b[0])
        let tempStart = intervals[0][0]
        let tempEnd = intervals[0][1]
        let count = 0
        for(let i = 1; i < intervals.length; i++){
            let start = intervals[i][0]
            let end = intervals[i][1]

            if(start < tempEnd){
                count++
                tempEnd = Math.min(end, tempEnd)

            }
            else{
                tempStart = start
                tempEnd = end
            }
        }

        return count
    }
}
