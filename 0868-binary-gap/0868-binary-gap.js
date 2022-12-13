/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    n = n.toString(2)
    let start = n.indexOf('1');
    const ditance = [];
    for (let i = start; i < n.length; i ++) {
        if (n[i] === '1') {
            ditance.push(i - start);
            start = i;
        }
    }
    return Math.max(...ditance);
};