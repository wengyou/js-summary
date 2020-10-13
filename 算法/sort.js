/**
 * 题目：输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    nums.sort((a, b) => {
        const str1 = a + '' + b;
        const str2 = b + '' + a;
        if (str1 < str2) return -1;
        if (str1 > str2) return 1;
        return 0
    })
    return nums.join('')
};
minNumber([1,20,3,5,9])

/**
 * 题目：数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement1 = function(nums) {
    nums.sort();
    return nums[Math.floor(nums.length/2)]
};

var majorityElement2 = function(nums) {
    let num = nums[0];
    let count = 1;
    for(let i = 1; i < nums.length; i++) {
        if (count === 0) {
            num = nums[i]
        }
        if (nums[i] === num) {
            count++
        } else {
            count--
        }
    }
    return num
};