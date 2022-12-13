/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    
    const dfs = (root) => {
        const leafs = [];
        const stack = [];
        while (root || stack.length) {
            while (root) {
                stack.unshift(root);
                root = root.left;
            }
            root = stack.shift();
            if (!root.left && !root.right) {
                leafs.push(root.val);
            }
            if (root) {
                root = root.right;
            }
        }
        return leafs;
    }
    const leafs1 = dfs(root1);
    const leafs2 = dfs(root2);
    return leafs1.length === leafs2.length && leafs1.every((leaf, i) => leafs2[i] === leaf);
};