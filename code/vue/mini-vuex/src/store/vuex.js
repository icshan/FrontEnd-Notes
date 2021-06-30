let Vue;
class Store {
  constructor(options) {
    // eslint-disable-next-line no-console
    console.log("==Store==", options);
    this.vm = new Vue({
      data: {
        state: options.state
      }
    });
    // getters
    let getters = options.getters || {};
    this.getters = {};
    Object.keys(getters).forEach(getterName => {
      Object.defineProperty(this.getters, getterName, {
        get: () => {
          return getters[getterName](this.state);
        }
      });
    });
    // mutations
    let mutations = options.mutations || {};
    this.mutations = {};
    Object.keys(mutations).forEach(mutationName => {
      this.mutations[mutationName] = payload => {
        mutations[mutationName](this.state, payload);
      };
    });
    // actions
    let actions = options.actions || {};
    this.actions = {};
    Object.keys(actions).forEach(actionName => {
      this.actions[actionName] = payload => {
        actions[actionName](this, payload);
      };
    });
  }
  // 异步
  dispatch(type, payload) {
    this.actions[type](payload);
  }
  // 同步
  commit = (type, payload) => {
    this.mutations[type](payload);
  }
  get state() {
    return this.vm.state;
  }
}
const install = v => {
  Vue = v;
  // eslint-disable-next-line no-console
  // console.log("==install==", Vue, options);
  Vue.mixin({
    //需要在每个组件上都添加一个$stroe
    beforeCreate() {
      // eslint-disable-next-line no-console
      // console.log("==mixin==", this.$options, this.$options.name);
      // 判断是否是根节点
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store;
      } else {
        this.$store = this.parent && this.parent.$store;
      }
    }
  });
};
export default {
  install,
  Store
};
