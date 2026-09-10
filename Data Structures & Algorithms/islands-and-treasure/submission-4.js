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
        while(queue.length > index){
            let size = queue.length
            while(size > index){
                let [r,c] = queue[index++]
                let directions = [
                    [-1,0],
                    [1,0],
                    [0,1],
                    [0,-1]
                ]
                for(let[dr,dc] of directions){
                    let row = r + dr
                    let col = c + dc
                    if(row < 0 || row >= grid.length) continue
                    if(col < 0 || col >= grid[0].length) continue
                    if(grid[row][col] !== 2147483647) continue
                    grid[row][col] = grid[r][c] + 1
                    queue.push([row,col])
                }
            }
        }
    }
}
