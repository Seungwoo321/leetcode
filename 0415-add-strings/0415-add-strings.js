/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    let carry = 0;
    let answer = '';
    
    while (p1 >= 0 || p2 >= 0) {
        let x1 = num1[p1] || 0;
        let x2 = num2[p2] || 0;
        let value = +x1 + +x2 + carry;
        
        carry = value > 9 ? 1 : 0;
        answer = (value % 10) + answer;
        p1 --;
        p2 --;
        
    }
    if (carry > 0) {
        answer = carry + answer;
    }
    return answer; 
};