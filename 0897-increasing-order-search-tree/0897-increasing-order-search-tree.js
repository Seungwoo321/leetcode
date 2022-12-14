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
 * @return {TreeNode}
 */
var increasingBST = function(root, head = null) {
    if (!root) return head;
    root.right = increasingBST(root.right, head);
    const left = root.left;
    root.left = null;
    return increasingBST(left, root);
};