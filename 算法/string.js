/**
 * 题目：请实现一个函数，将一个字符串中的每个空格替换成“%20”。
 * 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 * @param {string} str 
 * @returns {string}
 */
function replaceSpace(str) {
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
 * 题目：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let res = false, left = -1, right = s.length
  while (left < right) {
      if (s[++left] !== s[--right]) {
          res = true
          break
      }
  }
  return res ? isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1) : true
};
function isPalindrome(s, left, right) {
  while (left < right) {
      if (s[left++] !== s[right--]) return false
  }
  return true
}
validPalindrome('abc');

/**
 * 题目：给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0, right = str.length - 1;
    while(left < right) {
        if(str[left] !== str[right]) {
          return false
        }
        left++;
        right--
    }
    return true
};
isPalindrome('1234  sdjjj ***')

/**
 * 题目：将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1) return s;
    const n = 2*numRows -2; //每个周期的字符串长度
    const rows = new Array(numRows).fill(''); //新建数组，每一行字符串是数组的一个元素
    for(let i = 0; i < s.length; i++) {
        let x = i % n;
        rows[Math.min(x, n-x)] += s[i];
    }
    return rows.join('');
};

/**
 * 题目：给定一个单词列表，每个单词可以写成每个字母对应摩尔斯密码的组合。
 * 例如，"cab" 可以写成 "-.-..--..."，(即 "-.-." + ".-" + "-..." 字符串的结合)。
 * 我们将这样一个连接过程称作单词翻译。返回我们可以获得所有词不同单词翻译的数量。
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const dectionary = {
      "a": ".-",
      "b": "-...",
      "c": "-.-.",
      "d": "-..",
      "e": ".",
      "f": "..-.",
      "g": "--.",
      "h": "....",
      "i": "..",
      "j": ".---",
      "k": "-.-",
      "l": ".-..",
      "m": "--",
      "n": "-.",
      "o": "---",
      "p": ".--.",
      "q": "--.-",
      "r": ".-.",
      "s": "...",
      "t": "-",
      "u": "..-",
      "v": "...-",
      "w": ".--",
      "x": "-..-",
      "y": "-.--",
      "z": "--.."
  }
  let set = new Set();
  for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let word_templete = ''
      for(let j = 0; j < word.length; j++) {
          word_templete += dectionary[word[j]]
      }
      set.add(word_templete);
  }
  return set.size;
};

/**
 * 题目：字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function(s1, s2) {
    if(s1.length === s2.length) {
      return s1.repeat(2).includes(s2);
    } else {
      return false
    }
};

isFlipedString('waterbottle', 'erbottlewat');