/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {

  const sLen = s.length;
  const tLen = t.length;
  if(sLen !== tLen ) {
      return false;
  }
  const obj = {};
  for(let i = 0 ; i < sLen ; i++){
      const currentS = s[i];
      const currentT = t[i];
      obj[currentS] ? obj[currentS]++ : obj[currentS] = 1;
      obj[currentT] ? obj[currentT]-- : obj[currentT] = -1;
  }
  return Object.values(obj).every(v=>v===0);
};