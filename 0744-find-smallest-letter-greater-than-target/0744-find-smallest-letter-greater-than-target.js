/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (letters[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return letters[left % letters.length];
};