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
    let valid = true;
    const inorder = (node, arr = []) => {
        if (!node) return [];
        inorder(node.left, arr);
        if (arr.length && arr[arr.length - 1] >= node.val) {
            valid = false;
        }
        arr.push(node.val);
        inorder(node.right, arr);
        return arr;
    }
    inorder(root);
    return valid
};