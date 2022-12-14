/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const sum = (acc, cur) => acc + cur
    const findDiff = (bobSizes.reduce(sum, 0) - aliceSizes.reduce(sum, 0)) / 2;

    bobSizes.sort((a, b) => a - b);

    const binarySearch = (target, arr) => {
        let left = 0;
        let right = arr.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] > target) {
                right = mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
        return -1
    }
    
    for (let i = 0; i < aliceSizes.length; i ++) {

        let j = binarySearch(findDiff + aliceSizes[i], bobSizes);
        if (j > -1) {
            return [aliceSizes[i], bobSizes[j]]
        }
    
    }
};