class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let output = 0;
        let left = 0;

        let arr = s.split("");

        const window = new Map();

        for (let right = 0; right < arr.length; right++) {
        let rightChar = arr[right];

        window.set(rightChar, (window.get(rightChar) || 0) + 1);

        while (right - left + 1 - Math.max(...window.values()) > k) {
            window.set(arr[left], window.get(arr[left]) - 1);
            left++;
        }
        output = Math.max(output, right - left + 1);
        }

        return output;
    }
}


/** 
 * 1. Simplify The problem:
 * Our input is a string 's' and a number 'k',
 * we can change up to k letters in our string s
 * and then we return the length of the longest distinct substring
 * 
 * 
 * 2. Pattern:
 * Sliding Window
 * 
 * 3. Implement the pattern:
 * test case: [A]AABABB output is 5 
 * 
 * 4. work through
 *  [AAABABB
 * 
 * window {
 * 
 *  A:4,
 *  B:3,
 * 
 * 
 *  }
 *            
 *  
 * 
 * 
 * **/

