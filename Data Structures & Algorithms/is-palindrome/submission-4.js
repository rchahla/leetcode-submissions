class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = s
      .split(" ")
      .join("")
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase();

    let j = cleaned.length - 1;

    for (let i = 0; i < cleaned.length; i++) {
      if (cleaned[i] !== cleaned[j]) {
        return false;
      } else {
        j--;
      }
    }
    return true;
    }
}
