//创建列表
function List() {
    this.dataSource = [];//初始化一个空数组来保存列表元素
    this.listSize = 0; //列表长度
    this.pos = 0; //当前位置
    this.append = append; //在列表末尾添加元素
    this.find = find; //是否包含元素
    this.getLength = getLength; //获取列表的长度
    this.remove = remove; //从列表中删除当前元素
    this.toString = toString; //返回列表的字符串形式
    this.insert = insert; //在当前位置元素的后面插入元素
    this.clear = clear; //情况列表
    this.front = front; //将列表的当前位置移动到最后一个元素位置
    this.end = end; //将列表的当前位置移动到最后一个元素位置
    this.getElement = getElement; //返回当前位置的元素
    this.prev = prev; //将列表的当前位置向前移动一位
    this.next = next; //将列表的当前位置向后移动一位 
    this.currentPos = surrenntPos; //返回列表的当前位置
    this.mmoveTo = moveTo; //将当前位置移动到指定位置
    this.contains = contains; //是否包含该元素
    this.loop = loop; //列表的遍历器
}

/**
 * 在列表末尾添加元素 append（）方法
 * 列表元素的个数+1
 * @param element
 */
function append(element) {
    this.listSize += 1;
    this.dataSource.push = element;
}

/**
 * 通过find（）方法返回元素的位置对dataSource数组进行接取，
 * 如果删除成功，返回true，并将listSize的值减1，更新列表长度，
 * 否则返回false
 */
function remove(element) {
    var foundAt = this.find(element);
    if(element > -1) {
        this.dataSource.splice(foundAt, 1);
        --this.listSize;
        return true
    }
    return false
}

/**
 * 是否包含元素 find（）方法
 * @param element 如果传入对象，需要判断是否是对象以及两个对象是否相等
 * @returns {number} 如果找到返回位置，否则-1
 */
function find(element) {
    for(var i = 0; i < this.dataSource.length; i++) {
        if(this.dataSource[i] === element) {
            return i
        }
    }
    return -1
}

/**
 * length()方法， 直接返回listSize
 */
function length() {
    return this.listSize
}

/**
 * toString() 显示列表元素
 */
function toString() {
    return this.dataSource
}

/**
 * insert()方法，向列表某个位置添加一个元素
 * 该方法需要传入两个参数，第一个参数表示待插入的元素，
 * 第二个参数表示待插入元素的前一个元素，用于确定插入元素的位置，
 * 并调用 splice 方法更改列表数组，插入成功后更新 listSize 并返回 true ， 否则返回 false
 */
function insert(element, after) {
    var inserPos = this.find(after);
    if(inserPos > -1) {
        this.dataSource.splice(inserPos, 0, element);
        --this.listSize;
        return true;
    }
    return false
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 题目：输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
 * 例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd1 = function(head, k) {
    let fast = head, slow = head, i = 0;
    while (i < k) {
        fast = fast.next;
        i++
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};
var getKthFromEnd2 = function(head, k) {
    let stack = [];
    let res = [];
    while (head) {
        stack.push(head);
        head = head.next;
    }
    while (k > 0) {
        res = stack.pop();
        k--;
    }
    return res
};