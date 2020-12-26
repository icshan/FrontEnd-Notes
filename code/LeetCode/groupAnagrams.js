/**
 * 
 * @param {*} strs 
 * 题目：给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 示例:
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 * 解题思路：
 * 1. 检查是否为空数组
 * 2. 简历一个长度为26的数组，起始值为0
 * 3. 遍历所有字符串，将字母的出现频率放到数组的对应为治理（利用ascii码）
 * 3. 遍历数组，按照相同字母出现频率进行分组傀儡（使用hashMap）
 * 5. 遍历map，将结果返回
 */
var groupAnagrams = function (strs) {
  if(strs.length == 0){
    return []
  }
  const map = new Map();
  for(const str of strs){
    const charachters = Array(26).fill(0);
    for( let i = 0; i < str.length; i++){
      // 通过ascii给arr做标记 a 是 97
      const ascii = str.charCodeAt(i) - 97;
      charachters[ascii]++;
    }
    const key = charachters.join('');
    if(map.has(key)){
      map.set(key, [...map.get(key), str])
    }else{
      map.set(key, [str])
    }
  }

  const result = [];
  for( const arr of map){
    result.push(arr[1]);
  }

  return result;
}