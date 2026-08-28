class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let queue = []
        let time = 0
        let count = 0
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j])
                }
                if(grid[i][j] === 1){
                    count++
                }
            }
        }
        let index = 0
        while (queue.length > index) {
            let size = queue.length - index
            time++
            for (let i = 0; i < size; i++) {
                let [r, c] = queue[index++]

                let direction = [
                    [1, 0],
                    [-1, 0],
                    [0, 1],
                    [0, -1]
                ]

                for (let [dr, dc] of direction) {
                    let row = r + dr
                    let col = c + dc
                    if (row < 0 || row >= grid.length) continue
                    if (col < 0 || col >= grid[0].length) continue
                    if (grid[row][col] === 0 || grid[row][col] === 2) continue
                    grid[row][col] = 2
                    count--
                    queue.push([row, col])
                }
            }

        }
        return count === 0 ? Math.max(time - 1, 0) : -1
    }
}
