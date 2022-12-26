/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    const MODE = 10**9 + 7;
    const sieveOfEratosthenes = (n) => {
        const prime = Array.from({ length: n + 1 }, (_, i) => true);
        for (let i = 2; i * i <= n; i ++) {
            if (prime[i]) {
                for (let j = i * i; j <= n; j += i) {
                    prime[j] = false;
                }
            } 
        }
        return prime.slice(2).filter(p => p).length
    }
    let prime = sieveOfEratosthenes(n);
    
    const factorial = (n) => {
        let result = 1;
        for (let i = 2; i <= n; i ++) {
            result = result * i % MODE; 
        }
        return BigInt(result);
    }
    return factorial(n - prime) * factorial(prime) % BigInt(MODE); 
    
};