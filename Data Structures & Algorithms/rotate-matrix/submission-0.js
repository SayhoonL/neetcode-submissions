class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        for(let i = 0; i < matrix.length; i++){
            for(let j = i + 1; j < matrix[0].length; j++){
                let temp = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp
            }
        }

        for(let i = 0; i < matrix.length; i++){
            let l = 0
            let r = matrix[i].length - 1
            while(l < r){
                let temp = matrix[i][l]
                matrix[i][l] = matrix[i][r]
                matrix[i][r] = temp
                l++
                r--
            }
        }
    }
}
