import getLastEvent from '../util/getLastEvent.js'
import getSelector from '../util/getSelector.js'
export function injectJsError(){
  // 监听全局未捕获的错误
  window.addEventListener('error', function(event){ // 错误事件对象
    let lastEvent = getLastEvent() // 获取最后一个交互事件
    let log = null;
    if(event.target && (event.target.src || event.target.href)){
      log = {
        kind: 'stability', // 监控指标的大类
        type: 'error', // 小类型
        errorType: 'resourceError', // 资源加载错误
        message: event.message, // 报错信息
        fileName: event.target.src || event.target.href,
        tagName: event.target.tagName,
        selector: lastEvent ? getSelector(lastEvent.path) : '' //代表最后操作的一个元素
      }
    }else{
      log = {
        kind: 'stability', // 监控指标的大类
        type: 'error', // 小类型
        errorType: 'jsError',
        url: '', // 访问哪个路劲报错
        message: event.message, // 报错信息
        fileName: event.filename,
        position: `${event.lineno}行,${event.colno}列`,
        stack: getLines(event.error.stack),
        selector: lastEvent ? getSelector(lastEvent.path) : '' //代表最后操作的一个元素
      } 
    }
    //TODO: send 发送数据操作
  })
  window.addEventListener('unhandledrejection', function(event){
    let lastEvent = getLastEvent() // 获取最后一个交互事件
    let message;
    let filename;
    let line = 0;
    let col = 0;
    let stack = '';
    let reason = event.reason;
    if(typeof reason === 'string'){
      message = reason;
    }else if(typeof reason ==='object'){
      if(reason.stack){
        let matchResult = reason.stack.match(/at\s+(.+):(\d+):(\d+:)/);
        filename = matchResult[1];
        line = matchResult[2];
        col = matchResult[3];
        message = reason.message
      }
      stack = getLines(reason.stack)
    }
    let log = {
      kind :'stability',
      type: 'error',
      errorType: 'promiseError',
      message,
      filename,
      position: `${line}: ${col}`,
      stack,
      selector: lastEvent ? getSelector(lastEvent.path) : ''
    }
    //TODO: send 发送数据操作
  })
  function getLines(stack){
    return stack.split('/n').slice(1).map(i => item.replace(/^\s+at\s+/g, '')).join('^')
  }
}

