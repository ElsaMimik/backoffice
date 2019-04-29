import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/main'
import store from '@/store/main'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
