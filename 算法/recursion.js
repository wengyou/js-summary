/**
 * 题目：一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    if(n<=0){return 1;}
    if(n<=2){return n;}
    let i=2,cur=2,pre=1,res=0;
    while(i++ < n){
        res=(pre+cur)%1000000007;
        pre=cur
        cur=res
    } 
    return res
};
numWays(4)

/**
 * 题目：写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项。
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n==0) return 0;
    if(n<=2) return 1;
    let i=3,n1=1,n2=2,res=2;
    while(i++ < n) {
        res = (n1+n2)%1000000007;
        n1=n2;
        n2=res;
    }
    return res;
};

/**
 * 题目：输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length == 0 || inorder.length == 0) {
        return null
    }
    let index = inorder.indexOf(preorder[0]);
    let left = inorder.slice(0, index);
    let right = inorder.slice(index + 1);
    return {
        val: preorder[0],
        left: buildTree(preorder.slice(1, index + 1), left),
        right: buildTree(preorder.slice(index + 1), right)
    }
};

buildTree([3,9,20,15,7],[9,3,15,20,7])

/**
 * 题目：实现函数double Power(double base, int exponent)，求base的exponent次方。
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

//错误示例
var myPow1 = function(x, n) {
    let pow = 1;
    if(n==0) {
        return 1
    } else if (n>0){
        for(let i = 0; i < n; i++) {
            pow = pow * x;
        }
    } else {
        pow = 1/myPow(x,-n)
    }
    console.log(pow)
    return pow;
};

//内置函数
var myPow2 = function(x, n) {
    return Math.pow(x, n)
}

/**
 * 题目：用字符串数组作为井字游戏的游戏板 board。
 * 当且仅当在井字游戏过程中，玩家有可能将字符放置成游戏板所显示的状态时，才返回 true。
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
    let Xcount = 0, Ocount = 0;
    board.map(item => {
        for(let i = 0; i < 3; i++) {
            item[i] === 'X' && Xcount++;
            item[i] === 'O' && Ocount++;
        }
    })
    if(Xcount !== Ocount && Xcount !== Ocount +1) return false;
    if(win(board, 'X') && Xcount !== Ocount + 1) return false;
    if(win(board, 'O') && Xcount !== Ocount) return false;
    return true;
};
function win(board, P) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === P && board[i][1] === P && board[i][2] === P) {
            return true;
        }
        if (board[0][i] ===P && board[1][i] === P && board[2][i] === P) return true; 
    }
    if (board[0][0] === P && board[1][1] === P && board[2][2] === P) return true;
    if (board[0][2] === P && board[1][1] === P && board[2][0] === P) return true;
    return false;
}
validTicTacToe(["XXX","   ","OOO"])