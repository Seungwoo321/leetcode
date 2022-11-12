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
        const newHead = head;
        head = head.next;
        newHead.next = dummy.next;
        dummy.next = newHead;
    }
    return dummy.next;
};