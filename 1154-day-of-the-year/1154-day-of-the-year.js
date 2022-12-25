/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const year = new Date(date).getFullYear();
    const leapYear = (year % 4 === 0) && (year % 400 === 0 || year % 100 !== 0);
    const month = new Date(date).getMonth();
    let day = new Date(date).getDate() + (month > 1 ? leapYear : 0);
    for (let i = 0; i < month; i ++) {
        day += days[i];
    }
    return day;
};