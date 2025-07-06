/*
* Problem: reverse a linked list
 description:Given the head of a singly linked list, reverse the list, and return the reversed list.
 Complexity: Easy
 Neetcode150: https://neetcode.io/problems/reverse-a-linked-list?list=neetcode150
 Approach: either recursion or iterative.
 iterative: in-place reveral, store the prev, point current to head and with in a loop till current exists, store current next, point current.next to prev, with this node reversal is done. now,
 move prev & current pointers to next.
 recursive: 
 - base case: node is null, return null. 
 - recursive case: have a newHead pointer init to head, if next is available, call function recursively and store it to newHead.
 - to reverse the node, make head.next.next to head, head.next to null to avoid cycles and/or last to point to null.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseListIterative = function(head) {
    let prev = null;
    let current = head;
    while(current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}


var reverseList = function(head) {
    if(!head){
        return null
    }
    let newHead = head;
    if(head.next) {
        newHead = reverseList(head.next)
        head.next.next = head;
        head.next = null;
    }
    return newHead;
};
