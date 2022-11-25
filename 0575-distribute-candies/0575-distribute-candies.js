/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    candyType = candyType.sort((a, b) => a - b);
    const maximum = candyType.length / 2
    let data = {}
    let uniq = 0;
    let i = 0;
    while (i < candyType.length && uniq < maximum) {
        const candy = candyType[i];
        if (!data[candy]) uniq ++;
        data[candy] = (data[candy] || 0) + 1;
        i++;
    }
    return uniq;
};