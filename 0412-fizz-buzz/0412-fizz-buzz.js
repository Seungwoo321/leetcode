/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const answer = new Array(n).fill('');
    for (let i in answer) {
        let num = +i +1;
        if (num % 3 === 0 && num % 5 === 0) {
            answer[i] += 'FizzBuzz';
            continue;
        } else if (num % 3 === 0) {
            answer[i] += 'Fizz';
            continue;
        } else if (num % 5 === 0) {
            answer[i] += 'Buzz';
            continue;
        }
        answer[i] += num;
    }
    return answer
};