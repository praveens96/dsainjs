/**
* Problem: Top K Frequent Elements
* NeetCode150: https://neetcode.io/problems/top-k-elements-in-list
* Given an integer array nums and an integer k, return the k most frequent elements within the array.
* The test cases are generated such that the answer is always unique.
* You may return the output in any order.
* test cases: 
* 1. Input: nums = [1,2,2,3,3,3], k = 2, Output: [2,3]
* 2. Input: nums = [7,7], k = 1, Output: [7]
* Approach: 
* 1. determine frequencies
* 2. use bucket sort to keep frequencies in sorted order
* 3. start from right of sorted array, get the top k elements
*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequencies = new Map();
        for(const num of nums) {
            if(frequencies.has(num)) {
                frequencies.set(num, (frequencies.get(num) || 0) + 1)
            } else {
                frequencies.set(num, 1)
            }
        }
        const buckets = Array(nums.length+1).fill().map(x => []);
        for(const [key, value] of frequencies.entries()) {
            buckets[value].push(key); 
        }
        let result = [];
        for(let i = buckets.length-1; i > 0 && result.length < k; i--) {
            if (buckets[i].length > 0) {
                result.push(...buckets[i]);
            }
        }

    }
}
