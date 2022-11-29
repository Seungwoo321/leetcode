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
    let leaf = [];
    const dfs = (node, arr = []) => {
        if (!node) return null;
        if (node.left === null && node.right === null) {
            arr.push(node.val);
        }
        dfs(node.left, arr);
        dfs(node.right, arr);
    }
    dfs(root, leaf);
    leaf = leaf.sort((a, b) => a - b);
    let min = leaf[0];
    for (let i = 0; i < leaf.length; i ++) {
        if (min < leaf[i]) {
            return leaf[i];
        }
    }
    return -1;
};