/**
 * 数组扁平化
 * 题目：[1,[2,[3,[4,5]]],6]
 * tip:
 *
 * 1. arr.flat()
 *
 * 2.利用正则表达式
 * let ret = JSON.stringify(arr).replace(/\[|\]/g, '').split(',')
 *
 * 3.正则的改良版
 * JSON.parse('['+ret+']')
 *
 * 4.递归来实现
 *  - 新建一个数组
 *  - 对arr进行遍历
 *
 * 5.利用reduce来实现
 */

// 递归
function flatten(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(i)) {
      flatten(i);
    } else {
      newArr.push(i);
    }
  }
}

// reduce
/**
 *
 * @param {*} arr
 * @returns
 */
function flattenForReduce(arr) {
  return arr.reduce(
    (pre, cur) => pre.concat(Array.isArray(cur) ? flattenForReduce(cur) : cur),
    []
  );
}

// 衍生出一道题  计算数组中每个元素出现的个数
let strArr = ["aa", "bb", "cc", "dd", "aa"];

let strNum = strArr.reduce((pre, cur) => {
  if (cur in pre) {
    pre[cur]++;
  } else {
    pre[cur] = 1;
  }
  return pre
}, {});
