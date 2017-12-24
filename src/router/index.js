import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import PartialsSkins from '../components/partials-skins.vue'
import PartialsTextDecoration from '../components/partials-text-decoration.vue'
import PartialsOpacity from '../components/partials-opacity.vue'
import PartialsLetterSpacing from '../components/partials-letter-spacing.vue'
import PartialsBorders from '../components/partials-borders.vue'
import PartialsBorderColors from '../components/partials-border-colors.vue'
import PartialsBorderWidths from '../components/partials-border-widths.vue'
import PartialsBorderStyles from '../components/partials-border-styles.vue'
import PartialsBorderRadius from '../components/partials-border-radius.vue'
import PartialsBoxShadow from '../components/partials-box-shadow.vue'
import PartialsZIndex from '../components/partials-z-index.vue'
import PartialsWordBreak from '../components/partials-word-break.vue'
import PartialsWhiteSpace from '../components/partials-white-space.vue'
import PartialsVerticalAlign from '../components/partials-vertical-align.vue'
import PartialsTextAlign from '../components/partials-text-align.vue'
import PartialsSkinsPseudo from '../components/partials-skins-pseudo.vue'
import PartialsRotations from '../components/partials-rotations.vue'
import PartialsPosition from '../components/partials-position.vue'
import PartialsOverflow from '../components/partials-overflow.vue'
import PartialsOutlines from '../components/partials-outlines.vue'

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
      path: '/partials/borders',
      component: PartialsBorders
    },
    {
      path: '/partials/border-colors',
      component: PartialsBorderColors
    },
    {
      path: '/partials/border-widths',
      component: PartialsBorderWidths
    },
    {
      path: '/partials/border-styles',
      component: PartialsBorderStyles
    },
    {
      path: '/partials/border-radius',
      component: PartialsBorderRadius
    },
    {
      path: '/partials/box-shadow',
      component: PartialsBoxShadow
    },
    {
      path: '/partials/z-index',
      component: PartialsZIndex
    },
    {
      path: '/partials/word-break',
      component: PartialsWordBreak
    },
    {
      path: '/partials/white-space',
      component: PartialsWhiteSpace
    },
    {
      path: '/partials/vertical-align',
      component: PartialsVerticalAlign
    },
    {
      path: '/partials/text-align',
      component: PartialsTextAlign
    },
    {
      path: '/partials/skins-pseudo',
      component: PartialsSkinsPseudo
    },
    {
      path: '/partials/rotations',
      component: PartialsRotations
    },
    {
      path: '/partials/position',
      component: PartialsPosition
    },
    {
      path: '/partials/overflow',
      component: PartialsOverflow
    },
    {
      path: '/partials/outlines',
      component: PartialsOutlines
    },
  ]
})

// TODO: add a 404 router
