/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];
    const stack = [root];
    const visted = [];
    while (stack.length) {
        const node = stack.shift();
        if (node.val !== null) visted.push(node.val);
        node.children.reverse().forEach(n => stack.unshift(n));
    }
    return visted;
};