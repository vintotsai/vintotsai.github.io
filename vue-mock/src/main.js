// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
const data = require('../mock/News.js')
import _ from 'lodash'

Vue.config.productionTip = true

const log = console.log.bind(console)
window.log = log

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
