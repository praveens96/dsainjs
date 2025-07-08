/*
Problem: merge two sorted linked lists
NeetCode 150 Link: https://neetcode.io/problems/merge-two-sorted-linked-lists?list=neetcode150
Test cases:
1. [1,2,4] [1,3,4]
2. [] []
3. [1] []
Approach:
iterative: create an dummy node and point the next nodes in order to it and return dummy.next
recursive: return non empty list of the two is base cases, set the next of smaller as recursive return value & return that list.
**/

var mergeTwoLists = function(list1, list2) {
    if(!list1) {
            return list2;
        }
        if(!list2) {
            return list1;
        }
        if(list1.val <= list2.val) {
            list1.next = mergeTwoLists(list1.next, list2)
            return list1;
        } else {
            list2.next = mergeTwoLists(list1, list2.next)
            return list2;
        }
};

var mergetTwoSortedListsIterative = function(list1, list2) {
    let node = new ListNode();
    const dummy = node;
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            node.next = new ListNode(list1.val)
            list1 = list1.next;
            node = node.next;
        } else {
            node.next = new ListNode(list2.val)
            list2 = list2.next;
            node = node.next;
        }
    }
    if(list1 !== null) {
        node.next = list1;
    } 
    else if(list2 !== null) {
        node.next = list2;
    }
    return dummy.next;
}
