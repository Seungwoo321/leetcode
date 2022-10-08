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
 * @param {number} targetSum
 * @return {boolean}
 */
// var hasPathSum = function (root, targetSum) {
//     if (!root) return false;
//     const stack = [[root, root.val]];
//     while (stack.length) {
//         const [node, val] = stack.shift();
//         if (node.left) {
//             stack.unshift([node.left, val + node.left.val]);
//         }
//         if (node.right) {
//             stack.unshift([node.right, val + node.right.val]);
//         }
//         if (!node.left && !node.right) {
//             if (val === targetSum) return true;
//         }
//     }
//     return false;
// };
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    if (root.left === null && root.right === null && root.val === targetSum) return true;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};