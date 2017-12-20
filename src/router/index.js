import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello.vue';
import PartialsSkins from '../components/partials-skins.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/partials/skins',
      component: PartialsSkins
    },
  ],
});

// TODO: add a 404 router
