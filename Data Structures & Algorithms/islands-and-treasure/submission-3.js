class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let queue = []
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                if(grid[i][j] === 0){
                    queue.push([i,j])
                }

            }
        }
        let index = 0
        let step = 0
        while(queue.length > index){
            let size = queue.length - index
            step++
            for(let i = 0; i < size; i++){
                let [r,c] = queue[index++]
                let directions = [
                    [1 , 0],
                    [-1 , 0],
                    [0, 1],
                    [0, - 1]
                ]
                for(let [dr, dc] of directions){
                    let nr = dr + r
                    let nc = dc + c
                    if(nr >= grid.length || nr < 0) continue
                    if(nc >= grid[0].length || nc < 0) continue
                    if(grid[nr][nc] === 2147483647){
                        grid[nr][nc] = step
                        queue.push([nr,nc])
                    }

                }
            }
        }




    }
}
