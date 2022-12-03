
var MyHashSet = function() {
    this.arr = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if (!this.contains(key)) {
        this.arr.push(key);
    }
    return this.arr;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    if (this.contains(key)) {
        this.arr = this.arr.filter(v => v !== key);
    }
    return this.arr;
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.arr.includes(key);
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */