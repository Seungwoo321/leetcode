/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const bannedSet = new Set(banned);
    const freqMap = new Map();
    let freqStr = ''
    let freqCount = '';
    paragraph.replaceAll(/([!?',;.])/g, ' ').toLowerCase().split(' ').forEach(str => {
        freqMap.set(str, (freqMap.get(str) || 0) + 1);
        if (str && !bannedSet.has(str) && freqMap.get(str) > freqCount) {
            freqCount = freqMap.get(str);
            freqStr = str; 
        }
    });
    return freqStr;
};