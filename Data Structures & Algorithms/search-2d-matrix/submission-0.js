class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        let outerLeft = 0;
        let outerRight = matrix.length - 1;

        let isBigger = false;

        while (outerLeft <= outerRight){

            let outerMidpoint = Math.floor((outerLeft + outerRight)/2);

            let innerLeft = 0;
            let innerRight = matrix[outerMidpoint].length - 1;
            

            while (innerLeft <= innerRight){
                let innerMidpoint = Math.floor((innerLeft+innerRight)/2);
                if(matrix[outerMidpoint][innerMidpoint] < target){
                    innerLeft = innerMidpoint + 1;
                    isBigger = true;
                }
                else if (matrix[outerMidpoint][innerMidpoint] > target){
                    innerRight = innerMidpoint - 1;
                    isBigger = false;
                } else {
                    return true;
                }
            }
            if (isBigger){
                outerLeft = outerMidpoint + 1;
            } else {
                outerRight = outerMidpoint - 1;
            }
        }
        return false;
    }
}




