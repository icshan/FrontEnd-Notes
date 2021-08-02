import tracker from "../util/tracker";
export default function injectXHR(){
  let XMLHttpRequest = window.XMLHttpRequest;
  let oldOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url, async){
    this.logData = { method, url, async };
    return oldOpen.apply(this, arguments);
  }
  let oldSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function (body){
    if(this.logData){
      let startTime = Date.now();
      let handler = (type) => (event)=>{
        let duration = Date.now() - startTime;
        let status = this.status; // 200 500
        let statusText = this.statusText;
        // 发送数据
        tracker({})
      }
      this.addEventListener('load', handler('load'), false);
      this.addEventListener('error', handler('error'), false);
      this.addEventListener('abort', handler('abort'), false);
    }
    return oldSend.apply(this, arguments);
  }
}