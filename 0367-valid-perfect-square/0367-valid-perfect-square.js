/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 1) return true;
    let left = 1;
    let right = num;
    
    while (left < right) {
        let mid = parseInt((left + right) / 2);
        const value = (mid * mid);
        if (value > num) {
            right = mid;
        } else if (value < num) {
            left = mid + 1;
        } else {
            return true;
        }
    }
    return false;
    
};