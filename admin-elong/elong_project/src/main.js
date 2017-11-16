// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axiosInstance from 'https'

Vue.config.productionTip = false
Vue.prototype.$https=axiosInstance;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axiosInstance,
  // template: '<App/>',
  // components: { App }
  render:h=>h(App)
})
