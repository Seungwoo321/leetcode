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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const queue = [[root, 0]];
    const arr = [];
    while (queue.length) {
        const [node, level] = queue.shift();
        if (!arr[level]) arr[level] = { sum: 0, count: 0 };
        arr[level].sum += node.val;
        arr[level].count ++;
        if (node.left) {
            queue.push([node.left, level + 1]);
        }
        if (node.right) {
            queue.push([node.right, level + 1]);
        }
    }
    return arr.map(v => v.sum / v.count);
};