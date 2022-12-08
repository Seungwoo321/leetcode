/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {

    return Object.values(words.reduce((acc, cur) => {
        if (!acc[cur]) acc[cur] = [];
        acc[cur] = [cur, (acc[cur][1] || 0) + 1];
        return acc;
    }, {}))
        .sort((a, b) => b[1] === a[1] ? a[0].localeCompare(b[0]) : b[1] - a[1])
        .slice(0, k)
        .map(v => v[0])
};