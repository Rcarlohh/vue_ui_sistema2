import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.bundle.js'

import VueSweetalert2 from 'vue-sweetalert2'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
