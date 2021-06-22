/**
 * 函数节流
 * 事件被触发，n秒之内只执行一次事件处理函数
 * 4n秒内连续触发，能触发4次
 *
 * @param {*} fn
 * @param {*} delay
 */
function throttle (fn, delay) {
  var t = null,
      begin = new Date().getTime();

  return function () {
    var _self = this,
        arg = arguments,
        cur = new Date().getTime();

    clearTimeout(t);

    if(cur - begin >= delay){
      fn.aplly(_self, arg);
      begin = cur;
    }else{
      t = setTimeout(function(){
        fn.aplly(_self, arg);
      }, delay)
    }
  }
}