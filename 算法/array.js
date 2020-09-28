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
