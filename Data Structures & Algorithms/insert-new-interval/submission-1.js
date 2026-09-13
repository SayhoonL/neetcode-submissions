class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let result = []
        let tempStart = newInterval[0]
        let tempEnd = newInterval[1]
        let flag = false
        for(let [start,end] of intervals){
            if(flag || end < tempStart){
                result.push([start,end])
                continue
            } 
            if(tempEnd < start){
                result.push([tempStart,tempEnd])
                flag = true
                result.push([start,end])
            }
            if(tempStart > start){
                tempStart = start
            }
            if(tempEnd < end){
                tempEnd = end
            }
        }
        if(!flag) result.push([tempStart,tempEnd])
        return result
    }
}
