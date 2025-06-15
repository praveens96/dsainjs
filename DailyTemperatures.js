/**
* Problem: Daily Temperatures - You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.
* Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. 
* If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.
* Complexity: Medium
* Test cases: Input: temperatures = [30,38,30,36,35,40,28], Output: [1,4,1,2,1,0,0]
* Input: temperatures = [22,21,20], Output: [0,0,0]
* Approach: use stack and push if current temperature is less than top in stack. if higher temperature is found pop and fill that index by subtracting loop var by the index.
*/


class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);
        const stack = []; // store [temp, index] pair
        for(let i=0; i < temperatures.length; i++) {
            const t = temperatures[i];
            if(stack.length > 0 && t > stack[stack.length - 1][0]) {
                const [, index] = stack.pop();
                result[index] = i - index;
            }
            stack.push([t, i]);
        }
        return result;
    }
}
