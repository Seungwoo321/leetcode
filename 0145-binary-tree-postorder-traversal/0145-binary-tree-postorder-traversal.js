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
 * @return {number[]}
 */
const postorderTraversal = function(root, visted = []) {
    if (root) {
        postorderTraversal(root.left, visted);
        postorderTraversal(root.right, visted);
        visted.push(root.val);
    }
    return visted;
};