/**
 * Auth: kester
 * @param {*} obstacleGrid 
 * @return {number}
 * 
 * 解题思路：动态规划
 * 1、最优子结构
 * 2、边界
 * 3、状态转移公式
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // 行数
  let n = obstacleGrid.length;
  if (!n) {
    return 0;
  }
  // 列数
  let m = obstacleGrid[0].length;
  // 起点或终点为障碍物
  if (obstacleGrid[0][0] === 1 || obstacleGrid[n - 1][m - 1] === 1) {
    return 0;
  }
  // 记录到达每个位置的路径可能数
  var rode = [];
  // 遍历每一行
  for (let i = 0; i < n; i++) {
    rode[i] = []; // 遍历每一行的每个元素
    for (let j = 0; j < m; j++) {
      // 若某节点是障碍物，则通向该节点的路径数量为0
      if (obstacleGrid[i][j] === 1) {
        rode[i][j] = 0;
      } else if (i === 0) {
        // 若是第一行 每个节点是否能通过都依赖它左方节点
        rode[i][j] = rode[i][j - 1] === 0 ? 0 : 1;
      } else if (j === 0) {
        // 若是第一列 每个节点是否能通过都依赖它上方节点
        rode[i][j] = rode[i - 1][j] === 0 ? 0 : 1;
      } else {
        // 否则递归
        rode[i][j] = rode[i - 1][j] + rode[i][j - 1];
      }
    }
  }
  return rode[n - 1][m - 1];
};
