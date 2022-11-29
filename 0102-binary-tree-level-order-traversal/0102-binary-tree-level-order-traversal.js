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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    const visted = [];
    const queue = [[root, 0]];
    while (queue.length) {
        const [node, level] = queue.shift();
        if (!visted[level]) visted[level] = [];
        visted[level].push(node.val);
        if (node.left) queue.push([node.left, level + 1]);
        if (node.right) queue.push([node.right, level + 1]);
    }
    return visted;
};