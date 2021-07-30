/**
 * @param {number[]} nums
 * @return {number[][]}
*/
var permute = function(nums) {
  let res = [];

  dfs([]);

  function dfs(path){

    if(path.length === nums.length){
      res.push([...path]);
      return
    }
    for(let i=0; i<nums.length; i++){
      if(path.includes(nums[i])){
        continue
      }
      path.push(nums[i]);
      dfs(path);
      path.pop();
    }

  }
  return res;
};