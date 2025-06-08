/**
* Problem: Longest Substring Without Repeating Characters
* Given a string s, find the length of the longest substring without duplicate characters.
* A substring is a contiguous sequence of characters within a string.
* Ex: Input: s = "zxyzxyz", Output: 3
* NeetCode150: https://neetcode.io/problems/longest-substring-without-duplicates
* Approach: 
* 1. sliding window, start two pointer at same, increment right as long as next is not duplicate.
* 2. keep track of visited in a set.
* 3. If, duplicate found, start removing from left
* 4. when adding in right increment max
* 5. result will be the max.
*/

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set();
        let l=0, r=0;
        let max = 0; 
        while(r < s.length) {
            if(charSet.has(s[r])){
                charSet.delete(s[l]);
                l++;
            } else {
                charSet.add(s[r]);
                max = Math.max(max, r-l+1);
                r++;
            }
        }
        return max;
    }
}
