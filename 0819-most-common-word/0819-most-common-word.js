/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const bannedSet = new Set(banned);
    const countMap = new Map();
    let maxFreqStr = ''
    let maxFreq = 0;
    paragraph.replaceAll(/([!?',;.])/g, ' ').toLowerCase().split(' ').forEach(str => {
        countMap.set(str, (countMap.get(str) || 0) + 1);
        if (str && !bannedSet.has(str) && countMap.get(str) > maxFreq) {
            maxFreq = countMap.get(str);
            maxFreqStr = str; 
        }
    });
    return maxFreqStr;
};