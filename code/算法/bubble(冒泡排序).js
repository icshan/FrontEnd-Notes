/**
 * Author： kester
 * 
 * 冒泡排序：Bubble Sort
 * 
 * @param {*} origin
 * 
 * 解题思路：让数组的当前项和后一项比较，如果当前项比后一项大，则两项交换位置
 */
var Bubble = function ( origin ) {
  let taget = [];
  // 对比的次数为length-1次，因为只需要将length-1个数排在数组的后面就行了
  for( let i = 0; i < origin.length-1; i++){
    // 控制每一轮比较的次数
    for( let j = 0; j < origin,length - i - 1; j++){
      if( origin[j] > origin[j+1] ){
        [ origin[j], origin[j+1] ] = [ origin[j+1], origin[j] ]
      }
    }

  }
  return taget
}
// TEST
var arr = [2, 3, 45, 66, 78, 33];
console.log(Bubble(arr))