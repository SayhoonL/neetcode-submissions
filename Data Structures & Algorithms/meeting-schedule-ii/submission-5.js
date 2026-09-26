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
        let startArray = intervals.map((interval) => interval.start).sort((a,b) => a - b)
        let endArray = intervals.map((interval) => interval.end).sort((a,b) => a - b)
        let startIndex = 0
        let endIndex = 0
        let count = 0
        let result = 0
        while(startIndex < startArray.length){
            if(startArray[startIndex] < endArray[endIndex]){
                count++
                startIndex++
            }
            else{
                count--
                endIndex++
            }
            result = Math.max(result,count)
        }
        return result
    }
}
