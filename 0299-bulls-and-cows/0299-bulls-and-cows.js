/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    
    const hashTable = new Array(10).fill(0)
    let bulls = 0;
    let cows = 0;
    
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls ++;
        } else {
            if (hashTable[secret[i]]++ < 0) cows++;
            if (hashTable[guess[i]]-- > 0) cows++;
        }
    }
    return bulls + 'A' + cows + 'B';
};