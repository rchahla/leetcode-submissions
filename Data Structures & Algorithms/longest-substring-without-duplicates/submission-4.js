class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let output = 0;

        let left = 0;

        const window = new Map();

        for (let right=0; right<s.length;right++){

            let char = s[right];

            window.set(char,(window.get(char) || 0) + 1);

            while(window.get(char) > 1) {

                let leftChar= s[left];

                window.set(leftChar,window.get(leftChar) -1)

                if (window.get(leftChar) === 0){
                    window.delete(leftChar)
                }

                left++;
            }

            output = Math.max(output, right - left + 1)
        }

        return output;
    }
}



