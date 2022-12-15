/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    const gcd = (a, b) => b > 0 ? gcd(b, a % b) : a;
    const count = new Map();
    let res = 0;
    deck.forEach(n => count.set(n, (count.get(n) || 0) + 1));
    count.forEach(c => res = gcd(c, res));
    return res > 1;
};