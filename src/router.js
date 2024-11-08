import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Portfolio from './components/Portfolio.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
});
