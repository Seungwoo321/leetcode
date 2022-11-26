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
var reverseList = function(head, dummy = null) {
    if (!head) return dummy;
    const node = head.next;
    head.next = dummy;
    return reverseList(node, head);
};