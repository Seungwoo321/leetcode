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
var getMinimumDifference = function(root) {
    const inorder = (node, arr) => {
        if (node.left && node.left.val !== null) {
            inorder(node.left, arr);
        }
        if (node.val !== null) {
            arr.push(node.val);
        }
        if (node.right && node.right.val !== null) {
            inorder(node.right, arr);
        }
        return arr;
    }
    const arr = inorder(root, []);
    let diff = Infinity;
    for (let i = 1; i < arr.length; i ++) {
        diff = Math.min(Math.abs(arr[i] - arr[i - 1]), diff);
    }
    return diff;
};