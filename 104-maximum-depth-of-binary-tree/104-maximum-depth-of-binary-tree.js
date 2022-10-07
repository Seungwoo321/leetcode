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
// var maxDepth = function(root) {
//     if (!root) return 0;
//     return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// };

// var maxDepth = function (root) {
//     if (!root) return 0;
//     let level = 0;
//     const queue = [root];
//     while (queue.length) {
//         const len = queue.length
//         for (let i = 0; i < len; i ++) {
//             const node = queue.pop();
//             if (node && node.left) {
//                 queue.unshift(node.left);
//             }
//             if (node && node.right) {
//                 queue.unshift(node.right);
//             }
//         }
//         level ++;
//     }
//     return level;
// };
var maxDepth = function (root) {
    const stack = [[root, 1]];
    let maxDepth = 0;
    while (stack.length) {
        const [node, depth] = stack.shift();
        if (node) {
            maxDepth = Math.max(depth, maxDepth);
            stack.unshift([node.left, depth + 1 ]);
            stack.unshift([node.right, depth + 1]);
        }
    }
    return maxDepth;
};