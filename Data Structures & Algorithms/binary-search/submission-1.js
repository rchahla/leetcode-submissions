class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let left=0;

        let right= nums.length - 1;

        while (left <=right){
            let midpoint = Math.floor((left + right)/2);

            if (nums[midpoint] < target){
                left = midpoint + 1;
                if (nums[left] === target) return left
            } else if(nums[midpoint] > target){
                right = midpoint - 1;
                if (nums[right] === target) return right
            }else {
                return midpoint;
            }
        }

        return -1;
    }
}


