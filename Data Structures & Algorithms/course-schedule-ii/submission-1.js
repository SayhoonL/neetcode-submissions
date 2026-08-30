class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let graph = Array.from({length : numCourses}, () => {return []})
        let count = Array.from({length : numCourses}).fill(0)
        let queue = []
        let result = []
        for(let [course,pre] of prerequisites){
            graph[pre].push(course)
            count[course]++
        }
        for(let i = 0; i < numCourses; i++){
            if(count[i] === 0){
                queue.push(i)
            }
        }
        console.log(queue)
        let index = 0
        while(queue.length > index){
            let item = queue[index++]
            result.push(item)
            for(let pre of graph[item]){
                count[pre]--
                if(count[pre] === 0){
                    queue.push(pre)
                }
            }
        }

        return result.length === numCourses ? result : 0
    }
}
