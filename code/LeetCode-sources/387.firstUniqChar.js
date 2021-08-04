var firstUniqChar = function(s) {
  const map = {};
  for(let v of s) {
    map[v] = (map[v] || 0) + 1;
  }
  for(let i = 0; i < s.length; i++) {
    if(map[s[i]] === 1) return i;
  }
  return -1;
};
