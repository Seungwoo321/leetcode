/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let lower = 0;
    let higher = n;
    while (lower <= higher) {
        let num = parseInt((lower + higher) / 2);
        let result = guess(num);
        if (result === -1) {
            higher = num - 1;
        } else if (result === 1) {
            lower = num + 1;
        } else {
            return num;
        }
    }
};