/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    words.sort((a, b) => a.length - b.length);
    const shortText = licensePlate.replaceAll(/[^A-Za-z]/g, '').toLowerCase();    
    const findRest = (word) => {
        [...shortText].forEach(s => word = word.replace(s, ''))
        return word.length;
    }
    return words.find(word => word.length >= shortText.length && word.length - shortText.length === findRest(word));
};