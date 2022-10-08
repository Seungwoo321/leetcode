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
var isBalanced = function(root) {
    if (!root) return true;
    const maxDepth = (node) => {
        if (!node) return 0;
        const left = maxDepth(node.left);
        const right = maxDepth(node.right);
        if (Math.abs(left - right) > 1 || left === -1 || right === -1) return -1;
        return 1 + Math.max(left, right);
    }
    return maxDepth(root) !== -1;
};