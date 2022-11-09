/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let p1 = n;
    let p2 = n;
    const sum = (acc, cur) => acc + +cur * +cur;
    while (n > 1) {
        p1 = [...p1.toString()].reduce(sum, 0);
        p2 = [...[...p2.toString()].reduce(sum, 0).toString()].reduce(sum, 0);
        if (p1 === 1) return true;
        if (p1 === p2) return false;
    }
    return true;
};