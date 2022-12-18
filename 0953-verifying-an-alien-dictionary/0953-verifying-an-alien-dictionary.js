/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const orderMap = [...order].reduce((acc, cur, i) => {
        acc[cur] = i + 1;
        return acc;
    }, {});

    for (let i = 1; i < words.length; i ++) {
        const maxLength = Math.max(words[i - 1].length, words[i].length);
        for (let j = 0; j < maxLength; j ++) {
            if (words[i - 1][j] === words[i][j]) continue;
            if ((orderMap[words[i - 1][j]] || 0) < (orderMap[words[i][j]] || 0)) {
                break;
            } else {
                return false;
            }
            
        }
    }
    return true;
};