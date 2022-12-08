/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function(stones) {
    
    while (stones.length > 1) {
        
        stones.sort((a, b) => a - b);
        
        const newStone = stones.pop() - stones.pop();

        if (newStone !== 0) {
            let i = 0;
            while (stones[i] > newStone) {
                i ++
            }
            stones.splice(i, 0, newStone)
        }
    }
    console.log(stones)
    return stones[0] || 0
    
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