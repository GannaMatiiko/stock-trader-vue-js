import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { routes } from './routes'
import { store } from './store/store'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://vue-stock-trader-by-ann-default-rtdb.firebaseio.com/'

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.filter('currency', (value) => {
  return `$${value.toLocaleString()}`
})

new Vue({
  el: '#app',
  vuetify,
  router,
  store,
  render: h => h(App)
})
