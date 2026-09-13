class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b) => a[0] - b[0])
        let tempStart = intervals[0][0]
        let tempEnd = intervals[0][1]
        let result = []

        for(let i = 1; i < intervals.length; i++){
            let start = intervals[i][0]
            let end = intervals[i][1]
            if(tempEnd < start){
                result.push([tempStart,tempEnd])
                tempStart = start
                tempEnd = end
            }
            else{
                tempStart = Math.min(tempStart, start)
                tempEnd = Math.max(tempEnd,end)
            }

        }
        result.push([tempStart,tempEnd])

        return result
    }
}
