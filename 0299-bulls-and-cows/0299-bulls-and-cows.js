/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    
    const hashTable = new Map();
    let a = 0;
    let b = 0;
    
    for (let i = 0; i < secret.length; i ++) {
        if (secret[i] !== guess[i]) {
            hashTable.set(secret[i], (hashTable.get(secret[i]) || 0) + 1);
        }
    }
    for (let i = 0; i < guess.length; i++) {
        let count = hashTable.get(guess[i]);
        if (secret[i] === guess[i]) {
            a ++;
        } else if (count === 0) {
            hashTable.delete(guess[i]);
        } else if (count > 0) {
            hashTable.set(guess[i], count - 1);
            b ++;
        }
    }
    return a + 'A' + b + 'B';
};