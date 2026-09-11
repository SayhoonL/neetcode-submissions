class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let graph = Array.from({length : numCourses}, () => [])
        let indegree = Array(numCourses).fill(0)
        for(let [course,pre] of prerequisites){
            graph[pre].push(course)
            indegree[course]++
        }
        let queue = []
        for(let i = 0; i < indegree.length; i++){
            if(indegree[i] === 0){
                queue.push(i)
            }
        }
        let result = []
        let index= 0
        while(queue.length > index){
            let course = queue[index++]
            result.push(course)
            for(let inCourse of graph[course]){
                indegree[inCourse]--
                if(indegree[inCourse] === 0){
                    queue.push(inCourse)
                }
            }
        }

        return index === numCourses ? result : []
    }
}
