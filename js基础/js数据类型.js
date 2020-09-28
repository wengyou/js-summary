var a = 123;
var b = a;
b = 234;
console.log(a);
console.log(b);

//基本数据类型的比较
var x = true;
var y = 1;
console.log(x == y);
console.log(x === y);

//引用数据类型
var obj1 = {
    x: 1
};
var obj2 = obj1;
obj1.x = 2;
console.log(obj2.x); //2
