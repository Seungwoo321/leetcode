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
var isValidBST = function(root) {
    let prev = null;
    let valid = true;
    const inorder = (node) => {
        if (!node) return null;
        inorder(node.left);
        if (prev !== null && prev >= node.val) {
            valid = false;
        }
        prev = node.val;
        inorder(node.right);
    }
    inorder(root);
    return valid;
    
};