/**
 * Problem: Search in Rotated Sorted Array, You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

    [3,4,5,6,1,2] if it was rotated 4 times.
    [1,2,3,4,5,6] if it was rotated 6 times.

Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.

You may assume all elements in the sorted rotated array nums are unique,

A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?
* NeetCode link: https://neetcode.io/problems/find-target-in-rotated-sorted-array?list=neetcode150
* Complexity: Medium
* Approach: find pivot where transition happens, use that to do a binary search only in one of two partitions., use the index of l to bifurcate two partitions.
* test cases: [1,3], target: 3, []
  [4,5,6,7,0,1,2], target: 3
  [1], target: 2
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0, r = nums.length-1;
    const n = nums.length;
    // let p = -1;
    while(l<r) {
        let m = l + Math.floor((r-l)/2);
        if(nums[m] > nums[r]) {
            l = m+ 1;
        } else {
            r = m;
        }
    }
    const p = l;
    let result = -1;
    if(p === 0){
        result = binarySearch(0, n-1, target);;
    }
    else if(target >= nums[0] && target <= nums[p-1]) {
        result = binarySearch(0, p-1, target);
    } else {
        result = binarySearch(p, n-1, target)
    }

    function binarySearch(left, right, target) {
        let l = left, r = right;
        while(l <= r) {
            const m = l + Math.floor((r-l)/2);
            if(nums[m] === target) {
                return m;
            } else if(target < nums[m]) {
                r = m-1;
            } else {
                l = m + 1
            }
        }
        return -1;
    }
    return result;
};
