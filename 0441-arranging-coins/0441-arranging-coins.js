/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 0;
    let right = n;
    
    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        let needCoin = mid * (mid + 1) / 2;
        
        if (n < needCoin) {
            right = mid - 1;
        } else if (n > needCoin) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return right;
};