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

/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    let count = 0;
    let reg1 = new RegExp("3|4|7");
    let reg2 = new RegExp("2|5|6|9");
    for(let i=1; i<=N; i++) {
        if(!reg1.test(i) && reg2.test(i)) {
          count++;
        }
    }
    return count;
};
rotatedDigits(11)

/**
 * 题目：给定一组字符，使用原地算法将其压缩。压缩后的长度必须始终小于或等于原数组长度。
 * 数组的每个元素应该是长度为1 的字符（不是 int 整数类型）。在完成原地修改输入数组后，返回数组的新长度。
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  var len = chars.length
  for (var i = 0, j = 0; j < len;) {
      chars[i] = chars[j];
      var temp = j;
      while (j < len && chars[i] === chars[j]) {
          j++
      }
      i++;
      var dis = j - temp;
      if (dis > 1) {
          var distance = Array.from('' + dis);
          for (var k = 0; k < distance.length; k++) {
              chars[i++] = distance[k];
          }
      }

  }
  return i;
};

/**
 * 题目：给定一个字符串来代表一个学生的出勤记录，这个记录仅包含以下三个字符：
 * 'A' : Absent，缺勤
 * 'L' : Late，迟到
 * 'P' : Present，到场
 * 如果一个学生的出勤记录中不超过一个'A'(缺勤)并且不超过两个连续的'L'(迟到),那么这个学生会被奖赏。
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let countA = 0, countL = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] == 'A') {
          if(countA <= 1) {
            countA++
          } else {
            return false;
          }
        }
        if(s[i] == 'L' && s[i+1] == 'L' && s[i+2] == 'L') {
          return false
        }
    }
    if(countA <= 1) {
      return true
    } else {
      return false
    }
};

checkRecord("PPALLL")

/**
 * 题目：请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    const len = s.length;
    let res = 0;
    let temp = '';
    for (let i = 0; i < len; i++) {
        if (temp.indexOf(s[i]) === -1) {
            temp += s[i];
            res = Math.max(res, temp.length)
        } else {
            temp = temp.slice(temp.indexOf(s[i]) + 1);
            temp += s[i]
        }
    }
    return res;
};

var lengthOfLongestSubstring1 = function(s) {
    if (s.length < 1) return s.length;
    const len = s.length;
    let maxLength = 1, head = 0, tail = 1;
    while(tail < len) {
        const index = s.substring(head, tail).indexOf(s[tail]);
        if (index !== -1 && head < tail) {
            head += index + 1;
            tail++
        } else {
            tail++;
            if (tail - head > maxLength) {maxLength = tail - head}
        }
    }
    return maxLength
}

const lengthOfLongestSubstring2 = function(s) {
    const len = s.length;
    const map = {};
    let left = 0, right = 0, res = 0;
    while (left < len && right < len) {
        if (!map[s[right]]) {
            map[s[right]] = true;
            res = Math.max(res, right - left + 1);
            right++;
        } else {
            map[s[left]] = false;
            left++;
        }
    }
    return res;
}

const lengthOfLongestSubstring3 = function(s) {
  const len = s.length;
  const map = new Map();
  let left = 0, right = 0, res = 0;
  while(left < len && right < len) {
      if (map.has(s[right]) && map.get(s[right]) >= left) {
          left = map.get(s[right]) + 1;
      }
      res = Math.max(res, right-left+1);
      map.set(s[right], right);
      right++
  }
  return res;
}