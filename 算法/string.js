/**
 * 题目：请实现一个函数，将一个字符串中的每个空格替换成“%20”。
 * 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 * @param {string} str 
 * @returns {string}
 */
function replaceSpace(str) {
    console.log(str.replace(/\s/g, '%20'));
    return str.replace(/\s/g, '%20');
}

// replaceSpace('We Are Happy');

/**
 * 题目：输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。
 * 为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。
 * @param {string} 
 * @returns {string}
 */
var reverseWords1 = function(s) {
    var str = s.trim().split(' ').filter(item => item != '').reverse().join(' ')
    return str;
};
var reverseWords2 = function(s) {
    var arr = s.split(' ');
    var arrtrim = [];
    var str = '';
    for(var i = 0; i < arr.length; i++) {
        arr[i] !== '' && arrtrim.push(arr[i])
    }
    var len = arrtrim.length,
        start = 0,
        end = len - 1,
        temp;
    while(start < end) {
        temp = arrtrim[start];
        arrtrim[start] = arrtrim[end];
        arrtrim[end] = temp;
        ++start;
        --end;
    }
    for(var j = 0; j < arrtrim.length; j++) {
        j !== arrtrim.length - 1 ? str = str + arrtrim[j] + ' ' : str = str + arrtrim[j]
    }
    return str;
}
reverseWords2('the sky is blue')

/**
 * 题目：写一个函数 StrToInt，实现把字符串转换成整数这个功能。不能使用 atoi 或者其他类似的库函数。
 * @param {string} str
 * @returns {number}
 */

var strToInt = function(str) {
  str = str.trim();
  let result = 0; 
  if (
    str[0] !== '-'
    && str[0] !== '+'
    && Number(str[0]) !== 0
    && !Number(str[0])
  ) {
    return result;
  }
 
  let flag = 0; 
  let start = 0; 
  if (['+', '-'].includes(str[0])) { 
    start = 1;
  }
  if (str[0] === '-') { 
    flag = 1;
  }
  for (let i = start; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== ' ') { 
      result = result * 10 + Number(str[i]);
    } else {
      break;
    }
  }
  return flag
    ? Math.max(-Math.pow(2, 31), -result)
    : Math.min(Math.pow(2, 31) - 1, result);
};

/**
 * 题目：字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。
 * 比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    if(n < s.length <= 1000 && n >= 1) {
      var arr = s.split('');
      var start = s.slice(0, n);
      var end = s.slice(n, arr.length);
      console.log(start)
      console.log(end)
      console.log(start + end)
      return end + start
    } else {
      return 0
    }
};
reverseLeftWords('abedefg', 2)