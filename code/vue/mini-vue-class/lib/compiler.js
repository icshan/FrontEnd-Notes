import Watcher from './watcher.js'
export default class Compiler{
  constructor(vm){
    this.el = vm.$el;
    this.vm = vm;
    this.methods = vm.$methods;
    this.compile(vm.$el);
  }
  /** 编译模板 */
  compile(el){
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach(node => {
      
      if(this.isTextNode(node)){
        // 文本节点
        this.compileText(node)
      }else if(this.isElementNode(node)){
        // 元素节点
        this.compileElement(node)
      }
      // 有子节点，递归调用
      if(node.childNodes && node.childNodes.length > 0){
        this.compile(node);
      }
      

      
    })
  }
  /** 编译元素节点 */
  compileElement(node){
    if(node.attributes.length > 0){
      // 遍历元素节点的所有属性
      Array.from(node.attributes).forEach(attr => {
        const attrName = attr.name; // v-module='msg'  v-html  v-text  v-on:click
        if(this.isDirective(attrName)){
          let directiveName = attrName.indexOf(':') > -1 ? attrName.substr(5) : attrName.substr(2);
          let key = attr.value; // msg
          // 更新元素节点
          this.update(node, key, directiveName);
        }

      })
    }
  }
  /** 更新元素节点 */
  update(node, key, directiveName){
    // v-module v-text v-html v-on:click
    const updataFn = this[ directiveName + 'Updater' ];
    updataFn && updataFn.call(this, node, this.vm[key], key, directiveName);
  }
  /** 解析v-text */
  textUpdater(node, value, key){
    node.textContent = value;
    new Watcher(this.vm, key, (newValue)=>{
      node.textContent = newValue;
    })
  }
  /** 解析v-model*/
  modelUpdater(node, value, key){
    node.value = value;
    new Watcher(this.vm, key, (newValue)=>{
      node.value = newValue;
    })
    node.addEventListener('input', () => {
      this.vm[key] = node.value;
    })
  }
  htmlUpdater(node, value, key){
    node.innerHTML = value;
    new Watcher(this.vm, key, (newValue)=>{
      node.innerHTML = newValue;
    })
  }
  clickUpdater(node, value, key, directiveName){
    node.addEventListener(directiveName, this.methods[key]);
  }

  /** 编译文本节点 */
  compileText(node){
    // 拿到模板表达是  {{msg}}
    const reg = /\{\{(.+?)\}\}/;
    const value = node.textContent;

    if(reg.test(value)){
      const key = RegExp.$1.trim(); // msg
      node.textContent = value.replace(reg, this.vm[key]);
      // 新增一个watcher
      new Watcher(this.vm, this.key, (newValue)=>{
        node.textContent = newValue;
      })  
    }
  }
  /**判断是否是文本节点 */
  isTextNode(node){
    return node.nodeType === 3;
  }
  /**判断是否是元素节点 */
  isElementNode(){
    return node.nodeType === 1;
  }
  // 是否是指令
  isDirective(attrName){
    return attrName.startsWith('v-');
  }
}