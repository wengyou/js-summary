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