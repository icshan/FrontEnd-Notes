import Dep from './dep.js'
/**
 * @export
 * @class Observer
 */
export default class Observer{
  constructor(vm){
    this.vm = vm;
  }
  /**递归遍历 data 里面所有属性 */
  traverse(data){
    if (!data || typeof data !== 'object') return;

    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key]);
    })
  }
  /**给传入的 data 设置 getter/setter */
  defineReactive(obj, key, val){
    this.traverse(val);
    const _self = this;
    const dep = new Dep();

    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get(){
        // 当前的 Dep.target 就是当前的 watcher
        Dep.target && dep.addSub(Dep.target);
        return  val;
      },
      set(newValue){
        if(newValue === val) return;
        val = newValue;
        _self.traverse(newValue); // 设置的时候可能设置了一个对象，也要去给属性添加getter和setter
        dep.notify();
      }
    })
  }
  
}