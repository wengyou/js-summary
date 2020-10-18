/**
 * 题目：一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
 * 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
    let mid = left + ((right - left) >>> 1);
    if (mid == nums[mid]) {
      left = mid + 1;
    } else {               
      right = mid - 1;
    }
  }
  return left
};
missingNumber([0,1])

/**
 * 题目：把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。
 * @param {number[]} numbers
 * @return {number}
 */
var minArray1 = function(numbers) {
  numbers.sort((a, b) => {
      return a - b;
  });
  return numbers[0];
};

var minArray2 = function(numbers) {
  for(let i = 0; i < numbers.length; i++) {
      if (numbers[i] < numbers[0]) return numbers [i];
  };
  return numbers[0];
};

var minArray3 = function(numbers) {
  let left = 0;
  let right = numbers.length - 1;
  while(left < right) {
      //无符号位移
      const mid = left + right >>> 1;
      if (numbers[mid] > numbers[right]) {
          left = mid + 1;
      } else if (numbers[mid] < numbers[right]) {
          right = mid
      } else {
          right--
      }
  }
  return numbers[left]
};

var minArray4 = function(numbers) {
  return Math.min(...numbers)
};