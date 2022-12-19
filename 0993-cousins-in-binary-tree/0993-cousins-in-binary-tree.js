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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const queue = [[root, 0, null]];
    let record = [];
    while (queue.length) {
        const [node, depth, parent] = queue.shift();
        if (node.val === x || node.val === y) record.push([depth, parent]);
        if (record.length === 2) return record[0][0] === record[1][0] && record[0][1] !== record[1][1];
        if (node.left) queue.push([node.left, depth + 1, node]);
        if (node.right) queue.push([node.right, depth + 1, node]);
    }
    return false;
};