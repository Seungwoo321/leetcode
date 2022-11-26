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
    root.children.forEach(node => postorder(node, visted))
    visted.push(root.val);
    return visted;
};