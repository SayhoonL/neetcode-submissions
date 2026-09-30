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
        let start = intervals.map((interval) => interval.start).sort((a,b) => a - b)
        let end = intervals.map((interval) => interval.end).sort((a,b) => a - b)
        let startIdx = 0
        let endIdx = 0
        let count = 0
        let max = 0
        while(startIdx < start.length){
            if(start[startIdx] < end[endIdx]){
                count++
                startIdx++
                max = Math.max(max, count)
            }
            else{
                count--
                endIdx++
            }
        }

        return max
     
    }
}
