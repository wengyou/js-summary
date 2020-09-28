
//创建二叉树
function Node() {
    this.data = null;
    this.left = nill;
    this.right = null;
}
function binaryTree() {
    Node.call(this);
    this.root = null;
}


//二叉树的层平均值
var averageOfLevels = function(root) {
    var numbers = [];
    var queue = [];   // 层序遍历的队列
    if (root !== null) {
      queue.push(root);
    }
    while (queue.length !== 0) {
      var sum = 0;
      var num = queue.length;  // l代表此时当前层的节点数
      for (var i = 0; i < num; i ++) { 
        var currentNode = queue.shift();   // shift：删除数组的第一个元素并返回
        sum += currentNode.val;
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
      numbers.push(sum / num);  // 将当前层的平均数添加到数组
    }
    return numbers;
  };
 averageOfLevels([3])  