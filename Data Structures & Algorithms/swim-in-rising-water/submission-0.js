class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const heap = new MinPriorityQueue(x => x[0])
        const visited = Array.from({length : grid.length}, () => new Array(grid[0].length).fill(false))
        heap.enqueue([grid[0][0],0,0])
        let maxTime = 0
        while(heap.size() > 0){
            let [t,x,y] = heap.dequeue()
            if(visited[x][y] === true) continue
            visited[x][y] = true
            maxTime = Math.max(maxTime,t)
            if(x === grid.length - 1 && y === grid[0].length - 1) return maxTime
            
            let directions = [
                [1,0],
                [-1,0],
                [0,1],
                [0,-1]
            ]

            for(let [dr,dc] of directions){
                let r = x + dr
                let c = y + dc
                if(r < 0 || r >= grid.length) continue
                if(c < 0 || c >= grid[0].length) continue
                if(visited[r][c] === true) continue
                heap.enqueue([grid[r][c],r,c])
            }
        }

        return 0

    }
}
