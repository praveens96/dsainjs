/**
* Problem: Binary Search
* You are given an array of distinct integers nums, sorted in ascending order, and an integer target.
* Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.
* Your solution must run in O(logn)O(logn) time.
* Test cases: Input: nums = [-1,0,2,4,6,8], target = 4, Output: 3
* Input: nums = [-1,0,2,4,6,8], target = 4, Output: 3
* Approach: recursive helper which takes left, right, nums array, target as input and returns -1 when left > right as base case. calculate mid & move left, right accordingly.
* NeetCode link: https://neetcode.io/problems/binary-search?list=neetcode150
* Complexity: Easy
*/

function search(nums: number[], target: number): number {
    return binarySearch(nums,0, nums.length-1, target);
};

function binarySearch(nums: number[], left: number, right: number, target: number) {
    if (left > right) return -1;
    const mid = left + Math.floor((right-left)/2);
    if(nums[mid] === target) {
        return mid;
    } else if(target < nums[mid]) {
        return binarySearch(nums, left, mid-1, target);
    } else if(target > nums[mid]){
        return binarySearch(nums, mid+1, right, target);
    }
}
