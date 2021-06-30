import Dep from './dep.js'
export default class Watcher {
  /**
   *Creates an instance of Watcher.
   * @param {*} vm  vue的实例
   * @param {*} key data中的属性
   * @param {*} cb  负责更新视图的回调函数
   * @memberof Watcher
   */
  constructor(vm, key, cb){
    this.vm = vm;
    this.key = key;
    this.cb = cb;
    
    Dep.target = this;
    // 触发get方法，在get方法里会去做一些操作？
    this.oldValue = vm[key];

    Dep.target = null;
  }
  /** 当数据变化的时候，更新视图*/
  update(){
    let newValue = this.vm[this.key];
    if(this.oldValue === newValue) return;

    this.cb && this.cb(newValue);
  }
}