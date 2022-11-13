/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const stack = [];
    let node = head;
    while (node && node.val !== null) {
        stack.push(node.val);
        node = node.next;
    }
    node = head;
    while (stack.length) {
        if (stack.pop() !== node.val) {
            return false;
        }
        node = node.next;
    }
    return true;
};