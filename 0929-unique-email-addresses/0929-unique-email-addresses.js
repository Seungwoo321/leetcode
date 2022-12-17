/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const emailSet = new Set();
    emails.forEach(email => {
        email = email.split('@');
        emailSet.add([email[0].replaceAll('.', '').split('+')[0], email[1]].join('@'));
    });
    return emailSet.size;
};