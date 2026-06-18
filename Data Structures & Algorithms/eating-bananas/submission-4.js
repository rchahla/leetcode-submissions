class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {


        let left = 1;
        let right = Math.max(...piles)

        let hours=0

        let min = Math.max(...piles);

        while (left <= right){

            let midpoint = Math.floor((left + right)/2);

            for (let i =0; i < piles.length;i++){
                let currentValue = piles[i];
                hours += Math.ceil(currentValue/midpoint);

            }

            if (hours <= h ){
                right = midpoint - 1;
                min = Math.min(min,midpoint)
                hours = 0;
              
            } else {
                left = midpoint + 1;
                hours=0;
   
            }

        }

        return min;
    }
}









