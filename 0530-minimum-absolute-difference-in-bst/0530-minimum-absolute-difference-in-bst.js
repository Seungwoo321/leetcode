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
    let diff = Infinity;
    const stack = [[root, [root.val]]];
    while (stack.length) {
        const [node, values] = stack.shift();
        if (node.right && node.right.val) {
            diff = Math.min(...values.map(v => Math.abs(v - node.right.val)), diff);
            stack.unshift([node.right, [...values, node.right.val]]);
        }
        if (node.left && node.left.val) {
            diff = Math.min(...values.map(v => Math.abs(v - node.left.val)), diff);
            stack.unshift([node.left, [...values, node.left.val]]);
        }
    }
    return diff;
};