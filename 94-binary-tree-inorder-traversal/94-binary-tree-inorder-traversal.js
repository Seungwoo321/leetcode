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
var inorderTraversal = function(root) {
    const traversal = (node, arr) => {
        if (!node || node.val === null) {
            return arr;
        }
        traversal(node.left, arr);
        arr.push(node.val);
        traversal(node.right, arr);
        return arr
    }
    return traversal(root, []);
};