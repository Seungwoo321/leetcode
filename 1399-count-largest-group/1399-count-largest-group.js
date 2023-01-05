/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    const digitSum = n => {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return sum;
    }
    // const digitSum = (n) => n === 0 ? 0 : (n % 10) + digitSum(Math.floor(n / 10));
    const counts = new Array(37).fill(0);
    let max = 0;
    for (let i = 1; i <= n; i++) {
        counts[digitSum(i)]++
        max = Math.max(max, counts[digitSum(i)]);
    }
    console.log(counts);
    console.log(max)
    return counts.filter(c => c === max).length;
};