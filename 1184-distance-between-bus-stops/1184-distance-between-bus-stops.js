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
    distance.forEach((n, i) => {
        if (i >= start && i < destination) left += n;
        sum += n;
    });
    return Math.min(left, sum - left);
};