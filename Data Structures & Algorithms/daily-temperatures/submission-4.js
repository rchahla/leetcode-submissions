class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        let stack = [];

        let result = new Array(temperatures.length).fill(0);

        for (let temp = 0; temp < temperatures.length; temp++){
            if (stack.length === 0 ) {
                stack.push(temp);
                continue;
            } 

            let prevTemp = temperatures[stack[stack.length - 1]];
            let currTemp = temperatures[temp];

            while (currTemp > prevTemp){

                let properIndex = stack.pop();

                let valIndex = temp - properIndex;

                result[properIndex] = valIndex;

                if(stack.length ===0 )break;

                prevTemp= temperatures[stack[stack.length - 1]];

            }
            stack.push(temp)
        }

        return result;
    }
}
