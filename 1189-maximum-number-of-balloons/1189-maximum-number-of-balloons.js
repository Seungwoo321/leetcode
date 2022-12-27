/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const balloon = [...text].reduce((acc, cur) => acc.set(cur, (acc.get(cur) || 0) + 1), new Map());
    return Math.floor(
        Math.min(
            balloon.get('b'),
            balloon.get('a'),
            balloon.get('l') / 2,
            balloon.get('o') / 2,
            balloon.get('n')
        )) || 0;
};