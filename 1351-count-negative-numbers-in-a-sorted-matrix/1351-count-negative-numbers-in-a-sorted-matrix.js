/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    
    const binarySearch = (target, arr) => {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    let count = 0;
    for (let i = 0; i < grid.length; i ++) {
        count += grid[i].length
        if (grid[i][0] > -1) {
            count -= binarySearch(0, grid[i]) 
        }
    }
    return count;
};