/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) return [];
    const stack = [root];
    const visted = [];
    while (stack.length) {
        const node = stack.shift();
        node.children.forEach(n => stack.unshift(n));
        visted.unshift(node.val);
    }
    return visted;
};