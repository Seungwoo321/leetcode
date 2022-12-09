/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let count = 0;
    const getNumOfSetBits = function(n) {
        let result = 0;
        while (n) {
            result += (n & 1);
            n = n >> 1;
        }
        return result;
    }

    const primes= [2, 3, 5, 7, 11, 13, 17, 19]
    while (left <= right) {
        if (primes.includes(getNumOfSetBits(left))) {
            count ++;
        }
        left ++;
    }
    return count;
};