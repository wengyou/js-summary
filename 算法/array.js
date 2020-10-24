//题目：
// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
//每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，
//判断数组中是否含有该整数。
function Find(target, array) {
            
    let i = 0
    let j = array[i].length - 1
    let min = array[0][0]
    let max = array[array.length-1][array[0].length-1];

    if (target < min || target > max) 
        return false
                    
    while (i < array.length && j >= 0) {
        if (array[i][j] < target) {
            i++;
            console.log(i);
        } else if (array[i][j] > target) {
            j--;
            console.log(j);
        } else {
            console.log(array[i][j])
            return true
        }
    }
    return false
}
Find(3, [[1,2,3,4],[3,6,7,9], [4,6,8,10]])

/**
 * 题目：在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray1 = function(matrix, target) {
    if (!matrix.length) return false;
    let x = 0, y = matrix.length - 1;
    while(x <= matrix[0].length - 1 && y >= 0) {
        if (matrix[y][x] === target) {
            return true
        } else if (matrix[y][x] > target) {
            y--
        } else {
            x++
        }
    }
    return false
};

var findNumberIn2DArray2 = function(matrix, target) {
    return matrix.flat().includes(target)
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
};
