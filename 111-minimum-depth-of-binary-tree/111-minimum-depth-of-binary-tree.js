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
var minDepth = function (root) {
    if (!root) return 0;
    if (root.left === null) return 1 + minDepth(root.right);
    if (root.right === null) return 1 + minDepth(root.left);
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
// var minDepth = function (root) {
//     if (!root) return 0;
//     const stack = [[root, 1]];
//     let depth = [];
//     while (stack.length) {
//         const [node, level] = stack.shift();
//         if (node.left) {
//             stack.unshift([node.left, level + 1]);
//         }
//         if (node.right) {
//             stack.unshift([node.right, level + 1])
//         }
//         if (node && (!node.left && !node.right)) {
//             depth.push(level);
//         } 
//     }
//     return Math.min.apply(null, depth);
// };
// var minDepth = function (root) {
//     if (!root) return 0;
//     const q = [[root, 1]];
//     while (q.length) {
//         const [node, level] = q.shift();
//         if (node.left) {
//             q.push([node.left, level + 1]);
//         }
//         if (node.right) {
//             q.push([node.right, level + 1]);
//         }
//         if (node && (!node.left && !node.right)) {
//             return level;
//         }
//     }
// };