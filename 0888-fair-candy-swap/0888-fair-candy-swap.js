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
    
    for (let j = 0; j < bobSizes.length; j ++) {

        let i = binarySearch(findDiff + bobSizes[j], aliceSizes);
        if (i > -1) {
            return [aliceSizes[i], bobSizes[j]]
        }
    
    }
};