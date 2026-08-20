class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i = matrix.length - 1; i >= 0 ; i--){
            if(matrix[i][0] <= target){
                for(let j = 0; j < matrix[0].length; j++){
                    if(matrix[i][j] === target){
                        return true
                    }
                }
            }
        }
        return false
    }
}
