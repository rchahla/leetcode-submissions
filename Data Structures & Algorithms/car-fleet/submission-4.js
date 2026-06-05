class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        // Step 1 : Create an array and store (position, speed) as n different entries

        let combined = [];

        // Step 2: Create the stack 
        let stack = [];

        // Step 3: Populate the combined array

        for (let i = 0; i < position.length; i++) {
            combined.push([position[i], speed[i]]);
        }

        // Step 4: Sort the combined array from least to greatest

        combined.sort((a,b)=>a[0]-b[0]);

        // Step 5: Start at the greatest position and calculate the time it takes to get to the target
        // and if any other car is greater than that time then push it to the stack otherwise dont push 
        // because it will become one fleet 

        for (let i = combined.length - 1; i >= 0; i--) {
            if (stack.length === 0) {
                stack.push(combined[i]);
                continue;
            }
            let t1 = 
                (target - stack[stack.length - 1][0]) / stack[stack.length - 1][1];
            let t2 = (target - combined[i][0]) / combined[i][1];

            if (
            stack[stack.length - 1][0] + stack[stack.length - 1][1] >= target &&
            combined[i][0] + combined[i][1] < target
            ) {
            stack.push(combined[i]);
            continue;
            }

            if (t2 > t1) {
                stack.push(combined[i]);
            }
        }

        // Step 6: return the stack length which represents the # of car fleets
        return stack.length;
    }
}
