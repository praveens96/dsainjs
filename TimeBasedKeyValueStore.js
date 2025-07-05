/**
Problem: Time Based Key-Value Store
Description: Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:

    TimeMap() Initializes the object of the data structure.
    void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
    String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".

Example 1:

Input
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
Output
[null, null, "bar", "bar", null, "bar2", "bar2"]

NeetCode link: https://neetcode.io/problems/time-based-key-value-store?list=neetcode150

Complexity: Medium

Approach: use Map to store key, value pairs. each value is an array with [timestamp, value]. 
get value by key first and use binary search to filter values with in it, this works as time is always in increasing order.

*/
var TimeMap = function() {
    this.keyStore = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
    this.keyStore.get(key).push([timestamp, value]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const values = this.keyStore.get(key) || [];
    let left = 0, right = values.length-1;
    let result = '';
    while(left <= right) {
        const mid = left + Math.floor((right-left)/2);
        if(values[mid][0] === timestamp) {
            return values[mid][1];
        }
        else if(values[mid][0] < timestamp) {
            result = values[mid][1];
            left = mid + 1;
        } else {
            right = mid -1;
        }
    }
    return result;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
