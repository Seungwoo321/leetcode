/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const hashTable = new Set();
    while (!hashTable.has(head)) {
        hashTable.add(head);
        if (head) {
            head = head.next;    
        } else {
            head = null;
        }
    }
    return head;
};