/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];
    let currNum = 0;
    let currStr = '';
    
    for (let i = 0; i < s.length; i ++) {
        let str = s[i];
        if (str == '[') {
            stack.push(currStr);
            stack.push(currNum);
            currNum = 0;
            currStr = '';
        } else if (str == ']') {
            let prevNum = stack.pop();
            let prevStr = stack.pop();
            currStr = prevStr + currStr.repeat(prevNum);
        } else if (str >= '0' && str <= '9') {
            currNum = currNum * 10 + Number(str);
        } else {
            currStr += str;
        }
    }

    return currStr;
};