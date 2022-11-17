/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const set = new Set(nums.sort((a, b) => b - a));
    const setIter = set.values();
    if (set.size < 3) {
        return setIter.next().value;
    } else {
        setIter.next().value;
        setIter.next().value;
        return setIter.next().value;
    }
};