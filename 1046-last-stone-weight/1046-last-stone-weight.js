/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function(stones) {
    stones.sort((a, b) => b - a);
    while (stones.length > 1) {        
        const newStone = stones.shift() - stones.shift();

        if (newStone !== 0) {
            let i = 0;
            while (stones[i] > newStone) {
                i ++
            }
            stones.splice(i, 0, newStone);
        }
    }
    console.log(stones)
    return stones[0] || 0;
}