import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/src/jquery.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import router from './router'

new Vue({
  router,               // Add this line
  render: h => h(App)
}).$mount('#app')