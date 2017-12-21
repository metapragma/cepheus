import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import PartialsSkins from '../components/partials-skins.vue'
import PartialsTextDecoration from '../components/partials-text-decoration.vue'
import PartialsOpacity from '../components/partials-opacity.vue'
import PartialsLetterSpacing from '../components/partials-letter-spacing.vue'
import PartialsBorderColors from '../components/partials-border-colors.vue'

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
    {
      path: '/partials/letter-spacing',
      component: PartialsLetterSpacing
    },
    {
      path: '/partials/border-colors',
      component: PartialsBorderColors
    },
  ],
})

// TODO: add a 404 router
