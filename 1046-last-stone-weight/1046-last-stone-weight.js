/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

    stones.sort((a, b) => b - a);
    while (stones.length > 2) {
        const firstStone = stones.shift();
        const secondStone = stones.shift();
        
        if (firstStone !== secondStone) {
            const newStone = firstStone - secondStone;
            stones.push(newStone);
            if (newStone > stones[stones.length - 2]) {
                stones.sort((a, b) => b - a);
            }
            
            
        }
    }
    return Math.abs(stones[0] - (stones[1] || 0));
};