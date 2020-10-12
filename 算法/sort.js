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