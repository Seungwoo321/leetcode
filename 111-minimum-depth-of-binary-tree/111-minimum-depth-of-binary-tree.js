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
// var minDepth = function (root) {
//     if (!root) return 0;
//     if (root.left === null && root.right === null) return 1;
//     if (root.left === null) return 1 + minDepth(root.right);
//     if (root.right == null) return 1 + minDepth(root.left);
//     return 1 + Math.min(minDepth(root.left), minDepth(root.right));
// };
var minDepth = function (root) {
    if (!root) return 0;
    const q = [[root, 1]];
    while (q.length) {
        const len = q.length
        for (let i = 0; i < len; i ++ ) {
            const [node, level] = q.shift();
            if (node.left) {
                q.push([node.left, level + 1]);
            }
            if (node.right) {
                q.push([node.right, level + 1]);
            }
            if (node && (!node.left && !node.right)) {
                return level;
            }
        }
    }
};