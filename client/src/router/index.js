import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { conditionalRoute: true },
    },
  ],
});
