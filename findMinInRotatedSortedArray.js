/**
* Problem: find minimum element in a sorted rotated array
* neet code link: https://neetcode.io/problems/find-minimum-in-rotated-sorted-array?list=neetcode150
*
*
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (!nums || nums.length === 0) return -1; // Handle edge case

    let l = 0, r = nums.length - 1;
    // If array is not rotated or has one element
    if (nums[l] <= nums[r] || nums.length === 1) return nums[0];

    // Binary search to find the pivot (smallest element)
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (nums[m] > nums[r]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return nums[l]; // l points to the smallest element
};
