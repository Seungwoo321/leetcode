/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0
    for (let i = 0; i < strs[0].length; i ++) {
        let prev = strs[0][i];
        for (let j = 1; j < strs.length; j ++) {
            if (prev > strs[j][i]) {
                count ++;
                break;
            } else {
                prev = strs[j][i];
            }
        }
    }
    return count;
};