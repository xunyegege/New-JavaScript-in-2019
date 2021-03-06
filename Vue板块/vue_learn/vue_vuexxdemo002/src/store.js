import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //这边是基本变量
    num: 99,
    pp: 999,
    str: ''
  },
  mutations: {
    //这边是方法的真正实现
    INCREASE: function (state, data) {
      state.num++
      console.log("我是mutations" + data)
    },
    DECREASE: function (state) {
      state.num--
    },
    strUpdate: function (state, data) {
      state.str = data;
      alert(state.str);
    }

  },
  actions: {
    //这边是方法的传达
    increase: function ({ commit }, data) {
      commit("INCREASE", data)
      console.log(data)
    },
    decrease: function ({ commit }) {


      commit("DECREASE")
    },
    strUpdate: function ({ commit }, data) {
      commit("strUpdate", data)
    }



  },
  getters: {
    //这边是计算属性
    numType: function (state) {
      return state.num % 2 === 0 ? '偶数' : '奇数'
    }

  }
})
