/**
 * 题目：输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function(nums) {
    const len = nums.length;
    let max = nums[0];
    for(let i = 1; i < len; i++) {
        nums[i] = Math.max(0, nums[i-1]) + nums[i];
        if (nums[i] > max) max = nums[i];
    }
    return max;
};

var maxSubArray2 = function(nums) {
    let dpArr = []
    nums.reduce((dp, v, i) => {
        dpArr = dp;
        return (i && (dp[i] = (dp[i - 1] > 0 ? dp[i - 1] : 0) + v), dp)
    }, [nums[0]])
    return Math.max(...dpArr)
}
maxSubArray2([1,2,3,4,-1,-2,3,5,7])