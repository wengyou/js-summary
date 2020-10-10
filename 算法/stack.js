/**
 * 题目：请定义一个队列并实现函数 max_value 得到队列里的最大值，
 * 要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

//第一种方式

var MaxQueue = function() {
    this.queue1 = [];
    this.queue2 = []; 
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(this.queue2.length) {
        return this.queue2[0]
    }
    return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue1.push(value);
    while(this.queue2.length && this.queue2[this.queue2.length - 1]) {
        this.queue2.pop()
    }
    this.queue2.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(!this.queue1.length) {
        return -1;
    }
    const value_front = this.queue1.shift();
    if(value_front === this.queue2[0]) {
        this.queue2.shift()
    }
    return value_front;
};  

//第二种方式

// var MaxQueue = function() {
//     this.queue = []
// };

// /**
//  * @return {number}
//  */
// MaxQueue.prototype.max_value = function() {
//     if(this.queue.length) {
//         return Math.max(...this.queue)
//     } else {
//         return -1
//     }  
// };

// /** 
//  * @param {number} value
//  * @return {void}
//  */
// MaxQueue.prototype.push_back = function(value) {
//     return this.queue.push(value)
// };

// /**
//  * @return {number}
//  */
// MaxQueue.prototype.pop_front = function() {
//     if(!this.queue.length) return -1;
//     return this.queue.shift()
// };