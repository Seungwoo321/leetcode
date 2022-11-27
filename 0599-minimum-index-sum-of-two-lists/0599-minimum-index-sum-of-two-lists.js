/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const hashTable = new Array(list1.length + list2.length).fill(0).map(v => []);
    const map1 = new Map();
    list1.forEach((str, index) => {
        map1.set(str, index);
    });
    list2.forEach((str, index) => {
        if (map1.has(str)) {
            hashTable[map1.get(str) + index].push(str);
        }
    });
    return hashTable.find(arr => arr.length > 0);
};