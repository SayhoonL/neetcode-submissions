/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let starts = intervals.map(interval => interval.start)
        let ends = intervals.map(interval => interval.end)
        starts.sort((a,b) => a - b)
        ends.sort((a,b) => a - b)
        let start = 0
        let end = 0
        let maxCount = 0
        let count = 0
        while(start < intervals.length){
            if(starts[start] < ends[end]){
                count++
                maxCount = Math.max(count,maxCount)
                start++
            }
            else{
                count--
                end++
            }
        }
        return maxCount
    }
}
