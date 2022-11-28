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
    let fest = head;
    let slow = head;
    while (fest && fest.next) {
        fest = fest.next.next;
        slow = slow.next
        if (fest === slow) {
            break;
        }
    }
    if (!fest || !fest.next) {
        return null;
    }
    while (head !== slow) {
        slow = slow.next;
        head = head.next;
    }
    return slow;
};