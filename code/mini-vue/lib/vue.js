import Observer from './observer.js'
import Compiler from './compiler.js'
/**
 * Vue的构造函数，包括接受各种配置参数等 
 * @export
 * @class Vue
 */

export default class Vue {
  constructor (options = {}) {
    this.$options = options;
    this.$data = options.data;
    this.$methods = options.methods;
    // 初始化根元素
    this.initRootElement(options)
    
    // 将options.data代理到vue实例上
    this._proxyData(this.$data)

    // 实例化Observer对象，监听数据变化
    new Observer(this.$data);

    // 实例化Compiler对象，解析指令和模板表达式
    new Compiler(this);
  }
  /**
   * 获取根元素，并存储到vue实例上，检查是否传入的el是合格
   */
  initRootElement (options) {
    if(typeof options.el === 'string'){
      this.$el = document.querySelector(options.el);
    } else if(options.el instanceof HTMLElement){
      this.$el = options.el;
    }

    if(!this.$el){
      throw new Error('传入的el不合规，请传入css selector 或者 HTMLElement')
    }
  }
  _proxyData (data) {
    let _this = this
    Object.keys(data).forEach(key => {
      // 将data代理到this（vue实例）上
      Object.defineProperty(_this, key, {
        enumerable: true,
        configurable: true,
        get(){
          return data[key]
        },
        set(newData){
          if(newData === data[key]) return;
          data[key] =  newData;
        }
      })
    })
  }
}