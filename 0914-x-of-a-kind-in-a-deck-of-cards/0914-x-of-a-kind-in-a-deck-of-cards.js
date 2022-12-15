/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    const gcd = (a, b) => b > 0 ? gcd(b, a % b) : a;
    const countMap = new Map();
    let res = 0;
    for (let i in deck) {
        countMap.set(deck[i], (countMap.get(deck[i]) || 0) + 1);
    }
    countMap.forEach(count => {
        res = gcd(count, res);
    });
    
    return res > 1;
};