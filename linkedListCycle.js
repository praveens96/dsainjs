/**
Problem: Linked List Cycle Detection
Descriptiom: 
Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.

There is a cycle in a linked list if at least one node in the list can be visited again by following the next pointer.

Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. 
If index = -1, then the tail node points to null and no cycle exists.
Note: index is not given to you as a parameter.

Complexity: Easy

test cases:
-----------
head = [3,2,0,-4], pos=1, expected: true
head = [1,2], pos =0, expected: true
head = [1], pos=-1, expected false

Approach:
- fast & slow pointers
- if a loop is there both would be equal at somepoint.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) {
            return true
        }
        
    }

    return false;
};
