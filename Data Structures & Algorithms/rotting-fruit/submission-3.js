class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let queue = []
        let count = 0
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                if(grid[i][j] === 2){
                    queue.push([i,j])
                }
                if(grid[i][j] === 1){
                    count++
                }
            }
        }
        if(queue.length === 0 && count === 0) return 0
        let index = 0
        let time = -1
        while(queue.length > index){
            time++
            let size = queue.length
            while(size > index){
                let [r,c] = queue[index++]

                let direction = [
                    [1,0],
                    [-1,0],
                    [0,-1],
                    [0,1]
                ]

                for(let [dr,dc] of direction){
                    let row = dr + r
                    let col = dc + c

                    if(row < 0 || row >= grid.length) continue
                    if(col < 0 || col >= grid[0].length) continue
                    if(grid[row][col] !== 1) continue
                    grid[row][col] = 2
                    queue.push([row,col])
                    count--
                }
            }
        }

        return count === 0 ? time : -1


    }
}
