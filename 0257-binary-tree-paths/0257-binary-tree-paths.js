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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) return [];
    
    const getPaths = function (root, path = '', paths = []) {
        if (!root) return paths;
        path += `${root.val}`
        if (root.left) {
            getPaths(root.left, path + '->', paths);
        }
        if (root.right) {
            getPaths(root.right, path + '->', paths);
        }
        if (!root.left && !root.right) {
            paths.push(path);
        }
        return paths;
    }
    const paths = [];
    getPaths(root, '', paths);
    return paths;
};