class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

            const set = new Set();

    for (let num of numbers) {
      let compliment = target - num;

      if (!set.has(compliment)) {
        set.add(num);
        continue;
      } else {
        return [numbers.indexOf(compliment) + 1, numbers.indexOf(num) + 1];
      }
    }



    }
}
