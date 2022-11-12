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
    const dummy = new ListNode();
    while (head) {
        const newHead = new ListNode(head.val);
        newHead.next = dummy.next;
        dummy.next = newHead;
        head = head.next;
    }
    return dummy.next;
};