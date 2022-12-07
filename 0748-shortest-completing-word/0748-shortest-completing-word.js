/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    const shortText = licensePlate.replaceAll(/[^A-Za-z]/g, '').toLowerCase();
    words.sort((a, b) => a.length - b.length);
    
    const findRest = (word, shortText) => {
        for (let i = 0; i < shortText.length; i ++) {
            word = word.replace(shortText[i], '');
        }
        return word.length;
    }
    return words.find(word => {
        return word.length >= shortText.length && word.length - shortText.length === findRest(word, shortText);
    });
};