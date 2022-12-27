/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let sum = 0;
    let left = 0;
    for (let i = 0; i < distance.length; i ++) {
        sum += distance[i];
        if (
            i >= Math.min(start, destination) &&
            i < Math.max(start, destination)
        ) {
            left += distance[i];
        }
    }
    return Math.min(left, sum - left);
};