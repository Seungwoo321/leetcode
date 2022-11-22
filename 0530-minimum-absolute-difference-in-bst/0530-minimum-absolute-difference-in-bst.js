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

    const inorder = (node, arr, diff) => {
        if (node.left && node.left.val !== null) {
            diff = inorder(node.left, arr, diff);
        }
        if (node.val !== null) {
            if (arr.length) {
                diff = Math.min(Math.abs(arr[arr.length - 1] - node.val), diff);
            }
            arr.push(node.val);
        }
        if (node.right && node.right.val !== null) {
            diff = inorder(node.right, arr, diff);
        }
        return diff
    }
    
    let diff = inorder(root, [], Infinity);
    return diff;
};