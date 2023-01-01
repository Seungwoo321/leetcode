/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let code = 97;
    let s = '';
    let odd = false;
    while (n > 0) {
        s += String.fromCharCode(code);
        if (!odd && n % 2 === 0) {
            n --;
            code ++;
        } else {
            odd = true;
            n --;
        }
        
    }
    return s;
};