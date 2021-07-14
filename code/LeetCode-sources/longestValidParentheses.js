/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function (s) {
  const expand = (s, l, r) => {
      while (s[l - 1] === '(' && s[r + 1] === ')') {
          l--;
          r++;
      }
      return [l, r];
  };

  const map = {};

  let l = 0,
      r = 0,
      max = 0;
  while (true) {
      // 以括号对为中心
      l = s.indexOf('()', r);
      if (l === -1) break;

      r = l + 1;
      // 向左右两边不断扩大滑动窗口
      [l, r] = expand(s, l, r);

      // 当窗口扩大到最大时，
      // 如果当前窗口的左边界刚好挨着前一个窗口的右边界，那么，
      // 合并这两个窗口，再以这个新合并的窗口为中心，向两侧扩大滑动窗口
      while (l - 1 in map) {
          [l, r] = expand(s, map[l - 1], r);
      }
      // 记录当前窗口的左右边界，key 是窗口右边界，value 是窗口左边界
      map[r] = l;
      // 更新最大窗口
      max = Math.max(max, r - l + 1);
  }

  return max;
};
