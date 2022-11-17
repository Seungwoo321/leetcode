/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const answer = new Array(n).fill(0);
    for (let i in answer) {
        let num = +i + 1;
        let fizz = num % 3 === 0 ? 'Fizz' : '';
        let buzz = num % 5 === 0 ? 'Buzz' : '';
        if (fizz || buzz) {
            answer[i] = fizz + buzz;
        } else {
            answer[i] = '' + num;
        }
        
    }
    return answer
};