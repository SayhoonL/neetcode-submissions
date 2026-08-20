class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let arr = Array.from({length : numCourses},() => [])
        let need = Array(numCourses).fill(0)
        for(let [course,pre] of prerequisites){
            arr[pre].push(course)
            need[course]++
        }
        let queue = []
        let i = 0
        for(let j = 0; j < numCourses;j++){
            if(need[j] === 0){
                queue.push(j)
            }
        }
        while(queue.length > i){
            let course = queue[i++]
            for(let next of arr[course]){
                need[next]--
                if(need[next] === 0){
                    queue.push(next)
                }
            }

        }
        for(let j = 0; j < numCourses;j++){
            if(need[j] !== 0){
                return false
            }
        }
        return true



    }
}
