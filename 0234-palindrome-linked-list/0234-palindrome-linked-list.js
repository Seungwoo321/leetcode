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
    // const stack = [];
    // let node = head;
    // while (node && node.val !== null) {
    //     stack.push(node.val);
    //     node = node.next;
    // }
    // node = head;
    // while (stack.length) {
    //     if (stack.pop() !== node.val) {
    //         return false;
    //     }
    //     node = node.next;
    // }
    // return true;
    
    let reverse = null;
    let dummy = head;
    while (dummy && dummy.val !== null) {
        let current = new ListNode(dummy.val);
        dummy = dummy.next;
        current.next = reverse;
        reverse = current;
    }
    while (reverse && reverse.val !== null) {
        if (head.val !== reverse.val) return false;
        head = head.next;
        reverse = reverse.next;
    }
    return true;
};