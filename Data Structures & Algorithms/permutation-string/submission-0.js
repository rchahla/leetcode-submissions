class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const l1 = s1.length;
        const l2 = s2.length;
        const A = "a".charCodeAt(0);

        if (l1 > l2) return false;

        let count_s1 = new Array(26).fill(0);

        let count_s2 = new Array(26).fill(0);

        for (let i=0; i < l1; i++){
            count_s1[s1.charCodeAt(i) - A]++;
            count_s2[s2.charCodeAt(i) - A]++;
        }

        if (isEqual(count_s1,count_s2)) return true;

        for (let i=l1; i<l2;i++){
            count_s2[s2.charCodeAt(i) - A]++;
            count_s2[s2.charCodeAt(i - l1) - A]--;
            if (isEqual(count_s1,count_s2)) return true;
        }
        return false;
    }
}


function isEqual(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
