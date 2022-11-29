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
var findSecondMinimumValue = function(root) {
    let leafNodes = [];
    const dfs = (node, arr = []) => {
        if (!node) return null;
        if (node.left === null && node.right === null) {
            arr.push(node.val);
        }
        dfs(node.left, arr);
        dfs(node.right, arr);
    }
    dfs(root, leafNodes);
    leafNodes = leafNodes.sort((a, b) => a - b);
    let min = leafNodes[0];
    for (let i = 0; i < leafNodes.length; i ++) {
        if (min < leafNodes[i]) {
            return leafNodes[i];
        }
    }
    return -1;
};