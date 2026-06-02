class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

      // To sove this we need a prefix and postfix array, then we multiply those 
      // two arrays together and that gives us the result

      let n = nums.length;

      // Step 1 : Create edge cases

      let l_edge = 1;

      let r_edge = 1;

      // Step 2 : Create 3 arrays

      let prefix = new Array (nums.length)
      let postfix = new Array (nums.length)
      let result = new Array (nums.length)

      // Step 3: populate prefix and postfix arrays

      for (let i=0; i<n; i++){

        let j = n - 1 - i; 

        prefix[i] = l_edge;
        postfix[j] = r_edge;
        l_edge *= nums[i];
        r_edge *= nums[j];
      }

      // Step 4 : Populate the result array 

      for (let i=0; i<n;i++) result[i] = prefix[i] * postfix[i];

      // Step 5: return array

      return result;
    }
}
