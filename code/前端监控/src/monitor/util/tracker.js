function getExtraData(){
  return {
    title: document.title,
    url: location.url,
    timestamp: Date.now()
  }
}

class SendTracker {
  constructor(){
    this.url = ''
    this.xhr = new XMLHttpRequest;
  }
  send(data = {}){

    this.xhr.open('POST', this.url, true);
    

    let log = {
      ...data,
      ...getExtraData(),
    }

    let body = JSON.stringify({
      __log__: log
    });
    this.xhr.setRequestHeader('Content-Type', 'application/json');
    this.xhr.setRequestHeader('x-log-apiversion', '0.6.0');
    this.xhr.setRequestHeader('x-log-bodyrawsize', body.length);


    this.xhr.onload = function(){
      console.log(this.xhr.response);
    }
    this.xhr.onerror = function(error){
      console.log(error);
    }

    this.xhr.send(body);

  }
}
export default new SendTracker()