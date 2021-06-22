/**
 * 防抖函数
 * 
 * @param {*} fn          防抖的回调
 * @param {*} time        延迟时间
 * @param {*} triggerNow  首次是否触发
 * 
 * 函数防抖： 在开发当中经常会遇到一些事件频繁触发（鼠标，resize，input，scroll等）
 * 在事件触发N秒后执行一次
 * tip: 特殊情况，首次是否需要触发
 */

function debounce (fn, time, triggerNow) {
  var t = null,
      res;

  var debounced =  function(){
    var _self = this,
        args = arguments;

    if(t) clearTimeout(t);

    if(triggerNow){
      var exec = !t;
      t = setTimeout(function(){
        t = null;
      },time);
      if(exec){
        res = fn.apply(_self, args);
      }
    }else{
      t = setTimeout(function(){
        res = fn.apply(_self, args);
      },time);
    }
    return res;
  }
  debounced.remove = function(){
    clearTimeout(t);
    t = null;
  }
  return debounced
}