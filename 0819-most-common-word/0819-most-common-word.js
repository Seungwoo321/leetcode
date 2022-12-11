/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const bannedSet = new Set(banned);
    const freqMap = new Map();
    let maxFreq = ''
    let maxFreqStr = '';
    paragraph.replaceAll(/([!?',;.])/g, ' ').toLowerCase().split(' ').forEach(str => {
        freqMap.set(str, (freqMap.get(str) || 0) + 1);
        if (str && !bannedSet.has(str) && freqMap.get(str) > maxFreq) {
            maxFreq = freqMap.get(str);
            maxFreqStr = str; 
        }
    });
    return maxFreqStr;
};