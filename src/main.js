import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import InfiniteLoading from 'vue-infinite-loading'
import store from '../src/store.js'

Vue.config.productionTip = false
Vue.use(InfiniteLoading, { /* options */ })
new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
