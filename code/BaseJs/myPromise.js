const PENDING = 'PENDING',
      FULFILLED = 'FULFILLED',
      REJECTED = 'REJECTED'

class MyPromise {
  constructor (excutor){
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallback = [];
    this.onRejectedCallback = [];

    function resolve(value){
      if(this.status === PENDING) return;
      this.status = FULFILLED;
      this.value = value;
      // 发布
      this.onFulfilledCallback.forEach(fn => {
        fn();
      })
    }
    function reject(reason){
      if(this.status === PENDING) return;
      this.status = FULFILLED;
      this.reason = reason;
      // 发布
      this.onRejectedCallback.forEach(fn => {
        fn();
      })
    }
    try {
      excutor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFulfilled, onRejected){
    if(this.status === FULFILLED){
      onFulfilled(this.value);
    }

    if(this.status === REJECTED){
      onRejected(this.value);
    } 
    // 收集订阅 onFulfilled 和 onRejected 回调函数
    if(this.status === PENDING){
      this.onFulfilledCallback.push(()=>{
        onFulfilled(this.value);
      })
      this.onRejectedCallback.push(()=>{
        onRejected(this.reason);
      })
    }

  }
}