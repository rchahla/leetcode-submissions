class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

      let stack = [];

      let map = { ")": "(", "]": "[", "}": "{" };

      for (let item of s) {
        if (item === "(" || item === "{" || item === "[") {
          stack.push(item);
          continue;
        }

        if (item === ")" || item === "}" || item === "]") {
          let stackItem = stack.pop();

          if (stackItem !== map[item]) return false;
        }
      }

      return stack.length === 0;

    }
}
