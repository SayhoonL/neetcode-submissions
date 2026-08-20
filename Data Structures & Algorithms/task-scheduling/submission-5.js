class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let arr = Array(26).fill(0)
        for(let task of tasks){
            let i = task.charCodeAt(0) - 'A'.charCodeAt(0)
            arr[i]++
        }
        let max = Math.max(...arr)
        let count = 0
        for(let num of arr){
            if(num === max){
                count++
            }
        }

        return Math.max((max - 1) * (n + 1) + count, tasks.length)
    }
}
