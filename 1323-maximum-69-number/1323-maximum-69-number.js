/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    for (let i = 3; i > -1; i --) {
        if (parseInt(num / (10 ** i) % 10) === 6) {
            return num + 3 * (10 ** i)
        }
    }
    return num
};