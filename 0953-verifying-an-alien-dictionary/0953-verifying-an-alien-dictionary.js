/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
function isAlienSorted(words, order) {
    const map = {};
    for (let i = 0; i < order.length; i++) {
        map[order[i]] = i;
    }
    for (let i = 1; i < words.length; i++) {
        const word1 = words[i - 1];
        const word2 = words[i];
        let j = 0;
        while (j < word1.length && j < word2.length) {
            if (map[word1[j]] < map[word2[j]]) {
                break;
            } else if (map[word1[j]] > map[word2[j]]) {
                return false;
            }
            j++;
        }
        if (j === word2.length && word1.length > word2.length) {
            return false;
        }
    }
    return true;
}