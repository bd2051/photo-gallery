import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import InfiniteLoading from 'vue-infinite-loading'
import store from '../src/store.js'
import VueScrollLock from 'vue-scroll-lock'

Vue.config.productionTip = false
Vue.use(InfiniteLoading, {
  props: {
      spinner: 'circles'
  },
  slots: {
    error: 'Усп, Что-то пошло не так :(',
    noMore: 'Все фотки загружены :)'
  },
})
Vue.use(VueScrollLock)
new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
