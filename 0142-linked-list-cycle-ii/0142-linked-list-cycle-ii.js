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
    while (head) {
        if (hashTable.has(head)) {
            return head;   
        }
        hashTable.add(head);
        head = head.next;
    }
    return null;
};