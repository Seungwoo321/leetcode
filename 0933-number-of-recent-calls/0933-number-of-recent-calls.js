
var RecentCounter = function() {
    this.queue = [];
    this.range = (t) => {
        const limit = t - 3000;
        return () => [Math.min(limit, t), Math.max(limit, t)]
    }
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    const range = this.range(t)();
    this.queue.push(t);
    this.queue = this.queue.filter(q => q >= range[0] && q <= range[1]);
    return this.queue.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */