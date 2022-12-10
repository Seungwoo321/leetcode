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
 * @return {number}
 */
var minDiffInBST = function(root) {
    let minDiff = Infinity;
    let prev = -1;
    const inOrder = (node) => {
        if (node === null) return node;
        if (node.left) inOrder(node.left);
        if (prev >= 0) minDiff = Math.min(node.val - prev, minDiff);
        prev = node.val;
        if (node.right) inOrder(node.right);
    }
    inOrder(root);
    return minDiff;
};