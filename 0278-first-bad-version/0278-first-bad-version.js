/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 1) return n;
        let p1 = 1;
        let p2 = n;
        
        while (p1 < p2) {
            let version = parseInt((p1 + p2) / 2);
            if (isBadVersion(version)) {
                if (isBadVersion(version - 1)) {
                    p2 = version - 1;
                } else {
                    return version;
                }
            } else {
                p1 = version + 1;
            }
        }
        return p1;
        
    };
};