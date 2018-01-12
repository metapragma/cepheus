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
import PartialsMaxWidths from '../components/partials-max-widths.vue'
import PartialsLists from '../components/partials-lists.vue'
import PartialsLinks from '../components/partials-links.vue'
import PartialsHeights from '../components/partials-heights.vue'
import PartialsGradients from '../components/partials-gradients.vue'
import PartialsCoordinates from '../components/partials-coordinates.vue'
import PartialsCode from '../components/partials-code.vue'
import PartialsBackgroundPosition from '../components/partials-background-position.vue'
import PartialsFontFamily from '../components/partials-font-family.vue'
import PartialsHovers from '../components/partials-hovers.vue'
import PartialsFlexbox from '../components/partials-flexbox.vue'
import PartialsAspectRatios from '../components/partials-aspect-ratios.vue'
import PartialsBackgroundSize from '../components/partials-background-size.vue'
import PartialsDebug from '../components/partials-debug.vue'
import PartialsDisplay from '../components/partials-display.vue'
import PartialsFontStyle from '../components/partials-font-style.vue'
import PartialsFontWeight from '../components/partials-font-weight.vue'
import PartialsLineHeight from '../components/partials-line-height.vue'
import PartialsNegativeMargins from '../components/partials-negative-margins.vue'
import PartialsSpacing from '../components/partials-spacing.vue'
import PartialsTextTransform from '../components/partials-text-transform.vue'
import PartialsTypeScale from '../components/partials-type-scale.vue'
import PartialsTypography from '../components/partials-typography.vue'
import PartialsWidths from '../components/partials-widths.vue'
import PartialsFloats from '../components/partials-floats.vue'
import PartialsClears from '../components/partials-clears.vue'
import PartialsTables from '../components/partials-tables.vue'
import PartialsUtilities from '../components/partials-utilities.vue'
import PartialsNested from '../components/partials-nested.vue'
import PartialsBaselineRhythm from '../components/partials-baseline-rhythm.vue'
// debug, forms, nested

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
    {
      path: '/partials/max-widths',
      component: PartialsMaxWidths
    },
    {
      path: '/partials/lists',
      component: PartialsLists
    },
    {
      path: '/partials/links',
      component: PartialsLinks
    },
    {
      path: '/partials/heights',
      component: PartialsHeights
    },
    {
      path: '/partials/gradients',
      component: PartialsGradients
    },
    {
      path: '/partials/coordinates',
      component: PartialsCoordinates
    },
    {
      path: '/partials/code',
      component: PartialsCode
    },
    {
      path: '/partials/font-family',
      component: PartialsFontFamily
    },
    {
      path: '/partials/background-position',
      component: PartialsBackgroundPosition
    },
    {
      path: '/partials/hovers',
      component: PartialsHovers
    },
    {
      path: '/partials/flexbox',
      component: PartialsFlexbox
    },
    {
      path: '/partials/aspect-ratios',
      component: PartialsAspectRatios
    },
    {
      path: '/partials/background-size',
      component: PartialsBackgroundSize
    },
    {
      path: '/partials/debug',
      component: PartialsDebug
    },
    {
      path: '/partials/display',
      component: PartialsDisplay
    },
    {
      path: '/partials/font-style',
      component: PartialsFontStyle
    },
    {
      path: '/partials/font-weight',
      component: PartialsFontWeight
    },
    {
      path: '/partials/line-height',
      component: PartialsLineHeight
    },
    {
      path: '/partials/negative-margins',
      component: PartialsNegativeMargins
    },
    {
      path: '/partials/spacing',
      component: PartialsSpacing
    },
    {
      path: '/partials/text-transform',
      component: PartialsTextTransform
    },
    {
      path: '/partials/type-scale',
      component: PartialsTypeScale
    },
    {
      path: '/partials/typography',
      component: PartialsTypography
    },
    {
      path: '/partials/widths',
      component: PartialsWidths
    },
    {
      path: '/partials/floats',
      component: PartialsFloats
    },
    {
      path: '/partials/clears',
      component: PartialsClears
    },
    {
      path: '/partials/tables',
      component: PartialsTables
    },
    {
      path: '/partials/utilities',
      component: PartialsUtilities
    },
    {
      path: '/partials/nested',
      component: PartialsNested
    },
    {
      path: '/partials/baseline-rhythm',
      component: PartialsBaselineRhythm
    },
  ]
})
