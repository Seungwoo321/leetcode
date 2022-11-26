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
var postorder = function(root, visted = []) {
    if (!root) return [];
    return [...root.children.map(postorder).flat(), root.val]
};