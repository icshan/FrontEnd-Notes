/**
 * Auth： kester
 * @param {*} origin 
 * 解题思路：
 * 1、定义一个数组，装载排序后的元素
 * 2、找出中间项mid，在原数组中移除，定义左右数组leftArr、rightArr，将小于mid的元素放入leftArr中，大于mid的元素放入rightArr中
 * 3、递归，依次在将leftArr和rightArr重复第2操作
 * 4、合并 mid leftArr rightArr 到 taget 中， 组成新的排序后的数组
 * 5、当 leftArr 或者 rightArr 数组的 length 小于等于1，停止递归
 */

var Quick = function ( origin ) {
  if( origin.length <= 1) return origin
  let target = [],
      midIndex = Math.floor( origin.length / 2 ),
      mid = origin.splice(midIndex, 1)[0],
      leftArr = [],
      rightArr = [];
  for( let i = 0; i < origin.length; i++){
    origin[i] < mid ? leftArr.push( origin[i] )
                    : rightArr.push( origin[i] );
  }
  target = Quick(leftArr).concat(mid, Quick(rightArr));
  return target
}
// TEST
var arr = [2, 3, 45, 66, 78, 33];
console.log(Quick(arr))