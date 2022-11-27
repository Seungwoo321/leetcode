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
    if (head.next === null) return head;
    let i = 0;
    const points = [];
    while (head !==  null) {
        points.push(head);
        head = head.next;
        i ++;
    }
    return points[parseInt(i / 2)];
};