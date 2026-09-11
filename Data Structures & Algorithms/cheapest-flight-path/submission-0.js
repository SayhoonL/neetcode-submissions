class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let prices = new Array(n).fill(Infinity)
        prices[src] = 0

        // k stops means at most k + 1 flights
        for (let i = 0; i <= k; i++) {
            let temp = [...prices]

            for (let [from, to, cost] of flights) {
                if (prices[from] === Infinity) continue

                temp[to] = Math.min(
                    temp[to],
                    prices[from] + cost
                )
            }

            prices = temp
        }

        return prices[dst] === Infinity ? -1 : prices[dst]
    }
}