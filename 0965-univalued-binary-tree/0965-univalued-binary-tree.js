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
 * @return {boolean}
 */
var isUnivalTree = function(root, value = root.val) {
    if (root === null) return true;
    return root.val === value &&
        isUnivalTree(root.left, root.val) &&
        isUnivalTree(root.right, root.val);
};