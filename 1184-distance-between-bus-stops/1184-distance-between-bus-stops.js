/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    if (start > destination) [start, destination] = [destination, start];
    let sum = 0;
    let left = 0;
    for (let i = 0; i < distance.length; i ++) {
        sum += distance[i];
        if (i >= start && i < destination) {
            left += distance[i];
        }
    }
    return Math.min(left, sum - left);
};