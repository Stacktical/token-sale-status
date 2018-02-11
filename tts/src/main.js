// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// eslint-disable-next-line
import Promise from 'bluebird'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueBootstrap from 'bootstrap-vue'

import 'bourbon/core/_bourbon.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/style/main.scss'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueBootstrap)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
