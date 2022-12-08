/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function(stones) {
    stones.sort((a, b) => b - a);
    while (stones.length > 1) {        
        const newStone = stones.shift() - stones.shift();
        if (newStone > 0) {
            let i = 0;
            while (newStone < stones[i]) {
                i ++;
            }
            stones.splice(i, 0, newStone);
        }
    }
    return stones[0] || 0;
}