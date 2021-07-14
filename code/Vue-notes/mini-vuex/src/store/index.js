import Vue from "vue";
import Vuex from "./vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 存储状态
  state: {
    num: 1
  },
  // 获取状态
  getters: {
    getNum(state) {
      return state.num;
    }
  },
  // 同步更新状态
  mutations: {
    incre(state, payload) {
      state.num += payload;
    },
    minus(state, payload) {
      state.num -= payload;
    }
  },
  // 异步更新状态
  actions: {
    asyncIncre({ commit }, payload) {
      setTimeout(() => {
        commit("incre", payload);
      }, 1000);
    }
  }
});
