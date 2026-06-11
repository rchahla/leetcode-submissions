class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let start = 0;
        let end = heights.length - 1;
        let maxArea =0;

        while (start < end){
            maxArea= Math.max(maxArea,(Math.min(heights[start],heights[end]) * (end - start)));

            if (heights[start] > heights[end]) end--;
            else{
                start++;
            }
        }

        return maxArea;
    }
}
