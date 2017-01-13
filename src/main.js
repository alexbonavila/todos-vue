// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueRouter from 'vue-router'

import Tokens from './components/Tokens.vue'
import Todos from './components/Todos.vue'

const routes = [
    {path: '/tokens', component: Tokens},
    {path: '/todos', component: Todos}
]

const router = new VueRouter({
  routes
})

Vue.use(VueMaterial)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
