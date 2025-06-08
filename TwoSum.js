/**
* Problem: two sum to taget
* NeetCode150: https://neetcode.io/problems/two-integer-sum
* Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
* You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
* Return the answer with the smaller index first.
* conditions: time complexity O(n), space complexity O(1)
* TestCases: 
* 1. [], 2
* 2. [1,5,9,4], 10
* approach gist: two pointer approach., one pointer from begining, one from end. if sum < target increment start, if sum > target decrement end.
* in functional relying on recursion as reduce etc wont work as we depend on indexes.
*/
class Solution {
  twoSum(numbers, target) {
    let start = 0, end = numbers.length - 1;
    while (start < end) {
        const sum = numbers[start] + numbers[end];
        if (sum === target) {
            return [numbers[start], numbers[end]];
        } else if (sum < target) {
            start++;
        } else {
            end--;
        }
    }
    return [];
  }
  
  twoSumFunctional(numbers, target) {
    const search = function(start, end) {
      if (start >= end) return []; //base case
      
       const sum = numbers[start] + numbers[end];
        if (sum === target) {
            return [numbers[start], numbers[end]];
        } else if (sum < target) {
            return search(start++, end);
        } else {
            return search(start, end--);
        }
    }
    return search(0, numbers.length-1);
  }
}

