/**
 * 高精度减法
 *
 * @param {*} arg1 
 * @param {*} arg2
 */
function accSubtr(arg1,arg2){
  let lena = arg1.length,
      lenb = arg2.length,
      a = arg1.split(''),
      b = arg2.split(''),
      c = []
  for(let i = 0; i < lena; i++){
    if(a[i] < b[i]){ // 不够减
      a[i+1]--;      // 向高位借1
      a[i]+=10;      // 借1当10
    }
    c[i] = a[i] - b[i];  // 同位相减
  }
  // 。。。。。
}