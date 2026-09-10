class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let arr = Array.from({length: numCourses}, () => [])
        let count = new Array(numCourses).fill(0)
        for(let [course,pre] of prerequisites){
            arr[pre].push(course)
            count[course]++
        }
        let queue = []
        for(let i = 0; i < count.length; i++){
            if(count[i] === 0){
                queue.push(i)
            }
        }
        let index = 0
        while(queue.length > index){
            let course = queue[index++]
            for(let pre of arr[course]){
                count[pre]--
                if(count[pre] === 0){
                    queue.push(pre)
                }
            }
        }
        for(let i = 0; i < count.length; i++){
            if(count[i] !== 0){
                return false
            }
        }
        return true
    }
}
