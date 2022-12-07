/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    const shortText = licensePlate.replaceAll(/[^A-Za-z]/g, '').toLowerCase()
    words.sort((a, b) => a.length - b.length);

    return words.find(word => {
        let rest = word.length - shortText.length;
        for (let i = 0; i < shortText.length; i ++) {
            word = word.replace(shortText[i], '');
        }
        return word.length === rest;
    });
};