class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let total = 0
        let start = 0
        let totalGas = 0
        let totalCost = 0
        for (let i = 0; i < gas.length; i++) {
            totalGas += gas[i]
            totalCost += cost[i]
            total = total + gas[i] - cost[i]
            if (total < 0) {
                start = i + 1
                total = 0
            }
        }

        if (totalGas < totalCost) return -1
        return start

    }
}
