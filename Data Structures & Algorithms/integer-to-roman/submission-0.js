class Solution {
    /**
     * @param {number} num
     * @return {string}
     */
    intToRoman(num) {
        const values = [
            [1000, "M"],
            [900, "CM"],
            [500, "D"],
            [400, "CD"],
            [100, "C"],
            [90, "XC"],
            [50, "L"],
            [40, "XL"],
            [10, "X"],
            [9, "IX"],
            [5, "V"],
            [4, "IV"],
            [1, "I"]
        ]
        let str = ""
            for(let [number,sign] of values){
                while(num >= number){
                    str += sign
                    num -= number
                }
            }
        return str
    }
}
