/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    return sentence.split(' ').map((str, i) => {
        return (
            vowelSet.has(str[0]) ?
                str + 'ma' :
                str.substring(1) + str[0] + 'ma'
        ) + 'a'.repeat(i + 1);
    }).join(' ');
};