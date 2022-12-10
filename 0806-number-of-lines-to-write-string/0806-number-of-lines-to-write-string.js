/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    return [...s].reduce((acc, cur) => {
        const width = widths[(cur.charCodeAt() - 97) % 26];
        acc[1] += width;
        if (acc[1] > 100) {
            acc[0]++;
            acc[1] = width;
        }
        
        return acc;
    }, [1, 0]);
};