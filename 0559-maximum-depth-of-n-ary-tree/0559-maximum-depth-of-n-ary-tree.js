/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    if (!root) return 0;
    const dfs = (root, depth) => {
        console.log(root.val)
        if (!root.children) return depth;
        let max = depth        
        for (let node of root.children) {
            max = Math.max(dfs(node, depth + 1), max);
        }
        return max;    
    }
    return dfs(root, 1);
};