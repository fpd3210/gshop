/*
入口JS
 */
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
import Split from './components/Split/Split'
import loading from './common/imgs/loading.gif'

import './fiters' // 加载过滤器

import './mock/mockServer'

// 注册全局组件标签
Vue.component(Button.name, Button)  // <mt-button>
Vue.component('Split',Split)

// 图片懒加载配置
Vue.use(VueLazyload)
// or with options
Vue.use(VueLazyload, {
  loading
})
new Vue({
  el: '#app',
  render: h => h(App),
  router, //使用上vue-router
  store, // 使用上vuex
})
