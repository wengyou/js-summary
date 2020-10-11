/**
 * 题目：输入整数数组 arr ，找出其中最小的 k 个数。
 * 例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
//第一种方式
// var getLeastNumbers = function(arr, k) {
//     let arrResult = [];
//     for(let i = 0; i < k; i++) {
//         let small = Math.min(...arr);
//         arrResult.push(small);
//         let index = arr.indexOf(small)
//         arr.splice(index,1);
//     }
//     return arrResult
// };

//第二种方式 排序
var getLeastNumbers = function(arr, k) {
    arr.sort((a, b) => a-b);
    let arrResult = arr.splice(0, k);
    return arrResult
};
getLeastNumbers([5,6,3,4,7], 2)

