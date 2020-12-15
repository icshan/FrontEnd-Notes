/**
 * Author： kester
 * 
 * 插入排序: Insert Sort
 * 
 * @param {*} origin
 * 
 * 解题思路：抽牌方式，随机抽取一张牌，然后将没有抽取的牌依次和手里的牌对比较 
 * 假设现在有n张牌
 * 1、随机抽取一张牌放入
 * 2、将剩余的牌依次和手中的A牌对比较，比手中A的大，放在当前牌A的后面，否者依次和手中的牌前面的继续比较
 * 3、在依次和手中牌前面对比较的时候，当手中牌都比比较的牌大的时候，就直接插入最前面
 */
var Insert = function ( origin ) {
  let target = [];
  // 随机放入一张牌，这里默认第一张
  target.push( origin[0] );
  // 从第二张开始遍历
  for( let i = 1; i < origin.length; i++){
    // 遍历手中的牌，进行作比较
    for( let j = target.length; j >= 0; j-- ){
      if( target[j] < origin[i] ){
        target.splice(j+1, 0, origin[i]);
        break;
      }
      j == 0 && target.unshift(origin[i])
    }
  }

  return target
}
// TEST
var arr = [2, 3, 45, 66, 78, 33];
console.log(Insert(arr))