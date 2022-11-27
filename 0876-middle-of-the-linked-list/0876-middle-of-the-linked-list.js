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
var middleNode = function(head) {
    let fest = head;
    let slow = head;
    while (fest !== null && fest.next !==  null) {
        fest = fest.next.next;
        slow = slow.next;
    }
    return slow;
};