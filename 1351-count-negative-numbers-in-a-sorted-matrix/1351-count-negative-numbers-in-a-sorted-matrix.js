/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    
    const binarySearch = (target, arr) => {
        let left = 0;
        let right = arr.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] <= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    let count = 0;
    for (let i = 0; i < grid.length; i ++) {
        count += grid[i].length
        if (grid[i][0] >= 0) {
            count -= binarySearch(-1, grid[i]) 
        }
    }
    return count;
};