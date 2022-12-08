/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    words.sort();
    
    return Object.values(words.reduce((acc, cur) => {
        if (!acc[cur]) acc[cur] = [];
        acc[cur] = [cur, (acc[cur][1] || 0) + 1];
        return acc;
    }, {}))
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(v => v[0])
};