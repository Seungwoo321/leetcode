/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let step = 0;
    while (num > 0) {
        step += (num > 1 && num & 1) ? 2 : 1;
        num >>= 1;
    }
    return step
};