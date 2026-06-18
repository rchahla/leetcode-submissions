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

        let min = 0;

        while (left <= right){

            let midpoint = Math.floor((left + right)/2);

            hours = 0;

            for (let i =0; i < piles.length;i++){
                let currentValue = piles[i];
                hours += Math.ceil(currentValue/midpoint);
            }

            if (hours <= h ){
                right = midpoint - 1;
                min = midpoint
            } else {
                left = midpoint + 1;
            }

        }

        return min;
    }
}









