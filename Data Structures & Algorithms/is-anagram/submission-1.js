class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let orderedS = s.split("").sort().join("");
        let orderedt = t.split("").sort().join("");

        return orderedS === orderedt




    }
}
