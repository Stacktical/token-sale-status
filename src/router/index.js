import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:_tokenAddress/:_icoAddress',
      name: 'Address',
      props: true,
      component: Home
    }
  ]
})
