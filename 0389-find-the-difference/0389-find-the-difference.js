/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

    let c = 0;
    for (let ss of s) {
        const char = ss.charCodeAt();
        c ^= char;
    }
    for (let tt of t) {
        const char = tt.charCodeAt();
        c ^= char;
    }
    return String.fromCharCode(c);
    
};