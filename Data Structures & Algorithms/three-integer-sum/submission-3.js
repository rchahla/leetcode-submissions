class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

      let output = [];

      nums.sort((a,b)=>a-b);

      for (let i=0;i<nums.length;i++){

        let l=i+1;
        let r=nums.length -1

        if (i > 0 && nums[i] === nums[i-1]){
          continue;
        }

        while (l < r){
          if (nums[i] + nums[l] + nums[r] > 0){
            r--;
          } else if(nums[i] + nums[l] + nums[r] < 0){
            l++;
          } else {
            output.push([nums[i],nums[l],nums[r]]);
            l++;

            while (l < r && nums[l] === nums[l-1]){
                l++
            }
          }
        }
      }
      return output;
    }

            
}
