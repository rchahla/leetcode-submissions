class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (const num of nums) {
        if (!map.has(num)) map.set(num, 0);
        map.set(num, map.get(num) + 1);
        }

        return Array.from(map.keys())
        .sort((a, b) => map.get(b) - map.get(a))
        .slice(0, k);

    }
}
