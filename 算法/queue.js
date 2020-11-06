/**
 * 题目：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//暴力解法
var maxSlidingWindow1 = function(nums, k) {
    if (k <= 1) return nums;
    const res = [];
    for (let i = 0; i < nums.length - k + 1; i++) {
        res.push(Math.max(...nums.slice(i, i + k)))
    }
    return res;
};

//动态规划
const maxSlidingWindow2 = (nums, k) => {
    if (k === 1) return nums;
    const length = nums.length;
    if (!length) return [];
    const left = new Array(length);
    const right = new Array(length);
    left[0] = nums[0];
    right[length - 1] = nums[length - 1];
    for (let i = 1; i < length; ++i) {
        if (i % k) {
            left[i] = Math.max(nums[i], left[i - 1]);
        } else {
            left[i] = nums[i];
        }

        let j = length - i - 1;
        if ((j + 1) % k) {
            right[j] = Math.max(nums[j], right[j + 1]);
        } else {
            right[j] = nums[j];
        }
    }
    const res = [];
    for (let i = 0; i < length - k + 1; i++) {
        res.push(Math.max(right[i], left[i + k - 1]));
    }
    return res;
}