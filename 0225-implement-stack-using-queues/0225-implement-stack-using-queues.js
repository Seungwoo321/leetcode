
var MyStack = function() {
    this.queue = []
    this.size = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.size ++;
    this.queue[this.size] = x;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    const value = this.queue[this.size];
    this.queue[this.size] = null;
    this.size --;
    return value
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[this.size]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.size === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */