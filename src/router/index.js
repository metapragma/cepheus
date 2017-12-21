import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import PartialsSkins from '../components/partials-skins.vue'
import PartialsTextDecoration from '../components/partials-text-decoration.vue'
import PartialsOpacity from '../components/partials-opacity.vue'

Vue.use(Router)

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
    {
      path: '/partials/text-decoration',
      component: PartialsTextDecoration
    },
    {
      path: '/partials/opacity',
      component: PartialsOpacity
    },
  ],
})

// TODO: add a 404 router
