import Vue from './lib/vue.js'

const vm = new Vue({
  el: '#app',
  data:{
    msg: 'hello'
  },

  
  methods: {
    init(){
      console.log('init func !')
    }
  },
})
console.log(vm)