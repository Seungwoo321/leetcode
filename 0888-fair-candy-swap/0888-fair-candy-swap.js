/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const sum = (acc, cur) => acc + cur
    const findDiff = (aliceSizes.reduce(sum, 0) - bobSizes.reduce(sum, 0)) / 2;
    
    const aliceSet = new Set(aliceSizes);
    
    for (let size of bobSizes) {
        if (aliceSet.has(findDiff + size)) {
            return [findDiff + size, size];
        }
    }  
};

