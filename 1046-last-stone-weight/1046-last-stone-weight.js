/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 2) {
        stones.sort((a, b) => b - a);
        stones[1] = stones[0] - stones[1];
        stones.shift();
    }
    return Math.abs(stones[0] - (stones[1] || 0));
    
//     stones.sort((a, b) => b - a);
//     while (stones.length > 2) {
//         const firstStone = stones.shift();
//         const secondStone = stones.shift();
        
//         if (firstStone !== secondStone) {
//             stones.push(firstStone - secondStone);
//             stones.sort((a, b) => b - a);
//         }
//     }
//     return Math.abs(stones[0] - (stones[1] || 0));
}