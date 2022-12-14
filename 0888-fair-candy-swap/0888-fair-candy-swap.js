/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const sum = (acc, cur) => acc + cur
    const findDiff = (aliceSizes.reduce(sum, 0) - bobSizes.reduce(sum, 0)) / 2;
    aliceSizes.sort((a, b) => a - b);
    bobSizes.sort((a, b) => a - b);
    for (let i = 0; i < aliceSizes.length; i ++) {
        let left = 0;
        let right = bobSizes.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            let diff = aliceSizes[i] - bobSizes[mid]
            if (diff > findDiff) {
                left = mid + 1;
            } else if (diff < findDiff) {
                right = mid;
            } else {
                return [aliceSizes[i], bobSizes[mid]];
            }
        }
    }
};

