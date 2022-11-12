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
var reverseList = function(head) {
    let dummy = null;
    while (head) {
        const newHead = head;
        head = head.next;
        newHead.next = dummy;
        dummy = newHead;
    }
    return dummy;
};