/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = []
    if (!root) return paths;
    if (!root.left && !root.right) return [`${root.val}`];
    const left = binaryTreePaths(root.left).map(x => `${root.val}->${x}`);
    const right = binaryTreePaths(root.right).map(x => `${root.val}->${x}`);
    return [...left, ...right];
};