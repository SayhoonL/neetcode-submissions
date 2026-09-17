class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let result = 0

        const MAX = 2147483647
        const MIN = -2147483648

        while (x !== 0) {
            let digit = x % 10
            x = Math.trunc(x / 10)

            if (
                result > Math.trunc(MAX / 10) ||
                (result === Math.trunc(MAX / 10) && digit > 7)
            ) {
                return 0
            }

            if (
                result < Math.trunc(MIN / 10) ||
                (result === Math.trunc(MIN / 10) && digit < -8)
            ) {
                return 0
            }

            result = result * 10 + digit
        }

        return result
    }
}