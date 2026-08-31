class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let n = edges.length
        let graph = Array.from({ length: n + 1 }, () => [])

        function dfs(node, target, visited) {
            if (node === target) {
                return true
            }

            visited.add(node)

            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor, target, visited)) {
                        return true
                    }
                }
            }

            return false
        }

        for (let [first, second] of edges) {
            let visited = new Set()

            if (dfs(first, second, visited)) {
                return [first, second]
            }

            graph[first].push(second)
            graph[second].push(first)
        }

        return []
    }
}