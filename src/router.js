import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      children: [
        {
          path: 'us',
          name: 'us',
          component: () => import(/* webpackChunkName: "about-us" */ './views/about-us.vue'),
        },
        {
          path: 'you',
          name: 'you',
          component: () => import(/* webpackChunkName: "about-you" */ './views/about-you.vue'),
        },
      ],
    }
  ]
})
