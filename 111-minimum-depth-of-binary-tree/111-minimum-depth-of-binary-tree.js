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
    const stack = [[root, 1]];
    let depth = [];
    while (stack.length) {
        const [node, level] = stack.shift();
        if (node.left) {
            stack.unshift([node.left, level + 1]);
        }
        if (node.right) {
            stack.unshift([node.right, level + 1])
        }
        if (node && (!node.left && !node.right)) {
            depth.push(level);
        } 
    }
    return Math.min.apply(null, depth);
};