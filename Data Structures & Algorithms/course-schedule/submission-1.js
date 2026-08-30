class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let graph  = Array.from({length : numCourses}, () => [])

        for(let [first,second] of prerequisites){
            graph[first].push(second)
        }

        let arr = new Array(numCourses).fill(0)
        function dfs(course){
            if(arr[course] === 1){
                return false
            }
            if(arr[course] === 2){
                return true
            }

            arr[course] = 1

            for(let pre of graph[course]){
                if(!dfs(pre)){
                    return false
                }
            }
            arr[course] = 2
            return true
        }
        for(let i = 0; i < arr.length; i++){
            if(!dfs(i)){
                return false
            }
        }
        return true



    }
}
