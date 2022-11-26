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
var preorder = function(root, visted = []) {
    if (root === null) return [];
    if (root.val !== null) visted.push(root.val);
    root.children.forEach(node => {
        preorder(node, visted);
    })
    return visted;
    
};