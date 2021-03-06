import Vue from 'vue'
import VueFire from 'vuefire'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueFire)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
