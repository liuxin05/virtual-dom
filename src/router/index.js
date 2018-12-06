import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/index.vue'
import realDom from '@/views/virtual-dom/real-dom.vue'
import virtualDom from '@/views/virtual-dom/virtual-dom.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/real',
      name: 'realDom',
      component: realDom
    },
    {
      path: '/virtual',
      name: 'virtualDom',
      component: virtualDom
    }
  ]
})
