class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let number = ""
        for(let digit of digits){
            number = number + String(digit)
        }

        number = Number(number) + 1
        number = String(number)
        let result = []
        for(let i = 0; i < number.length; i++){
            result.push(Number(number[i]))
        }

        return result
    }
}
