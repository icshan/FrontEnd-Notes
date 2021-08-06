class SyncHook { // 同步钩子
  constructor(args){
    this.task = [];
  }
  tap(name, task){
    this.task.push(task);
  }
  call(...args){
    this.task.forEach(fn => {
      fn(...args);
    })
  }
}
// 同步 带保险 中途可中断
class SyncBailHook { // 同步钩子
  constructor(args){
    this.task = [];
  }
  tap(name, task){
    this.task.push(task);
  }
  call(...args){
    let ret; // 当前这个函数的返回值
    let index = 0;
    do{
      ret = this.task[index++](...args)
    }while(ret === undefined && this.task.length > index);
  }
}
// 同步 向下传参
class SyncWaterfallHook { // 同步钩子
  constructor(args){
    this.task = [];
  }
  tap(name, task){
    this.task.push(task);
  }
  call(...args){
    let [first, ...others] = this.task;
    let ret = first(...args);
    others.reduce((a,b)=>{
      return b(a)
    }, ret)
  }
}
 // 异步钩子 并行
class AsyncParallelHook {
  constructor(args){
    this.task = [];
  }
  tapAsync(name, task){
    this.task.push(task);
  }
  callAsync(...args){
    let finalCallback = args.pop();
    let index = 0;

    function done(){
      index++;
      if(index === this.task.length){
        finalCallback();
      }
    }
    this.task.forEach(task => {
      task(...args, done)
    })
  }
}
// 异步钩子 串行
class AsyncSeriesHook {
  constructor(args){
    this.task = [];
  }
  tapAsync(name, task){
    this.task.push(task);
  }
  callAsync(...args){
    let index = 0;
    let finalCallback = args.pop();
    let next = ()=> {
      if(this.task.length === index) return finalCallback();
      let task = this.task[index++];
      task(...args, next)
    }
    next();
  }
}
let hook = new AsyncSeriesHook(['name']);
let total = 0;
hook.tapAsync('react', (name, cb)=>{
  setTimeout(()=>{
    console.log('react', name);
    cb()
  }, 1000)
})
hook.tapAsync('vue', (name, cb)=>{
  setTimeout(()=>{
    console.log('vue', name)
    cb()
  }, 1000)
})
hook.callAsync('stu', ()=>{
  console.log('end')
})
