/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let count = 0;
    const countBits = (n) => {
        const dp = [0];
        let offset = 1;
        for (let i = 1; i <= n; i ++) {
            if (offset * 2 === i) {
                offset = i;
            }
            dp[i] = dp[i - offset] + 1;
        }
        return dp;
    };
    const dp = countBits(right)
    const primes= [2, 3, 5, 7, 11, 13, 17, 19]
    while (left <= right) {
        if (primes.includes(dp[left])) {
            count ++;
        }
        left ++;
    }
    return count;
};