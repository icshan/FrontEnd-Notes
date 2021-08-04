/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split(' ');
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(reverseString(arr[i].split('')).join(''))
  }
  return res.join(' ');
};
var reverseString = function (s) {
  let start = 0,
    end = s.length - 1;

  while (start < end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
  return s
};