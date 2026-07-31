class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let arr = nums.map((val,idx)=>([val,idx]));

        arr.sort((a,b)=>a[0]-b[0]);

        let i=0;

        let j=arr.length -1;

        while (i < j){

            let currentSum = arr[i][0] + arr[j][0];

            if (currentSum > target ){
                j--
            }else if(currentSum < target ){
                i++
            }else {
                return [arr[i][1],arr[j][1]]
            }
        }

        return [];


    }
}
