// /**
//  *
//  *
//  * @param {*} excutor 执行器函数
//  */
// function MyPromise(excutor){

// }

// // 指定成功和失败的回调函数
// // 返回一个新的promise
// MyPromise.prototype.then = function (){

// }
// // 指定失败的回调函数
// // 返回一个新的promise
// MyPromise.prototype.catch = function (){

// }
// // 返回一个promise，只有所有的promises都成功，才返回成功的，否则失败
// MyPromise.all = function(promises){

// }
// // 返回一个promise，其结果由第一个完成结果来决定
// MyPromise.rase = function(){

// }
// // 返回一个失败promise
// MyPromise.reject = function (){

// }
// // 返回一个指定结果成功promise
// MyPromise.resolve = function (){

// }
// new MyPromise((resolve, reject) => {
//   console.log('执行器函数')
// })

const PENDING = 'PENDING',
      FULFILLED = 'FULFILLED',
      REJECTED = 'REJECT';

class My_Promise{
  constructor(excutor){
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    this.onFulfilledCallbacks = [];
    this.onRejectedCallBacks = [];

    const resolve = (value) => {
      if(this.status === PENDING){
        this.status = FULFILLED;
        this.value = value;
        // 发布
        this.onFulfilledCallbacks.map(fn => {
          fn()
        })
      }
    }
    const reject = (reason) => {
      if(this.status === PENDING){
        this.status = REJECTED;
        this.value = reason;
        // 发布
        this.onRejectedCallBacks.map(fn => {
          fn()
        })
      }
    }
    try {
      excutor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected){
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled :  value =>  value
    onRejected = typeof onRejected === 'function' ? onRejected :  reason =>  {throw Error(reason)}

    let promise2 = new My_Promise((resolve, reject)=>{
      if(this.status === FULFILLED){
        setTimeout(()=>{
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
        
      }
      if(this.status === REJECTED){
        setTimeout(()=>{
          try{
            let x = onRejected(this.value);
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      // 在PENDING状态是，收集失败和成功的回调函数
      if(this.status === PENDING){
        // 订阅
        this.onFulfilledCallbacks.push(()=>{
          try{
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
        this.onRejectedCallBacks.push(()=>{
          try{
            let x = onRejected(this.value);
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
    })


    return promise2;
  }

  catch(error){
    return this.then(null, error);
  }
}

function resolvePromise(promise2, x, resolve, reject){
  if(promise2 === x){
    return reject(new TypeError('promise死循环~')); 
  }
  let isCalled = false;
  if(typeof x === 'object' && x !== null || typeof x === 'function'){
    try {
      let then = x.then;

      if(typeof then === 'function'){ // 是 Promise
        then.call(x, (y)=>{
          if(isCalled) return;
          isCalled = true;
          // 递归，防止嵌套promise
          resolvePromise(y,promise2,resolve, reject);
        },(r)=>{
          if(isCalled) return;
          isCalled = true;
          reject(r)
        })
      }else{
        resolve(x);
      }
    } catch (error) {
      if(isCalled) return;
      isCalled = true;
      reject(error)
    }
  }else{
    resolve(x);
  }
}
