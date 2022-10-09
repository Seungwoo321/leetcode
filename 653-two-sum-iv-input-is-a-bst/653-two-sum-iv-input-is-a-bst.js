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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k, data = new Set()) {
    if (!root) return false;
    if (!data.has(k - root.val)) {
        return data.add(root.val) && findTarget(root.left, k, data) || findTarget(root.right, k, data);
    } else {
        return data.has(k - root.val) || findTarget(root.left, k, data) || findTarget(root.right, k, data);
    }   
};