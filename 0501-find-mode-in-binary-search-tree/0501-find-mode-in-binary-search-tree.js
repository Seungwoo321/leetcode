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
var findMode = function(root) {
    if (root.val === 0) return [0];
    const queue = [root];
    let maxCount = 0;
    let countMap = new Map();
    while (queue.length) {
        let node = queue.shift();
        if (countMap.has(node.val)) {
            let count = countMap.get(node.val) + 1;
            countMap.set(node.val, count);
            maxCount = Math.max(count, maxCount);
        } else {
            countMap.set(node.val, 1);
            maxCount = Math.max(1, maxCount);
        }

        if (node.left && node.left.val !== null) {
            queue.push(node.left);
        }
        if (node.right && node.right.val !== null) {
            queue.push(node.right);
        }
    }
    const answer = [];
    countMap.forEach((value, key) => {
        if (value === maxCount) {
            answer.push(key);
        }
    });
    return answer;
    
};