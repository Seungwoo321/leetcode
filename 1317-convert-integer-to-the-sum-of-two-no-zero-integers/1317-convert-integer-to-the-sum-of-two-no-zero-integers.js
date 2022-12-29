/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    
    const noneZero = (n) => {
        while (n > 0) {
            if (n % 10 === 0) return false;
            n = Math.floor(n / 10);
        }
        return true;
    }
    for (let i = 1; i < n; i ++) {
        if (noneZero(i) && noneZero(n - i)) {
            return [i, n - i];
        }
    }
};