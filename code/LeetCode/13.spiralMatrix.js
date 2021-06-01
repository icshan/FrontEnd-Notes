/**
 * 
 * @param {*} strs 
 * 题目：给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * 解题思路：
 * 1. 如果数组为空，返回空数组
 * 2. 定义4个边界以及当前的方向 top right left bottom  direction
 * 3. 当左边界小于等于有边界，并且上边界小于等于下边界是，执行while循环，按照右下左上的顺序依次将路径上的字符添加到结果当中
 * 4. while循环结束后，返回结果
 *  [[1,2,3],
 *   [4,5,6],
 *   [7,8,9]]
 */
function spiralMatrix(matrix){
  if(matrix.length === 0) return []
  let top = 0;
  let bottom = matrix.length -1;
  let left = 0;
  let right = matrix[0].length - 1;

  let direction = 'right';
  let result = [];

  while(left <= right && top <= bottom){
    if(direction == 'right'){
      for(let i = left; i <= right; i++){
        result.push(matrix[top][i])
      }
      top++;
      direction = "down"
    }
    else if(direction == 'down'){
      for(let i = top; i <= bottom; i++){
        result.push(matrix[i][bottom])
      }
      right--;
      direction = 'left'
    }
    else if(direction == 'left'){
      for(let i = right; i >= left; i--){
        result.push(matrix[bottom][i])
      }
      bottom--;
      direction = 'top'
    }
    else if(direction == 'left'){
      for(let i = botton; i >= top; i--){
        result.push(matrix[i][left])
      }
      left++;
      direction = 'right'
    }
  }

  return result;
}