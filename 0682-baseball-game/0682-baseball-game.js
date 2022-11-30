/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let sum = 0;
    const record = [];
    
    while (operations.length) {
        const score = operations.shift();
        
        if (!isNaN(+score)) {
            sum += +score;
            record.push(+score);
        } else if (score === '+') {
            let point = record[record.length - 1] + record[record.length - 2];
            record.push(point);
            sum += point;
        } else if (score === 'D') {
            let point = record[record.length - 1] * 2;
            record.push(point);
            sum += point;
        } else if (score === 'C') {
            sum -= record[record.length - 1];
            record.pop();
        }
    }
    return sum;
    
};