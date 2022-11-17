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
var sumOfLeftLeaves = function(root, isLeft = false) {
    if (!root) return 0;
    // if (!root.left && !root.right) return isLeft ? root.val : 0;
    // return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
    
    const queue = [[root, false]];
    let sum = 0;
    while (queue.length) {
        const [node, isLeft] = queue.shift();
        if (node.left) {
            queue.push([node.left, true]);
        }
        if (node.right) {
            queue.push([node.right, false]);
        }
        if (!node.left && !node.right) {
            sum += isLeft ? node.val : 0;
        }
    }
    return sum;
};