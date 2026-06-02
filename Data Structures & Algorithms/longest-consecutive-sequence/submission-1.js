class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const numSet = new Set(nums);

        let longest = 0;

        for (let num of nums) {
            if (!numSet.has(num - 1)) {
                let long = 0;
                while (numSet.has(num + long)) {
                    long++;
                    longest = Math.max(long, longest);
                }
            }
        }
    return longest;
      
    }
}
